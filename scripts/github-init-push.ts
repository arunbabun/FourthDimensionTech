import { Octokit } from '@octokit/rest';
import * as fs from 'fs';
import * as path from 'path';

let connectionSettings: any;

async function getAccessToken() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) throw new Error('X_REPLIT_TOKEN not found');

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    { headers: { 'Accept': 'application/json', 'X_REPLIT_TOKEN': xReplitToken } }
  ).then(res => res.json()).then(data => data.items?.[0]);

  return connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;
}

function getAllFiles(dir: string, baseDir: string = dir): string[] {
  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath);
    
    if (['node_modules', '.git', '.cache', '.config', '.upm', 'dist', '.local', 'scripts'].includes(entry.name) ||
        entry.name.startsWith('.replit')) continue;
    
    if (entry.isDirectory()) {
      files.push(...getAllFiles(fullPath, baseDir));
    } else {
      files.push(relativePath);
    }
  }
  return files;
}

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const owner = 'arunbabun';
  const repo = 'fourthdimensiontech';
  
  console.log('Connecting to GitHub...');
  const accessToken = await getAccessToken();
  const octokit = new Octokit({ auth: accessToken });
  
  // Step 1: Initialize repo with README
  console.log('Initializing repository with README...');
  try {
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: 'README.md',
      message: 'Initial commit',
      content: Buffer.from('# Fourth Dimension Tech\n\nWoman-owned technology consultancy website.').toString('base64'),
    });
    console.log('Repository initialized!');
    await sleep(2000);
  } catch (error: any) {
    if (error.status !== 422) throw error;
    console.log('README already exists, continuing...');
  }
  
  // Step 2: Get current commit
  console.log('Getting current commit...');
  const { data: ref } = await octokit.git.getRef({ owner, repo, ref: 'heads/main' });
  const currentCommitSha = ref.object.sha;
  
  const { data: commit } = await octokit.git.getCommit({ owner, repo, commit_sha: currentCommitSha });
  const treeSha = commit.tree.sha;
  
  // Step 3: Upload files
  console.log('Reading project files...');
  const projectDir = process.cwd();
  const files = getAllFiles(projectDir);
  console.log(`Found ${files.length} files to upload`);
  
  const treeItems: { path: string; mode: '100644'; type: 'blob'; sha: string }[] = [];
  
  for (let i = 0; i < files.length; i++) {
    const filePath = files[i];
    const fullPath = path.join(projectDir, filePath);
    
    try {
      const content = fs.readFileSync(fullPath);
      const base64Content = content.toString('base64');
      
      const { data: blob } = await octokit.git.createBlob({
        owner,
        repo,
        content: base64Content,
        encoding: 'base64',
      });
      
      treeItems.push({ path: filePath, mode: '100644', type: 'blob', sha: blob.sha });
      
      if ((i + 1) % 10 === 0) {
        console.log(`  Uploaded ${i + 1}/${files.length} files...`);
        await sleep(500);
      }
    } catch (error: any) {
      if (error.status === 403) {
        console.log('Rate limited, waiting 30 seconds...');
        await sleep(30000);
        i--;
      } else {
        console.error(`Failed: ${filePath} - ${error.message}`);
      }
    }
  }
  
  console.log('Creating tree...');
  const { data: tree } = await octokit.git.createTree({ owner, repo, tree: treeItems, base_tree: treeSha });
  
  console.log('Creating commit...');
  const { data: newCommit } = await octokit.git.createCommit({
    owner,
    repo,
    message: 'Deploy Fourth Dimension Tech website',
    tree: tree.sha,
    parents: [currentCommitSha],
  });
  
  console.log('Updating branch...');
  await octokit.git.updateRef({ owner, repo, ref: 'heads/main', sha: newCommit.sha, force: true });
  
  console.log('\n✅ SUCCESS! Code pushed to GitHub.');
  console.log(`📍 https://github.com/${owner}/${repo}`);
}

main().catch(err => console.error('Error:', err.message));

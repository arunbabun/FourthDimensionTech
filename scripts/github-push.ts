import { Octokit } from '@octokit/rest';
import * as fs from 'fs';
import * as path from 'path';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

function getAllFiles(dir: string, baseDir: string = dir): string[] {
  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath);
    
    // Skip these directories/files
    if (entry.name === 'node_modules' || 
        entry.name === '.git' || 
        entry.name === '.cache' ||
        entry.name === '.config' ||
        entry.name === '.upm' ||
        entry.name === 'dist' ||
        entry.name.startsWith('.replit')) {
      continue;
    }
    
    if (entry.isDirectory()) {
      files.push(...getAllFiles(fullPath, baseDir));
    } else {
      files.push(relativePath);
    }
  }
  
  return files;
}

async function main() {
  const owner = 'arunbabun';
  const repo = 'fourthdimensiontech';
  const branch = 'main';
  
  console.log('Connecting to GitHub...');
  const accessToken = await getAccessToken();
  const octokit = new Octokit({ auth: accessToken });
  
  console.log('Getting repository info...');
  
  // Get the current commit SHA
  let currentCommitSha: string;
  let treeSha: string;
  
  try {
    const { data: ref } = await octokit.git.getRef({
      owner,
      repo,
      ref: `heads/${branch}`,
    });
    currentCommitSha = ref.object.sha;
    
    const { data: commit } = await octokit.git.getCommit({
      owner,
      repo,
      commit_sha: currentCommitSha,
    });
    treeSha = commit.tree.sha;
    console.log(`Found existing branch with commit: ${currentCommitSha.substring(0, 7)}`);
  } catch (error: any) {
    if (error.status === 404 || error.status === 409) {
      console.log('Repository is empty or branch not found, will create initial commit');
      currentCommitSha = '';
      treeSha = '';
    } else {
      throw error;
    }
  }
  
  console.log('Reading project files...');
  const projectDir = process.cwd();
  const files = getAllFiles(projectDir);
  console.log(`Found ${files.length} files to upload`);
  
  // Create blobs for all files
  console.log('Creating file blobs...');
  const treeItems: { path: string; mode: '100644'; type: 'blob'; sha: string }[] = [];
  
  for (const filePath of files) {
    const fullPath = path.join(projectDir, filePath);
    const content = fs.readFileSync(fullPath);
    const base64Content = content.toString('base64');
    
    try {
      const { data: blob } = await octokit.git.createBlob({
        owner,
        repo,
        content: base64Content,
        encoding: 'base64',
      });
      
      treeItems.push({
        path: filePath,
        mode: '100644',
        type: 'blob',
        sha: blob.sha,
      });
      
      if (treeItems.length % 20 === 0) {
        console.log(`  Uploaded ${treeItems.length}/${files.length} files...`);
      }
    } catch (error: any) {
      console.error(`Failed to upload ${filePath}: ${error.message}`);
    }
  }
  
  console.log('Creating tree...');
  const { data: tree } = await octokit.git.createTree({
    owner,
    repo,
    tree: treeItems,
    base_tree: treeSha || undefined,
  });
  
  console.log('Creating commit...');
  const { data: newCommit } = await octokit.git.createCommit({
    owner,
    repo,
    message: 'Deploy Fourth Dimension Tech website for GitHub Pages',
    tree: tree.sha,
    parents: currentCommitSha ? [currentCommitSha] : [],
  });
  
  console.log('Updating branch reference...');
  try {
    await octokit.git.updateRef({
      owner,
      repo,
      ref: `heads/${branch}`,
      sha: newCommit.sha,
      force: true,
    });
  } catch (error: any) {
    if (error.status === 422) {
      await octokit.git.createRef({
        owner,
        repo,
        ref: `refs/heads/${branch}`,
        sha: newCommit.sha,
      });
    } else {
      throw error;
    }
  }
  
  console.log('\n✅ SUCCESS! Code pushed to GitHub.');
  console.log(`\n📍 Repository: https://github.com/${owner}/${repo}`);
  console.log(`\n🔧 Next steps:`);
  console.log(`   1. Go to https://github.com/${owner}/${repo}/settings/pages`);
  console.log(`   2. Set Source to "GitHub Actions"`);
  console.log(`   3. Wait 2-3 minutes for deployment`);
  console.log(`\n🌐 Your site will be at: https://${owner}.github.io/${repo}/`);
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});

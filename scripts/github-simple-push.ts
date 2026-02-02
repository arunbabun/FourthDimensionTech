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

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function uploadFile(octokit: Octokit, owner: string, repo: string, filePath: string, content: string, message: string) {
  try {
    // Check if file exists first
    let sha: string | undefined;
    try {
      const { data } = await octokit.repos.getContent({ owner, repo, path: filePath });
      if ('sha' in data) sha = data.sha;
    } catch (e) {}
    
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: filePath,
      message,
      content: Buffer.from(content).toString('base64'),
      sha,
    });
    return true;
  } catch (error: any) {
    console.error(`Failed ${filePath}: ${error.message}`);
    return false;
  }
}

async function main() {
  const owner = 'arunbabun';
  const repo = 'fourthdimensiontech';
  
  console.log('Connecting to GitHub...');
  const accessToken = await getAccessToken();
  const octokit = new Octokit({ auth: accessToken });
  
  // Essential files for GitHub Pages
  const filesToUpload = [
    '.github/workflows/deploy.yml',
    'vite.config.github.ts',
    'package.json',
    'package-lock.json',
    'tsconfig.json',
    'drizzle.config.ts',
    'GITHUB_PAGES_SETUP.md',
    '.gitignore',
    'client/index.html',
    'client/src/App.tsx',
    'client/src/main.tsx',
    'client/src/index.css',
    'shared/schema.ts',
  ];
  
  // Add all client/src files
  function addClientFiles(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = path.relative(process.cwd(), fullPath);
      if (entry.isDirectory()) {
        addClientFiles(fullPath);
      } else {
        if (!filesToUpload.includes(relativePath)) {
          filesToUpload.push(relativePath);
        }
      }
    }
  }
  
  addClientFiles('client/src');
  
  console.log(`Uploading ${filesToUpload.length} essential files...`);
  
  let uploaded = 0;
  for (const filePath of filesToUpload) {
    const fullPath = path.join(process.cwd(), filePath);
    if (!fs.existsSync(fullPath)) continue;
    
    const content = fs.readFileSync(fullPath, 'utf-8');
    const success = await uploadFile(octokit, owner, repo, filePath, content, `Add ${filePath}`);
    
    if (success) {
      uploaded++;
      console.log(`  [${uploaded}] ${filePath}`);
    }
    
    await sleep(300); // Avoid rate limits
  }
  
  console.log(`\n✅ Uploaded ${uploaded} files to GitHub!`);
  console.log(`📍 https://github.com/${owner}/${repo}`);
  console.log(`\n🔧 Next: Go to Settings → Pages → Set Source to "GitHub Actions"`);
}

main().catch(err => console.error('Error:', err.message));

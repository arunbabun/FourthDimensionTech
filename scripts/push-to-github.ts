import { Octokit } from '@octokit/rest';
import { execSync } from 'child_process';

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
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
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

async function main() {
  const repoName = 'fourthdimensiontech';
  
  console.log('Getting GitHub access token...');
  const accessToken = await getAccessToken();
  const octokit = new Octokit({ auth: accessToken });
  
  console.log('Getting authenticated user info...');
  const { data: user } = await octokit.users.getAuthenticated();
  console.log(`Logged in as: ${user.login}`);
  
  console.log(`Creating repository: ${repoName}...`);
  try {
    await octokit.repos.createForAuthenticatedUser({
      name: repoName,
      description: 'Fourth Dimension Tech - Woman-owned technology consultancy website',
      private: false,
      auto_init: false,
    });
    console.log(`Repository created: https://github.com/${user.login}/${repoName}`);
  } catch (error: any) {
    if (error.status === 422) {
      console.log('Repository already exists, will push to existing repo.');
    } else {
      throw error;
    }
  }
  
  console.log('Setting up git remote...');
  const remoteUrl = `https://${accessToken}@github.com/${user.login}/${repoName}.git`;
  
  try {
    execSync('git remote remove github 2>/dev/null || true', { stdio: 'pipe' });
  } catch (e) {}
  
  execSync(`git remote add github "${remoteUrl}"`, { stdio: 'pipe' });
  
  console.log('Pushing code to GitHub...');
  execSync('git push -u github main --force', { stdio: 'inherit' });
  
  console.log('\n✅ Success! Your code has been pushed to GitHub.');
  console.log(`\n📍 Repository URL: https://github.com/${user.login}/${repoName}`);
  console.log(`\n🌐 After GitHub Actions completes, your site will be at:`);
  console.log(`   https://${user.login}.github.io/${repoName}/`);
  console.log('\n📝 Next steps:');
  console.log('   1. Go to your repository Settings → Pages');
  console.log('   2. Set Source to "GitHub Actions"');
  console.log('   3. Wait 2-3 minutes for deployment');
}

main().catch(console.error);

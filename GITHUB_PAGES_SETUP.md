# Fourth Dimension Tech - GitHub Pages Deployment Guide

This guide explains how to deploy your website to GitHub Pages for free hosting.

## Important Note About Contact Form

Since GitHub Pages only hosts static files (no server/database), the contact form uses **Formspree** for email delivery. Before deploying, you'll need to:

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form endpoint (looks like `https://formspree.io/f/xyzabc123`)
3. Update `client/src/pages/contact.tsx` - replace the Formspree URL with your actual form endpoint

## Quick Start

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click "New repository"
3. Name it (e.g., `fourthdimensiontech` or `your-username.github.io` for a user site)
4. Keep it public (required for free GitHub Pages)
5. Don't initialize with README (we'll push existing code)

### Step 2: Push Code to GitHub

From your Replit Shell, run these commands (replace with your repo URL):

```bash
git remote add github https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push github main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. The workflow will automatically build and deploy your site

### Step 4: Access Your Site

After the workflow runs (usually 2-3 minutes), your site will be live at:
- `https://YOUR-USERNAME.github.io/YOUR-REPO/`
- Or `https://YOUR-USERNAME.github.io/` if using a user/organization site

## Using a Custom Domain

If you have a custom domain (like fourthdimensiontech.com):

1. In GitHub repository Settings > Pages, enter your custom domain
2. Add a `CNAME` file to the `docs` folder with your domain name
3. Configure your domain's DNS settings:
   - Add an A record pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to `YOUR-USERNAME.github.io`

## Local Build Testing

To test the build locally before pushing:

```bash
npx vite build --config vite.config.github.ts
cp docs/index.html docs/404.html
```

The built files will be in the `docs` folder.

## Files Created for GitHub Pages

- `vite.config.github.ts` - Vite configuration for static build
- `.github/workflows/deploy.yml` - Automatic deployment workflow
- `docs/` - Built static files (after running build)

## Troubleshooting

**Pages not updating?**
- Check the "Actions" tab in your GitHub repo for build errors
- Make sure GitHub Pages source is set to "GitHub Actions"

**404 errors on page refresh?**
- The 404.html file should handle SPA routing automatically

**Contact form not working?**
- Verify your Formspree endpoint is correct
- Check Formspree dashboard for submissions

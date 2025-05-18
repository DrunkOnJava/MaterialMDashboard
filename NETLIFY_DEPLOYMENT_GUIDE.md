# Netlify Deployment Setup

## Option 1: Direct Netlify UI Setup (Recommended)

1. Go to https://app.netlify.com/
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select `DrunkOnJava/MaterialMDashboard`
4. Configure build settings:
   - Branch to deploy: `main`
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

## Option 2: Using GitHub Actions Workflow

If you prefer to use the existing GitHub Actions workflow:

1. Get your Netlify Auth Token:
   - Go to https://app.netlify.com/user/applications/personal
   - Create a new personal access token
   - Name it "GitHub Actions"

2. Get your Netlify Site ID:
   - Create a new site on Netlify first
   - Go to Site settings → General
   - Copy the Site ID

3. Add secrets to GitHub:
   - Go to https://github.com/DrunkOnJava/MaterialMDashboard/settings/secrets/actions
   - Add `NETLIFY_AUTH_TOKEN` with your token
   - Add `NETLIFY_SITE_ID` with your site ID

## Option 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy manually
cd /Users/griffin/Documents/GitHub/MaterialMDashboard
netlify deploy --prod --dir=dist

# Or link to a site and deploy
netlify init
netlify deploy --prod
```

## Disable GitHub Actions (Temporary)

If you want to stop the failing deployments while setting up:

1. Go to https://github.com/DrunkOnJava/MaterialMDashboard/actions
2. Click on "Deploy to Production" workflow
3. Click "..." menu → "Disable workflow"

Or delete the workflow file:
```bash
git rm .github/workflows/deploy.yml
git commit -m "Temporarily disable deployment workflow"
git push
```

## Environment Variables

If your app needs environment variables, add them in Netlify:
1. Site settings → Environment variables
2. Add any variables like:
   - `VITE_API_URL`
   - `VITE_GA_TRACKING_ID`

These will be available during the build process.
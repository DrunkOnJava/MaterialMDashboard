# Netlify Deployment Guide

This guide explains how to deploy the Material Dashboard React application to Netlify.

## Option 1: Direct API Deployment (Recommended)

This method creates a new Netlify site and deploys your project using Netlify's API without needing to interact with prompts.

### Prerequisites

1. Create a Netlify account at [https://app.netlify.com/signup](https://app.netlify.com/signup)
2. Generate a Personal Access Token at [https://app.netlify.com/user/applications#personal-access-tokens](https://app.netlify.com/user/applications#personal-access-tokens)

### Deployment Steps

1. Set your Netlify auth token as an environment variable:
   ```bash
   export NETLIFY_AUTH_TOKEN=your_token_here
   ```

2. Run the direct deploy script:
   ```bash
   npm run deploy:direct
   ```

3. The script will:
   - Build your project
   - Create a new Netlify site
   - Deploy your project to the site
   - Output the URL of your deployed site

## Option 2: Using Netlify CLI (Interactive)

This method uses the Netlify CLI tool which requires interactive authentication.

### Deployment Steps

1. Run the standard deploy script:
   ```bash
   npm run deploy
   ```

2. Follow the prompts to:
   - Log in to Netlify (if not already logged in)
   - Select a site (or create a new one)
   - Confirm deployment settings

## Option 3: Manual Deployment via Netlify UI

If the automated methods aren't working, you can deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. Create a ZIP file of the `dist` directory:
   ```bash
   cd dist
   zip -r ../site.zip *
   cd ..
   ```

3. Go to [Netlify](https://app.netlify.com/) and log in
4. Click on "Sites" in the top navigation
5. Drag and drop the `site.zip` file onto the Netlify sites area
6. Follow the prompts to complete deployment

## Troubleshooting

If you encounter any issues with deployment:

1. Check that your project builds successfully locally:
   ```bash
   npm run build
   ```

2. Verify that all required files are present:
   - `netlify.toml`: Configuration for build settings and redirects
   - `public/_redirects`: Essential for SPA routing
   - `.env.production`: If you have environment-specific configuration

3. For API deployment issues:
   - Ensure your Netlify token has the correct permissions
   - Check that the token is correctly exported in your environment

4. For Netlify CLI issues:
   - Try running `netlify login` separately to authenticate
   - Update the CLI: `npm update -g netlify-cli`
# GitHub Secrets Configuration Guide

This guide provides instructions for setting up the required secrets to activate the GitHub Actions workflows.

## Required Secrets

To fully activate the CI/CD workflows, please add the following secrets to your repository:

### 1. Deployment Secrets (Choose One Platform)

#### Option A: Vercel
- `VERCEL_TOKEN` - Get from https://vercel.com/account/tokens
- `VERCEL_ORG_ID` - Find in your Vercel account settings
- `VERCEL_PROJECT_ID` - Find in your Vercel project settings

To get these values:
1. Go to https://vercel.com/account/tokens
2. Create a new token with deployment permissions
3. Find your Org ID in account settings
4. Find your Project ID in project settings

#### Option B: Netlify
- `NETLIFY_AUTH_TOKEN` - Get from https://app.netlify.com/user/applications/personal
- `NETLIFY_SITE_ID` - Find in your Netlify site settings

To get these values:
1. Go to https://app.netlify.com/user/applications/personal
2. Create a new personal access token
3. Find your Site ID in site settings → General

### 2. Security Scanning (Optional but Recommended)

#### Snyk
- `SNYK_TOKEN` - Get from https://app.snyk.io/account

Steps:
1. Sign up for a free Snyk account
2. Go to Account Settings → Auth Token
3. Copy your API token

#### SonarCloud
- `SONAR_TOKEN` - Get from https://sonarcloud.io/account/security

Steps:
1. Sign up for SonarCloud
2. Go to My Account → Security
3. Generate a new token

### 3. Analytics (Optional)

#### Google Analytics
- `GA_TRACKING_ID` - Your Google Analytics Measurement ID (format: `G-XXXXXXXXXX`)

Steps:
1. Go to Google Analytics
2. Admin → Data Streams
3. Copy your Measurement ID

#### Sentry
- `SENTRY_DSN` - Get from your Sentry project settings

Steps:
1. Sign up for Sentry
2. Create a new project
3. Go to Settings → Client Keys (DSN)
4. Copy your DSN

### 4. Production Configuration

- `PRODUCTION_API_URL` - Your production API endpoint (e.g., `https://api.yourdomain.com`)

## How to Add Secrets to GitHub

1. Go to your repository on GitHub: https://github.com/DrunkOnJava/MaterialMDashboard
2. Click on **Settings** tab
3. Navigate to **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add each secret:
   - Name: Enter the exact secret name (e.g., `VERCEL_TOKEN`)
   - Value: Paste the corresponding value
   - Click **Add secret**

## Example: Setting up Netlify Deployment

1. Get Netlify Auth Token:
   ```
   https://app.netlify.com/user/applications/personal
   → Create new token
   → Name it "GitHub Actions"
   → Copy the token
   ```

2. Get Netlify Site ID:
   ```
   Go to your Netlify site dashboard
   → Site configuration
   → General
   → Copy Site ID
   ```

3. Add to GitHub:
   ```
   Repository Settings → Secrets → Actions
   → New repository secret
   → Name: NETLIFY_AUTH_TOKEN
   → Value: [paste your token]
   → Add secret
   
   → New repository secret
   → Name: NETLIFY_SITE_ID
   → Value: [paste your site ID]
   → Add secret
   ```

## Testing Your Configuration

After adding the secrets:

1. Create a test pull request to trigger the CI workflow
2. Go to the **Actions** tab in your repository
3. Watch the workflows run
4. Check for any errors in the logs

## Quick Links

- [Vercel Tokens](https://vercel.com/account/tokens)
- [Netlify Tokens](https://app.netlify.com/user/applications/personal)
- [Snyk Account](https://app.snyk.io/account)
- [SonarCloud Security](https://sonarcloud.io/account/security)
- [Google Analytics](https://analytics.google.com/)
- [Sentry](https://sentry.io/)

## Security Notes

- Never commit secrets directly to your repository
- Rotate tokens regularly for security
- Use environment-specific values for production secrets
- Limit token permissions to minimum required scope
- Store this file locally and don't commit sensitive values

## Troubleshooting

If workflows fail:
1. Check the Actions tab for error logs
2. Verify secret names match exactly (case-sensitive)
3. Ensure tokens have necessary permissions
4. Check token expiration dates
5. Review `.github/workflows/README.md` for more details

## Need Help?

- Check workflow logs in the Actions tab
- Review the workflow files in `.github/workflows/`
- Open an issue if you encounter problems
# Material Dashboard with Blue Mountain Wicks

A modern Material Design dashboard built with React, TypeScript, and Vite. This project includes a complete admin panel for the Blue Mountain Wicks candle e-commerce business, originally scaffolded using [Anima](https://animaapp.com/).

## Features

- Material Design UI components based on Shadcn UI
- Responsive dashboard with multiple screens
- Data visualization with Chart.js
- E-commerce management for Blue Mountain Wicks
- Product, inventory, and order management
- Customer analytics and reporting
- Website preview integration

## Getting started

> **Prerequisites:**
> The following steps require [NodeJS](https://nodejs.org/en/) to be installed on your system, so please
> install it beforehand if you haven't already.

### Installation

To get started with your project, you'll first need to install the dependencies:

```
npm install
```

### Development

Run a development version of the project with:

```
npm run dev
```

After a few seconds, your project should be accessible at the address
[http://localhost:5173/](http://localhost:5173/)

### Production Build

Build the project for release with:

```
npm run build
```

## Deployment to Netlify

For detailed deployment instructions, see [NETLIFY-DEPLOY.md](NETLIFY-DEPLOY.md).

### Option 1: Direct API Deployment (Recommended)

This non-interactive method creates a new Netlify site using their API:

1. Get a personal access token from [Netlify](https://app.netlify.com/user/applications#personal-access-tokens)

2. Set your token as an environment variable:
   ```bash
   export NETLIFY_AUTH_TOKEN=your_token_here
   ```

3. Run the direct deploy script:
   ```bash
   npm run deploy:direct
   ```

### Option 2: Interactive Deployment Script

Run the provided deployment script to build and deploy the application to Netlify:

```bash
# Run the deployment script (requires interactive prompts)
npm run deploy
```

### Option 3: Quick URL (Easiest)

Get a shareable preview URL in one step:

```bash
npm run get-url
```

This will:
- Build the project
- Create a temporary deployment on Netlify
- Copy the URL to your clipboard
- Print the URL to the console

### Option 4: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Install Netlify CLI (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

3. Log in to Netlify:
   ```bash
   netlify login
   ```

4. Deploy the application:
   ```bash
   netlify deploy --prod
   ```

## Project Structure

- `/src/components/ui/`: Reusable UI components
- `/src/screens/`: Page components organized by feature
  - `/Dashboard/`: Main dashboard view with analytics
  - `/BlueMountainWicks/`: Blue Mountain Wicks e-commerce management
  - `/Buttons/`: Button variants showcase
  - `/Forms/`: Form components and examples
  - `/Components/`: UI component demos
  - `/Charts/`: Data visualization examples
- `/src/hooks/`: Custom React hooks
- `/src/lib/`: Utility functions

## Technology Stack

- React 18
- TypeScript
- Vite
- TailwindCSS
- Shadcn UI
- Chart.js/react-chartjs-2
- React Router
- React Hook Form

## Security Best Practices

### API Keys and Secrets

- Never commit API keys, tokens, or secrets to the repository
- Use environment variables for sensitive information
- Store secrets in `.env` files (which are gitignored)
- For local development, use `.env.local` which is also gitignored

### Git Hooks

A pre-commit hook is included in `.github/hooks/pre-commit` to help prevent committing secrets. To install it:

```bash
# Make the pre-commit hook executable
chmod +x .github/hooks/pre-commit

# Create a symlink to the git hooks directory
ln -sf ../../.github/hooks/pre-commit .git/hooks/pre-commit
```

### Secrets Management

If you accidentally commit a secret:

1. Immediately rotate the compromised credential or token
2. Contact the security team or repository owner
3. Use the proper git tools to remove the secret from git history
   ```bash
   # Install git-filter-repo
   brew install git-filter-repo

   # Remove the file containing secrets
   git filter-repo --path path/to/file/with/secret --invert-paths
   ```
4. Force push the cleaned history (only if absolutely necessary and after notifying all contributors)

Note that once a secret has been pushed publicly, it should be considered compromised even if removed from the history.

#!/bin/bash

# GitHub Actions Setup Script
# This script helps you configure GitHub secrets for the Material Dashboard project

echo "🚀 Material Dashboard - GitHub Actions Setup"
echo "=========================================="
echo ""

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check if GitHub CLI is installed
if ! command_exists gh; then
    echo "❌ GitHub CLI (gh) is not installed."
    echo "Please install it from: https://cli.github.com/"
    echo ""
    echo "On macOS with Homebrew:"
    echo "  brew install gh"
    echo ""
    exit 1
fi

# Check if user is authenticated
if ! gh auth status >/dev/null 2>&1; then
    echo "❌ You are not authenticated with GitHub CLI."
    echo "Please run: gh auth login"
    echo ""
    exit 1
fi

echo "✅ GitHub CLI is installed and authenticated"
echo ""

# Get repository info
REPO_OWNER="DrunkOnJava"
REPO_NAME="MaterialMDashboard"

echo "📦 Repository: $REPO_OWNER/$REPO_NAME"
echo ""

# Function to add a secret
add_secret() {
    local secret_name=$1
    local secret_description=$2
    
    echo "Adding secret: $secret_name"
    echo "Description: $secret_description"
    echo -n "Enter value for $secret_name (input hidden): "
    read -s secret_value
    echo ""
    
    if [ -z "$secret_value" ]; then
        echo "⏭️  Skipping $secret_name (no value provided)"
    else
        gh secret set "$secret_name" -b"$secret_value" -R "$REPO_OWNER/$REPO_NAME"
        echo "✅ Added $secret_name"
    fi
    echo ""
}

# Choose deployment platform
echo "🚀 Choose your deployment platform:"
echo "1) Vercel"
echo "2) Netlify"
echo "3) Skip deployment setup"
echo -n "Enter choice (1-3): "
read deployment_choice

case $deployment_choice in
    1)
        echo ""
        echo "Setting up Vercel deployment..."
        add_secret "VERCEL_TOKEN" "Get from https://vercel.com/account/tokens"
        add_secret "VERCEL_ORG_ID" "Find in your Vercel account settings"
        add_secret "VERCEL_PROJECT_ID" "Find in your Vercel project settings"
        ;;
    2)
        echo ""
        echo "Setting up Netlify deployment..."
        add_secret "NETLIFY_AUTH_TOKEN" "Get from https://app.netlify.com/user/applications/personal"
        add_secret "NETLIFY_SITE_ID" "Find in your Netlify site settings"
        ;;
    3)
        echo "Skipping deployment setup..."
        ;;
    *)
        echo "Invalid choice. Skipping deployment setup..."
        ;;
esac

# Security scanning (optional)
echo ""
echo "🔒 Security Scanning Setup (Optional)"
echo "Would you like to set up security scanning?"
echo -n "Enter 'y' for yes, any other key to skip: "
read security_choice

if [ "$security_choice" = "y" ] || [ "$security_choice" = "Y" ]; then
    add_secret "SNYK_TOKEN" "Get from https://app.snyk.io/account"
    add_secret "SONAR_TOKEN" "Get from https://sonarcloud.io/account/security"
fi

# Analytics (optional)
echo ""
echo "📊 Analytics Setup (Optional)"
echo "Would you like to set up analytics?"
echo -n "Enter 'y' for yes, any other key to skip: "
read analytics_choice

if [ "$analytics_choice" = "y" ] || [ "$analytics_choice" = "Y" ]; then
    add_secret "GA_TRACKING_ID" "Google Analytics Measurement ID (format: G-XXXXXXXXXX)"
    add_secret "SENTRY_DSN" "Get from your Sentry project settings"
fi

# Production configuration
echo ""
echo "🌐 Production Configuration"
add_secret "PRODUCTION_API_URL" "Your production API endpoint (e.g., https://api.yourdomain.com)"

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Create a pull request to test the CI/CD pipeline"
echo "2. Check the Actions tab to monitor workflow execution"
echo "3. Review any errors in the workflow logs"
echo ""
echo "For more information, see:"
echo "- .github/workflows/README.md"
echo "- GITHUB_SECRETS_SETUP.md"
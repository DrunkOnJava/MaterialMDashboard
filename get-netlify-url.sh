#!/bin/bash
set -e

# Build the project
echo "📦 Building the project..."
npm run build

# Create temporary directory for deployment
echo "📁 Preparing for deployment..."
TEMP_DIR=$(mktemp -d)
cp -r dist/* $TEMP_DIR/

# Use Netlify CLI's deploy command with --json flag to parse URL
if ! command -v netlify &> /dev/null; then
    echo "🔄 Installing Netlify CLI..."
    npm install -g netlify-cli
fi

echo "🚀 Deploying to Netlify..."
RESULT=$(cd $TEMP_DIR && netlify deploy --json --dir=. --message="Quick deploy from CLI")
URL=$(echo $RESULT | grep -o '"deploy_url":"[^"]*"' | head -n1 | sed 's/"deploy_url":"\(.*\)"/\1/')

# Clean up
rm -rf $TEMP_DIR

if [ -z "$URL" ]; then
    echo "❌ Failed to get deployment URL. Please try again or use the manual method."
    exit 1
else
    echo "✅ Deployment successful!"
    echo "🌎 Your site is available at: $URL"
    echo "📋 URL copied to clipboard"
    echo "$URL" | pbcopy
fi
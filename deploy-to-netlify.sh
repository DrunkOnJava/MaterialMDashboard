#!/bin/bash
set -e

# Build the project
echo "📦 Building the project..."
npm run build

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "🔄 Installing Netlify CLI..."
    npm install -g netlify-cli
fi

# Check if user is logged in to Netlify
if ! netlify status &> /dev/null; then
    echo "🔑 Please log in to Netlify:"
    netlify login
fi

echo "🚀 Deploying to Netlify..."
netlify deploy --prod

echo "✅ Deployment completed!"
#!/bin/bash
set -e

# Build the project
echo "📦 Building the project..."
npm run build

# Create site archive
echo "📁 Creating site archive..."
cd dist
zip -r ../site.zip *
cd ..

# Install required tools
if ! command -v curl &> /dev/null; then
  echo "curl is required but not installed. Please install curl."
  exit 1
fi

if [ -z "$NETLIFY_AUTH_TOKEN" ]; then
  echo "⚠️ NETLIFY_AUTH_TOKEN environment variable is not set."
  echo "Create a personal access token at https://app.netlify.com/user/applications#personal-access-tokens"
  echo "Then run: export NETLIFY_AUTH_TOKEN=your_token_here"
  exit 1
fi

echo "🌐 Creating new site on Netlify..."
# Create a new site in your Netlify account's default team
RESPONSE=$(curl -s -H "Authorization: Bearer $NETLIFY_AUTH_TOKEN" \
  -X POST "https://api.netlify.com/api/v1/sites" \
  -H "Content-Type: application/json" \
  -d '{"name":"material-dashboard-react"}')

SITE_ID=$(echo $RESPONSE | grep -o '"id":"[^"]*"' | head -n1 | cut -d '"' -f 4)
SITE_URL=$(echo $RESPONSE | grep -o '"url":"[^"]*"' | head -n1 | cut -d '"' -f 4)
SITE_NAME=$(echo $RESPONSE | grep -o '"name":"[^"]*"' | head -n1 | cut -d '"' -f 4)

if [ -z "$SITE_ID" ]; then
  echo "❌ Failed to create site. Response: $RESPONSE"
  exit 1
fi

echo "🔗 Site created: $SITE_URL (ID: $SITE_ID, Name: $SITE_NAME)"

# Deploy site
echo "🚀 Deploying to Netlify..."
DEPLOY_RESPONSE=$(curl -s -H "Authorization: Bearer $NETLIFY_AUTH_TOKEN" \
  -X POST "https://api.netlify.com/api/v1/sites/$SITE_ID/deploys" \
  -F "file=@site.zip" \
  -F "function_paths=[]")

DEPLOY_URL=$(echo $DEPLOY_RESPONSE | grep -o '"url":"[^"]*"' | head -n1 | cut -d '"' -f 4)
DEPLOY_ID=$(echo $DEPLOY_RESPONSE | grep -o '"id":"[^"]*"' | head -n1 | cut -d '"' -f 4)

if [ -z "$DEPLOY_URL" ]; then
  echo "❌ Failed to deploy site. Response: $DEPLOY_RESPONSE"
  exit 1
fi

echo "✅ Deployment complete!"
echo "🌎 Your site is live at: https://$SITE_NAME.netlify.app"
echo "⚙️ Admin URL: https://app.netlify.com/sites/$SITE_NAME"

# Clean up
echo "🧹 Cleaning up..."
rm site.zip

echo "🎉 All done! Your Material Dashboard is now live on Netlify."
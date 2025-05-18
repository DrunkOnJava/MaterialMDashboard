# GitHub Actions Workflows

This directory contains all GitHub Actions workflows for the Material Dashboard project.

## Workflows

### 🔄 CI/CD Pipeline (`ci.yml`)
- **Trigger**: Push to main/develop, Pull requests
- **Jobs**:
  - Lint code (ESLint, TypeScript)
  - Run unit tests with coverage
  - Build application
  - Analyze bundle size
  - Run Lighthouse performance audit
  - Deploy preview for pull requests

### 🚀 Deploy to Production (`deploy.yml`)
- **Trigger**: Push to main branch, Manual dispatch
- **Jobs**:
  - Build with production environment variables
  - Deploy to Vercel/Netlify/GitHub Pages
  - Create GitHub release

### 🔍 Code Quality (`code-quality.yml`)
- **Trigger**: Pull requests
- **Jobs**:
  - Check code formatting
  - Run SonarCloud analysis
  - Security vulnerability scan
  - Bundle size check
  - License compliance check

### 🔒 Security Scan (`security.yml`)
- **Trigger**: Push to main/develop, PRs, Weekly schedule
- **Jobs**:
  - npm audit
  - Snyk security scan
  - CodeQL analysis
  - OWASP dependency check

### 📦 Release (`release.yml`)
- **Trigger**: Manual dispatch
- **Jobs**:
  - Version update
  - Generate changelog
  - Create GitHub release
  - Publish to npm (if configured)

### 🤖 Dependabot Auto Merge (`dependabot.yml`)
- **Trigger**: Dependabot pull requests
- **Jobs**:
  - Run tests on dependency updates
  - Auto-merge minor and patch updates

## Required Secrets

Configure these secrets in your repository settings:

### Deployment
- `VERCEL_TOKEN` - Vercel authentication token
- `VERCEL_ORG_ID` - Vercel organization ID
- `VERCEL_PROJECT_ID` - Vercel project ID
- `NETLIFY_AUTH_TOKEN` - Netlify authentication token
- `NETLIFY_SITE_ID` - Netlify site ID

### Analytics & Monitoring
- `GA_TRACKING_ID` - Google Analytics tracking ID
- `SENTRY_DSN` - Sentry error tracking DSN

### Security Scanning
- `SNYK_TOKEN` - Snyk authentication token
- `SONAR_TOKEN` - SonarCloud token

### Registry
- `NPM_TOKEN` - npm registry token (for publishing)

### API Configuration
- `PRODUCTION_API_URL` - Production API endpoint

## Workflow Badges

Add these badges to your README:

```markdown
![CI/CD](https://github.com/DrunkOnJava/MaterialMDashboard/workflows/CI%2FCD%20Pipeline/badge.svg)
![Security](https://github.com/DrunkOnJava/MaterialMDashboard/workflows/Security%20Scan/badge.svg)
![Code Quality](https://github.com/DrunkOnJava/MaterialMDashboard/workflows/Code%20Quality/badge.svg)
```

## Local Testing

Test workflows locally using [act](https://github.com/nektos/act):

```bash
# Install act
brew install act

# Run CI workflow
act -j build

# Run with secrets
act -j deploy --secret-file .env.secrets
```

## Customization

### Modify Deployment Target

To change deployment platform, edit `.github/workflows/deploy.yml`:

1. Comment out current deployment step
2. Uncomment desired platform section
3. Configure required secrets

### Add New Checks

To add new quality checks:

1. Edit `.github/workflows/code-quality.yml`
2. Add new job or step
3. Configure any required tools

### Schedule Changes

To modify scheduled runs:

1. Edit `schedule` section in workflow files
2. Use cron syntax: `'0 0 * * MON'` (Mondays at midnight)

## Best Practices

1. **Use specific action versions**: `actions/checkout@v4` not `actions/checkout@main`
2. **Limit permissions**: Only request necessary permissions for each workflow
3. **Use secrets**: Never hardcode sensitive values
4. **Cache dependencies**: Use `actions/cache` for faster builds
5. **Fail fast**: Set `fail-fast: true` for matrix builds
6. **Timeout jobs**: Add `timeout-minutes` to prevent hanging jobs

## Troubleshooting

### Common Issues

1. **Workflow not triggering**
   - Check branch protection rules
   - Verify workflow syntax
   - Check GitHub Actions status

2. **Permission denied**
   - Review workflow permissions
   - Check repository settings
   - Verify token scopes

3. **Build failures**
   - Check logs for specific errors
   - Verify all secrets are set
   - Test locally with act

### Debug Mode

Enable debug logging:

1. Set repository secret: `ACTIONS_STEP_DEBUG` = `true`
2. Set repository secret: `ACTIONS_RUNNER_DEBUG` = `true`

## Support

For issues with workflows:

1. Check [GitHub Actions documentation](https://docs.github.com/en/actions)
2. Review workflow logs
3. Open an issue in the repository
4. Contact repository maintainers
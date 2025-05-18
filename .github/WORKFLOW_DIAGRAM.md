# GitHub Actions Workflow Diagram

```mermaid
graph TD
    A[Developer Push/PR] --> B{Branch?}
    B -->|main| C[Production Deploy]
    B -->|PR| D[CI/CD Pipeline]
    B -->|develop| E[Testing Pipeline]
    
    D --> F[Lint Code]
    D --> G[Run Tests]
    D --> H[Build App]
    D --> I[Security Scan]
    
    F --> J{Pass?}
    G --> J
    H --> J
    I --> J
    
    J -->|Yes| K[Deploy Preview]
    J -->|No| L[Fail & Notify]
    
    C --> M[Build Production]
    M --> N[Deploy to Platform]
    N --> O[Create Release]
    
    E --> P[Code Quality]
    P --> Q[Bundle Analysis]
    Q --> R[Performance Audit]
    
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style C fill:#9f9,stroke:#333,stroke-width:2px
    style L fill:#f99,stroke:#333,stroke-width:2px
```

## Workflow Triggers

### Main Branch (Production)
- Automatic deployment to production
- Release creation
- Full security scan

### Pull Requests
- CI/CD pipeline runs
- Preview deployment
- Code quality checks
- Automated tests

### Scheduled
- Weekly security scans
- Dependency updates
- Performance audits

## Secret Requirements by Workflow

### CI/CD Pipeline
- None required (uses GitHub token)

### Production Deploy
- `VERCEL_TOKEN` or `NETLIFY_AUTH_TOKEN`
- `PRODUCTION_API_URL`
- `GA_TRACKING_ID` (optional)

### Security Scan
- `SNYK_TOKEN` (optional)
- `SONAR_TOKEN` (optional)

### Release
- `NPM_TOKEN` (if publishing to npm)
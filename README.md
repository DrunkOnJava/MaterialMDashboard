# Material Dashboard with Blue Mountain Wicks

A comprehensive, feature-rich Material Design dashboard built with React, TypeScript, and Vite. This project delivers a complete admin panel for the Blue Mountain Wicks candle e-commerce business, with advanced data visualization, product management, and customer analytics. Originally scaffolded using [Anima](https://animaapp.com/), it has been significantly enhanced with custom components and business logic.

![Material Dashboard Screenshot](https://material-ui.com/static/images/templates/dashboard.png)

## Key Features

### Admin Dashboard
- **Interactive Analytics Dashboard**: Real-time metrics and KPIs for business performance
- **Multi-section Layout**: Tabbed interface with Analytics, Orders, Inventory, Customers, and Settings
- **Responsive Design**: Fully responsive UI that works seamlessly across all device sizes
- **Dark/Light Theme Support**: (in progress) Theme customization for user preference

### E-commerce Management
- **Product Management**: Complete CRUD operations for product catalog management
- **Inventory Control**: Stock level tracking, low-stock alerts, and inventory history
- **Order Processing**: Order lifecycle management from creation to fulfillment
- **Customer Analytics**: Customer segmentation, purchase history, and behavioral insights
- **Website Preview**: Live preview of the e-commerce storefront from the admin panel

### Data Visualization
- **Interactive Charts**: Comprehensive charting capabilities using Chart.js
- **Multiple Chart Types**: Bar, line, area, pie, and scatter charts
- **Real-time Data Updates**: Dynamic data rendering and updates
- **Customizable Dashboards**: Configure analytics views to match business needs

### UI Component Library
- **Material Design**: Modern, clean UI based on Material Design principles
- **Shadcn UI Integration**: High-quality component library with consistent styling
- **Extensive Component Set**: Over 20 reusable UI components from buttons to complex dialogs
- **Form Components**: Advanced form controls with validation and error handling

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v16 or later)
- npm (v7 or later) or yarn (v1.22 or later)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

### Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/yourusername/MaterialMDashboard.git

# Navigate to the project directory
cd MaterialMDashboard

# Install dependencies
npm install
# or
yarn install
```

### Environment Setup

Create a `.env.local` file in the root directory with your environment-specific variables:

```env
# API Configuration
VITE_API_URL=https://your-api-url.com
VITE_API_KEY=your_api_key_here

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_MOCK_DATA=true

# Netlify Deployment (optional)
NETLIFY_AUTH_TOKEN=your_netlify_token_here
```

### Development Server

Run a development version of the project with hot reloading:

```bash
npm run dev
# or
yarn dev
```

Your project will be accessible at [http://localhost:5173/](http://localhost:5173/)

### Production Build

Build the project for production deployment:

```bash
npm run build
# or
yarn build
```

The optimized build will be available in the `dist` directory.

### Testing

This project uses Vitest for unit and component testing:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Generate test coverage report
npm test:coverage
```

### Code Quality

Maintain code quality with linting and formatting:

```bash
# Run ESLint to check for issues
npm run lint

# Automatically fix ESLint issues when possible
npm run lint:fix

# Format code with Prettier
npm run format

# Type-check the codebase
npm run typecheck
```

For detailed information about the ESLint configuration, see [ESLINT_SETUP.md](ESLINT_SETUP.md).

### Debugging

#### Chrome DevTools

The application includes proper source maps for easy debugging in Chrome DevTools:

1. Run the development server: `npm run dev`
2. Open Chrome DevTools (F12 or Right Click → Inspect)
3. Navigate to the Sources tab
4. Find your source files under webpack:// → src

#### VS Code Debugging

To debug in VS Code:

1. Install the [JavaScript Debugger extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.js-debug)

2. Create a .vscode/launch.json file with the following configuration:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/src/*"
      }
    }
  ]
}
```

3. Start the development server: `npm run dev`
4. Press F5 in VS Code to start debugging

#### Mock Service Worker (MSW)

The application uses MSW to mock API requests during development and testing:

- Mock API is configured in `src/lib/mock-api/`
- Toggle mock API in development by setting `VITE_ENABLE_MOCK_API=true` in your .env file
- Test API behavior by modifying mock handlers in respective files

```bash
# View the browser console to see MSW activity:
[MSW] Mocking enabled for the following API endpoints:
- POST /api/auth/login
- POST /api/auth/register
- POST /api/auth/refresh
```

## Deployment Options

This project includes multiple streamlined deployment options for Netlify. For detailed instructions, see [NETLIFY-DEPLOY.md](NETLIFY-DEPLOY.md).

### Option 1: Direct API Deployment (Recommended)

Non-interactive method that creates a new Netlify site using their API:

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

```bash
# Run the deployment script (follows interactive prompts)
npm run deploy
```

### Option 3: Quick URL Generation (Fastest Option)

Get a shareable preview URL in one command:

```bash
npm run get-url
```

This will:
- Build the project
- Create a temporary deployment on Netlify
- Copy the URL to your clipboard
- Print the URL to the console

### Option 4: Manual Deployment

For complete control over the deployment process:

1. Build the project:
   ```bash
   npm run build
   ```

2. Install Netlify CLI:
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

```
material-dashboard/
├── .github/                  # GitHub configuration and hooks
├── public/                   # Static assets
├── scripts/                  # Build and deployment scripts
├── src/
│   ├── assets/               # Images, fonts, and other static files
│   │   ├── icons/            # SVG icons and icon components
│   │   └── images/           # Image assets
│   │
│   ├── components/           # Reusable UI components
│   │   ├── common/           # Common components like Avatar, Loader, etc.
│   │   ├── data-display/     # Data presentation components
│   │   ├── feedback/         # User feedback components (alerts, toasts)
│   │   ├── form/             # Form input components
│   │   ├── layout/           # Layout components (sidebar, header)
│   │   └── ui/               # Core UI components from Shadcn UI
│   │
│   ├── hooks/                # Custom React hooks
│   │   ├── use-toast.ts      # Toast notification hook
│   │   └── use-media-query.ts # Responsive design hook
│   │
│   ├── lib/                  # Utility functions and helpers
│   │   ├── analytics/        # Analytics utilities
│   │   ├── api/              # API interaction utilities
│   │   ├── helpers/          # Helper functions
│   │   ├── mock-api/         # Mock data and API simulations
│   │   └── utils.ts          # General utilities
│   │
│   ├── screens/              # Main application screens
│   │   ├── BlueMountainWicks/# E-commerce management screens
│   │   │   ├── components/   # E-commerce specific components
│   │   │   ├── context/      # E-commerce state management
│   │   │   ├── data/         # Mock data for e-commerce
│   │   │   ├── models/       # TypeScript interfaces/types
│   │   │   └── sections/     # E-commerce page sections
│   │   │
│   │   ├── Buttons/          # Button variants showcase
│   │   ├── Charts/           # Data visualization components
│   │   ├── Components/       # UI component demos
│   │   ├── Dashboard/        # Main dashboard view
│   │   │   ├── components/   # Dashboard-specific components
│   │   │   └── sections/     # Dashboard sections (Analytics, Orders, etc.)
│   │   │
│   │   ├── Examples/         # Example page implementations
│   │   └── Forms/            # Form components and examples
│   │
│   ├── styles/               # Global styles and theme definitions
│   │   └── themes/           # Theme configuration
│   │
│   ├── index.tsx             # Application entry point
│   └── vite-env.d.ts         # Vite environment type definitions
│
├── .env.example              # Example environment variables
├── eslint.config.js          # ESLint flat configuration
├── .gitignore                # Git ignore rules
├── index.html                # HTML entry point
├── netlify.toml              # Netlify configuration
├── package.json              # Project dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── README.md                 # Project documentation
├── tailwind.config.js        # Tailwind CSS configuration
├── tailwind.css              # Tailwind CSS entry point
├── TODO.md                   # Development roadmap and tasks
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite configuration
```

## Technology Stack

### Core Technologies
- **React 18**: Modern React with hooks and concurrent features
- **TypeScript**: Static typing for better developer experience and code quality
- **Vite**: Lightning-fast build tool and development server
- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **Shadcn UI**: High-quality component library built on Radix UI

### Libraries & Tools
- **Chart.js/react-chartjs-2**: Powerful, flexible charting library
- **React Router 6**: Declarative routing for React applications
- **React Hook Form**: Performant, flexible forms with easy validation
- **date-fns**: Modern JavaScript date utility library
- **Lucide React**: Beautiful hand-crafted SVG icons
- **clsx/tailwind-merge**: Utilities for conditional class name construction
- **Radix UI Primitives**: Unstyled, accessible component primitives

## Development Standards

### Code Style & Conventions
- TypeScript for type safety across the codebase
- ESLint (with flat configuration) and Prettier for consistent code formatting
- React-specific linting rules to enforce best practices
- Strict type checking with explicit types over 'any'
- Component organization following feature-first architecture
- Custom hooks for reusable stateful logic
- Utility functions for common operations
- Standardized linting rules documented in ESLINT_SETUP.md

### Performance Considerations
- Component memoization for expensive renders
- Lazy loading for route components
- Asset optimization for images and SVGs
- Bundle size monitoring and optimization
- Virtualization for long lists

### Accessibility Standards
- Semantic HTML throughout the application
- ARIA attributes for complex interactive components
- Keyboard navigation support
- Color contrast compliance
- Screen reader compatibility

## Security Best Practices

### API Keys and Secrets
- Never commit API keys, tokens, or secrets to the repository
- Use environment variables for all sensitive information
- Store secrets in `.env` files (which are gitignored)
- For local development, use `.env.local` which is also gitignored

### Secure Authentication
- HTTP-only cookies for authentication tokens
- Secure, SameSite cookie attributes
- CSRF protection
- Properly hashed passwords (backend)
- Rate limiting for authentication attempts

### Data Protection
- Input validation for all user-provided data
- Output encoding to prevent XSS
- Content Security Policy implementation
- HTTPS enforcement for all API calls

### Git Hooks

A pre-commit hook is included in `.github/hooks/pre-commit` to help prevent committing secrets:

```bash
# Install the hooks automatically with
npm run hooks:install

# Or manually with
chmod +x .github/hooks/pre-commit
ln -sf ../../.github/hooks/pre-commit .git/hooks/pre-commit
```

### Secrets Management

If you accidentally commit a secret:

1. Immediately rotate the compromised credential or token
2. Contact the security team or repository owner
3. Use git-filter-repo to remove the secret from git history:
   ```bash
   # Install git-filter-repo
   brew install git-filter-repo

   # Remove the file containing secrets
   git filter-repo --path path/to/file/with/secret --invert-paths
   ```
4. Force push the cleaned history (only after notifying all contributors)

Note: Once a secret has been pushed publicly, it should be considered compromised even if removed from the history.

## Contributing

Contributions are welcome! Please check the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Anima](https://animaapp.com/) for the initial project scaffolding
- [Shadcn UI](https://ui.shadcn.com/) for the excellent component library
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives
- [Chart.js](https://www.chartjs.org/) for the data visualization capabilities
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
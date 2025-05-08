# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

- Install dependencies: `npm install`
- Start development server: `npm run dev` (includes hot reload)
- Build for production: `npm run build`
- Run in a specific port: `npm run dev -- --port 3000`
- Preview production build: `npm run build && npm run preview`
- Check for TypeScript errors: `npx tsc --noEmit`
- Run ESLint: `npx eslint src/**/*.{ts,tsx}`
- Format code with Prettier: `npx prettier --write src/`

## Project Architecture

This is a React dashboard template built with TypeScript, Vite, and TailwindCSS that showcases Material Design-inspired UI components.

### Technology Stack

- **React 18**: A JavaScript library for building user interfaces
- **TypeScript**: Static type-checking for JavaScript
- **Vite**: Fast, modern frontend build tool
- **TailwindCSS**: Utility-first CSS framework for styling
- **Shadcn UI**: Component library built on Radix UI primitives
- **Chart.js/react-chartjs-2**: Data visualization libraries
- **React Router**: Client-side routing between dashboard sections
- **React Hook Form**: Form handling and validation
- **Lucide React**: Icon library
- **Radix UI**: Headless UI component primitives

### Core Architectural Patterns

- **Component-Based Architecture**: The application is built using reusable, composable components
- **Layout Composition**: Core layout elements are composed together to form the application shell
- **Atomic Design Principles**: UI components follow atomic design methodology (atoms, molecules, organisms)
- **Responsive Design**: All components and layouts are designed to be responsive across device sizes
- **Accessibility-First**: UI components are built with accessibility in mind using Radix UI primitives
- **Theme Customization**: Tailwind CSS is extended with custom theme variables and design tokens
- **Route-Based Code Organization**: Features are organized by routes/pages for clear separation of concerns
- **Variant-Based Components**: Components use class-variance-authority to handle different visual variants

### Project Structure

- `/src/components/ui/`: Reusable UI components (buttons, cards, modals, etc.)
- `/src/screens/`: Page components organized by feature
  - `/Dashboard/`: Main dashboard view with multiple sections (Analytics, Orders, Inventory, etc.)
  - `/Buttons/`: Different button variants (Primary, Secondary, Ghost, etc.)
  - `/Forms/`: Form components and validation examples
  - `/Components/`: UI component showcases (Cards, Alerts, Tabs, etc.)
  - `/Charts/`: Data visualization examples (Line, Bar, Pie, etc.)
  - `/Examples/`: More complex use cases like FileUpload
- `/src/hooks/`: Custom React hooks like useToast
- `/src/lib/`: Utility functions like the cn helper for class composition

### Component Architecture

The project follows a component-based architecture with:

1. **Base UI Components**: Foundational UI elements in `/src/components/ui/`
2. **Page Components**: Top-level views in `/src/screens/`
3. **Section Components**: Reusable page sections in `/src/screens/*/sections/`
4. **Layout Components**: Common layout patterns (sidebar, topbar, etc.) in `/src/screens/Chip/sections/`

### Layout Structure

The application uses a standard dashboard layout with:
- Sidebar navigation (`SidebarByAnima`)
- Top navigation bar (`TopBarByAnima`)
- Title bar for each screen
- Main content area with responsive grid layouts
- Tab-based content organization in many screens

### Styling System

- Uses TailwindCSS with custom theme variables defined in `tailwind.config.js`
- Custom color system with light/dark theme support via CSS variables:
  - Primary colors: blue, light blue 
  - Secondary colors: purple, light purple
  - Action colors: success, warning, alert (with light variants)
  - Black/white with opacity levels (10%, 20%, 40%, 60%, 80%, 100%)
  - Surface colors for borders and backgrounds
- Consistent shadow definitions via `light-theme-shadow-medium`
- Border radius system with lg, md, sm variants based on a base radius variable
- Component variants using `class-variance-authority`
- Utility function `cn()` in `/src/lib/utils.ts` combining `clsx` and `tailwind-merge` for class composition:
  ```typescript
  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
  ```
- Dark mode support via the `class` strategy

### Routing

- Client-side routing with React Router
- Routes defined in `src/index.tsx`
- Organized by feature (dashboard, components, examples, etc.)
- Hierarchical route structure for related components (e.g., button variants)

## Working with the Codebase

### TypeScript Configuration

The project uses TypeScript with strict type checking and enforces best practices through compiler options:

- Strict type checking is enabled
- Unused locals and parameters are flagged as errors
- No fallthrough cases allowed in switch statements
- React JSX mode is enabled
- The project is set up to detect and prevent side effect imports

### Adding New Components

1. Review existing components in `/src/components/ui/` to understand styling patterns
2. Follow the established component architecture for new components
3. Use the design tokens and variables defined in `tailwind.config.js`
4. Implement responsive design for all new components
5. Consider adding variants using `class-variance-authority` for consistency
6. Ensure proper TypeScript typing for all component props

### Adding New Routes

1. Add the new route in `src/index.tsx`
2. Follow the existing routing pattern for organization
3. Include the route in the sidebar navigation if needed
4. Create the corresponding component in the appropriate directory
5. Update the sidebar menu structure if necessary

### Working with Charts

Chart visualizations in this project use Chart.js with react-chartjs-2. Here's how to work with them:

1. Chart components require proper registration of Chart.js components:
   ```tsx
   import {
     Chart as ChartJS,
     CategoryScale,
     LinearScale,
     PointElement,
     LineElement,
     Title,
     Tooltip,
     Legend,
     Filler,
     // Import additional components based on chart type
   } from "chart.js";
   
   // Register components
   ChartJS.register(
     CategoryScale,
     LinearScale,
     PointElement,
     LineElement,
     Title,
     Tooltip,
     Legend,
     Filler
     // Register additional components
   );
   ```

2. Chart data structure follows this pattern:
   ```tsx
   const chartData = {
     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
     datasets: [
       {
         label: "Sales 2025",
         data: [65, 59, 80, 81, 56, 55, 40, 74, 82, 90, 95, 100],
         borderColor: "rgb(0, 161, 255)",
         backgroundColor: "transparent",
         tension: 0.4,
         // Other styling options
       },
       // Additional datasets for multi-series charts
     ],
   };
   ```

3. Chart options structure:
   ```tsx
   const chartOptions = {
     responsive: true,
     maintainAspectRatio: false,
     plugins: {
       legend: {
         position: "top" as const,
       },
       title: {
         display: false,
       },
     },
     scales: {
       y: {
         beginAtZero: true,
         grid: {
           color: "rgba(0, 0, 0, 0.05)",
         },
       },
       x: {
         grid: {
           display: false,
         },
       },
     },
   };
   ```

4. Chart rendering:
   ```tsx
   <div className="h-[300px]">
     <Line data={chartData} options={chartOptions} />
   </div>
   ```

5. Special effects like gradient fills:
   ```tsx
   backgroundColor: (context) => {
     const ctx = context.chart.ctx;
     const gradient = ctx.createLinearGradient(0, 0, 0, 250);
     gradient.addColorStop(0, "rgba(0, 206, 182, 0.4)");
     gradient.addColorStop(1, "rgba(0, 206, 182, 0)");
     return gradient;
   },
   fill: true,
   ```

6. See complete examples in `/src/screens/Charts/` for:
   - Line charts (basic, multi-line, area)
   - Bar charts (basic, grouped, stacked)
   - Pie and doughnut charts
   - Area charts with gradients
   - Scatter plots

### Theme Customization

1. Theme variables are defined in `tailwind.config.js`
2. Color variables use CSS variables with a consistent naming pattern
3. Custom component variants are defined in their respective files (e.g., button variants in `button.tsx`)
4. When adding new theme elements, follow the CSS variable pattern

### Code Quality and Best Practices

1. Follow the TypeScript strict mode conventions already established
2. Use React hooks according to their rules (dependencies arrays, etc.)
3. Maintain component composition patterns (UI components → page components)
4. Use the utility functions in `/src/lib/utils.ts` for consistent styling
5. Follow accessibility best practices established in the UI components

## Common Development Tasks

### Add a New Dashboard Section

1. Create a new section component in `/src/screens/Dashboard/sections/`:
   ```tsx
   // NewSection.tsx
   import React from "react";
   import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
   
   export const NewSection = (): JSX.Element => {
     return (
       <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
         <Card>
           <CardHeader>
             <CardTitle>New Section Title</CardTitle>
           </CardHeader>
           <CardContent>
             {/* Section content here */}
           </CardContent>
         </Card>
         {/* Additional cards as needed */}
       </div>
     );
   };
   ```

2. Add the section to the Dashboard tabs in `/src/screens/Dashboard/Dashboard.tsx`:
   ```tsx
   // Import the new section
   import { NewSection } from "./sections/NewSection/NewSection";
   
   // Add a new tab trigger
   <TabsTrigger value="newSection" className="px-6">New Section</TabsTrigger>
   
   // Add the corresponding tab content
   <TabsContent value="newSection">
     <NewSection />
   </TabsContent>
   ```

### Add a New Navigation Menu Item

1. Modify the sidebar navigation in `/src/screens/Chip/sections/SidebarByAnima/SidebarByAnima.tsx`:
   ```tsx
   // Add to an existing section (e.g., appItems or dashboardItems)
   // For a top-level item:
   { icon: "/path-to-icon.png", label: "New Item", path: "/new-path" },
   
   // For an item with submenu:
   { 
     icon: "/path-to-icon.png", 
     label: "New Section", 
     hasSubmenu: true,
     submenuItems: [
       { label: "Submenu Item 1", path: "/new-section/item1" },
       { label: "Submenu Item 2", path: "/new-section/item2" },
     ]
   },
   ```

2. Add the corresponding route in `/src/index.tsx`

### Create a New UI Component Example

1. Create a new component example in the appropriate directory (e.g., `/src/screens/Components/`)
2. Follow the pattern of existing component examples with a clear demonstration and variants
3. Add to navigation through the sidebar component
4. Ensure the component uses appropriate Shadcn UI base components

## MCP Server Configuration

The project utilizes Claude's Model Context Protocol (MCP) for extended capabilities. The following MCP servers are configured for VS Code:

### Firecrawl MCP Server

```json
{
  "mcp": {
    "servers": {
      "firecrawl": {
        "command": "npx",
        "args": ["-y", "firecrawl-mcp"],
        "env": {
          "FIRECRAWL_API_KEY": "fc-d8d69ce1efb746df98ec53fc670ed8c6"
        }
      }
    }
  }
}
```

This configuration enables web scraping, crawling, and data extraction capabilities through the Firecrawl MCP server.

### iTerm MCP Server

```json
{
  "mcpServers": {
    "github.com/pashpashpash/iterm-mcp": {
      "command": "node",
      "args": ["${HOME}/Documents/mcp-servers/iterm-mcp/build/index.js"],
      "disabled": false,
      "autoApprove": ["*"],
      "description": "iTerm2 terminal access server",
      "errorHandling": {
        "maxRetries": 3,
        "retryDelay": 2000,
        "timeout": 15000
      },
      "logging": {
        "level": "info",
        "file": "${HOME}/.claude-logs/iterm-mcp-server.log"
      }
    }
  }
}
```

The iTerm MCP server provides the following capabilities:
- `write_to_terminal`: Write commands to the active iTerm terminal
- `read_terminal_output`: Read output from the active iTerm terminal
- `send_control_character`: Send control characters (Ctrl+C, Ctrl+Z, etc.) to the terminal
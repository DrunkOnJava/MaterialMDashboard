# Dashboard UI Component Library

A reusable UI/UX library for building dashboard interfaces based on the Material Dashboard project.

## Installation

Simply import the components you need from the dashboard-ui directory:

```javascript
import { 
  DashboardContainer, 
  DashboardHeader, 
  MetricCard 
} from './components/dashboard-ui';
```

Make sure to import the main stylesheet too:

```javascript
import './components/dashboard-ui/styles/theme.css';
```

## Core Components

### Layout Components

#### DashboardContainer

The main container for your dashboard.

```jsx
<DashboardContainer>
  {/* Dashboard content */}
</DashboardContainer>
```

#### DashboardHeader

Header component with logo and action buttons.

```jsx
<DashboardHeader
  title="Project Dashboard"
  logoText="My Dashboard"
  logoIcon="📊"
  actions={[
    { label: "View Report", onClick: () => console.log("View Report") },
    { label: "Share Progress", onClick: () => console.log("Share Progress") }
  ]}
/>
```

#### DashboardMain

Main content container with optional title and subtitle.

```jsx
<DashboardMain
  title="Project Progress Dashboard"
  subtitle="Track development progress across application variants and key features"
>
  {/* Dashboard content */}
</DashboardMain>
```

### Card Components

#### MetricCard

Display key metrics with progress bars.

```jsx
<MetricCard
  title="Overall Project Completion"
  value="63%"
  progress={63}
  progressColor="primary"
  details="32/51 tasks completed"
  subDetails="Updated May 13, 2025"
/>
```

#### AppCard

Show application details with feature lists.

```jsx
<AppCard
  appName="Lightweight"
  appIcon="1"
  title="Minimal Focus Variant"
  version="v0.8.2"
  description="Streamlined interface optimized for simple file management and quick metadata editing"
  progress={80}
  progressDetails="80% Complete (12/15 features implemented)"
  features={[
    { name: "Dark Mode Implementation", details: "Complete with theme toggle and system preference detection", status: "completed" },
    { name: "File Browser Integration", details: "Basic file system navigation with directory tree", status: "completed" },
    { name: "Metadata Extraction", details: "In progress - 65% complete", status: "in-progress" },
    { name: "Cross-Platform File System", details: "Planned for next sprint", status: "pending" }
  ]}
/>
```

#### ChartCard

Container for data visualizations.

```jsx
<ChartCard title="Feature Implementation Progress">
  <BarChart
    data={[
      { label: "Core Architecture", value: 80, color: "#10b981" },
      { label: "UI Components", value: 90, color: "#10b981" },
      { label: "Batch Processing", value: 100, color: "#10b981" },
      { label: "Metadata System", value: 50, color: "#f59e0b" },
      { label: "Database Layer", value: 30, color: "#f59e0b" },
      { label: "Plugin System", value: 10, color: "#ef4444" }
    ]}
  />
</ChartCard>
```

### Indicator Components

#### ProgressBar

Show progress with various styles.

```jsx
<ProgressBar
  progress={75}
  color="success"
  height={10}
  animated={true}
/>

<ProgressDetails
  primaryText="15/20 features complete"
  secondaryText="5 in development"
/>
```

#### FeatureStatus

Status indicators for features.

```jsx
<FeatureStatus status="completed" />
<FeatureStatus status="in-progress" />
<FeatureStatus status="pending" />

<StatusBadge status="success" text="Completed" />
<StatusBadge status="warning" text="In Progress" />
<StatusBadge status="error" text="Failed" />
```

### Timeline Components

#### Timeline

Show project milestones in a horizontal timeline.

```jsx
<Timeline>
  <TimelinePoint 
    label="Project Start"
    date="Jan 5, 2025"
    status="completed"
  />
  <TimelinePoint 
    label="Core Architecture"
    date="Feb 20, 2025"
    status="completed"
  />
  <TimelinePoint 
    label="Metadata System"
    date="May 25, 2025"
    status="active"
  />
  <TimelinePoint 
    label="Beta Release"
    date="Sep 30, 2025"
    status="pending"
  />
</Timeline>
```

#### VerticalTimeline

Show project milestones in a vertical timeline.

```jsx
<VerticalTimeline>
  <TimelinePoint 
    label="Project Start"
    sublabel="Initial repository setup and project planning"
    date="Jan 5, 2025"
    status="completed"
    showLine={true}
  />
  <TimelinePoint 
    label="Core Architecture"
    sublabel="Base components and system architecture"
    date="Feb 20, 2025"
    status="completed"
    showLine={true}
  />
  <TimelinePoint 
    label="Beta Release"
    sublabel="Limited feature release to testers"
    date="Sep 30, 2025"
    status="pending"
    showLine={true}
  />
</VerticalTimeline>
```

### Chart Components

#### BarChart

Simple bar chart for data visualization.

```jsx
<BarChart
  data={[
    { label: "Core Architecture", value: 80, color: "#10b981" },
    { label: "UI Components", value: 90, color: "#10b981" },
    { label: "Batch Processing", value: 100, color: "#10b981" },
    { label: "Metadata System", value: 50, color: "#f59e0b" },
    { label: "Database Layer", value: 30, color: "#f59e0b" },
    { label: "Plugin System", value: 10, color: "#ef4444" }
  ]}
  title="Feature Implementation Progress"
  barWidth={40}
  height={250}
/>
```

#### PieChart and DonutChart

Simple pie and donut charts.

```jsx
<PieChart
  data={[
    { label: "Completed", value: 32, color: "#10b981", description: "32 tasks" },
    { label: "In Progress", value: 9, color: "#f59e0b", description: "9 tasks" },
    { label: "Pending", value: 10, color: "#ef4444", description: "10 tasks" }
  ]}
  title="Task Status Distribution"
  showLegend={true}
  size={180}
/>

<DonutChart
  data={[
    { label: "Completed", value: 63, color: "#10b981" },
    { label: "In Progress", value: 18, color: "#f59e0b" },
    { label: "Pending", value: 19, color: "#ef4444" }
  ]}
  title="Task Status Distribution"
  centerText="63%"
  size={180}
/>
```

## Complete Dashboard Example

Here's a more complete example of a dashboard:

```jsx
import React from 'react';
import {
  DashboardContainer,
  DashboardHeader,
  DashboardMain,
  DashboardSectionTitle,
  MetricCard,
  AppCard,
  ChartCard,
  BarChart,
  PieChart,
  Timeline,
  TimelinePoint
} from './components/dashboard-ui';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardHeader
        title="Project Dashboard"
        logoText="MetaFileManager"
        logoIcon="M"
        actions={[
          { label: "View Report", onClick: () => console.log("View Report") },
          { label: "Share Progress", onClick: () => console.log("Share Progress") }
        ]}
      />
      
      <DashboardMain
        title="Project Progress Dashboard"
        subtitle="Track development progress across application variants and key features"
      >
        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <MetricCard
            title="Overall Project Completion"
            value="63%"
            progress={63}
            progressColor="primary"
            details="32/51 tasks completed"
            subDetails="Updated May 13, 2025"
          />
          
          <MetricCard
            title="Core Features"
            value="75%"
            progress={75}
            progressColor="success"
            details="15/20 features complete"
            subDetails="5 in development"
          />
          
          <MetricCard
            title="Test Coverage"
            value="58%"
            progress={58}
            progressColor="warning"
            details="142 tests passing"
            subDetails="Target: 250 tests"
          />
          
          <MetricCard
            title="Open Issues"
            value="14"
            progress={35}
            progressColor="error"
            details="5 critical, 9 medium/low"
            subDetails="6 assigned"
          />
        </div>
        
        {/* App Progress Section */}
        <div className="mb-10">
          <DashboardSectionTitle title="Application Variants Progress" />
          
          <AppCard
            appName="Lightweight"
            appIcon="1"
            title="Minimal Focus Variant"
            version="v0.8.2"
            description="Streamlined interface optimized for simple file management"
            progress={80}
            progressDetails="80% Complete (12/15 features implemented)"
            features={[
              { name: "Dark Mode", details: "Complete with theme toggle", status: "completed" },
              { name: "File Browser", details: "Basic file system navigation", status: "completed" },
              { name: "Metadata Extraction", details: "In progress - 65% complete", status: "in-progress" },
              { name: "Cross-Platform Support", details: "Planned for next sprint", status: "pending" }
            ]}
          />
        </div>
        
        {/* Timeline Section */}
        <div className="mb-10">
          <DashboardSectionTitle title="Development Timeline" />
          
          <Timeline>
            <TimelinePoint label="Project Start" date="Jan 5, 2025" status="completed" />
            <TimelinePoint label="Core Architecture" date="Feb 20, 2025" status="completed" />
            <TimelinePoint label="Batch Processing" date="Apr 10, 2025" status="completed" />
            <TimelinePoint label="Metadata System" date="May 25, 2025" status="active" />
            <TimelinePoint label="Database Layer" date="Jul 15, 2025" status="pending" />
            <TimelinePoint label="Beta Release" date="Sep 30, 2025" status="pending" />
          </Timeline>
        </div>
        
        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ChartCard title="Feature Implementation Progress">
            <BarChart
              data={[
                { label: "Core Architecture", value: 80, color: "#10b981" },
                { label: "UI Components", value: 90, color: "#10b981" },
                { label: "Batch Processing", value: 100, color: "#10b981" },
                { label: "Metadata System", value: 50, color: "#f59e0b" },
                { label: "Database Layer", value: 30, color: "#f59e0b" },
                { label: "Plugin System", value: 10, color: "#ef4444" }
              ]}
            />
          </ChartCard>
          
          <ChartCard title="Task Status Distribution">
            <PieChart
              data={[
                { label: "Completed", value: 63, color: "#10b981", description: "32 tasks" },
                { label: "In Progress", value: 18, color: "#f59e0b", description: "9 tasks" },
                { label: "Pending", value: 19, color: "#ef4444", description: "10 tasks" }
              ]}
              showLegend={true}
            />
          </ChartCard>
        </div>
      </DashboardMain>
    </DashboardContainer>
  );
};

export default Dashboard;
```

## Theme Customization

The component library uses CSS variables for theming. You can customize these variables in your own CSS:

```css
:root {
  /* Primary Colors */
  --dashboard-primary: #4361ee;
  --dashboard-success: #10b981;
  --dashboard-warning: #f59e0b;
  --dashboard-error: #ef4444;
  
  /* Background Colors */
  --dashboard-bg-light: #f9fafb;
  --dashboard-card-light: #ffffff;
  
  /* Border and Radius */
  --dashboard-border-light: #e5e7eb;
  --dashboard-border-radius-lg: 8px;
  
  /* Text Colors */
  --dashboard-text-primary-light: #111827;
  --dashboard-text-secondary-light: #6b7280;
}
```

## Dark Mode Support

The component library includes built-in dark mode support via CSS media queries. You can also add your own dark mode classes by modifying the theme CSS variables.
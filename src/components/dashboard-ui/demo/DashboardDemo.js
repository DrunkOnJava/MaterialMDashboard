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
} from '../index';

/**
 * Sample dashboard implementation to demonstrate the component library
 */
export const DashboardDemo = () => {
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
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
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
        <div style={{ marginBottom: '40px' }}>
          <DashboardSectionTitle title="Application Variants Progress" />
          
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
              { name: "Batch Processing System", details: "File operations with real-time progress tracking", status: "completed" },
              { name: "Metadata Extraction", details: "In progress - 65% complete", status: "in-progress" },
              { name: "Cross-Platform File System", details: "Planned for next sprint", status: "pending" }
            ]}
          />
          
          <AppCard
            appName="Professional"
            appIcon="2"
            title="Professional Dashboard Variant"
            version="v0.6.5"
            description="Comprehensive dashboard with advanced metadata management features and analytics"
            progress={65}
            progressDetails="65% Complete (13/20 features implemented)"
            features={[
              { name: "Advanced Search Filters", details: "Complex query builder with metadata field search", status: "completed" },
              { name: "Batch Processing", details: "Multi-file operations with status tracking", status: "completed" },
              { name: "Analytics Dashboard", details: "In progress - 40% complete", status: "in-progress" },
              { name: "Database Integration", details: "In progress - 30% complete", status: "in-progress" },
              { name: "Team Collaboration", details: "Not started", status: "pending" }
            ]}
          />
        </div>
        
        {/* Timeline Section */}
        <div style={{ marginBottom: '40px' }}>
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
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',
          gap: '24px'
        }}>
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
              height={250}
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
              size={180}
            />
          </ChartCard>
        </div>
      </DashboardMain>
    </DashboardContainer>
  );
};

export default DashboardDemo;
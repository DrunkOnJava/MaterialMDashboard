import React from 'react';

/**
 * Main content container for the dashboard
 * Provides proper padding and structure for dashboard content
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Dashboard content
 * @param {string} [props.title] - Main page title
 * @param {string} [props.subtitle] - Page subtitle or description
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Dashboard main content component
 */
export const DashboardMain = ({ 
  children, 
  title,
  subtitle,
  className = '' 
}) => {
  return (
    <main className={`dashboard-main ${className}`}>
      {title && (
        <h1 className="dashboard-page-title">{title}</h1>
      )}
      
      {subtitle && (
        <p className="dashboard-page-subtitle">{subtitle}</p>
      )}
      
      {children}
    </main>
  );
};

/**
 * Section title component for dashboard sections
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Section title component
 */
export const DashboardSectionTitle = ({ title, className = '' }) => {
  return (
    <h2 className={`dashboard-section-title ${className}`}>{title}</h2>
  );
};

// Add CSS for the component
const style = document.createElement('style');
style.textContent = `
  .dashboard-main {
    padding: 40px;
  }
  
  .dashboard-page-title {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 10px;
    color: var(--dashboard-text-primary-light);
  }
  
  .dashboard-page-subtitle {
    color: var(--dashboard-text-secondary-light);
    margin-bottom: 32px;
    line-height: 1.5;
  }
  
  .dashboard-section-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--dashboard-border-light);
    color: var(--dashboard-text-primary-light);
  }
  
  @media (prefers-color-scheme: dark) {
    .dashboard-page-title {
      color: var(--dashboard-text-primary-dark);
    }
    
    .dashboard-page-subtitle {
      color: var(--dashboard-text-secondary-dark);
    }
    
    .dashboard-section-title {
      color: var(--dashboard-text-primary-dark);
      border-bottom: 1px solid var(--dashboard-border-dark);
    }
  }
`;
document.head.appendChild(style);
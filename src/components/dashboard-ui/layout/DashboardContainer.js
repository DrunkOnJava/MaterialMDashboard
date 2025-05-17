import React from 'react';

/**
 * Main container for the dashboard
 * Provides overall structure and consistent styling
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Dashboard content
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Dashboard container component
 */
export const DashboardContainer = ({ children, className = '' }) => {
  return (
    <div className={`dashboard-theme dashboard-container ${className}`}>
      {children}
    </div>
  );
};

// Add CSS for the component
const style = document.createElement('style');
style.textContent = `
  .dashboard-container {
    max-width: 1200px;
    margin: 0 auto;
    background: var(--dashboard-card-light);
    border-radius: var(--dashboard-border-radius-lg);
    box-shadow: var(--dashboard-shadow);
    overflow: hidden;
  }
  
  @media (prefers-color-scheme: dark) {
    .dashboard-container {
      background: var(--dashboard-card-dark);
    }
  }
`;
document.head.appendChild(style);
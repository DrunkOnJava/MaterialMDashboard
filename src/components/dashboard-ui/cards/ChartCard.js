import React from 'react';

/**
 * Chart card component for displaying data visualizations
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Chart title
 * @param {React.ReactNode} props.children - Chart content
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Chart card component
 */
export const ChartCard = ({ 
  title, 
  children,
  className = '' 
}) => {
  return (
    <div className={`dashboard-chart-card ${className}`}>
      <div className="dashboard-chart-title">{title}</div>
      <div className="dashboard-chart-content">
        {children}
      </div>
    </div>
  );
};

/**
 * Chart placeholder component for when chart data is not available
 * 
 * @param {Object} props - Component props
 * @param {string} [props.message] - Message to display
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Chart placeholder component
 */
export const ChartPlaceholder = ({ 
  message = 'Chart data not available',
  className = '' 
}) => {
  return (
    <div className={`dashboard-chart-placeholder ${className}`}>
      {message}
    </div>
  );
};

// Add CSS for the component
const style = document.createElement('style');
style.textContent = `
  .dashboard-chart-card {
    border: 1px solid var(--dashboard-border-light);
    border-radius: var(--dashboard-border-radius-lg);
    padding: 24px;
    background-color: var(--dashboard-card-light);
  }
  
  .dashboard-chart-title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
    color: var(--dashboard-text-primary-light);
  }
  
  .dashboard-chart-content {
    position: relative;
    width: 100%;
    min-height: 250px;
  }
  
  .dashboard-chart-placeholder {
    background-color: var(--dashboard-bg-light);
    border-radius: var(--dashboard-border-radius-md);
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--dashboard-text-secondary-light);
    border: 1px dashed var(--dashboard-border-light);
  }
  
  @media (prefers-color-scheme: dark) {
    .dashboard-chart-card {
      border-color: var(--dashboard-border-dark);
      background-color: var(--dashboard-card-dark);
    }
    
    .dashboard-chart-title {
      color: var(--dashboard-text-primary-dark);
    }
    
    .dashboard-chart-placeholder {
      background-color: var(--dashboard-bg-dark);
      border-color: var(--dashboard-border-dark);
      color: var(--dashboard-text-secondary-dark);
    }
  }
`;
document.head.appendChild(style);
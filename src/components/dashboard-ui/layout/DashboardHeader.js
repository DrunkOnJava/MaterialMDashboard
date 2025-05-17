import React from 'react';

/**
 * Dashboard header component with logo and action buttons
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Dashboard title
 * @param {string} [props.logoText] - Text for the logo
 * @param {React.ReactNode} [props.logoIcon] - Icon for the logo
 * @param {Array} [props.actions] - Array of action button objects {label, onClick}
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Dashboard header component
 */
export const DashboardHeader = ({ 
  title, 
  logoText,
  logoIcon,
  actions = [],
  className = '' 
}) => {
  return (
    <header className={`dashboard-header ${className}`}>
      <div className="dashboard-logo">
        {logoIcon && (
          <div className="dashboard-logo-icon">
            {logoIcon}
          </div>
        )}
        <span>{logoText || title}</span>
      </div>
      
      {actions.length > 0 && (
        <div className="dashboard-header-actions">
          {actions.map((action, index) => (
            <div 
              key={index} 
              className="dashboard-header-button" 
              onClick={action.onClick}
            >
              {action.label}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

// Add CSS for the component
const style = document.createElement('style');
style.textContent = `
  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    border-bottom: 1px solid var(--dashboard-border-light);
    background-color: var(--dashboard-primary);
    color: white;
  }
  
  .dashboard-logo {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 20px;
  }
  
  .dashboard-logo-icon {
    width: 32px;
    height: 32px;
    background-color: white;
    border-radius: var(--dashboard-border-radius-md);
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--dashboard-primary);
  }
  
  .dashboard-header-actions {
    display: flex;
    align-items: center;
  }
  
  .dashboard-header-button {
    padding: 8px 16px;
    border-radius: var(--dashboard-border-radius-sm);
    background-color: rgba(255, 255, 255, 0.2);
    margin-left: 10px;
    font-size: 14px;
    cursor: pointer;
  }
  
  .dashboard-header-button:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  
  @media (prefers-color-scheme: dark) {
    .dashboard-header {
      border-bottom: 1px solid var(--dashboard-border-dark);
    }
  }
`;
document.head.appendChild(style);
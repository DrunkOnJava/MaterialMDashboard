import React from 'react';

/**
 * Feature status indicator component
 * 
 * @param {Object} props - Component props
 * @param {string} props.status - Status value ('completed', 'in-progress', 'pending')
 * @param {React.ReactNode} [props.children] - Custom content to display in the status indicator
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Feature status indicator component
 */
export const FeatureStatus = ({ 
  status = 'pending',
  children,
  className = '' 
}) => {
  const statusSymbol = {
    'completed': '✓',
    'in-progress': '→',
    'pending': '○'
  }[status] || '○';

  return (
    <div className={`dashboard-feature-status dashboard-status-${status} ${className}`}>
      {children || statusSymbol}
    </div>
  );
};

/**
 * Status badge component for displaying status in text form
 * 
 * @param {Object} props - Component props
 * @param {string} props.status - Status value ('completed', 'in-progress', 'pending', 'success', 'warning', 'error')
 * @param {string} [props.text] - Text to display in the badge
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Status badge component
 */
export const StatusBadge = ({ 
  status,
  text,
  className = '' 
}) => {
  const statusMap = {
    'completed': { text: 'Completed', color: 'success' },
    'in-progress': { text: 'In Progress', color: 'warning' },
    'pending': { text: 'Pending', color: 'default' },
    'success': { text: 'Success', color: 'success' },
    'warning': { text: 'Warning', color: 'warning' },
    'error': { text: 'Error', color: 'error' }
  };
  
  const statusConfig = statusMap[status] || { text: 'Unknown', color: 'default' };
  
  return (
    <div className={`dashboard-status-badge dashboard-badge-${statusConfig.color} ${className}`}>
      {text || statusConfig.text}
    </div>
  );
};

// Add CSS for the components
const style = document.createElement('style');
style.textContent = `
  .dashboard-feature-status {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
  }
  
  .dashboard-status-completed {
    background-color: var(--dashboard-status-completed-bg);
    color: var(--dashboard-status-completed-text);
  }
  
  .dashboard-status-in-progress {
    background-color: var(--dashboard-status-progress-bg);
    color: var(--dashboard-status-progress-text);
  }
  
  .dashboard-status-pending {
    background-color: var(--dashboard-status-pending-bg);
    color: var(--dashboard-status-pending-text);
  }
  
  .dashboard-status-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
  }
  
  .dashboard-badge-success {
    background-color: var(--dashboard-status-completed-bg);
    color: var(--dashboard-status-completed-text);
  }
  
  .dashboard-badge-warning {
    background-color: var(--dashboard-status-progress-bg);
    color: var(--dashboard-status-progress-text);
  }
  
  .dashboard-badge-error {
    background-color: #fee2e2;
    color: var(--dashboard-error);
  }
  
  .dashboard-badge-default {
    background-color: var(--dashboard-status-pending-bg);
    color: var(--dashboard-status-pending-text);
  }
  
  @media (prefers-color-scheme: dark) {
    .dashboard-status-pending {
      background-color: var(--dashboard-status-pending-bg-dark);
      color: var(--dashboard-status-pending-text-dark);
    }
    
    .dashboard-badge-default {
      background-color: var(--dashboard-status-pending-bg-dark);
      color: var(--dashboard-status-pending-text-dark);
    }
    
    .dashboard-badge-error {
      background-color: rgba(239, 68, 68, 0.2);
    }
  }
`;
document.head.appendChild(style);
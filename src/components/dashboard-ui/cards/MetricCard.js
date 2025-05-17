import React from 'react';

/**
 * Metric card component for displaying key metrics with optional progress bar
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Metric title
 * @param {string|number} props.value - Metric value
 * @param {number} [props.progress] - Progress percentage (0-100)
 * @param {string} [props.progressColor] - Color theme for progress bar ('primary', 'success', 'warning', 'error')
 * @param {string} [props.details] - Additional details text
 * @param {string} [props.subDetails] - Secondary details text
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Metric card component
 */
export const MetricCard = ({ 
  title, 
  value, 
  progress,
  progressColor = 'primary',
  details,
  subDetails,
  className = '' 
}) => {
  return (
    <div className={`dashboard-metric-card ${className}`}>
      <div className="dashboard-metric-title">{title}</div>
      <div className="dashboard-metric-value">{value}</div>
      
      {progress !== undefined && (
        <div className="dashboard-progress-bar-container">
          <div 
            className={`dashboard-progress-bar dashboard-progress-${progressColor}`} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
      
      {(details || subDetails) && (
        <div className="dashboard-progress-details">
          {details && <span>{details}</span>}
          {subDetails && <span>{subDetails}</span>}
        </div>
      )}
    </div>
  );
};

// Add CSS for the component
const style = document.createElement('style');
style.textContent = `
  .dashboard-metric-card {
    border: 1px solid var(--dashboard-border-light);
    border-radius: var(--dashboard-border-radius-lg);
    padding: 24px;
    display: flex;
    flex-direction: column;
    background-color: var(--dashboard-card-light);
  }
  
  .dashboard-metric-title {
    font-size: 16px;
    font-weight: 500;
    color: var(--dashboard-text-secondary-light);
    margin-bottom: 8px;
  }
  
  .dashboard-metric-value {
    font-size: 28px;
    font-weight: 600;
    color: var(--dashboard-text-primary-light);
    margin-bottom: 16px;
  }
  
  .dashboard-progress-bar-container {
    width: 100%;
    height: 12px;
    background-color: #f1f5f9;
    border-radius: var(--dashboard-border-radius-sm);
    overflow: hidden;
    margin-bottom: 8px;
  }
  
  .dashboard-progress-bar {
    height: 100%;
    border-radius: var(--dashboard-border-radius-sm);
    transition: width 1s ease-in-out;
  }
  
  .dashboard-progress-primary {
    background-color: var(--dashboard-primary);
  }
  
  .dashboard-progress-success {
    background-color: var(--dashboard-success);
  }
  
  .dashboard-progress-warning {
    background-color: var(--dashboard-warning);
  }
  
  .dashboard-progress-error {
    background-color: var(--dashboard-error);
  }
  
  .dashboard-progress-details {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: var(--dashboard-text-secondary-light);
  }
  
  @media (prefers-color-scheme: dark) {
    .dashboard-metric-card {
      border-color: var(--dashboard-border-dark);
      background-color: var(--dashboard-card-dark);
    }
    
    .dashboard-metric-title {
      color: var(--dashboard-text-secondary-dark);
    }
    
    .dashboard-metric-value {
      color: var(--dashboard-text-primary-dark);
    }
    
    .dashboard-progress-bar-container {
      background-color: #334155;
    }
    
    .dashboard-progress-details {
      color: var(--dashboard-text-secondary-dark);
    }
  }
`;
document.head.appendChild(style);
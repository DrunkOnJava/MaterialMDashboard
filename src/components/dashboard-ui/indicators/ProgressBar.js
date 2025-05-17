import React from 'react';

/**
 * Progress bar component
 * 
 * @param {Object} props - Component props
 * @param {number} props.progress - Progress percentage (0-100)
 * @param {string} [props.color] - Color theme ('primary', 'success', 'warning', 'error')
 * @param {number} [props.height] - Height of the progress bar in pixels
 * @param {boolean} [props.animated] - Whether to animate the progress bar
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Progress bar component
 */
export const ProgressBar = ({ 
  progress, 
  color = 'primary',
  height = 12,
  animated = false,
  className = '' 
}) => {
  return (
    <div 
      className={`dashboard-progress-bar-container ${className}`}
      style={{ height: `${height}px` }}
    >
      <div 
        className={`dashboard-progress-bar dashboard-progress-${color} ${animated ? 'dashboard-progress-animated' : ''}`} 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

/**
 * Progress details component for displaying additional information about progress
 * 
 * @param {Object} props - Component props
 * @param {string} [props.primaryText] - Primary text (left-aligned)
 * @param {string} [props.secondaryText] - Secondary text (right-aligned)
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Progress details component
 */
export const ProgressDetails = ({ 
  primaryText, 
  secondaryText,
  className = '' 
}) => {
  return (
    <div className={`dashboard-progress-details ${className}`}>
      {primaryText && <span>{primaryText}</span>}
      {secondaryText && <span>{secondaryText}</span>}
    </div>
  );
};

// Add CSS for the component
const style = document.createElement('style');
style.textContent = `
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
    transition: width 0.5s ease-in-out;
  }
  
  .dashboard-progress-animated {
    position: relative;
    overflow: hidden;
  }
  
  .dashboard-progress-animated::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg, 
      rgba(255, 255, 255, 0) 0%, 
      rgba(255, 255, 255, 0.15) 50%, 
      rgba(255, 255, 255, 0) 100%
    );
    animation: progressShimmer 2s infinite;
  }
  
  @keyframes progressShimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
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
    .dashboard-progress-bar-container {
      background-color: #334155;
    }
    
    .dashboard-progress-details {
      color: var(--dashboard-text-secondary-dark);
    }
  }
`;
document.head.appendChild(style);
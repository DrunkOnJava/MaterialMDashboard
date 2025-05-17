import React from 'react';

/**
 * Feature item for app cards
 * 
 * @param {Object} props - Component props
 * @param {string} props.name - Feature name
 * @param {string} [props.details] - Feature details or description
 * @param {string} [props.status] - Feature status ('completed', 'in-progress', 'pending')
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Feature item component
 */
export const FeatureItem = ({ 
  name, 
  details, 
  status = 'pending',
  className = '' 
}) => {
  const statusSymbol = {
    'completed': '✓',
    'in-progress': '→',
    'pending': '○'
  }[status] || '○';

  return (
    <div className={`dashboard-feature-item ${className}`}>
      <div className={`dashboard-feature-status dashboard-status-${status}`}>
        {statusSymbol}
      </div>
      <div>
        <div className="dashboard-feature-name">{name}</div>
        {details && <div className="dashboard-feature-details">{details}</div>}
      </div>
    </div>
  );
};

/**
 * App card component with sidebar and feature list
 * 
 * @param {Object} props - Component props
 * @param {string} props.appName - App name
 * @param {string|React.ReactNode} [props.appIcon] - App icon
 * @param {string} props.title - App title
 * @param {string} [props.version] - App version
 * @param {string} [props.description] - App description
 * @param {number} [props.progress] - Progress percentage (0-100)
 * @param {string} [props.progressDetails] - Progress details text
 * @param {Array} [props.features] - Array of feature objects {name, details, status}
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} App card component
 */
export const AppCard = ({
  appName,
  appIcon,
  title,
  version,
  description,
  progress,
  progressDetails,
  features = [],
  className = ''
}) => {
  return (
    <div className={`dashboard-app-card ${className}`}>
      <div className="dashboard-app-sidebar">
        <div className="dashboard-app-icon">
          {appIcon || appName.charAt(0)}
        </div>
        <div className="dashboard-app-name">{appName}</div>
      </div>
      
      <div className="dashboard-app-details">
        <div className="dashboard-app-title">
          {title}
          {version && <span className="dashboard-app-version">{version}</span>}
        </div>
        
        {description && (
          <p className="dashboard-app-description">{description}</p>
        )}
        
        {progress !== undefined && (
          <>
            <div className="dashboard-progress-bar-container">
              <div 
                className="dashboard-progress-bar dashboard-progress-primary" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            {progressDetails && (
              <div className="dashboard-progress-details">
                <span>{progressDetails}</span>
              </div>
            )}
          </>
        )}
        
        {features.length > 0 && (
          <div className="dashboard-feature-list">
            {features.map((feature, index) => (
              <FeatureItem 
                key={index}
                name={feature.name}
                details={feature.details}
                status={feature.status}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Add CSS for the component
const style = document.createElement('style');
style.textContent = `
  .dashboard-app-card {
    display: flex;
    border: 1px solid var(--dashboard-border-light);
    border-radius: var(--dashboard-border-radius-lg);
    overflow: hidden;
    margin-bottom: 24px;
    background-color: var(--dashboard-card-light);
  }
  
  .dashboard-app-sidebar {
    width: 120px;
    background-color: var(--dashboard-bg-light);
    padding: 24px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid var(--dashboard-border-light);
  }
  
  .dashboard-app-icon {
    width: 64px;
    height: 64px;
    background-color: var(--dashboard-primary);
    border-radius: var(--dashboard-border-radius-xl);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
  }
  
  .dashboard-app-name {
    font-weight: 600;
    text-align: center;
    padding: 0 12px;
    color: var(--dashboard-text-primary-light);
  }
  
  .dashboard-app-details {
    flex: 1;
    padding: 24px;
  }
  
  .dashboard-app-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--dashboard-text-primary-light);
  }
  
  .dashboard-app-version {
    font-size: 12px;
    color: var(--dashboard-text-secondary-light);
    font-weight: normal;
  }
  
  .dashboard-app-description {
    color: var(--dashboard-text-secondary-light);
    margin-bottom: 20px;
    line-height: 1.5;
  }
  
  .dashboard-feature-list {
    margin-top: 20px;
  }
  
  .dashboard-feature-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 12px;
  }
  
  .dashboard-feature-status {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 12px;
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
  
  .dashboard-feature-name {
    font-weight: 500;
    color: var(--dashboard-text-primary-light);
  }
  
  .dashboard-feature-details {
    font-size: 12px;
    color: var(--dashboard-text-secondary-light);
    margin-top: 4px;
  }
  
  @media (prefers-color-scheme: dark) {
    .dashboard-app-card {
      border-color: var(--dashboard-border-dark);
      background-color: var(--dashboard-card-dark);
    }
    
    .dashboard-app-sidebar {
      background-color: var(--dashboard-bg-dark);
      border-right-color: var(--dashboard-border-dark);
    }
    
    .dashboard-app-name {
      color: var(--dashboard-text-primary-dark);
    }
    
    .dashboard-app-title {
      color: var(--dashboard-text-primary-dark);
    }
    
    .dashboard-app-version {
      color: var(--dashboard-text-secondary-dark);
    }
    
    .dashboard-app-description {
      color: var(--dashboard-text-secondary-dark);
    }
    
    .dashboard-feature-name {
      color: var(--dashboard-text-primary-dark);
    }
    
    .dashboard-feature-details {
      color: var(--dashboard-text-secondary-dark);
    }
    
    .dashboard-status-pending {
      background-color: var(--dashboard-status-pending-bg-dark);
      color: var(--dashboard-status-pending-text-dark);
    }
  }
`;
document.head.appendChild(style);
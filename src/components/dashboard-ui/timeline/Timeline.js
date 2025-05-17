import React from 'react';

/**
 * Timeline component for visualizing project milestones and progress
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Timeline point components
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Timeline component
 */
export const Timeline = ({ 
  children,
  className = '' 
}) => {
  return (
    <div className={`dashboard-timeline ${className}`}>
      {children}
    </div>
  );
};

/**
 * Timeline point component for individual milestones
 * 
 * @param {Object} props - Component props
 * @param {string} props.label - Point label
 * @param {string} [props.date] - Optional date text
 * @param {string} [props.status] - Status ('completed', 'active', 'pending')
 * @param {React.ReactNode} [props.icon] - Custom icon for the point
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Timeline point component
 */
export const TimelinePoint = ({ 
  label, 
  date,
  status = 'pending',
  icon,
  className = '' 
}) => {
  const statusSymbol = {
    'completed': '✓',
    'active': '●',
    'pending': '○'
  }[status] || '○';

  return (
    <div className={`dashboard-timeline-point ${className}`}>
      <div className={`dashboard-point-marker dashboard-marker-${status}`}>
        {icon || statusSymbol}
      </div>
      <div className="dashboard-point-label">{label}</div>
      {date && <div className="dashboard-point-date">{date}</div>}
    </div>
  );
};

// Add CSS for the components
const style = document.createElement('style');
style.textContent = `
  .dashboard-timeline {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin: 40px 0;
  }
  
  .dashboard-timeline::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: var(--dashboard-border-light);
    z-index: 1;
  }
  
  .dashboard-timeline-point {
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
  }
  
  .dashboard-point-marker {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    border: 2px solid var(--dashboard-border-light);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
  
  .dashboard-marker-completed {
    background-color: var(--dashboard-primary);
    border-color: var(--dashboard-primary);
    color: white;
  }
  
  .dashboard-marker-active {
    background-color: white;
    border-color: var(--dashboard-primary);
    color: var(--dashboard-primary);
  }
  
  .dashboard-point-label {
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    color: var(--dashboard-text-primary-light);
  }
  
  .dashboard-point-date {
    font-size: 10px;
    color: var(--dashboard-text-secondary-light);
    text-align: center;
  }
  
  @media (prefers-color-scheme: dark) {
    .dashboard-timeline::before {
      background-color: var(--dashboard-border-dark);
    }
    
    .dashboard-point-marker {
      background-color: var(--dashboard-card-dark);
      border-color: var(--dashboard-border-dark);
    }
    
    .dashboard-marker-active {
      background-color: var(--dashboard-card-dark);
    }
    
    .dashboard-point-label {
      color: var(--dashboard-text-primary-dark);
    }
    
    .dashboard-point-date {
      color: var(--dashboard-text-secondary-dark);
    }
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .dashboard-timeline {
      overflow-x: auto;
      padding-bottom: 10px;
    }
    
    .dashboard-timeline-point {
      min-width: 80px;
    }
  }
`;
document.head.appendChild(style);
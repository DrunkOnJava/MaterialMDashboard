import React from 'react';

/**
 * Standalone timeline point component for use in custom timeline layouts
 * 
 * @param {Object} props - Component props
 * @param {string} props.label - Point label
 * @param {string} [props.sublabel] - Secondary label or description
 * @param {string} [props.date] - Optional date text
 * @param {string} [props.status] - Status ('completed', 'active', 'pending')
 * @param {React.ReactNode} [props.icon] - Custom icon for the point
 * @param {boolean} [props.showLine] - Whether to show connecting line
 * @param {string} [props.linePosition] - Position of connecting line ('left', 'right', 'both')
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Timeline point component
 */
export const TimelinePoint = ({ 
  label, 
  sublabel,
  date,
  status = 'pending',
  icon,
  showLine = false,
  linePosition = 'both',
  className = '' 
}) => {
  const statusSymbol = {
    'completed': '✓',
    'active': '●',
    'pending': '○'
  }[status] || '○';

  return (
    <div className={`dashboard-timeline-point-standalone ${showLine ? `dashboard-timeline-with-line dashboard-line-${linePosition}` : ''} ${className}`}>
      <div className={`dashboard-point-marker dashboard-marker-${status}`}>
        {icon || statusSymbol}
      </div>
      <div className="dashboard-point-content">
        <div className="dashboard-point-label">{label}</div>
        {sublabel && <div className="dashboard-point-sublabel">{sublabel}</div>}
        {date && <div className="dashboard-point-date">{date}</div>}
      </div>
    </div>
  );
};

/**
 * Vertical timeline component for a vertical timeline layout
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Timeline point components
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Vertical timeline component
 */
export const VerticalTimeline = ({ 
  children,
  className = '' 
}) => {
  return (
    <div className={`dashboard-timeline-vertical ${className}`}>
      {children}
    </div>
  );
};

// Add CSS for the components
const style = document.createElement('style');
style.textContent = `
  .dashboard-timeline-point-standalone {
    display: flex;
    align-items: flex-start;
    margin-bottom: 24px;
    position: relative;
  }
  
  .dashboard-point-content {
    margin-left: 16px;
  }
  
  .dashboard-point-sublabel {
    font-size: 12px;
    color: var(--dashboard-text-secondary-light);
    margin-top: 4px;
    line-height: 1.5;
  }
  
  .dashboard-timeline-vertical {
    position: relative;
    padding-left: 20px;
  }
  
  .dashboard-timeline-vertical::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 15px;
    width: 2px;
    background-color: var(--dashboard-border-light);
    z-index: 1;
  }
  
  .dashboard-timeline-with-line {
    position: relative;
  }
  
  .dashboard-timeline-with-line::before {
    content: "";
    position: absolute;
    top: 15px;
    height: 2px;
    background-color: var(--dashboard-border-light);
    z-index: 1;
  }
  
  .dashboard-line-left::before {
    right: 100%;
    left: -20px;
  }
  
  .dashboard-line-right::before {
    left: calc(100% + 10px);
    right: -20px;
  }
  
  .dashboard-line-both::before {
    left: -20px;
    right: -20px;
  }
  
  @media (prefers-color-scheme: dark) {
    .dashboard-point-sublabel {
      color: var(--dashboard-text-secondary-dark);
    }
    
    .dashboard-timeline-vertical::before,
    .dashboard-timeline-with-line::before {
      background-color: var(--dashboard-border-dark);
    }
  }
`;
document.head.appendChild(style);
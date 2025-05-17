import React from 'react';

/**
 * Simple Bar Chart component without external dependencies
 * 
 * @param {Object} props - Component props
 * @param {Array} props.data - Array of data objects with label, value, and optionally color
 * @param {string} [props.title] - Chart title
 * @param {string} [props.className] - Additional CSS classes
 * @param {number} [props.barWidth] - Width of bars in pixels
 * @param {number} [props.height] - Height of chart in pixels
 * @returns {JSX.Element} Bar chart component
 */
export const BarChart = ({ 
  data = [], 
  title,
  className = '',
  barWidth = 40,
  height = 250
}) => {
  // Find the max value for scaling
  const maxValue = Math.max(...data.map(item => item.value));
  
  return (
    <div 
      className={`dashboard-bar-chart ${className}`}
      style={{ height: `${height}px` }}
    >
      {title && <div className="dashboard-chart-title">{title}</div>}
      
      <div className="dashboard-bar-container">
        {data.map((item, index) => (
          <div key={index} className="dashboard-bar-group">
            <div 
              className="dashboard-bar-item"
              style={{ 
                height: `${(item.value / maxValue) * (height - 50)}px`,
                backgroundColor: item.color || 'var(--dashboard-primary)',
                width: `${barWidth}px`
              }}
            ></div>
            <div className="dashboard-bar-label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Legend item component for charts
 * 
 * @param {Object} props - Component props
 * @param {string} props.label - Legend item label
 * @param {string} props.color - Color for the legend item
 * @param {string} [props.value] - Optional value to display
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Legend item component
 */
export const LegendItem = ({ 
  label, 
  color,
  value,
  className = '' 
}) => {
  return (
    <div className={`dashboard-legend-item ${className}`}>
      <div 
        className="dashboard-legend-color" 
        style={{ backgroundColor: color }}
      ></div>
      <div className="dashboard-legend-label">
        {label}
        {value && <span className="dashboard-legend-value">{value}</span>}
      </div>
    </div>
  );
};

/**
 * Chart legend component
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Legend items
 * @param {string} [props.position] - Legend position ('right', 'bottom')
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Chart legend component
 */
export const ChartLegend = ({ 
  children,
  position = 'right',
  className = '' 
}) => {
  return (
    <div className={`dashboard-chart-legend dashboard-legend-${position} ${className}`}>
      {children}
    </div>
  );
};

// Add CSS for the components
const style = document.createElement('style');
style.textContent = `
  .dashboard-bar-chart {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
  }
  
  .dashboard-bar-container {
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    height: 100%;
    width: 100%;
    padding-bottom: 30px;
  }
  
  .dashboard-bar-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
  
  .dashboard-bar-item {
    width: 40px;
    border-radius: 4px 4px 0 0;
    margin-bottom: 10px;
  }
  
  .dashboard-bar-label {
    font-size: 12px;
    text-align: center;
    color: var(--dashboard-text-secondary-light);
    max-width: 60px;
    word-wrap: break-word;
  }
  
  .dashboard-chart-legend {
    display: flex;
  }
  
  .dashboard-legend-right {
    flex-direction: column;
    margin-left: 20px;
    justify-content: center;
  }
  
  .dashboard-legend-bottom {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
  }
  
  .dashboard-legend-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .dashboard-legend-bottom .dashboard-legend-item {
    margin-right: 20px;
  }
  
  .dashboard-legend-color {
    width: 12px;
    height: 12px;
    border-radius: 2px;
    margin-right: 8px;
  }
  
  .dashboard-legend-label {
    font-size: 12px;
    color: var(--dashboard-text-secondary-light);
    display: flex;
    align-items: center;
  }
  
  .dashboard-legend-value {
    margin-left: 5px;
    font-weight: 600;
  }
  
  @media (prefers-color-scheme: dark) {
    .dashboard-bar-label {
      color: var(--dashboard-text-secondary-dark);
    }
    
    .dashboard-legend-label {
      color: var(--dashboard-text-secondary-dark);
    }
  }
`;
document.head.appendChild(style);
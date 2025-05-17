import React from 'react';

/**
 * Simple Pie Chart component without external dependencies
 * 
 * @param {Object} props - Component props
 * @param {Array} props.data - Array of data objects with label, value, and color
 * @param {string} [props.title] - Chart title
 * @param {boolean} [props.showLegend] - Whether to show the legend
 * @param {string} [props.className] - Additional CSS classes
 * @param {number} [props.size] - Size of pie chart in pixels
 * @returns {JSX.Element} Pie chart component
 */
export const PieChart = ({ 
  data = [], 
  title,
  showLegend = true,
  className = '',
  size = 180
}) => {
  if (!data || data.length === 0) {
    return (
      <div className={`dashboard-pie-chart ${className}`}>
        <div className="dashboard-chart-placeholder">No data available</div>
      </div>
    );
  }

  // Calculate total for percentages
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  // Simple CSS-based pie chart segments (limited but works for basic needs)
  // For more complex requirements, a canvas or SVG based solution would be better
  return (
    <div className={`dashboard-pie-chart ${className}`}>
      {title && <div className="dashboard-chart-title">{title}</div>}
      
      <div className="dashboard-pie-container">
        <div 
          className="dashboard-pie-wrapper"
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          {data.map((item, index) => {
            // Calculate the segment percentage
            const percentage = (item.value / total) * 100;
            
            return (
              <div 
                key={index}
                className="dashboard-pie-segment"
                style={{ 
                  '--segment-size': `${percentage}%`,
                  '--segment-color': item.color,
                  '--segment-index': index
                }}
              ></div>
            );
          })}
        </div>
        
        {showLegend && (
          <div className="dashboard-pie-legend">
            {data.map((item, index) => (
              <div key={index} className="dashboard-legend-item">
                <div 
                  className="dashboard-legend-color" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <div className="dashboard-legend-label">
                  {item.label}: {Math.round((item.value / total) * 100)}%
                  {item.description && (
                    <span className="dashboard-legend-description">
                      {item.description}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Donut Chart component - a pie chart with a hole in the center
 * 
 * @param {Object} props - Component props
 * @param {Array} props.data - Array of data objects with label, value, and color
 * @param {string} [props.title] - Chart title
 * @param {boolean} [props.showLegend] - Whether to show the legend
 * @param {string} [props.className] - Additional CSS classes
 * @param {number} [props.size] - Size of donut chart in pixels
 * @param {string} [props.centerText] - Text to display in the center of the donut
 * @returns {JSX.Element} Donut chart component
 */
export const DonutChart = ({ 
  data = [], 
  title,
  showLegend = true,
  className = '',
  size = 180,
  centerText
}) => {
  return (
    <div className={`dashboard-pie-chart ${className}`}>
      {title && <div className="dashboard-chart-title">{title}</div>}
      
      <div className="dashboard-pie-container">
        <div 
          className="dashboard-pie-wrapper dashboard-donut-chart"
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          {centerText && (
            <div className="dashboard-donut-center">
              {centerText}
            </div>
          )}
          
          {data.map((item, index) => {
            // Calculate the segment percentage
            const total = data.reduce((sum, item) => sum + item.value, 0);
            const percentage = (item.value / total) * 100;
            
            return (
              <div 
                key={index}
                className="dashboard-pie-segment"
                style={{ 
                  '--segment-size': `${percentage}%`,
                  '--segment-color': item.color,
                  '--segment-index': index
                }}
              ></div>
            );
          })}
        </div>
        
        {showLegend && (
          <div className="dashboard-pie-legend">
            {data.map((item, index) => {
              const total = data.reduce((sum, item) => sum + item.value, 0);
              return (
                <div key={index} className="dashboard-legend-item">
                  <div 
                    className="dashboard-legend-color" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div className="dashboard-legend-label">
                    {item.label}: {Math.round((item.value / total) * 100)}%
                    {item.description && (
                      <span className="dashboard-legend-description">
                        {item.description}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

// Add CSS for the components
const style = document.createElement('style');
style.textContent = `
  .dashboard-pie-chart {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .dashboard-pie-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
    position: relative;
  }
  
  .dashboard-pie-wrapper {
    position: relative;
    border-radius: 50%;
    overflow: hidden;
  }
  
  .dashboard-pie-segment {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--segment-color);
    transform-origin: center;
    --start-angle: calc((var(--segment-index) / var(--total-segments)) * 360deg);
    --end-angle: calc(((var(--segment-index) + 1) / var(--total-segments)) * 360deg);
  }
  
  .dashboard-donut-chart::before {
    content: "";
    position: absolute;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    background-color: var(--dashboard-card-light);
    border-radius: 50%;
    z-index: 2;
  }
  
  .dashboard-donut-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    font-weight: 600;
    font-size: 14px;
    color: var(--dashboard-text-primary-light);
    text-align: center;
  }
  
  .dashboard-pie-legend {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
  
  .dashboard-legend-description {
    display: block;
    font-size: 10px;
    color: var(--dashboard-text-secondary-light);
    margin-top: 2px;
  }
  
  @media (prefers-color-scheme: dark) {
    .dashboard-donut-chart::before {
      background-color: var(--dashboard-card-dark);
    }
    
    .dashboard-donut-center {
      color: var(--dashboard-text-primary-dark);
    }
    
    .dashboard-legend-description {
      color: var(--dashboard-text-secondary-dark);
    }
  }
  
  /* Simplified CSS for pie chart segments */
  /* This approximation works for basic pie charts, but has limitations */
  /* For production use, consider using SVG or Canvas-based solutions */
  .dashboard-pie-segment:nth-child(1) {
    --total-segments: 1;
    clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%);
  }
  
  .dashboard-pie-segment:nth-child(2) {
    --total-segments: 2;
    clip-path: polygon(50% 50%, 100% 0%, 100% 100%);
  }
  
  .dashboard-pie-segment:nth-child(3) {
    --total-segments: 3;
    clip-path: polygon(50% 50%, 100% 100%, 0% 100%);
  }
  
  .dashboard-pie-segment:nth-child(4) {
    --total-segments: 4;
    clip-path: polygon(50% 50%, 0% 100%, 0% 0%);
  }
`;
document.head.appendChild(style);
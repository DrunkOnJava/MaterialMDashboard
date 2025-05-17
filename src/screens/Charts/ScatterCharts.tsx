import React from 'react';
import { SidebarByAnima } from '../Chip/sections/SidebarByAnima';
import { TopBarByAnima } from '../Chip/sections/TopBarByAnima';
import { TitlebarByAnima } from '../Buttons/components/Titlebar';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import { ChartErrorBoundary } from '../../components/ChartErrorBoundary';
import { Download, Calendar, RefreshCw, Filter } from 'lucide-react';

// Register Chart.js components
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

// Generate random scatter data
const generateScatterData = (count, min, max) => {
  return Array.from({ length: count }, () => ({
    x: Math.floor(Math.random() * (max - min + 1)) + min,
    y: Math.floor(Math.random() * (max - min + 1)) + min,
  }));
};

export const ScatterCharts = (): JSX.Element => {
  const [datasetFilter, setDatasetFilter] = React.useState('all');

  // Basic scatter data
  const basicScatterData = {
    datasets: [
      {
        label: 'Dataset 1',
        data: generateScatterData(50, 0, 100),
        backgroundColor: 'rgba(0, 161, 255, 0.6)',
      },
    ],
  };

  // Multi dataset scatter data
  const multiScatterData = {
    datasets: [
      {
        label: 'Group A',
        data: generateScatterData(30, 10, 80),
        backgroundColor: 'rgba(0, 161, 255, 0.6)',
      },
      {
        label: 'Group B',
        data: generateScatterData(30, 20, 90),
        backgroundColor: 'rgba(137, 101, 229, 0.6)',
      },
      {
        label: 'Group C',
        data: generateScatterData(30, 30, 100),
        backgroundColor: 'rgba(0, 206, 182, 0.6)',
      },
    ],
  };

  // Bubble chart data (scatter with varying point sizes)
  const bubbleChartData = {
    datasets: [
      {
        label: 'Dataset 1',
        data: Array.from({ length: 20 }, () => ({
          x: Math.floor(Math.random() * 100),
          y: Math.floor(Math.random() * 100),
          r: Math.floor(Math.random() * 15) + 5, // Radius between 5 and 20
        })),
        backgroundColor: 'rgba(0, 161, 255, 0.6)',
      },
      {
        label: 'Dataset 2',
        data: Array.from({ length: 20 }, () => ({
          x: Math.floor(Math.random() * 100),
          y: Math.floor(Math.random() * 100),
          r: Math.floor(Math.random() * 15) + 5,
        })),
        backgroundColor: 'rgba(255, 102, 146, 0.6)',
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        title: {
          display: true,
          text: 'X Axis',
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        title: {
          display: true,
          text: 'Y Axis',
        },
        beginAtZero: true,
      },
    },
  };

  // Quadrant chart options (with quadrant lines)
  const quadrantOptions = {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            const x = context.parsed.x;
            const y = context.parsed.y;
            return `${label}: (${x}, ${y})`;
          },
        },
      },
    },
  };

  // Customer satisfaction scatter data for quadrant chart
  const quadrantData = {
    datasets: [
      {
        label: 'Products',
        data: [
          { x: 80, y: 85, product: 'Product A' },
          { x: 75, y: 30, product: 'Product B' },
          { x: 30, y: 70, product: 'Product C' },
          { x: 40, y: 25, product: 'Product D' },
          { x: 95, y: 90, product: 'Product E' },
          { x: 20, y: 15, product: 'Product F' },
          { x: 60, y: 55, product: 'Product G' },
          { x: 35, y: 95, product: 'Product H' },
          { x: 90, y: 40, product: 'Product I' },
          { x: 15, y: 60, product: 'Product J' },
        ],
        backgroundColor: 'rgba(0, 161, 255, 0.6)',
        pointRadius: 8,
        pointHoverRadius: 10,
      },
    ],
  };

  // Draw the quadrant lines on the chart
  const quadrantPlugin = {
    id: 'quadrantLines',
    beforeDraw(chart) {
      const {
        ctx,
        chartArea: { top, bottom, left, right, width, height },
      } = chart;

      // Calculate the midpoint
      const midX = left + width / 2;
      const midY = top + height / 2;

      ctx.save();

      // Draw horizontal line
      ctx.beginPath();
      ctx.moveTo(left, midY);
      ctx.lineTo(right, midY);
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.stroke();

      // Draw vertical line
      ctx.beginPath();
      ctx.moveTo(midX, top);
      ctx.lineTo(midX, bottom);
      ctx.stroke();

      // Add quadrant labels
      ctx.font = '12px Arial';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.textAlign = 'center';

      ctx.fillText('High Importance, Low Satisfaction', midX - width / 4, top + 15);
      ctx.fillText('High Importance, High Satisfaction', midX + width / 4, top + 15);
      ctx.fillText('Low Importance, Low Satisfaction', midX - width / 4, bottom - 5);
      ctx.fillText('Low Importance, High Satisfaction', midX + width / 4, bottom - 5);

      ctx.restore();
    },
  };

  const quadrantChartOptions = {
    ...quadrantOptions,
    plugins: {
      ...quadrantOptions.plugins,
      quadrantLines: {},
    },
    scales: {
      x: {
        min: 0,
        max: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        title: {
          display: true,
          text: 'Importance',
        },
      },
      y: {
        min: 0,
        max: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        title: {
          display: true,
          text: 'Satisfaction',
        },
      },
    },
  };

  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Scatter Charts" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Basic Scatter Chart
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-medium">Data Distribution</h3>
                    <p className="text-sm text-blackblack-60">Random data points distribution</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex items-center">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Regenerate Data
                    </Button>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="h-[300px] mt-4">
                  <ChartErrorBoundary>
                    <Scatter data={basicScatterData} options={chartOptions} />
                  </ChartErrorBoundary>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="rounded-xl shadow-light-theme-shadow-medium">
                <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                  <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                    Multi-Dataset Scatter Chart
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-lg font-medium">Group Comparison</h3>
                      <p className="text-sm text-blackblack-60">Compare multiple data groups</p>
                    </div>
                    <Select value={datasetFilter} onValueChange={setDatasetFilter}>
                      <SelectTrigger className="w-[180px]">
                        <Filter className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="Filter datasets" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Groups</SelectItem>
                        <SelectItem value="groupA">Group A</SelectItem>
                        <SelectItem value="groupB">Group B</SelectItem>
                        <SelectItem value="groupC">Group C</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="h-[250px] mt-4">
                    <ChartErrorBoundary>
                      <Scatter data={multiScatterData} options={chartOptions} />
                    </ChartErrorBoundary>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-xl shadow-light-theme-shadow-medium">
                <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                  <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                    Bubble Chart
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium">Data with Magnitude</h3>
                    <p className="text-sm text-blackblack-60">
                      Scatter plot with varying point sizes
                    </p>
                  </div>

                  <div className="h-[250px] mt-4">
                    <ChartErrorBoundary>
                      <Scatter data={bubbleChartData} options={chartOptions} />
                    </ChartErrorBoundary>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Quadrant Analysis Chart
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-medium">Product Satisfaction vs. Importance</h3>
                    <p className="text-sm text-blackblack-60">
                      Quadrant analysis for product prioritization
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Select defaultValue="q2">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Focus Area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="q1">Q1: High Importance, Low Satisfaction</SelectItem>
                        <SelectItem value="q2">Q2: High Importance, High Satisfaction</SelectItem>
                        <SelectItem value="q3">Q3: Low Importance, Low Satisfaction</SelectItem>
                        <SelectItem value="q4">Q4: Low Importance, High Satisfaction</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="h-[500px] mt-4">
                  <Scatter
                    data={quadrantData}
                    options={quadrantChartOptions}
                    plugins={[quadrantPlugin]}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Scatter Plot Implementation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Basic Scatter Chart Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// First, import the necessary components
import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

// Define chart data 
const scatterData = {
  datasets: [
    {
      label: 'Dataset 1',
      data: [
        { x: 10, y: 20 },
        { x: 25, y: 30 },
        { x: 40, y: 10 },
        { x: 55, y: 50 },
        { x: 70, y: 40 },
        // ... more data points
      ],
      backgroundColor: 'rgba(0, 161, 255, 0.6)',
    },
  ],
};

// Define chart options
const chartOptions = {
  scales: {
    x: {
      grid: {
        color: 'rgba(0, 0, 0, 0.05)',
      },
      title: {
        display: true, 
        text: 'X Axis',
      }
    },
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.05)',
      },
      title: {
        display: true, 
        text: 'Y Axis',
      }
    },
  },
};

// Implement the chart component
<div className="h-[300px]">
  <Scatter data={scatterData} options={chartOptions} />
</div>`}
                    </code>
                  </pre>

                  <h3 className="text-lg font-medium mt-6">
                    Bubble Chart Code Example (Scatter with Point Sizes)
                  </h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// Bubble chart data (scatter with varying point sizes)
const bubbleChartData = {
  datasets: [
    {
      label: 'Dataset 1',
      data: [
        { x: 10, y: 20, r: 5 },  // r is the point radius
        { x: 25, y: 30, r: 15 },
        { x: 40, y: 10, r: 8 },
        { x: 55, y: 50, r: 12 },
        // ... more data points
      ],
      backgroundColor: 'rgba(0, 161, 255, 0.6)',
    },
  ],
};

// Custom quadrant chart with dividing lines
// First, create a plugin to draw the quadrant lines
const quadrantPlugin = {
  id: 'quadrantLines',
  beforeDraw(chart) {
    const { ctx, chartArea: {top, bottom, left, right, width, height} } = chart;
    
    // Calculate the midpoint
    const midX = left + width / 2;
    const midY = top + height / 2;
    
    ctx.save();
    
    // Draw horizontal line
    ctx.beginPath();
    ctx.moveTo(left, midY);
    ctx.lineTo(right, midY);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.stroke();
    
    // Draw vertical line
    ctx.beginPath();
    ctx.moveTo(midX, top);
    ctx.lineTo(midX, bottom);
    ctx.stroke();
    
    // Add quadrant labels
    ctx.font = '12px Arial';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.textAlign = 'center';
    
    ctx.fillText('Quadrant 1', midX - width/4, top + 15);
    ctx.fillText('Quadrant 2', midX + width/4, top + 15);
    ctx.fillText('Quadrant 3', midX - width/4, bottom - 5);
    ctx.fillText('Quadrant 4', midX + width/4, bottom - 5);
    
    ctx.restore();
  }
};

// Use the plugin with the chart
<Scatter 
  data={quadrantData} 
  options={quadrantOptions}
  plugins={[quadrantPlugin]}
/>`}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

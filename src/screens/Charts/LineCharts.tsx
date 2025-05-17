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
import { Line } from 'react-chartjs-2';
import { ChartErrorBoundary } from '../../components/ChartErrorBoundary';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Download, Calendar, RefreshCw } from 'lucide-react';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const LineCharts = (): JSX.Element => {
  const [dateRange, setDateRange] = React.useState('last30days');

  // Basic line chart data
  const basicLineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales 2025',
        data: [65, 59, 80, 81, 56, 55, 40, 74, 82, 90, 95, 100],
        borderColor: 'rgb(0, 161, 255)',
        backgroundColor: 'transparent',
        tension: 0.4,
      },
    ],
  };

  // Multi-line chart data
  const multiLineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales 2025',
        data: [65, 59, 80, 81, 56, 55, 40, 74, 82, 90, 95, 100],
        borderColor: 'rgb(0, 161, 255)',
        backgroundColor: 'transparent',
        tension: 0.4,
      },
      {
        label: 'Sales 2024',
        data: [40, 45, 60, 70, 45, 50, 35, 60, 70, 80, 85, 90],
        borderColor: 'rgb(137, 101, 229)',
        backgroundColor: 'transparent',
        tension: 0.4,
      },
    ],
  };

  // Area chart data
  const areaChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [65, 59, 80, 81, 56, 55, 40, 74, 82, 90, 95, 100],
        borderColor: 'rgb(0, 161, 255)',
        backgroundColor: 'rgba(0, 161, 255, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Gradient area chart data
  const gradientAreaChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Profit',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 80, 90, 95, 102],
        borderColor: 'rgb(0, 206, 182)',
        backgroundColor: context => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 250);
          gradient.addColorStop(0, 'rgba(0, 206, 182, 0.4)');
          gradient.addColorStop(1, 'rgba(0, 206, 182, 0)');
          return gradient;
        },
        fill: true,
        tension: 0.4,
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
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Line Charts" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Basic Line Chart
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-medium">Sales Overview</h3>
                    <p className="text-sm text-blackblack-60">Monthly sales performance</p>
                  </div>
                  <div className="flex gap-2">
                    <Select value={dateRange} onValueChange={setDateRange}>
                      <SelectTrigger className="w-[180px]">
                        <Calendar className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="Select date range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="last7days">Last 7 days</SelectItem>
                        <SelectItem value="last30days">Last 30 days</SelectItem>
                        <SelectItem value="last3months">Last 3 months</SelectItem>
                        <SelectItem value="last12months">Last 12 months</SelectItem>
                        <SelectItem value="ytd">Year to date</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="h-[300px] mt-4">
                  <ChartErrorBoundary>
                    <Line data={basicLineData} options={chartOptions} />
                  </ChartErrorBoundary>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="rounded-xl shadow-light-theme-shadow-medium">
                <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                  <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                    Multi-line Chart
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium">Sales Comparison</h3>
                    <p className="text-sm text-blackblack-60">
                      Comparing sales data year over year
                    </p>
                  </div>

                  <div className="h-[250px] mt-4">
                    <ChartErrorBoundary>
                      <Line data={multiLineData} options={chartOptions} />
                    </ChartErrorBoundary>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-xl shadow-light-theme-shadow-medium">
                <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                  <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                    Area Chart
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium">Revenue Trends</h3>
                    <p className="text-sm text-blackblack-60">Monthly revenue with area fill</p>
                  </div>

                  <div className="h-[250px] mt-4">
                    <ChartErrorBoundary>
                      <Line data={areaChartData} options={chartOptions} />
                    </ChartErrorBoundary>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Gradient Area Chart
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-medium">Profit Analysis</h3>
                    <p className="text-sm text-blackblack-60">Monthly profit with gradient fill</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex items-center">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Refresh Data
                    </Button>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="h-[300px] mt-4">
                  <ChartErrorBoundary>
                    <Line data={gradientAreaChartData} options={chartOptions} />
                  </ChartErrorBoundary>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Line Chart Implementation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Basic Chart Implementation</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// First, import the necessary components
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Define chart data
const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Sales 2025",
      data: [65, 59, 80, 81, 56, 55, 40, 74, 82, 90, 95, 100],
      borderColor: "rgb(0, 161, 255)",
      backgroundColor: "transparent",
      tension: 0.4,
    },
  ],
};

// Define chart options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// Implement the chart component
<div className="h-[300px]">
  <Line data={lineData} options={chartOptions} />
</div>`}
                    </code>
                  </pre>

                  <h3 className="text-lg font-medium mt-6">Area Chart Implementation</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// Area chart data
const areaChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Revenue",
      data: [65, 59, 80, 81, 56, 55, 40, 74, 82, 90, 95, 100],
      borderColor: "rgb(0, 161, 255)",
      backgroundColor: "rgba(0, 161, 255, 0.1)",
      fill: true,   // This enables the area fill
      tension: 0.4, // This smooths the line
    },
  ],
};

// Gradient area chart implementation
<div className="h-[300px]">
  <Line 
    data={{
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Profit",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 80, 90, 95, 102],
          borderColor: "rgb(0, 206, 182)",
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 250);
            gradient.addColorStop(0, "rgba(0, 206, 182, 0.4)");
            gradient.addColorStop(1, "rgba(0, 206, 182, 0)");
            return gradient;
          },
          fill: true,
          tension: 0.4,
        },
      ],
    }} 
    options={chartOptions} 
  />
</div>`}
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

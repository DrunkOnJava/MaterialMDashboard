import React from 'react';
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
import { Bar } from 'react-chartjs-2';
import { ChartErrorBoundary } from '../../components/ChartErrorBoundary';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Download, Calendar, RefreshCw } from 'lucide-react';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const BarCharts = (): JSX.Element => {
  const [dateRange, setDateRange] = React.useState('last30days');

  // Basic bar chart data
  const basicBarData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40, 74, 82, 90, 95, 100],
        backgroundColor: 'rgba(0, 161, 255, 0.8)',
        borderRadius: 4,
      },
    ],
  };

  // Grouped bar chart data
  const groupedBarData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: '2024',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(0, 161, 255, 0.8)',
        borderRadius: 4,
      },
      {
        label: '2025',
        data: [28, 48, 40, 19, 86, 27],
        backgroundColor: 'rgba(137, 101, 229, 0.8)',
        borderRadius: 4,
      },
    ],
  };

  // Stacked bar chart data
  const stackedBarData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Electronics',
        data: [44, 55, 41, 67],
        backgroundColor: 'rgba(0, 161, 255, 0.8)',
        borderRadius: 4,
      },
      {
        label: 'Clothing',
        data: [13, 23, 20, 8],
        backgroundColor: 'rgba(137, 101, 229, 0.8)',
        borderRadius: 4,
      },
      {
        label: 'Home & Kitchen',
        data: [11, 17, 15, 15],
        backgroundColor: 'rgba(0, 206, 182, 0.8)',
        borderRadius: 4,
      },
      {
        label: 'Others',
        data: [21, 7, 12, 15],
        backgroundColor: 'rgba(255, 185, 0, 0.8)',
        borderRadius: 4,
      },
    ],
  };

  // Horizontal bar chart data
  const horizontalBarData = {
    labels: ['Electronics', 'Clothing', 'Home & Kitchen', 'Beauty', 'Sports', 'Books', 'Toys'],
    datasets: [
      {
        label: 'Sales by Category',
        data: [125000, 84000, 56000, 49000, 32000, 28000, 19000],
        backgroundColor: [
          'rgba(0, 161, 255, 0.8)',
          'rgba(137, 101, 229, 0.8)',
          'rgba(0, 206, 182, 0.8)',
          'rgba(255, 185, 0, 0.8)',
          'rgba(255, 102, 146, 0.8)',
          'rgba(66, 133, 244, 0.8)',
          'rgba(52, 168, 83, 0.8)',
        ],
        borderRadius: 4,
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

  // Stacked chart options
  const stackedChartOptions = {
    ...chartOptions,
    scales: {
      ...chartOptions.scales,
      y: {
        ...chartOptions.scales.y,
        stacked: true,
      },
      x: {
        ...chartOptions.scales.x,
        stacked: true,
      },
    },
  };

  // Horizontal chart options
  const horizontalChartOptions = {
    ...chartOptions,
    indexAxis: 'y' as const,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <TitlebarByAnima title="Bar Charts" />
      <main className="flex-1 overflow-auto p-6">
        <div className="space-y-6">
          <Card className="rounded-xl shadow-light-theme-shadow-medium">
            <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
              <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                Basic Bar Chart
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-medium">Monthly Sales</h3>
                  <p className="text-sm text-blackblack-60">Sales performance by month</p>
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
                  <Bar data={basicBarData} options={chartOptions} />
                </ChartErrorBoundary>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Grouped Bar Chart
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-medium">Sales Comparison</h3>
                  <p className="text-sm text-blackblack-60">Comparing sales data year over year</p>
                </div>

                <div className="h-[250px] mt-4">
                  <ChartErrorBoundary>
                    <Bar data={groupedBarData} options={chartOptions} />
                  </ChartErrorBoundary>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Stacked Bar Chart
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-medium">Quarterly Sales by Category</h3>
                  <p className="text-sm text-blackblack-60">Breakdown of categories per quarter</p>
                </div>

                <div className="h-[250px] mt-4">
                  <ChartErrorBoundary>
                    <Bar data={stackedBarData} options={stackedChartOptions} />
                  </ChartErrorBoundary>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-xl shadow-light-theme-shadow-medium">
            <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
              <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                Horizontal Bar Chart
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-medium">Sales by Category</h3>
                  <p className="text-sm text-blackblack-60">Total sales amount per category</p>
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

              <div className="h-[350px] mt-4">
                <ChartErrorBoundary>
                  <Bar data={horizontalBarData} options={horizontalChartOptions} />
                </ChartErrorBoundary>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl shadow-light-theme-shadow-medium">
            <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
              <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                Bar Chart Implementation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Basic Bar Chart Implementation</h3>
                <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                  <code className="text-sm">
                    {`// First, import the necessary components
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Define chart data
const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81, 56, 55, 40, 74, 82, 90, 95, 100],
      backgroundColor: "rgba(0, 161, 255, 0.8)",
      borderRadius: 4,  // Rounded corners on bars
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
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// Implement the chart component
<div className="h-[300px]">
  <Bar data={barData} options={chartOptions} />
</div>`}
                  </code>
                </pre>

                <h3 className="text-lg font-medium mt-6">
                  Stacked & Horizontal Bar Chart Implementation
                </h3>
                <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                  <code className="text-sm">
                    {`// Stacked bar chart options
const stackedChartOptions = {
  ...chartOptions,
  scales: {
    ...chartOptions.scales,
    y: {
      ...chartOptions.scales.y,
      stacked: true,
    },
    x: {
      ...chartOptions.scales.x,
      stacked: true,
    },
  },
};

// Horizontal bar chart options (using indexAxis)
const horizontalChartOptions = {
  ...chartOptions,
  indexAxis: 'y',  // This makes the chart horizontal
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        color: "rgba(0, 0, 0, 0.05)",
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

// Stacked bar chart implementation
<div className="h-[300px]">
  <Bar 
    data={{
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Electronics",
          data: [44, 55, 41, 67],
          backgroundColor: "rgba(0, 161, 255, 0.8)",
          borderRadius: 4,
        },
        {
          label: "Clothing",
          data: [13, 23, 20, 8],
          backgroundColor: "rgba(137, 101, 229, 0.8)",
          borderRadius: 4,
        },
        // Add more datasets as needed
      ],
    }} 
    options={stackedChartOptions} 
  />
</div>

// Horizontal bar chart implementation
<div className="h-[350px]">
  <Bar 
    data={{
      labels: ["Electronics", "Clothing", "Home & Kitchen", "Beauty", "Sports"],
      datasets: [
        {
          label: "Sales by Category",
          data: [125000, 84000, 56000, 49000, 32000],
          backgroundColor: [
            "rgba(0, 161, 255, 0.8)",
            "rgba(137, 101, 229, 0.8)",
            "rgba(0, 206, 182, 0.8)",
            "rgba(255, 185, 0, 0.8)",
            "rgba(255, 102, 146, 0.8)",
          ],
          borderRadius: 4,
        },
      ],
    }} 
    options={horizontalChartOptions} 
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
  );
};

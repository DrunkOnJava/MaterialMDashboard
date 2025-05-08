import React from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "../Buttons/components/Titlebar";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Line } from "react-chartjs-2";
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
} from "chart.js";
import { Download, Calendar, RefreshCw } from "lucide-react";

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

export const AreaCharts = (): JSX.Element => {
  const [dateRange, setDateRange] = React.useState("last30days");

  // Basic area chart data
  const basicAreaData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Revenue",
        data: [65, 59, 80, 81, 56, 55, 40, 74, 82, 90, 95, 100],
        borderColor: "rgb(0, 161, 255)",
        backgroundColor: "rgba(0, 161, 255, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Gradient area chart data
  const gradientAreaChartData = {
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
  };

  // Multi area chart data
  const multiAreaData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Revenue",
        data: [65, 59, 80, 81, 56, 55, 40, 74, 82, 90, 95, 100],
        borderColor: "rgb(0, 161, 255)",
        backgroundColor: "rgba(0, 161, 255, 0.1)",
        fill: true,
        tension: 0.4,
        order: 1,
      },
      {
        label: "Cost",
        data: [30, 40, 35, 45, 40, 50, 35, 50, 55, 60, 70, 65],
        borderColor: "rgb(255, 102, 146)",
        backgroundColor: "rgba(255, 102, 146, 0.1)",
        fill: true,
        tension: 0.4,
        order: 2,
      },
      {
        label: "Profit",
        data: [35, 19, 45, 36, 16, 5, 5, 24, 27, 30, 25, 35],
        borderColor: "rgb(137, 101, 229)",
        backgroundColor: "rgba(137, 101, 229, 0.1)",
        fill: true,
        tension: 0.4,
        order: 0, // This will put profit at the bottom of the stack
      },
    ],
  };

  // Stepped area chart data
  const steppedAreaData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Users",
        data: [500, 800, 800, 1200, 1200, 1200, 1500, 1500, 2000, 2000, 2500, 3000],
        borderColor: "rgb(0, 161, 255)",
        backgroundColor: "rgba(0, 161, 255, 0.1)",
        fill: true,
        stepped: true,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
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
    },
  };

  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Area Charts" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Basic Area Chart
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-medium">Revenue Overview</h3>
                    <p className="text-sm text-blackblack-60">Monthly revenue with area fill</p>
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
                  <Line data={basicAreaData} options={chartOptions} />
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="rounded-xl shadow-light-theme-shadow-medium">
                <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                  <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                    Gradient Area Chart
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium">Profit Analysis</h3>
                    <p className="text-sm text-blackblack-60">Monthly profit with gradient fill</p>
                  </div>

                  <div className="h-[250px] mt-4">
                    <Line data={gradientAreaChartData} options={chartOptions} />
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-xl shadow-light-theme-shadow-medium">
                <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                  <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                    Stepped Area Chart
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium">User Growth</h3>
                    <p className="text-sm text-blackblack-60">Monthly user growth steps</p>
                  </div>

                  <div className="h-[250px] mt-4">
                    <Line data={steppedAreaData} options={chartOptions} />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Stacked Area Chart
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-medium">Revenue, Cost & Profit</h3>
                    <p className="text-sm text-blackblack-60">Monthly financial breakdown</p>
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
                  <Line data={multiAreaData} options={stackedChartOptions} />
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Area Chart Implementation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Basic Area Chart Code Example</h3>
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

// Define chart data - the fill: true property makes it an area chart
const areaData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Revenue",
      data: [65, 59, 80, 81, 56, 55, 40, 74, 82, 90, 95, 100],
      borderColor: "rgb(0, 161, 255)",
      backgroundColor: "rgba(0, 161, 255, 0.1)",
      fill: true,
      tension: 0.4,
    },
  ],
};

// Define chart options
const chartOptions = {
  responsive: true,
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
  <Line data={areaData} options={chartOptions} />
</div>`}
                    </code>
                  </pre>

                  <h3 className="text-lg font-medium mt-6">Gradient Area Chart Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`// Gradient area chart data 
const gradientAreaData = {
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
};

// Stacked area chart options
const stackedOptions = {
  ...chartOptions,
  scales: {
    ...chartOptions.scales,
    y: {
      ...chartOptions.scales.y,
      stacked: true,
    },
  },
};

// Stepped area chart data
const steppedAreaData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Users",
      data: [500, 800, 800, 1200, 1200, 1200, 1500, 1500, 2000, 2000, 2500, 3000],
      borderColor: "rgb(0, 161, 255)",
      backgroundColor: "rgba(0, 161, 255, 0.1)",
      fill: true,
      stepped: true, // This creates the stepped effect
    },
  ],
};`}
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
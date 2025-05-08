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
import { Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Download, RefreshCw } from "lucide-react";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export const PieCharts = (): JSX.Element => {
  // Basic pie chart data
  const basicPieData = {
    labels: ["Electronics", "Clothing", "Home & Kitchen", "Beauty", "Sports"],
    datasets: [
      {
        data: [35, 25, 15, 15, 10],
        backgroundColor: [
          "rgba(0, 161, 255, 0.8)",
          "rgba(137, 101, 229, 0.8)",
          "rgba(0, 206, 182, 0.8)",
          "rgba(255, 185, 0, 0.8)",
          "rgba(255, 102, 146, 0.8)",
        ],
        borderColor: [
          "rgba(0, 161, 255, 1)",
          "rgba(137, 101, 229, 1)",
          "rgba(0, 206, 182, 1)",
          "rgba(255, 185, 0, 1)",
          "rgba(255, 102, 146, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Doughnut chart data
  const doughnutData = {
    labels: ["Completed", "In Progress", "Pending", "Cancelled"],
    datasets: [
      {
        data: [63, 15, 12, 10],
        backgroundColor: [
          "rgba(0, 206, 182, 0.8)",
          "rgba(0, 161, 255, 0.8)",
          "rgba(255, 185, 0, 0.8)",
          "rgba(255, 102, 146, 0.8)",
        ],
        borderColor: [
          "rgba(0, 206, 182, 1)",
          "rgba(0, 161, 255, 1)",
          "rgba(255, 185, 0, 1)",
          "rgba(255, 102, 146, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // User demographics pie chart data
  const demographicsData = {
    labels: ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"],
    datasets: [
      {
        data: [15, 30, 25, 18, 8, 4],
        backgroundColor: [
          "rgba(66, 133, 244, 0.8)",
          "rgba(219, 68, 55, 0.8)",
          "rgba(244, 180, 0, 0.8)",
          "rgba(15, 157, 88, 0.8)",
          "rgba(171, 71, 188, 0.8)",
          "rgba(0, 172, 193, 0.8)",
        ],
        borderColor: [
          "rgba(66, 133, 244, 1)",
          "rgba(219, 68, 55, 1)",
          "rgba(244, 180, 0, 1)",
          "rgba(15, 157, 88, 1)",
          "rgba(171, 71, 188, 1)",
          "rgba(0, 172, 193, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Revenue sources doughnut chart data
  const revenueSourcesData = {
    labels: ["Direct Sales", "Online Store", "Marketplace", "Wholesale", "Other"],
    datasets: [
      {
        data: [45, 30, 15, 8, 2],
        backgroundColor: [
          "rgba(0, 161, 255, 0.8)",
          "rgba(0, 206, 182, 0.8)",
          "rgba(137, 101, 229, 0.8)",
          "rgba(255, 185, 0, 0.8)",
          "rgba(255, 102, 146, 0.8)",
        ],
        borderColor: [
          "rgba(0, 161, 255, 1)",
          "rgba(0, 206, 182, 1)",
          "rgba(137, 101, 229, 1)",
          "rgba(255, 185, 0, 1)",
          "rgba(255, 102, 146, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const,
      },
    },
  };

  // Doughnut chart options with center text
  const doughnutOptions = {
    ...chartOptions,
    cutout: "70%",
  };

  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Pie Charts" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="rounded-xl shadow-light-theme-shadow-medium">
                <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                  <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                    Basic Pie Chart
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-lg font-medium">Sales by Category</h3>
                      <p className="text-sm text-blackblack-60">Percentage breakdown of sales</p>
                    </div>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="h-[300px] mt-4">
                    <Pie data={basicPieData} options={chartOptions} />
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-xl shadow-light-theme-shadow-medium">
                <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                  <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                    Doughnut Chart
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-lg font-medium">Order Status</h3>
                      <p className="text-sm text-blackblack-60">Distribution of orders by status</p>
                    </div>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="h-[300px] mt-4 relative">
                    <Doughnut data={doughnutData} options={doughnutOptions} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blackblack-100">63%</div>
                        <div className="text-sm text-blackblack-60">Completed</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="rounded-xl shadow-light-theme-shadow-medium">
                <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                  <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                    Demographics Pie Chart
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-lg font-medium">Customer Age Groups</h3>
                      <p className="text-sm text-blackblack-60">Age distribution of customers</p>
                    </div>
                    <div className="flex gap-2">
                      <Select defaultValue="all">
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="Select region" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Regions</SelectItem>
                          <SelectItem value="north">North America</SelectItem>
                          <SelectItem value="europe">Europe</SelectItem>
                          <SelectItem value="asia">Asia-Pacific</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="outline" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="h-[300px] mt-4">
                    <Pie data={demographicsData} options={chartOptions} />
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-xl shadow-light-theme-shadow-medium">
                <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                  <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                    Revenue Sources
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-lg font-medium">Revenue Breakdown</h3>
                      <p className="text-sm text-blackblack-60">Revenue distribution by channel</p>
                    </div>
                    <Button variant="outline" className="flex items-center">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Refresh Data
                    </Button>
                  </div>

                  <div className="h-[300px] mt-4">
                    <Doughnut data={revenueSourcesData} options={doughnutOptions} />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Pie Chart Implementation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Basic Pie Chart Implementation</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`// First, import the necessary components
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

// Define chart data
const pieData = {
  labels: ["Electronics", "Clothing", "Home & Kitchen", "Beauty", "Sports"],
  datasets: [
    {
      data: [35, 25, 15, 15, 10],
      backgroundColor: [
        "rgba(0, 161, 255, 0.8)",
        "rgba(137, 101, 229, 0.8)",
        "rgba(0, 206, 182, 0.8)",
        "rgba(255, 185, 0, 0.8)",
        "rgba(255, 102, 146, 0.8)",
      ],
      borderColor: [
        "rgba(0, 161, 255, 1)",
        "rgba(137, 101, 229, 1)",
        "rgba(0, 206, 182, 1)",
        "rgba(255, 185, 0, 1)",
        "rgba(255, 102, 146, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// Define chart options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right',
    },
  },
};

// Implement the chart component
<div className="h-[300px]">
  <Pie data={pieData} options={chartOptions} />
</div>`}
                    </code>
                  </pre>

                  <h3 className="text-lg font-medium mt-6">Doughnut Chart with Center Text</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`// Import Doughnut chart
import { Doughnut } from 'react-chartjs-2';

// Define doughnut chart options
const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '70%',  // This creates the donut hole
  plugins: {
    legend: {
      position: 'right',
    },
  },
};

// Implement doughnut chart with center text
<div className="h-[300px] relative">
  <Doughnut 
    data={{
      labels: ["Completed", "In Progress", "Pending", "Cancelled"],
      datasets: [
        {
          data: [63, 15, 12, 10],
          backgroundColor: [
            "rgba(0, 206, 182, 0.8)",
            "rgba(0, 161, 255, 0.8)",
            "rgba(255, 185, 0, 0.8)",
            "rgba(255, 102, 146, 0.8)",
          ],
          borderColor: [
            "rgba(0, 206, 182, 1)",
            "rgba(0, 161, 255, 1)",
            "rgba(255, 185, 0, 1)",
            "rgba(255, 102, 146, 1)",
          ],
          borderWidth: 1,
        },
      ],
    }} 
    options={doughnutOptions} 
  />
  
  {/* Center text overlay */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center">
      <div className="text-3xl font-bold text-blackblack-100">63%</div>
      <div className="text-sm text-blackblack-60">Completed</div>
    </div>
  </div>
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
import React from "react";
import { TitlebarByAnima } from "../Chip/sections/TitlebarByAnima/TitlebarByAnima";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima/TopBarByAnima";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Download, Calendar, RefreshCw, TrendingUp, TrendingDown, Users, ShoppingBag, DollarSign } from "lucide-react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { cn } from "../../lib/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const Analytics = (): JSX.Element => {
  const timeRange = "Last 30 Days";

  const metrics = [
    { title: "Total Revenue", value: "$56,425", change: "+12.5%", trend: "up", icon: DollarSign },
    { title: "Order Count", value: "1,234", change: "+8.3%", trend: "up", icon: ShoppingBag },
    { title: "Average Order Value", value: "$45.72", change: "-2.1%", trend: "down", icon: TrendingUp },
    { title: "Total Customers", value: "3,456", change: "+15.7%", trend: "up", icon: Users },
  ];

  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Revenue 2025",
        data: [42000, 45000, 48000, 51000, 49000, 53000, 56000, 58000, 61000, 59000, 62000, 56425],
        borderColor: "rgb(0, 161, 255)",
        backgroundColor: "rgba(0, 161, 255, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const categoryData = {
    labels: ["Signature", "Seasonal", "Premium", "Gift Sets", "Sale"],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          "rgba(0, 161, 255, 0.8)",
          "rgba(136, 101, 229, 0.8)",
          "rgba(0, 206, 182, 0.8)",
          "rgba(255, 185, 0, 0.8)",
          "rgba(255, 102, 146, 0.8)",
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
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

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const,
      },
    },
  };

  return (
    <div className="flex min-h-screen bg-surfaceslightgray-10">
      <SidebarByAnima />
      <div className="flex-1 relative">
        <TopBarByAnima />
        <TitlebarByAnima title="Analytics" />
        
        <div className="px-6 py-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-blackblack-100">Business Analytics</h2>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 border rounded-md px-3 py-2 bg-white">
                <Calendar className="h-4 w-4 text-blackblack-60" />
                <span className="text-sm text-blackblack-60">{timeRange}</span>
              </div>
              <Button variant="outline" className="flex items-center gap-1">
                <RefreshCw className="h-4 w-4 mr-1" />
                Refresh
              </Button>
              <Button variant="outline" className="flex items-center gap-1">
                <Download className="h-4 w-4 mr-1" />
                Export
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="rounded-xl shadow-light-theme-shadow-medium">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-sm text-blackblack-60">{metric.title}</p>
                      <p className="text-2xl font-semibold text-blackblack-100">{metric.value}</p>
                    </div>
                    <div className={cn(
                      "p-2 rounded-lg",
                      metric.icon === DollarSign ? "bg-light-themeprimarylight-blue" :
                      metric.icon === ShoppingBag ? "bg-light-themesecondarylight-purple" :
                      metric.icon === TrendingUp ? "bg-actionsuccess-light" :
                      "bg-actionalert-light"
                    )}>
                      <metric.icon className={cn(
                        "h-5 w-5",
                        metric.icon === DollarSign ? "text-light-themeprimaryblue" :
                        metric.icon === ShoppingBag ? "text-light-themesecondarypurple" :
                        metric.icon === TrendingUp ? "text-actionsuccess" :
                        "text-actionalert"
                      )} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {metric.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-actionsuccess" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-actionwarning" />
                    )}
                    <span className={cn(
                      "text-sm font-medium",
                      metric.trend === "up" ? "text-actionsuccess" : "text-actionwarning"
                    )}>
                      {metric.change}
                    </span>
                    <span className="text-sm text-blackblack-60">vs last period</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px]">
                  Revenue Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-[300px]">
                  <Line data={revenueData} options={chartOptions} />
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px]">
                  Sales by Category
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-[300px]">
                  <Doughnut data={categoryData} options={doughnutOptions} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
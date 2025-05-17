import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../../components/ui/card';
import { StatCard } from '../../components/StatCard';
import { ShoppingBag, DollarSign, Users, CreditCard, Calendar } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../components/ui/select';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  ChartTitle,
  Tooltip,
  Legend,
  Filler
);

export const AnalyticsSection = (): JSX.Element => {
  // State for date range filter
  const [dateRange, setDateRange] = useState('last30days');

  // Mock sales data for the charts
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [3500, 5200, 4800, 5800, 7500, 9000, 8500, 10200, 11500, 9800, 12000, 14000],
        borderColor: 'rgb(0, 161, 255)',
        backgroundColor: 'rgba(0, 161, 255, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Mock order data
  const orderData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Orders',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(137, 101, 229, 0.8)',
        borderRadius: 4,
      },
    ],
  };

  // Mock product category data
  const categoryData = {
    labels: ['Electronics', 'Clothing', 'Home', 'Beauty', 'Sports'],
    datasets: [
      {
        data: [35, 25, 15, 15, 10],
        backgroundColor: [
          'rgba(0, 161, 255, 0.8)',
          'rgba(137, 101, 229, 0.8)',
          'rgba(0, 206, 182, 0.8)',
          'rgba(255, 185, 0, 0.8)',
          'rgba(255, 102, 146, 0.8)',
        ],
        borderColor: [
          'rgba(0, 161, 255, 1)',
          'rgba(137, 101, 229, 1)',
          'rgba(0, 206, 182, 1)',
          'rgba(255, 185, 0, 1)',
          'rgba(255, 102, 146, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
    },
    maintainAspectRatio: false,
  };

  // Handle date range change
  const handleDateRangeChange = (value: string) => {
    setDateRange(value);
    // In a real app, this would fetch data for the selected date range
  };

  return (
    <div className="space-y-6">
      {/* Date filter */}
      <div className="flex justify-end mb-4">
        <Select value={dateRange} onValueChange={handleDateRangeChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select date range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="yesterday">Yesterday</SelectItem>
            <SelectItem value="last7days">Last 7 days</SelectItem>
            <SelectItem value="last30days">Last 30 days</SelectItem>
            <SelectItem value="thisMonth">This month</SelectItem>
            <SelectItem value="lastMonth">Last month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats cards */}
      <div id="stat-cards" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Sales"
          value="$68,924"
          changePercentage={12.5}
          icon={<DollarSign className="h-6 w-6 text-light-themeprimaryblue" />}
        />
        <StatCard
          title="Total Orders"
          value="1,482"
          changePercentage={-3.2}
          icon={<ShoppingBag className="h-6 w-6 text-light-themesecondarypurple" />}
          bgColor="bg-light-themesecondarylight-purple"
        />
        <StatCard
          title="New Customers"
          value="578"
          changePercentage={8.4}
          icon={<Users className="h-6 w-6 text-actionsuccess" />}
          bgColor="bg-actionsuccess-light"
        />
        <StatCard
          title="Conversion Rate"
          value="3.24%"
          changePercentage={1.2}
          icon={<CreditCard className="h-6 w-6 text-actionalert" />}
          bgColor="bg-actionalert-light"
        />
      </div>

      {/* Charts */}
      <div id="chart-section" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend Chart */}
        <Card className="rounded-xl shadow-light-theme-shadow-medium">
          <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
            <div className="flex justify-between items-center">
              <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                Revenue Trend
              </CardTitle>
              <Calendar className="h-5 w-5 text-blackblack-60" />
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-[300px]">
              <Line options={chartOptions} data={salesData} />
            </div>
          </CardContent>
        </Card>

        {/* Orders by Day Chart */}
        <Card className="rounded-xl shadow-light-theme-shadow-medium">
          <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
            <div className="flex justify-between items-center">
              <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                Orders by Day
              </CardTitle>
              <Calendar className="h-5 w-5 text-blackblack-60" />
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-[300px]">
              <Bar options={chartOptions} data={orderData} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional charts and metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Categories Chart */}
        <Card className="rounded-xl shadow-light-theme-shadow-medium">
          <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
            <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
              Sales by Category
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-[250px] flex items-center justify-center">
              <Doughnut options={doughnutOptions} data={categoryData} />
            </div>
          </CardContent>
        </Card>

        {/* Top Selling Products */}
        <Card className="rounded-xl shadow-light-theme-shadow-medium">
          <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
            <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
              Top Selling Products
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {[
                { name: 'Wireless Headphones XR200', sales: '342 units', value: '$24,500' },
                { name: 'Smart Watch Series 5', sales: '276 units', value: '$19,320' },
                { name: 'Ultra HD 4K TV 55"', sales: '165 units', value: '$15,840' },
                { name: 'Premium Laptop Pro', sales: '145 units', value: '$14,500' },
              ].map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between pb-2 border-b border-[#111c2d1a]"
                >
                  <div>
                    <p className="font-medium text-blackblack-100">{product.name}</p>
                    <p className="text-sm text-blackblack-60">{product.sales}</p>
                  </div>
                  <p className="font-medium text-light-themeprimaryblue">{product.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="rounded-xl shadow-light-theme-shadow-medium">
          <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
            <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {[
                { action: 'New order #ORD-5289', time: '5 minutes ago', status: 'pending' },
                {
                  action: 'Payment received for #ORD-5287',
                  time: '38 minutes ago',
                  status: 'success',
                },
                { action: 'Order #ORD-5286 shipped', time: '1 hour ago', status: 'info' },
                { action: 'New customer registered', time: '2 hours ago', status: 'info' },
                { action: 'Refund processed #ORD-5280', time: '5 hours ago', status: 'warning' },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 pb-2 border-b border-[#111c2d1a]"
                >
                  <div
                    className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                      activity.status === 'success'
                        ? 'bg-actionsuccess'
                        : activity.status === 'warning'
                          ? 'bg-actionwarning'
                          : activity.status === 'pending'
                            ? 'bg-actionalert'
                            : 'bg-light-themeprimaryblue'
                    }`}
                  />
                  <div>
                    <p className="font-medium text-blackblack-100">{activity.action}</p>
                    <p className="text-sm text-blackblack-60">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

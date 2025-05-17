import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '../../../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../../components/ui/tabs';
import { Button } from '../../../../components/ui/button';
import { Badge } from '../../../../components/ui/badge';
import { WebsitePreview } from '../../components/WebsitePreview';
import {
  BarChart3,
  LineChart,
  DollarSign,
  Package,
  ShoppingBag,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  ExternalLink,
} from 'lucide-react';

import { Product, Order, SalesSummary } from '../../models/types';

interface DashboardProps {
  salesSummary: SalesSummary;
  products: Product[];
  orders: Order[];
}

const Dashboard: React.FC<DashboardProps> = ({ salesSummary, products, orders }) => {
  // Format price with commas
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(price);
  };

  // Convert date string to formatted date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Get badge class for percentage change
  const getPercentBadgeClass = (percent: number) => {
    return percent >= 0
      ? 'bg-actionsuccess-light text-actionsuccess'
      : 'bg-actionwarning-light text-actionwarning';
  };

  // Get percentage display with trend icon
  const getPercentDisplay = (percent: number) => {
    return (
      <div className="flex items-center gap-1">
        {percent >= 0 ? (
          <>
            <TrendingUp className="h-3 w-3" />
            <span>+{percent.toFixed(1)}%</span>
          </>
        ) : (
          <>
            <TrendingDown className="h-3 w-3" />
            <span>{percent.toFixed(1)}%</span>
          </>
        )}
      </div>
    );
  };

  // Get badge class for order status
  const getStatusBadgeClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'new':
        return 'bg-light-themeprimarylight-blue text-light-themeprimaryblue';
      case 'processing':
        return 'bg-actionalert-light text-actionalert';
      case 'shipped':
        return 'bg-light-themeprimarylight-blue text-light-themeprimaryblue';
      case 'delivered':
        return 'bg-actionsuccess-light text-actionsuccess';
      case 'cancelled':
        return 'bg-actionwarning-light text-actionwarning';
      default:
        return 'bg-blackblack-10 text-blackblack-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Website preview section - Access point #2: Dedicated section */}
      <Card className="rounded-xl shadow-light-theme-shadow-medium">
        <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
          <div className="flex justify-between items-center">
            <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
              Website Preview
            </CardTitle>
            <Button
              variant="outline"
              className="flex items-center gap-1"
              onClick={() => window.open('https://example.com/blue-mountain-wicks', '_blank')}
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Open in Browser
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <WebsitePreview fullWidth />
        </CardContent>
      </Card>

      {/* Sales summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="rounded-xl shadow-light-theme-shadow-medium">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-blackblack-60 text-sm">Today's Revenue</p>
                <h3 className="text-2xl font-bold mt-1">
                  {formatPrice(salesSummary.today.revenue)}
                </h3>
                <p className="text-sm text-blackblack-60 mt-1">
                  From {salesSummary.today.orders} orders
                </p>
              </div>
              <div className="bg-light-themeprimarylight-blue p-3 rounded-full">
                <DollarSign className="h-5 w-5 text-light-themeprimaryblue" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-light-theme-shadow-medium">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-blackblack-60 text-sm">Monthly Revenue</p>
                <h3 className="text-2xl font-bold mt-1">
                  {formatPrice(salesSummary.month.revenue)}
                </h3>
                <Badge className={`mt-1 ${getPercentBadgeClass(salesSummary.month.percentChange)}`}>
                  {getPercentDisplay(salesSummary.month.percentChange)}
                </Badge>
              </div>
              <div className="bg-actionsuccess-light p-3 rounded-full">
                <LineChart className="h-5 w-5 text-actionsuccess" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-light-theme-shadow-medium">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-blackblack-60 text-sm">Total Orders</p>
                <h3 className="text-2xl font-bold mt-1">{salesSummary.month.orders}</h3>
                <Badge className={`mt-1 ${getPercentBadgeClass(salesSummary.month.percentChange)}`}>
                  {getPercentDisplay(salesSummary.month.percentChange)}
                </Badge>
              </div>
              <div className="bg-light-themeprimarylight-blue p-3 rounded-full">
                <ShoppingBag className="h-5 w-5 text-light-themeprimaryblue" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-light-theme-shadow-medium">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-blackblack-60 text-sm">Low Stock Items</p>
                <h3 className="text-2xl font-bold mt-1">{salesSummary.lowStockProducts.length}</h3>
                <p className="text-sm text-blackblack-60 mt-1">Need to reorder</p>
              </div>
              <div className="bg-actionwarning-light p-3 rounded-full">
                <AlertTriangle className="h-5 w-5 text-actionwarning" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main dashboard content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent orders */}
        <div className="lg:col-span-2">
          <Card className="rounded-xl shadow-light-theme-shadow-medium">
            <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
              <div className="flex justify-between items-center">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Recent Orders
                </CardTitle>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <table className="w-full">
                <thead className="bg-surfaceslightgray-10 border-b border-[#111c2d1a]">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                      Order ID
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                      Customer
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                      Date
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                      Amount
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.slice(0, 5).map(order => (
                    <tr
                      key={order.id}
                      className="border-b border-[#111c2d1a] last:border-b-0 hover:bg-surfaceslightgray-10"
                    >
                      <td className="py-3 px-4 font-medium text-light-themeprimaryblue">
                        {order.orderNumber}
                      </td>
                      <td className="py-3 px-4">{order.customerName}</td>
                      <td className="py-3 px-4 text-blackblack-60">
                        {formatDate(order.orderDate)}
                      </td>
                      <td className="py-3 px-4 font-medium">{formatPrice(order.total)}</td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusBadgeClass(order.status)}>
                          <div className="flex items-center gap-1">
                            {order.status === 'Processing' && <Clock className="h-3 w-3" />}
                            {order.status === 'Shipped' && <Package className="h-3 w-3" />}
                            {order.status === 'Delivered' && <CheckCircle className="h-3 w-3" />}
                            <span>{order.status}</span>
                          </div>
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
            {/* Website access point #3: Contextual - Redirect to checkout section */}
            <CardFooter className="p-4 border-t border-[#111c2d1a] flex justify-end">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <ExternalLink className="h-4 w-4 mr-1" />
                View Checkout Page
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Top selling products */}
        <div>
          <Card className="rounded-xl shadow-light-theme-shadow-medium">
            <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
              <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                Top Selling Products
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-[#111c2d1a]">
                {salesSummary.topSellingProducts.map(product => (
                  <div key={product.id} className="p-4 flex items-center">
                    <div className="w-10 h-10 bg-light-themeprimarylight-blue rounded-md flex items-center justify-center mr-3">
                      <Package className="h-5 w-5 text-light-themeprimaryblue" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{product.name}</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-blackblack-60">{product.unitsSold} units</span>
                        <span className="font-medium">{formatPrice(product.revenue)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Sales by category */}
      <Card className="rounded-xl shadow-light-theme-shadow-medium">
        <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
          <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
            Sales by Category
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-center gap-8">
            <div className="flex-1">
              {/* Mock chart - in a real app, this would be an actual chart component */}
              <div className="h-[200px] bg-surfaceslightgray-10 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-24 w-24 text-blackblack-20" />
              </div>
            </div>
            <div className="w-1/3">
              {salesSummary.salesByCategory.map(category => (
                <div key={category.category} className="mb-4 last:mb-0">
                  <div className="flex justify-between items-center mb-1">
                    <p className="font-medium">{category.category}</p>
                    <p className="text-sm font-medium">{formatPrice(category.sales)}</p>
                  </div>
                  <div className="w-full bg-blackblack-10 rounded-full h-2">
                    <div
                      className="bg-light-themeprimaryblue h-2 rounded-full"
                      style={{ width: `${category.percentOfTotal}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-blackblack-60 mt-1">
                    {category.percentOfTotal}% of total sales
                  </p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;

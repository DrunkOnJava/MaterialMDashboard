import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../../components/ui/card';
import { Input } from '../../../../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../components/ui/select';
import { Button } from '../../../../components/ui/button';
import { Badge } from '../../../../components/ui/badge';
import {
  Search,
  Filter,
  FileText,
  Eye,
  Truck,
  CheckCircle,
  Clock,
  XCircle,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import { Order, OrderStatus, Customer } from '../../models/types';

interface OrderListProps {
  orders: Order[];
  customers: Customer[];
}

const OrderList: React.FC<OrderListProps> = ({ orders, customers }) => {
  // Format price with commas
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(price);
  };

  // Format date string to readable date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Get status badge styling based on order status
  const getStatusBadgeClass = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.NEW:
        return 'bg-light-themeprimarylight-blue text-light-themeprimaryblue';
      case OrderStatus.PROCESSING:
        return 'bg-actionalert-light text-actionalert';
      case OrderStatus.SHIPPED:
        return 'bg-light-themeprimarylight-blue text-light-themeprimaryblue';
      case OrderStatus.DELIVERED:
        return 'bg-actionsuccess-light text-actionsuccess';
      case OrderStatus.CANCELLED:
        return 'bg-actionwarning-light text-actionwarning';
      case OrderStatus.REFUNDED:
        return 'bg-blackblack-40 text-blackblack-100';
      default:
        return 'bg-blackblack-10 text-blackblack-100';
    }
  };

  // Get status icon based on order status
  const getStatusIcon = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.NEW:
      case OrderStatus.PROCESSING:
        return <Clock className="h-3 w-3" />;
      case OrderStatus.SHIPPED:
        return <Truck className="h-3 w-3" />;
      case OrderStatus.DELIVERED:
        return <CheckCircle className="h-3 w-3" />;
      case OrderStatus.CANCELLED:
      case OrderStatus.REFUNDED:
        return <XCircle className="h-3 w-3" />;
      default:
        return <Clock className="h-3 w-3" />;
    }
  };

  return (
    <Card className="rounded-xl shadow-light-theme-shadow-medium">
      <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
        <div className="flex justify-between items-center">
          <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
            Order Management
          </CardTitle>
          <Button variant="outline" className="flex items-center gap-1">
            <FileText className="h-4 w-4 mr-1" />
            Export Orders
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-blackblack-60" />
            <Input placeholder="Search orders..." className="pl-10" />
          </div>

          <div className="flex gap-2 w-full md:w-auto">
            <Select>
              <SelectTrigger className="w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
                <SelectItem value="refunded">Refunded</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center gap-1 border rounded-md px-3 bg-white">
              <Calendar className="h-4 w-4 text-blackblack-60" />
              <span className="text-sm text-blackblack-60">Last 30 days</span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border border-[#111c2d1a]">
          <table className="w-full">
            <thead className="bg-surfaceslightgray-10 border-b border-[#111c2d1a]">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                  Order ID
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                  Customer
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Date</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                  Total
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                  Payment
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                  Status
                </th>
                <th className="py-3 px-4 text-right text-sm font-medium text-blackblack-60">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr
                  key={order.id}
                  className="border-b border-[#111c2d1a] last:border-b-0 hover:bg-surfaceslightgray-10"
                >
                  <td className="py-3 px-4 font-medium text-light-themeprimaryblue">
                    {order.orderNumber}
                  </td>
                  <td className="py-3 px-4">{order.customerName}</td>
                  <td className="py-3 px-4 text-blackblack-60">{formatDate(order.orderDate)}</td>
                  <td className="py-3 px-4 font-medium">{formatPrice(order.total)}</td>
                  <td className="py-3 px-4">{order.paymentMethod}</td>
                  <td className="py-3 px-4">
                    <Badge
                      className={`flex items-center gap-1 ${getStatusBadgeClass(order.status)}`}
                    >
                      {getStatusIcon(order.status)}
                      <span>{order.status}</span>
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <FileText className="h-4 w-4" />
                      </Button>
                      <Select>
                        <SelectTrigger className="w-[140px] h-8">
                          <SelectValue placeholder="Update Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="processing">Processing</SelectItem>
                          <SelectItem value="shipped">Shipped</SelectItem>
                          <SelectItem value="delivered">Delivered</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                          <SelectItem value="refunded">Refunded</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-blackblack-60">
            Showing 1-{Math.min(10, orders.length)} of {orders.length} orders
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 bg-light-themeprimarylight-blue text-light-themeprimaryblue"
            >
              1
            </Button>
            <Button variant="outline" size="sm" className="h-8 w-8">
              2
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderList;

import React, { useState } from 'react';
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
import {
  Search,
  Filter,
  RefreshCw,
  MoreHorizontal,
  Eye,
  Truck,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { useToast } from '../../../../hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../../../../components/ui/dialog';

// Define order status types
type OrderStatus = 'processing' | 'shipped' | 'delivered' | 'cancelled';

// Define order interface
interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
    avatar?: string;
  };
  date: string;
  amount: string;
  status: OrderStatus;
  items: {
    name: string;
    quantity: number;
    price: string;
  }[];
  shippingAddress: string;
  paymentMethod: string;
}

// Mock orders data
const mockOrders: Order[] = [
  {
    id: 'ORD-5289',
    customer: {
      name: 'John Smith',
      email: 'john.smith@example.com',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    date: '2025-03-15',
    amount: '$359.99',
    status: 'processing',
    items: [
      { name: 'Wireless Headphones XR200', quantity: 1, price: '$249.99' },
      { name: 'Phone Case Pro', quantity: 2, price: '$55.00' },
    ],
    shippingAddress: '123 Main St, New York, NY 10001',
    paymentMethod: 'Credit Card',
  },
  {
    id: 'ORD-5288',
    customer: {
      name: 'Emma Johnson',
      email: 'emma.johnson@example.com',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    date: '2025-03-14',
    amount: '$128.50',
    status: 'shipped',
    items: [{ name: 'Smart Watch Series 5', quantity: 1, price: '$128.50' }],
    shippingAddress: '456 Oak Ave, San Francisco, CA 94102',
    paymentMethod: 'PayPal',
  },
  {
    id: 'ORD-5287',
    customer: {
      name: 'Michael Brown',
      email: 'michael.brown@example.com',
      avatar: 'https://i.pravatar.cc/150?img=8',
    },
    date: '2025-03-14',
    amount: '$1,249.99',
    status: 'delivered',
    items: [{ name: 'Premium Laptop Pro', quantity: 1, price: '$1,249.99' }],
    shippingAddress: '789 Pine St, Seattle, WA 98101',
    paymentMethod: 'Credit Card',
  },
  {
    id: 'ORD-5286',
    customer: {
      name: 'Sarah Wilson',
      email: 'sarah.wilson@example.com',
      avatar: 'https://i.pravatar.cc/150?img=10',
    },
    date: '2025-03-13',
    amount: '$85.99',
    status: 'delivered',
    items: [
      { name: 'Bluetooth Speaker Mini', quantity: 1, price: '$59.99' },
      { name: 'USB-C Cable Pack', quantity: 2, price: '$12.99' },
    ],
    shippingAddress: '101 Elm St, Boston, MA 02108',
    paymentMethod: 'Credit Card',
  },
  {
    id: 'ORD-5285',
    customer: {
      name: 'David Lee',
      email: 'david.lee@example.com',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    date: '2025-03-13',
    amount: '$399.99',
    status: 'processing',
    items: [{ name: 'Ultra HD 4K Monitor', quantity: 1, price: '$399.99' }],
    shippingAddress: '202 Maple Rd, Chicago, IL 60601',
    paymentMethod: 'PayPal',
  },
  {
    id: 'ORD-5284',
    customer: {
      name: 'Lisa Garcia',
      email: 'lisa.garcia@example.com',
      avatar: 'https://i.pravatar.cc/150?img=25',
    },
    date: '2025-03-12',
    amount: '$149.99',
    status: 'cancelled',
    items: [
      { name: 'Wireless Keyboard', quantity: 1, price: '$79.99' },
      { name: 'Wireless Mouse', quantity: 1, price: '$49.99' },
      { name: 'Mouse Pad XL', quantity: 1, price: '$19.99' },
    ],
    shippingAddress: '303 Cedar Ln, Austin, TX 78701',
    paymentMethod: 'Credit Card',
  },
  {
    id: 'ORD-5283',
    customer: {
      name: 'James Martinez',
      email: 'james.martinez@example.com',
      avatar: 'https://i.pravatar.cc/150?img=15',
    },
    date: '2025-03-11',
    amount: '$899.00',
    status: 'shipped',
    items: [{ name: 'Smartphone Model X', quantity: 1, price: '$899.00' }],
    shippingAddress: '404 Birch Dr, Miami, FL 33101',
    paymentMethod: 'Credit Card',
  },
];

export const OrderManagement = (): JSX.Element => {
  // State hooks
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [detailsOrder, setDetailsOrder] = useState<Order | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [bulkActionStatus, setBulkActionStatus] = useState<OrderStatus | ''>('');

  const { toast } = useToast();

  // Filter orders based on search term and status filter
  const filteredOrders = orders.filter(order => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Handle status update for a single order
  const handleStatusUpdate = (orderId: string, newStatus: OrderStatus) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );

    setOrders(updatedOrders);

    toast({
      title: 'Order status updated',
      description: `Order ${orderId} has been marked as ${newStatus}`,
      variant: 'default',
    });
  };

  // Handle bulk status update
  const handleBulkStatusUpdate = () => {
    if (!bulkActionStatus || selectedOrders.length === 0) return;

    const updatedOrders = orders.map(order =>
      selectedOrders.includes(order.id)
        ? { ...order, status: bulkActionStatus as OrderStatus }
        : order
    );

    setOrders(updatedOrders);
    setSelectedOrders([]);
    setBulkActionStatus('');

    toast({
      title: 'Bulk update complete',
      description: `${selectedOrders.length} orders have been updated to ${bulkActionStatus}`,
      variant: 'default',
    });
  };

  // Toggle order selection for bulk actions
  const toggleOrderSelection = (orderId: string) => {
    setSelectedOrders(prev =>
      prev.includes(orderId) ? prev.filter(id => id !== orderId) : [...prev, orderId]
    );
  };

  // Toggle selection of all filtered orders
  const toggleSelectAll = () => {
    if (selectedOrders.length === filteredOrders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(filteredOrders.map(order => order.id));
    }
  };

  // View order details
  const viewOrderDetails = (order: Order) => {
    setDetailsOrder(order);
    setDetailsOpen(true);
  };

  // Get status badge styling based on status
  const getStatusBadgeClass = (status: OrderStatus) => {
    switch (status) {
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
      {/* Order search and filters */}
      <Card className="rounded-xl shadow-light-theme-shadow-medium">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
              <Input
                placeholder="Search orders..."
                className="pl-10"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex gap-4 w-full md:w-auto">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                Refresh
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bulk actions */}
      {selectedOrders.length > 0 && (
        <Card className="rounded-xl shadow-light-theme-shadow-medium bg-light-themeprimarylight-blue border-light-themeprimaryblue border">
          <CardContent className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-light-themeprimaryblue font-medium">
              {selectedOrders.length} orders selected
            </p>

            <div className="flex gap-3 w-full md:w-auto">
              <Select value={bulkActionStatus} onValueChange={setBulkActionStatus}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Change status to" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="primary"
                onClick={handleBulkStatusUpdate}
                disabled={!bulkActionStatus}
              >
                Apply
              </Button>

              <Button variant="outline" onClick={() => setSelectedOrders([])}>
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Orders table */}
      <Card id="data-table" className="rounded-xl shadow-light-theme-shadow-medium">
        <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
          <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
            Orders
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-surfaceslightgray-10 border-b border-[#111c2d1a]">
                <tr>
                  <th className="py-3 px-6 text-left">
                    <input
                      type="checkbox"
                      checked={
                        selectedOrders.length === filteredOrders.length && filteredOrders.length > 0
                      }
                      onChange={toggleSelectAll}
                      className="rounded border-blackblack-20"
                    />
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">
                    Order ID
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">
                    Customer
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">
                    Date
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">
                    Amount
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">
                    Status
                  </th>
                  <th className="py-3 px-6 text-right text-sm font-medium text-blackblack-60">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map(order => (
                  <tr
                    key={order.id}
                    className="border-b border-[#111c2d1a] hover:bg-surfaceslightgray-10"
                  >
                    <td className="py-4 px-6">
                      <input
                        type="checkbox"
                        checked={selectedOrders.includes(order.id)}
                        onChange={() => toggleOrderSelection(order.id)}
                        className="rounded border-blackblack-20"
                      />
                    </td>
                    <td className="py-4 px-6 font-medium text-blackblack-100">{order.id}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-light-themeprimarylight-blue flex items-center justify-center overflow-hidden">
                          {order.customer.avatar ? (
                            <img
                              src={order.customer.avatar}
                              alt={order.customer.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-light-themeprimaryblue font-medium">
                              {order.customer.name.charAt(0)}
                            </span>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-blackblack-100">{order.customer.name}</p>
                          <p className="text-xs text-blackblack-60">{order.customer.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-blackblack-80">{order.date}</td>
                    <td className="py-4 px-6 font-medium text-blackblack-100">{order.amount}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(order.status)}`}
                      >
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => viewOrderDetails(order)}>
                          <Eye className="h-4 w-4 text-blackblack-60" />
                        </Button>

                        {order.status === 'processing' && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleStatusUpdate(order.id, 'shipped')}
                          >
                            <Truck className="h-4 w-4 text-light-themeprimaryblue" />
                          </Button>
                        )}

                        {order.status === 'shipped' && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleStatusUpdate(order.id, 'delivered')}
                          >
                            <CheckCircle className="h-4 w-4 text-actionsuccess" />
                          </Button>
                        )}

                        {(order.status === 'processing' || order.status === 'shipped') && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleStatusUpdate(order.id, 'cancelled')}
                          >
                            <XCircle className="h-4 w-4 text-actionwarning" />
                          </Button>
                        )}

                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4 text-blackblack-60" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredOrders.length === 0 && (
                  <tr>
                    <td colSpan={7} className="py-6 text-center text-blackblack-60">
                      No orders found matching your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Order details dialog */}
      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Order Details - {detailsOrder?.id}</DialogTitle>
            <DialogDescription>Placed on {detailsOrder?.date}</DialogDescription>
          </DialogHeader>

          {detailsOrder && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {/* Customer information */}
              <div>
                <h3 className="text-lg font-medium mb-2">Customer Information</h3>
                <div className="bg-surfaceslightgray-10 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-light-themeprimarylight-blue flex items-center justify-center overflow-hidden">
                      {detailsOrder.customer.avatar ? (
                        <img
                          src={detailsOrder.customer.avatar}
                          alt={detailsOrder.customer.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-light-themeprimaryblue font-medium">
                          {detailsOrder.customer.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-blackblack-100">
                        {detailsOrder.customer.name}
                      </p>
                      <p className="text-sm text-blackblack-60">{detailsOrder.customer.email}</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-medium mt-4 mb-2">Shipping Address</h3>
                <div className="bg-surfaceslightgray-10 p-4 rounded-lg">
                  <p className="text-blackblack-80">{detailsOrder.shippingAddress}</p>
                </div>

                <h3 className="text-lg font-medium mt-4 mb-2">Payment Information</h3>
                <div className="bg-surfaceslightgray-10 p-4 rounded-lg">
                  <p className="text-blackblack-80">
                    <span className="font-medium">Method:</span> {detailsOrder.paymentMethod}
                  </p>
                  <p className="text-blackblack-80 mt-1">
                    <span className="font-medium">Amount:</span> {detailsOrder.amount}
                  </p>
                </div>
              </div>

              {/* Order items */}
              <div>
                <h3 className="text-lg font-medium mb-2">Order Items</h3>
                <div className="bg-surfaceslightgray-10 p-4 rounded-lg">
                  <div className="space-y-3">
                    {detailsOrder.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center pb-2 border-b border-[#111c2d1a] last:border-0 last:pb-0"
                      >
                        <div>
                          <p className="font-medium text-blackblack-100">
                            {item.name}{' '}
                            <span className="text-blackblack-60">× {item.quantity}</span>
                          </p>
                        </div>
                        <p className="font-medium text-blackblack-100">{item.price}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-2 border-t border-[#111c2d1a] flex justify-between">
                    <p className="font-medium text-blackblack-100">Total</p>
                    <p className="font-bold text-blackblack-100">{detailsOrder.amount}</p>
                  </div>
                </div>

                <h3 className="text-lg font-medium mt-4 mb-2">Order Status</h3>
                <div className="bg-surfaceslightgray-10 p-4 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(detailsOrder.status)}`}
                    >
                      {detailsOrder.status.charAt(0).toUpperCase() + detailsOrder.status.slice(1)}
                    </span>
                  </div>
                  <div className="mt-4 space-y-3">
                    {detailsOrder.status !== 'cancelled' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {detailsOrder.status === 'processing' && (
                          <Button
                            variant="primary"
                            className="w-full"
                            onClick={() => {
                              handleStatusUpdate(detailsOrder.id, 'shipped');
                              setDetailsOpen(false);
                            }}
                          >
                            <Truck className="mr-2 h-4 w-4" />
                            Mark as Shipped
                          </Button>
                        )}

                        {detailsOrder.status === 'shipped' && (
                          <Button
                            variant="primary"
                            className="w-full"
                            onClick={() => {
                              handleStatusUpdate(detailsOrder.id, 'delivered');
                              setDetailsOpen(false);
                            }}
                          >
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Mark as Delivered
                          </Button>
                        )}

                        {(detailsOrder.status === 'processing' ||
                          detailsOrder.status === 'shipped') && (
                          <Button
                            variant="outline"
                            className="w-full text-actionwarning"
                            onClick={() => {
                              handleStatusUpdate(detailsOrder.id, 'cancelled');
                              setDetailsOpen(false);
                            }}
                          >
                            <XCircle className="mr-2 h-4 w-4" />
                            Cancel Order
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

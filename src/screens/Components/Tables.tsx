import React, { useState } from 'react';
import { TitlebarByAnima } from '../Buttons/components/Titlebar';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Checkbox } from '../../components/ui/checkbox';
import { Avatar, AvatarImage, AvatarFallback } from '../../components/ui/avatar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import {
  Search,
  SortAsc,
  SortDesc,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Download,
  Printer,
  Filter,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  XCircle,
  AlertTriangle,
  FileText,
  Truck,
  Plus,
} from 'lucide-react';

// Define types for our table data
interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
  avatar?: string;
}

interface ProductData {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: 'in-stock' | 'low-stock' | 'out-of-stock';
}

interface OrderData {
  id: string;
  customer: string;
  date: string;
  amount: string;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: string;
}

// Mock data for users
const mockUsers: UserData[] = [
  {
    id: 'USR001',
    name: 'John Smith',
    email: 'john@example.com',
    role: 'Admin',
    status: 'active',
    lastLogin: '10 minutes ago',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 'USR002',
    name: 'Jane Doe',
    email: 'jane@example.com',
    role: 'Editor',
    status: 'active',
    lastLogin: '2 hours ago',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 'USR003',
    name: 'Robert Johnson',
    email: 'robert@example.com',
    role: 'User',
    status: 'inactive',
    lastLogin: '5 days ago',
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: 'USR004',
    name: 'Emily Williams',
    email: 'emily@example.com',
    role: 'Editor',
    status: 'active',
    lastLogin: '1 day ago',
    avatar: 'https://i.pravatar.cc/150?img=10',
  },
  {
    id: 'USR005',
    name: 'Michael Brown',
    email: 'michael@example.com',
    role: 'User',
    status: 'inactive',
    lastLogin: '2 weeks ago',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: 'USR006',
    name: 'Sarah Davis',
    email: 'sarah@example.com',
    role: 'User',
    status: 'active',
    lastLogin: '3 hours ago',
    avatar: 'https://i.pravatar.cc/150?img=20',
  },
  {
    id: 'USR007',
    name: 'Daniel Wilson',
    email: 'daniel@example.com',
    role: 'Admin',
    status: 'active',
    lastLogin: 'Just now',
    avatar: 'https://i.pravatar.cc/150?img=15',
  },
];

// Mock data for products
const mockProducts: ProductData[] = [
  {
    id: 'PRD001',
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: '$149.99',
    stock: 45,
    status: 'in-stock',
  },
  {
    id: 'PRD002',
    name: 'Smartphone Case',
    category: 'Accessories',
    price: '$24.99',
    stock: 78,
    status: 'in-stock',
  },
  {
    id: 'PRD003',
    name: 'Laptop Backpack',
    category: 'Accessories',
    price: '$79.99',
    stock: 12,
    status: 'low-stock',
  },
  {
    id: 'PRD004',
    name: 'Bluetooth Speaker',
    category: 'Electronics',
    price: '$89.99',
    stock: 0,
    status: 'out-of-stock',
  },
  {
    id: 'PRD005',
    name: 'Smartwatch',
    category: 'Electronics',
    price: '$199.99',
    stock: 7,
    status: 'low-stock',
  },
  {
    id: 'PRD006',
    name: 'Digital Camera',
    category: 'Electronics',
    price: '$349.99',
    stock: 18,
    status: 'in-stock',
  },
  {
    id: 'PRD007',
    name: 'USB-C Cable',
    category: 'Accessories',
    price: '$14.99',
    stock: 56,
    status: 'in-stock',
  },
];

// Mock data for orders
const mockOrders: OrderData[] = [
  {
    id: 'ORD001',
    customer: 'John Smith',
    date: '2025-04-10',
    amount: '$149.99',
    status: 'delivered',
    paymentMethod: 'Credit Card',
  },
  {
    id: 'ORD002',
    customer: 'Jane Doe',
    date: '2025-04-09',
    amount: '$79.99',
    status: 'shipped',
    paymentMethod: 'PayPal',
  },
  {
    id: 'ORD003',
    customer: 'Emily Williams',
    date: '2025-04-08',
    amount: '$24.99',
    status: 'processing',
    paymentMethod: 'Credit Card',
  },
  {
    id: 'ORD004',
    customer: 'Michael Brown',
    date: '2025-04-07',
    amount: '$89.99',
    status: 'cancelled',
    paymentMethod: 'PayPal',
  },
  {
    id: 'ORD005',
    customer: 'Sarah Davis',
    date: '2025-04-06',
    amount: '$199.99',
    status: 'delivered',
    paymentMethod: 'Credit Card',
  },
  {
    id: 'ORD006',
    customer: 'Daniel Wilson',
    date: '2025-04-05',
    amount: '$349.99',
    status: 'shipped',
    paymentMethod: 'Bank Transfer',
  },
  {
    id: 'ORD007',
    customer: 'Robert Johnson',
    date: '2025-04-04',
    amount: '$14.99',
    status: 'delivered',
    paymentMethod: 'Credit Card',
  },
];

export const TablesPage = (): JSX.Element => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [userSearchTerm, setUserSearchTerm] = useState('');
  const [sortUsersBy, setSortUsersBy] = useState<keyof UserData>('name');
  const [sortUserDirection, setSortUserDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);

  // Toggle selection of a single user
  const toggleUserSelection = (userId: string) => {
    setSelectedUsers(prev =>
      prev.includes(userId) ? prev.filter(id => id !== userId) : [...prev, userId]
    );
  };

  // Toggle selection of all users
  const toggleSelectAllUsers = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map(user => user.id));
    }
  };

  // Filter users based on search term
  const filteredUsers = mockUsers.filter(
    user =>
      user.name.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(userSearchTerm.toLowerCase())
  );

  // Sort users based on sort field and direction
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortUserDirection === 'asc') {
      return a[sortUsersBy] > b[sortUsersBy] ? 1 : -1;
    } else {
      return a[sortUsersBy] < b[sortUsersBy] ? 1 : -1;
    }
  });

  // Toggle sort direction or change sort field
  const handleSortUsers = (field: keyof UserData) => {
    if (sortUsersBy === field) {
      setSortUserDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortUsersBy(field);
      setSortUserDirection('asc');
    }
  };

  // Get class for status badge based on status value
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'active':
      case 'in-stock':
      case 'delivered':
        return 'bg-actionsuccess-light text-actionsuccess';
      case 'inactive':
      case 'out-of-stock':
      case 'cancelled':
        return 'bg-actionwarning-light text-actionwarning';
      case 'low-stock':
      case 'processing':
        return 'bg-actionalert-light text-actionalert';
      case 'shipped':
        return 'bg-light-themeprimarylight-blue text-light-themeprimaryblue';
      default:
        return 'bg-blackblack-10 text-blackblack-100';
    }
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <TitlebarByAnima title="Tables" />
      <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Basic Tables
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Simple Table</h3>
                  <div className="overflow-x-auto rounded-lg border border-[#111c2d1a]">
                    <table className="w-full">
                      <thead className="bg-surfaceslightgray-10 border-b border-[#111c2d1a]">
                        <tr>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                            Name
                          </th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                            Email
                          </th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                            Role
                          </th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockUsers.slice(0, 4).map(user => (
                          <tr
                            key={user.id}
                            className="border-b border-[#111c2d1a] last:border-b-0 hover:bg-surfaceslightgray-10"
                          >
                            <td className="py-3 px-4 font-medium">{user.name}</td>
                            <td className="py-3 px-4 text-blackblack-60">{user.email}</td>
                            <td className="py-3 px-4">{user.role}</td>
                            <td className="py-3 px-4">
                              <Badge className={getStatusBadgeClass(user.status)}>
                                {user.status === 'active' ? 'Active' : 'Inactive'}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-lg font-medium mt-8">Striped Table</h3>
                  <div className="overflow-x-auto rounded-lg border border-[#111c2d1a]">
                    <table className="w-full">
                      <thead className="bg-surfaceslightgray-10 border-b border-[#111c2d1a]">
                        <tr>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                            ID
                          </th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                            Product
                          </th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                            Category
                          </th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                            Price
                          </th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                            Stock
                          </th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockProducts.slice(0, 4).map((product, index) => (
                          <tr
                            key={product.id}
                            className={`border-b border-[#111c2d1a] last:border-b-0 ${index % 2 === 1 ? 'bg-surfaceslightgray-10' : ''}`}
                          >
                            <td className="py-3 px-4 text-blackblack-60">{product.id}</td>
                            <td className="py-3 px-4 font-medium">{product.name}</td>
                            <td className="py-3 px-4">{product.category}</td>
                            <td className="py-3 px-4">{product.price}</td>
                            <td className="py-3 px-4">{product.stock}</td>
                            <td className="py-3 px-4">
                              <Badge className={getStatusBadgeClass(product.status)}>
                                {product.status === 'in-stock'
                                  ? 'In Stock'
                                  : product.status === 'low-stock'
                                    ? 'Low Stock'
                                    : 'Out of Stock'}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Advanced Tables
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Sortable and Searchable Table</h3>

                  <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
                    <div className="relative w-full md:w-64">
                      <Search className="absolute left-3 top-2.5 h-4 w-4 text-blackblack-60" />
                      <Input
                        placeholder="Search users..."
                        className="pl-10"
                        value={userSearchTerm}
                        onChange={e => setUserSearchTerm(e.target.value)}
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="flex items-center gap-1">
                        <Filter className="h-4 w-4" />
                        <span>Filter</span>
                      </Button>
                      <Button variant="outline" className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>Export</span>
                      </Button>
                      <Button variant="outline" className="flex items-center gap-1">
                        <Printer className="h-4 w-4" />
                        <span>Print</span>
                      </Button>
                    </div>
                  </div>

                  {selectedUsers.length > 0 && (
                    <div className="bg-light-themeprimarylight-blue rounded-lg p-3 mb-4 flex justify-between items-center">
                      <span className="text-light-themeprimaryblue font-medium">
                        {selectedUsers.length} users selected
                      </span>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-light-themeprimaryblue text-light-themeprimaryblue hover:bg-light-themeprimaryblue/10"
                        >
                          Bulk Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-actionwarning text-actionwarning hover:bg-actionwarning/10"
                        >
                          Delete Selected
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => setSelectedUsers([])}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}

                  <div className="overflow-x-auto rounded-lg border border-[#111c2d1a]">
                    <table className="w-full">
                      <thead className="bg-surfaceslightgray-10 border-b border-[#111c2d1a]">
                        <tr>
                          <th className="py-3 px-4 text-left">
                            <Checkbox
                              checked={
                                selectedUsers.length === filteredUsers.length &&
                                filteredUsers.length > 0
                              }
                              onCheckedChange={toggleSelectAllUsers}
                              aria-label="Select all users"
                            />
                          </th>
                          <th
                            className="py-3 px-4 text-left text-sm font-medium text-blackblack-60 cursor-pointer"
                            onClick={() => handleSortUsers('name')}
                          >
                            <div className="flex items-center gap-1">
                              <span>Name</span>
                              {sortUsersBy === 'name' &&
                                (sortUserDirection === 'asc' ? (
                                  <SortAsc className="h-4 w-4" />
                                ) : (
                                  <SortDesc className="h-4 w-4" />
                                ))}
                            </div>
                          </th>
                          <th
                            className="py-3 px-4 text-left text-sm font-medium text-blackblack-60 cursor-pointer"
                            onClick={() => handleSortUsers('email')}
                          >
                            <div className="flex items-center gap-1">
                              <span>Email</span>
                              {sortUsersBy === 'email' &&
                                (sortUserDirection === 'asc' ? (
                                  <SortAsc className="h-4 w-4" />
                                ) : (
                                  <SortDesc className="h-4 w-4" />
                                ))}
                            </div>
                          </th>
                          <th
                            className="py-3 px-4 text-left text-sm font-medium text-blackblack-60 cursor-pointer"
                            onClick={() => handleSortUsers('role')}
                          >
                            <div className="flex items-center gap-1">
                              <span>Role</span>
                              {sortUsersBy === 'role' &&
                                (sortUserDirection === 'asc' ? (
                                  <SortAsc className="h-4 w-4" />
                                ) : (
                                  <SortDesc className="h-4 w-4" />
                                ))}
                            </div>
                          </th>
                          <th
                            className="py-3 px-4 text-left text-sm font-medium text-blackblack-60 cursor-pointer"
                            onClick={() => handleSortUsers('status')}
                          >
                            <div className="flex items-center gap-1">
                              <span>Status</span>
                              {sortUsersBy === 'status' &&
                                (sortUserDirection === 'asc' ? (
                                  <SortAsc className="h-4 w-4" />
                                ) : (
                                  <SortDesc className="h-4 w-4" />
                                ))}
                            </div>
                          </th>
                          <th
                            className="py-3 px-4 text-left text-sm font-medium text-blackblack-60 cursor-pointer"
                            onClick={() => handleSortUsers('lastLogin')}
                          >
                            <div className="flex items-center gap-1">
                              <span>Last Login</span>
                              {sortUsersBy === 'lastLogin' &&
                                (sortUserDirection === 'asc' ? (
                                  <SortAsc className="h-4 w-4" />
                                ) : (
                                  <SortDesc className="h-4 w-4" />
                                ))}
                            </div>
                          </th>
                          <th className="py-3 px-4 text-right text-sm font-medium text-blackblack-60">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {sortedUsers.map(user => (
                          <tr
                            key={user.id}
                            className="border-b border-[#111c2d1a] last:border-b-0 hover:bg-surfaceslightgray-10"
                          >
                            <td className="py-3 px-4">
                              <Checkbox
                                checked={selectedUsers.includes(user.id)}
                                onCheckedChange={() => toggleUserSelection(user.id)}
                                aria-label={`Select ${user.name}`}
                              />
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  {user.avatar ? (
                                    <AvatarImage src={user.avatar} alt={user.name} />
                                  ) : (
                                    <AvatarFallback className="bg-light-themeprimarylight-blue text-light-themeprimaryblue">
                                      {user.name.charAt(0)}
                                    </AvatarFallback>
                                  )}
                                </Avatar>
                                <span className="font-medium">{user.name}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-blackblack-60">{user.email}</td>
                            <td className="py-3 px-4">{user.role}</td>
                            <td className="py-3 px-4">
                              <Badge className={getStatusBadgeClass(user.status)}>
                                {user.status === 'active' ? 'Active' : 'Inactive'}
                              </Badge>
                            </td>
                            <td className="py-3 px-4 text-blackblack-60">{user.lastLogin}</td>
                            <td className="py-3 px-4 text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-actionwarning"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}

                        {filteredUsers.length === 0 && (
                          <tr>
                            <td colSpan={7} className="py-8 text-center text-blackblack-60">
                              No users found matching your search criteria.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="text-sm text-blackblack-60">
                      Showing {Math.min(1, filteredUsers.length)}-
                      {Math.min(10, filteredUsers.length)} of {filteredUsers.length} users
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        disabled={currentPage === 1}
                      >
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
                      <Button variant="outline" size="sm" className="h-8 w-8">
                        3
                      </Button>
                      <span className="mx-1">...</span>
                      <Button variant="outline" size="sm" className="h-8 w-8">
                        10
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mt-10">
                  <h3 className="text-lg font-medium">Order Table with Status</h3>

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
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                            Date
                          </th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                            Amount
                          </th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                            Payment Method
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
                        {mockOrders.map(order => (
                          <tr
                            key={order.id}
                            className="border-b border-[#111c2d1a] last:border-b-0 hover:bg-surfaceslightgray-10"
                          >
                            <td className="py-3 px-4 font-medium text-light-themeprimaryblue">
                              {order.id}
                            </td>
                            <td className="py-3 px-4">{order.customer}</td>
                            <td className="py-3 px-4 text-blackblack-60">{order.date}</td>
                            <td className="py-3 px-4 font-medium">{order.amount}</td>
                            <td className="py-3 px-4">{order.paymentMethod}</td>
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-1">
                                {order.status === 'processing' && (
                                  <Badge className="flex items-center gap-1 bg-actionalert-light text-actionalert">
                                    <Clock className="h-3 w-3" />
                                    <span>Processing</span>
                                  </Badge>
                                )}
                                {order.status === 'shipped' && (
                                  <Badge className="flex items-center gap-1 bg-light-themeprimarylight-blue text-light-themeprimaryblue">
                                    <Truck className="h-3 w-3" />
                                    <span>Shipped</span>
                                  </Badge>
                                )}
                                {order.status === 'delivered' && (
                                  <Badge className="flex items-center gap-1 bg-actionsuccess-light text-actionsuccess">
                                    <CheckCircle className="h-3 w-3" />
                                    <span>Delivered</span>
                                  </Badge>
                                )}
                                {order.status === 'cancelled' && (
                                  <Badge className="flex items-center gap-1 bg-actionwarning-light text-actionwarning">
                                    <XCircle className="h-3 w-3" />
                                    <span>Cancelled</span>
                                  </Badge>
                                )}
                              </div>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <FileText className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Data Grid Example
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-white p-6 rounded-lg border border-[#111c2d1a]">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Product Inventory Dashboard</h2>
                    <p className="text-blackblack-60">
                      Monitor and manage your product inventory levels.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-surfaceslightgray-10 p-4 rounded-lg">
                      <h3 className="text-blackblack-60 text-sm font-medium mb-2">
                        Total Products
                      </h3>
                      <p className="text-2xl font-bold">248</p>
                      <p className="text-xs text-actionsuccess mt-1">↑ 24 from last month</p>
                    </div>

                    <div className="bg-surfaceslightgray-10 p-4 rounded-lg">
                      <h3 className="text-blackblack-60 text-sm font-medium mb-2">In Stock</h3>
                      <p className="text-2xl font-bold">189</p>
                      <p className="text-xs text-actionsuccess mt-1">↑ 12 from last month</p>
                    </div>

                    <div className="bg-surfaceslightgray-10 p-4 rounded-lg">
                      <h3 className="text-blackblack-60 text-sm font-medium mb-2">Low Stock</h3>
                      <p className="text-2xl font-bold">42</p>
                      <p className="text-xs text-actionwarning mt-1">↑ 8 from last month</p>
                    </div>

                    <div className="bg-surfaceslightgray-10 p-4 rounded-lg">
                      <h3 className="text-blackblack-60 text-sm font-medium mb-2">Out of Stock</h3>
                      <p className="text-2xl font-bold">17</p>
                      <p className="text-xs text-actionwarning mt-1">↓ 3 from last month</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
                    <div className="flex gap-3 w-full md:w-auto">
                      <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-blackblack-60" />
                        <Input placeholder="Search products..." className="pl-10" />
                      </div>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <Filter className="mr-2 h-4 w-4" />
                          <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          <SelectItem value="electronics">Electronics</SelectItem>
                          <SelectItem value="accessories">Accessories</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex gap-2 w-full md:w-auto justify-between md:justify-start">
                      <Button variant="outline" className="flex items-center gap-1">
                        <AlertTriangle className="h-4 w-4 text-actionalert" />
                        <span>Low Stock</span>
                      </Button>
                      <Button variant="outline" className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>Export</span>
                      </Button>
                      <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        <span>Add Product</span>
                      </Button>
                    </div>
                  </div>

                  <div className="overflow-x-auto rounded-lg border border-[#111c2d1a]">
                    <table className="w-full">
                      <thead className="bg-surfaceslightgray-10 border-b border-[#111c2d1a]">
                        <tr>
                          <th className="py-3 px-4 text-left">
                            <Checkbox aria-label="Select all products" />
                          </th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                            <div className="flex items-center gap-1">
                              <span>Product</span>
                              <SortAsc className="h-4 w-4" />
                            </div>
                          </th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                            ID
                          </th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                            Category
                          </th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                            Price
                          </th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                            <div className="flex items-center gap-1">
                              <span>Stock</span>
                              <SortDesc className="h-4 w-4" />
                            </div>
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
                        {mockProducts.map(product => (
                          <tr
                            key={product.id}
                            className="border-b border-[#111c2d1a] last:border-b-0 hover:bg-surfaceslightgray-10"
                          >
                            <td className="py-3 px-4">
                              <Checkbox aria-label={`Select ${product.name}`} />
                            </td>
                            <td className="py-3 px-4 font-medium">{product.name}</td>
                            <td className="py-3 px-4 text-blackblack-60">{product.id}</td>
                            <td className="py-3 px-4">{product.category}</td>
                            <td className="py-3 px-4 font-medium">{product.price}</td>
                            <td className="py-3 px-4">{product.stock}</td>
                            <td className="py-3 px-4">
                              <Badge className={getStatusBadgeClass(product.status)}>
                                {product.status === 'in-stock'
                                  ? 'In Stock'
                                  : product.status === 'low-stock'
                                    ? 'Low Stock'
                                    : 'Out of Stock'}
                              </Badge>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="text-sm text-blackblack-60">Showing 1-7 of 248 products</div>
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
                      <Button variant="outline" size="sm" className="h-8 w-8">
                        3
                      </Button>
                      <span className="mx-1">...</span>
                      <Button variant="outline" size="sm" className="h-8 w-8">
                        20
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Implementation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Basic Table Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// Simple table
<div className="overflow-x-auto rounded-lg border border-[#111c2d1a]">
  <table className="w-full">
    <thead className="bg-surfaceslightgray-10 border-b border-[#111c2d1a]">
      <tr>
        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Name</th>
        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Email</th>
        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Role</th>
        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Status</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id} className="border-b border-[#111c2d1a] last:border-b-0 hover:bg-surfaceslightgray-10">
          <td className="py-3 px-4 font-medium">{user.name}</td>
          <td className="py-3 px-4 text-blackblack-60">{user.email}</td>
          <td className="py-3 px-4">{user.role}</td>
          <td className="py-3 px-4">
            <Badge className={getStatusBadgeClass(user.status)}>
              {user.status === "active" ? "Active" : "Inactive"}
            </Badge>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>`}
                    </code>
                  </pre>

                  <h3 className="text-lg font-medium mt-6">Sortable Table Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// State for sorting
const [sortBy, setSortBy] = useState("name");
const [sortDirection, setSortDirection] = useState("asc");

// Handle sort change
const handleSort = (field) => {
  if (sortBy === field) {
    setSortDirection(prev => prev === "asc" ? "desc" : "asc");
  } else {
    setSortBy(field);
    setSortDirection("asc");
  }
};

// Sort the data
const sortedData = [...data].sort((a, b) => {
  if (sortDirection === "asc") {
    return a[sortBy] > b[sortBy] ? 1 : -1;
  } else {
    return a[sortBy] < b[sortBy] ? 1 : -1;
  }
});

// Sortable header
<th 
  className="py-3 px-4 text-left text-sm font-medium text-blackblack-60 cursor-pointer"
  onClick={() => handleSort("name")}
>
  <div className="flex items-center gap-1">
    <span>Name</span>
    {sortBy === "name" && (
      sortDirection === "asc" ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />
    )}
  </div>
</th>`}
                    </code>
                  </pre>

                  <h3 className="text-lg font-medium mt-6">Table with Checkboxes Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// State for selected items
const [selectedItems, setSelectedItems] = useState([]);

// Toggle selection of a single item
const toggleItemSelection = (itemId) => {
  setSelectedItems(prev => 
    prev.includes(itemId)
      ? prev.filter(id => id !== itemId)
      : [...prev, itemId]
  );
};

// Toggle selection of all items
const toggleSelectAll = () => {
  if (selectedItems.length === filteredItems.length) {
    setSelectedItems([]);
  } else {
    setSelectedItems(filteredItems.map(item => item.id));
  }
};

// Table with checkboxes
<table className="w-full">
  <thead>
    <tr>
      <th className="py-3 px-4 text-left">
        <Checkbox 
          checked={selectedItems.length === filteredItems.length && filteredItems.length > 0} 
          onCheckedChange={toggleSelectAll}
          aria-label="Select all items"
        />
      </th>
      {/* Other headers */}
    </tr>
  </thead>
  <tbody>
    {items.map((item) => (
      <tr key={item.id}>
        <td className="py-3 px-4">
          <Checkbox 
            checked={selectedItems.includes(item.id)} 
            onCheckedChange={() => toggleItemSelection(item.id)}
            aria-label={\`Select \${item.name}\`}
          />
        </td>
        {/* Other cells */}
      </tr>
    ))}
  </tbody>
</table>`}
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

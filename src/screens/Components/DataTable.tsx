import React, { useState } from 'react';
import { TitlebarByAnima } from '../Buttons/components/Titlebar';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { DataTable, StatusBadge } from '../../components/ui/data-table';
import { Button } from '../../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { 
  Plus,
  Download,
  Filter,
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
  CheckCircle,
  Clock,
  Truck,
  XCircle,
  FileText,
  AlertTriangle
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
  {
    id: 'USR008',
    name: 'Olivia Martinez',
    email: 'olivia@example.com',
    role: 'User',
    status: 'active',
    lastLogin: '4 days ago',
    avatar: 'https://i.pravatar.cc/150?img=25',
  },
  {
    id: 'USR009',
    name: 'William Taylor',
    email: 'william@example.com',
    role: 'Editor',
    status: 'inactive',
    lastLogin: '1 week ago',
    avatar: 'https://i.pravatar.cc/150?img=30',
  },
  {
    id: 'USR010',
    name: 'Sophia Anderson',
    email: 'sophia@example.com',
    role: 'Admin',
    status: 'active',
    lastLogin: '6 hours ago',
    avatar: 'https://i.pravatar.cc/150?img=35',
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

export function DataTableDemo() {
  const [selectedUsers, setSelectedUsers] = useState<UserData[]>([]);
  
  // User columns definition
  const userColumns = [
    {
      id: 'name',
      header: 'Name',
      enableSorting: true,
      cell: ({ row }: { row: UserData }) => (
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            {row.avatar ? (
              <AvatarImage src={row.avatar} alt={row.name} />
            ) : (
              <AvatarFallback className="bg-light-themeprimarylight-blue text-light-themeprimaryblue">
                {row.name.charAt(0)}
              </AvatarFallback>
            )}
          </Avatar>
          <span className="font-medium">{row.name}</span>
        </div>
      ),
    },
    {
      id: 'email',
      header: 'Email',
      accessorKey: 'email',
      enableSorting: true,
      cell: ({ row }: { row: UserData }) => (
        <span className="text-blackblack-60">{row.email}</span>
      ),
    },
    {
      id: 'role',
      header: 'Role',
      accessorKey: 'role',
      enableSorting: true,
    },
    {
      id: 'status',
      header: 'Status',
      accessorKey: 'status',
      enableSorting: true,
      cell: ({ row }: { row: UserData }) => (
        <StatusBadge 
          status={row.status} 
          label={row.status === 'active' ? 'Active' : 'Inactive'} 
        />
      ),
    },
    {
      id: 'lastLogin',
      header: 'Last Login',
      accessorKey: 'lastLogin',
      enableSorting: true,
      cell: ({ row }: { row: UserData }) => (
        <span className="text-blackblack-60">{row.lastLogin}</span>
      ),
    },
    {
      id: 'actions',
      header: 'Actions',
      enableSorting: false,
      cell: () => (
        <div className="flex justify-end gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Eye className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-actionwarning">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  // Order columns definition
  const orderColumns = [
    {
      id: 'id',
      header: 'Order ID',
      accessorKey: 'id',
      enableSorting: true,
      cell: ({ row }: { row: OrderData }) => (
        <span className="font-medium text-light-themeprimaryblue">{row.id}</span>
      ),
    },
    {
      id: 'customer',
      header: 'Customer',
      accessorKey: 'customer',
      enableSorting: true,
    },
    {
      id: 'date',
      header: 'Date',
      accessorKey: 'date',
      enableSorting: true,
      cell: ({ row }: { row: OrderData }) => (
        <span className="text-blackblack-60">{row.date}</span>
      ),
    },
    {
      id: 'amount',
      header: 'Amount',
      accessorKey: 'amount',
      enableSorting: true,
      cell: ({ row }: { row: OrderData }) => (
        <span className="font-medium">{row.amount}</span>
      ),
    },
    {
      id: 'paymentMethod',
      header: 'Payment Method',
      accessorKey: 'paymentMethod',
      enableSorting: true,
    },
    {
      id: 'status',
      header: 'Status',
      accessorKey: 'status',
      enableSorting: true,
      cell: ({ row }: { row: OrderData }) => {
        let icon;
        let label;
        
        switch (row.status) {
          case 'processing':
            icon = <Clock className="h-3 w-3" />;
            label = 'Processing';
            break;
          case 'shipped':
            icon = <Truck className="h-3 w-3" />;
            label = 'Shipped';
            break;
          case 'delivered':
            icon = <CheckCircle className="h-3 w-3" />;
            label = 'Delivered';
            break;
          case 'cancelled':
            icon = <XCircle className="h-3 w-3" />;
            label = 'Cancelled';
            break;
        }
        
        return <StatusBadge status={row.status} icon={icon} label={label} />;
      },
    },
    {
      id: 'actions',
      header: 'Actions',
      enableSorting: false,
      cell: () => (
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
      ),
    },
  ];

  // Product columns definition
  const productColumns = [
    {
      id: 'name',
      header: 'Product',
      accessorKey: 'name',
      enableSorting: true,
      cell: ({ row }: { row: ProductData }) => (
        <span className="font-medium">{row.name}</span>
      ),
    },
    {
      id: 'id',
      header: 'ID',
      accessorKey: 'id',
      enableSorting: true,
      cell: ({ row }: { row: ProductData }) => (
        <span className="text-blackblack-60">{row.id}</span>
      ),
    },
    {
      id: 'category',
      header: 'Category',
      accessorKey: 'category',
      enableSorting: true,
    },
    {
      id: 'price',
      header: 'Price',
      accessorKey: 'price',
      enableSorting: true,
      cell: ({ row }: { row: ProductData }) => (
        <span className="font-medium">{row.price}</span>
      ),
    },
    {
      id: 'stock',
      header: 'Stock',
      accessorKey: 'stock',
      enableSorting: true,
    },
    {
      id: 'status',
      header: 'Status',
      accessorKey: 'status',
      enableSorting: true,
      cell: ({ row }: { row: ProductData }) => (
        <StatusBadge 
          status={row.status} 
          label={
            row.status === 'in-stock'
              ? 'In Stock'
              : row.status === 'low-stock'
                ? 'Low Stock'
                : 'Out of Stock'
          } 
        />
      ),
    },
    {
      id: 'actions',
      header: 'Actions',
      enableSorting: false,
      cell: () => (
        <div className="flex justify-end gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  // Handle row selection
  const handleSelectionChange = (selectedRows: UserData[]) => {
    setSelectedUsers(selectedRows);
  };

  // Handle row click
  const handleRowClick = (row: UserData) => {
    console.log('Row clicked:', row);
  };

  // Render user details for expansion
  const renderUserDetails = (user: UserData) => (
    <div className="bg-white p-4 rounded-md">
      <h3 className="text-lg font-medium mb-2">{user.name}</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-blackblack-60">Email</p>
          <p>{user.email}</p>
        </div>
        <div>
          <p className="text-sm text-blackblack-60">Role</p>
          <p>{user.role}</p>
        </div>
        <div>
          <p className="text-sm text-blackblack-60">Status</p>
          <StatusBadge 
            status={user.status} 
            label={user.status === 'active' ? 'Active' : 'Inactive'} 
          />
        </div>
        <div>
          <p className="text-sm text-blackblack-60">Last Login</p>
          <p>{user.lastLogin}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col overflow-hidden">
      <TitlebarByAnima title="Data Table" />
      <main className="flex-1 overflow-auto p-6">
        <div className="space-y-6">
          <Card className="rounded-xl shadow-light-theme-shadow-medium">
            <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
              <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                Basic Data Table
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <p className="text-blackblack-60">
                  A simple data table with no extra features enabled.
                </p>
                
                <DataTable
                  data={mockUsers.slice(0, 5)}
                  columns={userColumns.filter(col => col.id !== 'actions')}
                  primaryKey="id"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl shadow-light-theme-shadow-medium">
            <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
              <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                Sortable and Searchable Table
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <p className="text-blackblack-60">
                  A data table with sorting, searching, and selection capabilities.
                </p>
                
                <DataTable
                  data={mockUsers}
                  columns={userColumns}
                  primaryKey="id"
                  enableSelection={true}
                  enableSearch={true}
                  searchPlaceholder="Search users..."
                  searchFields={['name', 'email', 'role']}
                  enableSorting={true}
                  onSelectionChange={handleSelectionChange}
                  onRowClick={handleRowClick}
                  renderRowSubComponent={renderUserDetails}
                  actions={
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      <span>Add User</span>
                    </Button>
                  }
                  exportOptions={{
                    enableExport: true,
                    exportFileName: 'users-export',
                  }}
                  filterComponent={
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <Filter className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="All Roles" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Roles</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="editor">Editor</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                      </SelectContent>
                    </Select>
                  }
                />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl shadow-light-theme-shadow-medium">
            <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
              <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                Paginated Table with Striping
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <p className="text-blackblack-60">
                  A data table with pagination and striped rows.
                </p>
                
                <DataTable
                  data={mockOrders}
                  columns={orderColumns}
                  primaryKey="id"
                  enablePagination={true}
                  pageSize={5}
                  enableSearch={true}
                  searchPlaceholder="Search orders..."
                  searchFields={['id', 'customer']}
                  enableSorting={true}
                  striped={true}
                  actions={
                    <Button variant="outline" className="flex items-center gap-1">
                      <AlertTriangle className="h-4 w-4 text-actionalert" />
                      <span>Pending Orders</span>
                    </Button>
                  }
                  emptyStateMessage={
                    <div className="flex flex-col items-center py-6">
                      <FileText className="h-12 w-12 text-blackblack-40 mb-3" />
                      <h3 className="text-lg font-medium mb-1">No Orders Found</h3>
                      <p className="text-blackblack-60 mb-4">There are no orders matching your criteria.</p>
                      <Button variant="outline">Create New Order</Button>
                    </div>
                  }
                />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl shadow-light-theme-shadow-medium">
            <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
              <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                Product Inventory Table
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-surfaceslightgray-10 p-4 rounded-lg">
                    <h3 className="text-blackblack-60 text-sm font-medium mb-2">Total Products</h3>
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
                
                <DataTable
                  data={mockProducts}
                  columns={productColumns}
                  primaryKey="id"
                  enableSelection={true}
                  enableSearch={true}
                  searchPlaceholder="Search products..."
                  searchFields={['name', 'category']}
                  enableSorting={true}
                  enablePagination={true}
                  actions={
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      <span>Add Product</span>
                    </Button>
                  }
                  filterComponent={
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
                  }
                  exportOptions={{
                    enableExport: true,
                    exportFileName: 'products-export',
                    onExport: () => console.log('Exporting products data'),
                  }}
                />
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
                <h3 className="text-lg font-medium">Basic Usage</h3>
                <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                  <code className="text-sm">
                    {`import { DataTable } from '../../components/ui/data-table';

// Define your columns
const columns = [
  {
    id: 'name',
    header: 'Name',
    accessorKey: 'name',
    enableSorting: true,
  },
  {
    id: 'email',
    header: 'Email',
    accessorKey: 'email',
  },
  {
    id: 'role',
    header: 'Role',
    accessorKey: 'role',
  },
];

// Your data array
const data = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
];

// Render the data table
<DataTable
  data={data}
  columns={columns}
  primaryKey="id"
  enableSorting={true}
  enableSearch={true}
  searchFields={['name', 'email']}
/>`}
                  </code>
                </pre>

                <h3 className="text-lg font-medium mt-6">Custom Cell Rendering</h3>
                <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                  <code className="text-sm">
                    {`// Column with custom cell rendering
const columns = [
  // ...other columns
  {
    id: 'name',
    header: 'Name',
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={row.avatar} alt={row.name} />
          <AvatarFallback>{row.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <span className="font-medium">{row.name}</span>
      </div>
    ),
  },
  {
    id: 'status',
    header: 'Status',
    accessorKey: 'status',
    cell: ({ row }) => (
      <StatusBadge 
        status={row.status} 
        label={row.status === 'active' ? 'Active' : 'Inactive'} 
      />
    ),
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <div className="flex justify-end gap-2">
        <Button variant="ghost" size="icon">
          <Edit className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
]`}
                  </code>
                </pre>

                <h3 className="text-lg font-medium mt-6">Advanced Features</h3>
                <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                  <code className="text-sm">
                    {`<DataTable
  data={users}
  columns={columns}
  primaryKey="id"
  enableSelection={true}
  enableSearch={true}
  searchPlaceholder="Search users..."
  searchFields={['name', 'email', 'role']}
  enableSorting={true}
  enablePagination={true}
  pageSize={10}
  striped={true}
  onSelectionChange={(selectedRows) => console.log('Selected:', selectedRows)}
  onRowClick={(row) => console.log('Clicked:', row)}
  renderRowSubComponent={(row) => (
    <div className="p-4">
      <h3>User Details</h3>
      <p>Email: {row.email}</p>
    </div>
  )}
  actions={
    <Button>
      <Plus className="mr-2 h-4 w-4" />
      <span>Add User</span>
    </Button>
  }
  filterComponent={
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="All Roles" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Roles</SelectItem>
        <SelectItem value="admin">Admin</SelectItem>
        <SelectItem value="user">User</SelectItem>
      </SelectContent>
    </Select>
  }
  exportOptions={{
    enableExport: true,
    exportFileName: 'users-export',
    onExport: () => exportDataToCSV(users, 'users.csv'),
  }}
  emptyStateMessage={
    <div className="flex flex-col items-center py-6">
      <h3>No Users Found</h3>
      <p>Try a different search term or filter.</p>
    </div>
  }
/>`}
                  </code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default DataTableDemo;
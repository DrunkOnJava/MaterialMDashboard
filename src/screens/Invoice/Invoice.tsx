import React, { useState } from 'react';
import { TitlebarByAnima } from '../Buttons/components/Titlebar';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Badge } from '../../components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import {
  Search,
  Plus,
  Filter,
  Download,
  Printer,
  MoreHorizontal,
  Mail,
  ExternalLink,
  Edit,
  Trash2,
  ArrowUpDown,
  FileText,
  DollarSign,
  Calendar,
  Clock,
  CreditCard,
  CheckCircle,
  AlertCircle,
  XCircle,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '../../components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

// Mock invoice data
interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

interface Invoice {
  id: string;
  number: string;
  customer: {
    name: string;
    email: string;
    company?: string;
    avatar?: string;
  };
  amount: number;
  date: string;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue' | 'draft' | 'cancelled';
  items?: InvoiceItem[];
}

const invoices: Invoice[] = [
  {
    id: '1',
    number: 'INV-2025-001',
    customer: {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      company: 'Acme Inc.',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    amount: 1250.00,
    date: '2025-05-01',
    dueDate: '2025-05-15',
    status: 'paid',
    items: [
      {
        id: '1-1',
        description: 'Website Design Services',
        quantity: 1,
        unitPrice: 1000,
        total: 1000,
      },
      {
        id: '1-2',
        description: 'Logo Design',
        quantity: 1,
        unitPrice: 250,
        total: 250,
      },
    ],
  },
  {
    id: '2',
    number: 'INV-2025-002',
    customer: {
      name: 'Michael Chen',
      email: 'michael.chen@example.com',
      company: 'TechCorp',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    amount: 3500.00,
    date: '2025-05-05',
    dueDate: '2025-05-20',
    status: 'pending',
    items: [
      {
        id: '2-1',
        description: 'Custom Software Development',
        quantity: 10,
        unitPrice: 150,
        total: 1500,
      },
      {
        id: '2-2',
        description: 'API Integration',
        quantity: 5,
        unitPrice: 200,
        total: 1000,
      },
      {
        id: '2-3',
        description: 'Project Management',
        quantity: 10,
        unitPrice: 100,
        total: 1000,
      },
    ],
  },
  {
    id: '3',
    number: 'INV-2025-003',
    customer: {
      name: 'Alicia Martinez',
      email: 'alicia.martinez@example.com',
      company: 'Design Masters',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    amount: 750.00,
    date: '2025-05-10',
    dueDate: '2025-05-25',
    status: 'paid',
    items: [
      {
        id: '3-1',
        description: 'UX Consulting',
        quantity: 5,
        unitPrice: 150,
        total: 750,
      },
    ],
  },
  {
    id: '4',
    number: 'INV-2025-004',
    customer: {
      name: 'David Wilson',
      email: 'david.wilson@example.com',
      company: 'Acme Inc.',
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
    amount: 1800.00,
    date: '2025-04-15',
    dueDate: '2025-04-30',
    status: 'overdue',
    items: [
      {
        id: '4-1',
        description: 'Mobile App Development',
        quantity: 12,
        unitPrice: 150,
        total: 1800,
      },
    ],
  },
  {
    id: '5',
    number: 'INV-2025-005',
    customer: {
      name: 'Jessica Thompson',
      email: 'jessica.thompson@example.com',
      company: 'Marketing Pros',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    amount: 2200.00,
    date: '2025-05-12',
    dueDate: '2025-05-27',
    status: 'pending',
    items: [
      {
        id: '5-1',
        description: 'SEO Services',
        quantity: 1,
        unitPrice: 1200,
        total: 1200,
      },
      {
        id: '5-2',
        description: 'Content Creation',
        quantity: 4,
        unitPrice: 250,
        total: 1000,
      },
    ],
  },
  {
    id: '6',
    number: 'INV-2025-006',
    customer: {
      name: 'Robert Taylor',
      email: 'robert.taylor@example.com',
      company: 'TechCorp',
      avatar: 'https://i.pravatar.cc/150?img=6',
    },
    amount: 5000.00,
    date: '2025-05-15',
    dueDate: '2025-06-15',
    status: 'draft',
    items: [
      {
        id: '6-1',
        description: 'Infrastructure Setup',
        quantity: 1,
        unitPrice: 3000,
        total: 3000,
      },
      {
        id: '6-2',
        description: 'Cloud Migration Services',
        quantity: 20,
        unitPrice: 100,
        total: 2000,
      },
    ],
  },
  {
    id: '7',
    number: 'INV-2025-007',
    customer: {
      name: 'Emma Davis',
      email: 'emma.davis@example.com',
      company: 'Design Masters',
      avatar: 'https://i.pravatar.cc/150?img=7',
    },
    amount: 900.00,
    date: '2025-04-01',
    dueDate: '2025-04-15',
    status: 'cancelled',
    items: [
      {
        id: '7-1',
        description: 'Brand Identity Design',
        quantity: 1,
        unitPrice: 900,
        total: 900,
      },
    ],
  },
  {
    id: '8',
    number: 'INV-2025-008',
    customer: {
      name: 'Sophie Brown',
      email: 'sophie.brown@example.com',
      company: 'Finance First',
      avatar: 'https://i.pravatar.cc/150?img=8',
    },
    amount: 1500.00,
    date: '2025-05-18',
    dueDate: '2025-06-02',
    status: 'pending',
    items: [
      {
        id: '8-1',
        description: 'Financial Reporting Dashboard',
        quantity: 1,
        unitPrice: 1500,
        total: 1500,
      },
    ],
  },
];

// Status badge colors
const statusColors = {
  paid: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  overdue: 'bg-red-100 text-red-800',
  draft: 'bg-gray-100 text-gray-800',
  cancelled: 'bg-gray-100 text-gray-800 line-through',
};

const statusIcons = {
  paid: <CheckCircle className="h-4 w-4 text-green-600" />,
  pending: <Clock className="h-4 w-4 text-yellow-600" />,
  overdue: <AlertCircle className="h-4 w-4 text-red-600" />,
  draft: <FileText className="h-4 w-4 text-gray-600" />,
  cancelled: <XCircle className="h-4 w-4 text-gray-600" />,
};

// Format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

// Format date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
};

export function Invoice() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [sortField, setSortField] = useState<keyof Invoice>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  // Handle sort changes
  const handleSort = (field: keyof Invoice) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  // Filter and sort invoices
  const filteredInvoices = invoices
    .filter(invoice => {
      // Filter by search query
      const matchesSearch = 
        invoice.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
        invoice.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        invoice.customer.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        invoice.customer.email.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filter by status (tab)
      const matchesStatus = 
        activeTab === 'all' || 
        (activeTab === 'unpaid' && (invoice.status === 'pending' || invoice.status === 'overdue')) ||
        activeTab === invoice.status;
      
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortField === 'amount') {
        return sortDirection === 'asc' ? a.amount - b.amount : b.amount - a.amount;
      }
      
      if (sortField === 'date' || sortField === 'dueDate') {
        const dateA = new Date(a[sortField]).getTime();
        const dateB = new Date(b[sortField]).getTime();
        return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
      }
      
      return 0;
    });

  return (
    <div className="p-0 h-full">
      <TitlebarByAnima title="Invoices" />
      <div className="p-6">
        <div className="mb-6 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blackblack-60" size={16} />
              <Input
                placeholder="Search invoices..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center">
              <Filter size={16} className="mr-2" />
              Filter
            </Button>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="flex items-center">
              <Download size={16} className="mr-2" />
              Export
            </Button>
            <Button className="flex items-center">
              <Plus size={16} className="mr-2" />
              New Invoice
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-light-themeprimarylight-blue rounded-full flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-light-themeprimaryblue" />
                </div>
                <ArrowUpDown className="h-4 w-4 text-blackblack-60" />
              </div>
              <div className="mt-3">
                <h3 className="text-blackblack-60 text-sm">Total Outstanding</h3>
                <p className="text-2xl font-bold text-blackblack-100">
                  {formatCurrency(
                    invoices
                      .filter(inv => inv.status === 'pending' || inv.status === 'overdue')
                      .reduce((sum, inv) => sum + inv.amount, 0)
                  )}
                </p>
                <p className="text-xs text-green-600 mt-1">+12.5% from last month</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <ArrowUpDown className="h-4 w-4 text-blackblack-60" />
              </div>
              <div className="mt-3">
                <h3 className="text-blackblack-60 text-sm">Paid Invoices</h3>
                <p className="text-2xl font-bold text-blackblack-100">
                  {formatCurrency(
                    invoices
                      .filter(inv => inv.status === 'paid')
                      .reduce((sum, inv) => sum + inv.amount, 0)
                  )}
                </p>
                <p className="text-xs text-green-600 mt-1">+8.2% from last month</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <ArrowUpDown className="h-4 w-4 text-blackblack-60" />
              </div>
              <div className="mt-3">
                <h3 className="text-blackblack-60 text-sm">Pending Invoices</h3>
                <p className="text-2xl font-bold text-blackblack-100">
                  {formatCurrency(
                    invoices
                      .filter(inv => inv.status === 'pending')
                      .reduce((sum, inv) => sum + inv.amount, 0)
                  )}
                </p>
                <p className="text-xs text-yellow-600 mt-1">+5.3% from last month</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                <ArrowUpDown className="h-4 w-4 text-blackblack-60" />
              </div>
              <div className="mt-3">
                <h3 className="text-blackblack-60 text-sm">Overdue Invoices</h3>
                <p className="text-2xl font-bold text-blackblack-100">
                  {formatCurrency(
                    invoices
                      .filter(inv => inv.status === 'overdue')
                      .reduce((sum, inv) => sum + inv.amount, 0)
                  )}
                </p>
                <p className="text-xs text-red-600 mt-1">-3.7% from last month</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4 bg-white border border-[#e4ebf0] p-1">
            <TabsTrigger 
              value="all"
              className="data-[state=active]:bg-surfaceslightgray-10 data-[state=active]:shadow-none rounded-md py-1.5 px-4"
            >
              All Invoices
            </TabsTrigger>
            <TabsTrigger 
              value="unpaid"
              className="data-[state=active]:bg-surfaceslightgray-10 data-[state=active]:shadow-none rounded-md py-1.5 px-4"
            >
              Unpaid
            </TabsTrigger>
            <TabsTrigger 
              value="paid"
              className="data-[state=active]:bg-surfaceslightgray-10 data-[state=active]:shadow-none rounded-md py-1.5 px-4"
            >
              Paid
            </TabsTrigger>
            <TabsTrigger 
              value="overdue"
              className="data-[state=active]:bg-surfaceslightgray-10 data-[state=active]:shadow-none rounded-md py-1.5 px-4"
            >
              Overdue
            </TabsTrigger>
            <TabsTrigger 
              value="draft"
              className="data-[state=active]:bg-surfaceslightgray-10 data-[state=active]:shadow-none rounded-md py-1.5 px-4"
            >
              Draft
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab}>
            <div className="bg-white rounded-lg border border-[#e4ebf0] overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead 
                        className="cursor-pointer hover:bg-gray-50"
                        onClick={() => handleSort('number')}
                      >
                        <div className="flex items-center">
                          Invoice
                          {sortField === 'number' && (
                            <span className="ml-2">
                              {sortDirection === 'asc' ? '↑' : '↓'}
                            </span>
                          )}
                        </div>
                      </TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead 
                        className="cursor-pointer hover:bg-gray-50 text-right"
                        onClick={() => handleSort('amount')}
                      >
                        <div className="flex items-center justify-end">
                          Amount
                          {sortField === 'amount' && (
                            <span className="ml-2">
                              {sortDirection === 'asc' ? '↑' : '↓'}
                            </span>
                          )}
                        </div>
                      </TableHead>
                      <TableHead 
                        className="cursor-pointer hover:bg-gray-50"
                        onClick={() => handleSort('date')}
                      >
                        <div className="flex items-center">
                          Invoice Date
                          {sortField === 'date' && (
                            <span className="ml-2">
                              {sortDirection === 'asc' ? '↑' : '↓'}
                            </span>
                          )}
                        </div>
                      </TableHead>
                      <TableHead 
                        className="cursor-pointer hover:bg-gray-50"
                        onClick={() => handleSort('dueDate')}
                      >
                        <div className="flex items-center">
                          Due Date
                          {sortField === 'dueDate' && (
                            <span className="ml-2">
                              {sortDirection === 'asc' ? '↑' : '↓'}
                            </span>
                          )}
                        </div>
                      </TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredInvoices.map((invoice) => (
                      <TableRow 
                        key={invoice.id}
                        className="cursor-pointer hover:bg-surfaceslightgray-10"
                        onClick={() => setSelectedInvoice(invoice)}
                      >
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <FileText className="h-4 w-4 mr-2 text-blackblack-60" />
                            {invoice.number}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Avatar className="w-6 h-6 mr-2">
                              <AvatarImage src={invoice.customer.avatar} alt={invoice.customer.name} />
                              <AvatarFallback>{invoice.customer.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="text-sm font-medium">{invoice.customer.name}</div>
                              {invoice.customer.company && (
                                <div className="text-xs text-blackblack-60">{invoice.customer.company}</div>
                              )}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          {formatCurrency(invoice.amount)}
                        </TableCell>
                        <TableCell>
                          {formatDate(invoice.date)}
                        </TableCell>
                        <TableCell>
                          {formatDate(invoice.dueDate)}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1.5">
                            {statusIcons[invoice.status]}
                            <Badge 
                              className={`${statusColors[invoice.status]} text-xs`}
                            >
                              {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end items-center space-x-2" onClick={e => e.stopPropagation()}>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Printer size={16} />
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreHorizontal size={16} />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem className="cursor-pointer">
                                  <Mail className="h-4 w-4 mr-2" />
                                  <span>Send Invoice</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">
                                  <Download className="h-4 w-4 mr-2" />
                                  <span>Download PDF</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">
                                  <Edit className="h-4 w-4 mr-2" />
                                  <span>Edit Invoice</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">
                                  <CreditCard className="h-4 w-4 mr-2" />
                                  <span>Mark as Paid</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="cursor-pointer text-red-600">
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  <span>Delete</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                    {filteredInvoices.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-6 text-gray-500">
                          No invoices found
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
              <div className="flex items-center justify-between border-t border-[#e4ebf0] px-4 py-3">
                <div className="text-sm text-gray-500">
                  Showing {filteredInvoices.length} of {invoices.length} invoices
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="px-2">
                    <ChevronLeft size={16} />
                  </Button>
                  <Button variant="outline" size="sm" className="px-3 bg-white">
                    1
                  </Button>
                  <Button variant="ghost" size="sm" className="px-3">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="px-2">
                    <ChevronRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Invoice Detail Modal */}
        {selectedInvoice && (
          <div className="fixed inset-0 bg-blackblack-100 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="sticky top-0 bg-white border-b border-[#e4ebf0] px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-bold">Invoice Details</h2>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setSelectedInvoice(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                  </svg>
                </Button>
              </div>

              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold">{selectedInvoice.number}</h3>
                      <Badge 
                        className={`${statusColors[selectedInvoice.status]} text-xs`}
                      >
                        {selectedInvoice.status.charAt(0).toUpperCase() + selectedInvoice.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-blackblack-60 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>Issued: {formatDate(selectedInvoice.date)}</span>
                      <span>•</span>
                      <span>Due: {formatDate(selectedInvoice.dueDate)}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                    <Button variant="outline" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" className="flex items-center">
                      <Printer className="h-4 w-4 mr-2" />
                      Print
                    </Button>
                    <Button className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Invoice
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="px-2">
                          <MoreHorizontal size={16} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="cursor-pointer">
                          <Edit className="h-4 w-4 mr-2" />
                          <span>Edit Invoice</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          <CreditCard className="h-4 w-4 mr-2" />
                          <span>Record Payment</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          <span>Delete Invoice</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-surfaceslightgray-10 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-blackblack-60 mb-3">Bill From</h4>
                    <div className="text-blackblack-100">
                      <p className="font-medium">Your Company Name</p>
                      <p>123 Business Street</p>
                      <p>San Francisco, CA 94103</p>
                      <p>United States</p>
                      <p className="mt-2">
                        <span className="font-medium">Tax ID:</span> US123456789
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-surfaceslightgray-10 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-blackblack-60 mb-3">Bill To</h4>
                    <div className="text-blackblack-100">
                      <div className="flex items-center gap-2 mb-1">
                        <Avatar className="w-6 h-6">
                          <AvatarImage src={selectedInvoice.customer.avatar} alt={selectedInvoice.customer.name} />
                          <AvatarFallback>{selectedInvoice.customer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="font-medium">{selectedInvoice.customer.name}</p>
                      </div>
                      <p>{selectedInvoice.customer.company}</p>
                      <p>456 Client Avenue</p>
                      <p>New York, NY 10001</p>
                      <p>United States</p>
                      <p className="mt-2">
                        <span className="font-medium">Email:</span> {selectedInvoice.customer.email}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-[#e4ebf0] overflow-hidden mb-8">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-blackblack-100">Description</TableHead>
                        <TableHead className="text-right text-blackblack-100">Quantity</TableHead>
                        <TableHead className="text-right text-blackblack-100">Unit Price</TableHead>
                        <TableHead className="text-right text-blackblack-100">Total</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedInvoice.items?.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-medium">{item.description}</TableCell>
                          <TableCell className="text-right">{item.quantity}</TableCell>
                          <TableCell className="text-right">{formatCurrency(item.unitPrice)}</TableCell>
                          <TableCell className="text-right">{formatCurrency(item.total)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  
                  <div className="border-t border-[#e4ebf0] p-4">
                    <div className="flex justify-between py-2">
                      <span className="text-blackblack-60">Subtotal</span>
                      <span className="font-medium">{formatCurrency(selectedInvoice.amount)}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-blackblack-60">Tax (0%)</span>
                      <span className="font-medium">{formatCurrency(0)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-[#e4ebf0] mt-2">
                      <span className="font-medium">Total</span>
                      <span className="font-bold text-xl">{formatCurrency(selectedInvoice.amount)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-surfaceslightgray-10 p-4 rounded-lg mb-8">
                  <h4 className="text-sm font-medium text-blackblack-100 mb-2">Payment Information</h4>
                  <div className="space-y-1">
                    <p><span className="font-medium">Payment Method:</span> Bank Transfer</p>
                    <p><span className="font-medium">Account Name:</span> Your Company, Inc.</p>
                    <p><span className="font-medium">Account Number:</span> XXXX-XXXX-XXXX-1234</p>
                    <p><span className="font-medium">Routing Number:</span> 123456789</p>
                  </div>
                </div>

                <div className="bg-surfaceslightgray-10 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-blackblack-100 mb-2">Notes & Terms</h4>
                  <p className="text-sm text-blackblack-60 mb-4">
                    Thank you for your business. Please make payment by the due date.
                  </p>
                  <p className="text-sm text-blackblack-60">
                    Payment Terms: Net 15 days. Late payments are subject to a 2% monthly charge.
                  </p>
                </div>
              </div>
              
              <div className="sticky bottom-0 bg-white border-t border-[#e4ebf0] px-6 py-4 flex justify-between items-center">
                <Button 
                  variant="outline"
                  onClick={() => setSelectedInvoice(null)}
                >
                  Close
                </Button>
                <div className="flex gap-2">
                  <Button 
                    variant="outline"
                    className="flex items-center"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Invoice
                  </Button>
                  {selectedInvoice.status === 'pending' && (
                    <Button className="flex items-center">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Mark as Paid
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
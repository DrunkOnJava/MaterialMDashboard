import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { Button } from "../../../../components/ui/button";
import { 
  Search, Filter, MoreHorizontal, Mail, MessageSquare, Eye, 
  ChevronRight, Users, UserPlus, CreditCard, Clock, Activity 
} from "lucide-react";
import { useToast } from "../../../../hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../../../../components/ui/dialog";
import { 
  Tabs, TabsContent, TabsList, TabsTrigger 
} from "../../../../components/ui/tabs";

// Define customer segment types
type CustomerSegment = "all" | "new" | "returning" | "vip" | "at-risk" | "inactive";

// Define customer interface
interface Customer {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  totalSpent: string;
  orderCount: number;
  lastPurchase: string;
  dateJoined: string;
  segment: CustomerSegment;
  location: string;
}

// Define activity interface
interface CustomerActivity {
  type: "purchase" | "login" | "review" | "support" | "cart";
  date: string;
  description: string;
}

// Mock customers data
const mockCustomers: Customer[] = [
  {
    id: "C001",
    name: "John Smith",
    email: "john.smith@example.com",
    avatar: "https://i.pravatar.cc/150?img=1",
    totalSpent: "$1,245.99",
    orderCount: 5,
    lastPurchase: "2025-03-10",
    dateJoined: "2024-11-15",
    segment: "returning",
    location: "New York, USA"
  },
  {
    id: "C002",
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
    avatar: "https://i.pravatar.cc/150?img=5",
    totalSpent: "$3,789.50",
    orderCount: 12,
    lastPurchase: "2025-03-15",
    dateJoined: "2024-04-22",
    segment: "vip",
    location: "London, UK"
  },
  {
    id: "C003",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    avatar: "https://i.pravatar.cc/150?img=8",
    totalSpent: "$289.99",
    orderCount: 1,
    lastPurchase: "2025-03-08",
    dateJoined: "2025-03-01",
    segment: "new",
    location: "Toronto, Canada"
  },
  {
    id: "C004",
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    avatar: "https://i.pravatar.cc/150?img=10",
    totalSpent: "$1,875.25",
    orderCount: 7,
    lastPurchase: "2025-02-14",
    dateJoined: "2024-06-30",
    segment: "returning",
    location: "Sydney, Australia"
  },
  {
    id: "C005",
    name: "David Lee",
    email: "david.lee@example.com",
    avatar: "https://i.pravatar.cc/150?img=12",
    totalSpent: "$429.99",
    orderCount: 2,
    lastPurchase: "2024-12-24",
    dateJoined: "2024-10-15",
    segment: "at-risk",
    location: "Singapore"
  },
  {
    id: "C006",
    name: "Lisa Garcia",
    email: "lisa.garcia@example.com",
    avatar: "https://i.pravatar.cc/150?img=25",
    totalSpent: "$2,145.75",
    orderCount: 8,
    lastPurchase: "2025-01-05",
    dateJoined: "2024-05-11",
    segment: "returning",
    location: "Madrid, Spain"
  },
  {
    id: "C007",
    name: "James Martinez",
    email: "james.martinez@example.com",
    avatar: "https://i.pravatar.cc/150?img=15",
    totalSpent: "$0.00",
    orderCount: 0,
    lastPurchase: "",
    dateJoined: "2024-08-19",
    segment: "inactive",
    location: "Paris, France"
  }
];

// Mock activities for the selected customer
const getMockCustomerActivities = (customerId: string): CustomerActivity[] => {
  return [
    {
      type: "purchase",
      date: "2025-03-15 14:23",
      description: "Placed order #ORD-5289 - $359.99"
    },
    {
      type: "login",
      date: "2025-03-15 14:15",
      description: "Logged in from iPhone device"
    },
    {
      type: "review",
      date: "2025-03-10 09:45",
      description: "Submitted a 5-star review for Wireless Headphones XR200"
    },
    {
      type: "purchase",
      date: "2025-02-28 17:30",
      description: "Placed order #ORD-5240 - $128.50"
    },
    {
      type: "support",
      date: "2025-02-20 11:10",
      description: "Contacted support about order delivery"
    },
    {
      type: "login",
      date: "2025-02-20 11:05",
      description: "Logged in from Chrome browser"
    },
    {
      type: "cart",
      date: "2025-02-15 19:22",
      description: "Added Smart Watch Series 5 to cart"
    }
  ];
};

// Mock customer segments data
const customerSegments = [
  { id: "all", name: "All Customers", count: 1254 },
  { id: "new", name: "New Customers", count: 246 },
  { id: "returning", name: "Returning Customers", count: 578 },
  { id: "vip", name: "VIP Customers", count: 125 },
  { id: "at-risk", name: "At-Risk", count: 89 },
  { id: "inactive", name: "Inactive", count: 216 }
];

export const CustomerOverview = (): JSX.Element => {
  // State hooks
  const [customers, setCustomers] = useState<Customer[]>(mockCustomers);
  const [searchTerm, setSearchTerm] = useState("");
  const [segmentFilter, setSegmentFilter] = useState<CustomerSegment>("all");
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [detailsTab, setDetailsTab] = useState("profile");
  
  const { toast } = useToast();

  // Filter customers based on search term and segment filter
  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = 
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSegment = segmentFilter === "all" || customer.segment === segmentFilter;
    
    return matchesSearch && matchesSegment;
  });

  // View customer details
  const viewCustomerDetails = (customer: Customer) => {
    setSelectedCustomer(customer);
    setIsDetailsOpen(true);
  };

  // Handle sending email to customer
  const handleSendEmail = (customer: Customer) => {
    toast({
      title: "Email composer opened",
      description: `Preparing to send email to ${customer.email}`,
      variant: "default",
    });
  };

  // Handle starting chat with customer
  const handleStartChat = (customer: Customer) => {
    toast({
      title: "Chat initialized",
      description: `Starting a support chat with ${customer.name}`,
      variant: "default",
    });
  };

  // Get segment badge styling based on segment
  const getSegmentBadgeClass = (segment: CustomerSegment) => {
    switch (segment) {
      case "new":
        return "bg-light-themeprimarylight-blue text-light-themeprimaryblue";
      case "returning":
        return "bg-actionsuccess-light text-actionsuccess";
      case "vip":
        return "bg-light-themesecondarylight-purple text-light-themesecondarypurple";
      case "at-risk":
        return "bg-actionalert-light text-actionalert";
      case "inactive":
        return "bg-actionwarning-light text-actionwarning";
      default:
        return "bg-blackblack-10 text-blackblack-100";
    }
  };

  // Get activity icon based on activity type
  const getActivityIcon = (type: CustomerActivity["type"]) => {
    switch (type) {
      case "purchase":
        return <CreditCard className="h-4 w-4 text-light-themeprimaryblue" />;
      case "login":
        return <Users className="h-4 w-4 text-actionsuccess" />;
      case "review":
        return <MessageSquare className="h-4 w-4 text-light-themesecondarypurple" />;
      case "support":
        return <Mail className="h-4 w-4 text-actionalert" />;
      case "cart":
        return <Clock className="h-4 w-4 text-blackblack-60" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Customer stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="rounded-xl shadow-light-theme-shadow-medium">
          <CardContent className="flex p-6 items-start">
            <div className="flex-1">
              <p className="text-blackblack-60 text-sm font-medium mb-2">Total Customers</p>
              <p className="text-blackblack-100 text-2xl font-semibold">1,254</p>
              <div className="flex items-center mt-2">
                <div className="rounded-full p-1 mr-1 bg-actionsuccess-light">
                  <ChevronRight className="w-3 h-3 text-actionsuccess" />
                </div>
                <span className="text-xs font-medium text-actionsuccess">
                  12.5% from last month
                </span>
              </div>
            </div>
            <div className="bg-light-themeprimarylight-blue p-3 rounded-lg">
              <Users className="h-6 w-6 text-light-themeprimaryblue" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-xl shadow-light-theme-shadow-medium">
          <CardContent className="flex p-6 items-start">
            <div className="flex-1">
              <p className="text-blackblack-60 text-sm font-medium mb-2">New Customers</p>
              <p className="text-blackblack-100 text-2xl font-semibold">246</p>
              <div className="flex items-center mt-2">
                <div className="rounded-full p-1 mr-1 bg-actionsuccess-light">
                  <ChevronRight className="w-3 h-3 text-actionsuccess" />
                </div>
                <span className="text-xs font-medium text-actionsuccess">
                  8.4% from last month
                </span>
              </div>
            </div>
            <div className="bg-light-themesecondarylight-purple p-3 rounded-lg">
              <UserPlus className="h-6 w-6 text-light-themesecondarypurple" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-xl shadow-light-theme-shadow-medium">
          <CardContent className="flex p-6 items-start">
            <div className="flex-1">
              <p className="text-blackblack-60 text-sm font-medium mb-2">Active Customers</p>
              <p className="text-blackblack-100 text-2xl font-semibold">578</p>
              <div className="flex items-center mt-2">
                <div className="rounded-full p-1 mr-1 bg-actionsuccess-light">
                  <ChevronRight className="w-3 h-3 text-actionsuccess" />
                </div>
                <span className="text-xs font-medium text-actionsuccess">
                  5.2% from last month
                </span>
              </div>
            </div>
            <div className="bg-actionsuccess-light p-3 rounded-lg">
              <Activity className="h-6 w-6 text-actionsuccess" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-xl shadow-light-theme-shadow-medium">
          <CardContent className="flex p-6 items-start">
            <div className="flex-1">
              <p className="text-blackblack-60 text-sm font-medium mb-2">Avg. Order Value</p>
              <p className="text-blackblack-100 text-2xl font-semibold">$245.80</p>
              <div className="flex items-center mt-2">
                <div className="rounded-full p-1 mr-1 bg-actionsuccess-light">
                  <ChevronRight className="w-3 h-3 text-actionsuccess" />
                </div>
                <span className="text-xs font-medium text-actionsuccess">
                  2.3% from last month
                </span>
              </div>
            </div>
            <div className="bg-actionalert-light p-3 rounded-lg">
              <CreditCard className="h-6 w-6 text-actionalert" />
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Customer search */}
      <Card className="rounded-xl shadow-light-theme-shadow-medium">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
              <Input
                placeholder="Search customers..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-4 w-full md:w-auto">
              <Select value={segmentFilter} onValueChange={(value) => setSegmentFilter(value as CustomerSegment)}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Filter by segment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Customers</SelectItem>
                  <SelectItem value="new">New Customers</SelectItem>
                  <SelectItem value="returning">Returning Customers</SelectItem>
                  <SelectItem value="vip">VIP Customers</SelectItem>
                  <SelectItem value="at-risk">At-Risk</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="primary" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Send Campaign
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Customer segments sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="rounded-xl shadow-light-theme-shadow-medium">
            <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
              <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100 flex justify-between items-center">
                <span>Segments</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul>
                {customerSegments.map((segment) => (
                  <li 
                    key={segment.id}
                    className={`px-6 py-3 border-b border-[#111c2d1a] last:border-b-0 cursor-pointer ${segmentFilter === segment.id ? 'bg-light-themeprimarylight-blue' : 'hover:bg-surfaceslightgray-10'}`}
                    onClick={() => setSegmentFilter(segment.id as CustomerSegment)}
                  >
                    <div className="flex justify-between items-center">
                      <span className={`${segmentFilter === segment.id ? 'text-light-themeprimaryblue font-medium' : 'text-blackblack-100'}`}>
                        {segment.name}
                      </span>
                      <span className="text-blackblack-60 text-sm">{segment.count}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="rounded-xl shadow-light-theme-shadow-medium">
            <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
              <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  { name: "Emma Johnson", action: "placed an order", time: "5 minutes ago" },
                  { name: "Michael Brown", action: "created an account", time: "38 minutes ago" },
                  { name: "Sarah Wilson", action: "left a review", time: "1 hour ago" },
                  { name: "John Smith", action: "updated profile", time: "2 hours ago" },
                  { name: "David Lee", action: "contacted support", time: "5 hours ago" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 pb-2 border-b border-[#111c2d1a] last:border-b-0 last:pb-0">
                    <div className="mt-1 w-2 h-2 rounded-full flex-shrink-0 bg-light-themeprimaryblue" />
                    <div>
                      <p className="font-medium text-blackblack-100">
                        <span className="text-light-themeprimaryblue">{activity.name}</span> {activity.action}
                      </p>
                      <p className="text-sm text-blackblack-60">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Customers table */}
        <Card className="lg:col-span-3 rounded-xl shadow-light-theme-shadow-medium">
          <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
            <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
              Customer List ({filteredCustomers.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-surfaceslightgray-10 border-b border-[#111c2d1a]">
                  <tr>
                    <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">Customer</th>
                    <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">Orders</th>
                    <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">Total Spent</th>
                    <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">Last Purchase</th>
                    <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">Segment</th>
                    <th className="py-3 px-6 text-right text-sm font-medium text-blackblack-60">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCustomers.map((customer) => (
                    <tr key={customer.id} className="border-b border-[#111c2d1a] hover:bg-surfaceslightgray-10">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-light-themeprimarylight-blue flex items-center justify-center overflow-hidden">
                            {customer.avatar ? (
                              <img src={customer.avatar} alt={customer.name} className="w-full h-full object-cover" />
                            ) : (
                              <span className="text-light-themeprimaryblue font-medium">{customer.name.charAt(0)}</span>
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-blackblack-100">{customer.name}</p>
                            <p className="text-xs text-blackblack-60">{customer.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-blackblack-80">{customer.orderCount}</td>
                      <td className="py-4 px-6 font-medium text-blackblack-100">{customer.totalSpent}</td>
                      <td className="py-4 px-6 text-blackblack-80">
                        {customer.lastPurchase ? customer.lastPurchase : "N/A"}
                      </td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSegmentBadgeClass(customer.segment)}`}>
                          {customer.segment === "vip" ? "VIP" :
                           customer.segment.charAt(0).toUpperCase() + customer.segment.slice(1).replace("-", " ")}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => viewCustomerDetails(customer)}
                          >
                            <Eye className="h-4 w-4 text-blackblack-60" />
                          </Button>
                          
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleSendEmail(customer)}
                          >
                            <Mail className="h-4 w-4 text-light-themeprimaryblue" />
                          </Button>
                          
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleStartChat(customer)}
                          >
                            <MessageSquare className="h-4 w-4 text-actionsuccess" />
                          </Button>
                          
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4 text-blackblack-60" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  
                  {filteredCustomers.length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-6 text-center text-blackblack-60">
                        No customers found matching your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Customer details dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Customer Details</DialogTitle>
            <DialogDescription>
              View and manage customer information
            </DialogDescription>
          </DialogHeader>
          
          {selectedCustomer && (
            <div className="mt-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-light-themeprimarylight-blue flex items-center justify-center overflow-hidden">
                  {selectedCustomer.avatar ? (
                    <img src={selectedCustomer.avatar} alt={selectedCustomer.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-2xl text-light-themeprimaryblue font-medium">{selectedCustomer.name.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-blackblack-100">{selectedCustomer.name}</h3>
                  <p className="text-blackblack-60">{selectedCustomer.email}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSegmentBadgeClass(selectedCustomer.segment)}`}>
                      {selectedCustomer.segment === "vip" ? "VIP" :
                       selectedCustomer.segment.charAt(0).toUpperCase() + selectedCustomer.segment.slice(1).replace("-", " ")}
                    </span>
                    <span className="text-xs text-blackblack-60">
                      Member since {selectedCustomer.dateJoined}
                    </span>
                  </div>
                </div>
                <div className="ml-auto flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={() => handleSendEmail(selectedCustomer)}
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </Button>
                  <Button 
                    variant="primary" 
                    className="flex items-center gap-2"
                    onClick={() => handleStartChat(selectedCustomer)}
                  >
                    <MessageSquare className="h-4 w-4" />
                    Message
                  </Button>
                </div>
              </div>
              
              <Tabs value={detailsTab} onValueChange={setDetailsTab}>
                <TabsList className="w-full bg-surfaceslightgray-10 p-0 h-auto rounded-t-lg rounded-b-none">
                  <TabsTrigger 
                    value="profile" 
                    className="flex-1 py-3 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none"
                  >
                    Profile
                  </TabsTrigger>
                  <TabsTrigger 
                    value="orders" 
                    className="flex-1 py-3 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none"
                  >
                    Orders
                  </TabsTrigger>
                  <TabsTrigger 
                    value="activity" 
                    className="flex-1 py-3 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none"
                  >
                    Activity
                  </TabsTrigger>
                </TabsList>
                
                <div className="border border-[#111c2d1a] rounded-b-lg bg-white">
                  <TabsContent value="profile" className="p-6 m-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-medium text-blackblack-60 mb-2">Personal Information</h4>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-blackblack-60">Full Name</p>
                            <p className="font-medium text-blackblack-100">{selectedCustomer.name}</p>
                          </div>
                          <div>
                            <p className="text-sm text-blackblack-60">Email Address</p>
                            <p className="font-medium text-blackblack-100">{selectedCustomer.email}</p>
                          </div>
                          <div>
                            <p className="text-sm text-blackblack-60">Location</p>
                            <p className="font-medium text-blackblack-100">{selectedCustomer.location}</p>
                          </div>
                          <div>
                            <p className="text-sm text-blackblack-60">Customer Since</p>
                            <p className="font-medium text-blackblack-100">{selectedCustomer.dateJoined}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-blackblack-60 mb-2">Customer Stats</h4>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-blackblack-60">Total Orders</p>
                            <p className="font-medium text-blackblack-100">{selectedCustomer.orderCount}</p>
                          </div>
                          <div>
                            <p className="text-sm text-blackblack-60">Total Spent</p>
                            <p className="font-medium text-blackblack-100">{selectedCustomer.totalSpent}</p>
                          </div>
                          <div>
                            <p className="text-sm text-blackblack-60">Average Order Value</p>
                            <p className="font-medium text-blackblack-100">
                              {selectedCustomer.orderCount > 0 
                                ? `$${(parseFloat(selectedCustomer.totalSpent.replace(/[^0-9.-]+/g, '')) / selectedCustomer.orderCount).toFixed(2)}` 
                                : '$0.00'}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-blackblack-60">Last Purchase</p>
                            <p className="font-medium text-blackblack-100">
                              {selectedCustomer.lastPurchase || 'N/A'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="orders" className="p-6 m-0">
                    {selectedCustomer.orderCount > 0 ? (
                      <table className="w-full">
                        <thead className="bg-surfaceslightgray-10 border-b border-[#111c2d1a]">
                          <tr>
                            <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Order ID</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Date</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Products</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Amount</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { id: "ORD-5289", date: "2025-03-15", products: 2, amount: "$359.99", status: "delivered" },
                            { id: "ORD-5240", date: "2025-02-28", products: 1, amount: "$128.50", status: "delivered" },
                            { id: "ORD-5198", date: "2025-02-10", products: 3, amount: "$485.75", status: "delivered" },
                            { id: "ORD-5155", date: "2025-01-22", products: 1, amount: "$249.99", status: "cancelled" },
                            { id: "ORD-5099", date: "2024-12-12", products: 2, amount: "$179.00", status: "delivered" },
                          ].slice(0, selectedCustomer.orderCount).map((order, index) => (
                            <tr key={index} className="border-b border-[#111c2d1a] last:border-b-0">
                              <td className="py-3 px-4 font-medium text-light-themeprimaryblue">{order.id}</td>
                              <td className="py-3 px-4 text-blackblack-80">{order.date}</td>
                              <td className="py-3 px-4 text-blackblack-80">{order.products}</td>
                              <td className="py-3 px-4 font-medium text-blackblack-100">{order.amount}</td>
                              <td className="py-3 px-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  order.status === "delivered" 
                                    ? "bg-actionsuccess-light text-actionsuccess" 
                                    : "bg-actionwarning-light text-actionwarning"
                                }`}>
                                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <div className="text-center py-8 text-blackblack-60">
                        <p>No orders found for this customer.</p>
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="activity" className="p-6 m-0">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium text-blackblack-60 mb-4">Recent Activity</h4>
                        <div className="relative pl-6 border-l-2 border-[#111c2d1a] space-y-6">
                          {getMockCustomerActivities(selectedCustomer.id).map((activity, index) => (
                            <div key={index} className="relative">
                              <div className="absolute -left-[13px] bg-white p-1 rounded-full border-2 border-[#111c2d1a]">
                                {getActivityIcon(activity.type)}
                              </div>
                              <div>
                                <p className="font-medium text-blackblack-100">{activity.description}</p>
                                <p className="text-sm text-blackblack-60">{activity.date}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
import React, { useState } from "react";
import { TitlebarByAnima } from "../Chip/sections/TitlebarByAnima/TitlebarByAnima";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima/TopBarByAnima";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Search, Plus, Filter, Users, Mail, Phone, Building2, Calendar, Star, MoreVertical } from "lucide-react";
import { cn } from "../../lib/utils";

interface Customer {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  status: "active" | "lead" | "inactive" | "prospect";
  value: number;
  lastContact: string;
  rating: number;
  tags: string[];
}

export const CRM = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const customers: Customer[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      company: "Home Essentials Co.",
      email: "sarah.j@homeessentials.com",
      phone: "(555) 123-4567",
      status: "active",
      value: 12500,
      lastContact: "2 days ago",
      rating: 5,
      tags: ["VIP", "Bulk Buyer"],
    },
    {
      id: "2",
      name: "Michael Chen",
      company: "Luxury Living LLC",
      email: "m.chen@luxuryliving.com",
      phone: "(555) 234-5678",
      status: "lead",
      value: 0,
      lastContact: "1 week ago",
      rating: 3,
      tags: ["New Lead", "High Potential"],
    },
    {
      id: "3",
      name: "Emma Davis",
      company: "Boutique Gifts",
      email: "emma@boutiquegifts.com",
      phone: "(555) 345-6789",
      status: "active",
      value: 8200,
      lastContact: "3 days ago",
      rating: 4,
      tags: ["Repeat Customer"],
    },
    {
      id: "4",
      name: "Robert Wilson",
      company: "The Candle Store",
      email: "r.wilson@candlestore.com",
      phone: "(555) 456-7890",
      status: "prospect",
      value: 0,
      lastContact: "2 weeks ago",
      rating: 3,
      tags: ["Cold Lead"],
    },
  ];

  const formatCurrency = (amount: number) => 
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);

  const getStatusBadgeClass = (status: Customer["status"]) => {
    switch (status) {
      case "active":
        return "bg-actionsuccess-light text-actionsuccess";
      case "lead":
        return "bg-light-themeprimarylight-blue text-light-themeprimaryblue";
      case "prospect":
        return "bg-actionalert-light text-actionalert";
      case "inactive":
        return "bg-blackblack-10 text-blackblack-60";
      default:
        return "bg-blackblack-10 text-blackblack-100";
    }
  };

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          customer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || customer.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex min-h-screen bg-surfaceslightgray-10">
      <SidebarByAnima />
      <div className="flex-1 relative">
        <TopBarByAnima />
        <TitlebarByAnima title="Customer Relationship Management" />
        
        <div className="px-6 py-6">
          <Tabs defaultValue="customers" className="space-y-6">
            <TabsList className="mb-6">
              <TabsTrigger value="customers" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Customers
              </TabsTrigger>
              <TabsTrigger value="pipeline" className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Pipeline
              </TabsTrigger>
              <TabsTrigger value="activities" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Activities
              </TabsTrigger>
            </TabsList>

            <TabsContent value="customers" className="space-y-6">
              <Card className="rounded-xl shadow-light-theme-shadow-medium">
                <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                  <div className="flex justify-between items-center">
                    <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px]">
                      Customer Database
                    </CardTitle>
                    <Button className="flex items-center gap-1">
                      <Plus className="h-4 w-4 mr-1" />
                      Add Customer
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex gap-4 mb-6">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-2.5 h-4 w-4 text-blackblack-60" />
                      <Input
                        placeholder="Search customers..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-[180px]">
                        <Filter className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="lead">Lead</SelectItem>
                        <SelectItem value="prospect">Prospect</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="overflow-x-auto rounded-lg border border-[#111c2d1a]">
                    <table className="w-full">
                      <thead className="bg-surfaceslightgray-10 border-b border-[#111c2d1a]">
                        <tr>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Customer</th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Contact</th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Status</th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Value</th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Last Contact</th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Rating</th>
                          <th className="py-3 px-4 text-right text-sm font-medium text-blackblack-60">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredCustomers.map((customer) => (
                          <tr key={customer.id} className="border-b border-[#111c2d1a] last:border-b-0 hover:bg-surfaceslightgray-10">
                            <td className="py-3 px-4">
                              <div>
                                <p className="font-medium">{customer.name}</p>
                                <p className="text-sm text-blackblack-60">{customer.company}</p>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="space-y-1">
                                <div className="flex items-center gap-2 text-sm">
                                  <Mail className="h-3 w-3 text-blackblack-60" />
                                  <span className="text-blackblack-60">{customer.email}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Phone className="h-3 w-3 text-blackblack-60" />
                                  <span className="text-blackblack-60">{customer.phone}</span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <Badge className={getStatusBadgeClass(customer.status)}>
                                {customer.status}
                              </Badge>
                            </td>
                            <td className="py-3 px-4 font-medium">
                              {formatCurrency(customer.value)}
                            </td>
                            <td className="py-3 px-4 text-blackblack-60">
                              {customer.lastContact}
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, index) => (
                                  <Star
                                    key={index}
                                    className={cn(
                                      "h-4 w-4",
                                      index < customer.rating
                                        ? "fill-actionalert text-actionalert"
                                        : "text-blackblack-20"
                                    )}
                                  />
                                ))}
                              </div>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="text-sm text-blackblack-60">
                      Showing {filteredCustomers.length} of {customers.length} customers
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pipeline" className="space-y-6">
              <Card className="rounded-xl shadow-light-theme-shadow-medium">
                <CardContent className="p-6">
                  <div className="text-center py-12">
                    <Building2 className="h-12 w-12 text-blackblack-40 mx-auto mb-4" />
                    <p className="text-blackblack-60">Sales pipeline view coming soon</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activities" className="space-y-6">
              <Card className="rounded-xl shadow-light-theme-shadow-medium">
                <CardContent className="p-6">
                  <div className="text-center py-12">
                    <Calendar className="h-12 w-12 text-blackblack-40 mx-auto mb-4" />
                    <p className="text-blackblack-60">Activity tracking coming soon</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
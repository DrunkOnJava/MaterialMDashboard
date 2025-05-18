import React, { useState } from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "../Chip/sections/TitlebarByAnima/TitlebarByAnima";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import { 
  Plus, Search, Filter, Grid, List, 
  Mail, Phone, MapPin, Star, MoreVertical 
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

export const ContactList = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const contacts = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+1 (555) 123-4567",
      location: "New York, NY",
      status: "Active",
      type: "Customer",
      lastContact: "2 days ago",
      orders: 12,
      spent: 1234.50,
      avatar: "/user-1.png",
      isFavorite: true,
      tags: ["VIP", "Repeat Customer"]
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@email.com",
      phone: "+1 (555) 987-6543",
      location: "Los Angeles, CA",
      status: "Active",
      type: "VIP Customer",
      lastContact: "1 week ago",
      orders: 28,
      spent: 3456.78,
      avatar: "/user-2.png",
      isFavorite: false,
      tags: ["High Value", "Influencer"]
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@email.com",
      phone: "+1 (555) 456-7890",
      location: "Chicago, IL",
      status: "Inactive",
      type: "Customer",
      lastContact: "1 month ago",
      orders: 5,
      spent: 567.89,
      avatar: "/user-3.png",
      isFavorite: false,
      tags: ["Inactive"]
    },
    {
      id: 4,
      name: "Alice Williams",
      email: "alice.williams@email.com",
      phone: "+1 (555) 234-5678",
      location: "Houston, TX",
      status: "Active",
      type: "Lead",
      lastContact: "Today",
      orders: 0,
      spent: 0,
      avatar: "/user-4.png",
      isFavorite: true,
      tags: ["New Lead", "Follow Up"]
    },
    {
      id: 5,
      name: "Charlie Brown",
      email: "charlie.brown@email.com",
      phone: "+1 (555) 345-6789",
      location: "Phoenix, AZ",
      status: "Active",
      type: "Customer",
      lastContact: "3 days ago",
      orders: 8,
      spent: 890.12,
      avatar: "/user-5.png",
      isFavorite: false,
      tags: ["Corporate"]
    },
    {
      id: 6,
      name: "Diana Prince",
      email: "diana.prince@email.com",
      phone: "+1 (555) 456-7890",
      location: "Seattle, WA",
      status: "Active",
      type: "VIP Customer",
      lastContact: "1 hour ago",
      orders: 45,
      spent: 5678.90,
      avatar: "/user-6.png",
      isFavorite: true,
      tags: ["Top Customer", "Wholesale"]
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-actionsuccess-light text-actionsuccess";
      case "Inactive":
        return "bg-blackblack-10 text-blackblack-60";
      default:
        return "bg-blackblack-10 text-blackblack-60";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "VIP Customer":
        return "bg-light-themeprimaryblue text-white";
      case "Customer":
        return "bg-light-themeprimarylight-blue text-light-themeprimaryblue";
      case "Lead":
        return "bg-actionalert-light text-actionalert";
      default:
        return "bg-blackblack-10 text-blackblack-60";
    }
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-full overflow-hidden bg-surfaceslightgray-10">
      <div className="flex h-screen">
        <SidebarByAnima />
        <div className="flex flex-col flex-1 overflow-hidden">
          <TopBarByAnima />
          <div className="flex flex-col flex-1 px-6 pb-3 overflow-hidden">
            <TitlebarByAnima
              title="Contact List"
              description="View and manage your contacts"
              showRightText={false}
            />
            
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-blackblack-60" />
                  <Input
                    placeholder="Search contacts..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="flex gap-2 w-full md:w-auto">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="customer">Customer</SelectItem>
                      <SelectItem value="vip-customer">VIP Customer</SelectItem>
                      <SelectItem value="lead">Lead</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <div className="flex items-center gap-1 border rounded-md">
                    <Button
                      variant={viewMode === "grid" ? "secondary" : "ghost"}
                      size="icon"
                      className="h-9 w-9"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "secondary" : "ghost"}
                      size="icon"
                      className="h-9 w-9"
                      onClick={() => setViewMode("list")}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <Button className="flex items-center gap-1">
                    <Plus className="h-4 w-4" />
                    Add Contact
                  </Button>
                </div>
              </div>
            </div>

            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto">
                {contacts
                  .filter(contact =>
                    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    contact.email.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((contact) => (
                    <Card key={contact.id} className="hover:shadow-light-theme-shadow-medium transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={contact.avatar} />
                              <AvatarFallback>
                                {contact.name.split(" ").map(n => n[0]).join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center gap-1">
                                <h3 className="font-medium">{contact.name}</h3>
                                {contact.isFavorite && (
                                  <Star className="h-4 w-4 text-actionalert fill-actionalert" />
                                )}
                              </div>
                              <p className="text-sm text-blackblack-60">{contact.type}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="h-4 w-4 text-blackblack-60" />
                            <span className="text-blackblack-60 truncate">{contact.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="h-4 w-4 text-blackblack-60" />
                            <span className="text-blackblack-60">{contact.phone}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-blackblack-60" />
                            <span className="text-blackblack-60">{contact.location}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <Badge className={getStatusColor(contact.status)}>
                            {contact.status}
                          </Badge>
                          <span className="text-xs text-blackblack-60">
                            Last contact: {contact.lastContact}
                          </span>
                        </div>

                        <div className="flex gap-1 flex-wrap mb-4">
                          {contact.tags.map((tag, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-blackblack-60">Orders</p>
                            <p className="font-medium">{contact.orders}</p>
                          </div>
                          <div>
                            <p className="text-blackblack-60">Total Spent</p>
                            <p className="font-medium">{formatCurrency(contact.spent)}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto">
                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      {contacts
                        .filter(contact =>
                          contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          contact.email.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((contact) => (
                          <div key={contact.id} className="flex items-center justify-between p-4 hover:bg-surfaceslightgray-10">
                            <div className="flex items-center gap-4">
                              <Avatar>
                                <AvatarImage src={contact.avatar} />
                                <AvatarFallback>
                                  {contact.name.split(" ").map(n => n[0]).join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="font-medium">{contact.name}</h3>
                                  {contact.isFavorite && (
                                    <Star className="h-4 w-4 text-actionalert fill-actionalert" />
                                  )}
                                  <Badge className={getTypeColor(contact.type)}>
                                    {contact.type}
                                  </Badge>
                                  <Badge className={getStatusColor(contact.status)}>
                                    {contact.status}
                                  </Badge>
                                </div>
                                <div className="flex items-center gap-4 mt-1">
                                  <span className="text-sm text-blackblack-60">{contact.email}</span>
                                  <span className="text-sm text-blackblack-60">{contact.phone}</span>
                                  <span className="text-sm text-blackblack-60">{contact.location}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-6">
                              <div className="text-right">
                                <p className="text-sm font-medium">{formatCurrency(contact.spent)}</p>
                                <p className="text-xs text-blackblack-60">{contact.orders} orders</p>
                              </div>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
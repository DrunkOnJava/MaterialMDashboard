import React, { useState } from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "../Chip/sections/TitlebarByAnima/TitlebarByAnima";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import { Checkbox } from "../../components/ui/checkbox";
import { 
  Plus, Search, Download, Upload, Filter, MoreVertical, 
  Mail, Phone, MapPin, Calendar, Star
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

export const ContactTable = (): JSX.Element => {
  const [selectedContacts, setSelectedContacts] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

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
      isFavorite: true
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
      isFavorite: false
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
      isFavorite: false
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
      isFavorite: true
    }
  ];

  const handleSelectAll = () => {
    if (selectedContacts.length === contacts.length) {
      setSelectedContacts([]);
    } else {
      setSelectedContacts(contacts.map(c => c.id));
    }
  };

  const handleSelectContact = (id: number) => {
    if (selectedContacts.includes(id)) {
      setSelectedContacts(selectedContacts.filter(cId => cId !== id));
    } else {
      setSelectedContacts([...selectedContacts, id]);
    }
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

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-full overflow-hidden bg-surfaceslightgray-10">
      <div className="flex h-screen">
        <SidebarByAnima />
        <div className="flex flex-col flex-1 overflow-hidden">
          <TopBarByAnima />
          <div className="flex flex-col flex-1 px-6 pb-3 overflow-hidden">
            <TitlebarByAnima
              title="Contact Table"
              description="Manage customer and contact information"
              showRightText={false}
            />
            
            <Card className="flex-1 flex flex-col">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                    All Contacts
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" className="flex items-center gap-1">
                      <Upload className="h-4 w-4" />
                      Import
                    </Button>
                    <Button variant="outline" className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      Export
                    </Button>
                    <Button className="flex items-center gap-1">
                      <Plus className="h-4 w-4" />
                      Add Contact
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 flex-1 overflow-auto">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
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
                    
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-lg border border-[#111c2d1a]">
                  <table className="w-full">
                    <thead className="bg-surfaceslightgray-10 border-b border-[#111c2d1a]">
                      <tr>
                        <th className="py-3 px-4">
                          <Checkbox
                            checked={selectedContacts.length === contacts.length}
                            onCheckedChange={handleSelectAll}
                          />
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                          Contact
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                          Email
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                          Phone
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                          Location
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                          Type
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                          Status
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                          Orders
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                          Total Spent
                        </th>
                        <th className="py-3 px-4 text-right text-sm font-medium text-blackblack-60">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {contacts
                        .filter(contact =>
                          contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          contact.email.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((contact) => (
                          <tr
                            key={contact.id}
                            className="border-b border-[#111c2d1a] last:border-b-0 hover:bg-surfaceslightgray-10"
                          >
                            <td className="py-3 px-4">
                              <Checkbox
                                checked={selectedContacts.includes(contact.id)}
                                onCheckedChange={() => handleSelectContact(contact.id)}
                              />
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-3">
                                <Avatar>
                                  <AvatarImage src={contact.avatar} />
                                  <AvatarFallback>
                                    {contact.name.split(" ").map(n => n[0]).join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="flex items-center gap-1">
                                    <p className="font-medium">{contact.name}</p>
                                    {contact.isFavorite && (
                                      <Star className="h-3 w-3 text-actionalert fill-actionalert" />
                                    )}
                                  </div>
                                  <p className="text-xs text-blackblack-60">{contact.lastContact}</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-blackblack-60">{contact.email}</td>
                            <td className="py-3 px-4 text-blackblack-60">{contact.phone}</td>
                            <td className="py-3 px-4 text-blackblack-60">{contact.location}</td>
                            <td className="py-3 px-4">
                              <Badge className={getTypeColor(contact.type)}>
                                {contact.type}
                              </Badge>
                            </td>
                            <td className="py-3 px-4">
                              <Badge className={getStatusColor(contact.status)}>
                                {contact.status}
                              </Badge>
                            </td>
                            <td className="py-3 px-4 text-center">{contact.orders}</td>
                            <td className="py-3 px-4 font-medium">
                              {formatCurrency(contact.spent)}
                            </td>
                            <td className="py-3 px-4 text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Mail className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Phone className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm text-blackblack-60">
                    Showing 1-{Math.min(10, contacts.length)} of {contacts.length} contacts
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8" disabled>
                      Previous
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
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
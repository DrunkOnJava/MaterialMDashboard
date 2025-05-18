import React, { useState } from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "../Chip/sections/TitlebarByAnima/TitlebarByAnima";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { 
  Plus, Search, Filter, Download, 
  Printer, Mail, Eye, FileText,
  ChevronRight, Clock, CheckCircle, AlertCircle, XCircle
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

export const Invoice = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const invoices = [
    {
      id: 1,
      invoiceNumber: "INV-001",
      customer: "John Doe",
      email: "john.doe@email.com",
      date: "2025-01-15",
      dueDate: "2025-01-30",
      amount: 1234.50,
      status: "paid",
      items: 3
    },
    {
      id: 2,
      invoiceNumber: "INV-002",
      customer: "Jane Smith",
      email: "jane.smith@email.com",
      date: "2025-01-14",
      dueDate: "2025-01-29",
      amount: 2345.67,
      status: "pending",
      items: 5
    },
    {
      id: 3,
      invoiceNumber: "INV-003",
      customer: "Bob Johnson",
      email: "bob.johnson@email.com",
      date: "2025-01-10",
      dueDate: "2025-01-25",
      amount: 567.89,
      status: "overdue",
      items: 2
    },
    {
      id: 4,
      invoiceNumber: "INV-004",
      customer: "Alice Williams",
      email: "alice.williams@email.com",
      date: "2025-01-05",
      dueDate: "2025-01-20",
      amount: 3456.78,
      status: "draft",
      items: 7
    },
    {
      id: 5,
      invoiceNumber: "INV-005",
      customer: "Charlie Brown",
      email: "charlie.brown@email.com",
      date: "2025-01-12",
      dueDate: "2025-01-27",
      amount: 890.12,
      status: "paid",
      items: 4
    },
    {
      id: 6,
      invoiceNumber: "INV-006",
      customer: "Diana Prince",
      email: "diana.prince@email.com",
      date: "2025-01-08",
      dueDate: "2025-01-23",
      amount: 4567.89,
      status: "pending",
      items: 8
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-actionsuccess-light text-actionsuccess";
      case "pending":
        return "bg-actionalert-light text-actionalert";
      case "overdue":
        return "bg-actionwarning-light text-actionwarning";
      case "draft":
        return "bg-blackblack-10 text-blackblack-60";
      default:
        return "bg-blackblack-10 text-blackblack-60";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid":
        return <CheckCircle className="h-4 w-4" />;
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "overdue":
        return <AlertCircle className="h-4 w-4" />;
      case "draft":
        return <FileText className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         invoice.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         invoice.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || invoice.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="fixed top-0 left-0 h-screen w-full overflow-hidden bg-surfaceslightgray-10">
      <div className="flex h-screen">
        <SidebarByAnima />
        <div className="flex flex-col flex-1 overflow-hidden">
          <TopBarByAnima />
          <div className="flex flex-col flex-1 px-6 pb-3 overflow-hidden">
            <TitlebarByAnima
              title="Invoices"
              description="Manage billing and invoices"
              showRightText={false}
            />
            
            <Card className="flex-1 flex flex-col">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                    All Invoices
                  </CardTitle>
                  <Button className="flex items-center gap-1">
                    <Plus className="h-4 w-4" />
                    Create Invoice
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="p-6 flex-1 overflow-auto">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
                  <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-blackblack-60" />
                    <Input
                      placeholder="Search invoices..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  <div className="flex gap-2 w-full md:w-auto">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="paid">Paid</SelectItem>
                        <SelectItem value="overdue">Overdue</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button variant="outline" className="flex items-center gap-1">
                      <Filter className="h-4 w-4" />
                      More Filters
                    </Button>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-lg border border-[#111c2d1a]">
                  <table className="w-full">
                    <thead className="bg-surfaceslightgray-10 border-b border-[#111c2d1a]">
                      <tr>
                        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                          Invoice #
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                          Customer
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                          Date
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                          Due Date
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                          Amount
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
                      {filteredInvoices.map((invoice) => (
                        <tr
                          key={invoice.id}
                          className="border-b border-[#111c2d1a] last:border-b-0 hover:bg-surfaceslightgray-10"
                        >
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-blackblack-60" />
                              <span className="font-medium text-light-themeprimaryblue">
                                {invoice.invoiceNumber}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div>
                              <p className="font-medium">{invoice.customer}</p>
                              <p className="text-xs text-blackblack-60">{invoice.email}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-blackblack-60">
                            {formatDate(invoice.date)}
                          </td>
                          <td className="py-3 px-4 text-blackblack-60">
                            {formatDate(invoice.dueDate)}
                          </td>
                          <td className="py-3 px-4 font-medium">
                            {formatCurrency(invoice.amount)}
                          </td>
                          <td className="py-3 px-4">
                            <Badge className={`flex items-center gap-1 w-fit ${getStatusColor(invoice.status)}`}>
                              {getStatusIcon(invoice.status)}
                              {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Printer className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Mail className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Download className="h-4 w-4" />
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
                    Showing 1-{Math.min(10, filteredInvoices.length)} of {filteredInvoices.length} invoices
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
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { 
  Tabs, TabsContent, TabsList, TabsTrigger 
} from "../../../../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { Switch } from "../../../../components/ui/switch";
import { useToast } from "../../../../hooks/use-toast";
import { 
  UserCircle, Store, Bell, Shield, Download, Upload, Users, Key, 
  RefreshCw, Trash2, Save
} from "lucide-react";

// Mock user roles
interface UserRole {
  id: string;
  name: string;
  description: string;
  permissions: string[];
}

const mockUserRoles: UserRole[] = [
  {
    id: "admin",
    name: "Administrator",
    description: "Full access to all settings and features",
    permissions: ["view", "create", "edit", "delete", "manage_users", "manage_settings", "manage_billing"]
  },
  {
    id: "manager",
    name: "Store Manager",
    description: "Manage products, orders, and customers",
    permissions: ["view", "create", "edit", "delete", "manage_orders"]
  },
  {
    id: "support",
    name: "Customer Support",
    description: "View and manage customers and orders",
    permissions: ["view", "edit", "manage_orders"]
  },
  {
    id: "viewer",
    name: "Viewer",
    description: "View-only access to dashboard",
    permissions: ["view"]
  }
];

export const SettingsConfig = (): JSX.Element => {
  // State for store settings
  const [storeName, setStoreName] = useState("My eCommerce Store");
  const [storeEmail, setStoreEmail] = useState("store@example.com");
  const [storePhone, setStorePhone] = useState("+1 (555) 123-4567");
  const [storeAddress, setStoreAddress] = useState("123 Main St, New York, NY 10001");
  const [storeCurrency, setStoreCurrency] = useState("usd");
  const [storeTimezone, setStoreTimezone] = useState("America/New_York");
  
  // State for notification settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [orderNotifications, setOrderNotifications] = useState(true);
  const [lowStockNotifications, setLowStockNotifications] = useState(true);
  const [customerNotifications, setCustomerNotifications] = useState(false);
  const [marketingNotifications, setMarketingNotifications] = useState(false);
  
  // State for backup settings
  const [autoBackup, setAutoBackup] = useState(true);
  const [backupFrequency, setBackupFrequency] = useState("daily");
  const [backupRetention, setBackupRetention] = useState("30days");

  // State for active settings tab
  const [activeTab, setActiveTab] = useState("store");
  
  const { toast } = useToast();

  // Handle save settings
  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your changes have been successfully saved.",
      variant: "default",
    });
  };

  // Handle backup now
  const handleBackupNow = () => {
    toast({
      title: "Backup initiated",
      description: "A manual backup has been started. This may take a few minutes.",
      variant: "default",
    });
  };

  // Handle restore backup
  const handleRestoreBackup = () => {
    toast({
      title: "Restore initiated",
      description: "System will be restored from the selected backup.",
      variant: "default",
    });
  };

  return (
    <div className="space-y-6">
      <Card className="rounded-xl shadow-light-theme-shadow-medium">
        <CardContent className="p-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full bg-surfaceslightgray-10 p-0 h-auto rounded-t-lg rounded-b-none border-b border-[#111c2d1a]">
              <TabsTrigger 
                value="store" 
                className="flex items-center gap-2 py-4 px-6 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none"
              >
                <Store className="h-4 w-4" />
                Store Settings
              </TabsTrigger>
              <TabsTrigger 
                value="notifications" 
                className="flex items-center gap-2 py-4 px-6 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none"
              >
                <Bell className="h-4 w-4" />
                Notifications
              </TabsTrigger>
              <TabsTrigger 
                value="users" 
                className="flex items-center gap-2 py-4 px-6 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none"
              >
                <Users className="h-4 w-4" />
                User Management
              </TabsTrigger>
              <TabsTrigger 
                value="backup" 
                className="flex items-center gap-2 py-4 px-6 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none"
              >
                <Download className="h-4 w-4" />
                Backup & Restore
              </TabsTrigger>
            </TabsList>
            
            {/* Store Settings Tab */}
            <TabsContent value="store" className="p-6 m-0">
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-blackblack-100">Store Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blackblack-100">Store Name</label>
                    <Input
                      value={storeName}
                      onChange={(e) => setStoreName(e.target.value)}
                      placeholder="Enter store name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blackblack-100">Email Address</label>
                    <Input
                      type="email"
                      value={storeEmail}
                      onChange={(e) => setStoreEmail(e.target.value)}
                      placeholder="Enter email address"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blackblack-100">Phone Number</label>
                    <Input
                      value={storePhone}
                      onChange={(e) => setStorePhone(e.target.value)}
                      placeholder="Enter phone number"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blackblack-100">Address</label>
                    <Input
                      value={storeAddress}
                      onChange={(e) => setStoreAddress(e.target.value)}
                      placeholder="Enter store address"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-blackblack-100 mt-8">Regional Settings</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blackblack-100">Currency</label>
                    <Select value={storeCurrency} onValueChange={setStoreCurrency}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD - United States Dollar</SelectItem>
                        <SelectItem value="eur">EUR - Euro</SelectItem>
                        <SelectItem value="gbp">GBP - British Pound</SelectItem>
                        <SelectItem value="cad">CAD - Canadian Dollar</SelectItem>
                        <SelectItem value="aud">AUD - Australian Dollar</SelectItem>
                        <SelectItem value="jpy">JPY - Japanese Yen</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blackblack-100">Timezone</label>
                    <Select value={storeTimezone} onValueChange={setStoreTimezone}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="America/New_York">Eastern Time (US & Canada)</SelectItem>
                        <SelectItem value="America/Chicago">Central Time (US & Canada)</SelectItem>
                        <SelectItem value="America/Denver">Mountain Time (US & Canada)</SelectItem>
                        <SelectItem value="America/Los_Angeles">Pacific Time (US & Canada)</SelectItem>
                        <SelectItem value="Europe/London">London</SelectItem>
                        <SelectItem value="Europe/Paris">Paris</SelectItem>
                        <SelectItem value="Asia/Tokyo">Tokyo</SelectItem>
                        <SelectItem value="Australia/Sydney">Sydney</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  <Button variant="primary" onClick={handleSaveSettings}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            {/* Notifications Tab */}
            <TabsContent value="notifications" className="p-6 m-0">
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-blackblack-100">Notification Preferences</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-blackblack-100">Email Notifications</p>
                      <p className="text-sm text-blackblack-60">Receive notifications via email</p>
                    </div>
                    <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                  </div>
                  
                  {emailNotifications && (
                    <div className="space-y-4 pl-6 border-l-2 border-[#111c2d1a]">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-blackblack-100">Order Updates</p>
                          <p className="text-sm text-blackblack-60">New orders, status changes, etc.</p>
                        </div>
                        <Switch checked={orderNotifications} onCheckedChange={setOrderNotifications} />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-blackblack-100">Low Stock Alerts</p>
                          <p className="text-sm text-blackblack-60">When inventory falls below threshold</p>
                        </div>
                        <Switch checked={lowStockNotifications} onCheckedChange={setLowStockNotifications} />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-blackblack-100">Customer Activity</p>
                          <p className="text-sm text-blackblack-60">New accounts, reviews, etc.</p>
                        </div>
                        <Switch checked={customerNotifications} onCheckedChange={setCustomerNotifications} />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-blackblack-100">Marketing Updates</p>
                          <p className="text-sm text-blackblack-60">Campaign performance, analytics, etc.</p>
                        </div>
                        <Switch checked={marketingNotifications} onCheckedChange={setMarketingNotifications} />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-end mt-6">
                  <Button variant="primary" onClick={handleSaveSettings}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            {/* User Management Tab */}
            <TabsContent value="users" className="p-6 m-0">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium text-blackblack-100">User Roles & Permissions</h3>
                  <Button variant="outline">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add New User
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {mockUserRoles.map((role) => (
                    <Card key={role.id} className="border border-[#111c2d1a] rounded-lg overflow-hidden">
                      <CardHeader className="bg-surfaceslightgray-10 py-4 px-6">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-medium flex items-center gap-2">
                            <Shield className="h-5 w-5 text-light-themeprimaryblue" />
                            {role.name}
                          </CardTitle>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            {role.id !== "admin" && (
                              <Button variant="outline" size="sm" className="text-actionwarning">Delete</Button>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-blackblack-60 mb-4">{role.description}</p>
                        <h4 className="font-medium text-blackblack-100 mb-2">Permissions:</h4>
                        <div className="flex flex-wrap gap-2">
                          {role.permissions.map((permission, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-light-themeprimarylight-blue text-light-themeprimaryblue rounded text-xs font-medium"
                            >
                              {permission.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-medium text-blackblack-100 mb-4">Active Users</h3>
                  <table className="w-full">
                    <thead className="bg-surfaceslightgray-10 border-b border-[#111c2d1a]">
                      <tr>
                        <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">User</th>
                        <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">Email</th>
                        <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">Role</th>
                        <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">Last Active</th>
                        <th className="py-3 px-6 text-right text-sm font-medium text-blackblack-60">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "John Doe", email: "john.doe@example.com", role: "Administrator", lastActive: "Just now" },
                        { name: "Jane Smith", email: "jane.smith@example.com", role: "Store Manager", lastActive: "5 hours ago" },
                        { name: "Mike Johnson", email: "mike.johnson@example.com", role: "Customer Support", lastActive: "Yesterday" },
                        { name: "Sarah Williams", email: "sarah.williams@example.com", role: "Viewer", lastActive: "3 days ago" },
                      ].map((user, index) => (
                        <tr key={index} className="border-b border-[#111c2d1a] hover:bg-surfaceslightgray-10">
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-light-themeprimarylight-blue flex items-center justify-center overflow-hidden">
                                <UserCircle className="h-5 w-5 text-light-themeprimaryblue" />
                              </div>
                              <span className="font-medium text-blackblack-100">{user.name}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-blackblack-80">{user.email}</td>
                          <td className="py-4 px-6">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              user.role === "Administrator" 
                                ? "bg-light-themesecondarypurple text-white" 
                                : user.role === "Store Manager"
                                  ? "bg-light-themeprimarylight-blue text-light-themeprimaryblue"
                                  : user.role === "Customer Support"
                                    ? "bg-actionsuccess-light text-actionsuccess"
                                    : "bg-blackblack-10 text-blackblack-100"
                            }`}>
                              {user.role}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-blackblack-60">{user.lastActive}</td>
                          <td className="py-4 px-6 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button variant="ghost" size="sm">
                                <Key className="h-4 w-4 text-blackblack-60 mr-1" />
                                Reset Password
                              </Button>
                              
                              <Button variant="ghost" size="sm" className="text-actionwarning">
                                <Trash2 className="h-4 w-4 mr-1" />
                                Remove
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            
            {/* Backup & Restore Tab */}
            <TabsContent value="backup" className="p-6 m-0">
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-blackblack-100">Backup Configuration</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-blackblack-100">Automatic Backups</p>
                      <p className="text-sm text-blackblack-60">Schedule regular database backups</p>
                    </div>
                    <Switch checked={autoBackup} onCheckedChange={setAutoBackup} />
                  </div>
                  
                  {autoBackup && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-blackblack-100">Backup Frequency</label>
                        <Select value={backupFrequency} onValueChange={setBackupFrequency}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="biweekly">Bi-weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-blackblack-100">Retention Period</label>
                        <Select value={backupRetention} onValueChange={setBackupRetention}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select retention period" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="7days">7 days</SelectItem>
                            <SelectItem value="30days">30 days</SelectItem>
                            <SelectItem value="90days">90 days</SelectItem>
                            <SelectItem value="1year">1 year</SelectItem>
                            <SelectItem value="forever">Forever</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex gap-4 mt-6">
                  <Button variant="primary" onClick={handleBackupNow}>
                    <Download className="mr-2 h-4 w-4" />
                    Backup Now
                  </Button>
                  
                  <Button variant="outline" onClick={handleSaveSettings}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Settings
                  </Button>
                </div>
                
                <h3 className="text-xl font-medium text-blackblack-100 mt-8">Recent Backups</h3>
                
                <table className="w-full">
                  <thead className="bg-surfaceslightgray-10 border-b border-[#111c2d1a]">
                    <tr>
                      <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">Backup Date</th>
                      <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">Size</th>
                      <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">Created By</th>
                      <th className="py-3 px-6 text-right text-sm font-medium text-blackblack-60">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { date: "2025-03-16 03:00:00", size: "42.8 MB", createdBy: "System (Automated)" },
                      { date: "2025-03-15 03:00:00", size: "41.5 MB", createdBy: "System (Automated)" },
                      { date: "2025-03-14 03:00:00", size: "40.9 MB", createdBy: "System (Automated)" },
                      { date: "2025-03-13 14:32:15", size: "40.1 MB", createdBy: "John Doe (Manual)" },
                      { date: "2025-03-13 03:00:00", size: "40.0 MB", createdBy: "System (Automated)" },
                    ].map((backup, index) => (
                      <tr key={index} className="border-b border-[#111c2d1a] hover:bg-surfaceslightgray-10">
                        <td className="py-4 px-6 font-medium text-blackblack-100">{backup.date}</td>
                        <td className="py-4 px-6 text-blackblack-80">{backup.size}</td>
                        <td className="py-4 px-6 text-blackblack-80">{backup.createdBy}</td>
                        <td className="py-4 px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="outline" size="sm" onClick={handleRestoreBackup}>
                              <RefreshCw className="mr-2 h-4 w-4" />
                              Restore
                            </Button>
                            
                            <Button variant="outline" size="sm">
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <div className="mt-4 text-center">
                  <Button variant="ghost">Load More Backups</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
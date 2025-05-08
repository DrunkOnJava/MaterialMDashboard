import React, { useState } from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "../Buttons/components/Titlebar";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Switch } from "../../components/ui/switch";
import { Label } from "../../components/ui/label";
import { useToast } from "../../hooks/use-toast";
import { 
  Bell, Mail, MessageSquare, CheckCircle2, AlertCircle, User, Users,
  Settings, FileText, Calendar, Clock, MoreHorizontal, Check, X, 
  ChevronRight, Briefcase, Shield, ShoppingCart, CreditCard, Inbox
} from "lucide-react";

// Define notification type
type NotificationType = 'message' | 'alert' | 'task' | 'meeting' | 'system' | 'security' | 'payment';

// Define notification interface
interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  content?: string;
  date: Date;
  read: boolean;
  sender?: {
    name: string;
    avatar?: string;
  };
  action?: {
    label: string;
    link: string;
  };
  category?: string;
}

// Mock notification data
const mockNotifications: Notification[] = [
  {
    id: "n001",
    type: "message",
    title: "New message from Jane Smith",
    content: "Hi there! Just wanted to check in about the project timeline. Do you have a moment to chat?",
    date: new Date(new Date().getTime() - 25 * 60 * 1000), // 25 minutes ago
    read: false,
    sender: {
      name: "Jane Smith",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    category: "direct"
  },
  {
    id: "n002",
    type: "task",
    title: "Task assigned: Design Review",
    content: "You've been assigned to review the new dashboard wireframes by Friday.",
    date: new Date(new Date().getTime() - 2 * 60 * 60 * 1000), // 2 hours ago
    read: false,
    sender: {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    action: {
      label: "View Task",
      link: "/tasks/123"
    },
    category: "task"
  },
  {
    id: "n003",
    type: "meeting",
    title: "Meeting Reminder: Sprint Planning",
    content: "Your sprint planning meeting starts in 30 minutes.",
    date: new Date(new Date().getTime() - 4 * 60 * 60 * 1000), // 4 hours ago
    read: true,
    action: {
      label: "Join Meeting",
      link: "/meetings/456"
    },
    category: "calendar"
  },
  {
    id: "n004",
    type: "alert",
    title: "Storage limit reached",
    content: "You've reached 90% of your storage quota. Consider upgrading your plan.",
    date: new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    read: true,
    category: "system"
  },
  {
    id: "n005",
    type: "system",
    title: "System Maintenance Scheduled",
    content: "The system will be down for maintenance on Saturday from 2AM to 4AM EST.",
    date: new Date(new Date().getTime() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    read: true,
    category: "system"
  },
  {
    id: "n006",
    type: "message",
    title: "David Lee commented on your post",
    content: "Great insight! I completely agree with your assessment of the market trends.",
    date: new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    read: true,
    sender: {
      name: "David Lee",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    category: "social"
  },
  {
    id: "n007",
    type: "task",
    title: "Task completed: API Integration",
    content: "Michael Brown has completed the API integration task.",
    date: new Date(new Date().getTime() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
    read: true,
    sender: {
      name: "Michael Brown",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    category: "task"
  },
  {
    id: "n008",
    type: "security",
    title: "Security Alert: New Login",
    content: "A new login to your account was detected from San Francisco, CA.",
    date: new Date(new Date().getTime() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    read: true,
    action: {
      label: "Review Activity",
      link: "/security"
    },
    category: "security"
  },
  {
    id: "n009",
    type: "payment",
    title: "Payment Successful",
    content: "Your payment of $49.99 for Premium Plan has been processed successfully.",
    date: new Date(new Date().getTime() - 6 * 24 * 60 * 60 * 1000), // 6 days ago
    read: true,
    category: "billing"
  },
  {
    id: "n010",
    type: "system",
    title: "New Feature Released",
    content: "Check out our new analytics dashboard with improved visualizations.",
    date: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    read: true,
    action: {
      label: "Try It Now",
      link: "/analytics"
    },
    category: "system"
  },
];

// Define notification settings interface
interface NotificationSetting {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
  categories: {
    email: boolean;
    push: boolean;
    inApp: boolean;
  };
}

// Mock notification settings
const mockNotificationSettings: NotificationSetting[] = [
  {
    id: "setting-1",
    label: "Direct messages",
    description: "Notifications for private messages sent directly to you",
    enabled: true,
    categories: {
      email: true,
      push: true,
      inApp: true
    }
  },
  {
    id: "setting-2",
    label: "Task assignments & updates",
    description: "When you're assigned a task or there's an update to your task",
    enabled: true,
    categories: {
      email: true,
      push: true,
      inApp: true
    }
  },
  {
    id: "setting-3",
    label: "Meeting reminders",
    description: "Reminders for upcoming meetings and calendar events",
    enabled: true,
    categories: {
      email: true,
      push: true,
      inApp: true
    }
  },
  {
    id: "setting-4",
    label: "Comments & mentions",
    description: "When someone comments on your post or mentions you",
    enabled: true,
    categories: {
      email: false,
      push: true,
      inApp: true
    }
  },
  {
    id: "setting-5",
    label: "System announcements",
    description: "Important system updates, maintenance notices, and new features",
    enabled: true,
    categories: {
      email: true,
      push: false,
      inApp: true
    }
  },
  {
    id: "setting-6",
    label: "Security alerts",
    description: "Alerts about security-related events like new logins",
    enabled: true,
    categories: {
      email: true,
      push: true,
      inApp: true
    }
  },
  {
    id: "setting-7",
    label: "Billing & payment",
    description: "Notifications about invoices, payments, and subscription",
    enabled: true,
    categories: {
      email: true,
      push: false,
      inApp: true
    }
  },
  {
    id: "setting-8",
    label: "Marketing updates",
    description: "Newsletters, product updates, and promotional offers",
    enabled: false,
    categories: {
      email: false,
      push: false,
      inApp: false
    }
  }
];

export const NotificationsCenter = (): JSX.Element => {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [settings, setSettings] = useState<NotificationSetting[]>(mockNotificationSettings);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [settingsTab, setSettingsTab] = useState<string>("all");
  
  const { toast } = useToast();
  
  // Get filtered notifications based on active tab
  const getFilteredNotifications = () => {
    if (activeTab === "all") return notifications;
    if (activeTab === "unread") return notifications.filter(n => !n.read);
    return notifications.filter(n => n.category === activeTab);
  };
  
  // Mark notification as read
  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true } 
          : notification
      )
    );
  };
  
  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
    
    toast({
      title: "All notifications marked as read",
      description: "You've marked all notifications as read.",
    });
  };
  
  // Delete notification
  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
    
    toast({
      title: "Notification deleted",
      description: "The notification has been removed.",
    });
  };
  
  // Clear all notifications
  const clearAllNotifications = () => {
    setNotifications([]);
    
    toast({
      title: "All notifications cleared",
      description: "All your notifications have been cleared.",
    });
  };
  
  // Toggle notification setting
  const toggleNotificationSetting = (settingId: string, field: "enabled" | "email" | "push" | "inApp") => {
    setSettings(prev => 
      prev.map(setting => {
        if (setting.id === settingId) {
          if (field === "enabled") {
            return { ...setting, enabled: !setting.enabled };
          } else {
            return {
              ...setting,
              categories: {
                ...setting.categories,
                [field]: !setting.categories[field as keyof typeof setting.categories]
              }
            };
          }
        }
        return setting;
      })
    );
  };
  
  // Save notification settings
  const saveNotificationSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your notification preferences have been updated.",
    });
  };
  
  // Get notification icon based on type
  const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case "message":
        return <MessageSquare className="h-5 w-5 text-light-themeprimaryblue" />;
      case "alert":
        return <AlertCircle className="h-5 w-5 text-actionalert" />;
      case "task":
        return <FileText className="h-5 w-5 text-actionsuccess" />;
      case "meeting":
        return <Calendar className="h-5 w-5 text-light-themesecondarypurple" />;
      case "system":
        return <Settings className="h-5 w-5 text-blackblack-60" />;
      case "security":
        return <Shield className="h-5 w-5 text-actionwarning" />;
      case "payment":
        return <CreditCard className="h-5 w-5 text-actionsuccess" />;
      default:
        return <Bell className="h-5 w-5 text-blackblack-60" />;
    }
  };
  
  // Format notification time
  const formatNotificationTime = (date: Date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) {
      return 'Just now';
    }
    
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} ${diffInMinutes === 1 ? 'minute' : 'minutes'} ago`;
    }
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'} ago`;
    }
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
      return `${diffInDays} ${diffInDays === 1 ? 'day' : 'days'} ago`;
    }
    
    // For older notifications, return the date
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };
  
  // Get unread count
  const getUnreadCount = () => {
    return notifications.filter(n => !n.read).length;
  };
  
  // Get category count
  const getCategoryCount = (category: string) => {
    return notifications.filter(n => n.category === category).length;
  };

  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Notifications" />
        <main className="flex-1 overflow-auto p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <div className="bg-white rounded-lg shadow-light-theme-shadow-medium p-1 flex overflow-x-auto">
              <TabsList className="bg-transparent p-0 h-auto w-full flex">
                <TabsTrigger 
                  value="all" 
                  className="flex-1 data-[state=active]:bg-surfaceslightgray-10 data-[state=active]:shadow-none rounded-md py-2"
                >
                  All
                  {notifications.length > 0 && (
                    <Badge className="ml-2 bg-light-themeprimaryblue text-white py-0 px-1.5 h-5 min-w-5">{notifications.length}</Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger 
                  value="unread" 
                  className="flex-1 data-[state=active]:bg-surfaceslightgray-10 data-[state=active]:shadow-none rounded-md py-2"
                >
                  Unread
                  {getUnreadCount() > 0 && (
                    <Badge className="ml-2 bg-light-themeprimaryblue text-white py-0 px-1.5 h-5 min-w-5">{getUnreadCount()}</Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger 
                  value="direct" 
                  className="flex-1 data-[state=active]:bg-surfaceslightgray-10 data-[state=active]:shadow-none rounded-md py-2"
                >
                  Messages
                  {getCategoryCount("direct") > 0 && (
                    <Badge className="ml-2 bg-light-themeprimaryblue text-white py-0 px-1.5 h-5 min-w-5">{getCategoryCount("direct")}</Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger 
                  value="task" 
                  className="flex-1 data-[state=active]:bg-surfaceslightgray-10 data-[state=active]:shadow-none rounded-md py-2"
                >
                  Tasks
                  {getCategoryCount("task") > 0 && (
                    <Badge className="ml-2 bg-light-themeprimaryblue text-white py-0 px-1.5 h-5 min-w-5">{getCategoryCount("task")}</Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger 
                  value="system" 
                  className="flex-1 data-[state=active]:bg-surfaceslightgray-10 data-[state=active]:shadow-none rounded-md py-2"
                >
                  System
                  {getCategoryCount("system") > 0 && (
                    <Badge className="ml-2 bg-light-themeprimaryblue text-white py-0 px-1.5 h-5 min-w-5">{getCategoryCount("system")}</Badge>
                  )}
                </TabsTrigger>
              </TabsList>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Notifications Content */}
              <div className="lg:col-span-3">
                <Card className="rounded-xl shadow-light-theme-shadow-medium">
                  <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                    <div className="flex justify-between items-center">
                      <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                        {activeTab === "all" ? "All Notifications" : 
                         activeTab === "unread" ? "Unread Notifications" : 
                         `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Notifications`}
                        {getFilteredNotifications().length > 0 && (
                          <span className="text-sm text-blackblack-60 ml-2">({getFilteredNotifications().length})</span>
                        )}
                      </CardTitle>
                      
                      {getFilteredNotifications().length > 0 && (
                        <div className="flex gap-2">
                          {getUnreadCount() > 0 && (
                            <Button variant="outline" size="sm" onClick={markAllAsRead}>
                              <Check className="mr-2 h-4 w-4" />
                              Mark all as read
                            </Button>
                          )}
                          <Button variant="outline" size="sm" onClick={clearAllNotifications} className="text-actionwarning">
                            <X className="mr-2 h-4 w-4" />
                            Clear all
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <TabsContent value="all" className="m-0">
                      {renderNotificationsList(getFilteredNotifications())}
                    </TabsContent>
                    <TabsContent value="unread" className="m-0">
                      {renderNotificationsList(getFilteredNotifications())}
                    </TabsContent>
                    <TabsContent value="direct" className="m-0">
                      {renderNotificationsList(getFilteredNotifications())}
                    </TabsContent>
                    <TabsContent value="task" className="m-0">
                      {renderNotificationsList(getFilteredNotifications())}
                    </TabsContent>
                    <TabsContent value="system" className="m-0">
                      {renderNotificationsList(getFilteredNotifications())}
                    </TabsContent>
                  </CardContent>
                </Card>
              </div>
              
              {/* Notification Settings */}
              <div>
                <Card className="rounded-xl shadow-light-theme-shadow-medium mb-6">
                  <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                    <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <Button variant="outline" size="sm" className="w-full justify-start" onClick={markAllAsRead}>
                        <CheckCircle2 className="mr-2 h-4 w-4 text-actionsuccess" />
                        Mark all as read
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start" onClick={clearAllNotifications}>
                        <X className="mr-2 h-4 w-4 text-actionwarning" />
                        Clear all notifications
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start" onClick={() => window.location.href="#notification-settings"}>
                        <Settings className="mr-2 h-4 w-4 text-blackblack-60" />
                        Manage notification settings
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="rounded-xl shadow-light-theme-shadow-medium">
                  <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                    <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                      Categories
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y divide-[#111c2d1a]">
                      <div 
                        className={`px-4 py-3 flex justify-between cursor-pointer hover:bg-surfaceslightgray-10 ${activeTab === "direct" ? "bg-light-themeprimarylight-blue" : ""}`}
                        onClick={() => setActiveTab("direct")}
                      >
                        <div className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-3 text-light-themeprimaryblue" />
                          <span>Messages</span>
                        </div>
                        <Badge className="bg-surfaceslightgray-10 text-blackblack-60">{getCategoryCount("direct")}</Badge>
                      </div>
                      
                      <div 
                        className={`px-4 py-3 flex justify-between cursor-pointer hover:bg-surfaceslightgray-10 ${activeTab === "task" ? "bg-light-themeprimarylight-blue" : ""}`}
                        onClick={() => setActiveTab("task")}
                      >
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-3 text-actionsuccess" />
                          <span>Tasks</span>
                        </div>
                        <Badge className="bg-surfaceslightgray-10 text-blackblack-60">{getCategoryCount("task")}</Badge>
                      </div>
                      
                      <div 
                        className={`px-4 py-3 flex justify-between cursor-pointer hover:bg-surfaceslightgray-10 ${activeTab === "calendar" ? "bg-light-themeprimarylight-blue" : ""}`}
                        onClick={() => setActiveTab("calendar")}
                      >
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-3 text-light-themesecondarypurple" />
                          <span>Meetings</span>
                        </div>
                        <Badge className="bg-surfaceslightgray-10 text-blackblack-60">{getCategoryCount("calendar")}</Badge>
                      </div>
                      
                      <div 
                        className={`px-4 py-3 flex justify-between cursor-pointer hover:bg-surfaceslightgray-10 ${activeTab === "social" ? "bg-light-themeprimarylight-blue" : ""}`}
                        onClick={() => setActiveTab("social")}
                      >
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-3 text-actionalert" />
                          <span>Social</span>
                        </div>
                        <Badge className="bg-surfaceslightgray-10 text-blackblack-60">{getCategoryCount("social")}</Badge>
                      </div>
                      
                      <div 
                        className={`px-4 py-3 flex justify-between cursor-pointer hover:bg-surfaceslightgray-10 ${activeTab === "system" ? "bg-light-themeprimarylight-blue" : ""}`}
                        onClick={() => setActiveTab("system")}
                      >
                        <div className="flex items-center">
                          <Settings className="h-4 w-4 mr-3 text-blackblack-60" />
                          <span>System</span>
                        </div>
                        <Badge className="bg-surfaceslightgray-10 text-blackblack-60">{getCategoryCount("system")}</Badge>
                      </div>
                      
                      <div 
                        className={`px-4 py-3 flex justify-between cursor-pointer hover:bg-surfaceslightgray-10 ${activeTab === "security" ? "bg-light-themeprimarylight-blue" : ""}`}
                        onClick={() => setActiveTab("security")}
                      >
                        <div className="flex items-center">
                          <Shield className="h-4 w-4 mr-3 text-actionwarning" />
                          <span>Security</span>
                        </div>
                        <Badge className="bg-surfaceslightgray-10 text-blackblack-60">{getCategoryCount("security")}</Badge>
                      </div>
                      
                      <div 
                        className={`px-4 py-3 flex justify-between cursor-pointer hover:bg-surfaceslightgray-10 ${activeTab === "billing" ? "bg-light-themeprimarylight-blue" : ""}`}
                        onClick={() => setActiveTab("billing")}
                      >
                        <div className="flex items-center">
                          <CreditCard className="h-4 w-4 mr-3 text-actionsuccess" />
                          <span>Billing</span>
                        </div>
                        <Badge className="bg-surfaceslightgray-10 text-blackblack-60">{getCategoryCount("billing")}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Card className="rounded-xl shadow-light-theme-shadow-medium" id="notification-settings">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Notification Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Tabs value={settingsTab} onValueChange={setSettingsTab}>
                  <TabsList className="mb-6">
                    <TabsTrigger value="all">All Notifications</TabsTrigger>
                    <TabsTrigger value="email">Email</TabsTrigger>
                    <TabsTrigger value="push">Push</TabsTrigger>
                    <TabsTrigger value="inApp">In-App</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="space-y-6">
                    <div className="flex flex-col space-y-4">
                      {settings.map(setting => (
                        <div key={setting.id} className="flex flex-col md:flex-row md:items-center justify-between py-3 px-4 border-b border-[#111c2d1a] last:border-b-0">
                          <div className="mb-3 md:mb-0">
                            <div className="flex items-center">
                              <h3 className="font-medium">{setting.label}</h3>
                              {setting.enabled && (
                                <Badge className="ml-2 bg-actionsuccess-light text-actionsuccess font-normal">Enabled</Badge>
                              )}
                              {!setting.enabled && (
                                <Badge className="ml-2 bg-surfaceslightgray-10 text-blackblack-60 font-normal">Disabled</Badge>
                              )}
                            </div>
                            <p className="text-sm text-blackblack-60">{setting.description}</p>
                          </div>
                          <div className="flex md:flex-col lg:flex-row items-center space-x-4 md:space-x-0 lg:space-x-4 md:space-y-2 lg:space-y-0">
                            <div className="flex items-center space-x-2">
                              <Switch 
                                id={`${setting.id}-toggle`} 
                                checked={setting.enabled}
                                onCheckedChange={() => toggleNotificationSetting(setting.id, "enabled")}
                              />
                              <Label htmlFor={`${setting.id}-toggle`} className="sr-only">
                                Enable {setting.label}
                              </Label>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Button onClick={saveNotificationSettings}>Save Settings</Button>
                  </TabsContent>
                  
                  <TabsContent value="email" className="space-y-6">
                    <div className="flex flex-col space-y-4">
                      {settings.map(setting => (
                        <div key={setting.id} className="flex flex-col md:flex-row md:items-center justify-between py-3 px-4 border-b border-[#111c2d1a] last:border-b-0">
                          <div className="mb-3 md:mb-0">
                            <div className="flex items-center">
                              <h3 className="font-medium">{setting.label}</h3>
                              {setting.categories.email ? (
                                <Badge className="ml-2 bg-actionsuccess-light text-actionsuccess font-normal">Email Enabled</Badge>
                              ) : (
                                <Badge className="ml-2 bg-surfaceslightgray-10 text-blackblack-60 font-normal">Email Disabled</Badge>
                              )}
                            </div>
                            <p className="text-sm text-blackblack-60">{setting.description}</p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <Switch 
                                id={`${setting.id}-email`} 
                                checked={setting.categories.email}
                                onCheckedChange={() => toggleNotificationSetting(setting.id, "email")}
                                disabled={!setting.enabled}
                              />
                              <Label htmlFor={`${setting.id}-email`} className="sr-only">
                                Send Email
                              </Label>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Button onClick={saveNotificationSettings}>Save Settings</Button>
                  </TabsContent>
                  
                  <TabsContent value="push" className="space-y-6">
                    <div className="flex flex-col space-y-4">
                      {settings.map(setting => (
                        <div key={setting.id} className="flex flex-col md:flex-row md:items-center justify-between py-3 px-4 border-b border-[#111c2d1a] last:border-b-0">
                          <div className="mb-3 md:mb-0">
                            <div className="flex items-center">
                              <h3 className="font-medium">{setting.label}</h3>
                              {setting.categories.push ? (
                                <Badge className="ml-2 bg-actionsuccess-light text-actionsuccess font-normal">Push Enabled</Badge>
                              ) : (
                                <Badge className="ml-2 bg-surfaceslightgray-10 text-blackblack-60 font-normal">Push Disabled</Badge>
                              )}
                            </div>
                            <p className="text-sm text-blackblack-60">{setting.description}</p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <Switch 
                                id={`${setting.id}-push`} 
                                checked={setting.categories.push}
                                onCheckedChange={() => toggleNotificationSetting(setting.id, "push")}
                                disabled={!setting.enabled}
                              />
                              <Label htmlFor={`${setting.id}-push`} className="sr-only">
                                Send Push
                              </Label>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Button onClick={saveNotificationSettings}>Save Settings</Button>
                  </TabsContent>
                  
                  <TabsContent value="inApp" className="space-y-6">
                    <div className="flex flex-col space-y-4">
                      {settings.map(setting => (
                        <div key={setting.id} className="flex flex-col md:flex-row md:items-center justify-between py-3 px-4 border-b border-[#111c2d1a] last:border-b-0">
                          <div className="mb-3 md:mb-0">
                            <div className="flex items-center">
                              <h3 className="font-medium">{setting.label}</h3>
                              {setting.categories.inApp ? (
                                <Badge className="ml-2 bg-actionsuccess-light text-actionsuccess font-normal">In-App Enabled</Badge>
                              ) : (
                                <Badge className="ml-2 bg-surfaceslightgray-10 text-blackblack-60 font-normal">In-App Disabled</Badge>
                              )}
                            </div>
                            <p className="text-sm text-blackblack-60">{setting.description}</p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <Switch 
                                id={`${setting.id}-inApp`} 
                                checked={setting.categories.inApp}
                                onCheckedChange={() => toggleNotificationSetting(setting.id, "inApp")}
                                disabled={!setting.enabled}
                              />
                              <Label htmlFor={`${setting.id}-inApp`} className="sr-only">
                                Show In-App
                              </Label>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Button onClick={saveNotificationSettings}>Save Settings</Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </Tabs>
        </main>
      </div>
    </div>
  );
  
  // Helper function to render notifications list
  function renderNotificationsList(notifications: Notification[]) {
    if (notifications.length === 0) {
      return (
        <div className="p-6 text-center">
          <Inbox className="h-16 w-16 mx-auto text-blackblack-40 mb-4" />
          <h3 className="text-lg font-medium mb-2">No Notifications</h3>
          <p className="text-blackblack-60 max-w-md mx-auto">
            {activeTab === "all" 
              ? "You don't have any notifications right now." 
              : activeTab === "unread" 
                ? "You don't have any unread notifications." 
                : `You don't have any ${activeTab} notifications.`}
          </p>
        </div>
      );
    }
    
    return (
      <div className="divide-y divide-[#111c2d1a]">
        {notifications.map(notification => (
          <div 
            key={notification.id} 
            className={`p-4 hover:bg-surfaceslightgray-10 ${!notification.read ? 'bg-light-themeprimarylight-blue/10' : ''}`}
          >
            <div className="flex gap-3">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                !notification.read ? 'bg-light-themeprimarylight-blue' : 'bg-surfaceslightgray-10'
              }`}>
                {notification.sender ? (
                  <Avatar className="h-10 w-10">
                    {notification.sender.avatar ? (
                      <AvatarImage src={notification.sender.avatar} alt={notification.sender.name} />
                    ) : (
                      <AvatarFallback>
                        {notification.sender.name.charAt(0)}
                      </AvatarFallback>
                    )}
                  </Avatar>
                ) : (
                  getNotificationIcon(notification.type)
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between">
                  <div className="font-medium text-blackblack-100">{notification.title}</div>
                  <div className="text-xs text-blackblack-60 flex items-center ml-2">
                    <Clock className="h-3 w-3 mr-1" />
                    {formatNotificationTime(notification.date)}
                  </div>
                </div>
                
                {notification.content && (
                  <p className="text-sm text-blackblack-80 mt-1">{notification.content}</p>
                )}
                
                <div className="flex justify-between mt-3 pt-2">
                  <div className="flex gap-2">
                    {notification.action && (
                      <Button variant="outline" size="sm">
                        {notification.action.label} <ChevronRight className="ml-1 h-3 w-3" />
                      </Button>
                    )}
                    {!notification.read && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => markAsRead(notification.id)}
                      >
                        Mark as read
                      </Button>
                    )}
                  </div>
                  
                  <div className="flex items-center">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-8 p-0 text-actionwarning"
                      onClick={() => deleteNotification(notification.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
};
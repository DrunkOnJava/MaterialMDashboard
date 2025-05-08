import React, { useState } from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "../Buttons/components/Titlebar";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useToast } from "../../hooks/use-toast";
import { 
  Search, Copy, Check, Home, Settings, User, Mail, Lock, Bell, Calendar,
  FileText, Phone, MessageSquare, Heart, Star, Flag, Bookmark, Trash,
  Upload, Download, ExternalLink, Link, Eye, EyeOff, Printer, Save,
  Edit, Trash2, CheckCircle, XCircle, AlertCircle, AlertTriangle, Info,
  HelpCircle, ArrowRight, ArrowLeft, ArrowUp, ArrowDown, ChevronRight,
  ChevronLeft, ChevronUp, ChevronDown, Plus, Minus, X, Menu, MoreVertical,
  MoreHorizontal, CreditCard, DollarSign, ShoppingCart, Package, Gift,
  Coffee, Map, MapPin, Navigation, Cloud, CloudOff, Sun, Moon, Wind,
  Droplet, Wifi, WifiOff, Bluetooth, BluetoothOff, Key, Send, Share,
  Instagram, Twitter, Facebook, Github, Gitlab, Linkedin, Youtube,
  Clock, RefreshCw, RotateCw, RotateCcw, Repeat, Shuffle, Filter,
  Activity, Thermometer, PieChart, BarChart2, LineChart, TrendingUp, TrendingDown,
} from "lucide-react";

// Define icons by category
const iconsByCategory = {
  "Common UI": [
    { name: "Home", component: <Home /> },
    { name: "Settings", component: <Settings /> },
    { name: "User", component: <User /> },
    { name: "Mail", component: <Mail /> },
    { name: "Lock", component: <Lock /> },
    { name: "Bell", component: <Bell /> },
    { name: "Calendar", component: <Calendar /> },
    { name: "Search", component: <Search /> },
    { name: "FileText", component: <FileText /> },
    { name: "Phone", component: <Phone /> },
    { name: "MessageSquare", component: <MessageSquare /> },
  ],
  "Actions": [
    { name: "Copy", component: <Copy /> },
    { name: "Save", component: <Save /> },
    { name: "Edit", component: <Edit /> },
    { name: "Trash", component: <Trash /> },
    { name: "Trash2", component: <Trash2 /> },
    { name: "Upload", component: <Upload /> },
    { name: "Download", component: <Download /> },
    { name: "Print", component: <Printer /> },
    { name: "Link", component: <Link /> },
    { name: "ExternalLink", component: <ExternalLink /> },
    { name: "Send", component: <Send /> },
    { name: "Share", component: <Share /> },
  ],
  "Feedback & Status": [
    { name: "Check", component: <Check /> },
    { name: "CheckCircle", component: <CheckCircle /> },
    { name: "X", component: <X /> },
    { name: "XCircle", component: <XCircle /> },
    { name: "AlertCircle", component: <AlertCircle /> },
    { name: "AlertTriangle", component: <AlertTriangle /> },
    { name: "Info", component: <Info /> },
    { name: "HelpCircle", component: <HelpCircle /> },
    { name: "Eye", component: <Eye /> },
    { name: "EyeOff", component: <EyeOff /> },
    { name: "Heart", component: <Heart /> },
    { name: "Star", component: <Star /> },
  ],
  "Navigation": [
    { name: "ArrowRight", component: <ArrowRight /> },
    { name: "ArrowLeft", component: <ArrowLeft /> },
    { name: "ArrowUp", component: <ArrowUp /> },
    { name: "ArrowDown", component: <ArrowDown /> },
    { name: "ChevronRight", component: <ChevronRight /> },
    { name: "ChevronLeft", component: <ChevronLeft /> },
    { name: "ChevronUp", component: <ChevronUp /> },
    { name: "ChevronDown", component: <ChevronDown /> },
    { name: "Menu", component: <Menu /> },
    { name: "MoreVertical", component: <MoreVertical /> },
    { name: "MoreHorizontal", component: <MoreHorizontal /> },
  ],
  "E-Commerce": [
    { name: "ShoppingCart", component: <ShoppingCart /> },
    { name: "CreditCard", component: <CreditCard /> },
    { name: "DollarSign", component: <DollarSign /> },
    { name: "Package", component: <Package /> },
    { name: "Gift", component: <Gift /> },
  ],
  "Charts & Data": [
    { name: "PieChart", component: <PieChart /> },
    { name: "BarChart2", component: <BarChart2 /> },
    { name: "LineChart", component: <LineChart /> },
    { name: "TrendingUp", component: <TrendingUp /> },
    { name: "TrendingDown", component: <TrendingDown /> },
    { name: "Activity", component: <Activity /> },
    { name: "Filter", component: <Filter /> },
  ],
  "Misc": [
    { name: "Map", component: <Map /> },
    { name: "MapPin", component: <MapPin /> },
    { name: "Navigation", component: <Navigation /> },
    { name: "Cloud", component: <Cloud /> },
    { name: "CloudOff", component: <CloudOff /> },
    { name: "Sun", component: <Sun /> },
    { name: "Moon", component: <Moon /> },
    { name: "Wind", component: <Wind /> },
    { name: "Droplet", component: <Droplet /> },
    { name: "Clock", component: <Clock /> },
    { name: "RefreshCw", component: <RefreshCw /> },
    { name: "RotateCw", component: <RotateCw /> },
  ],
  "Social": [
    { name: "Instagram", component: <Instagram /> },
    { name: "Twitter", component: <Twitter /> },
    { name: "Facebook", component: <Facebook /> },
    { name: "Github", component: <Github /> },
    { name: "Gitlab", component: <Gitlab /> },
    { name: "Linkedin", component: <Linkedin /> },
    { name: "Youtube", component: <Youtube /> },
  ],
};

export const IconsGallery = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedIcon, setCopiedIcon] = useState("");
  const { toast } = useToast();

  // Handle icon copy
  const handleCopyIcon = (iconName) => {
    const importStatement = `import { ${iconName} } from "lucide-react";`;
    navigator.clipboard.writeText(importStatement);
    setCopiedIcon(iconName);
    
    toast({
      title: "Copied to clipboard",
      description: `${importStatement}`,
    });
    
    // Reset copied state after 2 seconds
    setTimeout(() => {
      setCopiedIcon("");
    }, 2000);
  };
  
  // Filter icons based on search term and category
  const filteredIcons = React.useMemo(() => {
    // First flatten all categories if "All" is selected
    const iconsToFilter = activeCategory === "All" 
      ? Object.values(iconsByCategory).flat() 
      : iconsByCategory[activeCategory] || [];
    
    // Then filter by search term if provided
    if (!searchTerm) return iconsToFilter;
    
    return iconsToFilter.filter(icon => 
      icon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, activeCategory]);

  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Icons" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Icon Gallery
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                    <div className="relative w-full md:w-64">
                      <Search className="absolute left-3 top-2.5 h-4 w-4 text-blackblack-60" />
                      <Input
                        placeholder="Search icons..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Button 
                        variant={activeCategory === "All" ? "default" : "outline"} 
                        size="sm" 
                        onClick={() => setActiveCategory("All")}
                      >
                        All
                      </Button>
                      {Object.keys(iconsByCategory).map((category) => (
                        <Button
                          key={category}
                          variant={activeCategory === category ? "default" : "outline"}
                          size="sm"
                          onClick={() => setActiveCategory(category)}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="text-lg font-medium mb-4">
                      {activeCategory === "All" ? "All Icons" : activeCategory}
                      {searchTerm && ` matching "${searchTerm}"`}
                      <span className="text-sm text-blackblack-60 ml-2">
                        ({filteredIcons.length} icons)
                      </span>
                    </h3>
                    
                    {filteredIcons.length === 0 ? (
                      <div className="text-center py-8 text-blackblack-60">
                        <p>No icons found matching your search criteria.</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {filteredIcons.map((icon, index) => (
                          <div 
                            key={index} 
                            className="flex flex-col items-center justify-center p-4 border border-[#111c2d1a] rounded-lg hover:bg-surfaceslightgray-10 cursor-pointer relative"
                            onClick={() => handleCopyIcon(icon.name)}
                          >
                            <div className="w-10 h-10 flex items-center justify-center text-blackblack-80">
                              {icon.component}
                            </div>
                            <p className="mt-2 text-xs text-blackblack-80 text-center truncate w-full">
                              {icon.name}
                            </p>
                            {copiedIcon === icon.name && (
                              <div className="absolute inset-0 bg-blackblack-100 bg-opacity-80 rounded-lg flex items-center justify-center">
                                <Check className="text-white h-5 w-5" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Icon Usage
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Basic Usage</h3>
                    <p className="text-blackblack-80 mb-4">
                      This project uses Lucide React for icons. Lucide is a beautiful, consistent, and open-source icon library with more than 700 icons.
                    </p>
                    <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`// Import the icon from lucide-react
import { Home } from "lucide-react";

// Use the icon in your component
<Home />

// With custom size
<Home size={24} />

// With custom color
<Home className="text-light-themeprimaryblue" />

// With custom stroke width
<Home strokeWidth={1.5} />

// With all customizations
<Home 
  size={32}
  className="text-light-themeprimaryblue" 
  strokeWidth={1.5}
/>`}
                      </code>
                    </pre>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Icon Variants</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="p-4 border border-[#111c2d1a] rounded-lg space-y-2">
                        <h4 className="font-medium text-blackblack-100">Default Size (24px)</h4>
                        <div className="flex items-center gap-4">
                          <Home className="text-blackblack-80" />
                          <Mail className="text-blackblack-80" />
                          <Settings className="text-blackblack-80" />
                        </div>
                      </div>
                      
                      <div className="p-4 border border-[#111c2d1a] rounded-lg space-y-2">
                        <h4 className="font-medium text-blackblack-100">Smaller Size (16px)</h4>
                        <div className="flex items-center gap-4">
                          <Home className="h-4 w-4 text-blackblack-80" />
                          <Mail className="h-4 w-4 text-blackblack-80" />
                          <Settings className="h-4 w-4 text-blackblack-80" />
                        </div>
                      </div>
                      
                      <div className="p-4 border border-[#111c2d1a] rounded-lg space-y-2">
                        <h4 className="font-medium text-blackblack-100">Larger Size (32px)</h4>
                        <div className="flex items-center gap-4">
                          <Home className="h-8 w-8 text-blackblack-80" />
                          <Mail className="h-8 w-8 text-blackblack-80" />
                          <Settings className="h-8 w-8 text-blackblack-80" />
                        </div>
                      </div>
                      
                      <div className="p-4 border border-[#111c2d1a] rounded-lg space-y-2">
                        <h4 className="font-medium text-blackblack-100">Colored Icons</h4>
                        <div className="flex items-center gap-4">
                          <Home className="text-light-themeprimaryblue" />
                          <Mail className="text-light-themesecondarypurple" />
                          <Settings className="text-actionsuccess" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Usage Examples</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 border border-[#111c2d1a] rounded-lg">
                        <h4 className="font-medium text-blackblack-100 mb-3">Button with Icon</h4>
                        <div className="flex flex-wrap gap-2">
                          <Button className="flex items-center gap-2">
                            <Plus className="h-4 w-4" />
                            <span>Add New</span>
                          </Button>
                          
                          <Button variant="outline" className="flex items-center gap-2">
                            <Download className="h-4 w-4" />
                            <span>Download</span>
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-[#111c2d1a] rounded-lg">
                        <h4 className="font-medium text-blackblack-100 mb-3">Alert with Icon</h4>
                        <div className="flex items-center gap-2 p-3 bg-actionsuccess-light text-actionsuccess rounded-md">
                          <CheckCircle className="h-5 w-5 flex-shrink-0" />
                          <span>Operation was successful</span>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-[#111c2d1a] rounded-lg">
                        <h4 className="font-medium text-blackblack-100 mb-3">Input with Icon</h4>
                        <div className="relative">
                          <Search className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
                          <Input placeholder="Search..." className="pl-10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Implementation Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Installation and Setup</h3>
                    <p className="text-blackblack-80 mb-4">
                      Lucide React is already installed in this project, but for reference, here's how to install it in a new project:
                    </p>
                    <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`// Install with npm
npm install lucide-react

// Or with yarn
yarn add lucide-react`}
                      </code>
                    </pre>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Best Practices</h3>
                    <ul className="list-disc pl-6 space-y-2 text-blackblack-80">
                      <li><strong>Consistency</strong> - Use the same icon library throughout your application</li>
                      <li><strong>Sizing</strong> - Maintain consistent icon sizes based on their context (e.g., 16px for inline text, 20px for button icons, 24px for standalone use)</li>
                      <li><strong>Color</strong> - Use the semantic color system for icons (e.g., primary color for primary actions, warning colors for alerts)</li>
                      <li><strong>Accessibility</strong> - Add proper aria-labels for icons when they're the only content in a button or when they convey important meaning</li>
                      <li><strong>Performance</strong> - Import only the specific icons you need rather than the entire library</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Accessibility</h3>
                    <p className="text-blackblack-80 mb-4">
                      When using icons, ensure they are accessible to all users including those who use screen readers:
                    </p>
                    <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`// Icon button with accessible label
<button 
  aria-label="Search" 
  className="p-2 rounded-full hover:bg-surfaceslightgray-10"
>
  <Search className="h-5 w-5" />
</button>

// Icon with visible text doesn't need aria-label
<button className="flex items-center gap-2 px-4 py-2 rounded-md bg-light-themeprimaryblue text-white">
  <Download className="h-4 w-4" />
  <span>Download</span>
</button>`}
                      </code>
                    </pre>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Creating Custom Icon Components</h3>
                    <p className="text-blackblack-80 mb-4">
                      For frequently used icon patterns, you can create custom reusable components:
                    </p>
                    <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`// Create a custom IconButton component
import { LucideIcon } from 'lucide-react';
import { Button } from './components/ui/button';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  label: string;
  variant?: 'default' | 'outline' | 'ghost';
}

export const IconButton = ({ 
  icon: Icon, 
  label, 
  variant = 'default', 
  ...props 
}: IconButtonProps) => {
  return (
    <Button 
      variant={variant} 
      aria-label={label} 
      className="flex items-center gap-2" 
      {...props}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Button>
  );
};

// Usage
<IconButton icon={Download} label="Download" />
<IconButton icon={Trash2} label="Delete" variant="outline" />`}
                      </code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};
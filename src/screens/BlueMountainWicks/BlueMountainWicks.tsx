import React, { useState } from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Button } from "../../components/ui/button";
import { useToast } from "../../hooks/use-toast";
import { WebsitePreview } from "./components/WebsitePreview";
import { BlueMountainWicksProvider } from "./context/BlueMountainWicksContext";
import {
  BarChart,
  Package,
  ShoppingCart,
  Tag,
  PlusCircle,
  Settings,
  Users,
  Truck,
  ExternalLink,
  Globe
} from "lucide-react";

// Import mock data
import { 
  mockProducts, 
  mockOrders, 
  mockCustomers, 
  mockSalesSummary 
} from "./data/mockData";

// Import Dashboard component directly since we've implemented it
import Dashboard from "./sections/Dashboard/Dashboard";

// Lazy-load other components that will be implemented later
const ProductList = React.lazy(() => import("./sections/Products/ProductList"));
const OrderList = React.lazy(() => import("./sections/Orders/OrderList"));
const ProductDetail = React.lazy(() => import("./sections/Products/ProductDetail"));
const CheckoutManagement = React.lazy(() => import("./sections/Checkout/CheckoutManagement"));

export const BlueMountainWicksContent = (): JSX.Element => {
  // State hooks
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const { toast } = useToast();

  // Function to handle tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSelectedProductId(null);
    setIsAddingProduct(false);
  };

  // Function to view product details
  const handleViewProduct = (productId: string) => {
    setSelectedProductId(productId);
    setIsAddingProduct(false);
    setActiveTab("product-detail");
  };

  // Function to add a new product
  const handleAddProduct = () => {
    setIsAddingProduct(true);
    setSelectedProductId(null);
    setActiveTab("product-detail");
  };

  // Function to handle product updates
  const handleProductUpdate = (productId: string, data: any) => {
    // In a real app, this would update the backend
    toast({
      title: "Product updated",
      description: `Product ${data.name} has been updated successfully.`,
    });
    setActiveTab("products");
  };

  // Function to handle product deletion
  const handleProductDelete = (productId: string) => {
    // In a real app, this would delete from the backend
    toast({
      title: "Product deleted",
      description: "Product has been deleted successfully.",
    });
    setActiveTab("products");
  };

  // Get current product for the detail view
  const currentProduct = selectedProductId 
    ? mockProducts.find(p => p.id === selectedProductId) 
    : null;

  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <div className="flex-1 overflow-auto">
          <div className="py-6 px-6 bg-white border-b border-[#e4ebf0]">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-semibold tracking-[-0.38px] leading-tight text-blackblack-100">
                  Blue Mountain Wicks
                </h1>
                <p className="text-blackblack-60 mt-1">
                  Admin Dashboard for Blue Mountain Wicks Candle Shop
                </p>
              </div>
              <div className="flex gap-2">
                {/* Website access point #1: Header button */}
                <WebsitePreview 
                  trigger={
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-1"
                    >
                      <Globe className="h-4 w-4 mr-1" />
                      View Website
                    </Button>
                  }
                />
                {activeTab === "products" && (
                  <Button 
                    onClick={handleAddProduct}
                    className="flex items-center gap-1"
                  >
                    <PlusCircle className="h-4 w-4 mr-1" />
                    Add New Product
                  </Button>
                )}
              </div>
            </div>
          </div>

          {activeTab !== "product-detail" ? (
            <main className="p-6">
              <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                <TabsList className="mb-6 bg-white p-1 rounded-lg">
                  <TabsTrigger value="dashboard" className="flex items-center gap-1 px-4">
                    <BarChart className="h-4 w-4" />
                    <span>Dashboard</span>
                  </TabsTrigger>
                  <TabsTrigger value="products" className="flex items-center gap-1 px-4">
                    <Package className="h-4 w-4" />
                    <span>Products</span>
                  </TabsTrigger>
                  <TabsTrigger value="orders" className="flex items-center gap-1 px-4">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Orders</span>
                  </TabsTrigger>
                  <TabsTrigger value="customers" className="flex items-center gap-1 px-4">
                    <Users className="h-4 w-4" />
                    <span>Customers</span>
                  </TabsTrigger>
                  <TabsTrigger value="inventory" className="flex items-center gap-1 px-4">
                    <Tag className="h-4 w-4" />
                    <span>Inventory</span>
                  </TabsTrigger>
                  <TabsTrigger value="shipping" className="flex items-center gap-1 px-4">
                    <Truck className="h-4 w-4" />
                    <span>Shipping</span>
                  </TabsTrigger>
                  <TabsTrigger value="settings" className="flex items-center gap-1 px-4">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </TabsTrigger>
                </TabsList>

                {/* Dashboard Tab */}
                <TabsContent value="dashboard">
                  <React.Suspense fallback={<div>Loading dashboard...</div>}>
                    <Dashboard 
                      salesSummary={mockSalesSummary}
                      products={mockProducts}
                      orders={mockOrders}
                    />
                  </React.Suspense>
                </TabsContent>

                {/* Products Tab */}
                <TabsContent value="products">
                  <React.Suspense fallback={<div>Loading products...</div>}>
                    <ProductList 
                      products={mockProducts}
                      onViewProduct={handleViewProduct}
                      onAddProduct={handleAddProduct}
                      onDeleteProduct={handleProductDelete}
                    />
                  </React.Suspense>
                </TabsContent>

                {/* Orders Tab */}
                <TabsContent value="orders">
                  <React.Suspense fallback={<div>Loading orders...</div>}>
                    <OrderList 
                      orders={mockOrders}
                      customers={mockCustomers}
                    />
                  </React.Suspense>
                </TabsContent>

                {/* Customers Tab */}
                <TabsContent value="customers">
                  <Card className="rounded-xl shadow-light-theme-shadow-medium">
                    <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                      <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                        Customer Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-blackblack-60">
                        Customer management functionality will be implemented here, allowing you to view and manage customer accounts,
                        track purchase history, manage loyalty programs, and handle customer support requests.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Inventory Tab */}
                <TabsContent value="inventory">
                  <Card className="rounded-xl shadow-light-theme-shadow-medium">
                    <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                      <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                        Inventory Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-blackblack-60">
                        Inventory management functionality will be implemented here, allowing you to track stock levels,
                        manage reordering, handle supplier relationships, and generate inventory reports.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Shipping Tab */}
                <TabsContent value="shipping">
                  <Card className="rounded-xl shadow-light-theme-shadow-medium">
                    <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                      <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                        Shipping Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-blackblack-60">
                        Shipping management functionality will be implemented here, allowing you to configure shipping methods,
                        print shipping labels, track deliveries, and manage returns.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Settings Tab */}
                <TabsContent value="settings">
                  <Card className="rounded-xl shadow-light-theme-shadow-medium">
                    <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                      <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                        Store Settings
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-blackblack-60">
                        Store settings functionality will be implemented here, allowing you to configure your store details,
                        manage payment methods, set up taxes, handle user accounts, and customize the storefront.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </main>
          ) : (
            <main className="p-6">
              <React.Suspense fallback={<div>Loading product details...</div>}>
                <ProductDetail 
                  product={currentProduct}
                  isNew={isAddingProduct}
                  onSave={handleProductUpdate}
                  onCancel={() => setActiveTab("products")}
                  onDelete={handleProductDelete}
                />
              </React.Suspense>
            </main>
          )}
        </div>
      </div>
    </div>
  );
};

export const BlueMountainWicks = (): JSX.Element => {
  return (
    <BlueMountainWicksProvider>
      <BlueMountainWicksContent />
    </BlueMountainWicksProvider>
  );
};

export default BlueMountainWicks;
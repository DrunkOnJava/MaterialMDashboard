import React, { useState } from "react";
import { DetailsByAnima } from "../Chip/sections/DetailsByAnima/DetailsByAnima";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import { Avatar, AvatarImage } from "../../components/ui/avatar";
import { useToast } from "../../hooks/use-toast";
import {
  Search,
  Filter,
  ShoppingCart,
  Heart,
  Star,
  Plus,
  Minus,
  Package,
  Truck,
  CheckCircle,
  Clock,
  Tag,
  Grid2X2,
  List,
  ChevronLeft,
  ChevronRight,
  X
} from "lucide-react";

// Define types
interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating: number;
  reviews: number;
  image: string;
  tags: string[];
  stock: number;
  isFeatured?: boolean;
  isNew?: boolean;
  isSale?: boolean;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface Category {
  id: string;
  name: string;
  count: number;
  image: string;
}

interface OrderTrack {
  id: string;
  product: {
    name: string;
    image: string;
  };
  status: "processing" | "shipped" | "delivered" | "cancelled";
  date: string;
  estimatedDelivery: string;
  trackingNumber: string;
}

// Mock data
const mockProducts: Product[] = [
  {
    id: "prod-1",
    name: "Wireless Headphones XR200",
    category: "Electronics",
    price: 249.99,
    rating: 4.8,
    reviews: 342,
    image: "/group-28.png",
    tags: ["Wireless", "Bluetooth", "Noise Cancelling"],
    stock: 45,
    isFeatured: true,
    isNew: true
  },
  {
    id: "prod-2",
    name: "Ultra HD 4K Monitor 27\"",
    category: "Electronics",
    price: 399.99,
    originalPrice: 499.99,
    discountPercentage: 20,
    rating: 4.7,
    reviews: 215,
    image: "/group-26.png",
    tags: ["4K", "Ultra HD", "IPS"],
    stock: 18,
    isSale: true
  },
  {
    id: "prod-3",
    name: "Smart Watch Series 5",
    category: "Wearables",
    price: 128.50,
    rating: 4.5,
    reviews: 189,
    image: "/group-27.png",
    tags: ["Smart Watch", "Fitness", "Heart Rate"],
    stock: 32,
    isFeatured: true
  },
  {
    id: "prod-4",
    name: "Bluetooth Speaker Mini",
    category: "Audio",
    price: 59.99,
    originalPrice: 79.99,
    discountPercentage: 25,
    rating: 4.2,
    reviews: 123,
    image: "/group-24.png",
    tags: ["Bluetooth", "Portable", "Waterproof"],
    stock: 52,
    isSale: true
  },
  {
    id: "prod-5",
    name: "Smartphone Model X",
    category: "Electronics",
    price: 899.00,
    rating: 4.9,
    reviews: 456,
    image: "/group-25.png",
    tags: ["Smartphone", "5G", "128GB"],
    stock: 15,
    isNew: true
  },
  {
    id: "prod-6",
    name: "Wireless Keyboard",
    category: "Accessories",
    price: 79.99,
    rating: 4.4,
    reviews: 105,
    image: "/group-23.png",
    tags: ["Wireless", "Ergonomic", "Backlit"],
    stock: 27
  },
  {
    id: "prod-7",
    name: "Premium Laptop Pro",
    category: "Electronics",
    price: 1249.99,
    originalPrice: 1399.99,
    discountPercentage: 10,
    rating: 4.8,
    reviews: 278,
    image: "/group-22.png",
    tags: ["Laptop", "16GB RAM", "512GB SSD"],
    stock: 9,
    isFeatured: true,
    isSale: true
  },
  {
    id: "prod-8",
    name: "USB-C Cable Pack",
    category: "Accessories",
    price: 12.99,
    rating: 4.3,
    reviews: 89,
    image: "/group-21.png",
    tags: ["USB-C", "Fast Charging", "3-Pack"],
    stock: 64
  }
];

const mockCategories: Category[] = [
  {
    id: "cat-1",
    name: "Electronics",
    count: 156,
    image: "/group-20.png"
  },
  {
    id: "cat-2",
    name: "Wearables",
    count: 75,
    image: "/group-19.png"
  },
  {
    id: "cat-3",
    name: "Audio",
    count: 42,
    image: "/group-18.png"
  },
  {
    id: "cat-4",
    name: "Accessories",
    count: 124,
    image: "/group-17.png"
  },
  {
    id: "cat-5",
    name: "Cameras",
    count: 28,
    image: "/group-16.png"
  },
  {
    id: "cat-6",
    name: "Gaming",
    count: 92,
    image: "/group-15.png"
  }
];

const mockTrackingOrders: OrderTrack[] = [
  {
    id: "ORD-5289",
    product: {
      name: "Wireless Headphones XR200",
      image: "/group-28.png"
    },
    status: "shipped",
    date: "2025-03-15",
    estimatedDelivery: "2025-03-20",
    trackingNumber: "TRK-12345678"
  },
  {
    id: "ORD-5288",
    product: {
      name: "Smart Watch Series 5",
      image: "/group-27.png"
    },
    status: "processing",
    date: "2025-03-18",
    estimatedDelivery: "2025-03-25",
    trackingNumber: "TRK-87654321"
  },
  {
    id: "ORD-5287",
    product: {
      name: "Ultra HD 4K Monitor 27\"",
      image: "/group-26.png"
    },
    status: "delivered",
    date: "2025-03-10",
    estimatedDelivery: "2025-03-15",
    trackingNumber: "TRK-45678901"
  }
];

export const Ecommerce = (): JSX.Element => {
  // State hooks
  const [activeTab, setActiveTab] = useState("products");
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [cart, setCart] = useState<CartItem[]>([
    { product: mockProducts[0], quantity: 1 },
    { product: mockProducts[3], quantity: 2 }
  ]);
  const [wishlist, setWishlist] = useState<string[]>(["prod-3", "prod-7"]);

  const { toast } = useToast();

  // Filter products based on search term and category filter
  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  // Handle cart operations
  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.product.id === product.id);
    
    if (existingItem) {
      const updatedCart = cart.map(item => 
        item.product.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
    
    toast({
      title: "Item added to cart",
      description: `${product.name} has been added to your cart.`,
      variant: "default",
    });
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter(item => item.product.id !== productId);
    setCart(updatedCart);

    toast({
      title: "Item removed",
      description: "Item has been removed from your cart.",
      variant: "default",
    });
  };

  const updateCartQuantity = (productId: string, type: "increment" | "decrement") => {
    const updatedCart = cart.map(item => {
      if (item.product.id === productId) {
        const newQuantity = type === "increment" ? item.quantity + 1 : item.quantity - 1;
        
        if (newQuantity < 1) {
          return item;  // Keep minimum quantity of 1
        }
        
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    
    setCart(updatedCart);
  };

  // Toggle wishlist
  const toggleWishlist = (productId: string) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
      toast({
        title: "Removed from wishlist",
        description: "Item has been removed from your wishlist",
        variant: "default",
      });
    } else {
      setWishlist([...wishlist, productId]);
      toast({
        title: "Added to wishlist",
        description: "Item has been added to your wishlist",
        variant: "default",
      });
    }
  };

  // Calculate cart totals
  const cartSubtotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const cartTax = cartSubtotal * 0.07; // Assuming 7% tax
  const shippingCost = cartSubtotal > 100 ? 0 : 12.99;
  const cartTotal = cartSubtotal + cartTax + shippingCost;

  // Get status badge styling based on status
  const getStatusBadgeClass = (status: OrderTrack["status"]) => {
    switch (status) {
      case "processing":
        return "bg-actionalert-light text-actionalert";
      case "shipped":
        return "bg-light-themeprimarylight-blue text-light-themeprimaryblue";
      case "delivered":
        return "bg-actionsuccess-light text-actionsuccess";
      case "cancelled":
        return "bg-actionwarning-light text-actionwarning";
      default:
        return "bg-blackblack-10 text-blackblack-100";
    }
  };

  // Render product card
  const renderProductCard = (product: Product) => {
    return (
      <Card key={product.id} className="rounded-xl overflow-hidden shadow-light-theme-shadow-medium">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-3 right-3 flex gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="bg-white rounded-full hover:bg-light-themeprimarylight-blue"
              onClick={() => toggleWishlist(product.id)}
            >
              <Heart 
                className={`h-5 w-5 ${wishlist.includes(product.id) ? "fill-actionwarning text-actionwarning" : "text-blackblack-60"}`} 
              />
            </Button>
          </div>
          {product.isNew && (
            <Badge className="absolute top-3 left-3 bg-light-themeprimaryblue">New</Badge>
          )}
          {product.isSale && (
            <Badge className="absolute top-3 left-3 bg-actionwarning">Sale</Badge>
          )}
        </div>
        <CardContent className="pt-4">
          <p className="text-sm text-blackblack-60">{product.category}</p>
          <h3 className="text-lg font-medium mt-1 text-blackblack-100">{product.name}</h3>
          <div className="flex items-center gap-1 mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-actionwarning text-actionwarning" : "text-blackblack-20"}`} 
              />
            ))}
            <span className="text-sm text-blackblack-60 ml-1">({product.reviews})</span>
          </div>
          <div className="flex items-center mt-3">
            {product.originalPrice ? (
              <>
                <p className="text-xl font-semibold text-blackblack-100">${product.price.toFixed(2)}</p>
                <p className="text-sm text-blackblack-60 line-through ml-2">${product.originalPrice.toFixed(2)}</p>
                <Badge className="ml-2 bg-actionsuccess-light text-actionsuccess">
                  {product.discountPercentage}% Off
                </Badge>
              </>
            ) : (
              <p className="text-xl font-semibold text-blackblack-100">${product.price.toFixed(2)}</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="pt-0 flex gap-2">
          <Button 
            variant="primary" 
            className="w-full"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    );
  };

  // Render product list item (for list view)
  const renderProductListItem = (product: Product) => {
    return (
      <Card key={product.id} className="rounded-xl shadow-light-theme-shadow-medium">
        <div className="flex p-4">
          <div className="relative w-32 h-32 flex-shrink-0">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
            {product.isNew && (
              <Badge className="absolute top-2 left-2 bg-light-themeprimaryblue">New</Badge>
            )}
            {product.isSale && (
              <Badge className="absolute top-2 left-2 bg-actionwarning">Sale</Badge>
            )}
          </div>
          <div className="ml-4 flex-1">
            <p className="text-sm text-blackblack-60">{product.category}</p>
            <h3 className="text-lg font-medium mt-1 text-blackblack-100">{product.name}</h3>
            <div className="flex items-center gap-1 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-actionwarning text-actionwarning" : "text-blackblack-20"}`} 
                />
              ))}
              <span className="text-sm text-blackblack-60 ml-1">({product.reviews})</span>
            </div>
            <div className="flex items-center mt-2">
              {product.originalPrice ? (
                <>
                  <p className="text-xl font-semibold text-blackblack-100">${product.price.toFixed(2)}</p>
                  <p className="text-sm text-blackblack-60 line-through ml-2">${product.originalPrice.toFixed(2)}</p>
                  <Badge className="ml-2 bg-actionsuccess-light text-actionsuccess">
                    {product.discountPercentage}% Off
                  </Badge>
                </>
              ) : (
                <p className="text-xl font-semibold text-blackblack-100">${product.price.toFixed(2)}</p>
              )}
            </div>
            <div className="flex gap-2 mt-3">
              <Button 
                variant="primary" 
                onClick={() => addToCart(product)}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-light-themeprimarylight-blue"
                onClick={() => toggleWishlist(product.id)}
              >
                <Heart 
                  className={`h-5 w-5 ${wishlist.includes(product.id) ? "fill-actionwarning text-actionwarning" : "text-blackblack-60"}`} 
                />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <div className="flex-1 overflow-auto">
          <div className="py-6 px-6 bg-white border-b border-[#e4ebf0]">
            <h1 className="text-2xl font-semibold tracking-[-0.38px] leading-tight text-blackblack-100">
              Ecommerce
            </h1>
            <p className="text-blackblack-60 mt-1">
              Manage your products, orders, and inventory
            </p>
          </div>

          <main className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="mb-6 bg-white p-1 rounded-lg">
                <TabsTrigger value="products" className="px-6">Products</TabsTrigger>
                <TabsTrigger value="cart" className="px-6">Shopping Cart</TabsTrigger>
                <TabsTrigger value="tracking" className="px-6">Order Tracking</TabsTrigger>
                <TabsTrigger value="categories" className="px-6">Categories</TabsTrigger>
              </TabsList>
              
              {/* Products Tab */}
              <TabsContent value="products">
                <div className="space-y-6">
                  {/* Search and filters */}
                  <Card className="rounded-xl shadow-light-theme-shadow-medium">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-auto flex-1">
                          <Search className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
                          <Input
                            placeholder="Search products..."
                            className="pl-10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        </div>
                        
                        <div className="flex gap-4 w-full md:w-auto">
                          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                            <SelectTrigger className="w-[180px]">
                              <Filter className="mr-2 h-4 w-4" />
                              <SelectValue placeholder="Filter by category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Categories</SelectItem>
                              <SelectItem value="Electronics">Electronics</SelectItem>
                              <SelectItem value="Wearables">Wearables</SelectItem>
                              <SelectItem value="Audio">Audio</SelectItem>
                              <SelectItem value="Accessories">Accessories</SelectItem>
                            </SelectContent>
                          </Select>
                          
                          <div className="flex border rounded-md p-1 bg-surfaceslightgray-10">
                            <Button 
                              variant={viewMode === "grid" ? "primary" : "ghost"} 
                              size="icon"
                              onClick={() => setViewMode("grid")}
                            >
                              <Grid2X2 className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant={viewMode === "list" ? "primary" : "ghost"} 
                              size="icon"
                              onClick={() => setViewMode("list")}
                            >
                              <List className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Products grid/list */}
                  {viewMode === "grid" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {filteredProducts.map(product => renderProductCard(product))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredProducts.map(product => renderProductListItem(product))}
                    </div>
                  )}
                  
                  {/* Pagination */}
                  <div className="flex justify-center mt-8">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="primary" size="sm">1</Button>
                      <Button variant="outline" size="sm">2</Button>
                      <Button variant="outline" size="sm">3</Button>
                      <span className="mx-2">...</span>
                      <Button variant="outline" size="sm">10</Button>
                      <Button variant="outline" size="icon">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Shopping Cart Tab */}
              <TabsContent value="cart">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Cart items */}
                  <div className="lg:col-span-2">
                    <Card className="rounded-xl shadow-light-theme-shadow-medium">
                      <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                        <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                          Shopping Cart <span className="text-blackblack-60">({cart.length} items)</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <ScrollArea className="h-[450px]">
                          {cart.length > 0 ? (
                            <div className="divide-y divide-[#111c2d1a]">
                              {cart.map((item) => (
                                <div key={item.product.id} className="p-6 flex">
                                  <div className="w-20 h-20 flex-shrink-0">
                                    <img 
                                      src={item.product.image} 
                                      alt={item.product.name}
                                      className="w-full h-full object-cover rounded-lg"
                                    />
                                  </div>
                                  <div className="ml-4 flex-1">
                                    <div className="flex justify-between">
                                      <div>
                                        <h3 className="font-medium text-blackblack-100">{item.product.name}</h3>
                                        <p className="text-sm text-blackblack-60 mt-1">{item.product.category}</p>
                                        <div className="flex items-center gap-3 mt-3">
                                          <Button 
                                            variant="outline" 
                                            size="icon" 
                                            className="h-8 w-8 rounded-full"
                                            onClick={() => updateCartQuantity(item.product.id, "decrement")}
                                          >
                                            <Minus className="h-3 w-3" />
                                          </Button>
                                          <span className="text-blackblack-100">{item.quantity}</span>
                                          <Button 
                                            variant="outline" 
                                            size="icon" 
                                            className="h-8 w-8 rounded-full"
                                            onClick={() => updateCartQuantity(item.product.id, "increment")}
                                          >
                                            <Plus className="h-3 w-3" />
                                          </Button>
                                        </div>
                                      </div>
                                      <div className="flex flex-col items-end">
                                        <p className="font-medium text-lg text-blackblack-100">
                                          ${(item.product.price * item.quantity).toFixed(2)}
                                        </p>
                                        <p className="text-sm text-blackblack-60">
                                          ${item.product.price.toFixed(2)} each
                                        </p>
                                        <Button 
                                          variant="ghost" 
                                          size="icon"
                                          className="text-actionwarning mt-auto"
                                          onClick={() => removeFromCart(item.product.id)}
                                        >
                                          <X className="h-4 w-4" />
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="p-6 text-center text-blackblack-60">
                              <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-blackblack-40" />
                              <p className="text-lg">Your cart is empty</p>
                              <p className="mt-2">Add some products to your cart to continue shopping</p>
                              <Button 
                                variant="primary" 
                                className="mt-4"
                                onClick={() => setActiveTab("products")}
                              >
                                Browse Products
                              </Button>
                            </div>
                          )}
                        </ScrollArea>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Order summary */}
                  <div>
                    <Card className="rounded-xl shadow-light-theme-shadow-medium">
                      <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                        <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                          Order Summary
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <p className="text-blackblack-60">Subtotal</p>
                            <p className="font-medium text-blackblack-100">${cartSubtotal.toFixed(2)}</p>
                          </div>
                          <div className="flex justify-between">
                            <p className="text-blackblack-60">Tax (7%)</p>
                            <p className="font-medium text-blackblack-100">${cartTax.toFixed(2)}</p>
                          </div>
                          <div className="flex justify-between">
                            <p className="text-blackblack-60">Shipping</p>
                            <p className="font-medium text-blackblack-100">
                              {shippingCost > 0 ? `$${shippingCost.toFixed(2)}` : "Free"}
                            </p>
                          </div>
                          <Separator />
                          <div className="flex justify-between">
                            <p className="font-medium text-lg text-blackblack-100">Total</p>
                            <p className="font-bold text-lg text-blackblack-100">${cartTotal.toFixed(2)}</p>
                          </div>
                          
                          <div className="pt-4">
                            <Button 
                              variant="primary" 
                              className="w-full"
                              disabled={cart.length === 0}
                            >
                              Proceed to Checkout
                            </Button>
                          </div>
                          
                          {/* Promo code */}
                          <div className="pt-6">
                            <p className="text-sm font-medium text-blackblack-100 mb-2">Have a promo code?</p>
                            <div className="flex gap-2">
                              <Input placeholder="Enter code" />
                              <Button variant="outline">Apply</Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Shipping info */}
                    <Card className="rounded-xl shadow-light-theme-shadow-medium mt-6">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-light-themeprimarylight-blue rounded-full p-2">
                            <Truck className="h-5 w-5 text-light-themeprimaryblue" />
                          </div>
                          <div>
                            <p className="font-medium text-blackblack-100">Free Shipping</p>
                            <p className="text-sm text-blackblack-60">For orders over $100</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="bg-actionsuccess-light rounded-full p-2">
                            <CheckCircle className="h-5 w-5 text-actionsuccess" />
                          </div>
                          <div>
                            <p className="font-medium text-blackblack-100">Secure Checkout</p>
                            <p className="text-sm text-blackblack-60">100% secure payment</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              {/* Order Tracking Tab */}
              <TabsContent value="tracking">
                <div className="space-y-6">
                  <Card className="rounded-xl shadow-light-theme-shadow-medium">
                    <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                      <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                        Track Your Orders
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="relative mb-6">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
                        <Input
                          placeholder="Search by order ID or tracking number..."
                          className="pl-10"
                        />
                      </div>
                      
                      <div className="space-y-6">
                        {mockTrackingOrders.map((order) => (
                          <Card key={order.id} className="rounded-xl shadow-sm">
                            <CardContent className="p-6">
                              <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex items-center gap-4 flex-1">
                                  <div className="w-20 h-20 flex-shrink-0">
                                    <img 
                                      src={order.product.image} 
                                      alt={order.product.name}
                                      className="w-full h-full object-cover rounded-lg"
                                    />
                                  </div>
                                  <div>
                                    <p className="text-sm text-blackblack-60">Order {order.id}</p>
                                    <h3 className="font-medium text-blackblack-100 mt-1">{order.product.name}</h3>
                                    <div className="flex items-center gap-2 mt-2">
                                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(order.status)}`}>
                                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                      </span>
                                      <span className="text-sm text-blackblack-60">
                                        {order.date}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="flex flex-col gap-2">
                                  <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-blackblack-60" />
                                    <p className="text-sm text-blackblack-60">
                                      <span className="font-medium text-blackblack-100">Estimated Delivery:</span> {order.estimatedDelivery}
                                    </p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Package className="h-4 w-4 text-blackblack-60" />
                                    <p className="text-sm text-blackblack-60">
                                      <span className="font-medium text-blackblack-100">Tracking Number:</span> {order.trackingNumber}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="mt-6">
                                <div className="relative">
                                  <div className="absolute top-2 left-0 right-0 h-1 bg-blackblack-10 rounded-full">
                                    {order.status === "processing" && (
                                      <div className="absolute top-0 left-0 h-full w-1/3 bg-light-themeprimaryblue rounded-full" />
                                    )}
                                    {order.status === "shipped" && (
                                      <div className="absolute top-0 left-0 h-full w-2/3 bg-light-themeprimaryblue rounded-full" />
                                    )}
                                    {order.status === "delivered" && (
                                      <div className="absolute top-0 left-0 h-full w-full bg-actionsuccess rounded-full" />
                                    )}
                                  </div>
                                  
                                  <div className="flex justify-between pt-6">
                                    <div className="text-center">
                                      <div className={`mx-auto h-6 w-6 rounded-full flex items-center justify-center mb-2 ${order.status !== "cancelled" ? "bg-actionsuccess text-white" : "bg-blackblack-20 text-blackblack-60"}`}>
                                        <CheckCircle className="h-4 w-4" />
                                      </div>
                                      <p className="text-xs font-medium text-blackblack-100">Order Placed</p>
                                    </div>
                                    <div className="text-center">
                                      <div className={`mx-auto h-6 w-6 rounded-full flex items-center justify-center mb-2 ${(order.status === "processing" || order.status === "shipped" || order.status === "delivered") && order.status !== "cancelled" ? "bg-actionsuccess text-white" : "bg-blackblack-20 text-blackblack-60"}`}>
                                        <CheckCircle className="h-4 w-4" />
                                      </div>
                                      <p className="text-xs font-medium text-blackblack-100">Processing</p>
                                    </div>
                                    <div className="text-center">
                                      <div className={`mx-auto h-6 w-6 rounded-full flex items-center justify-center mb-2 ${(order.status === "shipped" || order.status === "delivered") && order.status !== "cancelled" ? "bg-actionsuccess text-white" : "bg-blackblack-20 text-blackblack-60"}`}>
                                        <CheckCircle className="h-4 w-4" />
                                      </div>
                                      <p className="text-xs font-medium text-blackblack-100">Shipped</p>
                                    </div>
                                    <div className="text-center">
                                      <div className={`mx-auto h-6 w-6 rounded-full flex items-center justify-center mb-2 ${order.status === "delivered" && order.status !== "cancelled" ? "bg-actionsuccess text-white" : "bg-blackblack-20 text-blackblack-60"}`}>
                                        <CheckCircle className="h-4 w-4" />
                                      </div>
                                      <p className="text-xs font-medium text-blackblack-100">Delivered</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="mt-6 flex justify-end">
                                <Button variant="outline">
                                  Track Package
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Categories Tab */}
              <TabsContent value="categories">
                <div className="space-y-6">
                  <Card className="rounded-xl shadow-light-theme-shadow-medium">
                    <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                      <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                        Product Categories
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mockCategories.map((category) => (
                          <Card key={category.id} className="rounded-xl shadow-sm hover:shadow-light-theme-shadow-medium transition-all cursor-pointer">
                            <CardContent className="p-6 flex items-center">
                              <div className="w-12 h-12 rounded-lg bg-light-themeprimarylight-blue flex items-center justify-center mr-4">
                                <img 
                                  src={category.image} 
                                  alt={category.name}
                                  className="w-6 h-6 object-contain"
                                />
                              </div>
                              <div>
                                <h3 className="font-medium text-blackblack-100">{category.name}</h3>
                                <p className="text-sm text-blackblack-60 mt-1">{category.count} products</p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Featured Categories */}
                  <Card className="rounded-xl shadow-light-theme-shadow-medium">
                    <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                      <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                        Featured Categories
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {mockCategories.slice(0, 2).map((category) => (
                          <Card key={`featured-${category.id}`} className="rounded-xl shadow-sm overflow-hidden">
                            <div className="h-40 bg-light-themeprimarylight-blue relative">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                  <h3 className="text-xl font-semibold text-blackblack-100">{category.name}</h3>
                                  <p className="text-blackblack-60 mt-1">{category.count} products</p>
                                  <Button variant="primary" className="mt-4">
                                    Browse {category.name}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Tags/Filters */}
                  <Card className="rounded-xl shadow-light-theme-shadow-medium">
                    <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                      <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                        Popular Tags
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-2">
                        {["Wireless", "Bluetooth", "Headphones", "Smartphones", "Laptop", "Gaming", "Audio", 
                          "Accessories", "Wearables", "Cameras", "4K", "Smart Home", "Tablets", "Chargers"].map((tag) => (
                          <Badge key={tag} variant="outline" className="py-1.5 px-3 cursor-pointer hover:bg-light-themeprimarylight-blue">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
};
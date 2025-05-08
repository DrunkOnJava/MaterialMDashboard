// Product data types for Blue Mountain Wicks candle shop

// Product category enum
export enum CandleCategory {
  SEASONAL = "Seasonal",
  SIGNATURE = "Signature",
  PREMIUM = "Premium",
  GIFT_SET = "Gift Set",
  SALE = "Sale"
}

// Scent family enum
export enum ScentFamily {
  FLORAL = "Floral",
  CITRUS = "Citrus",
  WOODY = "Woody",
  SPICY = "Spicy",
  SWEET = "Sweet",
  FRESH = "Fresh",
  HERBAL = "Herbal"
}

// Product size enum
export enum CandleSize {
  MINI = "Mini",
  SMALL = "Small",
  MEDIUM = "Medium",
  LARGE = "Large",
  EXTRA_LARGE = "Extra Large"
}

// Wax type enum
export enum WaxType {
  SOY = "Soy",
  BEESWAX = "Beeswax",
  COCONUT = "Coconut",
  PARAFFIN = "Paraffin",
  BLEND = "Blend"
}

// Burn time enum
export enum BurnTime {
  SHORT = "20-30 hours",
  MEDIUM = "40-60 hours",
  LONG = "70-90 hours",
  EXTRA_LONG = "100+ hours"
}

// Product status
export enum ProductStatus {
  ACTIVE = "Active",
  DRAFT = "Draft",
  OUT_OF_STOCK = "Out of Stock",
  DISCONTINUED = "Discontinued"
}

// Product interface
export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  salePrice?: number;
  description: string;
  shortDescription: string;
  category: CandleCategory;
  scentFamily: ScentFamily[];
  size: CandleSize;
  weight: string;
  waxType: WaxType;
  burnTime: BurnTime;
  images: string[];
  featuredImage: string;
  ingredients: string;
  isFeatured: boolean;
  isNew: boolean;
  dateAdded: string;
  dateModified: string;
  stockQuantity: number;
  reorderThreshold: number;
  status: ProductStatus;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  relatedProducts?: string[]; // IDs of related products
}

// Order status
export enum OrderStatus {
  NEW = "New",
  PROCESSING = "Processing",
  SHIPPED = "Shipped",
  DELIVERED = "Delivered",
  CANCELLED = "Cancelled",
  REFUNDED = "Refunded"
}

// Payment method
export enum PaymentMethod {
  CREDIT_CARD = "Credit Card",
  PAYPAL = "PayPal",
  BANK_TRANSFER = "Bank Transfer",
  GIFT_CARD = "Gift Card"
}

// Customer data
export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  dateRegistered: string;
  totalOrders: number;
  totalSpent: number;
}

// Order item
export interface OrderItem {
  productId: string;
  productName: string;
  productImage: string;
  sku: string;
  quantity: number;
  price: number;
  subtotal: number;
}

// Order data
export interface Order {
  id: string;
  orderNumber: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  paymentMethod: PaymentMethod;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  billingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  orderDate: string;
  status: OrderStatus;
  trackingNumber?: string;
  notes?: string;
  couponCode?: string;
}

// Sales summary statistics
export interface SalesSummary {
  today: {
    orders: number;
    revenue: number;
    units: number;
  };
  week: {
    orders: number;
    revenue: number;
    units: number;
    percentChange: number;
  };
  month: {
    orders: number;
    revenue: number;
    units: number;
    percentChange: number;
  };
  year: {
    orders: number;
    revenue: number;
    units: number;
    percentChange: number;
  };
  topSellingProducts: Array<{
    id: string;
    name: string;
    unitsSold: number;
    revenue: number;
  }>;
  recentOrders: Order[];
  lowStockProducts: Product[];
  salesByCategory: Array<{
    category: CandleCategory;
    sales: number;
    percentOfTotal: number;
  }>;
}
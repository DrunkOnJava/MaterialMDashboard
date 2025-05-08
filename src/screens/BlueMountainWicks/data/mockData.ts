import {
  Product,
  CandleCategory,
  ScentFamily,
  CandleSize,
  WaxType,
  BurnTime,
  ProductStatus,
  Order,
  OrderStatus,
  PaymentMethod,
  Customer,
  SalesSummary
} from '../models/types';

// Mock product data for Blue Mountain Wicks candles
export const mockProducts: Product[] = [
  {
    id: 'candle-001',
    name: 'Mountain Pine',
    sku: 'BMW-MP-L-01',
    price: 28.99,
    description: 'Transport yourself to a serene mountain forest with our Mountain Pine candle. This signature scent combines fresh pine, cedarwood, and a hint of citrus for a refreshing and grounding experience. Perfect for creating a cozy cabin atmosphere during any season.',
    shortDescription: 'Fresh pine & cedarwood scent with hints of citrus',
    category: CandleCategory.SIGNATURE,
    scentFamily: [ScentFamily.WOODY, ScentFamily.FRESH],
    size: CandleSize.LARGE,
    weight: '12 oz',
    waxType: WaxType.SOY,
    burnTime: BurnTime.MEDIUM,
    images: ['/group-15.png', '/group-16.png', '/group-17.png'],
    featuredImage: '/group-15.png',
    ingredients: 'Soy wax, essential oils, cotton wick, natural dyes',
    isFeatured: true,
    isNew: false,
    dateAdded: '2024-10-01',
    dateModified: '2025-01-15',
    stockQuantity: 45,
    reorderThreshold: 10,
    status: ProductStatus.ACTIVE,
    tags: ['pine', 'woody', 'signature', 'bestseller', 'forest']
  },
  {
    id: 'candle-002',
    name: 'Lavender Fields',
    sku: 'BMW-LF-M-01',
    price: 24.99,
    description: 'Our Lavender Fields candle captures the essence of a sun-warmed lavender field in full bloom. This calming scent blends French lavender with subtle notes of bergamot and vanilla for a soothing experience that helps relieve stress and promote relaxation.',
    shortDescription: 'Calming lavender with subtle bergamot and vanilla',
    category: CandleCategory.SIGNATURE,
    scentFamily: [ScentFamily.FLORAL, ScentFamily.HERBAL],
    size: CandleSize.MEDIUM,
    weight: '8 oz',
    waxType: WaxType.SOY,
    burnTime: BurnTime.MEDIUM,
    images: ['/group-16.png', '/group-17.png', '/group-18.png'],
    featuredImage: '/group-16.png',
    ingredients: 'Soy wax, essential oils, cotton wick, natural dyes',
    isFeatured: false,
    isNew: false,
    dateAdded: '2024-09-15',
    dateModified: '2025-01-15',
    stockQuantity: 32,
    reorderThreshold: 10,
    status: ProductStatus.ACTIVE,
    tags: ['lavender', 'floral', 'relaxation', 'calming', 'signature']
  },
  {
    id: 'candle-003',
    name: 'Autumn Harvest',
    sku: 'BMW-AH-L-01',
    price: 32.99,
    salePrice: 27.99,
    description: 'Celebrate the cozy feeling of fall with our Autumn Harvest candle. This seasonal favorite combines warm cinnamon, clove, and pumpkin with subtle vanilla undertones for a comforting atmosphere that evokes memories of freshly baked pies and crisp autumn days.',
    shortDescription: 'Warm spices with pumpkin and vanilla undertones',
    category: CandleCategory.SEASONAL,
    scentFamily: [ScentFamily.SPICY, ScentFamily.SWEET],
    size: CandleSize.LARGE,
    weight: '12 oz',
    waxType: WaxType.SOY,
    burnTime: BurnTime.MEDIUM,
    images: ['/group-17.png', '/group-18.png', '/group-19.png'],
    featuredImage: '/group-17.png',
    ingredients: 'Soy wax, essential oils, cotton wick, natural dyes',
    isFeatured: true,
    isNew: false,
    dateAdded: '2024-09-01',
    dateModified: '2025-01-10',
    stockQuantity: 27,
    reorderThreshold: 15,
    status: ProductStatus.ACTIVE,
    tags: ['autumn', 'fall', 'pumpkin', 'spice', 'seasonal', 'sale']
  },
  {
    id: 'candle-004',
    name: 'Winter Wonderland',
    sku: 'BMW-WW-L-01',
    price: 32.99,
    description: 'Our Winter Wonderland candle brings the magical scent of a snowy forest indoors. Crisp pine and cedar blend with warm vanilla and a hint of peppermint to create a festive atmosphere perfect for holiday gatherings or cozy winter evenings by the fire.',
    shortDescription: 'Fresh snow, pine, and mint with warm vanilla',
    category: CandleCategory.SEASONAL,
    scentFamily: [ScentFamily.WOODY, ScentFamily.FRESH, ScentFamily.SWEET],
    size: CandleSize.LARGE,
    weight: '12 oz',
    waxType: WaxType.SOY,
    burnTime: BurnTime.MEDIUM,
    images: ['/group-18.png', '/group-19.png', '/group-20.png'],
    featuredImage: '/group-18.png',
    ingredients: 'Soy wax, essential oils, cotton wick, natural dyes',
    isFeatured: false,
    isNew: true,
    dateAdded: '2025-01-05',
    dateModified: '2025-01-05',
    stockQuantity: 42,
    reorderThreshold: 15,
    status: ProductStatus.ACTIVE,
    tags: ['winter', 'snow', 'holiday', 'pine', 'mint', 'seasonal', 'new']
  },
  {
    id: 'candle-005',
    name: 'Citrus Grove',
    sku: 'BMW-CG-M-01',
    price: 24.99,
    description: 'Brighten any space with our refreshing Citrus Grove candle. This invigorating scent combines zesty lemon, sweet orange, and grapefruit with subtle herbal notes for an energizing experience that lifts your mood and freshens your home.',
    shortDescription: 'Bright blend of lemon, orange, and grapefruit',
    category: CandleCategory.SIGNATURE,
    scentFamily: [ScentFamily.CITRUS, ScentFamily.FRESH],
    size: CandleSize.MEDIUM,
    weight: '8 oz',
    waxType: WaxType.SOY,
    burnTime: BurnTime.MEDIUM,
    images: ['/group-19.png', '/group-20.png', '/group-21.png'],
    featuredImage: '/group-19.png',
    ingredients: 'Soy wax, essential oils, cotton wick, natural dyes',
    isFeatured: false,
    isNew: false,
    dateAdded: '2024-08-15',
    dateModified: '2024-12-20',
    stockQuantity: 38,
    reorderThreshold: 10,
    status: ProductStatus.ACTIVE,
    tags: ['citrus', 'fresh', 'energizing', 'bright', 'signature']
  },
  {
    id: 'candle-006',
    name: 'Vanilla Bean',
    sku: 'BMW-VB-S-01',
    price: 16.99,
    description: 'Our Vanilla Bean candle offers a timeless, comforting scent perfect for any room. Rich Madagascan vanilla blends with warm amber and a hint of caramel for a sweet, soothing fragrance that creates a welcoming atmosphere in your home.',
    shortDescription: 'Rich vanilla with warm amber and caramel notes',
    category: CandleCategory.SIGNATURE,
    scentFamily: [ScentFamily.SWEET],
    size: CandleSize.SMALL,
    weight: '4 oz',
    waxType: WaxType.SOY,
    burnTime: BurnTime.SHORT,
    images: ['/group-20.png', '/group-21.png', '/group-22.png'],
    featuredImage: '/group-20.png',
    ingredients: 'Soy wax, essential oils, cotton wick, natural dyes',
    isFeatured: false,
    isNew: false,
    dateAdded: '2024-07-10',
    dateModified: '2024-12-15',
    stockQuantity: 53,
    reorderThreshold: 15,
    status: ProductStatus.ACTIVE,
    tags: ['vanilla', 'sweet', 'comforting', 'signature', 'classic']
  },
  {
    id: 'candle-007',
    name: 'Summer Breeze',
    sku: 'BMW-SB-L-01',
    price: 28.99,
    description: 'Capture the essence of a perfect summer day with our Summer Breeze candle. This light, refreshing scent combines sea salt, coconut, and fresh linen with subtle floral notes for an uplifting experience that brings the carefree feeling of summer indoors.',
    shortDescription: 'Sea salt and coconut with fresh linen notes',
    category: CandleCategory.SEASONAL,
    scentFamily: [ScentFamily.FRESH, ScentFamily.FLORAL],
    size: CandleSize.LARGE,
    weight: '12 oz',
    waxType: WaxType.SOY,
    burnTime: BurnTime.MEDIUM,
    images: ['/group-21.png', '/group-22.png', '/group-23.png'],
    featuredImage: '/group-21.png',
    ingredients: 'Soy wax, essential oils, cotton wick, natural dyes',
    isFeatured: false,
    isNew: false,
    dateAdded: '2024-05-15',
    dateModified: '2024-12-10',
    stockQuantity: 0,
    reorderThreshold: 15,
    status: ProductStatus.OUT_OF_STOCK,
    tags: ['summer', 'beach', 'coconut', 'fresh', 'seasonal']
  },
  {
    id: 'candle-008',
    name: 'Midnight Jasmine',
    sku: 'BMW-MJ-M-01',
    price: 26.99,
    description: 'Our Midnight Jasmine candle envelops your space in an elegant, intoxicating fragrance. Blooming jasmine is complemented by subtle notes of gardenia and rose, creating a sophisticated floral scent that transforms your home into a fragrant garden under the moonlight.',
    shortDescription: 'Intoxicating jasmine with gardenia and rose',
    category: CandleCategory.PREMIUM,
    scentFamily: [ScentFamily.FLORAL],
    size: CandleSize.MEDIUM,
    weight: '8 oz',
    waxType: WaxType.BEESWAX,
    burnTime: BurnTime.MEDIUM,
    images: ['/group-22.png', '/group-23.png', '/group-24.png'],
    featuredImage: '/group-22.png',
    ingredients: 'Beeswax, essential oils, cotton wick, natural dyes',
    isFeatured: true,
    isNew: false,
    dateAdded: '2024-08-01',
    dateModified: '2024-12-05',
    stockQuantity: 29,
    reorderThreshold: 10,
    status: ProductStatus.ACTIVE,
    tags: ['jasmine', 'floral', 'elegant', 'premium', 'sophisticated']
  },
  {
    id: 'candle-009',
    name: 'Blue Mountain Collection',
    sku: 'BMW-BMC-GS-01',
    price: 79.99,
    salePrice: 64.99,
    description: 'Experience our bestselling scents with the Blue Mountain Collection gift set. This beautiful package includes three 4oz candles: Mountain Pine, Lavender Fields, and Vanilla Bean. Packaged in a premium gift box, it\'s the perfect way to experience our signature scents or give the gift of Blue Mountain Wicks to someone special.',
    shortDescription: 'Gift set of three 4oz bestselling candles',
    category: CandleCategory.GIFT_SET,
    scentFamily: [ScentFamily.WOODY, ScentFamily.FLORAL, ScentFamily.SWEET],
    size: CandleSize.SMALL,
    weight: '3x4 oz',
    waxType: WaxType.SOY,
    burnTime: BurnTime.SHORT,
    images: ['/group-23.png', '/group-24.png', '/group-25.png'],
    featuredImage: '/group-23.png',
    ingredients: 'Soy wax, essential oils, cotton wick, natural dyes',
    isFeatured: true,
    isNew: false,
    dateAdded: '2024-09-20',
    dateModified: '2025-01-10',
    stockQuantity: 18,
    reorderThreshold: 5,
    status: ProductStatus.ACTIVE,
    tags: ['gift set', 'collection', 'bestsellers', 'gift', 'sale']
  },
  {
    id: 'candle-010',
    name: 'Wild Berry',
    sku: 'BMW-WB-M-01',
    price: 24.99,
    description: 'Our Wild Berry candle brings the sweet scent of summer berries to your home year-round. This vibrant fragrance combines ripe blackberry, raspberry, and strawberry with subtle vanilla undertones for a fruity, sweet scent that brightens any room.',
    shortDescription: 'Sweet blend of blackberry, raspberry, and strawberry',
    category: CandleCategory.SIGNATURE,
    scentFamily: [ScentFamily.SWEET, ScentFamily.FRUITY],
    size: CandleSize.MEDIUM,
    weight: '8 oz',
    waxType: WaxType.SOY,
    burnTime: BurnTime.MEDIUM,
    images: ['/group-24.png', '/group-25.png', '/group-26.png'],
    featuredImage: '/group-24.png',
    ingredients: 'Soy wax, essential oils, cotton wick, natural dyes',
    isFeatured: false,
    isNew: true,
    dateAdded: '2025-01-10',
    dateModified: '2025-01-10',
    stockQuantity: 40,
    reorderThreshold: 10,
    status: ProductStatus.ACTIVE,
    tags: ['berry', 'fruity', 'sweet', 'signature', 'new']
  },
  {
    id: 'candle-011',
    name: 'Eucalyptus Mint',
    sku: 'BMW-EM-L-01',
    price: 28.99,
    salePrice: 23.99,
    description: 'Refresh your space with our invigorating Eucalyptus Mint candle. This revitalizing scent combines fresh eucalyptus with cool spearmint and subtle hints of sage for a clean, energizing experience that helps clear your mind and refresh your home.',
    shortDescription: 'Revitalizing eucalyptus with cool mint and sage',
    category: CandleCategory.SIGNATURE,
    scentFamily: [ScentFamily.FRESH, ScentFamily.HERBAL],
    size: CandleSize.LARGE,
    weight: '12 oz',
    waxType: WaxType.SOY,
    burnTime: BurnTime.MEDIUM,
    images: ['/group-25.png', '/group-26.png', '/group-27.png'],
    featuredImage: '/group-25.png',
    ingredients: 'Soy wax, essential oils, cotton wick, natural dyes',
    isFeatured: false,
    isNew: false,
    dateAdded: '2024-10-15',
    dateModified: '2025-01-15',
    stockQuantity: 22,
    reorderThreshold: 15,
    status: ProductStatus.ACTIVE,
    tags: ['eucalyptus', 'mint', 'fresh', 'energizing', 'signature', 'sale']
  },
  {
    id: 'candle-012',
    name: 'Sandalwood & Amber',
    sku: 'BMW-SA-XL-01',
    price: 36.99,
    description: 'Our Sandalwood & Amber candle creates a warm, sophisticated atmosphere in any space. This premium blend combines rich sandalwood with warm amber, a hint of musk, and subtle spice notes for a complex, elegant fragrance that transforms your home into a luxurious retreat.',
    shortDescription: 'Rich sandalwood with warm amber and musk',
    category: CandleCategory.PREMIUM,
    scentFamily: [ScentFamily.WOODY, ScentFamily.SPICY],
    size: CandleSize.EXTRA_LARGE,
    weight: '16 oz',
    waxType: WaxType.COCONUT,
    burnTime: BurnTime.LONG,
    images: ['/group-26.png', '/group-27.png', '/group-28.png'],
    featuredImage: '/group-26.png',
    ingredients: 'Coconut wax, essential oils, cotton wick, natural dyes',
    isFeatured: true,
    isNew: false,
    dateAdded: '2024-11-01',
    dateModified: '2025-01-05',
    stockQuantity: 8,
    reorderThreshold: 5,
    status: ProductStatus.ACTIVE,
    tags: ['sandalwood', 'amber', 'woody', 'premium', 'luxury']
  }
];

// Mock customer data
export const mockCustomers: Customer[] = [
  {
    id: 'cust-001',
    firstName: 'Emma',
    lastName: 'Thompson',
    email: 'emma.thompson@example.com',
    phone: '(555) 123-4567',
    address: {
      street: '123 Main St',
      city: 'Portland',
      state: 'OR',
      zipCode: '97201',
      country: 'USA'
    },
    dateRegistered: '2024-06-15',
    totalOrders: 6,
    totalSpent: 237.94
  },
  {
    id: 'cust-002',
    firstName: 'James',
    lastName: 'Wilson',
    email: 'james.wilson@example.com',
    phone: '(555) 234-5678',
    address: {
      street: '456 Oak Ave',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      country: 'USA'
    },
    dateRegistered: '2024-07-22',
    totalOrders: 3,
    totalSpent: 142.97
  },
  {
    id: 'cust-003',
    firstName: 'Sophia',
    lastName: 'Garcia',
    email: 'sophia.garcia@example.com',
    phone: '(555) 345-6789',
    address: {
      street: '789 Pine St',
      city: 'Denver',
      state: 'CO',
      zipCode: '80202',
      country: 'USA'
    },
    dateRegistered: '2024-08-10',
    totalOrders: 4,
    totalSpent: 189.96
  },
  {
    id: 'cust-004',
    firstName: 'Michael',
    lastName: 'Brown',
    email: 'michael.brown@example.com',
    phone: '(555) 456-7890',
    address: {
      street: '321 Elm St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
      country: 'USA'
    },
    dateRegistered: '2024-09-05',
    totalOrders: 2,
    totalSpent: 107.98
  },
  {
    id: 'cust-005',
    firstName: 'Olivia',
    lastName: 'Johnson',
    email: 'olivia.johnson@example.com',
    phone: '(555) 567-8901',
    address: {
      street: '654 Maple Ave',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60605',
      country: 'USA'
    },
    dateRegistered: '2024-10-18',
    totalOrders: 1,
    totalSpent: 79.99
  }
];

// Mock order data
export const mockOrders: Order[] = [
  {
    id: 'order-001',
    orderNumber: 'BMW-10058',
    customerId: 'cust-001',
    customerName: 'Emma Thompson',
    customerEmail: 'emma.thompson@example.com',
    items: [
      {
        productId: 'candle-001',
        productName: 'Mountain Pine',
        productImage: '/group-15.png',
        sku: 'BMW-MP-L-01',
        quantity: 1,
        price: 28.99,
        subtotal: 28.99
      },
      {
        productId: 'candle-005',
        productName: 'Citrus Grove',
        productImage: '/group-19.png',
        sku: 'BMW-CG-M-01',
        quantity: 1,
        price: 24.99,
        subtotal: 24.99
      }
    ],
    subtotal: 53.98,
    tax: 4.32,
    shipping: 5.99,
    discount: 0,
    total: 64.29,
    paymentMethod: PaymentMethod.CREDIT_CARD,
    shippingAddress: {
      street: '123 Main St',
      city: 'Portland',
      state: 'OR',
      zipCode: '97201',
      country: 'USA'
    },
    billingAddress: {
      street: '123 Main St',
      city: 'Portland',
      state: 'OR',
      zipCode: '97201',
      country: 'USA'
    },
    orderDate: '2025-01-15',
    status: OrderStatus.NEW,
    notes: 'Customer requested gift wrapping'
  },
  {
    id: 'order-002',
    orderNumber: 'BMW-10057',
    customerId: 'cust-002',
    customerName: 'James Wilson',
    customerEmail: 'james.wilson@example.com',
    items: [
      {
        productId: 'candle-009',
        productName: 'Blue Mountain Collection',
        productImage: '/group-23.png',
        sku: 'BMW-BMC-GS-01',
        quantity: 1,
        price: 64.99,
        subtotal: 64.99
      }
    ],
    subtotal: 64.99,
    tax: 5.20,
    shipping: 0,
    discount: 0,
    total: 70.19,
    paymentMethod: PaymentMethod.PAYPAL,
    shippingAddress: {
      street: '456 Oak Ave',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      country: 'USA'
    },
    billingAddress: {
      street: '456 Oak Ave',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      country: 'USA'
    },
    orderDate: '2025-01-14',
    status: OrderStatus.PROCESSING
  },
  {
    id: 'order-003',
    orderNumber: 'BMW-10056',
    customerId: 'cust-003',
    customerName: 'Sophia Garcia',
    customerEmail: 'sophia.garcia@example.com',
    items: [
      {
        productId: 'candle-012',
        productName: 'Sandalwood & Amber',
        productImage: '/group-26.png',
        sku: 'BMW-SA-XL-01',
        quantity: 1,
        price: 36.99,
        subtotal: 36.99
      },
      {
        productId: 'candle-008',
        productName: 'Midnight Jasmine',
        productImage: '/group-22.png',
        sku: 'BMW-MJ-M-01',
        quantity: 1,
        price: 26.99,
        subtotal: 26.99
      },
      {
        productId: 'candle-011',
        productName: 'Eucalyptus Mint',
        productImage: '/group-25.png',
        sku: 'BMW-EM-L-01',
        quantity: 1,
        price: 23.99,
        subtotal: 23.99
      }
    ],
    subtotal: 87.97,
    tax: 7.04,
    shipping: 0,
    discount: 5.00,
    total: 90.01,
    paymentMethod: PaymentMethod.CREDIT_CARD,
    shippingAddress: {
      street: '789 Pine St',
      city: 'Denver',
      state: 'CO',
      zipCode: '80202',
      country: 'USA'
    },
    billingAddress: {
      street: '789 Pine St',
      city: 'Denver',
      state: 'CO',
      zipCode: '80202',
      country: 'USA'
    },
    orderDate: '2025-01-10',
    status: OrderStatus.SHIPPED,
    trackingNumber: '9405511899560XXXX1234',
    couponCode: 'WELCOME5'
  },
  {
    id: 'order-004',
    orderNumber: 'BMW-10055',
    customerId: 'cust-004',
    customerName: 'Michael Brown',
    customerEmail: 'michael.brown@example.com',
    items: [
      {
        productId: 'candle-003',
        productName: 'Autumn Harvest',
        productImage: '/group-17.png',
        sku: 'BMW-AH-L-01',
        quantity: 1,
        price: 27.99,
        subtotal: 27.99
      },
      {
        productId: 'candle-002',
        productName: 'Lavender Fields',
        productImage: '/group-16.png',
        sku: 'BMW-LF-M-01',
        quantity: 1,
        price: 24.99,
        subtotal: 24.99
      }
    ],
    subtotal: 52.98,
    tax: 4.24,
    shipping: 5.99,
    discount: 0,
    total: 63.21,
    paymentMethod: PaymentMethod.CREDIT_CARD,
    shippingAddress: {
      street: '321 Elm St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
      country: 'USA'
    },
    billingAddress: {
      street: '321 Elm St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
      country: 'USA'
    },
    orderDate: '2025-01-05',
    status: OrderStatus.DELIVERED,
    trackingNumber: '9405511899560XXXX5678'
  },
  {
    id: 'order-005',
    orderNumber: 'BMW-10054',
    customerId: 'cust-005',
    customerName: 'Olivia Johnson',
    customerEmail: 'olivia.johnson@example.com',
    items: [
      {
        productId: 'candle-009',
        productName: 'Blue Mountain Collection',
        productImage: '/group-23.png',
        sku: 'BMW-BMC-GS-01',
        quantity: 1,
        price: 64.99,
        subtotal: 64.99
      }
    ],
    subtotal: 64.99,
    tax: 5.20,
    shipping: 5.99,
    discount: 0,
    total: 76.18,
    paymentMethod: PaymentMethod.CREDIT_CARD,
    shippingAddress: {
      street: '654 Maple Ave',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60605',
      country: 'USA'
    },
    billingAddress: {
      street: '654 Maple Ave',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60605',
      country: 'USA'
    },
    orderDate: '2025-01-02',
    status: OrderStatus.DELIVERED,
    trackingNumber: '9405511899560XXXX9101'
  }
];

// Mock sales summary data
export const mockSalesSummary: SalesSummary = {
  today: {
    orders: 8,
    revenue: 416.32,
    units: 12
  },
  week: {
    orders: 42,
    revenue: 2347.89,
    units: 68,
    percentChange: 12.5
  },
  month: {
    orders: 167,
    revenue: 9842.56,
    units: 284,
    percentChange: 24.3
  },
  year: {
    orders: 1893,
    revenue: 108574.29,
    units: 3241,
    percentChange: 31.8
  },
  topSellingProducts: [
    {
      id: 'candle-009',
      name: 'Blue Mountain Collection',
      unitsSold: 89,
      revenue: 5784.11
    },
    {
      id: 'candle-001',
      name: 'Mountain Pine',
      unitsSold: 76,
      revenue: 2203.24
    },
    {
      id: 'candle-003',
      name: 'Autumn Harvest',
      unitsSold: 72,
      revenue: 2015.28
    },
    {
      id: 'candle-012',
      name: 'Sandalwood & Amber',
      unitsSold: 58,
      revenue: 2145.42
    }
  ],
  recentOrders: mockOrders.slice(0, 3),
  lowStockProducts: mockProducts.filter(p => p.stockQuantity <= p.reorderThreshold),
  salesByCategory: [
    {
      category: CandleCategory.SIGNATURE,
      sales: 42574.92,
      percentOfTotal: 39.2
    },
    {
      category: CandleCategory.PREMIUM,
      sales: 27465.12,
      percentOfTotal: 25.3
    },
    {
      category: CandleCategory.SEASONAL,
      sales: 23124.78,
      percentOfTotal: 21.3
    },
    {
      category: CandleCategory.GIFT_SET,
      sales: 15409.47,
      percentOfTotal: 14.2
    }
  ]
};
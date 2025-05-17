import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../../components/ui/card';
import { Input } from '../../../../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../components/ui/select';
import { Button } from '../../../../components/ui/button';
import {
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  MoreHorizontal,
  AlertTriangle,
  Package,
  PackageCheck,
  BarChart2,
  PlusCircle,
  Tag,
  RefreshCw,
} from 'lucide-react';
import { useToast } from '../../../../hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '../../../../components/ui/dialog';
import { Switch } from '../../../../components/ui/switch';

// Define product status and category types
type ProductStatus = 'in-stock' | 'low-stock' | 'out-of-stock';
type ProductCategory = 'electronics' | 'clothing' | 'home' | 'beauty' | 'sports';

// Define product interface
interface Product {
  id: string;
  name: string;
  sku: string;
  image?: string;
  price: string;
  stock: number;
  status: ProductStatus;
  category: ProductCategory;
  lastUpdated: string;
}

// Mock products data
const mockProducts: Product[] = [
  {
    id: 'P001',
    name: 'Wireless Headphones XR200',
    sku: 'SKU-1001',
    image:
      'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=150',
    price: '$249.99',
    stock: 45,
    status: 'in-stock',
    category: 'electronics',
    lastUpdated: '2025-03-10',
  },
  {
    id: 'P002',
    name: 'Smart Watch Series 5',
    sku: 'SKU-1002',
    image:
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=150',
    price: '$128.50',
    stock: 28,
    status: 'in-stock',
    category: 'electronics',
    lastUpdated: '2025-03-12',
  },
  {
    id: 'P003',
    name: 'Premium Laptop Pro',
    sku: 'SKU-1003',
    image:
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=150',
    price: '$1,249.99',
    stock: 12,
    status: 'low-stock',
    category: 'electronics',
    lastUpdated: '2025-03-05',
  },
  {
    id: 'P004',
    name: 'Ultra HD 4K TV 55"',
    sku: 'SKU-1004',
    image:
      'https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=150',
    price: '$899.99',
    stock: 8,
    status: 'low-stock',
    category: 'electronics',
    lastUpdated: '2025-03-08',
  },
  {
    id: 'P005',
    name: "Casual Men's T-Shirt Pack",
    sku: 'SKU-2001',
    image:
      'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=150',
    price: '$39.99',
    stock: 75,
    status: 'in-stock',
    category: 'clothing',
    lastUpdated: '2025-03-15',
  },
  {
    id: 'P006',
    name: "Women's Yoga Pants",
    sku: 'SKU-2002',
    image:
      'https://images.pexels.com/photos/3756165/pexels-photo-3756165.jpeg?auto=compress&cs=tinysrgb&w=150',
    price: '$54.99',
    stock: 0,
    status: 'out-of-stock',
    category: 'clothing',
    lastUpdated: '2025-02-28',
  },
  {
    id: 'P007',
    name: 'Stainless Steel Cookware Set',
    sku: 'SKU-3001',
    image:
      'https://images.pexels.com/photos/262896/pexels-photo-262896.jpeg?auto=compress&cs=tinysrgb&w=150',
    price: '$199.99',
    stock: 15,
    status: 'in-stock',
    category: 'home',
    lastUpdated: '2025-03-01',
  },
  {
    id: 'P008',
    name: 'Luxury Bed Sheet Set',
    sku: 'SKU-3002',
    image:
      'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=150',
    price: '$79.99',
    stock: 5,
    status: 'low-stock',
    category: 'home',
    lastUpdated: '2025-03-14',
  },
];

// Mock product categories data
const mockCategories = [
  { id: 'electronics', name: 'Electronics', count: 154 },
  { id: 'clothing', name: 'Clothing', count: 89 },
  { id: 'home', name: 'Home & Kitchen', count: 76 },
  { id: 'beauty', name: 'Beauty & Personal Care', count: 53 },
  { id: 'sports', name: 'Sports & Outdoors', count: 41 },
];

export const InventoryManagement = (): JSX.Element => {
  // State hooks
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isUpdateStockOpen, setIsUpdateStockOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [newStockLevel, setNewStockLevel] = useState<number>(0);
  const [isLowStockAlerts, setIsLowStockAlerts] = useState(true);
  const [isAutoReorder, setIsAutoReorder] = useState(false);

  const { toast } = useToast();

  // Filter products based on search term, category, and status filters
  const filteredProducts = products.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || product.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Handle stock update
  const handleUpdateStock = () => {
    if (!selectedProduct || newStockLevel < 0) return;

    const updatedProducts = products.map(product => {
      if (product.id === selectedProduct.id) {
        const newStatus: ProductStatus =
          newStockLevel === 0 ? 'out-of-stock' : newStockLevel <= 10 ? 'low-stock' : 'in-stock';

        return {
          ...product,
          stock: newStockLevel,
          status: newStatus,
          lastUpdated: new Date().toISOString().split('T')[0],
        };
      }
      return product;
    });

    setProducts(updatedProducts);
    setIsUpdateStockOpen(false);

    toast({
      title: 'Stock updated',
      description: `Stock level for ${selectedProduct.name} has been updated to ${newStockLevel} units.`,
      variant: 'default',
    });
  };

  // Open stock update dialog
  const openUpdateStockDialog = (product: Product) => {
    setSelectedProduct(product);
    setNewStockLevel(product.stock);
    setIsUpdateStockOpen(true);
  };

  // Get status badge styling based on status
  const getStatusBadgeClass = (status: ProductStatus) => {
    switch (status) {
      case 'in-stock':
        return 'bg-actionsuccess-light text-actionsuccess';
      case 'low-stock':
        return 'bg-actionalert-light text-actionalert';
      case 'out-of-stock':
        return 'bg-actionwarning-light text-actionwarning';
      default:
        return 'bg-blackblack-10 text-blackblack-100';
    }
  };

  // Handle toggle for low stock alerts
  const handleToggleLowStockAlerts = () => {
    setIsLowStockAlerts(!isLowStockAlerts);

    toast({
      title: `Low Stock Alerts ${!isLowStockAlerts ? 'Enabled' : 'Disabled'}`,
      description: `You will ${!isLowStockAlerts ? 'now' : 'no longer'} receive alerts when products are running low.`,
      variant: 'default',
    });
  };

  // Handle toggle for auto reordering
  const handleToggleAutoReorder = () => {
    setIsAutoReorder(!isAutoReorder);

    toast({
      title: `Auto Reordering ${!isAutoReorder ? 'Enabled' : 'Disabled'}`,
      description: `System will ${!isAutoReorder ? 'now' : 'no longer'} automatically place orders for low stock items.`,
      variant: 'default',
    });
  };

  return (
    <div className="space-y-6">
      {/* Inventory stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="rounded-xl shadow-light-theme-shadow-medium">
          <CardContent className="flex p-6 items-start">
            <div className="flex-1">
              <p className="text-blackblack-60 text-sm font-medium mb-2">Total Products</p>
              <p className="text-blackblack-100 text-2xl font-semibold">248</p>
            </div>
            <div className="bg-light-themeprimarylight-blue p-3 rounded-lg">
              <Package className="h-6 w-6 text-light-themeprimaryblue" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-light-theme-shadow-medium">
          <CardContent className="flex p-6 items-start">
            <div className="flex-1">
              <p className="text-blackblack-60 text-sm font-medium mb-2">In Stock</p>
              <p className="text-blackblack-100 text-2xl font-semibold">189</p>
            </div>
            <div className="bg-actionsuccess-light p-3 rounded-lg">
              <PackageCheck className="h-6 w-6 text-actionsuccess" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-light-theme-shadow-medium">
          <CardContent className="flex p-6 items-start">
            <div className="flex-1">
              <p className="text-blackblack-60 text-sm font-medium mb-2">Low Stock</p>
              <p className="text-blackblack-100 text-2xl font-semibold">42</p>
            </div>
            <div className="bg-actionalert-light p-3 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-actionalert" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-light-theme-shadow-medium">
          <CardContent className="flex p-6 items-start">
            <div className="flex-1">
              <p className="text-blackblack-60 text-sm font-medium mb-2">Out of Stock</p>
              <p className="text-blackblack-100 text-2xl font-semibold">17</p>
            </div>
            <div className="bg-actionwarning-light p-3 rounded-lg">
              <Package className="h-6 w-6 text-actionwarning" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Product search and filters */}
      <Card className="rounded-xl shadow-light-theme-shadow-medium">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative w-full md:w-auto flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <Tag className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="home">Home & Kitchen</SelectItem>
                  <SelectItem value="beauty">Beauty</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Stock Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="in-stock">In Stock</SelectItem>
                  <SelectItem value="low-stock">Low Stock</SelectItem>
                  <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex gap-2 w-full md:w-auto">
                <Button variant="outline" className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Refresh
                </Button>

                <Button variant="primary" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Product
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="rounded-xl shadow-light-theme-shadow-medium">
            <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
              <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100 flex justify-between items-center">
                <span>Categories</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul>
                <li
                  className={`px-6 py-3 border-b border-[#111c2d1a] cursor-pointer ${categoryFilter === 'all' ? 'bg-light-themeprimarylight-blue' : 'hover:bg-surfaceslightgray-10'}`}
                  onClick={() => setCategoryFilter('all')}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-blackblack-100">All Categories</span>
                    <span className="text-blackblack-60 text-sm">248</span>
                  </div>
                </li>
                {mockCategories.map(category => (
                  <li
                    key={category.id}
                    className={`px-6 py-3 border-b border-[#111c2d1a] last:border-b-0 cursor-pointer ${categoryFilter === category.id ? 'bg-light-themeprimarylight-blue' : 'hover:bg-surfaceslightgray-10'}`}
                    onClick={() => setCategoryFilter(category.id as any)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-blackblack-100">{category.name}</span>
                      <span className="text-blackblack-60 text-sm">{category.count}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-xl shadow-light-theme-shadow-medium">
            <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
              <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                Inventory Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-blackblack-100">Low Stock Alerts</p>
                  <p className="text-sm text-blackblack-60">Get notified when inventory is low</p>
                </div>
                <Switch checked={isLowStockAlerts} onCheckedChange={handleToggleLowStockAlerts} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-blackblack-100">Auto Reorder</p>
                  <p className="text-sm text-blackblack-60">
                    Automatically place orders for low stock
                  </p>
                </div>
                <Switch checked={isAutoReorder} onCheckedChange={handleToggleAutoReorder} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products table */}
        <Card className="lg:col-span-3 rounded-xl shadow-light-theme-shadow-medium">
          <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
            <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
              Products ({filteredProducts.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-surfaceslightgray-10 border-b border-[#111c2d1a]">
                  <tr>
                    <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">
                      Product
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">
                      SKU
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">
                      Price
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">
                      Stock
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">
                      Status
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-medium text-blackblack-60">
                      Last Updated
                    </th>
                    <th className="py-3 px-6 text-right text-sm font-medium text-blackblack-60">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map(product => (
                    <tr
                      key={product.id}
                      className="border-b border-[#111c2d1a] hover:bg-surfaceslightgray-10"
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-surfaceslightgray-10 rounded-md flex items-center justify-center overflow-hidden">
                            {product.image ? (
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <Package className="h-5 w-5 text-blackblack-60" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-blackblack-100">{product.name}</p>
                            <p className="text-xs text-blackblack-60 capitalize">
                              {product.category}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-blackblack-80">{product.sku}</td>
                      <td className="py-4 px-6 font-medium text-blackblack-100">{product.price}</td>
                      <td className="py-4 px-6 text-blackblack-80">{product.stock} units</td>
                      <td className="py-4 px-6">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(product.status)}`}
                        >
                          {product.status === 'in-stock'
                            ? 'In Stock'
                            : product.status === 'low-stock'
                              ? 'Low Stock'
                              : 'Out of Stock'}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-blackblack-60 text-sm">
                        {product.lastUpdated}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => openUpdateStockDialog(product)}
                          >
                            <BarChart2 className="h-4 w-4 text-blackblack-60" />
                          </Button>

                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4 text-blackblack-60" />
                          </Button>

                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4 text-actionwarning" />
                          </Button>

                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4 text-blackblack-60" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {filteredProducts.length === 0 && (
                    <tr>
                      <td colSpan={7} className="py-6 text-center text-blackblack-60">
                        No products found matching your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Update stock dialog */}
      <Dialog open={isUpdateStockOpen} onOpenChange={setIsUpdateStockOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Update Stock Level</DialogTitle>
            <DialogDescription>{selectedProduct?.name}</DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-surfaceslightgray-10 rounded-md flex items-center justify-center overflow-hidden">
                {selectedProduct?.image ? (
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Package className="h-6 w-6 text-blackblack-60" />
                )}
              </div>
              <div>
                <p className="font-medium text-blackblack-100">{selectedProduct?.name}</p>
                <p className="text-xs text-blackblack-60">
                  Current stock: {selectedProduct?.stock} units
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-blackblack-100">New Stock Level</label>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  className="rounded-r-none"
                  onClick={() => setNewStockLevel(prev => Math.max(0, prev - 1))}
                >
                  -
                </Button>
                <Input
                  type="number"
                  min="0"
                  className="rounded-none text-center"
                  value={newStockLevel}
                  onChange={e => setNewStockLevel(Math.max(0, parseInt(e.target.value) || 0))}
                />
                <Button
                  variant="outline"
                  className="rounded-l-none"
                  onClick={() => setNewStockLevel(prev => prev + 1)}
                >
                  +
                </Button>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsUpdateStockOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleUpdateStock}>
              Update Stock
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

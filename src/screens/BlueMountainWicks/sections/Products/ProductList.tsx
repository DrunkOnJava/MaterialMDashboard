import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../../../../components/ui/alert-dialog";
import { useBlueMountainWicks } from "../../context/BlueMountainWicksContext";
import { 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye, 
  Plus, 
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  XCircle,
  Loader2,
  RefreshCw
} from "lucide-react";

import { Product, ProductStatus, CandleCategory } from "../../models/types";

interface ProductListProps {
  products: Product[];
  onViewProduct: (productId: string) => void;
  onAddProduct: () => void;
  onDeleteProduct: (productId: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ 
  products, 
  onViewProduct, 
  onAddProduct, 
  onDeleteProduct 
}) => {
  const { 
    state, 
    dispatch, 
    deleteProduct,
    getFilteredProducts,
    getPaginatedProducts,
    getTotalPages,
    clearFilters
  } = useBlueMountainWicks();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Update the global state with local filters
  useEffect(() => {
    dispatch({ type: "SET_SEARCH_TERM", payload: searchTerm });
    dispatch({ type: "SET_CATEGORY_FILTER", payload: categoryFilter });
    dispatch({ type: "SET_STATUS_FILTER", payload: statusFilter });
    dispatch({ type: "SET_CURRENT_PAGE", payload: currentPage });
    dispatch({ type: "SET_ITEMS_PER_PAGE", payload: itemsPerPage });
  }, [searchTerm, categoryFilter, statusFilter, currentPage, itemsPerPage, dispatch]);

  // Local filter handlers
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleCategoryFilterChange = (value: string) => {
    setCategoryFilter(value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleStatusFilterChange = (value: string) => {
    setStatusFilter(value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setCategoryFilter("all");
    setStatusFilter("all");
    setCurrentPage(1);
    clearFilters();
  };

  // Pagination handlers
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Confirmation dialog for deletion
  const confirmDelete = (product: Product) => {
    setProductToDelete(product);
  };

  const handleDelete = async () => {
    if (!productToDelete) return;
    
    setIsLoading(true);
    try {
      await deleteProduct(productToDelete.id);
      onDeleteProduct(productToDelete.id);
      setProductToDelete(null);
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Get filtered and paginated products
  const filteredProducts = getFilteredProducts();
  const displayedProducts = getPaginatedProducts();
  const totalPages = getTotalPages();

  // Format price with commas
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price);
  };

  // Get status badge class based on product status
  const getStatusBadgeClass = (status: ProductStatus) => {
    switch (status) {
      case ProductStatus.ACTIVE:
        return "bg-actionsuccess-light text-actionsuccess";
      case ProductStatus.DRAFT:
        return "bg-blackblack-10 text-blackblack-100";
      case ProductStatus.OUT_OF_STOCK:
        return "bg-actionwarning-light text-actionwarning";
      case ProductStatus.DISCONTINUED:
        return "bg-blackblack-40 text-blackblack-100";
      default:
        return "bg-blackblack-10 text-blackblack-100";
    }
  };

  return (
    <Card className="rounded-xl shadow-light-theme-shadow-medium">
      <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
        <div className="flex justify-between items-center">
          <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
            Product Management
          </CardTitle>
          <Button onClick={onAddProduct} className="flex items-center gap-1">
            <Plus className="h-4 w-4 mr-1" />
            Add New Product
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-blackblack-60" />
            <Input
              placeholder="Search products..."
              className="pl-10"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <button 
                className="absolute right-3 top-2.5"
                onClick={() => setSearchTerm("")}
              >
                <XCircle className="h-4 w-4 text-blackblack-60" />
              </button>
            )}
          </div>
          
          <div className="flex gap-2 w-full md:w-auto">
            <Select 
              value={categoryFilter}
              onValueChange={handleCategoryFilterChange}
            >
              <SelectTrigger className="w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value={CandleCategory.SEASONAL}>Seasonal</SelectItem>
                <SelectItem value={CandleCategory.SIGNATURE}>Signature</SelectItem>
                <SelectItem value={CandleCategory.PREMIUM}>Premium</SelectItem>
                <SelectItem value={CandleCategory.GIFT_SET}>Gift Set</SelectItem>
                <SelectItem value={CandleCategory.SALE}>Sale</SelectItem>
              </SelectContent>
            </Select>
            
            <Select
              value={statusFilter}
              onValueChange={handleStatusFilterChange}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value={ProductStatus.ACTIVE}>Active</SelectItem>
                <SelectItem value={ProductStatus.OUT_OF_STOCK}>Out of Stock</SelectItem>
                <SelectItem value={ProductStatus.DRAFT}>Draft</SelectItem>
                <SelectItem value={ProductStatus.DISCONTINUED}>Discontinued</SelectItem>
              </SelectContent>
            </Select>
            
            {(searchTerm || categoryFilter !== "all" || statusFilter !== "all") && (
              <Button 
                variant="outline"
                onClick={handleClearFilters}
                className="flex items-center gap-1"
              >
                <RefreshCw className="h-4 w-4 mr-1" />
                Clear
              </Button>
            )}
          </div>
        </div>
        
        <div className="overflow-x-auto rounded-lg border border-[#111c2d1a]">
          <table className="w-full">
            <thead className="bg-surfaceslightgray-10 border-b border-[#111c2d1a]">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Product</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">SKU</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Category</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Price</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Stock</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Status</th>
                <th className="py-3 px-4 text-right text-sm font-medium text-blackblack-60">Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayedProducts.length > 0 ? (
                displayedProducts.map((product) => (
                  <tr key={product.id} className="border-b border-[#111c2d1a] last:border-b-0 hover:bg-surfaceslightgray-10">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-md bg-surfaceslightgray-10 flex-shrink-0">
                          <img 
                            src={product.featuredImage} 
                            alt={product.name}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-xs text-blackblack-60 truncate max-w-[200px]">{product.shortDescription}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-blackblack-60">{product.sku}</td>
                    <td className="py-3 px-4">{product.category}</td>
                    <td className="py-3 px-4 font-medium">
                      {product.salePrice ? (
                        <div>
                          <span>{formatPrice(product.salePrice)}</span>
                          <span className="text-xs text-blackblack-60 line-through ml-2">{formatPrice(product.price)}</span>
                        </div>
                      ) : (
                        formatPrice(product.price)
                      )}
                    </td>
                    <td className="py-3 px-4">
                      {product.stockQuantity <= product.reorderThreshold ? (
                        <span className="text-actionwarning">{product.stockQuantity}</span>
                      ) : (
                        product.stockQuantity
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <Badge className={getStatusBadgeClass(product.status)}>
                        {product.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => onViewProduct(product.id)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => onViewProduct(product.id)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8 text-actionwarning"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete the product
                                <strong> {product.name}</strong> and remove it from the database.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => onDeleteProduct(product.id)}
                                className="bg-actionwarning text-white hover:bg-actionwarning/90"
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-blackblack-60">
                    {searchTerm || categoryFilter !== "all" || statusFilter !== "all" ? (
                      <div className="flex flex-col items-center">
                        <XCircle className="h-8 w-8 mb-2 text-blackblack-40" />
                        <p>No products found with the current filters.</p>
                        <Button 
                          variant="outline" 
                          className="mt-3"
                          onClick={handleClearFilters}
                        >
                          Clear Filters
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <Package className="h-8 w-8 mb-2 text-blackblack-40" />
                        <p>No products available.</p>
                        <Button 
                          className="mt-3"
                          onClick={onAddProduct}
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Add New Product
                        </Button>
                      </div>
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-blackblack-60">
            {filteredProducts.length > 0 ? (
              <>
                Showing {((currentPage - 1) * itemsPerPage) + 1}-
                {Math.min(currentPage * itemsPerPage, filteredProducts.length)} of {filteredProducts.length} products
              </>
            ) : (
              "No products to display"
            )}
          </div>
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8" 
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              {/* First page */}
              {currentPage > 3 && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8 w-8"
                  onClick={() => handlePageChange(1)}
                >
                  1
                </Button>
              )}
              
              {/* Ellipsis for many pages */}
              {currentPage > 4 && <span className="mx-1">...</span>}
              
              {/* Page before current (if not first page) */}
              {currentPage > 1 && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8 w-8"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  {currentPage - 1}
                </Button>
              )}
              
              {/* Current page */}
              <Button 
                variant="outline" 
                size="sm" 
                className="h-8 w-8 bg-light-themeprimarylight-blue text-light-themeprimaryblue"
              >
                {currentPage}
              </Button>
              
              {/* Page after current (if not last page) */}
              {currentPage < totalPages && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8 w-8"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  {currentPage + 1}
                </Button>
              )}
              
              {/* Ellipsis for many pages */}
              {currentPage < totalPages - 3 && <span className="mx-1">...</span>}
              
              {/* Last page */}
              {currentPage < totalPages - 2 && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8 w-8"
                  onClick={() => handlePageChange(totalPages)}
                >
                  {totalPages}
                </Button>
              )}
              
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductList;
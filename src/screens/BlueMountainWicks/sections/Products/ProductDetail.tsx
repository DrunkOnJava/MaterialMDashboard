import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { Label } from "../../../../components/ui/label";
import { Switch } from "../../../../components/ui/switch";
import { Separator } from "../../../../components/ui/separator";
import { useBlueMountainWicks } from "../../context/BlueMountainWicksContext";
import { 
  Save, 
  ArrowLeft, 
  Trash2, 
  ImagePlus, 
  Tag, 
  PackageCheck, 
  PlusCircle,
  AlertCircle,
  Loader2
} from "lucide-react";

import { Product, CandleCategory, ScentFamily, CandleSize, WaxType, BurnTime, ProductStatus } from "../../models/types";

interface ProductDetailProps {
  product: Product | null;
  isNew: boolean;
  onSave: (productId: string, data: any) => void;
  onCancel: () => void;
  onDelete: (productId: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  isNew,
  onSave,
  onCancel,
  onDelete
}) => {
  const { addProduct, updateProduct, deleteProduct } = useBlueMountainWicks();
  const [formData, setFormData] = useState<Partial<Product>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState("basic");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  // Default empty product for new products
  const emptyProduct: Partial<Product> = {
    name: "",
    sku: "",
    price: 0,
    description: "",
    shortDescription: "",
    category: CandleCategory.SIGNATURE,
    scentFamily: [ScentFamily.FRESH],
    size: CandleSize.MEDIUM,
    weight: "",
    waxType: WaxType.SOY,
    burnTime: BurnTime.MEDIUM,
    images: [],
    featuredImage: "",
    ingredients: "",
    isFeatured: false,
    isNew: true,
    stockQuantity: 0,
    reorderThreshold: 5,
    status: ProductStatus.DRAFT,
    tags: []
  };

  // Initialize form data when product changes
  useEffect(() => {
    setFormData(product || emptyProduct);
  }, [product]);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle switch changes
  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    // Required fields
    if (!formData.name) newErrors.name = "Product name is required";
    if (!formData.sku) newErrors.sku = "SKU is required";
    if (formData.price === undefined || formData.price < 0) {
      newErrors.price = "Price must be a positive number";
    }
    if (!formData.shortDescription) {
      newErrors.shortDescription = "Short description is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!validateForm()) {
      // If there are errors, switch to the tab containing the first error
      const errorFields = Object.keys(errors);
      if (errorFields.includes('name') || errorFields.includes('sku') || 
          errorFields.includes('price') || errorFields.includes('shortDescription')) {
        setActiveTab('basic');
      }
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      if (isNew) {
        // Add new product
        await addProduct(formData as Omit<Product, 'id'>);
      } else if (product) {
        // Update existing product
        await updateProduct({ ...product, ...formData });
      }
      
      // Call parent's onSave callback
      onSave(product?.id || '', formData);
    } catch (error) {
      console.error('Error saving product:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle product deletion
  const handleDelete = async () => {
    if (!product) return;
    
    setIsSubmitting(true);
    try {
      await deleteProduct(product.id);
      onDelete(product.id);
    } catch (error) {
      console.error('Error deleting product:', error);
    } finally {
      setIsSubmitting(false);
      setShowConfirmDelete(false);
    }
  };

  const currentProduct = formData;

  return (
    <Card className="rounded-xl shadow-light-theme-shadow-medium">
      <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={onCancel}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
              {isNew ? "Add New Product" : `Edit Product: ${currentProduct.name}`}
            </CardTitle>
          </div>
          <div className="flex gap-2">
            {!isNew && (
              <Button 
                variant="outline" 
                className="text-actionwarning border-actionwarning hover:bg-actionwarning/10"
                onClick={() => onDelete(product?.id || "")}
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Delete
              </Button>
            )}
            <Button onClick={() => onSave(product?.id || "", currentProduct)}>
              <Save className="h-4 w-4 mr-1" />
              {isNew ? "Create Product" : "Save Changes"}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="basic" className="px-4">
              Basic Info
              {Object.keys(errors).some(k => ['name', 'sku', 'price', 'shortDescription', 'category', 'status'].includes(k)) && (
                <span className="ml-2 text-actionwarning-light">
                  <AlertCircle className="h-4 w-4 inline-block" />
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="details" className="px-4">
              Product Details
              {Object.keys(errors).some(k => ['scentFamily', 'size', 'weight', 'waxType', 'burnTime'].includes(k)) && (
                <span className="ml-2 text-actionwarning-light">
                  <AlertCircle className="h-4 w-4 inline-block" />
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="images" className="px-4">Images</TabsTrigger>
            <TabsTrigger value="inventory" className="px-4">
              Inventory
              {Object.keys(errors).some(k => ['stockQuantity', 'reorderThreshold'].includes(k)) && (
                <span className="ml-2 text-actionwarning-light">
                  <AlertCircle className="h-4 w-4 inline-block" />
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="seo" className="px-4">SEO</TabsTrigger>
          </TabsList>
          
          {/* Basic Info Tab */}
          <TabsContent value="basic">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className={errors.name ? "text-actionwarning" : ""}>
                    Product Name {errors.name && <span className="text-sm text-actionwarning">*</span>}
                  </Label>
                  <Input 
                    id="name" 
                    name="name"
                    value={currentProduct.name || ""}
                    onChange={handleInputChange}
                    className={errors.name ? "border-actionwarning" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-actionwarning mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="sku" className={errors.sku ? "text-actionwarning" : ""}>
                    SKU {errors.sku && <span className="text-sm text-actionwarning">*</span>}
                  </Label>
                  <Input 
                    id="sku" 
                    name="sku"
                    value={currentProduct.sku || ""}
                    onChange={handleInputChange}
                    className={errors.sku ? "border-actionwarning" : ""} 
                  />
                  {errors.sku && (
                    <p className="text-sm text-actionwarning mt-1">{errors.sku}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label 
                      htmlFor="price"
                      className={errors.price ? "text-actionwarning" : ""}
                    >
                      Regular Price {errors.price && <span className="text-sm text-actionwarning">*</span>}
                    </Label>
                    <Input 
                      id="price" 
                      name="price"
                      type="number" 
                      value={currentProduct.price || 0}
                      onChange={handleInputChange}
                      min={0} 
                      step={0.01}
                      className={errors.price ? "border-actionwarning" : ""}
                    />
                    {errors.price && (
                      <p className="text-sm text-actionwarning mt-1">{errors.price}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="salePrice">Sale Price (Optional)</Label>
                    <Input 
                      id="salePrice" 
                      name="salePrice"
                      type="number" 
                      value={currentProduct.salePrice || ""}
                      onChange={handleInputChange}
                      min={0} 
                      step={0.01} 
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select 
                    value={currentProduct.category as string || CandleCategory.SIGNATURE}
                    onValueChange={(value) => handleSelectChange("category", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={CandleCategory.SIGNATURE}>Signature</SelectItem>
                      <SelectItem value={CandleCategory.SEASONAL}>Seasonal</SelectItem>
                      <SelectItem value={CandleCategory.PREMIUM}>Premium</SelectItem>
                      <SelectItem value={CandleCategory.GIFT_SET}>Gift Set</SelectItem>
                      <SelectItem value={CandleCategory.SALE}>Sale</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="status">Product Status</Label>
                  <Select 
                    value={currentProduct.status as string || ProductStatus.DRAFT}
                    onValueChange={(value) => handleSelectChange("status", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={ProductStatus.ACTIVE}>Active</SelectItem>
                      <SelectItem value={ProductStatus.DRAFT}>Draft</SelectItem>
                      <SelectItem value={ProductStatus.OUT_OF_STOCK}>Out of Stock</SelectItem>
                      <SelectItem value={ProductStatus.DISCONTINUED}>Discontinued</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex gap-4 items-start pt-2">
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="isFeatured" 
                      checked={currentProduct.isFeatured || false}
                      onCheckedChange={(checked) => handleSwitchChange("isFeatured", checked)}
                    />
                    <Label htmlFor="isFeatured">Featured Product</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="isNew" 
                      checked={currentProduct.isNew || false}
                      onCheckedChange={(checked) => handleSwitchChange("isNew", checked)}
                    />
                    <Label htmlFor="isNew">Mark as New</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label 
                    htmlFor="shortDescription"
                    className={errors.shortDescription ? "text-actionwarning" : ""}
                  >
                    Short Description {errors.shortDescription && <span className="text-sm text-actionwarning">*</span>}
                  </Label>
                  <Textarea 
                    id="shortDescription"
                    name="shortDescription"
                    rows={2}
                    value={currentProduct.shortDescription || ""} 
                    onChange={handleInputChange}
                    placeholder="Brief description that appears in product cards"
                    className={errors.shortDescription ? "border-actionwarning" : ""}
                  />
                  {errors.shortDescription && (
                    <p className="text-sm text-actionwarning mt-1">{errors.shortDescription}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="description">Full Description</Label>
                  <Textarea 
                    id="description"
                    name="description"
                    rows={8}
                    value={currentProduct.description || ""} 
                    onChange={handleInputChange}
                    placeholder="Detailed product description"
                  />
                </div>
                
                <div>
                  <Label htmlFor="tags">Tags (comma separated)</Label>
                  <Input 
                    id="tags"
                    name="tags"
                    value={Array.isArray(currentProduct.tags) ? currentProduct.tags.join(", ") : ""}
                    onChange={(e) => {
                      // Split tags by comma and trim whitespace
                      const tags = e.target.value.split(",").map(tag => tag.trim()).filter(Boolean);
                      setFormData((prev) => ({ ...prev, tags }));
                    }}
                    placeholder="e.g. summer, floral, gift"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Product Details Tab */}
          <TabsContent value="details">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="scent-family">Scent Family</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select scent family" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={ScentFamily.FLORAL}>Floral</SelectItem>
                      <SelectItem value={ScentFamily.CITRUS}>Citrus</SelectItem>
                      <SelectItem value={ScentFamily.WOODY}>Woody</SelectItem>
                      <SelectItem value={ScentFamily.SPICY}>Spicy</SelectItem>
                      <SelectItem value={ScentFamily.SWEET}>Sweet</SelectItem>
                      <SelectItem value={ScentFamily.FRESH}>Fresh</SelectItem>
                      <SelectItem value={ScentFamily.HERBAL}>Herbal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="size">Candle Size</Label>
                  <Select defaultValue={currentProduct.size}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={CandleSize.MINI}>Mini</SelectItem>
                      <SelectItem value={CandleSize.SMALL}>Small</SelectItem>
                      <SelectItem value={CandleSize.MEDIUM}>Medium</SelectItem>
                      <SelectItem value={CandleSize.LARGE}>Large</SelectItem>
                      <SelectItem value={CandleSize.EXTRA_LARGE}>Extra Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="weight">Weight</Label>
                  <Input id="weight" defaultValue={currentProduct.weight} placeholder="e.g. 8 oz" />
                </div>
                
                <div>
                  <Label htmlFor="wax-type">Wax Type</Label>
                  <Select defaultValue={currentProduct.waxType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select wax type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={WaxType.SOY}>Soy</SelectItem>
                      <SelectItem value={WaxType.BEESWAX}>Beeswax</SelectItem>
                      <SelectItem value={WaxType.COCONUT}>Coconut</SelectItem>
                      <SelectItem value={WaxType.PARAFFIN}>Paraffin</SelectItem>
                      <SelectItem value={WaxType.BLEND}>Blend</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="burn-time">Burn Time</Label>
                  <Select defaultValue={currentProduct.burnTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select burn time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={BurnTime.SHORT}>Short (20-30 hours)</SelectItem>
                      <SelectItem value={BurnTime.MEDIUM}>Medium (40-60 hours)</SelectItem>
                      <SelectItem value={BurnTime.LONG}>Long (70-90 hours)</SelectItem>
                      <SelectItem value={BurnTime.EXTRA_LONG}>Extra Long (100+ hours)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="ingredients">Ingredients</Label>
                  <Textarea 
                    id="ingredients" 
                    rows={8}
                    defaultValue={currentProduct.ingredients} 
                    placeholder="List of ingredients used in the product"
                  />
                </div>
                
                <div>
                  <Label>Related Products</Label>
                  <div className="mt-2 border rounded-md p-4 bg-surfaceslightgray-10">
                    <p className="text-blackblack-60 mb-2">No related products selected</p>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <PlusCircle className="h-4 w-4 mr-1" />
                      Add Related Products
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Images Tab */}
          <TabsContent value="images">
            <div className="space-y-6">
              <div>
                <Label className="block mb-2">Featured Image</Label>
                <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center bg-surfaceslightgray-10">
                  {currentProduct.featuredImage ? (
                    <div className="relative w-full max-w-md">
                      <img 
                        src={currentProduct.featuredImage} 
                        alt="Featured" 
                        className="w-full h-auto rounded-md"
                      />
                      <Button 
                        variant="destructive" 
                        size="sm" 
                        className="absolute top-2 right-2"
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <>
                      <ImagePlus className="h-12 w-12 text-blackblack-40 mb-2" />
                      <p className="text-blackblack-60 mb-2">Drag and drop image here, or click to browse</p>
                      <Button variant="outline">Upload Image</Button>
                    </>
                  )}
                </div>
              </div>
              
              <div>
                <Label className="block mb-2">Additional Images</Label>
                <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center bg-surfaceslightgray-10">
                  {currentProduct.images && currentProduct.images.length > 0 ? (
                    <div className="grid grid-cols-3 gap-4 w-full">
                      {currentProduct.images.map((image, index) => (
                        <div key={index} className="relative">
                          <img 
                            src={image} 
                            alt={`Product ${index + 1}`} 
                            className="w-full h-auto rounded-md"
                          />
                          <Button 
                            variant="destructive" 
                            size="sm" 
                            className="absolute top-2 right-2"
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <ImagePlus className="h-12 w-12 text-blackblack-40 mb-2" />
                      <p className="text-blackblack-60 mb-2">Drag and drop images here, or click to browse</p>
                      <Button variant="outline">Upload Images</Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Inventory Tab */}
          <TabsContent value="inventory">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="stockQuantity">Current Stock</Label>
                  <Input 
                    id="stockQuantity" 
                    type="number" 
                    defaultValue={currentProduct.stockQuantity} 
                    min={0}
                  />
                </div>
                
                <div>
                  <Label htmlFor="reorderThreshold">Low Stock Threshold</Label>
                  <Input 
                    id="reorderThreshold" 
                    type="number" 
                    defaultValue={currentProduct.reorderThreshold} 
                    min={0}
                  />
                  <p className="text-xs text-blackblack-60 mt-1">
                    When stock reaches this level, the product will be flagged for reordering
                  </p>
                </div>
                
                <div className="pt-4">
                  <Label className="block mb-2">Stock Management</Label>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="track-inventory" defaultChecked={true} />
                      <Label htmlFor="track-inventory">Track inventory for this product</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="allow-backorders" defaultChecked={false} />
                      <Label htmlFor="allow-backorders">Allow backorders when out of stock</Label>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="rounded-lg shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Inventory Status</CardTitle>
                </CardHeader>
                <CardContent>
                  {currentProduct.stockQuantity <= 0 ? (
                    <div className="flex items-center gap-2 text-actionwarning">
                      <PackageCheck className="h-5 w-5" />
                      <span className="font-medium">Out of Stock</span>
                    </div>
                  ) : currentProduct.stockQuantity <= currentProduct.reorderThreshold ? (
                    <div className="flex items-center gap-2 text-actionalert">
                      <PackageCheck className="h-5 w-5" />
                      <span className="font-medium">Low Stock</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-actionsuccess">
                      <PackageCheck className="h-5 w-5" />
                      <span className="font-medium">In Stock</span>
                    </div>
                  )}
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-blackblack-60">Total Sales:</span>
                      <span className="font-medium">82 units</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blackblack-60">Last Ordered:</span>
                      <span className="font-medium">5 days ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blackblack-60">Average Monthly Sales:</span>
                      <span className="font-medium">27 units</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* SEO Tab */}
          <TabsContent value="seo">
            <div className="space-y-4">
              <div>
                <Label htmlFor="seoTitle">SEO Title</Label>
                <Input 
                  id="seoTitle" 
                  defaultValue={currentProduct.seoTitle} 
                  placeholder="Title that appears in search engine results"
                />
                <p className="text-xs text-blackblack-60 mt-1">
                  Recommended length: 50-60 characters
                </p>
              </div>
              
              <div>
                <Label htmlFor="seoDescription">Meta Description</Label>
                <Textarea 
                  id="seoDescription" 
                  rows={3}
                  defaultValue={currentProduct.seoDescription} 
                  placeholder="Description that appears in search engine results"
                />
                <p className="text-xs text-blackblack-60 mt-1">
                  Recommended length: 150-160 characters
                </p>
              </div>
              
              <div>
                <Label htmlFor="seoKeywords">Keywords (comma separated)</Label>
                <Input 
                  id="seoKeywords" 
                  defaultValue={currentProduct.seoKeywords?.join(", ")} 
                  placeholder="e.g. candle, soy wax, handmade, blue mountain wicks"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="border-t border-[#111c2d1a] px-6 py-4 flex justify-between">
        <Button variant="outline" onClick={onCancel} disabled={isSubmitting}>Cancel</Button>
        <Button 
          onClick={handleSubmit} 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-1 animate-spin" />
              {isNew ? "Creating..." : "Saving..."}
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-1" />
              {isNew ? "Create Product" : "Save Changes"}
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductDetail;
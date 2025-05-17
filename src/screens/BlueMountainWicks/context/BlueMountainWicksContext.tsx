import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product, Order, Customer, SalesSummary, ProductStatus } from '../models/types';
import { mockProducts, mockOrders, mockCustomers, mockSalesSummary } from '../data/mockData';
import { useToast } from '../../../hooks/use-toast';

// Define State Types
interface BlueMountainWicksState {
  products: Product[];
  orders: Order[];
  customers: Customer[];
  salesSummary: SalesSummary;
  loading: boolean;
  activeProduct: Product | null;
  isEditingProduct: boolean;
  searchTerm: string;
  categoryFilter: string;
  statusFilter: string;
  dateFilter: string;
  currentPage: number;
  itemsPerPage: number;
  darkMode: boolean;
}

// Define Action Types
type BlueMountainWicksAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_PRODUCTS'; payload: Product[] }
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'UPDATE_PRODUCT'; payload: Product }
  | { type: 'DELETE_PRODUCT'; payload: string }
  | { type: 'SET_ACTIVE_PRODUCT'; payload: Product | null }
  | { type: 'SET_IS_EDITING_PRODUCT'; payload: boolean }
  | { type: 'SET_ORDERS'; payload: Order[] }
  | { type: 'UPDATE_ORDER_STATUS'; payload: { orderId: string; status: string } }
  | { type: 'SET_SEARCH_TERM'; payload: string }
  | { type: 'SET_CATEGORY_FILTER'; payload: string }
  | { type: 'SET_STATUS_FILTER'; payload: string }
  | { type: 'SET_DATE_FILTER'; payload: string }
  | { type: 'SET_CURRENT_PAGE'; payload: number }
  | { type: 'SET_ITEMS_PER_PAGE'; payload: number }
  | { type: 'TOGGLE_DARK_MODE' };

// Create Context
interface BlueMountainWicksContextType {
  state: BlueMountainWicksState;
  dispatch: React.Dispatch<BlueMountainWicksAction>;
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
  updateOrderStatus: (orderId: string, status: string) => void;
  getFilteredProducts: () => Product[];
  getPaginatedProducts: () => Product[];
  getTotalPages: () => number;
  getProductById: (id: string) => Product | null;
  clearFilters: () => void;
}

// Initial State
const initialState: BlueMountainWicksState = {
  products: mockProducts,
  orders: mockOrders,
  customers: mockCustomers,
  salesSummary: mockSalesSummary,
  loading: false,
  activeProduct: null,
  isEditingProduct: false,
  searchTerm: '',
  categoryFilter: 'all',
  statusFilter: 'all',
  dateFilter: '30days',
  currentPage: 1,
  itemsPerPage: 10,
  darkMode: false,
};

// Reducer Function
const BlueMountainWicksReducer = (
  state: BlueMountainWicksState,
  action: BlueMountainWicksAction
): BlueMountainWicksState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
      };
    case 'SET_ACTIVE_PRODUCT':
      return { ...state, activeProduct: action.payload };
    case 'SET_IS_EDITING_PRODUCT':
      return { ...state, isEditingProduct: action.payload };
    case 'SET_ORDERS':
      return { ...state, orders: action.payload };
    case 'UPDATE_ORDER_STATUS':
      return {
        ...state,
        orders: state.orders.map(order =>
          order.id === action.payload.orderId
            ? { ...order, status: action.payload.status as any }
            : order
        ),
      };
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload, currentPage: 1 };
    case 'SET_CATEGORY_FILTER':
      return { ...state, categoryFilter: action.payload, currentPage: 1 };
    case 'SET_STATUS_FILTER':
      return { ...state, statusFilter: action.payload, currentPage: 1 };
    case 'SET_DATE_FILTER':
      return { ...state, dateFilter: action.payload };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    case 'SET_ITEMS_PER_PAGE':
      return { ...state, itemsPerPage: action.payload };
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

// Create Context
const BlueMountainWicksContext = createContext<BlueMountainWicksContextType | undefined>(undefined);

// Provider Component
interface BlueMountainWicksProviderProps {
  children: ReactNode;
}

export const BlueMountainWicksProvider: React.FC<BlueMountainWicksProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(BlueMountainWicksReducer, initialState);
  const { toast } = useToast();

  // Helper function to generate a unique ID
  const generateId = (prefix: string): string => {
    return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  };

  // Add a new product
  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = {
      ...product,
      id: generateId('candle'),
      dateAdded: new Date().toISOString().split('T')[0],
      dateModified: new Date().toISOString().split('T')[0],
    } as Product;

    dispatch({ type: 'ADD_PRODUCT', payload: newProduct });

    toast({
      title: 'Product Added',
      description: `"${newProduct.name}" has been added successfully.`,
    });

    return newProduct.id;
  };

  // Update an existing product
  const updateProduct = (product: Product) => {
    const updatedProduct = {
      ...product,
      dateModified: new Date().toISOString().split('T')[0],
    };

    dispatch({ type: 'UPDATE_PRODUCT', payload: updatedProduct });

    toast({
      title: 'Product Updated',
      description: `"${updatedProduct.name}" has been updated successfully.`,
    });
  };

  // Delete a product
  const deleteProduct = (productId: string) => {
    const product = state.products.find(p => p.id === productId);

    if (!product) {
      toast({
        title: 'Error',
        description: 'Product not found.',
        variant: 'destructive',
      });
      return;
    }

    dispatch({ type: 'DELETE_PRODUCT', payload: productId });

    toast({
      title: 'Product Deleted',
      description: `"${product.name}" has been deleted successfully.`,
    });
  };

  // Update order status
  const updateOrderStatus = (orderId: string, status: string) => {
    dispatch({
      type: 'UPDATE_ORDER_STATUS',
      payload: { orderId, status },
    });

    toast({
      title: 'Order Updated',
      description: `Order status has been updated to ${status}.`,
    });
  };

  // Get filtered products based on search and filters
  const getFilteredProducts = (): Product[] => {
    return state.products.filter(product => {
      // Search term filter
      const matchesSearch =
        state.searchTerm === '' ||
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        product.sku.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(state.searchTerm.toLowerCase());

      // Category filter
      const matchesCategory =
        state.categoryFilter === 'all' || product.category === state.categoryFilter;

      // Status filter
      const matchesStatus = state.statusFilter === 'all' || product.status === state.statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  };

  // Get paginated products
  const getPaginatedProducts = (): Product[] => {
    const filteredProducts = getFilteredProducts();
    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + state.itemsPerPage);
  };

  // Get total number of pages
  const getTotalPages = (): number => {
    const filteredProducts = getFilteredProducts();
    return Math.ceil(filteredProducts.length / state.itemsPerPage);
  };

  // Get product by ID
  const getProductById = (id: string): Product | null => {
    return state.products.find(product => product.id === id) || null;
  };

  // Clear all filters
  const clearFilters = () => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: '' });
    dispatch({ type: 'SET_CATEGORY_FILTER', payload: 'all' });
    dispatch({ type: 'SET_STATUS_FILTER', payload: 'all' });
    dispatch({ type: 'SET_CURRENT_PAGE', payload: 1 });
  };

  return (
    <BlueMountainWicksContext.Provider
      value={{
        state,
        dispatch,
        addProduct,
        updateProduct,
        deleteProduct,
        updateOrderStatus,
        getFilteredProducts,
        getPaginatedProducts,
        getTotalPages,
        getProductById,
        clearFilters,
      }}
    >
      {children}
    </BlueMountainWicksContext.Provider>
  );
};

// Custom hook to use the context
export const useBlueMountainWicks = (): BlueMountainWicksContextType => {
  const context = useContext(BlueMountainWicksContext);

  if (context === undefined) {
    throw new Error('useBlueMountainWicks must be used within a BlueMountainWicksProvider');
  }

  return context;
};

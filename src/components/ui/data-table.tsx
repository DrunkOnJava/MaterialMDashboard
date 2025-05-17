import * as React from 'react';
import { cn } from '../../lib/utils';
import { Button } from './button';
import { Input } from './input';
import { Checkbox } from './checkbox';
import { Badge } from './badge';
import { DataTableSkeleton } from './data-table-skeleton';
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Filter,
  Printer,
  Search,
  SortAsc,
  SortDesc,
} from 'lucide-react';

// Column definition type
export interface DataTableColumn<T> {
  id: string;
  header: React.ReactNode;
  accessorKey?: keyof T;
  accessorFn?: (row: T) => React.ReactNode;
  enableSorting?: boolean;
  cell?: (props: { row: T; getValue: () => any }) => React.ReactNode;
}

// Data table props
export interface DataTableProps<T> {
  data: T[];
  columns: DataTableColumn<T>[];
  primaryKey: keyof T;
  enableSelection?: boolean;
  enableSearch?: boolean;
  searchPlaceholder?: string;
  searchFields?: Array<keyof T>;
  enablePagination?: boolean;
  pageSize?: number;
  enableSorting?: boolean;
  className?: string;
  striped?: boolean;
  actions?: React.ReactNode;
  onRowClick?: (row: T) => void;
  onSelectionChange?: (selectedRows: T[]) => void;
  loading?: boolean;
  renderRowSubComponent?: (row: T) => React.ReactNode;
  onSearchChange?: (searchTerm: string) => void;
  filterComponent?: React.ReactNode;
  exportOptions?: {
    enableExport?: boolean;
    exportFileName?: string;
    onExport?: () => void;
  };
  emptyStateMessage?: React.ReactNode;
}

export function DataTable<T>({
  data,
  columns,
  primaryKey,
  enableSelection = false,
  enableSearch = false,
  searchPlaceholder = 'Search...',
  searchFields = [],
  enablePagination = false,
  pageSize = 10,
  enableSorting = false,
  className,
  striped = false,
  actions,
  onRowClick,
  onSelectionChange,
  renderRowSubComponent,
  onSearchChange,
  filterComponent,
  exportOptions,
  emptyStateMessage = 'No data found.',
  loading = false,
}: DataTableProps<T>) {
  // State for search term
  const [searchTerm, setSearchTerm] = React.useState('');
  
  // State for sorting
  const [sortColumn, setSortColumn] = React.useState<string | null>(null);
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');
  
  // State for pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  
  // State for selected rows
  const [selectedRows, setSelectedRows] = React.useState<T[]>([]);
  
  // State for expanded rows
  const [expandedRows, setExpandedRows] = React.useState<Set<any>>(new Set());

  // Filtered data based on search term
  const filteredData = React.useMemo(() => {
    if (!searchTerm || !enableSearch || searchFields.length === 0) return data;
    
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    
    return data.filter(row => {
      return searchFields.some(field => {
        const value = String(row[field]).toLowerCase();
        return value.includes(lowercasedSearchTerm);
      });
    });
  }, [data, searchTerm, enableSearch, searchFields]);

  // Sorted data based on sort column and direction
  const sortedData = React.useMemo(() => {
    if (!sortColumn || !enableSorting) return filteredData;
    
    const column = columns.find(col => col.id === sortColumn);
    if (!column || (!column.accessorKey && !column.accessorFn)) return filteredData;
    
    return [...filteredData].sort((a, b) => {
      let valueA, valueB;
      
      if (column.accessorKey) {
        valueA = a[column.accessorKey];
        valueB = b[column.accessorKey];
      } else if (column.accessorFn) {
        valueA = column.accessorFn(a);
        valueB = column.accessorFn(b);
      }
      
      // Convert to strings for comparison if not already
      if (valueA !== undefined && valueB !== undefined) {
        valueA = String(valueA).toLowerCase();
        valueB = String(valueB).toLowerCase();
        
        if (sortDirection === 'asc') {
          return valueA > valueB ? 1 : -1;
        } else {
          return valueA < valueB ? 1 : -1;
        }
      }
      
      return 0;
    });
  }, [filteredData, sortColumn, sortDirection, enableSorting, columns]);

  // Paginated data
  const paginatedData = React.useMemo(() => {
    if (!enablePagination) return sortedData;
    
    const startIndex = (currentPage - 1) * pageSize;
    return sortedData.slice(startIndex, startIndex + pageSize);
  }, [sortedData, currentPage, pageSize, enablePagination]);

  // Calculate total pages
  const totalPages = React.useMemo(() => {
    if (!enablePagination) return 1;
    return Math.ceil(sortedData.length / pageSize);
  }, [sortedData, pageSize, enablePagination]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  // Handle sort
  const handleSort = (columnId: string) => {
    if (!enableSorting) return;
    
    const column = columns.find(col => col.id === columnId);
    if (!column || column.enableSorting === false) return;
    
    if (sortColumn === columnId) {
      setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortColumn(columnId);
      setSortDirection('asc');
    }
  };

  // Handle row selection
  const handleRowSelection = (row: T) => {
    setSelectedRows(prev => {
      const rowId = String(row[primaryKey]);
      const isSelected = prev.some(r => String(r[primaryKey]) === rowId);
      
      const newSelection = isSelected
        ? prev.filter(r => String(r[primaryKey]) !== rowId)
        : [...prev, row];
      
      if (onSelectionChange) {
        onSelectionChange(newSelection);
      }
      
      return newSelection;
    });
  };

  // Handle select all rows
  const handleSelectAll = () => {
    if (selectedRows.length === paginatedData.length && paginatedData.length > 0) {
      setSelectedRows([]);
      if (onSelectionChange) {
        onSelectionChange([]);
      }
    } else {
      setSelectedRows([...paginatedData]);
      if (onSelectionChange) {
        onSelectionChange([...paginatedData]);
      }
    }
  };

  // Handle row expansion
  const toggleRowExpansion = (rowId: any) => {
    setExpandedRows(prev => {
      const newSet = new Set(prev);
      if (newSet.has(rowId)) {
        newSet.delete(rowId);
      } else {
        newSet.add(rowId);
      }
      return newSet;
    });
  };

  // Handle page change
  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Check if a row is selected
  const isRowSelected = (row: T) => {
    return selectedRows.some(r => String(r[primaryKey]) === String(row[primaryKey]));
  };

  // Get cell value
  const getCellValue = (row: T, column: DataTableColumn<T>) => {
    if (column.cell) {
      return column.cell({
        row,
        getValue: () => 
          column.accessorKey 
            ? row[column.accessorKey] 
            : column.accessorFn 
              ? column.accessorFn(row) 
              : null
      });
    }
    
    if (column.accessorKey) {
      return row[column.accessorKey];
    }
    
    if (column.accessorFn) {
      return column.accessorFn(row);
    }
    
    return null;
  };

  // Render pagination controls
  const renderPagination = () => {
    if (!enablePagination || totalPages <= 1) return null;
    
    return (
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-blackblack-60">
          Showing {((currentPage - 1) * pageSize) + 1}-
          {Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length} items
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum;
            
            // Logic to show pages around current page
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
              if (i === 4) pageNum = totalPages;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
              if (i === 0) pageNum = 1;
            } else {
              pageNum = currentPage - 2 + i;
              if (i === 0) pageNum = 1;
              if (i === 4) pageNum = totalPages;
            }
            
            const isCurrentPage = pageNum === currentPage;
            const isEllipsis = (i === 1 && pageNum > 2) || (i === 3 && pageNum < totalPages - 1);
            
            if (isEllipsis) {
              return <span key={`ellipsis-${i}`} className="mx-1">...</span>;
            }
            
            return (
              <Button
                key={pageNum}
                variant="outline"
                size="sm"
                className={cn(
                  "h-8 w-8",
                  isCurrentPage && "bg-light-themeprimarylight-blue text-light-themeprimaryblue"
                )}
                onClick={() => goToPage(pageNum)}
              >
                {pageNum}
              </Button>
            );
          })}
          
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  };

  // Render toolbar
  const renderToolbar = () => {
    if (!enableSearch && !actions && !filterComponent && !exportOptions?.enableExport) return null;
    
    return (
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
        <div className="flex gap-3 w-full md:w-auto items-center">
          {enableSearch && (
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-blackblack-60" />
              <Input
                placeholder={searchPlaceholder}
                className="pl-10"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          )}
          
          {filterComponent}
        </div>
        
        <div className="flex gap-2 w-full md:w-auto justify-between md:justify-start">
          {exportOptions?.enableExport && (
            <Button 
              variant="outline" 
              className="flex items-center gap-1"
              onClick={exportOptions.onExport}
            >
              <Download className="h-4 w-4" />
              <span>Export</span>
            </Button>
          )}
          
          {exportOptions?.enableExport && (
            <Button 
              variant="outline" 
              className="flex items-center gap-1"
            >
              <Printer className="h-4 w-4" />
              <span>Print</span>
            </Button>
          )}
          
          {actions}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className={cn("space-y-4", className)}>
        {renderToolbar()}
        <DataTableSkeleton columns={columns.length} rows={pageSize} />
      </div>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      {renderToolbar()}
      
      {selectedRows.length > 0 && (
        <div className="bg-light-themeprimarylight-blue rounded-lg p-3 mb-4 flex justify-between items-center">
          <span className="text-light-themeprimaryblue font-medium">
            {selectedRows.length} items selected
          </span>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              className="border-light-themeprimaryblue text-light-themeprimaryblue hover:bg-light-themeprimaryblue/10"
            >
              Bulk Edit
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-actionwarning text-actionwarning hover:bg-actionwarning/10"
            >
              Delete Selected
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => {
                setSelectedRows([]);
                if (onSelectionChange) {
                  onSelectionChange([]);
                }
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
      
      <div className="overflow-x-auto rounded-lg border border-[#111c2d1a]">
        <table className="w-full">
          <thead className="bg-surfaceslightgray-10 border-b border-[#111c2d1a]">
            <tr>
              {enableSelection && (
                <th className="py-3 px-4 text-left">
                  <Checkbox
                    checked={
                      paginatedData.length > 0 && selectedRows.length === paginatedData.length
                    }
                    onCheckedChange={handleSelectAll}
                    aria-label="Select all rows"
                  />
                </th>
              )}
              
              {columns.map(column => (
                <th
                  key={column.id}
                  className={cn(
                    "py-3 px-4 text-left text-sm font-medium text-blackblack-60",
                    enableSorting && column.enableSorting !== false && "cursor-pointer"
                  )}
                  onClick={() => 
                    enableSorting && column.enableSorting !== false && handleSort(column.id)
                  }
                >
                  <div className="flex items-center gap-1">
                    <span>{column.header}</span>
                    {enableSorting && 
                     column.enableSorting !== false && 
                     sortColumn === column.id && (
                      sortDirection === 'asc' 
                        ? <SortAsc className="h-4 w-4" /> 
                        : <SortDesc className="h-4 w-4" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, rowIndex) => {
                const rowId = String(row[primaryKey]);
                const isExpanded = expandedRows.has(rowId);
                
                return (
                  <React.Fragment key={rowId}>
                    <tr
                      className={cn(
                        "border-b border-[#111c2d1a] last:border-b-0 hover:bg-surfaceslightgray-10",
                        striped && rowIndex % 2 === 1 && "bg-surfaceslightgray-10",
                        onRowClick && "cursor-pointer"
                      )}
                      onClick={() => onRowClick && onRowClick(row)}
                    >
                      {enableSelection && (
                        <td className="py-3 px-4">
                          <Checkbox
                            checked={isRowSelected(row)}
                            onCheckedChange={() => handleRowSelection(row)}
                            aria-label={`Select row ${rowId}`}
                            onClick={e => e.stopPropagation()} // Prevent row click
                          />
                        </td>
                      )}
                      
                      {columns.map(column => (
                        <td key={column.id} className="py-3 px-4">
                          {getCellValue(row, column)}
                        </td>
                      ))}
                    </tr>
                    
                    {renderRowSubComponent && isExpanded && (
                      <tr className="bg-surfaceslightgray-5">
                        <td 
                          colSpan={columns.length + (enableSelection ? 1 : 0)} 
                          className="py-3 px-4"
                        >
                          {renderRowSubComponent(row)}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            ) : (
              <tr>
                <td 
                  colSpan={columns.length + (enableSelection ? 1 : 0)} 
                  className="py-8 text-center text-blackblack-60"
                >
                  {emptyStateMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {renderPagination()}
    </div>
  );
}

// Utility for creating status badges with consistent styling
export const getStatusBadgeClass = (status: string) => {
  switch (status.toLowerCase()) {
    case 'active':
    case 'in-stock':
    case 'delivered':
    case 'completed':
    case 'success':
      return 'bg-actionsuccess-light text-actionsuccess';
    case 'inactive':
    case 'out-of-stock':
    case 'cancelled':
    case 'error':
      return 'bg-actionwarning-light text-actionwarning';
    case 'low-stock':
    case 'processing':
    case 'pending':
      return 'bg-actionalert-light text-actionalert';
    case 'shipped':
    case 'info':
      return 'bg-light-themeprimarylight-blue text-light-themeprimaryblue';
    default:
      return 'bg-blackblack-10 text-blackblack-100';
  }
};

// Helper component for status badges
export interface StatusBadgeProps {
  status: string;
  icon?: React.ReactNode;
  label?: string;
  className?: string;
}

export function StatusBadge({ status, icon, label, className }: StatusBadgeProps) {
  return (
    <Badge className={cn(getStatusBadgeClass(status), className, "flex items-center gap-1")}>
      {icon}
      <span>{label || status}</span>
    </Badge>
  );
}
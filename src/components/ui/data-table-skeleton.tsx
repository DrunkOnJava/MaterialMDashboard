import React from 'react';
import { Skeleton } from './skeleton';

interface DataTableSkeletonProps {
  columns?: number;
  rows?: number;
}

export const DataTableSkeleton: React.FC<DataTableSkeletonProps> = ({ 
  columns = 4, 
  rows = 5 
}) => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Skeleton className="h-8 w-48 bg-gray-200" />
        <div className="flex gap-2">
          <Skeleton className="h-10 w-32 bg-gray-200" />
          <Skeleton className="h-10 w-24 bg-gray-200" />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-md border">
        {/* Table Header */}
        <div className="flex bg-muted/50 p-4 font-medium">
          {Array.from({ length: columns }).map((_, i) => (
            <div key={i} className="flex-1 px-2">
              <Skeleton className="h-4 w-full bg-gray-200" />
            </div>
          ))}
        </div>

        {/* Table Rows */}
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div 
            key={rowIndex} 
            className="flex items-center p-4 border-t hover:bg-muted/50 transition-colors"
          >
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div key={colIndex} className="flex-1 px-2">
                <Skeleton 
                  className={`h-4 bg-gray-200 ${
                    colIndex === 0 ? 'w-2/3' : 'w-full'
                  }`} 
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between py-4">
        <Skeleton className="h-4 w-32 bg-gray-200" />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-8 bg-gray-200" />
          <Skeleton className="h-8 w-16 bg-gray-200" />
          <Skeleton className="h-8 w-8 bg-gray-200" />
        </div>
      </div>
    </div>
  );
};
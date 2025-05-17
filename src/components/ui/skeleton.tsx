import React from 'react';
import { cn } from '../../lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  );
};

export const SkeletonText: React.FC<{ lines?: number }> = ({ lines = 3 }) => {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            'h-4 bg-gray-200',
            i === lines - 1 && 'w-3/4' // Make the last line shorter
          )}
        />
      ))}
    </div>
  );
};

export const SkeletonCard: React.FC = () => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <Skeleton className="h-8 w-1/2 mb-4 bg-gray-200" />
        <SkeletonText lines={3} />
      </div>
    </div>
  );
};

export const SkeletonTable: React.FC<{ rows?: number }> = ({ rows = 5 }) => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex border-b bg-gray-50 p-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex-1 px-2">
            <Skeleton className="h-4 w-full bg-gray-200" />
          </div>
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex border-b p-4">
          {Array.from({ length: 4 }).map((_, colIndex) => (
            <div key={colIndex} className="flex-1 px-2">
              <Skeleton className="h-4 w-full bg-gray-200" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
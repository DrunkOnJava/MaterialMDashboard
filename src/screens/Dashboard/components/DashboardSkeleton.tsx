import React from 'react';
import { Skeleton, SkeletonCard } from '../../../components/ui/skeleton';

export const DashboardSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Metrics skeleton */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>

      {/* Charts skeleton */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <Skeleton className="h-6 w-32 mb-4 bg-gray-200" />
          <Skeleton className="h-[200px] bg-gray-200" />
        </div>
        <div className="rounded-lg border bg-card p-6">
          <Skeleton className="h-6 w-32 mb-4 bg-gray-200" />
          <Skeleton className="h-[200px] bg-gray-200" />
        </div>
      </div>

      {/* Table skeleton */}
      <div className="rounded-lg border bg-card p-6">
        <Skeleton className="h-6 w-40 mb-4 bg-gray-200" />
        <div className="overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-4 py-3 border-b last:border-0">
              <Skeleton className="h-4 w-1/4 bg-gray-200" />
              <Skeleton className="h-4 w-1/4 bg-gray-200" />
              <Skeleton className="h-4 w-1/4 bg-gray-200" />
              <Skeleton className="h-4 w-1/4 bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
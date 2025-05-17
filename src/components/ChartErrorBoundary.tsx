import React from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import { Card, CardContent } from './ui/card';
import { AlertCircle } from 'lucide-react';
import { Button } from './ui/button';

interface ChartErrorBoundaryProps {
  children: React.ReactNode;
  chartName?: string;
}

export const ChartErrorBoundary: React.FC<ChartErrorBoundaryProps> = ({ children, chartName }) => {
  return (
    <ErrorBoundary
      fallback={
        <Card className="w-full h-full min-h-[300px]">
          <CardContent className="flex flex-col items-center justify-center h-full p-8 text-center">
            <AlertCircle className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Chart Error</h3>
            <p className="text-sm text-gray-600 mb-4">
              {chartName ? `Unable to load ${chartName}` : 'Unable to load this chart'}. 
              Please try refreshing the page.
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </Button>
          </CardContent>
        </Card>
      }
    >
      {children}
    </ErrorBoundary>
  );
};
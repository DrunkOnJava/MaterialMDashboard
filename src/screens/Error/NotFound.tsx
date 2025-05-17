import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-surfaceslightgray-10 p-4">
      <Card className="max-w-lg w-full shadow-light-theme-shadow-medium">
        <CardContent className="flex flex-col items-center p-8">
          <div className="w-32 h-32 bg-surfaceslightgray-20 rounded-full flex items-center justify-center mb-6">
            <span className="text-7xl font-bold text-blackblack-60">404</span>
          </div>
          
          <h1 className="text-3xl font-bold text-blackblack-100 mb-2">Page Not Found</h1>
          
          <p className="text-blackblack-60 text-center mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => navigate(-1)}
            >
              Go Back
            </Button>
            
            <Button 
              variant="default" 
              className="flex-1"
              onClick={() => navigate('/')}
            >
              Go Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default NotFound;
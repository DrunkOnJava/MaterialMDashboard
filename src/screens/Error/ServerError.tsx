import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { AlertTriangle } from 'lucide-react';

export function ServerError() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-surfaceslightgray-10 p-4">
      <Card className="max-w-lg w-full shadow-light-theme-shadow-medium">
        <CardContent className="flex flex-col items-center p-8">
          <div className="w-32 h-32 bg-actionalert-light rounded-full flex items-center justify-center mb-6">
            <AlertTriangle className="h-16 w-16 text-actionalert" />
          </div>
          
          <h1 className="text-3xl font-bold text-blackblack-100 mb-2">Server Error</h1>
          
          <p className="text-blackblack-60 text-center mb-2">
            Something went wrong on our server.
          </p>
          
          <p className="text-blackblack-60 text-center text-sm mb-6">
            We're working on fixing the issue. Please try again later or contact support
            if the problem persists.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => window.location.reload()}
            >
              Refresh Page
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

export default ServerError;
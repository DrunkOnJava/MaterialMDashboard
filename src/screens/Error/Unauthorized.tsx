import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { ShieldAlert } from 'lucide-react';

export function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-surfaceslightgray-10 p-4">
      <Card className="max-w-lg w-full shadow-light-theme-shadow-medium">
        <CardContent className="flex flex-col items-center p-8">
          <div className="w-32 h-32 bg-actionwarning-light rounded-full flex items-center justify-center mb-6">
            <ShieldAlert className="h-16 w-16 text-actionwarning" />
          </div>
          
          <h1 className="text-3xl font-bold text-blackblack-100 mb-2">Access Denied</h1>
          
          <p className="text-blackblack-60 text-center mb-2">
            You don't have permission to access this page.
          </p>
          
          <p className="text-blackblack-60 text-center text-sm mb-6">
            Please check your credentials or contact your administrator
            if you believe this is an error.
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

export default Unauthorized;
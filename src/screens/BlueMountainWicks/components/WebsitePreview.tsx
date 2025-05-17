import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../../components/ui/dialog';
import { Button } from '../../../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { Card, CardContent } from '../../../components/ui/card';
import { ExternalLink, Smartphone, Laptop, Tablet, X, Maximize, Minimize } from 'lucide-react';

interface WebsitePreviewProps {
  trigger?: React.ReactNode;
  fullWidth?: boolean;
}

export const WebsitePreview: React.FC<WebsitePreviewProps> = ({ trigger, fullWidth = false }) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Website URL - in a real app, this would be configurable
  const websiteUrl = 'https://example.com/blue-mountain-wicks';

  // Function to handle external website navigation
  const handleNavigateToWebsite = () => {
    window.open(websiteUrl, '_blank');
  };

  // Get frame width based on selected device
  const getFrameWidth = () => {
    switch (device) {
      case 'desktop':
        return '100%';
      case 'tablet':
        return '768px';
      case 'mobile':
        return '375px';
      default:
        return '100%';
    }
  };

  // Get frame class based on selected device and fullscreen state
  const getFrameClass = () => {
    let baseClass =
      'bg-white border border-blackblack-10 rounded-lg mx-auto transition-all duration-300';

    if (isFullscreen) {
      return `${baseClass} w-full h-[calc(100vh-200px)]`;
    }

    switch (device) {
      case 'desktop':
        return `${baseClass} w-full h-[600px]`;
      case 'tablet':
        return `${baseClass} w-[768px] h-[1024px] max-h-[80vh]`;
      case 'mobile':
        return `${baseClass} w-[375px] h-[667px] max-h-[80vh]`;
      default:
        return `${baseClass} w-full h-[600px]`;
    }
  };

  const defaultTrigger = (
    <Button variant="outline" className="flex items-center gap-1" onClick={e => e.preventDefault()}>
      <ExternalLink className="h-4 w-4 mr-1" />
      View Website
    </Button>
  );

  const content = (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      <div className="flex justify-between items-center mb-4">
        <TabsList>
          <TabsTrigger
            value="desktop"
            onClick={() => setDevice('desktop')}
            className={
              device === 'desktop'
                ? 'bg-light-themeprimarylight-blue text-light-themeprimaryblue'
                : ''
            }
          >
            <Laptop className="h-4 w-4 mr-1" />
            <span>Desktop</span>
          </TabsTrigger>
          <TabsTrigger
            value="tablet"
            onClick={() => setDevice('tablet')}
            className={
              device === 'tablet'
                ? 'bg-light-themeprimarylight-blue text-light-themeprimaryblue'
                : ''
            }
          >
            <Tablet className="h-4 w-4 mr-1" />
            <span>Tablet</span>
          </TabsTrigger>
          <TabsTrigger
            value="mobile"
            onClick={() => setDevice('mobile')}
            className={
              device === 'mobile'
                ? 'bg-light-themeprimarylight-blue text-light-themeprimaryblue'
                : ''
            }
          >
            <Smartphone className="h-4 w-4 mr-1" />
            <span>Mobile</span>
          </TabsTrigger>
        </TabsList>

        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => setIsFullscreen(!isFullscreen)}>
            {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
          </Button>
          <Button variant="default" onClick={handleNavigateToWebsite}>
            <ExternalLink className="h-4 w-4 mr-1" />
            Open in Browser
          </Button>
        </div>
      </div>

      <div className="overflow-auto p-4 bg-surfaceslightgray-10 rounded-lg">
        <div className={getFrameClass()}>
          {/* Mock website frame - in a real app, this would be an iframe */}
          <div className="w-full h-full overflow-hidden rounded-lg flex flex-col">
            {/* Mock website header */}
            <div className="bg-[#1E3A5F] text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#1E3A5F] font-bold">BM</span>
                </div>
                <span className="font-bold">Blue Mountain Wicks</span>
              </div>
              <div className="flex gap-4">
                <span>Shop</span>
                <span>Collections</span>
                <span>About</span>
                <span>Contact</span>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                </Button>
              </div>
            </div>

            {/* Mock website hero */}
            <div className="relative h-[300px] bg-gradient-to-r from-[#1E3A5F] to-[#2C5282] flex items-center justify-center text-white p-8 text-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Handcrafted Candles from the Mountains</h1>
                <p className="mb-4">Premium soy candles inspired by nature</p>
                <Button className="bg-white text-[#1E3A5F] hover:bg-gray-100">Shop Now</Button>
              </div>
            </div>

            {/* Mock product carousel */}
            <div className="p-8 bg-white">
              <h2 className="text-xl font-bold mb-4 text-center">Best-selling Candles</h2>
              <div className="flex gap-4 overflow-x-auto pb-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex-shrink-0 w-[200px]">
                    <div className="bg-gray-100 w-full h-[200px] rounded-lg mb-2"></div>
                    <h3 className="font-medium">Mountain Pine</h3>
                    <p className="text-gray-600 text-sm">Fresh pine & cedar</p>
                    <p className="font-bold mt-1">$28.99</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // If fullWidth is true, directly return the content
  if (fullWidth) {
    return content;
  }

  // Otherwise, wrap in a dialog
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger || defaultTrigger}</DialogTrigger>
      <DialogContent className="max-w-[90vw] max-h-[90vh] w-[1200px]">
        <DialogHeader>
          <DialogTitle>Blue Mountain Wicks Website</DialogTitle>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  );
};

export default WebsitePreview;

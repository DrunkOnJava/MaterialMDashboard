import React from 'react';
import { SidebarByAnima } from '../Chip/sections/SidebarByAnima';
import { TopBarByAnima } from '../Chip/sections/TopBarByAnima';
import { TitlebarByAnima } from './components/Titlebar';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Trash2, X, AlertCircle, Ban, Shield } from 'lucide-react';

export const DangerButtons = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Danger Buttons" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Danger Buttons
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Basic Variants</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-actionwarning hover:bg-actionwarning/90 text-white">
                        Delete
                      </Button>
                      <Button
                        className="bg-actionwarning hover:bg-actionwarning/90 text-white"
                        disabled
                      >
                        Disabled
                      </Button>
                      <Button
                        className="bg-actionwarning hover:bg-actionwarning/90 text-white"
                        size="sm"
                      >
                        Small
                      </Button>
                      <Button
                        className="bg-actionwarning hover:bg-actionwarning/90 text-white"
                        size="lg"
                      >
                        Large
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">With Icons</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-actionwarning hover:bg-actionwarning/90 text-white">
                        <Trash2 className="mr-2 h-4 w-4" /> Delete
                      </Button>
                      <Button className="bg-actionwarning hover:bg-actionwarning/90 text-white">
                        <X className="mr-2 h-4 w-4" /> Cancel
                      </Button>
                      <Button className="bg-actionwarning hover:bg-actionwarning/90 text-white">
                        <Ban className="mr-2 h-4 w-4" /> Block
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Usage Example</h3>
                  <div className="p-6 border border-[#111c2d1a] rounded-lg bg-surfaceslightgray-10">
                    <div className="flex flex-col gap-4 max-w-md mx-auto">
                      <div className="flex items-center mb-2">
                        <AlertCircle className="h-5 w-5 text-actionwarning mr-2" />
                        <h4 className="text-xl font-medium">Delete Account</h4>
                      </div>
                      <p className="text-blackblack-60">
                        Are you sure you want to delete your account? This action cannot be undone
                        and all your data will be permanently lost.
                      </p>
                      <div className="flex gap-3 mt-2">
                        <Button variant="outline" className="flex-1">
                          Cancel
                        </Button>
                        <Button className="bg-actionwarning hover:bg-actionwarning/90 text-white flex-1">
                          <Trash2 className="mr-2 h-4 w-4" /> Delete Account
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Implementation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// Basic danger button
<Button className="bg-actionwarning hover:bg-actionwarning/90 text-white">
  Delete
</Button>

// With icon
<Button className="bg-actionwarning hover:bg-actionwarning/90 text-white">
  <Trash2 className="mr-2 h-4 w-4" /> Delete
</Button>

// Different sizes
<Button className="bg-actionwarning hover:bg-actionwarning/90 text-white" size="sm">
  Small
</Button>
<Button className="bg-actionwarning hover:bg-actionwarning/90 text-white" size="lg">
  Large
</Button>

// Disabled state
<Button className="bg-actionwarning hover:bg-actionwarning/90 text-white" disabled>
  Disabled
</Button>`}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

import React from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "./components/Titlebar";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Settings, Filter, Share, Bell } from "lucide-react";

export const SecondaryButtons = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Secondary Buttons" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Secondary Buttons
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Basic Variants</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="secondary">Default</Button>
                      <Button variant="secondary" disabled>Disabled</Button>
                      <Button variant="secondary" size="sm">Small</Button>
                      <Button variant="secondary" size="lg">Large</Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">With Icons</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="secondary">
                        <Settings className="mr-2 h-4 w-4" /> Settings
                      </Button>
                      <Button variant="secondary">
                        <Filter className="mr-2 h-4 w-4" /> Filter
                      </Button>
                      <Button variant="secondary">
                        Share <Share className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Usage Example</h3>
                  <div className="p-6 border border-[#111c2d1a] rounded-lg bg-surfaceslightgray-10">
                    <div className="flex flex-col gap-4 max-w-md mx-auto">
                      <h4 className="text-xl font-medium text-center">Notification Settings</h4>
                      <p className="text-center text-blackblack-60">Configure which notifications you want to receive.</p>
                      <Button variant="secondary" className="mt-2">
                        <Bell className="mr-2 h-4 w-4" /> Manage Notifications
                      </Button>
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
{`// Basic button
<Button variant="secondary">Default</Button>

// With icon
<Button variant="secondary">
  <Settings className="mr-2 h-4 w-4" /> Settings
</Button>

// Different sizes
<Button variant="secondary" size="sm">Small</Button>
<Button variant="secondary" size="lg">Large</Button>

// Disabled state
<Button variant="secondary" disabled>Disabled</Button>`}
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
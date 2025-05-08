import React from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "./components/Titlebar";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { 
  Plus, Minus, Search, Bell, Heart, MoreVertical, 
  Settings, Trash2, Download, Printer 
} from "lucide-react";

export const IconButtons = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Icon Buttons" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Icon Buttons
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Primary Variant</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="primary" size="icon">
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button variant="primary" size="icon">
                        <Search className="h-4 w-4" />
                      </Button>
                      <Button variant="primary" size="icon">
                        <Bell className="h-4 w-4" />
                      </Button>
                      <Button variant="primary" size="icon">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="primary" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Secondary & Outline Variants</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="secondary" size="icon">
                        <Settings className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-actionwarning">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Usage Example</h3>
                  <div className="p-6 border border-[#111c2d1a] rounded-lg bg-surfaceslightgray-10">
                    <div className="flex justify-between items-center max-w-md mx-auto">
                      <div>
                        <h4 className="text-lg font-medium">Document.pdf</h4>
                        <p className="text-sm text-blackblack-60">8 pages • 2.4 MB</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Printer className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-actionwarning">
                          <Trash2 className="h-4 w-4" />
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
{`// Primary icon button
<Button variant="primary" size="icon">
  <Plus className="h-4 w-4" />
</Button>

// Secondary icon button
<Button variant="secondary" size="icon">
  <Settings className="h-4 w-4" />
</Button>

// Outline icon button
<Button variant="outline" size="icon">
  <Minus className="h-4 w-4" />
</Button>

// Ghost icon button
<Button variant="ghost" size="icon">
  <Download className="h-4 w-4" />
</Button>

// Ghost icon button with custom color
<Button variant="ghost" size="icon" className="text-actionwarning">
  <Trash2 className="h-4 w-4" />
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
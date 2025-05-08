import React from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "./components/Titlebar";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Mail, Plus, ArrowRight, Download, Check } from "lucide-react";

export const PrimaryButtons = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Primary Buttons" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Primary Buttons
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Basic Variants</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="primary">Default</Button>
                      <Button variant="primary" disabled>Disabled</Button>
                      <Button variant="primary" size="sm">Small</Button>
                      <Button variant="primary" size="lg">Large</Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">With Icons</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="primary">
                        <Mail className="mr-2 h-4 w-4" /> Email
                      </Button>
                      <Button variant="primary">
                        <Plus className="mr-2 h-4 w-4" /> Create
                      </Button>
                      <Button variant="primary">
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Usage Example</h3>
                  <div className="p-6 border border-[#111c2d1a] rounded-lg bg-surfaceslightgray-10">
                    <div className="flex flex-col gap-4 max-w-md mx-auto">
                      <h4 className="text-xl font-medium text-center">Download Report</h4>
                      <p className="text-center text-blackblack-60">Get your monthly analytics report with all metrics and insights.</p>
                      <Button variant="primary" className="mt-2">
                        <Download className="mr-2 h-4 w-4" /> Download Report
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
<Button variant="primary">Default</Button>

// With icon
<Button variant="primary">
  <Mail className="mr-2 h-4 w-4" /> Email
</Button>

// Different sizes
<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="lg">Large</Button>

// Disabled state
<Button variant="primary" disabled>Disabled</Button>`}
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
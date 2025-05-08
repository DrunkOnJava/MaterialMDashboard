import React from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "./components/Titlebar";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Check, CheckCircle, Save, ThumbsUp, ShieldCheck } from "lucide-react";

export const SuccessButtons = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Success Buttons" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Success Buttons
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Basic Variants</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-actionsuccess hover:bg-actionsuccess/90 text-white">
                        Success
                      </Button>
                      <Button className="bg-actionsuccess hover:bg-actionsuccess/90 text-white" disabled>
                        Disabled
                      </Button>
                      <Button className="bg-actionsuccess hover:bg-actionsuccess/90 text-white" size="sm">
                        Small
                      </Button>
                      <Button className="bg-actionsuccess hover:bg-actionsuccess/90 text-white" size="lg">
                        Large
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">With Icons</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-actionsuccess hover:bg-actionsuccess/90 text-white">
                        <Check className="mr-2 h-4 w-4" /> Approve
                      </Button>
                      <Button className="bg-actionsuccess hover:bg-actionsuccess/90 text-white">
                        <CheckCircle className="mr-2 h-4 w-4" /> Complete
                      </Button>
                      <Button className="bg-actionsuccess hover:bg-actionsuccess/90 text-white">
                        <Save className="mr-2 h-4 w-4" /> Save
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Usage Example</h3>
                  <div className="p-6 border border-[#111c2d1a] rounded-lg bg-surfaceslightgray-10">
                    <div className="flex flex-col gap-4 max-w-md mx-auto">
                      <h4 className="text-xl font-medium text-center">Payment Confirmation</h4>
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-actionsuccess-light rounded-full flex items-center justify-center">
                          <CheckCircle className="h-8 w-8 text-actionsuccess" />
                        </div>
                      </div>
                      <p className="text-center text-blackblack-60">Your payment of $49.99 has been processed successfully.</p>
                      <Button className="bg-actionsuccess hover:bg-actionsuccess/90 text-white mt-2">
                        <ShieldCheck className="mr-2 h-4 w-4" /> View Receipt
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
{`// Basic success button
<Button className="bg-actionsuccess hover:bg-actionsuccess/90 text-white">
  Success
</Button>

// With icon
<Button className="bg-actionsuccess hover:bg-actionsuccess/90 text-white">
  <Check className="mr-2 h-4 w-4" /> Approve
</Button>

// Different sizes
<Button className="bg-actionsuccess hover:bg-actionsuccess/90 text-white" size="sm">
  Small
</Button>
<Button className="bg-actionsuccess hover:bg-actionsuccess/90 text-white" size="lg">
  Large
</Button>

// Disabled state
<Button className="bg-actionsuccess hover:bg-actionsuccess/90 text-white" disabled>
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
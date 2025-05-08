import React from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "../Buttons/components/Titlebar";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { Search, Mail, Lock, User, Eye, EyeOff, AlertCircle } from "lucide-react";

export const InputFields = (): JSX.Element => {
  const [showPassword, setShowPassword] = React.useState(false);
  
  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Input Fields" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Basic Input Fields
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Default Input</h3>
                    <div className="space-y-2">
                      <Label htmlFor="default">Default input</Label>
                      <Input id="default" placeholder="Enter your text" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="disabled">Disabled input</Label>
                      <Input id="disabled" placeholder="Disabled input" disabled />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="readonly">Read-only input</Label>
                      <Input id="readonly" defaultValue="Read-only value" readOnly />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Input Variations</h3>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email input</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
                        <Input id="email" type="email" placeholder="Email address" className="pl-10" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password">Password input</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Your password"
                          className="pl-10 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-blackblack-60"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="search">Search input</Label>
                      <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
                        <Input id="search" placeholder="Search..." className="pl-10" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Input States</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="default-state">Default</Label>
                      <Input id="default-state" placeholder="Default input" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="focus-state" className="text-light-themeprimaryblue">Focus state</Label>
                      <Input id="focus-state" placeholder="Focus input" className="border-light-themeprimaryblue ring-1 ring-light-themeprimaryblue" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="error-state" className="text-actionwarning">Error state</Label>
                      <div className="relative">
                        <Input id="error-state" placeholder="Error input" className="border-actionwarning ring-1 ring-actionwarning pr-10" />
                        <AlertCircle className="absolute right-3 top-3 h-4 w-4 text-actionwarning" />
                      </div>
                      <p className="text-sm text-actionwarning">This field is required</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Usage Example</h3>
                  <div className="p-6 border border-[#111c2d1a] rounded-lg bg-surfaceslightgray-10">
                    <form className="space-y-4 max-w-md mx-auto">
                      <h4 className="text-xl font-medium text-center">Create Account</h4>
                      
                      <div className="space-y-2">
                        <Label htmlFor="full-name">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
                          <Input id="full-name" placeholder="John Doe" className="pl-10" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="signup-email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
                          <Input id="signup-email" type="email" placeholder="john@example.com" className="pl-10" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="signup-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
                          <Input
                            id="signup-password"
                            type="password"
                            placeholder="Create a password"
                            className="pl-10"
                          />
                        </div>
                        <p className="text-xs text-blackblack-60">Password must be at least 8 characters long</p>
                      </div>
                      
                      <Button type="submit" variant="primary" className="w-full mt-4">Create Account</Button>
                    </form>
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
{`// Basic input
<div className="space-y-2">
  <Label htmlFor="default">Default input</Label>
  <Input id="default" placeholder="Enter your text" />
</div>

// Input with icon
<div className="space-y-2">
  <Label htmlFor="email">Email input</Label>
  <div className="relative">
    <Mail className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
    <Input id="email" type="email" placeholder="Email address" className="pl-10" />
  </div>
</div>

// Password input with toggle
<div className="space-y-2">
  <Label htmlFor="password">Password input</Label>
  <div className="relative">
    <Lock className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
    <Input
      id="password"
      type={showPassword ? "text" : "password"}
      placeholder="Your password"
      className="pl-10 pr-10"
    />
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-3 text-blackblack-60"
    >
      {showPassword ? (
        <EyeOff className="h-4 w-4" />
      ) : (
        <Eye className="h-4 w-4" />
      )}
    </button>
  </div>
</div>

// Error state input
<div className="space-y-2">
  <Label htmlFor="error-state" className="text-actionwarning">Error state</Label>
  <div className="relative">
    <Input id="error-state" placeholder="Error input" className="border-actionwarning ring-1 ring-actionwarning pr-10" />
    <AlertCircle className="absolute right-3 top-3 h-4 w-4 text-actionwarning" />
  </div>
  <p className="text-sm text-actionwarning">This field is required</p>
</div>`}
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
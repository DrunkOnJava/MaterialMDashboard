import React from 'react';
import { SidebarByAnima } from '../Chip/sections/SidebarByAnima';
import { TopBarByAnima } from '../Chip/sections/TopBarByAnima';
import { TitlebarByAnima } from './components/Titlebar';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { ExternalLink, ChevronRight, ArrowRight, HelpCircle, Info } from 'lucide-react';

export const LinkButtons = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Link Buttons" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Link Buttons
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Basic Variants</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="link" className="text-light-themeprimaryblue">
                        View details
                      </Button>
                      <Button variant="link" className="text-light-themeprimaryblue" disabled>
                        Disabled link
                      </Button>
                      <Button variant="link" className="text-light-themeprimaryblue p-0">
                        No padding
                      </Button>
                      <Button variant="link" className="text-light-themesecondarypurple">
                        Secondary color
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">With Icons</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="link" className="text-light-themeprimaryblue">
                        External link <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="link" className="text-light-themeprimaryblue">
                        Next step <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="link" className="text-light-themeprimaryblue">
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Usage Example</h3>
                  <div className="p-6 border border-[#111c2d1a] rounded-lg bg-surfaceslightgray-10">
                    <div className="flex flex-col gap-4 max-w-md mx-auto">
                      <div className="bg-white rounded-lg border border-[#111c2d1a] p-4">
                        <div className="flex items-center mb-2">
                          <Info className="h-5 w-5 text-light-themeprimaryblue mr-2" />
                          <h4 className="text-lg font-medium">Terms & Conditions</h4>
                        </div>
                        <p className="text-sm text-blackblack-60 mb-3">
                          By creating an account, you agree to our Terms of Service and Privacy
                          Policy.
                        </p>
                        <div className="flex gap-2">
                          <Button variant="link" className="text-light-themeprimaryblue h-8 p-0">
                            Terms of Service <ExternalLink className="ml-1 h-3 w-3" />
                          </Button>
                          <span className="text-blackblack-40">|</span>
                          <Button variant="link" className="text-light-themeprimaryblue h-8 p-0">
                            Privacy Policy <ExternalLink className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <Button variant="link" className="text-blackblack-60">
                          <HelpCircle className="mr-2 h-4 w-4" /> Need help?
                        </Button>
                        <Button variant="link" className="text-light-themeprimaryblue">
                          Continue <ArrowRight className="ml-2 h-4 w-4" />
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
                      {`// Basic link button
<Button variant="link" className="text-light-themeprimaryblue">
  View details
</Button>

// With icon
<Button variant="link" className="text-light-themeprimaryblue">
  External link <ExternalLink className="ml-2 h-4 w-4" />
</Button>

// Different color
<Button variant="link" className="text-light-themesecondarypurple">
  Secondary color
</Button>

// No padding
<Button variant="link" className="text-light-themeprimaryblue p-0">
  No padding
</Button>

// Disabled state
<Button variant="link" className="text-light-themeprimaryblue" disabled>
  Disabled link
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

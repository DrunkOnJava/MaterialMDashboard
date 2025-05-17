import React from 'react';
import { SidebarByAnima } from '../Chip/sections/SidebarByAnima';
import { TopBarByAnima } from '../Chip/sections/TopBarByAnima';
import { TitlebarByAnima } from './components/Titlebar';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  ThumbsUp,
  ThumbsDown,
  ChevronLeft,
  ChevronRight,
  List,
  Rows,
  Grid,
} from 'lucide-react';

export const GroupedButtons = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Grouped Buttons" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Grouped Buttons
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Text Formatting</h3>
                    <div className="inline-flex rounded-md shadow-sm">
                      <Button variant="outline" className="rounded-r-none">
                        <Bold className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="rounded-none border-l-0">
                        <Italic className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="rounded-l-none border-l-0">
                        <Underline className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-sm mb-2">Text Alignment</h3>
                      <div className="inline-flex rounded-md shadow-sm">
                        <Button variant="outline" className="rounded-r-none">
                          <AlignLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="rounded-none border-l-0">
                          <AlignCenter className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="rounded-none border-l-0">
                          <AlignRight className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="rounded-l-none border-l-0">
                          <AlignJustify className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Pagination</h3>
                    <div className="inline-flex rounded-md shadow-sm">
                      <Button variant="outline" className="rounded-r-none">
                        <ChevronLeft className="h-4 w-4" />
                        <span className="ml-1">Previous</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="rounded-none border-l-0 bg-light-themeprimarylight-blue text-light-themeprimaryblue"
                      >
                        1
                      </Button>
                      <Button variant="outline" className="rounded-none border-l-0">
                        2
                      </Button>
                      <Button variant="outline" className="rounded-none border-l-0">
                        3
                      </Button>
                      <Button variant="outline" className="rounded-l-none border-l-0">
                        <span className="mr-1">Next</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-sm mb-2">Rating</h3>
                      <div className="inline-flex rounded-md shadow-sm">
                        <Button variant="outline" className="rounded-r-none">
                          <ThumbsUp className="h-4 w-4 text-actionsuccess" />
                          <span className="ml-1">Like</span>
                        </Button>
                        <Button variant="outline" className="rounded-l-none border-l-0">
                          <ThumbsDown className="h-4 w-4 text-actionwarning" />
                          <span className="ml-1">Dislike</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Usage Example</h3>
                  <div className="p-6 border border-[#111c2d1a] rounded-lg bg-surfaceslightgray-10">
                    <div className="flex flex-col gap-4 max-w-md mx-auto">
                      <h4 className="text-xl font-medium text-center">Gallery View</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                          <div
                            key={i}
                            className="aspect-square bg-white rounded border border-[#111c2d1a] flex items-center justify-center"
                          >
                            <span className="text-blackblack-40 text-sm">Image {i}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center mt-2">
                        <div className="inline-flex rounded-md shadow-sm">
                          <Button variant="outline" className="rounded-r-none">
                            <List className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" className="rounded-none border-l-0">
                            <Rows className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            className="rounded-l-none border-l-0 bg-light-themeprimarylight-blue text-light-themeprimaryblue"
                          >
                            <Grid className="h-4 w-4" />
                          </Button>
                        </div>
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
                      {`// Basic button group
<div className="inline-flex rounded-md shadow-sm">
  <Button
    variant="outline"
    className="rounded-r-none"
  >
    <Bold className="h-4 w-4" />
  </Button>
  <Button
    variant="outline"
    className="rounded-none border-l-0"
  >
    <Italic className="h-4 w-4" />
  </Button>
  <Button
    variant="outline"
    className="rounded-l-none border-l-0"
  >
    <Underline className="h-4 w-4" />
  </Button>
</div>

// Button group with active state
<div className="inline-flex rounded-md shadow-sm">
  <Button
    variant="outline"
    className="rounded-r-none"
  >
    <List className="h-4 w-4" />
  </Button>
  <Button
    variant="outline"
    className="rounded-none border-l-0"
  >
    <Rows className="h-4 w-4" />
  </Button>
  <Button
    variant="outline"
    className="rounded-l-none border-l-0 bg-light-themeprimarylight-blue text-light-themeprimaryblue"
  >
    <Grid className="h-4 w-4" />
  </Button>
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

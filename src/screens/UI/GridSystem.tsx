import React from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "../Buttons/components/Titlebar";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";

export const GridSystem = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Grid System" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Basic Grid System
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium mb-4">Grid Columns</h3>
                  <p className="text-blackblack-80 mb-6">
                    Our grid system is built with Tailwind CSS and provides a 12-column layout by default.
                    The grid is responsive and adapts to different screen sizes automatically.
                  </p>
                  
                  {/* 1 column grid */}
                  <div className="mb-8">
                    <h4 className="text-base font-medium mb-2">1 Column (Full Width)</h4>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-light-themeprimarylight-blue p-4 text-light-themeprimaryblue text-center rounded">
                        Full Width
                      </div>
                    </div>
                  </div>
                  
                  {/* 2 column grid */}
                  <div className="mb-8">
                    <h4 className="text-base font-medium mb-2">2 Columns</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-light-themeprimarylight-blue p-4 text-light-themeprimaryblue text-center rounded">
                        Column 1
                      </div>
                      <div className="bg-light-themeprimarylight-blue p-4 text-light-themeprimaryblue text-center rounded">
                        Column 2
                      </div>
                    </div>
                  </div>
                  
                  {/* 3 column grid */}
                  <div className="mb-8">
                    <h4 className="text-base font-medium mb-2">3 Columns</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-light-themeprimarylight-blue p-4 text-light-themeprimaryblue text-center rounded">
                        Column 1
                      </div>
                      <div className="bg-light-themeprimarylight-blue p-4 text-light-themeprimaryblue text-center rounded">
                        Column 2
                      </div>
                      <div className="bg-light-themeprimarylight-blue p-4 text-light-themeprimaryblue text-center rounded">
                        Column 3
                      </div>
                    </div>
                  </div>
                  
                  {/* 4 column grid */}
                  <div className="mb-8">
                    <h4 className="text-base font-medium mb-2">4 Columns</h4>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="bg-light-themeprimarylight-blue p-4 text-light-themeprimaryblue text-center rounded">
                        Column 1
                      </div>
                      <div className="bg-light-themeprimarylight-blue p-4 text-light-themeprimaryblue text-center rounded">
                        Column 2
                      </div>
                      <div className="bg-light-themeprimarylight-blue p-4 text-light-themeprimaryblue text-center rounded">
                        Column 3
                      </div>
                      <div className="bg-light-themeprimarylight-blue p-4 text-light-themeprimaryblue text-center rounded">
                        Column 4
                      </div>
                    </div>
                  </div>
                  
                  {/* 6 column grid */}
                  <div className="mb-8">
                    <h4 className="text-base font-medium mb-2">6 Columns</h4>
                    <div className="grid grid-cols-6 gap-4">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="bg-light-themeprimarylight-blue p-4 text-light-themeprimaryblue text-center rounded">
                          {i+1}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* 12 column grid */}
                  <div className="mb-8">
                    <h4 className="text-base font-medium mb-2">12 Columns</h4>
                    <div className="grid grid-cols-12 gap-4">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="bg-light-themeprimarylight-blue p-2 text-light-themeprimaryblue text-center rounded">
                          {i+1}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Responsive Grid System
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium mb-4">Responsive Columns</h3>
                  <p className="text-blackblack-80 mb-6">
                    The grid automatically adjusts based on screen size. You can also explicitly control the number of columns at different breakpoints.
                  </p>
                  
                  {/* Responsive grid example */}
                  <div className="mb-8">
                    <h4 className="text-base font-medium mb-2">Responsive Grid Example</h4>
                    <p className="text-sm text-blackblack-60 mb-4">
                      1 column on mobile, 2 columns on tablets, 4 columns on desktop
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="bg-light-themeprimarylight-blue p-4 text-light-themeprimaryblue text-center rounded">
                        Column 1
                      </div>
                      <div className="bg-light-themeprimarylight-blue p-4 text-light-themeprimaryblue text-center rounded">
                        Column 2
                      </div>
                      <div className="bg-light-themeprimarylight-blue p-4 text-light-themeprimaryblue text-center rounded">
                        Column 3
                      </div>
                      <div className="bg-light-themeprimarylight-blue p-4 text-light-themeprimaryblue text-center rounded">
                        Column 4
                      </div>
                    </div>
                  </div>
                  
                  {/* Responsive column span */}
                  <div className="mb-8">
                    <h4 className="text-base font-medium mb-2">Column Span Example</h4>
                    <p className="text-sm text-blackblack-60 mb-4">
                      Controlling how many columns each item spans at different breakpoints
                    </p>
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-12 md:col-span-8 lg:col-span-6 bg-light-themeprimarylight-blue p-4 text-light-themeprimaryblue text-center rounded">
                        col-span-12 md:col-span-8 lg:col-span-6
                      </div>
                      <div className="col-span-12 md:col-span-4 lg:col-span-6 bg-light-themesecondarylight-purple p-4 text-light-themesecondarypurple text-center rounded">
                        col-span-12 md:col-span-4 lg:col-span-6
                      </div>
                    </div>
                  </div>
                  
                  {/* Different layouts at different breakpoints */}
                  <div className="mb-8">
                    <h4 className="text-base font-medium mb-2">Layout Shift Example</h4>
                    <p className="text-sm text-blackblack-60 mb-4">
                      Different layouts at different screen sizes (resize your browser to see the change)
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="md:col-span-2 bg-light-themeprimarylight-blue p-4 text-light-themeprimaryblue text-center rounded h-32 md:h-auto">
                        Main Content (Full width on mobile, 2/3 on desktop)
                      </div>
                      <div className="bg-light-themesecondarylight-purple p-4 text-light-themesecondarypurple text-center rounded h-32 md:h-auto">
                        Sidebar (Below on mobile, Right side on desktop)
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Advanced Grid Features
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium mb-4">Grid Gap & Spacing</h3>
                  
                  {/* Grid gap examples */}
                  <div className="mb-8">
                    <h4 className="text-base font-medium mb-2">Grid Gap Examples</h4>
                    <div className="space-y-6">
                      <div>
                        <p className="text-sm text-blackblack-60 mb-2">Small Gap (gap-2)</p>
                        <div className="grid grid-cols-4 gap-2">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="bg-light-themeprimarylight-blue p-4 text-light-themeprimaryblue text-center rounded">
                              Item
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-blackblack-60 mb-2">Medium Gap (gap-4)</p>
                        <div className="grid grid-cols-4 gap-4">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="bg-light-themeprimarylight-blue p-4 text-light-themeprimaryblue text-center rounded">
                              Item
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-blackblack-60 mb-2">Large Gap (gap-6)</p>
                        <div className="grid grid-cols-4 gap-6">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="bg-light-themeprimarylight-blue p-4 text-light-themeprimaryblue text-center rounded">
                              Item
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-blackblack-60 mb-2">Different Row & Column Gaps (gap-x-8 gap-y-4)</p>
                        <div className="grid grid-cols-4 gap-x-8 gap-y-4">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="bg-light-themeprimarylight-blue p-4 text-light-themeprimaryblue text-center rounded">
                              Item
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Grid auto-fit and auto-fill */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Grid Template Areas</h3>
                    <p className="text-blackblack-80 mb-4">
                      Using CSS Grid with named template areas to create more complex layouts.
                    </p>
                    
                    <div className="border border-[#111c2d1a] rounded-lg p-4 mb-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4" style={{
                        gridTemplateAreas: `
                          "header header header header"
                          "sidebar main main main"
                          "sidebar main main main"
                          "footer footer footer footer"
                        `
                      }}>
                        <div className="bg-light-themeprimarylight-blue p-4 text-light-themeprimaryblue rounded col-span-full" style={{ gridArea: 'header' }}>
                          Header
                        </div>
                        <div className="bg-light-themesecondarylight-purple p-4 text-light-themesecondarypurple rounded" style={{ gridArea: 'sidebar' }}>
                          Sidebar
                        </div>
                        <div className="bg-actionsuccess-light p-4 text-actionsuccess rounded md:col-span-3" style={{ gridArea: 'main' }}>
                          Main Content Area
                          <p className="text-sm mt-2">This is the main content area of the layout.</p>
                        </div>
                        <div className="bg-actionalert-light p-4 text-actionalert rounded col-span-full" style={{ gridArea: 'footer' }}>
                          Footer
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-blackblack-60 mb-4">
                      The above layout uses grid template areas to create a common web layout pattern with a header, footer, sidebar, and main content area.
                    </p>
                  </div>
                  
                  {/* Complex grid layout */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Complex Grid Layout Example</h3>
                    
                    <div className="border border-[#111c2d1a] rounded-lg p-4">
                      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                        {/* Hero Section */}
                        <div className="col-span-full bg-light-themeprimarylight-blue p-6 text-light-themeprimaryblue rounded flex items-center justify-center min-h-[100px]">
                          Hero Section
                        </div>
                        
                        {/* Feature cards */}
                        <div className="col-span-2 bg-light-themesecondarylight-purple p-4 text-light-themesecondarypurple rounded min-h-[100px]">
                          Feature 1
                        </div>
                        <div className="col-span-2 bg-light-themesecondarylight-purple p-4 text-light-themesecondarypurple rounded min-h-[100px]">
                          Feature 2
                        </div>
                        <div className="col-span-2 bg-light-themesecondarylight-purple p-4 text-light-themesecondarypurple rounded min-h-[100px]">
                          Feature 3
                        </div>
                        
                        {/* Main content and sidebar */}
                        <div className="col-span-full md:col-span-4 bg-actionsuccess-light p-4 text-actionsuccess rounded min-h-[200px]">
                          <h5 className="font-medium">Main Content</h5>
                          <p className="text-sm mt-2">This is the main content section that spans 4 columns on desktop.</p>
                        </div>
                        <div className="col-span-full md:col-span-2 bg-actionalert-light p-4 text-actionalert rounded min-h-[200px]">
                          <h5 className="font-medium">Sidebar</h5>
                          <p className="text-sm mt-2">Supporting information goes here.</p>
                        </div>
                        
                        {/* Footer sections */}
                        <div className="col-span-full md:col-span-3 bg-actionwarning-light p-4 text-actionwarning rounded min-h-[100px]">
                          Footer Left
                        </div>
                        <div className="col-span-full md:col-span-3 bg-actionwarning-light p-4 text-actionwarning rounded min-h-[100px]">
                          Footer Right
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
                  Implementation Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Grid System Code Examples</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`// Basic grid with columns
<div className="grid grid-cols-3 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

// Responsive grid that changes with screen size
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>

// Column spanning
<div className="grid grid-cols-12 gap-4">
  <div className="col-span-12 md:col-span-8">Main Content</div>
  <div className="col-span-12 md:col-span-4">Sidebar</div>
</div>

// Auto columns
<div className="grid grid-cols-auto-fit gap-4">
  <div>Auto Item 1</div>
  <div>Auto Item 2</div>
  <div>Auto Item 3</div>
</div>`}
                    </code>
                  </pre>
                  
                  <h3 className="text-lg font-medium mt-6">Grid Best Practices</h3>
                  <ul className="list-disc pl-6 space-y-2 text-blackblack-80">
                    <li><strong>Mobile-first approach</strong> - Start with the mobile layout and build up with responsive utilities</li>
                    <li><strong>Use semantic names</strong> - When using grid areas, use descriptive names like "header", "sidebar", "main", etc.</li>
                    <li><strong>Consistent gaps</strong> - Maintain consistent gaps in your grid system throughout your application</li>
                    <li><strong>Consider content</strong> - Choose your grid layout based on your content, not the other way around</li>
                    <li><strong>Accessibility</strong> - Ensure your layout makes sense when linearized (e.g., for screen readers)</li>
                    <li><strong>Avoid fixed heights</strong> - Let the content determine the height when possible to maintain flexibility</li>
                    <li><strong>Combine with Flexbox</strong> - Use Grid for the overall layout and Flexbox for alignment within grid items</li>
                  </ul>
                  
                  <h3 className="text-lg font-medium mt-6">Advanced Grid Templates</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`// Grid template areas example
<div style={{
  display: 'grid',
  gridTemplateAreas: \`
    "header header header"
    "sidebar main main"
    "footer footer footer"
  \`,
  gridTemplateColumns: '1fr 3fr 1fr',
  gap: '1rem'
}}>
  <div style={{ gridArea: 'header' }}>Header</div>
  <div style={{ gridArea: 'sidebar' }}>Sidebar</div>
  <div style={{ gridArea: 'main' }}>Main Content</div>
  <div style={{ gridArea: 'footer' }}>Footer</div>
</div>

// Auto-fill - creates as many columns as possible with the specified size
<div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
  {items.map(item => (
    <div key={item.id}>Card</div>
  ))}
</div>

// Auto-fit - expands columns to fill the available space
<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
  {items.map(item => (
    <div key={item.id}>Card</div>
  ))}
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
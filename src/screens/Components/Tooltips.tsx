import React from 'react';
import { Tooltip } from '../../components/ui/tooltip';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { TitlebarByAnima } from '../Buttons/components/Titlebar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { TriangleAlert, Info, Check, X, HelpCircle } from 'lucide-react';

export const Tooltips = (): JSX.Element => {
  // State for interactive demo
  const [side, setSide] = React.useState<'top' | 'right' | 'bottom' | 'left'>('top');
  const [align, setAlign] = React.useState<'start' | 'center' | 'end'>('center');
  const [delay, setDelay] = React.useState<number>(200);
  const [showArrow, setShowArrow] = React.useState<boolean>(true);
  const [arrowSize, setArrowSize] = React.useState<number>(10);

  return (
    <div className="flex flex-col overflow-hidden">
      <TitlebarByAnima title="Tooltips" />
      <main className="flex-1 overflow-auto p-6">
        <div className="space-y-6">
          {/* Basic Tooltips */}
          <Card className="rounded-xl shadow-light-theme-shadow-medium">
            <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
              <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                Basic Tooltips
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-6">
                <Tooltip content="This is a default tooltip">
                  <Button>Default Tooltip</Button>
                </Tooltip>

                <Tooltip content="Important information" variant="info">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    Info Tooltip
                  </Button>
                </Tooltip>

                <Tooltip content="Warning! This action may cause issues" variant="warning">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-actionwarning border-actionwarning"
                  >
                    <TriangleAlert className="h-4 w-4" />
                    Warning Tooltip
                  </Button>
                </Tooltip>

                <Tooltip content="Error! Cannot complete this action" variant="error">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-actionalert border-actionalert"
                  >
                    <X className="h-4 w-4" />
                    Error Tooltip
                  </Button>
                </Tooltip>

                <Tooltip content="Operation completed successfully" variant="success">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-actionsuccess border-actionsuccess"
                  >
                    <Check className="h-4 w-4" />
                    Success Tooltip
                  </Button>
                </Tooltip>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Tooltip Variants</h3>
                <p className="text-blackblack-60 mb-2">
                  Use the{' '}
                  <code className="bg-surfaceslightgray-10 px-1 py-0.5 rounded">variant</code> prop
                  to change the appearance of the tooltip.
                </p>
                <pre className="bg-surfaceslightgray-10 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">
                    {`// Default tooltip
<Tooltip content="This is a default tooltip">
  <Button>Default Tooltip</Button>
</Tooltip>

// Info tooltip
<Tooltip content="Important information" variant="info">
  <Button>Info Tooltip</Button>
</Tooltip>

// Warning tooltip
<Tooltip content="Warning! This action may cause issues" variant="warning">
  <Button>Warning Tooltip</Button>
</Tooltip>

// Error tooltip
<Tooltip content="Error! Cannot complete this action" variant="error">
  <Button>Error Tooltip</Button>
</Tooltip>

// Success tooltip
<Tooltip content="Operation completed successfully" variant="success">
  <Button>Success Tooltip</Button>
</Tooltip>`}
                  </code>
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Tooltip Positioning */}
          <Card className="rounded-xl shadow-light-theme-shadow-medium">
            <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
              <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                Tooltip Positioning
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-6 justify-center">
                <div className="grid grid-cols-3 gap-4 max-w-md">
                  <div></div>
                  <div>
                    <Tooltip content="Top tooltip" side="top">
                      <Button variant="outline" className="w-full">
                        Top
                      </Button>
                    </Tooltip>
                  </div>
                  <div></div>

                  <div>
                    <Tooltip content="Left tooltip" side="left">
                      <Button variant="outline" className="w-full">
                        Left
                      </Button>
                    </Tooltip>
                  </div>
                  <div className="flex items-center justify-center">
                    <HelpCircle className="h-6 w-6 text-blackblack-60" />
                  </div>
                  <div>
                    <Tooltip content="Right tooltip" side="right">
                      <Button variant="outline" className="w-full">
                        Right
                      </Button>
                    </Tooltip>
                  </div>

                  <div></div>
                  <div>
                    <Tooltip content="Bottom tooltip" side="bottom">
                      <Button variant="outline" className="w-full">
                        Bottom
                      </Button>
                    </Tooltip>
                  </div>
                  <div></div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Positioning Options</h3>
                <p className="text-blackblack-60 mb-2">
                  Use the <code className="bg-surfaceslightgray-10 px-1 py-0.5 rounded">side</code>{' '}
                  and <code className="bg-surfaceslightgray-10 px-1 py-0.5 rounded">align</code>{' '}
                  props to control tooltip positioning.
                </p>
                <pre className="bg-surfaceslightgray-10 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">
                    {`// Position options
<Tooltip content="Top tooltip" side="top">
  <Button>Top</Button>
</Tooltip>

<Tooltip content="Right tooltip" side="right">
  <Button>Right</Button>
</Tooltip>

<Tooltip content="Bottom tooltip" side="bottom">
  <Button>Bottom</Button>
</Tooltip>

<Tooltip content="Left tooltip" side="left">
  <Button>Left</Button>
</Tooltip>

// Alignment options (with side="top" for example)
<Tooltip content="Aligned to start" side="top" align="start">
  <Button>Start</Button>
</Tooltip>

<Tooltip content="Aligned to center" side="top" align="center">
  <Button>Center</Button>
</Tooltip>

<Tooltip content="Aligned to end" side="top" align="end">
  <Button>End</Button>
</Tooltip>`}
                  </code>
                </pre>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Alignment Examples</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Tooltip content="Aligned to start" side="top" align="start">
                    <Button variant="outline">Top Start</Button>
                  </Tooltip>

                  <Tooltip content="Aligned to center" side="top" align="center">
                    <Button variant="outline">Top Center</Button>
                  </Tooltip>

                  <Tooltip content="Aligned to end" side="top" align="end">
                    <Button variant="outline">Top End</Button>
                  </Tooltip>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customization */}
          <Card className="rounded-xl shadow-light-theme-shadow-medium">
            <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
              <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                Tooltip Customization
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Customize Your Tooltip</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="side">Position:</Label>
                      <Select
                        value={side}
                        onValueChange={value =>
                          setSide(value as 'top' | 'right' | 'bottom' | 'left')
                        }
                      >
                        <SelectTrigger id="side">
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="top">Top</SelectItem>
                          <SelectItem value="right">Right</SelectItem>
                          <SelectItem value="bottom">Bottom</SelectItem>
                          <SelectItem value="left">Left</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="align">Alignment:</Label>
                      <Select
                        value={align}
                        onValueChange={value => setAlign(value as 'start' | 'center' | 'end')}
                      >
                        <SelectTrigger id="align">
                          <SelectValue placeholder="Select alignment" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="start">Start</SelectItem>
                          <SelectItem value="center">Center</SelectItem>
                          <SelectItem value="end">End</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="delay">Delay (ms):</Label>
                      <Input
                        id="delay"
                        type="number"
                        min={0}
                        max={1000}
                        value={delay}
                        onChange={e => setDelay(parseInt(e.target.value) || 0)}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="showArrow"
                        checked={showArrow}
                        onChange={e => setShowArrow(e.target.checked)}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <Label htmlFor="showArrow">Show arrow</Label>
                    </div>

                    {showArrow && (
                      <div className="space-y-2">
                        <Label htmlFor="arrowSize">Arrow size:</Label>
                        <Input
                          id="arrowSize"
                          type="number"
                          min={6}
                          max={20}
                          value={arrowSize}
                          onChange={e => setArrowSize(parseInt(e.target.value) || 10)}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-center p-8">
                  <Tooltip
                    content="Your customized tooltip"
                    side={side}
                    align={align}
                    delayDuration={delay}
                    showArrow={showArrow}
                    arrowSize={arrowSize}
                  >
                    <Button>Hover Me</Button>
                  </Tooltip>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Advanced Customization</h3>
                <p className="text-blackblack-60 mb-2">
                  The tooltip component supports delay, arrow customization, and more.
                </p>
                <pre className="bg-surfaceslightgray-10 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">
                    {`// Delay before showing tooltip
<Tooltip 
  content="Delayed tooltip" 
  delayDuration={500} // 500ms delay
>
  <Button>Delayed Tooltip</Button>
</Tooltip>

// Arrow customization
<Tooltip 
  content="No arrow tooltip" 
  showArrow={false}
>
  <Button>No Arrow</Button>
</Tooltip>

<Tooltip 
  content="Large arrow tooltip" 
  arrowSize={16} // Larger arrow
>
  <Button>Large Arrow</Button>
</Tooltip>

// Fully customized tooltip
<Tooltip 
  content="Fully custom tooltip"
  side="bottom"
  align="start"
  delayDuration={300}
  showArrow={true}
  arrowSize={12}
  variant="info"
>
  <Button>Custom Tooltip</Button>
</Tooltip>`}
                  </code>
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* API Reference */}
          <Card className="rounded-xl shadow-light-theme-shadow-medium">
            <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
              <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                Tooltip API Reference
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Props</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-surfaceslightgray-10 text-blackblack-60">
                      <th className="border border-[#111c2d1a] px-4 py-2 text-left">Prop</th>
                      <th className="border border-[#111c2d1a] px-4 py-2 text-left">Type</th>
                      <th className="border border-[#111c2d1a] px-4 py-2 text-left">Default</th>
                      <th className="border border-[#111c2d1a] px-4 py-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-[#111c2d1a] px-4 py-2 font-medium">content</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">ReactNode</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">-</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">
                        The content to display in the tooltip
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#111c2d1a] px-4 py-2 font-medium">children</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">ReactNode</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">-</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">
                        The element that triggers the tooltip
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#111c2d1a] px-4 py-2 font-medium">variant</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">
                        "default" | "info" | "warning" | "error" | "success"
                      </td>
                      <td className="border border-[#111c2d1a] px-4 py-2">"default"</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">
                        The visual style of the tooltip
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#111c2d1a] px-4 py-2 font-medium">side</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">
                        "top" | "right" | "bottom" | "left"
                      </td>
                      <td className="border border-[#111c2d1a] px-4 py-2">"top"</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">
                        The preferred side of the trigger to render the tooltip
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#111c2d1a] px-4 py-2 font-medium">align</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">
                        "start" | "center" | "end"
                      </td>
                      <td className="border border-[#111c2d1a] px-4 py-2">"center"</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">
                        The preferred alignment relative to the trigger
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#111c2d1a] px-4 py-2 font-medium">
                        delayDuration
                      </td>
                      <td className="border border-[#111c2d1a] px-4 py-2">number</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">200</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">
                        The delay in milliseconds before showing the tooltip
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#111c2d1a] px-4 py-2 font-medium">showArrow</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">boolean</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">true</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">
                        Whether to show an arrow pointing to the trigger
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#111c2d1a] px-4 py-2 font-medium">arrowSize</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">number</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">10</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">
                        The size of the arrow in pixels
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#111c2d1a] px-4 py-2 font-medium">className</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">string</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">-</td>
                      <td className="border border-[#111c2d1a] px-4 py-2">
                        Additional CSS classes to apply to the tooltip
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Tooltips;

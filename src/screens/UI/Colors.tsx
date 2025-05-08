import React from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "../Buttons/components/Titlebar";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Copy, Check } from "lucide-react";
import { useToast } from "../../hooks/use-toast";

interface ColorSwatch {
  name: string;
  variable: string;
  hex: string;
  className: string;
  textClass?: string;
}

export const Colors = (): JSX.Element => {
  const { toast } = useToast();
  const [copiedColor, setCopiedColor] = React.useState<string | null>(null);

  const handleCopyColor = (colorVar: string, colorHex: string) => {
    navigator.clipboard.writeText(colorHex);
    setCopiedColor(colorVar);
    
    toast({
      title: "Color copied to clipboard",
      description: `${colorHex} has been copied to your clipboard.`,
      variant: "default",
    });
    
    setTimeout(() => {
      setCopiedColor(null);
    }, 2000);
  };

  // Primary Colors
  const primaryColors: ColorSwatch[] = [
    { name: "Primary Blue", variable: "--light-themeprimaryblue", hex: "rgba(0, 161, 255, 1)", className: "bg-light-themeprimaryblue" },
    { name: "Primary Blue Hover", variable: "--light-themeprimaryblue-hover", hex: "rgba(0, 145, 229, 1)", className: "bg-light-themeprimaryblue-hover" },
    { name: "Primary Light Blue", variable: "--light-themeprimarylight-blue", hex: "rgba(217, 241, 255, 1)", className: "bg-light-themeprimarylight-blue", textClass: "text-blackblack-100" },
  ];

  // Secondary Colors
  const secondaryColors: ColorSwatch[] = [
    { name: "Secondary Purple", variable: "--light-themesecondarypurple", hex: "rgba(137, 101, 229, 1)", className: "bg-light-themesecondarypurple" },
    { name: "Secondary Purple Hover", variable: "--light-themesecondarypurple-hover", hex: "rgba(103, 58, 222, 1)", className: "bg-light-themesecondarypurple-hover" },
    { name: "Secondary Light Purple", variable: "--light-themesecondarylight-purple", hex: "rgba(231, 226, 243, 1)", className: "bg-light-themesecondarylight-purple", textClass: "text-blackblack-100" },
  ];

  // Action Colors
  const actionColors: ColorSwatch[] = [
    { name: "Success", variable: "--actionsuccess", hex: "rgba(0, 206, 182, 1)", className: "bg-actionsuccess" },
    { name: "Success Light", variable: "--actionsuccess-light", hex: "rgba(186, 250, 242, 1)", className: "bg-actionsuccess-light", textClass: "text-blackblack-100" },
    { name: "Alert", variable: "--actionalert", hex: "rgba(255, 185, 0, 1)", className: "bg-actionalert", textClass: "text-blackblack-100" },
    { name: "Alert Light", variable: "--actionalert-light", hex: "rgba(255, 241, 204, 1)", className: "bg-actionalert-light", textClass: "text-blackblack-100" },
    { name: "Warning", variable: "--actionwarning", hex: "rgba(255, 102, 146, 1)", className: "bg-actionwarning" },
    { name: "Warning Light", variable: "--actionwarning-light", hex: "rgba(255, 217, 228, 1)", className: "bg-actionwarning-light", textClass: "text-blackblack-100" },
  ];

  // Black and Gray Shades
  const grayColors: ColorSwatch[] = [
    { name: "Black 100%", variable: "--blackblack-100", hex: "rgba(17, 28, 45, 1)", className: "bg-blackblack-100" },
    { name: "Black 80%", variable: "--blackblack-80", hex: "rgba(17, 28, 45, 0.8)", className: "bg-blackblack-80" },
    { name: "Black 60%", variable: "--blackblack-60", hex: "rgba(17, 28, 45, 0.6)", className: "bg-blackblack-60" },
    { name: "Black 40%", variable: "--blackblack-40", hex: "rgba(17, 28, 45, 0.4)", className: "bg-blackblack-40", textClass: "text-blackwhite" },
    { name: "Black 20%", variable: "--blackblack-20", hex: "rgba(17, 28, 45, 0.2)", className: "bg-blackblack-20", textClass: "text-blackblack-100" },
    { name: "Black 10%", variable: "--blackblack-10", hex: "rgba(17, 28, 45, 0.1)", className: "bg-blackblack-10", textClass: "text-blackblack-100" },
    { name: "White", variable: "--blackwhite", hex: "rgba(255, 255, 255, 1)", className: "bg-blackwhite border border-[#111c2d1a]", textClass: "text-blackblack-100" },
  ];

  // Surface Colors
  const surfaceColors: ColorSwatch[] = [
    { name: "Surface Light Gray 10", variable: "--surfaceslightgray-10", hex: "rgba(248, 250, 253, 1)", className: "bg-surfaceslightgray-10", textClass: "text-blackblack-100" },
    { name: "Surface Light Gray 20", variable: "--surfaceslightgray-20", hex: "rgba(239, 244, 250, 1)", className: "bg-surfaceslightgray-20", textClass: "text-blackblack-100" },
    { name: "Surface Light Border", variable: "--surfaceslightborder-color", hex: "rgba(228, 235, 240, 1)", className: "bg-surfaceslightborder-color", textClass: "text-blackblack-100" },
  ];

  // Color Swatch component
  const ColorSwatch = ({ color }: { color: ColorSwatch }) => {
    return (
      <div className="flex flex-col overflow-hidden rounded-lg border border-[#111c2d1a]">
        <div 
          className={`h-20 ${color.className} flex items-end p-3 cursor-pointer relative`}
          onClick={() => handleCopyColor(color.variable, color.hex)}
        >
          <div className={`absolute top-3 right-3 ${copiedColor === color.variable ? "opacity-100" : "opacity-0"} transition-opacity`}>
            <div className="bg-blackwhite rounded-full p-1">
              <Check className="h-4 w-4 text-actionsuccess" />
            </div>
          </div>
        </div>
        <div className="p-3 bg-white">
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-medium text-blackblack-100">{color.name}</h3>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-7 w-7"
              onClick={() => handleCopyColor(color.variable, color.hex)}
            >
              <Copy className="h-3.5 w-3.5 text-blackblack-60" />
            </Button>
          </div>
          <p className="text-xs text-blackblack-60 mb-1">{color.variable}</p>
          <p className="text-xs text-blackblack-60">{color.hex}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Colors" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Brand Colors
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Primary Colors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {primaryColors.map((color, index) => (
                        <ColorSwatch key={index} color={color} />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Secondary Colors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {secondaryColors.map((color, index) => (
                        <ColorSwatch key={index} color={color} />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Action Colors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {actionColors.map((color, index) => (
                        <ColorSwatch key={index} color={color} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Neutral & Surface Colors
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Grayscale</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {grayColors.map((color, index) => (
                        <ColorSwatch key={index} color={color} />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Surface Colors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {surfaceColors.map((color, index) => (
                        <ColorSwatch key={index} color={color} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Color Usage Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Primary Colors</h3>
                    <ul className="list-disc pl-6 space-y-2 text-blackblack-80">
                      <li><strong>Primary Blue (--light-themeprimaryblue)</strong>: Use for primary buttons, links, and important UI elements that require emphasis.</li>
                      <li><strong>Primary Light Blue (--light-themeprimarylight-blue)</strong>: Use for backgrounds, highlights, and selected states.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Secondary Colors</h3>
                    <ul className="list-disc pl-6 space-y-2 text-blackblack-80">
                      <li><strong>Secondary Purple (--light-themesecondarypurple)</strong>: Use for secondary actions, alternative buttons, and to create visual hierarchy.</li>
                      <li><strong>Secondary Light Purple (--light-themesecondarylight-purple)</strong>: Use for secondary backgrounds and subtle highlights.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Action Colors</h3>
                    <ul className="list-disc pl-6 space-y-2 text-blackblack-80">
                      <li><strong>Success (--actionsuccess)</strong>: Use for positive actions, confirmations, and success messages.</li>
                      <li><strong>Alert (--actionalert)</strong>: Use for warnings and actions that require attention but aren't critical.</li>
                      <li><strong>Warning (--actionwarning)</strong>: Use for errors, destructive actions, and critical warnings.</li>
                      <li>The light variants of these colors are suitable for backgrounds in alerts, badges, and subtle indicators.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Grayscale Usage</h3>
                    <ul className="list-disc pl-6 space-y-2 text-blackblack-80">
                      <li><strong>Black 100% (--blackblack-100)</strong>: Use for primary text and high emphasis content.</li>
                      <li><strong>Black 80% (--blackblack-80)</strong>: Use for secondary text and medium emphasis content.</li>
                      <li><strong>Black 60% (--blackblack-60)</strong>: Use for tertiary text, placeholders, and low emphasis content.</li>
                      <li><strong>Black 40% (--blackblack-40)</strong>: Use for disabled text and very low emphasis content.</li>
                      <li><strong>Black 20% & 10% (--blackblack-20, --blackblack-10)</strong>: Use for subtle backgrounds, borders, and dividers.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Surface Colors</h3>
                    <ul className="list-disc pl-6 space-y-2 text-blackblack-80">
                      <li><strong>Surface Light Gray 10 & 20 (--surfaceslightgray-10, --surfaceslightgray-20)</strong>: Use for page backgrounds, cards, and containers.</li>
                      <li><strong>Surface Light Border (--surfaceslightborder-color)</strong>: Use for borders, dividers, and separators.</li>
                    </ul>
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
                  <h3 className="text-lg font-medium">Using Colors in Code</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`// Using Tailwind classes for colors

// Primary Colors
<button className="bg-light-themeprimaryblue text-white">Primary Button</button>
<div className="bg-light-themeprimarylight-blue text-light-themeprimaryblue">Light Blue Background</div>

// Secondary Colors
<button className="bg-light-themesecondarypurple text-white">Secondary Button</button>
<div className="bg-light-themesecondarylight-purple text-light-themesecondarypurple">Light Purple Background</div>

// Action Colors
<div className="bg-actionsuccess text-white">Success Message</div>
<div className="bg-actionsuccess-light text-actionsuccess">Success Light Background</div>

<div className="bg-actionalert text-white">Alert Message</div>
<div className="bg-actionalert-light text-actionalert">Alert Light Background</div>

<div className="bg-actionwarning text-white">Warning Message</div>
<div className="bg-actionwarning-light text-actionwarning">Warning Light Background</div>

// Text Colors
<p className="text-blackblack-100">Primary Text</p>
<p className="text-blackblack-80">Secondary Text</p>
<p className="text-blackblack-60">Tertiary Text</p>
<p className="text-blackblack-40">Disabled Text</p>

// Backgrounds
<div className="bg-surfaceslightgray-10">Page Background</div>
<div className="bg-surfaceslightgray-20">Card Background</div>
<div className="border-surfaceslightborder-color">Border</div>`}
                    </code>
                  </pre>
                  
                  <h3 className="text-lg font-medium mt-6">CSS Variables</h3>
                  <p className="text-blackblack-80 mb-3">
                    All colors are defined as CSS variables in the root scope and can be accessed directly in CSS:
                  </p>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`/* Example CSS */
.custom-element {
  background-color: var(--light-themeprimaryblue);
  color: var(--blackwhite);
  border: 1px solid var(--surfaceslightborder-color);
}

.custom-card {
  background-color: var(--surfaceslightgray-10);
  box-shadow: var(--light-theme-shadow-medium);
}

.status-success {
  background-color: var(--actionsuccess-light);
  color: var(--actionsuccess);
}`}
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
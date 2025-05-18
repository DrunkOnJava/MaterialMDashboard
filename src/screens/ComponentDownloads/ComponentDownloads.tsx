import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ExternalLink, Download, Code, Package } from "lucide-react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "../Dashboard/components/Titlebar";

export const ComponentDownloads = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Component Downloads" />
        <main className="flex-1 overflow-auto p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Component Downloads</h1>
          <p className="text-lg text-gray-600 mb-6">
            Access our collection of 47+ ready-to-use UI components
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/dist/component-downloads/index.html" target="_blank" rel="noopener noreferrer">
              <Button className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                Browse Components
              </Button>
            </a>
            <a href="https://luxury-frangollo-11cf88.netlify.app/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                View Live Demo
              </Button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5 text-blue-600" />
                47+ Components
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                A comprehensive collection of UI components including buttons, forms, cards, modals, and more.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5 text-green-600" />
                Copy & Paste
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Each component includes all necessary HTML, CSS, and JavaScript. Just copy and use.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5 text-purple-600" />
                Download Ready
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Download individual components as HTML files for offline use or integration into any project.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Component Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "UI Components",
              "Form Components",
              "Navigation",
              "Feedback",
              "Data Display",
              "Charts",
              "Layout",
              "Overlay",
              "Miscellaneous"
            ].map((category) => (
              <div key={category} className="bg-white rounded-lg p-3 text-center">
                <span className="font-medium text-gray-800">{category}</span>
              </div>
            ))}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Click "Browse Components" to open the component library</li>
              <li>Use the search bar or category filters to find components</li>
              <li>Click on any component to view its live preview</li>
              <li>Toggle "View Code" to see the HTML source</li>
              <li>Use "Copy Code" or "Download HTML" for integration</li>
            </ol>
          </CardContent>
        </Card>
      </div>
      </main>
    </div>
  </div>
  );
};
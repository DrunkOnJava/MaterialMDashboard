import React from 'react';
import { TitlebarByAnima } from '../Buttons/components/Titlebar';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

export const Typography = (): JSX.Element => {
  return (
    <>
      <TitlebarByAnima title="Typography" />
      <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Headings
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-4xl font-bold tracking-tight text-blackblack-100">
                      Heading 1
                    </h1>
                    <p className="text-sm text-blackblack-60 mt-1">
                      Font size: 36px / Line height: 40px / Font weight: 700
                    </p>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-blackblack-100">
                      Heading 2
                    </h2>
                    <p className="text-sm text-blackblack-60 mt-1">
                      Font size: 30px / Line height: 36px / Font weight: 700
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-blackblack-100">
                      Heading 3
                    </h3>
                    <p className="text-sm text-blackblack-60 mt-1">
                      Font size: 24px / Line height: 32px / Font weight: 700
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold tracking-tight text-blackblack-100">
                      Heading 4
                    </h4>
                    <p className="text-sm text-blackblack-60 mt-1">
                      Font size: 20px / Line height: 28px / Font weight: 600
                    </p>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold tracking-tight text-blackblack-100">
                      Heading 5
                    </h5>
                    <p className="text-sm text-blackblack-60 mt-1">
                      Font size: 18px / Line height: 24px / Font weight: 600
                    </p>
                  </div>
                  <div>
                    <h6 className="text-base font-semibold tracking-tight text-blackblack-100">
                      Heading 6
                    </h6>
                    <p className="text-sm text-blackblack-60 mt-1">
                      Font size: 16px / Line height: 20px / Font weight: 600
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Body Text
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <p className="text-xl text-blackblack-100">Large Text</p>
                    <p className="text-sm text-blackblack-60 mt-1">
                      Font size: 20px / Line height: 28px / Font weight: 400
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-blackblack-100">Medium Text</p>
                    <p className="text-sm text-blackblack-60 mt-1">
                      Font size: 18px / Line height: 24px / Font weight: 400
                    </p>
                  </div>
                  <div>
                    <p className="text-base text-blackblack-100">Default Text</p>
                    <p className="text-sm text-blackblack-60 mt-1">
                      Font size: 16px / Line height: 24px / Font weight: 400
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-blackblack-100">Small Text</p>
                    <p className="text-xs text-blackblack-60 mt-1">
                      Font size: 14px / Line height: 20px / Font weight: 400
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-blackblack-100">Extra Small Text</p>
                    <p className="text-xs text-blackblack-60 mt-1">
                      Font size: 12px / Line height: 16px / Font weight: 400
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="rounded-xl shadow-light-theme-shadow-medium">
                <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                  <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                    Font Weights
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-lg text-blackblack-100">Bold Text</p>
                      <p className="text-sm text-blackblack-60 mt-1">Font weight: 700</p>
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-blackblack-100">Semibold Text</p>
                      <p className="text-sm text-blackblack-60 mt-1">Font weight: 600</p>
                    </div>
                    <div>
                      <p className="font-medium text-lg text-blackblack-100">Medium Text</p>
                      <p className="text-sm text-blackblack-60 mt-1">Font weight: 500</p>
                    </div>
                    <div>
                      <p className="font-normal text-lg text-blackblack-100">Regular Text</p>
                      <p className="text-sm text-blackblack-60 mt-1">Font weight: 400</p>
                    </div>
                    <div>
                      <p className="font-light text-lg text-blackblack-100">Light Text</p>
                      <p className="text-sm text-blackblack-60 mt-1">Font weight: 300</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-xl shadow-light-theme-shadow-medium">
                <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                  <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                    Text Colors
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-blackblack-100 text-lg">Primary Text Color</p>
                      <p className="text-sm text-blackblack-60 mt-1">
                        Used for primary content like headings and important text
                      </p>
                    </div>
                    <div>
                      <p className="text-blackblack-80 text-lg">Secondary Text Color</p>
                      <p className="text-sm text-blackblack-60 mt-1">Used for most body text</p>
                    </div>
                    <div>
                      <p className="text-blackblack-60 text-lg">Muted Text Color</p>
                      <p className="text-sm text-blackblack-60 mt-1">
                        Used for less important text like captions and hints
                      </p>
                    </div>
                    <div>
                      <p className="text-light-themeprimaryblue text-lg">Brand Primary Color</p>
                      <p className="text-sm text-blackblack-60 mt-1">
                        Used for links and important UI elements
                      </p>
                    </div>
                    <div>
                      <p className="text-light-themesecondarypurple text-lg">
                        Brand Secondary Color
                      </p>
                      <p className="text-sm text-blackblack-60 mt-1">
                        Used for accent text and secondary UI elements
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Text Examples
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-8">
                  <div className="max-w-3xl">
                    <h3 className="text-2xl font-bold mb-4 text-blackblack-100">Article Example</h3>
                    <h4 className="text-xl font-semibold mb-2 text-blackblack-100">
                      The Future of E-Commerce
                    </h4>
                    <p className="text-blackblack-80 mb-4">
                      E-commerce continues to evolve at a rapid pace, transforming how businesses
                      operate and consumers shop. The integration of artificial intelligence,
                      augmented reality, and personalization has significantly enhanced the online
                      shopping experience.
                    </p>
                    <p className="text-blackblack-80 mb-4">
                      As we look ahead, several key trends are likely to shape the future of
                      e-commerce:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-blackblack-80 space-y-2">
                      <li>
                        Voice commerce will continue to grow as smart speakers become more prevalent
                      </li>
                      <li>
                        Augmented reality will allow customers to "try before they buy" more
                        effectively
                      </li>
                      <li>
                        Artificial intelligence will drive more personalized shopping experiences
                      </li>
                      <li>Sustainability will become a major factor in purchasing decisions</li>
                    </ul>
                    <blockquote className="border-l-4 border-light-themeprimaryblue pl-4 italic my-4 text-blackblack-80">
                      "The future of e-commerce is not just about selling products online, but
                      creating immersive, personalized experiences that bridge the gap between
                      digital and physical retail."
                    </blockquote>
                    <p className="text-blackblack-80">
                      Businesses that can adapt to these changing trends and leverage new
                      technologies will be well-positioned to succeed in the evolving e-commerce
                      landscape.
                    </p>
                  </div>

                  <div className="max-w-3xl">
                    <h3 className="text-2xl font-bold mb-4 text-blackblack-100">
                      UI Text Examples
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 border border-[#111c2d1a] rounded-lg">
                        <h5 className="font-semibold mb-2">Form Labels & Descriptions</h5>
                        <div className="mb-3">
                          <label className="block text-sm font-medium text-blackblack-100 mb-1">
                            Email Address
                          </label>
                          <div className="h-10 bg-surfaceslightgray-10 rounded-md"></div>
                          <p className="text-xs text-blackblack-60 mt-1">
                            We'll never share your email with anyone else.
                          </p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-actionwarning mb-1">
                            Password
                          </label>
                          <div className="h-10 bg-surfaceslightgray-10 rounded-md border border-actionwarning"></div>
                          <p className="text-xs text-actionwarning mt-1">
                            Password must be at least 8 characters long.
                          </p>
                        </div>
                      </div>

                      <div className="p-4 border border-[#111c2d1a] rounded-lg">
                        <h5 className="font-semibold mb-2">Notifications & Messages</h5>
                        <div className="p-3 bg-actionsuccess-light rounded-md mb-3">
                          <p className="text-sm font-medium text-actionsuccess">Success Message</p>
                          <p className="text-sm text-actionsuccess">
                            Your changes have been successfully saved.
                          </p>
                        </div>
                        <div className="p-3 bg-actionwarning-light rounded-md">
                          <p className="text-sm font-medium text-actionwarning">Error Message</p>
                          <p className="text-sm text-actionwarning">
                            There was a problem processing your request. Please try again.
                          </p>
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
                  <h3 className="text-lg font-medium">Using Typography in Your Application</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// Using Tailwind classes for typography

// Headings
<h1 className="text-4xl font-bold tracking-tight text-blackblack-100">Heading 1</h1>
<h2 className="text-3xl font-bold tracking-tight text-blackblack-100">Heading 2</h2>
<h3 className="text-2xl font-bold tracking-tight text-blackblack-100">Heading 3</h3>
<h4 className="text-xl font-semibold tracking-tight text-blackblack-100">Heading 4</h4>
<h5 className="text-lg font-semibold tracking-tight text-blackblack-100">Heading 5</h5>
<h6 className="text-base font-semibold tracking-tight text-blackblack-100">Heading 6</h6>

// Paragraph text
<p className="text-base text-blackblack-80">
  This is default paragraph text. It uses a slightly lighter color (80% opacity)
  for better readability in long-form content.
</p>

// Small text
<p className="text-sm text-blackblack-60">
  This is small text, often used for secondary information, captions, or helper text.
</p>

// Text emphasis
<p className="font-bold">Bold text for emphasis</p>
<p className="font-semibold">Semibold text for medium emphasis</p>
<p className="italic">Italic text for slight emphasis or quotes</p>
<p className="underline">Underlined text, typically for links</p>

// Colored text
<p className="text-light-themeprimaryblue">Primary blue text for links and highlights</p>
<p className="text-light-themesecondarypurple">Secondary purple text for accents</p>
<p className="text-actionsuccess">Success text for positive messages</p>
<p className="text-actionwarning">Error text for warnings</p>

// Lists
<ul className="list-disc pl-6 text-blackblack-80 space-y-2">
  <li>Unordered list item one</li>
  <li>Unordered list item two</li>
</ul>

<ol className="list-decimal pl-6 text-blackblack-80 space-y-2">
  <li>Ordered list item one</li>
  <li>Ordered list item two</li>
</ol>`}
                    </code>
                  </pre>

                  <h3 className="text-lg font-medium mt-6">Typography Best Practices</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-blackblack-80">
                      Maintain a <strong>consistent hierarchy</strong> with headings and text sizes
                    </li>
                    <li className="text-blackblack-80">
                      Use appropriate <strong>text colors</strong> for different contexts - primary
                      for main content, secondary for supporting text
                    </li>
                    <li className="text-blackblack-80">
                      Ensure adequate <strong>contrast ratios</strong> between text and background
                      colors for accessibility
                    </li>
                    <li className="text-blackblack-80">
                      Be mindful of <strong>line length</strong> - aim for 50-75 characters per line
                      for optimal readability
                    </li>
                    <li className="text-blackblack-80">
                      Use <strong>proper spacing</strong> between paragraphs and sections to improve
                      content structure
                    </li>
                    <li className="text-blackblack-80">
                      Consider <strong>responsive typography</strong> that adjusts for different
                      screen sizes
                    </li>
                    <li className="text-blackblack-80">
                      Apply <strong>appropriate emphasis</strong> using font weight rather than just
                      color
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
    </>
  );
};

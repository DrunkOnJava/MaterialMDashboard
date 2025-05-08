import React from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "../Buttons/components/Titlebar";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { PlusCircle, MinusCircle, Plus, Minus, ChevronDown, ChevronRight, Check, HelpCircle, Settings, Bell, Users } from "lucide-react";

export const AccordionPage = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Accordion" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Basic Accordion
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Default Accordion</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                          Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                        <AccordionContent>
                          Yes. It comes with default styles that match the other components' aesthetic.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                        <AccordionContent>
                          Yes. It's animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Multiple Expanded Items</h3>
                    <Accordion type="multiple" className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>First Section</AccordionTrigger>
                        <AccordionContent>
                          This is the content for the first section. You can expand multiple sections at once.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Second Section</AccordionTrigger>
                        <AccordionContent>
                          This is the content for the second section. It can be expanded at the same time as other sections.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Third Section</AccordionTrigger>
                        <AccordionContent>
                          This is the content for the third section. All sections can be expanded or collapsed.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Custom Styled Accordions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Accordion type="single" collapsible className="w-full border rounded-md">
                        <AccordionItem value="item-1" className="border-b">
                          <AccordionTrigger className="px-4 hover:bg-surfaceslightgray-10">
                            <div className="flex items-center">
                              <PlusCircle className="mr-2 h-4 w-4 text-light-themeprimaryblue flex-shrink-0" />
                              <span>Getting Started</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4 pt-1">
                            <p>This guide will help you get started with our product.</p>
                            <ul className="list-disc ml-5 mt-2 text-blackblack-60">
                              <li>Step 1: Create an account</li>
                              <li>Step 2: Configure your settings</li>
                              <li>Step 3: Start using the features</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-b">
                          <AccordionTrigger className="px-4 hover:bg-surfaceslightgray-10">
                            <div className="flex items-center">
                              <PlusCircle className="mr-2 h-4 w-4 text-light-themeprimaryblue flex-shrink-0" />
                              <span>Features</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4 pt-1">
                            <p>Our product includes the following key features:</p>
                            <ul className="list-disc ml-5 mt-2 text-blackblack-60">
                              <li>Responsive design</li>
                              <li>Cross-platform compatibility</li>
                              <li>Advanced analytics</li>
                              <li>User management</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                          <AccordionTrigger className="px-4 hover:bg-surfaceslightgray-10">
                            <div className="flex items-center">
                              <PlusCircle className="mr-2 h-4 w-4 text-light-themeprimaryblue flex-shrink-0" />
                              <span>Support</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4 pt-1">
                            <p>If you need help, there are several ways to get support:</p>
                            <ul className="list-disc ml-5 mt-2 text-blackblack-60">
                              <li>Documentation</li>
                              <li>Email support</li>
                              <li>Live chat</li>
                              <li>Phone support</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    
                    <div>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="mb-2 border border-[#111c2d1a] rounded-md overflow-hidden">
                          <AccordionTrigger className="px-4 py-3 hover:bg-surfaceslightgray-10 bg-surfaceslightgray-10 [&[data-state=open]]:bg-light-themeprimarylight-blue [&[data-state=open]>div>svg]:text-light-themeprimaryblue [&[data-state=open]]:text-light-themeprimaryblue [&[data-state=open]>.chevron]:rotate-90">
                            <div className="flex items-center">
                              <span>Section 1</span>
                            </div>
                            <ChevronRight className="h-4 w-4 transition-transform duration-200 shrink-0 chevron" />
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-3 pt-0 bg-white">
                            <p>Content for section 1 goes here.</p>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="mb-2 border border-[#111c2d1a] rounded-md overflow-hidden">
                          <AccordionTrigger className="px-4 py-3 hover:bg-surfaceslightgray-10 bg-surfaceslightgray-10 [&[data-state=open]]:bg-light-themeprimarylight-blue [&[data-state=open]>div>svg]:text-light-themeprimaryblue [&[data-state=open]]:text-light-themeprimaryblue [&[data-state=open]>.chevron]:rotate-90">
                            <div className="flex items-center">
                              <span>Section 2</span>
                            </div>
                            <ChevronRight className="h-4 w-4 transition-transform duration-200 shrink-0 chevron" />
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-3 pt-0 bg-white">
                            <p>Content for section 2 goes here.</p>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border border-[#111c2d1a] rounded-md overflow-hidden">
                          <AccordionTrigger className="px-4 py-3 hover:bg-surfaceslightgray-10 bg-surfaceslightgray-10 [&[data-state=open]]:bg-light-themeprimarylight-blue [&[data-state=open]>div>svg]:text-light-themeprimaryblue [&[data-state=open]]:text-light-themeprimaryblue [&[data-state=open]>.chevron]:rotate-90">
                            <div className="flex items-center">
                              <span>Section 3</span>
                            </div>
                            <ChevronRight className="h-4 w-4 transition-transform duration-200 shrink-0 chevron" />
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-3 pt-0 bg-white">
                            <p>Content for section 3 goes here.</p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Advanced Accordion Examples
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">FAQ Accordion</h3>
                  <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-semibold mb-2">Frequently Asked Questions</h2>
                      <p className="text-blackblack-60">Find answers to commonly asked questions about our product.</p>
                    </div>
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border rounded-md mb-3 overflow-hidden">
                        <AccordionTrigger className="px-4 py-3 hover:bg-surfaceslightgray-10 data-[state=open]:bg-surfaceslightgray-10">
                          <div className="flex items-center">
                            <HelpCircle className="mr-2 h-4 w-4 text-light-themeprimaryblue flex-shrink-0" />
                            <span>What is the pricing structure?</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-3 border-t">
                          <p>Our pricing structure is based on a monthly subscription model. We offer three tiers:</p>
                          <ul className="list-disc ml-5 mt-2 space-y-1 text-blackblack-60">
                            <li>Basic: $9.99/month - Includes essential features for individuals</li>
                            <li>Professional: $19.99/month - Includes advanced features for professionals</li>
                            <li>Enterprise: $49.99/month - Includes all features plus priority support for teams</li>
                          </ul>
                          <div className="mt-3">
                            <Button variant="outline" size="sm">View Pricing Details</Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2" className="border rounded-md mb-3 overflow-hidden">
                        <AccordionTrigger className="px-4 py-3 hover:bg-surfaceslightgray-10 data-[state=open]:bg-surfaceslightgray-10">
                          <div className="flex items-center">
                            <HelpCircle className="mr-2 h-4 w-4 text-light-themeprimaryblue flex-shrink-0" />
                            <span>How do I cancel my subscription?</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-3 border-t">
                          <p>You can cancel your subscription at any time by following these steps:</p>
                          <ol className="list-decimal ml-5 mt-2 space-y-1 text-blackblack-60">
                            <li>Log in to your account</li>
                            <li>Go to "Account Settings"</li>
                            <li>Click on "Subscription"</li>
                            <li>Click "Cancel Subscription"</li>
                            <li>Confirm cancellation</li>
                          </ol>
                          <p className="mt-2">Your subscription will remain active until the end of the current billing period.</p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3" className="border rounded-md mb-3 overflow-hidden">
                        <AccordionTrigger className="px-4 py-3 hover:bg-surfaceslightgray-10 data-[state=open]:bg-surfaceslightgray-10">
                          <div className="flex items-center">
                            <HelpCircle className="mr-2 h-4 w-4 text-light-themeprimaryblue flex-shrink-0" />
                            <span>Is there a free trial available?</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-3 border-t">
                          <p>Yes, we offer a 14-day free trial for all subscription tiers. During the trial period, you'll have access to all features available in the selected tier. No credit card is required to start the trial.</p>
                          <div className="mt-3">
                            <Button size="sm">Start Free Trial</Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-4" className="border rounded-md mb-3 overflow-hidden">
                        <AccordionTrigger className="px-4 py-3 hover:bg-surfaceslightgray-10 data-[state=open]:bg-surfaceslightgray-10">
                          <div className="flex items-center">
                            <HelpCircle className="mr-2 h-4 w-4 text-light-themeprimaryblue flex-shrink-0" />
                            <span>What payment methods do you accept?</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-3 border-t">
                          <p>We accept the following payment methods:</p>
                          <ul className="list-disc ml-5 mt-2 space-y-1 text-blackblack-60">
                            <li>Credit/Debit Cards (Visa, Mastercard, American Express, Discover)</li>
                            <li>PayPal</li>
                            <li>Bank Transfer (for annual enterprise subscriptions only)</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-5" className="border rounded-md overflow-hidden">
                        <AccordionTrigger className="px-4 py-3 hover:bg-surfaceslightgray-10 data-[state=open]:bg-surfaceslightgray-10">
                          <div className="flex items-center">
                            <HelpCircle className="mr-2 h-4 w-4 text-light-themeprimaryblue flex-shrink-0" />
                            <span>How can I contact customer support?</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-3 border-t">
                          <p>Our customer support team is available through multiple channels:</p>
                          <ul className="list-disc ml-5 mt-2 space-y-1 text-blackblack-60">
                            <li>Email: support@example.com</li>
                            <li>Live Chat: Available 24/7 on our website</li>
                            <li>Phone: +1 (555) 123-4567 (Monday-Friday, 9am-5pm EST)</li>
                          </ul>
                          <p className="mt-2">Enterprise customers have access to priority support with faster response times.</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    
                    <div className="text-center mt-6">
                      <p className="text-blackblack-60 mb-3">Still have questions?</p>
                      <Button>Contact Support</Button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6 mt-10">
                  <h3 className="text-lg font-medium">Settings Accordion</h3>
                  <div className="max-w-3xl mx-auto">
                    <Accordion type="multiple" className="w-full">
                      <AccordionItem value="item-1" className="border rounded-lg mb-4">
                        <AccordionTrigger className="px-4 py-3 [&[data-state=open]]:pb-0">
                          <div className="flex items-center">
                            <div className="mr-3 h-8 w-8 rounded-full bg-light-themeprimarylight-blue flex items-center justify-center">
                              <Settings className="h-4 w-4 text-light-themeprimaryblue" />
                            </div>
                            <div className="text-left">
                              <h4 className="font-medium">General Settings</h4>
                              <p className="text-sm text-blackblack-60">Configure application preferences</p>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4 pb-3 px-4">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between pb-3 border-b">
                              <div>
                                <h5 className="font-medium">Language</h5>
                                <p className="text-sm text-blackblack-60">Select your preferred language</p>
                              </div>
                              <select className="bg-white border border-[#111c2d1a] rounded-md px-3 py-1.5">
                                <option value="en">English</option>
                                <option value="fr">Français</option>
                                <option value="de">Deutsch</option>
                                <option value="es">Español</option>
                              </select>
                            </div>
                            
                            <div className="flex items-center justify-between pb-3 border-b">
                              <div>
                                <h5 className="font-medium">Theme</h5>
                                <p className="text-sm text-blackblack-60">Choose light or dark theme</p>
                              </div>
                              <div className="flex border border-[#111c2d1a] rounded-md overflow-hidden">
                                <button className="px-3 py-1.5 bg-light-themeprimarylight-blue text-light-themeprimaryblue font-medium">Light</button>
                                <button className="px-3 py-1.5">Dark</button>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <h5 className="font-medium">Notifications</h5>
                                <p className="text-sm text-blackblack-60">Enable browser notifications</p>
                              </div>
                              <div className="h-6 w-11 rounded-full bg-light-themeprimaryblue relative cursor-pointer">
                                <div className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white"></div>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2" className="border rounded-lg mb-4">
                        <AccordionTrigger className="px-4 py-3 [&[data-state=open]]:pb-0">
                          <div className="flex items-center">
                            <div className="mr-3 h-8 w-8 rounded-full bg-light-themesecondarylight-purple flex items-center justify-center">
                              <Users className="h-4 w-4 text-light-themesecondarypurple" />
                            </div>
                            <div className="text-left">
                              <h4 className="font-medium">Account Settings</h4>
                              <p className="text-sm text-blackblack-60">Manage account details and security</p>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4 pb-3 px-4">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between pb-3 border-b">
                              <div>
                                <h5 className="font-medium">Profile Information</h5>
                                <p className="text-sm text-blackblack-60">Update your personal information</p>
                              </div>
                              <Button variant="outline" size="sm">Edit Profile</Button>
                            </div>
                            
                            <div className="flex items-center justify-between pb-3 border-b">
                              <div>
                                <h5 className="font-medium">Email Address</h5>
                                <p className="text-sm text-blackblack-60">user@example.com</p>
                              </div>
                              <Button variant="outline" size="sm">Change Email</Button>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <h5 className="font-medium">Password</h5>
                                <p className="text-sm text-blackblack-60">Last changed 30 days ago</p>
                              </div>
                              <Button variant="outline" size="sm">Change Password</Button>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3" className="border rounded-lg">
                        <AccordionTrigger className="px-4 py-3 [&[data-state=open]]:pb-0">
                          <div className="flex items-center">
                            <div className="mr-3 h-8 w-8 rounded-full bg-actionsuccess-light flex items-center justify-center">
                              <Bell className="h-4 w-4 text-actionsuccess" />
                            </div>
                            <div className="text-left">
                              <h4 className="font-medium">Notification Settings</h4>
                              <p className="text-sm text-blackblack-60">Configure notification preferences</p>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4 pb-3 px-4">
                          <div className="space-y-4">
                            {[
                              { name: "Email Notifications", desc: "Receive updates via email" },
                              { name: "Push Notifications", desc: "Receive updates on your device" },
                              { name: "Marketing Emails", desc: "Receive promotional content" },
                              { name: "Weekly Summary", desc: "Get a weekly activity report" },
                            ].map((item, index) => (
                              <div key={index} className={`flex items-center justify-between ${index < 3 ? "pb-3 border-b" : ""}`}>
                                <div>
                                  <h5 className="font-medium">{item.name}</h5>
                                  <p className="text-sm text-blackblack-60">{item.desc}</p>
                                </div>
                                <div className={`h-6 w-11 rounded-full ${index !== 2 ? "bg-light-themeprimaryblue" : "bg-blackblack-20"} relative cursor-pointer`}>
                                  <div className={`absolute ${index !== 2 ? "right-1" : "left-1"} top-1 h-4 w-4 rounded-full bg-white`}></div>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-4 pt-3 border-t">
                            <Button size="sm">Save Preferences</Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
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
                  <h3 className="text-lg font-medium">Basic Accordion Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`// Basic single accordion (only one item can be open at a time)
<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that match the other components' aesthetic.
    </AccordionContent>
  </AccordionItem>
</Accordion>

// Multiple accordion (multiple items can be open simultaneously)
<Accordion type="multiple" className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>First Section</AccordionTrigger>
    <AccordionContent>
      This is the content for the first section. You can expand multiple sections at once.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Second Section</AccordionTrigger>
    <AccordionContent>
      This is the content for the second section. It can be expanded at the same time as other sections.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
                    </code>
                  </pre>
                  
                  <h3 className="text-lg font-medium mt-6">Custom Styled Accordion Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`// Custom accordion with icons
<Accordion type="single" collapsible className="w-full border rounded-md">
  <AccordionItem value="item-1" className="border-b">
    <AccordionTrigger className="px-4 hover:bg-surfaceslightgray-10">
      <div className="flex items-center">
        <PlusCircle className="mr-2 h-4 w-4 text-light-themeprimaryblue flex-shrink-0" />
        <span>Getting Started</span>
      </div>
    </AccordionTrigger>
    <AccordionContent className="px-4 pb-4 pt-1">
      <p>This guide will help you get started with our product.</p>
      <ul className="list-disc ml-5 mt-2 text-blackblack-60">
        <li>Step 1: Create an account</li>
        <li>Step 2: Configure your settings</li>
        <li>Step 3: Start using the features</li>
      </ul>
    </AccordionContent>
  </AccordionItem>
</Accordion>

// Accordion with custom chevron and styling
<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1" className="mb-2 border border-[#111c2d1a] rounded-md overflow-hidden">
    <AccordionTrigger className="px-4 py-3 hover:bg-surfaceslightgray-10 bg-surfaceslightgray-10 [&[data-state=open]]:bg-light-themeprimarylight-blue [&[data-state=open]>div>svg]:text-light-themeprimaryblue [&[data-state=open]]:text-light-themeprimaryblue [&[data-state=open]>.chevron]:rotate-90">
      <div className="flex items-center">
        <span>Section 1</span>
      </div>
      <ChevronRight className="h-4 w-4 transition-transform duration-200 shrink-0 chevron" />
    </AccordionTrigger>
    <AccordionContent className="px-4 pb-3 pt-0 bg-white">
      <p>Content for section 1 goes here.</p>
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
                    </code>
                  </pre>
                  
                  <h3 className="text-lg font-medium mt-6">FAQ Accordion Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`// FAQ accordion
<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1" className="border rounded-md mb-3 overflow-hidden">
    <AccordionTrigger className="px-4 py-3 hover:bg-surfaceslightgray-10 data-[state=open]:bg-surfaceslightgray-10">
      <div className="flex items-center">
        <HelpCircle className="mr-2 h-4 w-4 text-light-themeprimaryblue flex-shrink-0" />
        <span>What is the pricing structure?</span>
      </div>
    </AccordionTrigger>
    <AccordionContent className="px-4 py-3 border-t">
      <p>Our pricing structure is based on a monthly subscription model. We offer three tiers:</p>
      <ul className="list-disc ml-5 mt-2 space-y-1 text-blackblack-60">
        <li>Basic: $9.99/month - Includes essential features for individuals</li>
        <li>Professional: $19.99/month - Includes advanced features for professionals</li>
        <li>Enterprise: $49.99/month - Includes all features plus priority support for teams</li>
      </ul>
      <div className="mt-3">
        <Button variant="outline" size="sm">View Pricing Details</Button>
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
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
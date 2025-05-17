import React from 'react';
import { TitlebarByAnima } from '../Buttons/components/Titlebar';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';

export function Help() {
  return (
    <div className="flex flex-col overflow-hidden">
      <TitlebarByAnima title="Help Center" />
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="relative">
            <Input 
              placeholder="Search for help..." 
              className="pl-10 py-6 text-lg"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
        </div>

        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="mb-6 w-full justify-start">
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="contact">Contact Support</TabsTrigger>
            <TabsTrigger value="videos">Video Tutorials</TabsTrigger>
          </TabsList>
          
          <TabsContent value="guides" className="space-y-6">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                    Getting Started
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Learn the basics of using the dashboard.</p>
                  <div className="text-sm text-blue-500">5 articles</div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-purple-500">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Analytics Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Understanding your analytics and metrics.</p>
                  <div className="text-sm text-blue-500">8 articles</div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    User Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Managing users, roles and permissions.</p>
                  <div className="text-sm text-blue-500">6 articles</div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-amber-500">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"></path>
                    </svg>
                    Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Setting up and configuring your dashboard.</p>
                  <div className="text-sm text-blue-500">7 articles</div>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-xl font-bold mt-8 mb-4">Popular Articles</h2>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <h3 className="font-medium text-blue-500 hover:underline cursor-pointer">How to customize your dashboard layout</h3>
                <p className="text-sm text-gray-500 mt-1">Learn how to rearrange and customize widgets for your needs.</p>
              </div>
              
              <div className="border-b pb-3">
                <h3 className="font-medium text-blue-500 hover:underline cursor-pointer">Setting up email notifications</h3>
                <p className="text-sm text-gray-500 mt-1">Configure which notifications you receive via email.</p>
              </div>
              
              <div className="border-b pb-3">
                <h3 className="font-medium text-blue-500 hover:underline cursor-pointer">Importing data from external sources</h3>
                <p className="text-sm text-gray-500 mt-1">Step-by-step guide to importing your data into the dashboard.</p>
              </div>
              
              <div className="border-b pb-3">
                <h3 className="font-medium text-blue-500 hover:underline cursor-pointer">Creating and sharing reports</h3>
                <p className="text-sm text-gray-500 mt-1">Learn how to generate and share reports with your team.</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="faq" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="border-b pb-3">
                    <h3 className="font-medium cursor-pointer">How do I reset my password?</h3>
                    <p className="text-sm text-gray-600 mt-2">Click on the "Forgot Password" link on the login page. You'll receive an email with instructions to reset your password.</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <h3 className="font-medium cursor-pointer">Can I export my dashboard data?</h3>
                    <p className="text-sm text-gray-600 mt-2">Yes, you can export data from most dashboard views. Look for the export button (usually showing CSV, Excel, or PDF options) in the top-right corner of data tables.</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <h3 className="font-medium cursor-pointer">How do I add a new user to my account?</h3>
                    <p className="text-sm text-gray-600 mt-2">Go to Settings &gt; User Management &gt; Add User. Enter their email address and select their permission level, then click Invite.</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <h3 className="font-medium cursor-pointer">Is my data secure?</h3>
                    <p className="text-sm text-gray-600 mt-2">Yes, all data is encrypted both in transit and at rest. We use industry-standard security practices and regular security audits to ensure your data remains safe.</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <h3 className="font-medium cursor-pointer">How often is the dashboard data refreshed?</h3>
                    <p className="text-sm text-gray-600 mt-2">Dashboard data is updated in real-time for most metrics. Historical data is processed and updated every 24 hours.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="contact" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea 
                      id="message" 
                      className="w-full min-h-[150px] p-2 border rounded-md"
                      placeholder="Describe your issue or question in detail..."
                    ></textarea>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="attachments" className="text-sm font-medium">Attachments (optional)</label>
                    <Input id="attachments" type="file" />
                    <p className="text-xs text-gray-500">Maximum file size: 10MB</p>
                  </div>
                  
                  <Button>Submit Ticket</Button>
                </form>
                
                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-medium mb-2">Other Ways to Reach Us</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gray-500">
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                      <span className="text-blue-500">support@example.com</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gray-500">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gray-500">
                        <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.94Z"></path>
                      </svg>
                      <span>Live Chat (Available 9am-5pm EST)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="videos" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">Getting Started with the Dashboard</h3>
                    <p className="text-sm text-gray-600">A complete overview of the dashboard interface and basic features.</p>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <span>5:32</span>
                      <span className="mx-2">•</span>
                      <span>546 views</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">Creating Custom Reports</h3>
                    <p className="text-sm text-gray-600">Learn how to create, save, and share custom reports with your team.</p>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <span>8:16</span>
                      <span className="mx-2">•</span>
                      <span>423 views</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">Advanced Analytics Features</h3>
                    <p className="text-sm text-gray-600">Deep dive into custom segments, cohorts, and trend analysis.</p>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <span>12:45</span>
                      <span className="mx-2">•</span>
                      <span>289 views</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">Setting Up Team Permissions</h3>
                    <p className="text-sm text-gray-600">How to manage user access and set up role-based permissions.</p>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <span>6:08</span>
                      <span className="mx-2">•</span>
                      <span>347 views</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      </main>
    </div>
  );
}
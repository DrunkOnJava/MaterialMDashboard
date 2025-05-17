import React from 'react';
import { TitlebarByAnima } from '../Buttons/components/Titlebar';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Button } from '../../components/ui/button';
import {
  LineChart,
  BarChart,
  PieChart,
  Home,
  Settings,
  User,
  FileText,
  MessageSquare,
  Bell,
  Calendar,
  Package,
  Users,
} from 'lucide-react';

export const TabsPage = (): JSX.Element => {
  return (
    <div className="flex flex-col overflow-hidden">
      <TitlebarByAnima title="Tabs" />
      <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Basic Tabs
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Default Tabs</h3>
                  <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="account">Account</TabsTrigger>
                      <TabsTrigger value="password">Password</TabsTrigger>
                      <TabsTrigger value="settings">Settings</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account" className="p-4 border rounded-lg mt-2">
                      <h4 className="text-base font-medium mb-2">Account Settings</h4>
                      <p className="text-blackblack-60">
                        Manage your account details and preferences.
                      </p>
                    </TabsContent>
                    <TabsContent value="password" className="p-4 border rounded-lg mt-2">
                      <h4 className="text-base font-medium mb-2">Password Settings</h4>
                      <p className="text-blackblack-60">
                        Change your password and security settings.
                      </p>
                    </TabsContent>
                    <TabsContent value="settings" className="p-4 border rounded-lg mt-2">
                      <h4 className="text-base font-medium mb-2">General Settings</h4>
                      <p className="text-blackblack-60">Configure your application preferences.</p>
                    </TabsContent>
                  </Tabs>
                </div>

                <div className="space-y-4 mt-8">
                  <h3 className="text-lg font-medium">Tabs with Icons</h3>
                  <Tabs defaultValue="dashboard" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="dashboard" className="flex items-center">
                        <Home className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                      </TabsTrigger>
                      <TabsTrigger value="profile" className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </TabsTrigger>
                      <TabsTrigger value="messages" className="flex items-center">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        <span>Messages</span>
                      </TabsTrigger>
                      <TabsTrigger value="settings" className="flex items-center">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="dashboard" className="p-4 border rounded-lg mt-2">
                      <h4 className="text-base font-medium mb-2">Dashboard Overview</h4>
                      <p className="text-blackblack-60">
                        View your dashboard metrics and analytics.
                      </p>
                    </TabsContent>
                    <TabsContent value="profile" className="p-4 border rounded-lg mt-2">
                      <h4 className="text-base font-medium mb-2">User Profile</h4>
                      <p className="text-blackblack-60">
                        Manage your profile information and account details.
                      </p>
                    </TabsContent>
                    <TabsContent value="messages" className="p-4 border rounded-lg mt-2">
                      <h4 className="text-base font-medium mb-2">Messages</h4>
                      <p className="text-blackblack-60">
                        View and respond to your messages and notifications.
                      </p>
                    </TabsContent>
                    <TabsContent value="settings" className="p-4 border rounded-lg mt-2">
                      <h4 className="text-base font-medium mb-2">Settings</h4>
                      <p className="text-blackblack-60">
                        Configure your application settings and preferences.
                      </p>
                    </TabsContent>
                  </Tabs>
                </div>

                <div className="space-y-4 mt-8">
                  <h3 className="text-lg font-medium">Underlined Tabs</h3>
                  <Tabs defaultValue="all" className="w-full">
                    <div className="border-b">
                      <TabsList className="h-10 bg-transparent p-0">
                        <TabsTrigger
                          value="all"
                          className="data-[state=active]:text-light-themeprimaryblue data-[state=active]:border-b-2 data-[state=active]:border-light-themeprimaryblue data-[state=active]:shadow-none rounded-none px-4 h-10 bg-transparent"
                        >
                          All Items
                        </TabsTrigger>
                        <TabsTrigger
                          value="active"
                          className="data-[state=active]:text-light-themeprimaryblue data-[state=active]:border-b-2 data-[state=active]:border-light-themeprimaryblue data-[state=active]:shadow-none rounded-none px-4 h-10 bg-transparent"
                        >
                          Active
                        </TabsTrigger>
                        <TabsTrigger
                          value="completed"
                          className="data-[state=active]:text-light-themeprimaryblue data-[state=active]:border-b-2 data-[state=active]:border-light-themeprimaryblue data-[state=active]:shadow-none rounded-none px-4 h-10 bg-transparent"
                        >
                          Completed
                        </TabsTrigger>
                        <TabsTrigger
                          value="archived"
                          className="data-[state=active]:text-light-themeprimaryblue data-[state=active]:border-b-2 data-[state=active]:border-light-themeprimaryblue data-[state=active]:shadow-none rounded-none px-4 h-10 bg-transparent"
                        >
                          Archived
                        </TabsTrigger>
                      </TabsList>
                    </div>
                    <TabsContent value="all" className="p-4 mt-2">
                      <p className="text-blackblack-60">Showing all items. Total: 24 items.</p>
                    </TabsContent>
                    <TabsContent value="active" className="p-4 mt-2">
                      <p className="text-blackblack-60">
                        Showing active items. Total: 12 active items.
                      </p>
                    </TabsContent>
                    <TabsContent value="completed" className="p-4 mt-2">
                      <p className="text-blackblack-60">
                        Showing completed items. Total: 8 completed items.
                      </p>
                    </TabsContent>
                    <TabsContent value="archived" className="p-4 mt-2">
                      <p className="text-blackblack-60">
                        Showing archived items. Total: 4 archived items.
                      </p>
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Tab Layouts &amp; Examples
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Dashboard Example with Tabs</h3>
                  <Tabs defaultValue="overview" className="w-full">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">Analytics Dashboard</h2>
                      <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="sales">Sales</TabsTrigger>
                        <TabsTrigger value="customers">Customers</TabsTrigger>
                      </TabsList>
                    </div>

                    <TabsContent value="overview" className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg border">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-blackblack-60">
                              Total Revenue
                            </h3>
                            <LineChart className="h-4 w-4 text-blackblack-60" />
                          </div>
                          <p className="text-2xl font-bold mt-2">$24,345</p>
                          <p className="text-xs text-actionsuccess flex items-center mt-1">
                            <span className="text-actionsuccess mr-1">↑</span> 12% from last month
                          </p>
                        </div>

                        <div className="bg-white p-4 rounded-lg border">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-blackblack-60">Total Orders</h3>
                            <BarChart className="h-4 w-4 text-blackblack-60" />
                          </div>
                          <p className="text-2xl font-bold mt-2">1,456</p>
                          <p className="text-xs text-actionsuccess flex items-center mt-1">
                            <span className="text-actionsuccess mr-1">↑</span> 8% from last month
                          </p>
                        </div>

                        <div className="bg-white p-4 rounded-lg border">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-blackblack-60">
                              New Customers
                            </h3>
                            <PieChart className="h-4 w-4 text-blackblack-60" />
                          </div>
                          <p className="text-2xl font-bold mt-2">356</p>
                          <p className="text-xs text-actionwarning flex items-center mt-1">
                            <span className="text-actionwarning mr-1">↓</span> 3% from last month
                          </p>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg border">
                        <h3 className="text-base font-medium mb-4">Recent Activity</h3>
                        <div className="space-y-3">
                          {[1, 2, 3].map(i => (
                            <div
                              key={i}
                              className="flex items-center justify-between pb-2 border-b last:border-0 last:pb-0"
                            >
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-light-themeprimarylight-blue flex items-center justify-center mr-3">
                                  <Bell className="h-4 w-4 text-light-themeprimaryblue" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium">New order received</p>
                                  <p className="text-xs text-blackblack-60">
                                    Order #ORD-{5280 + i}
                                  </p>
                                </div>
                              </div>
                              <span className="text-xs text-blackblack-60">{i}h ago</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="sales" className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <h3 className="text-base font-medium mb-4">Sales Overview</h3>
                        <div className="h-[200px] flex items-center justify-center bg-surfaceslightgray-10 rounded-lg">
                          <p className="text-blackblack-60">Sales chart will be displayed here</p>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg border">
                        <h3 className="text-base font-medium mb-4">Top Selling Products</h3>
                        <div className="space-y-2">
                          {[
                            { name: 'Product A', sales: 245, value: '$12,450' },
                            { name: 'Product B', sales: 190, value: '$9,500' },
                            { name: 'Product C', sales: 175, value: '$8,750' },
                          ].map((product, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between pb-2 border-b last:border-0 last:pb-0"
                            >
                              <div>
                                <p className="text-sm font-medium">{product.name}</p>
                                <p className="text-xs text-blackblack-60">
                                  {product.sales} units sold
                                </p>
                              </div>
                              <span className="text-sm font-medium text-light-themeprimaryblue">
                                {product.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="customers" className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <h3 className="text-base font-medium mb-4">Customer Demographics</h3>
                        <div className="h-[200px] flex items-center justify-center bg-surfaceslightgray-10 rounded-lg">
                          <p className="text-blackblack-60">
                            Customer demographics chart will be displayed here
                          </p>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg border">
                        <h3 className="text-base font-medium mb-4">Recent Customers</h3>
                        <div className="space-y-3">
                          {[
                            { name: 'John Smith', email: 'john@example.com', date: '2 days ago' },
                            { name: 'Emma Johnson', email: 'emma@example.com', date: '3 days ago' },
                            {
                              name: 'Michael Brown',
                              email: 'michael@example.com',
                              date: '5 days ago',
                            },
                          ].map((customer, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between pb-2 border-b last:border-0 last:pb-0"
                            >
                              <div className="flex items-center">
                                <Avatar className="w-8 h-8 mr-3">
                                  <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="text-sm font-medium">{customer.name}</p>
                                  <p className="text-xs text-blackblack-60">{customer.email}</p>
                                </div>
                              </div>
                              <span className="text-xs text-blackblack-60">{customer.date}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                <div className="space-y-6 mt-8">
                  <h3 className="text-lg font-medium">Product Page Example with Tabs</h3>
                  <div className="bg-white p-6 rounded-lg border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-surfaceslightgray-10 rounded-lg flex items-center justify-center h-[300px]">
                        <Package className="h-12 w-12 text-blackblack-40" />
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold mb-2">Premium Wireless Headphones</h2>
                        <div className="flex items-center mb-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map(star => (
                              <svg
                                key={star}
                                className={`w-4 h-4 ${star <= 4 ? 'text-actionalert fill-actionalert' : 'text-blackblack-20'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l2.7 8.3h8.3l-6.7 4.8 2.7 8.3-6.7-4.8-6.7 4.8 2.7-8.3-6.7-4.8h8.3z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm text-blackblack-60 ml-2">128 Reviews</span>
                        </div>
                        <p className="text-2xl font-bold mb-2">$249.99</p>
                        <p className="text-blackblack-60 mb-4">
                          Premium wireless headphones with noise cancellation technology and
                          superior sound quality.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <span className="text-sm w-24">Color:</span>
                            <div className="flex gap-2">
                              <div className="w-6 h-6 rounded-full bg-black cursor-pointer ring-2 ring-offset-2 ring-light-themeprimaryblue"></div>
                              <div className="w-6 h-6 rounded-full bg-white border border-blackblack-20 cursor-pointer"></div>
                              <div className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer"></div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <span className="text-sm w-24">Quantity:</span>
                            <div className="flex">
                              <button className="w-8 h-8 border border-blackblack-20 rounded-l-md flex items-center justify-center">
                                -
                              </button>
                              <div className="w-10 h-8 border-t border-b border-blackblack-20 flex items-center justify-center">
                                1
                              </div>
                              <button className="w-8 h-8 border border-blackblack-20 rounded-r-md flex items-center justify-center">
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                          <Button className="flex-1">Add to Cart</Button>
                          <Button variant="outline" className="flex-1">
                            Buy Now
                          </Button>
                        </div>
                      </div>
                    </div>

                    <Tabs defaultValue="description" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="description">Description</TabsTrigger>
                        <TabsTrigger value="specifications">Specifications</TabsTrigger>
                        <TabsTrigger value="reviews">Reviews</TabsTrigger>
                        <TabsTrigger value="shipping">Shipping</TabsTrigger>
                      </TabsList>
                      <TabsContent value="description" className="p-4 mt-2">
                        <h4 className="text-base font-medium mb-2">Product Description</h4>
                        <p className="text-blackblack-60 mb-2">
                          Experience premium sound quality with our wireless headphones. The
                          advanced noise cancellation technology blocks out external noise, allowing
                          you to immerse yourself in your music or calls without distractions.
                        </p>
                        <p className="text-blackblack-60">
                          These headphones feature a comfortable, over-ear design with soft
                          cushioning that makes them perfect for extended wear. The battery lasts up
                          to 30 hours on a single charge, and a quick 10-minute charge provides 5
                          hours of playback time.
                        </p>
                      </TabsContent>
                      <TabsContent value="specifications" className="p-4 mt-2">
                        <h4 className="text-base font-medium mb-2">Technical Specifications</h4>
                        <div className="space-y-2">
                          <div className="flex border-b pb-2">
                            <span className="font-medium w-40">Driver Size</span>
                            <span className="text-blackblack-60">40mm</span>
                          </div>
                          <div className="flex border-b pb-2">
                            <span className="font-medium w-40">Frequency Response</span>
                            <span className="text-blackblack-60">20Hz - 20kHz</span>
                          </div>
                          <div className="flex border-b pb-2">
                            <span className="font-medium w-40">Battery Life</span>
                            <span className="text-blackblack-60">Up to 30 hours</span>
                          </div>
                          <div className="flex border-b pb-2">
                            <span className="font-medium w-40">Charging Time</span>
                            <span className="text-blackblack-60">2 hours</span>
                          </div>
                          <div className="flex border-b pb-2">
                            <span className="font-medium w-40">Bluetooth Version</span>
                            <span className="text-blackblack-60">5.0</span>
                          </div>
                          <div className="flex">
                            <span className="font-medium w-40">Weight</span>
                            <span className="text-blackblack-60">250g</span>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="reviews" className="p-4 mt-2">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-base font-medium">Customer Reviews</h4>
                          <Button variant="outline" size="sm">
                            Write a Review
                          </Button>
                        </div>
                        <div className="space-y-4">
                          {[
                            {
                              name: 'John S.',
                              rating: 5,
                              date: '2 months ago',
                              comment:
                                'These headphones are amazing! The sound quality is superb and the noise cancellation works perfectly.',
                            },
                            {
                              name: 'Emma J.',
                              rating: 4,
                              date: '3 months ago',
                              comment:
                                "Great headphones. The sound is clear and the battery life is impressive. I knocked off one star because they're a bit heavy.",
                            },
                            {
                              name: 'Michael B.',
                              rating: 5,
                              date: '5 months ago',
                              comment: "Best headphones I've ever owned. Well worth the price!",
                            },
                          ].map((review, i) => (
                            <div key={i} className="pb-4 border-b last:border-0 last:pb-0">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center">
                                  <div className="w-8 h-8 rounded-full bg-light-themeprimarylight-blue flex items-center justify-center mr-2">
                                    <span className="text-sm font-medium text-light-themeprimaryblue">
                                      {review.name.charAt(0)}
                                    </span>
                                  </div>
                                  <span className="font-medium">{review.name}</span>
                                </div>
                                <span className="text-sm text-blackblack-60">{review.date}</span>
                              </div>
                              <div className="flex mb-2">
                                {[1, 2, 3, 4, 5].map(star => (
                                  <svg
                                    key={star}
                                    className={`w-4 h-4 ${star <= review.rating ? 'text-actionalert fill-actionalert' : 'text-blackblack-20'}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l2.7 8.3h8.3l-6.7 4.8 2.7 8.3-6.7-4.8-6.7 4.8 2.7-8.3-6.7-4.8h8.3z" />
                                  </svg>
                                ))}
                              </div>
                              <p className="text-blackblack-60">{review.comment}</p>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent value="shipping" className="p-4 mt-2">
                        <h4 className="text-base font-medium mb-2">Shipping & Returns</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium mb-1">Delivery</h5>
                            <p className="text-blackblack-60">
                              Standard shipping (3-5 business days): $5.99
                              <br />
                              Express shipping (1-2 business days): $12.99
                              <br />
                              Free shipping on orders over $100
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">Returns</h5>
                            <p className="text-blackblack-60">
                              We offer a 30-day return policy. Items must be unused and in original
                              packaging.
                              <br />
                              Return shipping is free for defective items. A $5.99 return shipping
                              fee applies to all other returns.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">Warranty</h5>
                            <p className="text-blackblack-60">
                              This product comes with a 1-year limited manufacturer warranty
                              covering defects in materials and workmanship.
                            </p>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
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
                  <h3 className="text-lg font-medium">Basic Tabs Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// Basic tabs
<Tabs defaultValue="account" className="w-full">
  <TabsList className="grid w-full grid-cols-3">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="account" className="p-4 border rounded-lg mt-2">
    <h4 className="text-base font-medium mb-2">Account Settings</h4>
    <p className="text-blackblack-60">Manage your account details and preferences.</p>
  </TabsContent>
  <TabsContent value="password" className="p-4 border rounded-lg mt-2">
    <h4 className="text-base font-medium mb-2">Password Settings</h4>
    <p className="text-blackblack-60">Change your password and security settings.</p>
  </TabsContent>
  <TabsContent value="settings" className="p-4 border rounded-lg mt-2">
    <h4 className="text-base font-medium mb-2">General Settings</h4>
    <p className="text-blackblack-60">Configure your application preferences.</p>
  </TabsContent>
</Tabs>`}
                    </code>
                  </pre>

                  <h3 className="text-lg font-medium mt-6">Tabs with Icons Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// Tabs with icons
<Tabs defaultValue="dashboard" className="w-full">
  <TabsList className="grid w-full grid-cols-4">
    <TabsTrigger value="dashboard" className="flex items-center">
      <Home className="mr-2 h-4 w-4" />
      <span>Dashboard</span>
    </TabsTrigger>
    <TabsTrigger value="profile" className="flex items-center">
      <User className="mr-2 h-4 w-4" />
      <span>Profile</span>
    </TabsTrigger>
    <TabsTrigger value="messages" className="flex items-center">
      <MessageSquare className="mr-2 h-4 w-4" />
      <span>Messages</span>
    </TabsTrigger>
    <TabsTrigger value="settings" className="flex items-center">
      <Settings className="mr-2 h-4 w-4" />
      <span>Settings</span>
    </TabsTrigger>
  </TabsList>
  <TabsContent value="dashboard" className="p-4 border rounded-lg mt-2">
    <h4 className="text-base font-medium mb-2">Dashboard Overview</h4>
    <p className="text-blackblack-60">View your dashboard metrics and analytics.</p>
  </TabsContent>
  {/* Other tab contents */}
</Tabs>`}
                    </code>
                  </pre>

                  <h3 className="text-lg font-medium mt-6">Underlined Tabs Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// Underlined tabs
<Tabs defaultValue="all" className="w-full">
  <div className="border-b">
    <TabsList className="h-10 bg-transparent p-0">
      <TabsTrigger
        value="all"
        className="data-[state=active]:text-light-themeprimaryblue data-[state=active]:border-b-2 data-[state=active]:border-light-themeprimaryblue data-[state=active]:shadow-none rounded-none px-4 h-10 bg-transparent"
      >
        All Items
      </TabsTrigger>
      <TabsTrigger
        value="active"
        className="data-[state=active]:text-light-themeprimaryblue data-[state=active]:border-b-2 data-[state=active]:border-light-themeprimaryblue data-[state=active]:shadow-none rounded-none px-4 h-10 bg-transparent"
      >
        Active
      </TabsTrigger>
      <TabsTrigger
        value="completed"
        className="data-[state=active]:text-light-themeprimaryblue data-[state=active]:border-b-2 data-[state=active]:border-light-themeprimaryblue data-[state=active]:shadow-none rounded-none px-4 h-10 bg-transparent"
      >
        Completed
      </TabsTrigger>
      <TabsTrigger
        value="archived"
        className="data-[state=active]:text-light-themeprimaryblue data-[state=active]:border-b-2 data-[state=active]:border-light-themeprimaryblue data-[state=active]:shadow-none rounded-none px-4 h-10 bg-transparent"
      >
        Archived
      </TabsTrigger>
    </TabsList>
  </div>
  <TabsContent value="all" className="p-4 mt-2">
    <p className="text-blackblack-60">Showing all items. Total: 24 items.</p>
  </TabsContent>
  {/* Other tab contents */}
</Tabs>`}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
      </main>
    </div>
  );
};

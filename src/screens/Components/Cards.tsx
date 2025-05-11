import React from "react";
import { TitlebarByAnima } from "../Buttons/components/Titlebar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { MoreHorizontal, ThumbsUp, MessageSquare, Share, Bookmark, Heart, ExternalLink, Calendar, MapPin, Star } from "lucide-react";

export const Cards = (): JSX.Element => {
  return (
    <div className="flex flex-col overflow-hidden">
      <TitlebarByAnima title="Cards" />
      <main className="flex-1 overflow-auto p-6">
        <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Basic Cards
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Simple Card</h3>
                    <Card>
                      <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card description goes here</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>This is the main content of the card. It can contain text, images, or any other elements.</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <Button variant="primary">Submit</Button>
                      </CardFooter>
                    </Card>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Card with Badge</h3>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0">
                        <div>
                          <CardTitle>Card with Badge</CardTitle>
                          <CardDescription>Card with additional status</CardDescription>
                        </div>
                        <Badge className="bg-actionsuccess text-white">New</Badge>
                      </CardHeader>
                      <CardContent>
                        <p>This card includes a badge in the header to indicate status or importance.</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">View Details</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Card Variants</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-light-themeprimarylight-blue border-light-themeprimaryblue">
                      <CardHeader>
                        <CardTitle className="text-light-themeprimaryblue">Primary Card</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>A card with primary color theme.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-light-themesecondarylight-purple border-light-themesecondarypurple">
                      <CardHeader>
                        <CardTitle className="text-light-themesecondarypurple">Secondary Card</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>A card with secondary color theme.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-actionsuccess-light border-actionsuccess">
                      <CardHeader>
                        <CardTitle className="text-actionsuccess">Success Card</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>A card indicating successful action.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Content Cards
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="overflow-hidden">
                    <div className="aspect-video w-full bg-surfaceslightgray-10 relative">
                      <img
                        src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Blog post"
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 right-4 bg-light-themeprimaryblue text-white">Featured</Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-light-themeprimaryblue border-light-themeprimaryblue">Technology</Badge>
                        <p className="text-xs text-blackblack-60">5 min read</p>
                      </div>
                      <CardTitle>Getting Started with React</CardTitle>
                      <CardDescription>Learn the basics of React and start building your first component.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-3 mb-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="avatar" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">John Doe</p>
                          <p className="text-xs text-blackblack-60">Mar 15, 2025</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ThumbsUp className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Share className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle>Product Card</CardTitle>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="h-48 bg-surfaceslightgray-10 rounded-md flex items-center justify-center mb-4">
                        <img
                          src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="Product"
                          className="max-h-full max-w-full p-4"
                        />
                      </div>
                      <h3 className="font-medium text-lg">Wireless Headphones XR200</h3>
                      <div className="flex items-center gap-1 mt-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={`h-4 w-4 ${star <= 4 ? "text-actionalert fill-actionalert" : "text-blackblack-20"}`} 
                          />
                        ))}
                        <span className="text-xs text-blackblack-60 ml-1">(128)</span>
                      </div>
                      <p className="text-blackblack-60 text-sm mb-3">Premium wireless headphones with noise cancellation and 30-hour battery life.</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold">$249.99</span>
                        <span className="text-sm text-blackblack-60 line-through">$299.99</span>
                        <Badge className="bg-actionwarning text-white ml-auto">-17%</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="primary" className="w-full">Add to Cart</Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Event Card</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video w-full bg-surfaceslightgray-10 rounded-md relative mb-4">
                        <img
                          src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="Event"
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <h3 className="font-medium text-lg">Tech Conference 2025</h3>
                      <div className="space-y-2 mt-3">
                        <div className="flex items-center text-blackblack-60">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">April 15-17, 2025</span>
                        </div>
                        <div className="flex items-center text-blackblack-60">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm">San Francisco, CA</span>
                        </div>
                      </div>
                      <p className="text-blackblack-60 text-sm mt-3">Join us for the biggest tech conference of the year with industry leaders and innovative workshops.</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Learn More</Button>
                      <Button variant="primary">Register Now</Button>
                    </CardFooter>
                  </Card>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Horizontal Cards</h3>
                  <div className="space-y-4">
                    <Card>
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 h-48 md:h-auto bg-surfaceslightgray-10">
                          <img
                            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Team collaboration"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <h3 className="text-xl font-medium mb-2">About Our Company</h3>
                          <p className="text-blackblack-60 mb-4">We are a team of passionate designers and developers creating innovative solutions for businesses around the world. Our mission is to build software that makes a difference.</p>
                          <Button variant="outline" className="flex items-center">
                            Learn More <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                    
                    <Card>
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/3 p-6">
                          <Badge className="mb-2 bg-light-themesecondarylight-purple text-light-themesecondarypurple">Case Study</Badge>
                          <h3 className="text-xl font-medium mb-2">How Company X Increased Conversions by 200%</h3>
                          <p className="text-blackblack-60 mb-4">Learn how our team helped Company X redesign their website and optimize their customer journey to achieve remarkable results in just three months.</p>
                          <div className="flex gap-3">
                            <Button variant="primary">Read Case Study</Button>
                            <Button variant="outline">Contact Sales</Button>
                          </div>
                        </div>
                        <div className="md:w-1/3 h-48 md:h-auto bg-surfaceslightgray-10">
                          <img
                            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Case study"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </Card>
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
                  <h3 className="text-lg font-medium">Basic Card Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`// Simple card
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the main content of the card.</p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button variant="primary">Submit</Button>
  </CardFooter>
</Card>

// Card with badge
<Card>
  <CardHeader className="flex flex-row items-center justify-between space-y-0">
    <div>
      <CardTitle>Card with Badge</CardTitle>
      <CardDescription>Card with additional status</CardDescription>
    </div>
    <Badge className="bg-actionsuccess text-white">New</Badge>
  </CardHeader>
  <CardContent>
    <p>This card includes a badge in the header.</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline" className="w-full">View Details</Button>
  </CardFooter>
</Card>`}
                    </code>
                  </pre>
                  
                  <h3 className="text-lg font-medium mt-6">Content Card Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`// Blog post card
<Card className="overflow-hidden">
  <div className="aspect-video w-full bg-surfaceslightgray-10 relative">
    <img
      src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg"
      alt="Blog post"
      className="w-full h-full object-cover"
    />
    <Badge className="absolute top-4 right-4 bg-light-themeprimaryblue text-white">
      Featured
    </Badge>
  </div>
  <CardHeader>
    <div className="flex items-center gap-2 mb-2">
      <Badge variant="outline" className="text-light-themeprimaryblue border-light-themeprimaryblue">
        Technology
      </Badge>
      <p className="text-xs text-blackblack-60">5 min read</p>
    </div>
    <CardTitle>Getting Started with React</CardTitle>
    <CardDescription>Learn the basics of React and start building your first component.</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="flex items-center gap-3 mb-4">
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="avatar" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-medium">John Doe</p>
        <p className="text-xs text-blackblack-60">Mar 15, 2025</p>
      </div>
    </div>
  </CardContent>
  <CardFooter className="flex justify-between">
    <div className="flex gap-2">
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <ThumbsUp className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <MessageSquare className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Share className="h-4 w-4" />
      </Button>
    </div>
    <Button variant="ghost" size="icon" className="h-8 w-8">
      <Bookmark className="h-4 w-4" />
    </Button>
  </CardFooter>
</Card>`}
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
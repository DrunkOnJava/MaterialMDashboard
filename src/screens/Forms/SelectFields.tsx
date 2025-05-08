import React from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "../Buttons/components/Titlebar";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue,
  SelectGroup,
  SelectLabel
} from "../../components/ui/select";
import { Check, ChevronsUpDown, Globe, Clock, Users, Flag } from "lucide-react";

export const SelectFields = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Select Fields" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Basic Select Fields
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Default Select</h3>
                    <div className="space-y-2">
                      <Label htmlFor="default-select">Default select</Label>
                      <Select>
                        <SelectTrigger id="default-select">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option1">Option 1</SelectItem>
                          <SelectItem value="option2">Option 2</SelectItem>
                          <SelectItem value="option3">Option 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="disabled-select">Disabled select</Label>
                      <Select disabled>
                        <SelectTrigger id="disabled-select">
                          <SelectValue placeholder="Disabled select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option1">Option 1</SelectItem>
                          <SelectItem value="option2">Option 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="preselected">Pre-selected value</Label>
                      <Select defaultValue="option2">
                        <SelectTrigger id="preselected">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option1">Option 1</SelectItem>
                          <SelectItem value="option2">Option 2</SelectItem>
                          <SelectItem value="option3">Option 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Select with Group</h3>
                    <div className="space-y-2">
                      <Label htmlFor="grouped-select">Grouped select</Label>
                      <Select>
                        <SelectTrigger id="grouped-select">
                          <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="orange">Orange</SelectItem>
                          </SelectGroup>
                          <SelectGroup>
                            <SelectLabel>Vegetables</SelectLabel>
                            <SelectItem value="carrot">Carrot</SelectItem>
                            <SelectItem value="broccoli">Broccoli</SelectItem>
                            <SelectItem value="spinach">Spinach</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="icon-select">Select with icons</Label>
                      <Select>
                        <SelectTrigger id="icon-select" className="w-full">
                          <Globe className="mr-2 h-4 w-4 text-blackblack-60" />
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">
                            <div className="flex items-center">
                              <Flag className="mr-2 h-4 w-4 text-blackblack-60" />
                              <span>United States</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="uk">
                            <div className="flex items-center">
                              <Flag className="mr-2 h-4 w-4 text-blackblack-60" />
                              <span>United Kingdom</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="ca">
                            <div className="flex items-center">
                              <Flag className="mr-2 h-4 w-4 text-blackblack-60" />
                              <span>Canada</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Custom Selects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Time select</Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <Clock className="mr-2 h-4 w-4 text-blackblack-60" />
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (8:00 AM - 12:00 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12:00 PM - 5:00 PM)</SelectItem>
                          <SelectItem value="evening">Evening (5:00 PM - 9:00 PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>User select</Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <Users className="mr-2 h-4 w-4 text-blackblack-60" />
                          <SelectValue placeholder="Assign to" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="john">
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-light-themeprimarylight-blue flex items-center justify-center mr-2">
                                <span className="text-xs font-medium text-light-themeprimaryblue">J</span>
                              </div>
                              <span>John Doe</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="jane">
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-light-themesecondarylight-purple flex items-center justify-center mr-2">
                                <span className="text-xs font-medium text-light-themesecondarypurple">J</span>
                              </div>
                              <span>Jane Smith</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="bob">
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-actionsuccess-light flex items-center justify-center mr-2">
                                <span className="text-xs font-medium text-actionsuccess">B</span>
                              </div>
                              <span>Bob Johnson</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Usage Example</h3>
                  <div className="p-6 border border-[#111c2d1a] rounded-lg bg-surfaceslightgray-10">
                    <form className="space-y-4 max-w-md mx-auto">
                      <h4 className="text-xl font-medium text-center">Event Registration</h4>
                      
                      <div className="space-y-2">
                        <Label htmlFor="event-type">Event Type</Label>
                        <Select>
                          <SelectTrigger id="event-type">
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="conference">Conference</SelectItem>
                            <SelectItem value="workshop">Workshop</SelectItem>
                            <SelectItem value="seminar">Seminar</SelectItem>
                            <SelectItem value="webinar">Webinar</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="time-slot">Preferred Time Slot</Label>
                        <Select>
                          <SelectTrigger id="time-slot">
                            <Clock className="mr-2 h-4 w-4 text-blackblack-60" />
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9-12">Morning: 9:00 AM - 12:00 PM</SelectItem>
                            <SelectItem value="1-4">Afternoon: 1:00 PM - 4:00 PM</SelectItem>
                            <SelectItem value="5-8">Evening: 5:00 PM - 8:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="participants">Number of Participants</Label>
                        <Select>
                          <SelectTrigger id="participants">
                            <Users className="mr-2 h-4 w-4 text-blackblack-60" />
                            <SelectValue placeholder="Select number of participants" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Just me</SelectItem>
                            <SelectItem value="2-5">2-5 people</SelectItem>
                            <SelectItem value="6-10">6-10 people</SelectItem>
                            <SelectItem value="10+">More than 10 people</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <Button type="submit" variant="primary" className="w-full mt-4">Register</Button>
                    </form>
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
{`// Basic select
<div className="space-y-2">
  <Label htmlFor="default-select">Default select</Label>
  <Select>
    <SelectTrigger id="default-select">
      <SelectValue placeholder="Select an option" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="option1">Option 1</SelectItem>
      <SelectItem value="option2">Option 2</SelectItem>
      <SelectItem value="option3">Option 3</SelectItem>
    </SelectContent>
  </Select>
</div>

// Grouped select
<div className="space-y-2">
  <Label htmlFor="grouped-select">Grouped select</Label>
  <Select>
    <SelectTrigger id="grouped-select">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectGroup>
      <SelectGroup>
        <SelectLabel>Vegetables</SelectLabel>
        <SelectItem value="carrot">Carrot</SelectItem>
        <SelectItem value="broccoli">Broccoli</SelectItem>
        <SelectItem value="spinach">Spinach</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</div>

// Select with icons
<div className="space-y-2">
  <Label>User select</Label>
  <Select>
    <SelectTrigger className="w-full">
      <Users className="mr-2 h-4 w-4 text-blackblack-60" />
      <SelectValue placeholder="Assign to" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="john">
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-light-themeprimarylight-blue flex items-center justify-center mr-2">
            <span className="text-xs font-medium text-light-themeprimaryblue">J</span>
          </div>
          <span>John Doe</span>
        </div>
      </SelectItem>
      <SelectItem value="jane">
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-light-themesecondarylight-purple flex items-center justify-center mr-2">
            <span className="text-xs font-medium text-light-themesecondarypurple">J</span>
          </div>
          <span>Jane Smith</span>
        </div>
      </SelectItem>
    </SelectContent>
  </Select>
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
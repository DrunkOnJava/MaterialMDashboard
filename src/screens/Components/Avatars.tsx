import React from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "../Buttons/components/Titlebar";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { 
  User, Mail, Upload, PlusCircle, Check, UserPlus, MoreHorizontal,
  MessageSquare, Phone, Video, Settings
} from "lucide-react";
import { Badge } from "../../components/ui/badge";

export const AvatarsPage = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Avatars" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Basic Avatars
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Image Avatars</h3>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="Avatar" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-blackblack-60">Large</span>
                      </div>
                      
                      <div className="flex flex-col items-center gap-2">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src="https://i.pravatar.cc/150?img=2" alt="Avatar" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-blackblack-60">Medium</span>
                      </div>
                      
                      <div className="flex flex-col items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="Avatar" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-blackblack-60">Small</span>
                      </div>
                      
                      <div className="flex flex-col items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="https://i.pravatar.cc/150?img=4" alt="Avatar" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-blackblack-60">Extra Small</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Fallback Avatars</h3>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <Avatar className="h-16 w-16">
                          <AvatarFallback className="bg-light-themeprimarylight-blue text-light-themeprimaryblue text-xl">
                            JD
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-blackblack-60">Initials</span>
                      </div>
                      
                      <div className="flex flex-col items-center gap-2">
                        <Avatar className="h-16 w-16">
                          <AvatarFallback className="bg-light-themesecondarylight-purple text-light-themesecondarypurple text-xl">
                            AB
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-blackblack-60">Initials</span>
                      </div>
                      
                      <div className="flex flex-col items-center gap-2">
                        <Avatar className="h-16 w-16">
                          <AvatarFallback className="bg-actionsuccess-light text-actionsuccess">
                            <User className="h-8 w-8" />
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-blackblack-60">Icon</span>
                      </div>
                      
                      <div className="flex flex-col items-center gap-2">
                        <Avatar className="h-16 w-16">
                          <AvatarFallback className="bg-actionalert-light text-actionalert">
                            <User className="h-8 w-8" />
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-blackblack-60">Icon</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Avatar Variants</h3>
                  <div className="flex flex-wrap gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <Avatar className="h-12 w-12 rounded-md">
                        <AvatarImage src="https://i.pravatar.cc/150?img=5" alt="Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-blackblack-60">Square</span>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <Avatar className="h-12 w-12 rounded-lg">
                        <AvatarImage src="https://i.pravatar.cc/150?img=6" alt="Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-blackblack-60">Rounded</span>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="https://i.pravatar.cc/150?img=7" alt="Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-blackblack-60">Circle</span>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <div className="relative">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src="https://i.pravatar.cc/150?img=8" alt="Avatar" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-actionsuccess border-2 border-white"></span>
                      </div>
                      <span className="text-sm text-blackblack-60">With Status</span>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <div className="relative">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src="https://i.pravatar.cc/150?img=9" alt="Avatar" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-light-themeprimaryblue text-white flex items-center justify-center text-xs font-medium border-2 border-white">
                          3
                        </div>
                      </div>
                      <span className="text-sm text-blackblack-60">With Badge</span>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <div className="relative">
                        <Avatar className="h-12 w-12 ring-2 ring-light-themeprimaryblue ring-offset-2">
                          <AvatarImage src="https://i.pravatar.cc/150?img=10" alt="Avatar" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      </div>
                      <span className="text-sm text-blackblack-60">With Border</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Avatar Groups</h3>
                  <div className="space-y-6">
                    <div className="flex flex-col gap-2">
                      <span className="text-sm text-blackblack-60">Stack Overlapping</span>
                      <div className="flex -space-x-4">
                        <Avatar className="h-10 w-10 border-2 border-white">
                          <AvatarImage src="https://i.pravatar.cc/150?img=11" alt="Avatar" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-10 w-10 border-2 border-white">
                          <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="Avatar" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-10 w-10 border-2 border-white">
                          <AvatarImage src="https://i.pravatar.cc/150?img=13" alt="Avatar" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-10 w-10 border-2 border-white">
                          <AvatarFallback className="bg-light-themeprimarylight-blue text-light-themeprimaryblue">
                            +5
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <span className="text-sm text-blackblack-60">With Add Button</span>
                      <div className="flex -space-x-4">
                        <Avatar className="h-10 w-10 border-2 border-white">
                          <AvatarImage src="https://i.pravatar.cc/150?img=14" alt="Avatar" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-10 w-10 border-2 border-white">
                          <AvatarImage src="https://i.pravatar.cc/150?img=15" alt="Avatar" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-10 w-10 border-2 border-white flex items-center justify-center bg-light-themeprimarylight-blue text-light-themeprimaryblue cursor-pointer">
                          <PlusCircle className="h-5 w-5" />
                        </Avatar>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Avatar Applications
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">User Profile Card</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="overflow-hidden">
                      <div className="h-24 bg-light-themeprimarylight-blue"></div>
                      <div className="px-6 pb-6">
                        <div className="flex justify-center">
                          <Avatar className="h-20 w-20 -mt-10 border-4 border-white">
                            <AvatarImage src="https://i.pravatar.cc/150?img=16" alt="User" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="text-center mt-2">
                          <h3 className="font-medium text-lg">John Doe</h3>
                          <p className="text-blackblack-60 text-sm">Product Designer</p>
                          <div className="flex justify-center mt-2 gap-1">
                            <Badge className="bg-light-themeprimarylight-blue text-light-themeprimaryblue">Designer</Badge>
                            <Badge className="bg-light-themesecondarylight-purple text-light-themesecondarypurple">UI/UX</Badge>
                          </div>
                        </div>
                        <div className="flex justify-center gap-2 mt-4">
                          <button className="p-2 rounded-full bg-light-themeprimarylight-blue text-light-themeprimaryblue">
                            <Mail className="h-4 w-4" />
                          </button>
                          <button className="p-2 rounded-full bg-light-themeprimarylight-blue text-light-themeprimaryblue">
                            <MessageSquare className="h-4 w-4" />
                          </button>
                          <button className="p-2 rounded-full bg-light-themeprimarylight-blue text-light-themeprimaryblue">
                            <Phone className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src="https://i.pravatar.cc/150?img=17" alt="User" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-medium text-lg">Jane Smith</h3>
                            <p className="text-blackblack-60 text-sm">Senior Developer</p>
                            <p className="text-blackblack-60 text-xs mt-1">jane.smith@example.com</p>
                          </div>
                          <div className="ml-auto">
                            <button className="p-2 rounded-full bg-light-themeprimarylight-blue text-light-themeprimaryblue">
                              <MoreHorizontal className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <div className="mt-4 border-t pt-4">
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div>
                              <p className="font-medium">24</p>
                              <p className="text-blackblack-60 text-xs">Projects</p>
                            </div>
                            <div>
                              <p className="font-medium">156</p>
                              <p className="text-blackblack-60 text-xs">Tasks</p>
                            </div>
                            <div>
                              <p className="font-medium">12</p>
                              <p className="text-blackblack-60 text-xs">Teams</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <div className="text-center">
                          <Avatar className="h-24 w-24 mx-auto">
                            <AvatarFallback className="bg-light-themeprimarylight-blue text-light-themeprimaryblue text-3xl">
                              RS
                            </AvatarFallback>
                          </Avatar>
                          <h3 className="font-medium text-lg mt-3">Robert Smith</h3>
                          <p className="text-blackblack-60 text-sm">Marketing Specialist</p>
                          
                          <div className="mt-4 flex justify-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="https://i.pravatar.cc/150?img=18" alt="Team Member" />
                            </Avatar>
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="https://i.pravatar.cc/150?img=19" alt="Team Member" />
                            </Avatar>
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="https://i.pravatar.cc/150?img=20" alt="Team Member" />
                            </Avatar>
                            <Avatar className="h-8 w-8 bg-light-themeprimarylight-blue">
                              <AvatarFallback className="text-light-themeprimaryblue text-xs">+4</AvatarFallback>
                            </Avatar>
                          </div>
                          
                          <button className="mt-4 px-4 py-2 bg-light-themeprimaryblue text-white rounded-md text-sm w-full flex items-center justify-center">
                            <UserPlus className="h-4 w-4 mr-2" />
                            Connect
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-0">
                        <div className="p-6 border-b border-[#111c2d1a]">
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <Avatar className="h-12 w-12">
                                <AvatarImage src="https://i.pravatar.cc/150?img=21" alt="User" />
                                <AvatarFallback>MD</AvatarFallback>
                              </Avatar>
                              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-actionsuccess border-2 border-white"></span>
                            </div>
                            <div>
                              <h3 className="font-medium">Michael Davis</h3>
                              <p className="text-blackblack-60 text-xs">Online now</p>
                            </div>
                            <div className="ml-auto flex gap-2">
                              <button className="p-1.5 rounded-full bg-light-themeprimarylight-blue text-light-themeprimaryblue">
                                <Video className="h-4 w-4" />
                              </button>
                              <button className="p-1.5 rounded-full bg-light-themeprimarylight-blue text-light-themeprimaryblue">
                                <Phone className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex flex-col space-y-2">
                            <div className="flex gap-2">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src="https://i.pravatar.cc/150?img=21" alt="User" />
                              </Avatar>
                              <div className="bg-surfaceslightgray-10 p-2 rounded-lg rounded-tl-none max-w-[70%]">
                                <p className="text-sm">Hey, are you available for a quick call?</p>
                                <p className="text-xs text-blackblack-60 mt-1">10:32 AM</p>
                              </div>
                            </div>
                            <div className="flex gap-2 justify-end">
                              <div className="bg-light-themeprimarylight-blue p-2 rounded-lg rounded-tr-none max-w-[70%]">
                                <p className="text-sm">Sure, let me finish this task and I'll call you in 5 minutes.</p>
                                <p className="text-xs text-blackblack-60 mt-1">10:33 AM</p>
                              </div>
                              <Avatar className="h-8 w-8">
                                <AvatarImage src="https://i.pravatar.cc/150?img=16" alt="User" />
                              </Avatar>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="space-y-6 mt-10">
                  <h3 className="text-lg font-medium">Team Member List</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                        <CardTitle className="font-normal text-lg">Project Team</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <ul>
                          {[
                            { name: "John Doe", role: "Project Manager", avatar: "https://i.pravatar.cc/150?img=22", status: "active" },
                            { name: "Jane Smith", role: "Lead Developer", avatar: "https://i.pravatar.cc/150?img=23", status: "active" },
                            { name: "Robert Johnson", role: "UX Designer", avatar: "https://i.pravatar.cc/150?img=24", status: "inactive" },
                            { name: "Emily Williams", role: "Content Writer", avatar: "https://i.pravatar.cc/150?img=25", status: "active" },
                          ].map((member, index) => (
                            <li key={index} className={`flex items-center justify-between p-4 ${
                              index < 3 ? "border-b border-[#111c2d1a]" : ""
                            }`}>
                              <div className="flex items-center gap-3">
                                <div className="relative">
                                  <Avatar className="h-10 w-10">
                                    <AvatarImage src={member.avatar} alt={member.name} />
                                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  {member.status === "active" && (
                                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-actionsuccess border-2 border-white"></span>
                                  )}
                                </div>
                                <div>
                                  <p className="font-medium">{member.name}</p>
                                  <p className="text-blackblack-60 text-xs">{member.role}</p>
                                </div>
                              </div>
                              <button className="p-2 rounded-full hover:bg-surfaceslightgray-10">
                                <MoreHorizontal className="h-4 w-4 text-blackblack-60" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="px-6 py-4">
                        <div className="flex justify-between items-center">
                          <CardTitle className="font-normal text-lg">Upload Profile Photo</CardTitle>
                          <Settings className="h-5 w-5 text-blackblack-60" />
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 pt-0">
                        <div className="flex flex-col items-center gap-4">
                          <Avatar className="h-24 w-24">
                            <AvatarImage src="https://i.pravatar.cc/150?img=26" alt="Current avatar" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div className="text-center">
                            <p className="text-sm text-blackblack-60">Upload a new avatar photo</p>
                            <p className="text-xs text-blackblack-60 mt-1">Recommended: Square JPG, PNG, or GIF, at least 500x500 pixels.</p>
                          </div>
                          <div className="flex gap-3">
                            <button className="px-4 py-2 bg-white border border-[#111c2d1a] rounded-md text-sm flex items-center gap-2">
                              <Upload className="h-4 w-4" />
                              Upload Photo
                            </button>
                            <button className="px-4 py-2 bg-white border border-[#111c2d1a] rounded-md text-sm text-actionwarning">
                              Remove
                            </button>
                          </div>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-[#111c2d1a]">
                          <p className="font-medium mb-3">Suggested Avatars</p>
                          <div className="flex gap-3">
                            {[27, 28, 29, 30, 31].map((num) => (
                              <div key={num} className="relative cursor-pointer group">
                                <Avatar className="h-12 w-12">
                                  <AvatarImage src={`https://i.pravatar.cc/150?img=${num}`} alt="Avatar option" />
                                </Avatar>
                                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full hidden group-hover:flex items-center justify-center">
                                  <Check className="h-6 w-6 text-white" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
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
                  <h3 className="text-lg font-medium">Basic Avatar Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`// Basic avatar with image
<Avatar className="h-12 w-12">
  <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="Avatar" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

// Fallback avatar with initials
<Avatar className="h-12 w-12">
  <AvatarFallback className="bg-light-themeprimarylight-blue text-light-themeprimaryblue">
    JD
  </AvatarFallback>
</Avatar>

// Fallback avatar with icon
<Avatar className="h-12 w-12">
  <AvatarFallback className="bg-actionsuccess-light text-actionsuccess">
    <User className="h-6 w-6" />
  </AvatarFallback>
</Avatar>

// Square avatar
<Avatar className="h-12 w-12 rounded-md">
  <AvatarImage src="https://i.pravatar.cc/150?img=5" alt="Avatar" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
                    </code>
                  </pre>
                  
                  <h3 className="text-lg font-medium mt-6">Avatar with Status Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`// Avatar with online status indicator
<div className="relative">
  <Avatar className="h-12 w-12">
    <AvatarImage src="https://i.pravatar.cc/150?img=8" alt="Avatar" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-actionsuccess border-2 border-white"></span>
</div>

// Avatar with notification badge
<div className="relative">
  <Avatar className="h-12 w-12">
    <AvatarImage src="https://i.pravatar.cc/150?img=9" alt="Avatar" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-light-themeprimaryblue text-white flex items-center justify-center text-xs font-medium border-2 border-white">
    3
  </div>
</div>

// Avatar with border
<Avatar className="h-12 w-12 ring-2 ring-light-themeprimaryblue ring-offset-2">
  <AvatarImage src="https://i.pravatar.cc/150?img=10" alt="Avatar" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
                    </code>
                  </pre>
                  
                  <h3 className="text-lg font-medium mt-6">Avatar Group Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`// Stack overlapping avatars
<div className="flex -space-x-4">
  <Avatar className="h-10 w-10 border-2 border-white">
    <AvatarImage src="https://i.pravatar.cc/150?img=11" alt="Avatar" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar className="h-10 w-10 border-2 border-white">
    <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="Avatar" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar className="h-10 w-10 border-2 border-white">
    <AvatarImage src="https://i.pravatar.cc/150?img=13" alt="Avatar" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar className="h-10 w-10 border-2 border-white">
    <AvatarFallback className="bg-light-themeprimarylight-blue text-light-themeprimaryblue">
      +5
    </AvatarFallback>
  </Avatar>
</div>

// Avatar group with add button
<div className="flex -space-x-4">
  <Avatar className="h-10 w-10 border-2 border-white">
    <AvatarImage src="https://i.pravatar.cc/150?img=14" alt="Avatar" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar className="h-10 w-10 border-2 border-white">
    <AvatarImage src="https://i.pravatar.cc/150?img=15" alt="Avatar" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar className="h-10 w-10 border-2 border-white flex items-center justify-center bg-light-themeprimarylight-blue text-light-themeprimaryblue cursor-pointer">
    <PlusCircle className="h-5 w-5" />
  </Avatar>
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
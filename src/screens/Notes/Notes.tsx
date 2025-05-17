import React from 'react';
import { TitlebarByAnima } from '../Buttons/components/Titlebar';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { 
  Plus, 
  Search, 
  Star, 
  Trash2, 
  Archive, 
  Folder,
  Tag,
  Clock,
  MoreVertical
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';

export function Notes() {
  return (
    <div className="flex flex-col overflow-hidden">
      <TitlebarByAnima title="Notes" />
      <main className="flex-1 overflow-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1 max-w-md mr-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-blackblack-60" />
              <Input 
                placeholder="Search notes..." 
                className="pl-10"
              />
            </div>
          </div>
          <Button className="bg-light-themeprimaryblue hover:bg-light-themeprimaryblue/90">
            <Plus className="mr-2 h-4 w-4" />
            New Note
          </Button>
        </div>

        <div className="grid grid-cols-12 gap-6">
        {/* Left Sidebar - Folders and Tags */}
        <div className="col-span-12 md:col-span-3 space-y-4">
          <Card className="rounded-xl shadow-light-theme-shadow-medium">
            <CardContent className="p-4">
              <div className="mb-4">
                <Input placeholder="Search notes..." />
              </div>
              
              <div className="space-y-1 mb-6">
                <div className="flex items-center justify-between px-2 py-1.5 text-light-themeprimaryblue font-medium rounded bg-light-themeprimarylight-blue">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="m3 17 2 2 4-4"></path>
                      <path d="m3 7 2 2 4-4"></path>
                      <path d="M13 6h8"></path>
                      <path d="M13 12h8"></path>
                      <path d="M13 18h8"></path>
                    </svg>
                    All Notes
                  </div>
                  <span className="text-xs bg-light-themeprimarylight-blue text-light-themeprimaryblue px-2 py-0.5 rounded-full">24</span>
                </div>
                
                <div className="flex items-center justify-between px-2 py-1.5 hover:bg-surfaceslightgray-10 rounded cursor-pointer">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-actionalert">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    Recent
                  </div>
                  <span className="text-xs bg-surfaceslightgray-10 text-blackblack-60 px-2 py-0.5 rounded-full">8</span>
                </div>
                
                <div className="flex items-center justify-between px-2 py-1.5 hover:bg-surfaceslightgray-10 rounded cursor-pointer">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-actionwarning">
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    Shared with me
                  </div>
                  <span className="text-xs bg-surfaceslightgray-10 text-blackblack-60 px-2 py-0.5 rounded-full">3</span>
                </div>
                
                <div className="flex items-center justify-between px-2 py-1.5 hover:bg-surfaceslightgray-10 rounded cursor-pointer">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-light-themesecondarypurple">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    Favorites
                  </div>
                  <span className="text-xs bg-surfaceslightgray-10 text-blackblack-60 px-2 py-0.5 rounded-full">5</span>
                </div>
                
                <div className="flex items-center justify-between px-2 py-1.5 hover:bg-surfaceslightgray-10 rounded cursor-pointer">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-actionwarning">
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                    Trash
                  </div>
                  <span className="text-xs bg-surfaceslightgray-10 text-blackblack-60 px-2 py-0.5 rounded-full">2</span>
                </div>
              </div>
              
              <div className="mb-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-blackblack-60 text-sm uppercase">Folders</h3>
                  <button className="text-xs text-light-themeprimaryblue hover:text-blue-700">+ New</button>
                </div>
              </div>
              
              <div className="space-y-1 mb-6">
                <div className="flex items-center justify-between px-2 py-1.5 hover:bg-surfaceslightgray-10 rounded cursor-pointer">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-actionalert">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Work
                  </div>
                  <span className="text-xs bg-surfaceslightgray-10 text-blackblack-60 px-2 py-0.5 rounded-full">7</span>
                </div>
                
                <div className="flex items-center justify-between px-2 py-1.5 hover:bg-surfaceslightgray-10 rounded cursor-pointer">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Personal
                  </div>
                  <span className="text-xs bg-surfaceslightgray-10 text-blackblack-60 px-2 py-0.5 rounded-full">12</span>
                </div>
                
                <div className="flex items-center justify-between px-2 py-1.5 hover:bg-surfaceslightgray-10 rounded cursor-pointer">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-light-themesecondarypurple">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Ideas
                  </div>
                  <span className="text-xs bg-surfaceslightgray-10 text-blackblack-60 px-2 py-0.5 rounded-full">5</span>
                </div>
              </div>
              
              <div className="mb-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-blackblack-60 text-sm uppercase">Tags</h3>
                  <button className="text-xs text-light-themeprimaryblue hover:text-blue-700">+ New</button>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center px-2 py-1.5 hover:bg-surfaceslightgray-10 rounded cursor-pointer">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <span>Important</span>
                </div>
                
                <div className="flex items-center px-2 py-1.5 hover:bg-surfaceslightgray-10 rounded cursor-pointer">
                  <div className="w-3 h-3 rounded-full bg-light-themeprimaryblue mr-2"></div>
                  <span>Work</span>
                </div>
                
                <div className="flex items-center px-2 py-1.5 hover:bg-surfaceslightgray-10 rounded cursor-pointer">
                  <div className="w-3 h-3 rounded-full bg-actionsuccess mr-2"></div>
                  <span>To Do</span>
                </div>
                
                <div className="flex items-center px-2 py-1.5 hover:bg-surfaceslightgray-10 rounded cursor-pointer">
                  <div className="w-3 h-3 rounded-full bg-actionalert mr-2"></div>
                  <span>Ideas</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Notes List */}
        <div className="col-span-12 md:col-span-9 space-y-4">
          <Card className="rounded-xl shadow-light-theme-shadow-medium">
            <CardHeader className="px-4 py-3 border-b border-[#111c2d1a]">
              <div className="flex items-center justify-between">
                <CardTitle>All Notes (24)</CardTitle>
                <div className="flex space-x-2">
                  <Select defaultValue="date">
                    <SelectTrigger className="w-[140px] h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date">Sort by: Date</SelectItem>
                      <SelectItem value="title">Sort by: Title</SelectItem>
                      <SelectItem value="modified">Sort by: Modified</SelectItem>
                    </SelectContent>
                  </Select>
                  <button className="p-1 hover:bg-surfaceslightgray-10 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-surfaceslightgray-10 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="8" y1="6" x2="21" y2="6"></line>
                      <line x1="8" y1="12" x2="21" y2="12"></line>
                      <line x1="8" y1="18" x2="21" y2="18"></line>
                      <line x1="3" y1="6" x2="3.01" y2="6"></line>
                      <line x1="3" y1="12" x2="3.01" y2="12"></line>
                      <line x1="3" y1="18" x2="3.01" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              <div className="divide-y">
                {/* Note Item 1 */}
                <div className="p-4 hover:bg-surfaceslightgray-10 cursor-pointer transition-colors">
                  <div className="flex justify-between mb-1">
                    <h3 className="font-medium">Project Kickoff Meeting Notes</h3>
                    <div className="flex items-center text-blackblack-60 space-x-2">
                      <button className="hover:text-light-themeprimaryblue">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 6h18"></path>
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        </svg>
                      </button>
                      <button className="hover:text-actionalert">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-blackblack-80 line-clamp-2">Discussed project timeline, assigned tasks to team members. Need to follow up with design team about wireframes by Friday.</p>
                  <div className="flex items-center mt-2 text-xs text-blackblack-60 justify-between">
                    <div className="flex items-center space-x-2">
                      <span>May 10, 2025</span>
                      <div className="w-1 h-1 rounded-full bg-blackblack-20"></div>
                      <span>Work</span>
                    </div>
                    <div className="flex space-x-1">
                      <span className="px-2 py-0.5 bg-actionwarning-light text-actionwarning rounded-full">Important</span>
                      <span className="px-2 py-0.5 bg-light-themeprimarylight-blue text-light-themeprimaryblue rounded-full">Work</span>
                    </div>
                  </div>
                </div>
                
                {/* Note Item 2 */}
                <div className="p-4 hover:bg-surfaceslightgray-10 cursor-pointer transition-colors">
                  <div className="flex justify-between mb-1">
                    <h3 className="font-medium">Weekly Planning Template</h3>
                    <div className="flex items-center text-blackblack-60 space-x-2">
                      <button className="hover:text-light-themeprimaryblue">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 6h18"></path>
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        </svg>
                      </button>
                      <button className="text-actionalert">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-blackblack-80 line-clamp-2">Monday: Planning & Strategy, Tuesday: Development, Wednesday: Meetings, Thursday: Deep Work, Friday: Reviews & Documentation</p>
                  <div className="flex items-center mt-2 text-xs text-blackblack-60 justify-between">
                    <div className="flex items-center space-x-2">
                      <span>May 8, 2025</span>
                      <div className="w-1 h-1 rounded-full bg-blackblack-20"></div>
                      <span>Personal</span>
                    </div>
                    <div className="flex space-x-1">
                      <span className="px-2 py-0.5 bg-actionsuccess-light text-actionsuccess rounded-full">To Do</span>
                    </div>
                  </div>
                </div>
                
                {/* Note Item 3 */}
                <div className="p-4 hover:bg-surfaceslightgray-10 cursor-pointer transition-colors">
                  <div className="flex justify-between mb-1">
                    <h3 className="font-medium">App Feature Ideas</h3>
                    <div className="flex items-center text-blackblack-60 space-x-2">
                      <button className="hover:text-light-themeprimaryblue">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 6h18"></path>
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        </svg>
                      </button>
                      <button className="hover:text-actionalert">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-blackblack-80 line-clamp-2">1. Dark mode toggle, 2. Offline sync functionality, 3. Collaborative editing, 4. Export to PDF/markdown, 5. Voice notes integration</p>
                  <div className="flex items-center mt-2 text-xs text-blackblack-60 justify-between">
                    <div className="flex items-center space-x-2">
                      <span>May 5, 2025</span>
                      <div className="w-1 h-1 rounded-full bg-blackblack-20"></div>
                      <span>Ideas</span>
                    </div>
                    <div className="flex space-x-1">
                      <span className="px-2 py-0.5 bg-actionalert-light text-actionalert rounded-full">Ideas</span>
                    </div>
                  </div>
                </div>
                
                {/* Note Item 4 */}
                <div className="p-4 hover:bg-surfaceslightgray-10 cursor-pointer transition-colors">
                  <div className="flex justify-between mb-1">
                    <h3 className="font-medium">Client Feedback Summary</h3>
                    <div className="flex items-center text-blackblack-60 space-x-2">
                      <button className="hover:text-light-themeprimaryblue">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 6h18"></path>
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        </svg>
                      </button>
                      <button className="hover:text-actionalert">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-blackblack-80 line-clamp-2">Overall positive feedback on the new dashboard design. Main points: 1. Navigation is more intuitive, 2. Data visualization is clearer, 3. Need to fix mobile responsiveness issues.</p>
                  <div className="flex items-center mt-2 text-xs text-blackblack-60 justify-between">
                    <div className="flex items-center space-x-2">
                      <span>May 3, 2025</span>
                      <div className="w-1 h-1 rounded-full bg-blackblack-20"></div>
                      <span>Work</span>
                    </div>
                    <div className="flex space-x-1">
                      <span className="px-2 py-0.5 bg-light-themeprimarylight-blue text-light-themeprimaryblue rounded-full">Work</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      </main>
    </div>
  );
}
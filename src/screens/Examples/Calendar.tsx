import React, { useState } from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "../Buttons/components/Titlebar";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { 
  Calendar as CalendarIcon, ChevronLeft, ChevronRight, MoreHorizontal, 
  Plus, Clock, MapPin, Users, AlertCircle, CheckCircle, X, Search,
  Filter, Download
} from "lucide-react";
import { format, addDays, startOfWeek, endOfWeek, addWeeks, subWeeks, eachDayOfInterval, isSameDay, isSameMonth, startOfMonth, endOfMonth, getDay } from 'date-fns';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger, 
  SelectValue,
} from "../../components/ui/select";
import { useToast } from "../../hooks/use-toast";

// Define event type
interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  start: Date;
  end: Date;
  type: "meeting" | "task" | "reminder" | "event";
  location?: string;
  attendees?: string[];
  status: "confirmed" | "tentative" | "cancelled";
}

// Mock events data
const mockEvents: CalendarEvent[] = [
  {
    id: "evt-1",
    title: "Team Meeting",
    description: "Weekly team sync to discuss project progress and blockers",
    start: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 10, 0),
    end: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 11, 30),
    type: "meeting",
    location: "Conference Room A",
    attendees: ["John Doe", "Jane Smith", "Robert Johnson", "Emily Davis"],
    status: "confirmed"
  },
  {
    id: "evt-2",
    title: "Design Review",
    description: "Review the latest design mockups with the product team",
    start: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1, 14, 0),
    end: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1, 15, 0),
    type: "meeting",
    location: "Zoom Call",
    attendees: ["John Doe", "Sarah Wilson", "Michael Brown"],
    status: "confirmed"
  },
  {
    id: "evt-3",
    title: "Submit Project Proposal",
    description: "Deadline for the Q2 project proposal submission",
    start: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 2, 9, 0),
    end: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 2, 9, 30),
    type: "task",
    status: "confirmed"
  },
  {
    id: "evt-4",
    title: "Client Presentation",
    description: "Present the final project deliverables to the client",
    start: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3, 15, 0),
    end: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3, 16, 30),
    type: "meeting",
    location: "Client's Office",
    attendees: ["John Doe", "Robert Johnson", "Client Team"],
    status: "tentative"
  },
  {
    id: "evt-5",
    title: "Team Lunch",
    description: "Monthly team lunch to celebrate our achievements",
    start: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 5, 12, 0),
    end: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 5, 13, 30),
    type: "event",
    location: "Bistro Restaurant",
    attendees: ["All Team Members"],
    status: "confirmed"
  },
  {
    id: "evt-6",
    title: "Performance Review",
    description: "Quarterly performance review with manager",
    start: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1, 11, 0),
    end: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1, 12, 0),
    type: "meeting",
    location: "Manager's Office",
    attendees: ["John Doe", "Sarah Wilson"],
    status: "confirmed"
  },
  {
    id: "evt-7",
    title: "Deadline: UI Components",
    description: "Complete the UI component library",
    start: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 4, 17, 0),
    end: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 4, 17, 30),
    type: "task",
    status: "confirmed"
  },
];

// Define view types
type CalendarView = "month" | "week" | "day";

export const Calendar = (): JSX.Element => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<CalendarView>("week");
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [isEventDetailsOpen, setIsEventDetailsOpen] = useState(false);
  const [events, setEvents] = useState<CalendarEvent[]>(mockEvents);
  const [isNewEventOpen, setIsNewEventOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredType, setFilteredType] = useState<string | null>(null);
  
  const { toast } = useToast();
  
  // Get events for a specific date
  const getEventsForDate = (date: Date) => {
    return events.filter(event => 
      isSameDay(event.start, date) || 
      (date >= event.start && date <= event.end)
    );
  };
  
  // Get filtered events
  const getFilteredEvents = () => {
    return events.filter(event => {
      // Filter by search term
      const matchesSearch = searchTerm === "" || 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (event.description && event.description.toLowerCase().includes(searchTerm.toLowerCase()));
      
      // Filter by event type
      const matchesType = filteredType === null || event.type === filteredType;
      
      return matchesSearch && matchesType;
    });
  };
  
  // Handle view a specific event
  const handleViewEvent = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setIsEventDetailsOpen(true);
  };
  
  // Handle date navigation
  const handlePrevious = () => {
    if (view === "month") {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    } else if (view === "week") {
      setCurrentDate(subWeeks(currentDate, 1));
    } else {
      setCurrentDate(addDays(currentDate, -1));
    }
  };
  
  const handleNext = () => {
    if (view === "month") {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    } else if (view === "week") {
      setCurrentDate(addWeeks(currentDate, 1));
    } else {
      setCurrentDate(addDays(currentDate, 1));
    }
  };
  
  const handleToday = () => {
    setCurrentDate(new Date());
  };
  
  // Handle create new event
  const handleCreateEvent = () => {
    // This is a mock implementation that would normally save the event to a database
    toast({
      title: "Event Created",
      description: "Your new event has been successfully added to the calendar.",
    });
    setIsNewEventOpen(false);
  };
  
  // Generate days for month view
  const generateMonthDays = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    
    const days = eachDayOfInterval({ start: startDate, end: endDate });
    
    return days;
  };
  
  // Generate days for week view
  const generateWeekDays = () => {
    const weekStart = startOfWeek(currentDate);
    const weekEnd = endOfWeek(currentDate);
    
    return eachDayOfInterval({ start: weekStart, end: weekEnd });
  };
  
  // Generate hours for day view
  const generateDayHours = () => {
    const hours = [];
    for (let i = 8; i < 20; i++) {
      hours.push(i);
    }
    return hours;
  };
  
  // Format display date based on view
  const getDisplayDate = () => {
    if (view === "month") {
      return format(currentDate, 'MMMM yyyy');
    } else if (view === "week") {
      const weekStart = startOfWeek(currentDate);
      const weekEnd = endOfWeek(currentDate);
      return `${format(weekStart, 'MMM d')} - ${format(weekEnd, 'MMM d, yyyy')}`;
    } else {
      return format(currentDate, 'EEEE, MMMM d, yyyy');
    }
  };
  
  // Get color for event type
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "meeting":
        return "bg-light-themeprimarylight-blue text-light-themeprimaryblue border-light-themeprimaryblue";
      case "task":
        return "bg-actionsuccess-light text-actionsuccess border-actionsuccess";
      case "reminder":
        return "bg-actionalert-light text-actionalert border-actionalert";
      case "event":
        return "bg-light-themesecondarylight-purple text-light-themesecondarypurple border-light-themesecondarypurple";
      default:
        return "bg-surfaceslightgray-10 text-blackblack-60 border-blackblack-20";
    }
  };
  
  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Calendar" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-start justify-between">
              <div className="flex-1 w-full">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-blackblack-60" />
                  <Input
                    placeholder="Search events..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                <Select value={filteredType || ""} onValueChange={(value) => setFilteredType(value === "" ? null : value)}>
                  <SelectTrigger className="w-[150px]">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Types</SelectItem>
                    <SelectItem value="meeting">Meetings</SelectItem>
                    <SelectItem value="task">Tasks</SelectItem>
                    <SelectItem value="reminder">Reminders</SelectItem>
                    <SelectItem value="event">Events</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={view} onValueChange={(value: CalendarView) => setView(value)}>
                  <SelectTrigger className="w-[120px]">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="month">Month</SelectItem>
                    <SelectItem value="week">Week</SelectItem>
                    <SelectItem value="day">Day</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="flex">
                  <Button variant="outline" size="icon" onClick={handlePrevious} className="rounded-r-none">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" onClick={handleToday} className="rounded-none px-2 border-l-0 border-r-0">
                    Today
                  </Button>
                  <Button variant="outline" size="icon" onClick={handleNext} className="rounded-l-none">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button onClick={() => setIsNewEventOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  New Event
                </Button>
              </div>
            </div>
            
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100 flex justify-between items-center">
                  <span>{getDisplayDate()}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {view === "month" && (
                  <div className="grid grid-cols-7 bg-white">
                    {/* Days of week header */}
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
                      <div key={i} className="text-blackblack-60 text-sm text-center py-3 border-b border-[#111c2d1a]">
                        {day}
                      </div>
                    ))}
                    
                    {/* Calendar days */}
                    {generateMonthDays().map((day, i) => {
                      const dayEvents = getEventsForDate(day);
                      const isToday = isSameDay(day, new Date());
                      const isCurrentMonth = isSameMonth(day, currentDate);
                      
                      return (
                        <div 
                          key={i}
                          className={`min-h-[120px] p-1 border-b border-r border-[#111c2d1a] ${
                            !isCurrentMonth ? 'bg-surfaceslightgray-10 text-blackblack-40' : ''
                          } ${isToday ? 'bg-light-themeprimarylight-blue/20' : ''}`}
                        >
                          <div className="flex justify-between items-center p-1">
                            <span className={`text-sm ${isToday ? 'font-bold text-light-themeprimaryblue' : ''}`}>
                              {format(day, "d")}
                            </span>
                            {dayEvents.length > 0 && (
                              <Badge className="h-5 w-5 p-0 flex items-center justify-center rounded-full text-xs">
                                {dayEvents.length}
                              </Badge>
                            )}
                          </div>
                          <div className="space-y-1 mt-1">
                            {dayEvents.slice(0, 3).map((event, index) => (
                              <div 
                                key={index}
                                className={`p-1 text-xs rounded cursor-pointer ${getEventTypeColor(event.type)} border-l-2`}
                                onClick={() => handleViewEvent(event)}
                              >
                                {format(event.start, "h:mm a")} - {event.title}
                              </div>
                            ))}
                            {dayEvents.length > 3 && (
                              <div className="text-xs text-blackblack-60 pl-1">
                                + {dayEvents.length - 3} more
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                
                {view === "week" && (
                  <div className="flex flex-col h-[600px]">
                    {/* Time headers */}
                    <div className="flex border-b border-[#111c2d1a]">
                      <div className="w-16 shrink-0"></div>
                      {generateWeekDays().map((day, i) => {
                        const isToday = isSameDay(day, new Date());
                        return (
                          <div key={i} className={`flex-1 text-center py-3 ${isToday ? 'bg-light-themeprimarylight-blue/20' : ''}`}>
                            <div className={`text-sm ${isToday ? 'font-bold text-light-themeprimaryblue' : ''}`}>
                              {format(day, "EEE")}
                            </div>
                            <div className={`text-lg ${isToday ? 'font-bold text-light-themeprimaryblue' : ''}`}>
                              {format(day, "d")}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Hours grid */}
                    <div className="flex flex-1 overflow-y-auto">
                      {/* Time labels */}
                      <div className="w-16 shrink-0 border-r border-[#111c2d1a]">
                        {generateDayHours().map((hour) => (
                          <div key={hour} className="h-16 text-xs text-blackblack-60 text-right pr-2 relative">
                            <span className="absolute top-[-0.5em] right-2">
                              {hour === 0 ? "12 AM" : hour < 12 ? `${hour} AM` : hour === 12 ? "12 PM" : `${hour - 12} PM`}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Week days columns */}
                      {generateWeekDays().map((day, dayIndex) => {
                        const dayEvents = getEventsForDate(day);
                        const isToday = isSameDay(day, new Date());
                        
                        return (
                          <div 
                            key={dayIndex} 
                            className={`flex-1 border-r border-[#111c2d1a] relative ${isToday ? 'bg-light-themeprimarylight-blue/10' : ''}`}
                          >
                            {generateDayHours().map((hour, hourIndex) => (
                              <div 
                                key={hourIndex} 
                                className="h-16 border-b border-[#111c2d1a] last:border-b-0"
                              ></div>
                            ))}
                            
                            {/* Events */}
                            {dayEvents.map((event, eventIndex) => {
                              const startHour = event.start.getHours() + (event.start.getMinutes() / 60);
                              const endHour = event.end.getHours() + (event.end.getMinutes() / 60);
                              const durationHours = endHour - startHour;
                              const top = (startHour - 8) * 64; // 8am is the start hour, each hour is 64px (16px * 4)
                              const height = durationHours * 64;
                              
                              return (
                                <div
                                  key={eventIndex}
                                  className={`absolute left-0 right-0 mx-1 p-2 rounded text-xs overflow-hidden cursor-pointer border-l-2 ${getEventTypeColor(event.type)}`}
                                  style={{ 
                                    top: `${top}px`, 
                                    height: `${height}px`,
                                    zIndex: 10
                                  }}
                                  onClick={() => handleViewEvent(event)}
                                >
                                  <div className="font-medium truncate">{event.title}</div>
                                  <div className="truncate">
                                    {format(event.start, "h:mm a")} - {format(event.end, "h:mm a")}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                
                {view === "day" && (
                  <div className="flex flex-col h-[600px]">
                    {/* Day header */}
                    <div className="flex border-b border-[#111c2d1a] p-3 justify-center">
                      <div className="text-lg font-medium text-blackblack-100">
                        {format(currentDate, "EEEE, MMMM d")}
                      </div>
                    </div>
                    
                    {/* Hours grid */}
                    <div className="flex flex-1 overflow-y-auto">
                      {/* Time labels */}
                      <div className="w-16 shrink-0 border-r border-[#111c2d1a]">
                        {generateDayHours().map((hour) => (
                          <div key={hour} className="h-16 text-xs text-blackblack-60 text-right pr-2 relative">
                            <span className="absolute top-[-0.5em] right-2">
                              {hour === 0 ? "12 AM" : hour < 12 ? `${hour} AM` : hour === 12 ? "12 PM" : `${hour - 12} PM`}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Day column */}
                      <div className="flex-1 relative">
                        {generateDayHours().map((hour, hourIndex) => (
                          <div 
                            key={hourIndex} 
                            className="h-16 border-b border-[#111c2d1a] last:border-b-0"
                          ></div>
                        ))}
                        
                        {/* Events */}
                        {getEventsForDate(currentDate).map((event, eventIndex) => {
                          const startHour = event.start.getHours() + (event.start.getMinutes() / 60);
                          const endHour = event.end.getHours() + (event.end.getMinutes() / 60);
                          const durationHours = endHour - startHour;
                          const top = (startHour - 8) * 64; // 8am is the start hour, each hour is 64px
                          const height = durationHours * 64;
                          
                          return (
                            <div
                              key={eventIndex}
                              className={`absolute left-0 right-0 mx-4 p-2 rounded text-sm overflow-hidden cursor-pointer border-l-2 ${getEventTypeColor(event.type)}`}
                              style={{ 
                                top: `${top}px`, 
                                height: `${height}px`,
                                zIndex: 10
                              }}
                              onClick={() => handleViewEvent(event)}
                            >
                              <div className="font-medium">{event.title}</div>
                              <div className="text-xs flex items-center mt-1">
                                <Clock className="h-3 w-3 mr-1" />
                                {format(event.start, "h:mm a")} - {format(event.end, "h:mm a")}
                              </div>
                              {event.location && (
                                <div className="text-xs flex items-center mt-1">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {event.location}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            
            {/* Upcoming Events */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="rounded-xl shadow-light-theme-shadow-medium lg:col-span-2">
                <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                  <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100 flex justify-between items-center">
                    <span>Upcoming Events</span>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Download className="h-4 w-4" /> Export
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full">
                    <thead className="bg-surfaceslightgray-10">
                      <tr className="text-left">
                        <th className="py-3 px-6 text-sm font-medium text-blackblack-60">Event</th>
                        <th className="py-3 px-6 text-sm font-medium text-blackblack-60">Date & Time</th>
                        <th className="py-3 px-6 text-sm font-medium text-blackblack-60">Type</th>
                        <th className="py-3 px-6 text-sm font-medium text-blackblack-60">Status</th>
                        <th className="py-3 px-6 text-sm font-medium text-blackblack-60"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {getFilteredEvents().slice(0, 5).map((event, index) => (
                        <tr key={index} className="border-t border-[#111c2d1a]">
                          <td className="py-3 px-6">
                            <div>
                              <div className="font-medium text-blackblack-100">{event.title}</div>
                              <div className="text-xs text-blackblack-60 mt-1">{event.description?.substring(0, 50)}{event.description && event.description.length > 50 ? '...' : ''}</div>
                            </div>
                          </td>
                          <td className="py-3 px-6">
                            <div className="text-sm text-blackblack-80">{format(event.start, "MMM d, yyyy")}</div>
                            <div className="text-xs text-blackblack-60">{format(event.start, "h:mm a")} - {format(event.end, "h:mm a")}</div>
                          </td>
                          <td className="py-3 px-6">
                            <Badge className={`${getEventTypeColor(event.type)}`}>
                              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                            </Badge>
                          </td>
                          <td className="py-3 px-6">
                            <Badge className={`
                              ${event.status === 'confirmed' ? 'bg-actionsuccess-light text-actionsuccess' : 
                                event.status === 'tentative' ? 'bg-actionalert-light text-actionalert' : 
                                'bg-actionwarning-light text-actionwarning'}
                            `}>
                              {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                            </Badge>
                          </td>
                          <td className="py-3 px-6 text-right">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-light-themeprimaryblue"
                              onClick={() => handleViewEvent(event)}
                            >
                              View
                            </Button>
                          </td>
                        </tr>
                      ))}
                      {getFilteredEvents().length === 0 && (
                        <tr>
                          <td colSpan={5} className="py-8 text-center text-blackblack-60">
                            No events found matching your criteria.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card className="rounded-xl shadow-light-theme-shadow-medium">
                  <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                    <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                      Today's Schedule
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {getEventsForDate(new Date()).length > 0 ? (
                        getEventsForDate(new Date()).map((event, index) => (
                          <div key={index} className={`p-3 rounded border-l-2 ${getEventTypeColor(event.type)}`}>
                            <div className="font-medium">{event.title}</div>
                            <div className="text-xs text-blackblack-60 flex items-center mt-1">
                              <Clock className="h-3 w-3 mr-1" />
                              {format(event.start, "h:mm a")} - {format(event.end, "h:mm a")}
                            </div>
                            {event.location && (
                              <div className="text-xs text-blackblack-60 flex items-center mt-1">
                                <MapPin className="h-3 w-3 mr-1" />
                                {event.location}
                              </div>
                            )}
                            {event.attendees && (
                              <div className="text-xs text-blackblack-60 flex items-center mt-1">
                                <Users className="h-3 w-3 mr-1" />
                                {event.attendees.length} attendees
                              </div>
                            )}
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="mt-2 text-light-themeprimaryblue p-0 h-auto"
                              onClick={() => handleViewEvent(event)}
                            >
                              View Details
                            </Button>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-8 text-blackblack-60">
                          <CalendarIcon className="h-12 w-12 mx-auto text-blackblack-40 mb-2" />
                          <p>No events scheduled for today</p>
                          <Button 
                            variant="outline" 
                            className="mt-3"
                            onClick={() => setIsNewEventOpen(true)}
                          >
                            <Plus className="h-4 w-4 mr-1" /> Add Event
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="rounded-xl shadow-light-theme-shadow-medium">
                  <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                    <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                      Event Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-light-themeprimaryblue mr-2"></div>
                          <span className="text-blackblack-80">Meetings</span>
                        </div>
                        <span className="font-medium">{events.filter(e => e.type === "meeting").length}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-actionsuccess mr-2"></div>
                          <span className="text-blackblack-80">Tasks</span>
                        </div>
                        <span className="font-medium">{events.filter(e => e.type === "task").length}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-actionalert mr-2"></div>
                          <span className="text-blackblack-80">Reminders</span>
                        </div>
                        <span className="font-medium">{events.filter(e => e.type === "reminder").length}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-light-themesecondarypurple mr-2"></div>
                          <span className="text-blackblack-80">Events</span>
                        </div>
                        <span className="font-medium">{events.filter(e => e.type === "event").length}</span>
                      </div>
                    </div>
                    
                    <div className="h-[1px] bg-[#111c2d1a] my-4"></div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-actionsuccess mr-2" />
                          <span className="text-blackblack-80">Confirmed</span>
                        </div>
                        <span className="font-medium">{events.filter(e => e.status === "confirmed").length}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <AlertCircle className="h-4 w-4 text-actionalert mr-2" />
                          <span className="text-blackblack-80">Tentative</span>
                        </div>
                        <span className="font-medium">{events.filter(e => e.status === "tentative").length}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <X className="h-4 w-4 text-actionwarning mr-2" />
                          <span className="text-blackblack-80">Cancelled</span>
                        </div>
                        <span className="font-medium">{events.filter(e => e.status === "cancelled").length}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      {/* Event details dialog */}
      <Dialog open={isEventDetailsOpen} onOpenChange={setIsEventDetailsOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle className="text-xl">
              {selectedEvent?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedEvent && (
            <div className="space-y-4 mt-2">
              <div className="flex items-start gap-4">
                <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                  selectedEvent.type === "meeting" ? "bg-light-themeprimarylight-blue" :
                  selectedEvent.type === "task" ? "bg-actionsuccess-light" :
                  selectedEvent.type === "reminder" ? "bg-actionalert-light" : "bg-light-themesecondarylight-purple"
                }`}>
                  <CalendarIcon className={`h-6 w-6 ${
                    selectedEvent.type === "meeting" ? "text-light-themeprimaryblue" :
                    selectedEvent.type === "task" ? "text-actionsuccess" :
                    selectedEvent.type === "reminder" ? "text-actionalert" : "text-light-themesecondarypurple"
                  }`} />
                </div>
                
                <div className="flex-1">
                  <Badge className={`mb-3 ${getEventTypeColor(selectedEvent.type)}`}>
                    {selectedEvent.type.charAt(0).toUpperCase() + selectedEvent.type.slice(1)}
                  </Badge>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-blackblack-80">
                      <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>
                        {format(selectedEvent.start, "EEEE, MMMM d, yyyy")} • {" "}
                        {format(selectedEvent.start, "h:mm a")} - {format(selectedEvent.end, "h:mm a")}
                      </span>
                    </div>
                    
                    {selectedEvent.location && (
                      <div className="flex items-center text-blackblack-80">
                        <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{selectedEvent.location}</span>
                      </div>
                    )}
                    
                    {selectedEvent.attendees && selectedEvent.attendees.length > 0 && (
                      <div className="flex items-start text-blackblack-80">
                        <Users className="h-4 w-4 mr-2 flex-shrink-0 mt-1" />
                        <div>
                          <div className="mb-1">Attendees:</div>
                          <div className="flex flex-wrap gap-2">
                            {selectedEvent.attendees.map((attendee, index) => (
                              <Badge key={index} variant="outline" className="bg-white">
                                {attendee}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {selectedEvent.description && (
                      <div className="mt-4 pt-4 border-t border-[#111c2d1a]">
                        <h4 className="text-sm font-medium mb-2">Description</h4>
                        <p className="text-sm text-blackblack-80">{selectedEvent.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" onClick={() => setIsEventDetailsOpen(false)}>Close</Button>
                <Button>Edit Event</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      {/* New event dialog */}
      <Dialog open={isNewEventOpen} onOpenChange={setIsNewEventOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Create New Event</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 mt-2">
            <div className="space-y-2">
              <Label htmlFor="event-title">Event Title</Label>
              <Input id="event-title" placeholder="Enter event title" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="event-start-date">Start Date</Label>
                <Input id="event-start-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="event-start-time">Start Time</Label>
                <Input id="event-start-time" type="time" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="event-end-date">End Date</Label>
                <Input id="event-end-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="event-end-time">End Time</Label>
                <Input id="event-end-time" type="time" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="event-type">Event Type</Label>
              <Select defaultValue="meeting">
                <SelectTrigger id="event-type">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="meeting">Meeting</SelectItem>
                  <SelectItem value="task">Task</SelectItem>
                  <SelectItem value="reminder">Reminder</SelectItem>
                  <SelectItem value="event">Event</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="event-location">Location (Optional)</Label>
              <Input id="event-location" placeholder="Enter location" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="event-description">Description (Optional)</Label>
              <textarea 
                id="event-description" 
                className="w-full min-h-[100px] rounded-md border border-[#111c2d1a] px-3 py-2 text-sm"
                placeholder="Add event description..."
              ></textarea>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsNewEventOpen(false)}>Cancel</Button>
            <Button onClick={handleCreateEvent}>Create Event</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
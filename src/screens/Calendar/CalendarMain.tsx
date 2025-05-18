import React, { useState } from "react";
import { TitlebarByAnima } from "../Chip/sections/TitlebarByAnima/TitlebarByAnima";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima/TopBarByAnima";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Badge } from "../../components/ui/badge";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, Clock, MapPin, Users } from "lucide-react";
import { cn } from "../../lib/utils";

interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  time: string;
  duration: string;
  type: "meeting" | "deadline" | "reminder" | "event";
  location?: string;
  attendees?: string[];
  color: string;
}

export const CalendarMain = (): JSX.Element => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<"month" | "week" | "day">("month");

  const events: CalendarEvent[] = [
    {
      id: "1",
      title: "Team Meeting",
      date: new Date(2025, 0, 20),
      time: "10:00 AM",
      duration: "1 hour",
      type: "meeting",
      location: "Conference Room A",
      attendees: ["John Doe", "Jane Smith", "Mike Wilson"],
      color: "bg-light-themeprimaryblue",
    },
    {
      id: "2",
      title: "Product Launch",
      date: new Date(2025, 0, 25),
      time: "2:00 PM",
      duration: "3 hours",
      type: "event",
      location: "Main Auditorium",
      color: "bg-light-themesecondarypurple",
    },
    {
      id: "3",
      title: "Order Deadline",
      date: new Date(2025, 0, 15),
      time: "11:59 PM",
      duration: "All day",
      type: "deadline",
      color: "bg-actionwarning",
    },
    {
      id: "4",
      title: "Client Call",
      date: new Date(2025, 0, 22),
      time: "3:00 PM",
      duration: "45 minutes",
      type: "meeting",
      attendees: ["Sarah Johnson", "Client Representatives"],
      color: "bg-actionsuccess",
    },
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add previous month's days
    const prevMonth = new Date(year, month, 0);
    const prevMonthDays = prevMonth.getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthDays - i),
        isCurrentMonth: false,
      });
    }

    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true,
      });
    }

    // Add next month's days
    const remainingDays = 42 - days.length; // 6 weeks * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
      });
    }

    return days;
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(event => 
      event.date.toDateString() === date.toDateString()
    );
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    if (direction === "prev") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  return (
    <div className="flex min-h-screen bg-surfaceslightgray-10">
      <SidebarByAnima />
      <div className="flex-1 relative">
        <TopBarByAnima />
        <TitlebarByAnima title="Calendar" />
        
        <div className="px-6 py-6">
          <Card className="rounded-xl shadow-light-theme-shadow-medium">
            <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => navigateMonth("prev")}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <h2 className="text-xl font-semibold text-blackblack-100">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h2>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => navigateMonth("next")}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex gap-3">
                  <Select value={view} onValueChange={(value: any) => setView(value)}>
                    <SelectTrigger className="w-[140px]">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="month">Month View</SelectItem>
                      <SelectItem value="week">Week View</SelectItem>
                      <SelectItem value="day">Day View</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="flex items-center gap-1">
                    <Plus className="h-4 w-4 mr-1" />
                    New Event
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {view === "month" && (
                <div className="grid grid-cols-7">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div
                      key={day}
                      className="py-3 px-4 text-center text-sm font-medium text-blackblack-60 border-b border-r border-[#111c2d1a] last:border-r-0"
                    >
                      {day}
                    </div>
                  ))}
                  {getDaysInMonth(currentDate).map((day, index) => {
                    const dayEvents = getEventsForDate(day.date);
                    return (
                      <div
                        key={index}
                        className={cn(
                          "min-h-[120px] p-2 border-b border-r border-[#111c2d1a]",
                          "last:border-r-0 [&:nth-child(7n)]:border-r-0",
                          index >= 35 ? "border-b-0" : "",
                          !day.isCurrentMonth && "bg-surfaceslightgray-10",
                          isToday(day.date) && "bg-light-themeprimarylight-blue/20"
                        )}
                      >
                        <div className={cn(
                          "text-sm mb-1",
                          day.isCurrentMonth ? "text-blackblack-100" : "text-blackblack-40",
                          isToday(day.date) && "font-semibold"
                        )}>
                          {day.date.getDate()}
                        </div>
                        <div className="space-y-1">
                          {dayEvents.slice(0, 3).map((event) => (
                            <div
                              key={event.id}
                              className={cn(
                                "text-xs px-2 py-1 rounded text-white truncate cursor-pointer",
                                event.color
                              )}
                              title={event.title}
                            >
                              {event.time} - {event.title}
                            </div>
                          ))}
                          {dayEvents.length > 3 && (
                            <div className="text-xs text-blackblack-60 px-2">
                              +{dayEvents.length - 3} more
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {view === "week" && (
                <div className="p-6 text-center">
                  <CalendarIcon className="h-12 w-12 text-blackblack-40 mx-auto mb-4" />
                  <p className="text-blackblack-60">Week view coming soon</p>
                </div>
              )}

              {view === "day" && (
                <div className="p-6 text-center">
                  <CalendarIcon className="h-12 w-12 text-blackblack-40 mx-auto mb-4" />
                  <p className="text-blackblack-60">Day view coming soon</p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium lg:col-span-2">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px]">
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {events.slice(0, 5).map((event) => (
                    <div key={event.id} className="flex gap-4 p-4 rounded-lg border border-[#111c2d1a] hover:bg-surfaceslightgray-10">
                      <div className={cn("w-1 rounded-full", event.color)} />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-blackblack-100">{event.title}</h4>
                            <div className="flex items-center gap-4 mt-1 text-sm text-blackblack-60">
                              <span className="flex items-center gap-1">
                                <CalendarIcon className="h-3 w-3" />
                                {event.date.toLocaleDateString()}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {event.time}
                              </span>
                              {event.location && (
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  {event.location}
                                </span>
                              )}
                            </div>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {event.type}
                          </Badge>
                        </div>
                        {event.attendees && (
                          <div className="flex items-center gap-1 mt-2">
                            <Users className="h-3 w-3 text-blackblack-60" />
                            <span className="text-xs text-blackblack-60">
                              {event.attendees.join(", ")}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px]">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Event
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    Schedule Meeting
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Clock className="h-4 w-4 mr-2" />
                    Set Reminder
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
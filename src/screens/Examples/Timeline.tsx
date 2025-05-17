import React from 'react';
import { SidebarByAnima } from '../Chip/sections/SidebarByAnima';
import { TopBarByAnima } from '../Chip/sections/TopBarByAnima';
import { TitlebarByAnima } from '../Buttons/components/Titlebar';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import {
  Calendar,
  FilePlus,
  FileCheck,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Clock,
  Link2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Input } from '../../components/ui/input';

// Define timeline event types
type TimelineEventType = 'task' | 'comment' | 'milestone' | 'file' | 'status';
type TimelineEventStatus = 'completed' | 'in-progress' | 'pending' | 'at-risk' | 'cancelled';

// Define timeline event interface
interface TimelineEvent {
  id: string;
  type: TimelineEventType;
  title: string;
  description?: string;
  date: Date;
  user: {
    name: string;
    avatar?: string;
  };
  status?: TimelineEventStatus;
  link?: string;
  attachments?: Array<{
    name: string;
    type: string;
    size: string;
  }>;
  comments?: number;
}

// Mock timeline data
const mockTimelineEvents: TimelineEvent[] = [
  {
    id: 'evt-1',
    type: 'milestone',
    title: 'Project Sprint 1 Completed',
    description: 'Successfully completed all Sprint 1 user stories and deliverables.',
    date: new Date(2025, 2, 15), // March 15, 2025
    user: {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    status: 'completed',
  },
  {
    id: 'evt-2',
    type: 'task',
    title: 'User Authentication Flow',
    description: 'Implemented user authentication with email verification',
    date: new Date(2025, 2, 12), // March 12, 2025
    user: {
      name: 'Jane Smith',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    status: 'completed',
    comments: 3,
  },
  {
    id: 'evt-3',
    type: 'comment',
    title: 'Feedback on Dashboard UI',
    description:
      "I've reviewed the dashboard design and I think we should improve the chart visualizations to make them more readable. The current color scheme is a bit confusing.",
    date: new Date(2025, 2, 10), // March 10, 2025
    user: {
      name: 'Michael Brown',
      avatar: 'https://i.pravatar.cc/150?img=8',
    },
    comments: 2,
  },
  {
    id: 'evt-4',
    type: 'file',
    title: 'Design Mockups Uploaded',
    description: 'Final design mockups for the mobile application',
    date: new Date(2025, 2, 5), // March 5, 2025
    user: {
      name: 'Emily Wilson',
      avatar: 'https://i.pravatar.cc/150?img=10',
    },
    attachments: [
      { name: 'Homepage-v2.fig', type: 'Figma', size: '2.4 MB' },
      { name: 'Mobile-Screens.pdf', type: 'PDF', size: '5.7 MB' },
    ],
  },
  {
    id: 'evt-5',
    type: 'status',
    title: 'Sprint Planning Meeting',
    description: 'Defined Sprint 2 goals and assigned user stories to team members',
    date: new Date(2025, 2, 3), // March 3, 2025
    user: {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    status: 'completed',
  },
  {
    id: 'evt-6',
    type: 'task',
    title: 'Database Schema Design',
    description: 'Finalized database schema for user management and content storage',
    date: new Date(2025, 1, 25), // February 25, 2025
    user: {
      name: 'David Lee',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    status: 'completed',
    link: 'https://example.com/db-schema',
    comments: 5,
  },
  {
    id: 'evt-7',
    type: 'milestone',
    title: 'Project Kickoff',
    description:
      'Official project kickoff with all stakeholders. Presented project goals, timeline, and milestones.',
    date: new Date(2025, 1, 15), // February 15, 2025
    user: {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    status: 'completed',
  },
  {
    id: 'evt-8',
    type: 'task',
    title: 'User Research and Analysis',
    description: 'Conducted user interviews and analyzed user needs',
    date: new Date(2025, 1, 10), // February 10, 2025
    user: {
      name: 'Sarah Johnson',
      avatar: 'https://i.pravatar.cc/150?img=20',
    },
    status: 'completed',
    attachments: [{ name: 'User-Research-Report.pdf', type: 'PDF', size: '3.2 MB' }],
    comments: 2,
  },
];

// More recent timeline events for the current sprint
const currentSprintEvents: TimelineEvent[] = [
  {
    id: 'evt-9',
    type: 'task',
    title: 'Implement Data Visualization Components',
    description: 'Create reusable chart components for the analytics dashboard',
    date: new Date(), // Today
    user: {
      name: 'Jane Smith',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    status: 'in-progress',
    comments: 1,
  },
  {
    id: 'evt-10',
    type: 'comment',
    title: 'API Integration Question',
    description:
      'For the authentication endpoints, should we use JWT or session-based authentication? I think JWT would be better for our mobile apps.',
    date: new Date(new Date().setDate(new Date().getDate() - 1)), // Yesterday
    user: {
      name: 'David Lee',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    comments: 4,
  },
  {
    id: 'evt-11',
    type: 'file',
    title: 'Updated Wireframes',
    description: 'Revised wireframes based on client feedback',
    date: new Date(new Date().setDate(new Date().getDate() - 2)), // 2 days ago
    user: {
      name: 'Emily Wilson',
      avatar: 'https://i.pravatar.cc/150?img=10',
    },
    attachments: [{ name: 'Wireframes-v2.fig', type: 'Figma', size: '1.8 MB' }],
  },
  {
    id: 'evt-12',
    type: 'status',
    title: 'Sprint 2 Started',
    description: 'Initiated Sprint 2 with focus on API development and front-end integration',
    date: new Date(new Date().setDate(new Date().getDate() - 3)), // 3 days ago
    user: {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    status: 'in-progress',
  },
];

// Combine all events
const allTimelineEvents = [...currentSprintEvents, ...mockTimelineEvents];

export const Timeline = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [typeFilter, setTypeFilter] = React.useState<string | null>(null);
  const [showPastEvents, setShowPastEvents] = React.useState(true);
  const [filteredEvents, setFilteredEvents] = React.useState(allTimelineEvents);

  // Filter timeline events based on search and filters
  React.useEffect(() => {
    let events = allTimelineEvents;

    // Filter by search term
    if (searchTerm) {
      events = events.filter(
        event =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by event type
    if (typeFilter) {
      events = events.filter(event => event.type === typeFilter);
    }

    // Filter past events
    if (!showPastEvents) {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      events = events.filter(event => event.date >= today);
    }

    setFilteredEvents(events);
  }, [searchTerm, typeFilter, showPastEvents]);

  // Get icon for event type
  const getEventIcon = (type: TimelineEventType) => {
    switch (type) {
      case 'task':
        return <FileCheck className="h-5 w-5 text-light-themeprimaryblue" />;
      case 'comment':
        return <MessageSquare className="h-5 w-5 text-light-themesecondarypurple" />;
      case 'milestone':
        return <CheckCircle2 className="h-5 w-5 text-actionsuccess" />;
      case 'file':
        return <FilePlus className="h-5 w-5 text-actionalert" />;
      case 'status':
        return <AlertCircle className="h-5 w-5 text-actionwarning" />;
      default:
        return <Calendar className="h-5 w-5 text-blackblack-60" />;
    }
  };

  // Format relative time
  const formatRelativeTime = (date: Date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) {
      return 'Just now';
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} ${diffInMinutes === 1 ? 'minute' : 'minutes'} ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'} ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
      return `${diffInDays} ${diffInDays === 1 ? 'day' : 'days'} ago`;
    }

    if (diffInDays < 30) {
      const diffInWeeks = Math.floor(diffInDays / 7);
      return `${diffInWeeks} ${diffInWeeks === 1 ? 'week' : 'weeks'} ago`;
    }

    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Project Timeline" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="w-full md:w-auto flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
                  <Input
                    placeholder="Search timeline events..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                <Select
                  value={typeFilter || ''}
                  onValueChange={val => setTypeFilter(val === '' ? null : val)}
                >
                  <SelectTrigger className="w-[180px]">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="All event types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All event types</SelectItem>
                    <SelectItem value="task">Tasks</SelectItem>
                    <SelectItem value="comment">Comments</SelectItem>
                    <SelectItem value="milestone">Milestones</SelectItem>
                    <SelectItem value="file">Files</SelectItem>
                    <SelectItem value="status">Status Updates</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => setShowPastEvents(!showPastEvents)}
                >
                  {showPastEvents ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      <span>Hide Past Events</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      <span>Show Past Events</span>
                    </>
                  )}
                </Button>

                <Button className="flex items-center gap-2">
                  <FilePlus className="h-4 w-4" />
                  <span>Add Event</span>
                </Button>
              </div>
            </div>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100 flex justify-between items-center">
                  <span>Project Timeline</span>
                  <Badge className="bg-light-themeprimarylight-blue text-light-themeprimaryblue">
                    Sprint 2 in progress
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {filteredEvents.length > 0 ? (
                  <div className="relative pl-8 space-y-8 before:absolute before:left-[15px] before:top-1 before:h-full before:w-[2px] before:bg-[#111c2d1a]">
                    {filteredEvents.map((event, index) => {
                      const isToday =
                        new Date(event.date).toDateString() === new Date().toDateString();
                      const isPast =
                        new Date(event.date) < new Date(new Date().setHours(0, 0, 0, 0));

                      return (
                        <div key={event.id} className="relative">
                          <div
                            className={`absolute left-[-31px] top-0 rounded-full p-1.5 ${
                              isToday
                                ? 'bg-actionsuccess text-white'
                                : isPast
                                  ? 'bg-white border-2 border-[#111c2d1a]'
                                  : 'bg-light-themeprimarylight-blue'
                            }`}
                          >
                            {getEventIcon(event.type)}
                          </div>

                          <div className="flex gap-4">
                            <div className="text-xs text-blackblack-60 w-24 pt-1.5 flex-shrink-0">
                              {formatRelativeTime(event.date)}
                            </div>

                            <Card className="flex-1 overflow-hidden">
                              <CardHeader className="p-4 pb-3">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <Badge
                                      className={`mb-2 ${
                                        event.type === 'task'
                                          ? 'bg-light-themeprimarylight-blue text-light-themeprimaryblue'
                                          : event.type === 'comment'
                                            ? 'bg-light-themesecondarylight-purple text-light-themesecondarypurple'
                                            : event.type === 'milestone'
                                              ? 'bg-actionsuccess-light text-actionsuccess'
                                              : event.type === 'file'
                                                ? 'bg-actionalert-light text-actionalert'
                                                : 'bg-actionwarning-light text-actionwarning'
                                      }`}
                                    >
                                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                                    </Badge>
                                    <CardTitle className="text-lg">{event.title}</CardTitle>
                                  </div>

                                  {event.status && (
                                    <Badge
                                      className={`ml-2 ${
                                        event.status === 'completed'
                                          ? 'bg-actionsuccess-light text-actionsuccess'
                                          : event.status === 'in-progress'
                                            ? 'bg-light-themeprimarylight-blue text-light-themeprimaryblue'
                                            : event.status === 'pending'
                                              ? 'bg-actionalert-light text-actionalert'
                                              : event.status === 'at-risk'
                                                ? 'bg-actionwarning-light text-actionwarning'
                                                : 'bg-blackblack-20 text-blackblack-60'
                                      }`}
                                    >
                                      {event.status.charAt(0).toUpperCase() +
                                        event.status.replace('-', ' ').slice(1)}
                                    </Badge>
                                  )}
                                </div>
                              </CardHeader>

                              <CardContent className="p-4 pt-0">
                                <div className="flex items-center gap-2 text-sm text-blackblack-60 mb-3">
                                  <Avatar className="h-6 w-6">
                                    {event.user.avatar ? (
                                      <AvatarImage src={event.user.avatar} alt={event.user.name} />
                                    ) : (
                                      <AvatarFallback>{event.user.name.charAt(0)}</AvatarFallback>
                                    )}
                                  </Avatar>
                                  <span>{event.user.name}</span>
                                  <span>•</span>
                                  <span className="flex items-center">
                                    <Clock className="h-3.5 w-3.5 mr-1" />
                                    {new Date(event.date).toLocaleTimeString('en-US', {
                                      hour: 'numeric',
                                      minute: 'numeric',
                                      hour12: true,
                                    })}
                                  </span>
                                </div>

                                {event.description && (
                                  <div className="text-blackblack-80 text-sm mb-3">
                                    {event.description}
                                  </div>
                                )}

                                {event.attachments && event.attachments.length > 0 && (
                                  <div className="mb-3">
                                    <h4 className="text-sm font-medium mb-2">Attachments</h4>
                                    <div className="space-y-2">
                                      {event.attachments.map((file, fileIndex) => (
                                        <div
                                          key={fileIndex}
                                          className="flex items-center justify-between p-2 bg-surfaceslightgray-10 rounded text-sm"
                                        >
                                          <div className="flex items-center">
                                            <FileCheck className="h-4 w-4 text-blackblack-60 mr-2" />
                                            <span className="text-blackblack-80">{file.name}</span>
                                            <span className="text-blackblack-60 ml-2">
                                              ({file.size})
                                            </span>
                                          </div>
                                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                            <Download className="h-4 w-4" />
                                          </Button>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {event.link && (
                                  <div className="mb-3 flex items-center text-sm">
                                    <Link2 className="h-3.5 w-3.5 mr-1 text-light-themeprimaryblue" />
                                    <a
                                      href={event.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-light-themeprimaryblue hover:underline flex items-center"
                                    >
                                      {event.link} <ExternalLink className="h-3 w-3 ml-1" />
                                    </a>
                                  </div>
                                )}

                                <div className="flex justify-end gap-2 mt-3 pt-3 border-t border-[#111c2d1a]">
                                  {event.comments && event.comments > 0 ? (
                                    <Button variant="ghost" size="sm">
                                      <MessageSquare className="h-4 w-4 mr-1" />
                                      {event.comments}{' '}
                                      {event.comments === 1 ? 'Comment' : 'Comments'}
                                    </Button>
                                  ) : (
                                    <Button variant="ghost" size="sm">
                                      <MessageSquare className="h-4 w-4 mr-1" />
                                      Add Comment
                                    </Button>
                                  )}
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calendar className="h-16 w-16 text-blackblack-40 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-blackblack-100 mb-1">
                      No Timeline Events Found
                    </h3>
                    <p className="text-blackblack-60 max-w-md mx-auto mb-6">
                      No events match your current search criteria. Try adjusting your filters or
                      search terms.
                    </p>
                    <div className="flex justify-center gap-4">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSearchTerm('');
                          setTypeFilter(null);
                          setShowPastEvents(true);
                        }}
                      >
                        Clear Filters
                      </Button>
                      <Button>
                        <FilePlus className="h-4 w-4 mr-2" />
                        Add New Event
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="rounded-xl shadow-light-theme-shadow-medium">
                <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                  <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                    Upcoming Milestones
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-[#111c2d1a]">
                    <div className="p-4 hover:bg-surfaceslightgray-10">
                      <Badge className="bg-actionsuccess-light text-actionsuccess mb-2">
                        Milestone
                      </Badge>
                      <h3 className="text-base font-medium mb-1">Sprint 2 Demo</h3>
                      <p className="text-sm text-blackblack-60 mb-2">
                        Present Sprint 2 deliverables to stakeholders
                      </p>
                      <div className="flex items-center text-xs text-blackblack-60">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>March 25, 2025</span>
                      </div>
                    </div>
                    <div className="p-4 hover:bg-surfaceslightgray-10">
                      <Badge className="bg-actionsuccess-light text-actionsuccess mb-2">
                        Milestone
                      </Badge>
                      <h3 className="text-base font-medium mb-1">Beta Release</h3>
                      <p className="text-sm text-blackblack-60 mb-2">
                        Launch beta version for internal testing
                      </p>
                      <div className="flex items-center text-xs text-blackblack-60">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>April 10, 2025</span>
                      </div>
                    </div>
                    <div className="p-4 hover:bg-surfaceslightgray-10">
                      <Badge className="bg-actionsuccess-light text-actionsuccess mb-2">
                        Milestone
                      </Badge>
                      <h3 className="text-base font-medium mb-1">User Acceptance Testing</h3>
                      <p className="text-sm text-blackblack-60 mb-2">
                        Begin UAT with selected users
                      </p>
                      <div className="flex items-center text-xs text-blackblack-60">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>April 25, 2025</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-xl shadow-light-theme-shadow-medium">
                <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                  <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                    Recent Comments
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-[#111c2d1a]">
                    {allTimelineEvents
                      .filter(event => event.type === 'comment')
                      .slice(0, 3)
                      .map(comment => (
                        <div key={comment.id} className="p-4 hover:bg-surfaceslightgray-10">
                          <div className="flex gap-3">
                            <Avatar className="h-8 w-8">
                              {comment.user.avatar ? (
                                <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
                              ) : (
                                <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
                              )}
                            </Avatar>
                            <div>
                              <h4 className="text-sm font-medium">{comment.title}</h4>
                              <p className="text-xs text-blackblack-60 mb-1">
                                {comment.user.name} • {formatRelativeTime(comment.date)}
                              </p>
                              <p className="text-sm text-blackblack-80">{comment.description}</p>

                              <div className="mt-2">
                                <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                                  <MessageSquare className="h-3 w-3 mr-1" /> Reply
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-xl shadow-light-theme-shadow-medium">
                <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                  <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                    Timeline Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium mb-3">Event Distribution</h3>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-xs text-blackblack-60">Tasks</span>
                            <span className="text-xs text-blackblack-60">
                              {allTimelineEvents.filter(e => e.type === 'task').length}
                            </span>
                          </div>
                          <div className="w-full bg-surfaceslightgray-10 rounded-full h-1.5">
                            <div
                              className="bg-light-themeprimaryblue h-1.5 rounded-full"
                              style={{
                                width: `${(allTimelineEvents.filter(e => e.type === 'task').length / allTimelineEvents.length) * 100}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-xs text-blackblack-60">Comments</span>
                            <span className="text-xs text-blackblack-60">
                              {allTimelineEvents.filter(e => e.type === 'comment').length}
                            </span>
                          </div>
                          <div className="w-full bg-surfaceslightgray-10 rounded-full h-1.5">
                            <div
                              className="bg-light-themesecondarypurple h-1.5 rounded-full"
                              style={{
                                width: `${(allTimelineEvents.filter(e => e.type === 'comment').length / allTimelineEvents.length) * 100}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-xs text-blackblack-60">Milestones</span>
                            <span className="text-xs text-blackblack-60">
                              {allTimelineEvents.filter(e => e.type === 'milestone').length}
                            </span>
                          </div>
                          <div className="w-full bg-surfaceslightgray-10 rounded-full h-1.5">
                            <div
                              className="bg-actionsuccess h-1.5 rounded-full"
                              style={{
                                width: `${(allTimelineEvents.filter(e => e.type === 'milestone').length / allTimelineEvents.length) * 100}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-xs text-blackblack-60">Files</span>
                            <span className="text-xs text-blackblack-60">
                              {allTimelineEvents.filter(e => e.type === 'file').length}
                            </span>
                          </div>
                          <div className="w-full bg-surfaceslightgray-10 rounded-full h-1.5">
                            <div
                              className="bg-actionalert h-1.5 rounded-full"
                              style={{
                                width: `${(allTimelineEvents.filter(e => e.type === 'file').length / allTimelineEvents.length) * 100}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-xs text-blackblack-60">Status Updates</span>
                            <span className="text-xs text-blackblack-60">
                              {allTimelineEvents.filter(e => e.type === 'status').length}
                            </span>
                          </div>
                          <div className="w-full bg-surfaceslightgray-10 rounded-full h-1.5">
                            <div
                              className="bg-actionwarning h-1.5 rounded-full"
                              style={{
                                width: `${(allTimelineEvents.filter(e => e.type === 'status').length / allTimelineEvents.length) * 100}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#111c2d1a]">
                      <h3 className="text-sm font-medium mb-3">Team Activity</h3>
                      <div className="flex flex-wrap gap-3">
                        {Array.from(new Set(allTimelineEvents.map(e => e.user.name))).map(
                          userName => {
                            const userEvents = allTimelineEvents.filter(
                              e => e.user.name === userName
                            );
                            const userAvatar = allTimelineEvents.find(e => e.user.name === userName)
                              ?.user.avatar;

                            return (
                              <div
                                key={userName}
                                className="flex items-center gap-2 p-2 bg-surfaceslightgray-10 rounded-lg"
                              >
                                <Avatar className="h-6 w-6">
                                  {userAvatar ? (
                                    <AvatarImage src={userAvatar} alt={userName} />
                                  ) : (
                                    <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
                                  )}
                                </Avatar>
                                <div>
                                  <div className="text-xs font-medium truncate max-w-[100px]">
                                    {userName}
                                  </div>
                                  <div className="text-[10px] text-blackblack-60">
                                    {userEvents.length} events
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

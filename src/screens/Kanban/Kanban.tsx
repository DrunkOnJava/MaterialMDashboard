import React, { useState } from 'react';
import { TitlebarByAnima } from '../Buttons/components/Titlebar';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Badge } from '../../components/ui/badge';
import { Card, CardContent } from '../../components/ui/card';
import {
  Search,
  Plus,
  Filter,
  MoreHorizontal,
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle,
  Tag,
  Users,
  MessageSquare,
  Paperclip,
} from 'lucide-react';

// Mock data for tasks
interface KanbanTask {
  id: string;
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  assignees: {
    name: string;
    avatar: string;
  }[];
  labels: string[];
  attachments: number;
  comments: number;
}

interface KanbanColumn {
  id: string;
  title: string;
  color: string;
  tasks: KanbanTask[];
}

const kanbanData: KanbanColumn[] = [
  {
    id: 'backlog',
    title: 'Backlog',
    color: '#6E7880',
    tasks: [
      {
        id: 'task-1',
        title: 'Research competitors for new dashboard',
        description: 'Analyze top 5 competing products and identify opportunities',
        priority: 'low',
        assignees: [
          { name: 'Mike Chen', avatar: 'https://i.pravatar.cc/150?img=2' },
        ],
        labels: ['Research', 'Marketing'],
        attachments: 3,
        comments: 2,
      },
      {
        id: 'task-2',
        title: 'Update user documentation',
        priority: 'medium',
        dueDate: '2025-05-30',
        assignees: [
          { name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?img=1' },
        ],
        labels: ['Documentation'],
        attachments: 1,
        comments: 0,
      },
      {
        id: 'task-3',
        title: 'Create mobile app wireframes',
        priority: 'medium',
        assignees: [],
        labels: ['Design'],
        attachments: 0,
        comments: 0,
      },
    ],
  },
  {
    id: 'todo',
    title: 'To Do',
    color: '#3662E3',
    tasks: [
      {
        id: 'task-4',
        title: 'Implement authentication flow',
        description: 'Create login, registration, and password reset pages',
        priority: 'high',
        dueDate: '2025-05-20',
        assignees: [
          { name: 'David Wilson', avatar: 'https://i.pravatar.cc/150?img=4' },
        ],
        labels: ['Development', 'Frontend'],
        attachments: 2,
        comments: 5,
      },
      {
        id: 'task-5',
        title: 'Design system component library',
        priority: 'medium',
        assignees: [
          { name: 'Alicia Martinez', avatar: 'https://i.pravatar.cc/150?img=3' },
        ],
        labels: ['Design', 'UI/UX'],
        attachments: 4,
        comments: 2,
      },
      {
        id: 'task-6',
        title: 'Implement dark mode support',
        priority: 'low',
        assignees: [
          { name: 'David Wilson', avatar: 'https://i.pravatar.cc/150?img=4' },
        ],
        labels: ['Development', 'Enhancement'],
        attachments: 0,
        comments: 3,
      },
      {
        id: 'task-7',
        title: 'User testing plan for new features',
        priority: 'medium',
        dueDate: '2025-05-22',
        assignees: [
          { name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?img=1' },
        ],
        labels: ['Testing', 'UX'],
        attachments: 1,
        comments: 0,
      },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    color: '#F59E0B',
    tasks: [
      {
        id: 'task-8',
        title: 'API integration for analytics dashboard',
        description: 'Connect frontend with backend data API endpoints',
        priority: 'high',
        dueDate: '2025-05-18',
        assignees: [
          { name: 'David Wilson', avatar: 'https://i.pravatar.cc/150?img=4' },
          { name: 'Robert Taylor', avatar: 'https://i.pravatar.cc/150?img=6' },
        ],
        labels: ['Development', 'Backend'],
        attachments: 0,
        comments: 7,
      },
      {
        id: 'task-9',
        title: 'Create customer onboarding flow',
        priority: 'medium',
        assignees: [
          { name: 'Alicia Martinez', avatar: 'https://i.pravatar.cc/150?img=3' },
        ],
        labels: ['Design', 'Customer Success'],
        attachments: 5,
        comments: 3,
      },
    ],
  },
  {
    id: 'review',
    title: 'Review',
    color: '#8B5CF6',
    tasks: [
      {
        id: 'task-10',
        title: 'Finalize homepage redesign',
        description: 'Review and approve final mockups for the homepage',
        priority: 'high',
        dueDate: '2025-05-14',
        assignees: [
          { name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?img=1' },
          { name: 'Alicia Martinez', avatar: 'https://i.pravatar.cc/150?img=3' },
        ],
        labels: ['Design', 'Marketing'],
        attachments: 8,
        comments: 12,
      },
      {
        id: 'task-11',
        title: 'Review Q2 marketing campaign results',
        priority: 'medium',
        assignees: [
          { name: 'Sophie Brown', avatar: 'https://i.pravatar.cc/150?img=8' },
        ],
        labels: ['Marketing', 'Analytics'],
        attachments: 2,
        comments: 1,
      },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    color: '#10B981',
    tasks: [
      {
        id: 'task-12',
        title: 'Update privacy policy for GDPR compliance',
        description: 'Ensure all legal documents are up to date with latest regulations',
        priority: 'high',
        dueDate: '2025-05-10',
        assignees: [
          { name: 'Daniel Lee', avatar: 'https://i.pravatar.cc/150?img=9' },
        ],
        labels: ['Legal', 'Compliance'],
        attachments: 3,
        comments: 5,
      },
      {
        id: 'task-13',
        title: 'Fix responsive layout issues on Safari',
        priority: 'medium',
        assignees: [
          { name: 'David Wilson', avatar: 'https://i.pravatar.cc/150?img=4' },
        ],
        labels: ['Bug Fix', 'Frontend'],
        attachments: 0,
        comments: 2,
      },
      {
        id: 'task-14',
        title: 'Implement password strength meter',
        priority: 'low',
        assignees: [
          { name: 'Robert Taylor', avatar: 'https://i.pravatar.cc/150?img=6' },
        ],
        labels: ['Security', 'Frontend'],
        attachments: 1,
        comments: 0,
      },
    ],
  },
];

const labelColors = {
  'Development': 'bg-blue-100 text-blue-800',
  'Frontend': 'bg-indigo-100 text-indigo-800',
  'Backend': 'bg-purple-100 text-purple-800',
  'Design': 'bg-pink-100 text-pink-800',
  'UI/UX': 'bg-rose-100 text-rose-800',
  'Marketing': 'bg-orange-100 text-orange-800',
  'Analytics': 'bg-amber-100 text-amber-800',
  'Testing': 'bg-yellow-100 text-yellow-800',
  'UX': 'bg-lime-100 text-lime-800',
  'Research': 'bg-green-100 text-green-800',
  'Bug Fix': 'bg-emerald-100 text-emerald-800',
  'Enhancement': 'bg-teal-100 text-teal-800',
  'Documentation': 'bg-cyan-100 text-cyan-800',
  'Security': 'bg-sky-100 text-sky-800',
  'Legal': 'bg-violet-100 text-violet-800',
  'Compliance': 'bg-purple-100 text-purple-800',
  'Customer Success': 'bg-fuchsia-100 text-fuchsia-800',
};

const priorityConfig = {
  'low': { color: 'bg-blue-500', label: 'Low' },
  'medium': { color: 'bg-amber-500', label: 'Medium' },
  'high': { color: 'bg-red-500', label: 'High' },
};

export function Kanban() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="p-0 h-full">
      <TitlebarByAnima title="Kanban Board" />
      <div className="p-6">
        <div className="mb-6 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:items-center">
          <div className="flex items-center space-x-4">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blackblack-60" size={16} />
              <Input
                placeholder="Search tasks..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center">
              <Filter size={16} className="mr-2" />
              Filter
            </Button>
          </div>
          <div className="flex space-x-3">
            <Button className="flex items-center">
              <Plus size={16} className="mr-2" />
              Add Task
            </Button>
          </div>
        </div>

        <div className="flex overflow-x-auto pb-6 space-x-4 min-h-[calc(100vh-230px)]">
          {kanbanData.map((column) => (
            <div key={column.id} className="w-80 flex-shrink-0">
              <div 
                className="bg-white rounded-t-lg p-3 border border-b-0 border-[#e4ebf0] flex items-center justify-between"
                style={{ borderTopColor: column.color }}
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: column.color }}></div>
                  <h3 className="font-medium text-blackblack-100">{column.title}</h3>
                  <span className="ml-2 text-xs bg-surfaceslightgray-20 px-2 py-0.5 rounded-full text-blackblack-60">
                    {column.tasks.length}
                  </span>
                </div>
                <div className="flex space-x-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Plus size={16} />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal size={16} />
                  </Button>
                </div>
              </div>
              <div className="bg-surfaceslightgray-10 p-3 rounded-b-lg border border-t-0 border-[#e4ebf0] h-full space-y-3">
                {column.tasks.map((task) => (
                  <Card key={task.id} className="bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-3">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-blackblack-100">{task.title}</h4>
                        <Button variant="ghost" size="icon" className="h-6 w-6 -mt-1 -mr-1">
                          <MoreHorizontal size={14} />
                        </Button>
                      </div>
                      {task.description && (
                        <p className="text-sm text-blackblack-60 mb-3 line-clamp-2">{task.description}</p>
                      )}
                      <div className="flex space-x-2 flex-wrap mb-3">
                        {task.labels.slice(0, 3).map((label, index) => (
                          <Badge key={index} className={`${labelColors[label] || 'bg-gray-100 text-gray-800'} text-xs font-normal`}>
                            {label}
                          </Badge>
                        ))}
                        {task.labels.length > 3 && (
                          <Badge className="bg-gray-100 text-gray-800 text-xs font-normal">
                            +{task.labels.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {task.dueDate && (
                            <div className="flex items-center text-xs">
                              <Calendar size={12} className="mr-1 text-blackblack-60" />
                              <span className="text-blackblack-60">{task.dueDate}</span>
                            </div>
                          )}
                          <div className="flex items-center">
                            <span 
                              className={`w-2 h-2 rounded-full mr-1 ${priorityConfig[task.priority].color}`}
                            ></span>
                            <span className="text-xs text-blackblack-60">
                              {priorityConfig[task.priority].label}
                            </span>
                          </div>
                        </div>
                        {task.assignees.length > 0 && (
                          <div className="flex -space-x-2">
                            {task.assignees.slice(0, 3).map((assignee, index) => (
                              <Avatar key={index} className="w-6 h-6 border-2 border-white">
                                <AvatarImage src={assignee.avatar} alt={assignee.name} />
                                <AvatarFallback>{assignee.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                            ))}
                            {task.assignees.length > 3 && (
                              <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-xs text-blackblack-60">
                                +{task.assignees.length - 3}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      {(task.comments > 0 || task.attachments > 0) && (
                        <div className="flex items-center space-x-3 mt-3 pt-3 border-t border-[#e4ebf0]">
                          {task.comments > 0 && (
                            <div className="flex items-center text-xs text-blackblack-60">
                              <MessageSquare size={12} className="mr-1" />
                              {task.comments}
                            </div>
                          )}
                          {task.attachments > 0 && (
                            <div className="flex items-center text-xs text-blackblack-60">
                              <Paperclip size={12} className="mr-1" />
                              {task.attachments}
                            </div>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
                {column.tasks.length === 0 && (
                  <div className="flex items-center justify-center h-20 border border-dashed border-[#e4ebf0] rounded-lg bg-white">
                    <p className="text-sm text-blackblack-60">No tasks yet</p>
                  </div>
                )}
                <button className="w-full py-2 flex items-center justify-center text-sm text-blackblack-60 hover:bg-white rounded-lg transition-colors">
                  <Plus size={14} className="mr-1" /> Add a card
                </button>
              </div>
            </div>
          ))}
          <div className="w-80 flex-shrink-0 flex items-start">
            <button className="bg-surfaceslightgray-10 rounded-lg p-3 border border-[#e4ebf0] w-full text-left hover:bg-white transition-colors">
              <div className="flex items-center text-blackblack-60">
                <Plus size={16} className="mr-2" />
                <span>Add Column</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
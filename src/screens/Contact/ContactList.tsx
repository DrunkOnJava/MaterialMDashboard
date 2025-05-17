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
  Download,
  Upload,
  MoreHorizontal,
  Mail,
  Phone,
  Star,
  Edit,
  Trash2,
  Building,
  Briefcase,
  MapPin,
  Calendar,
  Heart,
  Users,
  UserPlus,
  AlignRight,
  Grid2X2,
  Globe,
  Check,
} from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel,
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '../../components/ui/dropdown-menu';

// Mock contacts data
interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  title?: string;
  department?: string;
  location?: string;
  tags: string[];
  status: 'active' | 'inactive' | 'pending';
  favorite: boolean;
  avatar?: string;
  lastContact?: string;
  connections?: number;
  website?: string;
  about?: string;
}

const contacts: Contact[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    phone: '(555) 123-4567',
    company: 'Acme Inc.',
    title: 'Marketing Director',
    department: 'Marketing',
    location: 'San Francisco, CA',
    tags: ['Client', 'VIP'],
    status: 'active',
    favorite: true,
    avatar: 'https://i.pravatar.cc/150?img=1',
    lastContact: '2 days ago',
    connections: 43,
    website: 'sarahjohnson.com',
    about: 'Experienced marketing professional with a focus on digital strategy and brand development.',
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    phone: '(555) 234-5678',
    company: 'TechCorp',
    title: 'Software Engineer',
    department: 'Engineering',
    location: 'Seattle, WA',
    tags: ['Vendor'],
    status: 'active',
    favorite: false,
    avatar: 'https://i.pravatar.cc/150?img=2',
    lastContact: 'Yesterday',
    connections: 21,
    website: 'github.com/michaelchen',
    about: 'Full-stack developer with expertise in React and Node.js. Passionate about building scalable applications.',
  },
  {
    id: '3',
    name: 'Alicia Martinez',
    email: 'alicia.martinez@example.com',
    phone: '(555) 345-6789',
    company: 'Design Masters',
    title: 'Senior Designer',
    department: 'Design',
    location: 'New York, NY',
    tags: ['Partner'],
    status: 'active',
    favorite: true,
    avatar: 'https://i.pravatar.cc/150?img=3',
    lastContact: 'Today',
    connections: 67,
    website: 'aliciamartinez.design',
    about: 'Award-winning designer specializing in user experience and interface design for web and mobile applications.',
  },
  {
    id: '4',
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    phone: '(555) 456-7890',
    company: 'Acme Inc.',
    title: 'Product Manager',
    department: 'Product',
    location: 'Boston, MA',
    tags: ['Client'],
    status: 'inactive',
    favorite: false,
    avatar: 'https://i.pravatar.cc/150?img=4',
    lastContact: '1 week ago',
    connections: 38,
    website: 'linkedin.com/in/davidwilson',
    about: 'Product manager with a background in software development. Focused on creating user-centric products that solve real problems.',
  },
  {
    id: '5',
    name: 'Jessica Thompson',
    email: 'jessica.thompson@example.com',
    phone: '(555) 567-8901',
    company: 'Marketing Pros',
    title: 'Content Strategist',
    department: 'Marketing',
    location: 'Chicago, IL',
    tags: ['Prospect'],
    status: 'pending',
    favorite: false,
    avatar: 'https://i.pravatar.cc/150?img=5',
    lastContact: '3 days ago',
    connections: 19,
    website: 'jessicathompson.me',
    about: 'Content creator and strategist with a focus on storytelling and brand messaging. Previously worked in journalism.',
  },
  {
    id: '6',
    name: 'Robert Taylor',
    email: 'robert.taylor@example.com',
    phone: '(555) 678-9012',
    company: 'TechCorp',
    title: 'CTO',
    department: 'Executive',
    location: 'Austin, TX',
    tags: ['Vendor', 'VIP'],
    status: 'active',
    favorite: true,
    avatar: 'https://i.pravatar.cc/150?img=6',
    lastContact: '5 days ago',
    connections: 112,
    website: 'roberttaylor.tech',
    about: 'Technology executive with 15+ years experience in software development and team leadership. Specialist in scalable architecture.',
  },
  {
    id: '7',
    name: 'Emma Davis',
    email: 'emma.davis@example.com',
    phone: '(555) 789-0123',
    company: 'Design Masters',
    title: 'UX Researcher',
    department: 'Design',
    location: 'Portland, OR',
    tags: ['Partner'],
    status: 'active',
    favorite: false,
    avatar: 'https://i.pravatar.cc/150?img=7',
    lastContact: '1 month ago',
    connections: 28,
    website: 'emmadavis.co',
    about: 'User experience researcher focused on understanding user behavior and translating insights into product improvements.',
  },
  {
    id: '8',
    name: 'Sophie Brown',
    email: 'sophie.brown@example.com',
    phone: '(555) 890-1234',
    company: 'Finance First',
    title: 'Financial Analyst',
    department: 'Finance',
    location: 'New York, NY',
    tags: ['Client'],
    status: 'active',
    favorite: false,
    avatar: 'https://i.pravatar.cc/150?img=8',
    lastContact: '2 weeks ago',
    connections: 45,
    website: 'linkedin.com/in/sophiebrown',
    about: 'Financial analyst with expertise in market research, investment analysis, and financial modeling.',
  },
];

// Status badge colors
const statusColors = {
  active: 'bg-green-100 text-green-800',
  inactive: 'bg-gray-100 text-gray-800',
  pending: 'bg-yellow-100 text-yellow-800',
};

// Tag colors
const tagColors = {
  'Client': 'bg-blue-100 text-blue-800',
  'Vendor': 'bg-purple-100 text-purple-800',
  'Partner': 'bg-green-100 text-green-800',
  'Prospect': 'bg-amber-100 text-amber-800',
  'VIP': 'bg-red-100 text-red-800',
};

export function ContactList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);

  // Filter contacts
  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = 
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.phone.includes(searchQuery);
    
    const matchesTags = selectedTags.length === 0 || 
      contact.tags.some(tag => selectedTags.includes(tag));
    
    const matchesStatus = selectedStatus.length === 0 ||
      selectedStatus.includes(contact.status);
    
    return matchesSearch && matchesTags && matchesStatus;
  });

  // Toggle favorite status
  const toggleFavorite = (id: string) => {
    // In a real app, this would update the backend
    console.log(`Toggle favorite for contact ${id}`);
  };

  // All available tags
  const allTags = Array.from(new Set(contacts.flatMap(contact => contact.tags)));
  
  // All available statuses
  const allStatuses = Array.from(new Set(contacts.map(contact => contact.status)));

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  // Toggle status selection
  const toggleStatus = (status: string) => {
    setSelectedStatus(prev => 
      prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
    );
  };

  return (
    <div className="p-0 h-full">
      <TitlebarByAnima title="Contact List" />
      <div className="p-6">
        <div className="mb-6 flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blackblack-60" size={16} />
              <Input
                placeholder="Search contacts..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  <Filter size={16} className="mr-2" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Filter by Tag</DropdownMenuLabel>
                {allTags.map(tag => (
                  <DropdownMenuItem key={tag} onClick={() => toggleTag(tag)} className="flex items-center justify-between cursor-pointer">
                    <span>{tag}</span>
                    {selectedTags.includes(tag) && <Check size={16} />}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                {allStatuses.map(status => (
                  <DropdownMenuItem key={status} onClick={() => toggleStatus(status)} className="flex items-center justify-between cursor-pointer">
                    <span className="capitalize">{status}</span>
                    {selectedStatus.includes(status) && <Check size={16} />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center justify-between lg:justify-end w-full lg:w-auto space-x-3">
            <div className="flex border rounded-md">
              <button 
                className={`p-2 ${viewMode === 'grid' ? 'bg-light-themeprimarylight-blue text-light-themeprimaryblue' : 'bg-white text-blackblack-60'}`}
                onClick={() => setViewMode('grid')}
              >
                <Grid2X2 size={18} />
              </button>
              <button 
                className={`p-2 ${viewMode === 'list' ? 'bg-light-themeprimarylight-blue text-light-themeprimaryblue' : 'bg-white text-blackblack-60'}`}
                onClick={() => setViewMode('list')}
              >
                <AlignRight size={18} />
              </button>
            </div>
            <Button variant="outline" className="flex items-center">
              <Upload size={16} className="mr-2" />
              Import
            </Button>
            <Button variant="outline" className="flex items-center">
              <Download size={16} className="mr-2" />
              Export
            </Button>
            <Button className="flex items-center">
              <Plus size={16} className="mr-2" />
              Add Contact
            </Button>
          </div>
        </div>

        {(selectedTags.length > 0 || selectedStatus.length > 0) && (
          <div className="bg-light-themeprimarylight-blue rounded-lg p-3 mb-4 flex flex-wrap items-center gap-2">
            <span className="text-light-themeprimaryblue font-medium mr-2">Filters:</span>
            
            {selectedTags.map(tag => (
              <Badge 
                key={tag} 
                className={`${tagColors[tag] || 'bg-gray-100 text-gray-800'} flex items-center gap-1 px-3 py-1`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
                <button className="ml-1 hover:bg-white/20 rounded-full w-4 h-4 inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                  </svg>
                </button>
              </Badge>
            ))}
            
            {selectedStatus.map(status => (
              <Badge 
                key={status} 
                className={`${statusColors[status]} flex items-center gap-1 px-3 py-1 capitalize`}
                onClick={() => toggleStatus(status)}
              >
                {status}
                <button className="ml-1 hover:bg-white/20 rounded-full w-4 h-4 inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                  </svg>
                </button>
              </Badge>
            ))}
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-light-themeprimaryblue ml-auto"
              onClick={() => {
                setSelectedTags([]);
                setSelectedStatus([]);
              }}
            >
              Clear All
            </Button>
          </div>
        )}

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredContacts.map((contact) => (
              <Card key={contact.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-24 bg-gradient-to-r from-purple-100 to-blue-100"></div>
                <CardContent className="pt-0 relative">
                  <div className="absolute -top-12 left-4 border-4 border-white rounded-full bg-white">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={contact.avatar} alt={contact.name} />
                      <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <div className="mt-8 flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-blackblack-100">{contact.name}</h3>
                      <p className="text-sm text-blackblack-60">{contact.title}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <button 
                        className="p-1.5 hover:bg-gray-100 rounded-full"
                        onClick={() => toggleFavorite(contact.id)}
                      >
                        <Star className={`h-5 w-5 ${contact.favorite ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} />
                      </button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="p-1.5 hover:bg-gray-100 rounded-full">
                            <MoreHorizontal size={18} />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="cursor-pointer">
                            <Mail className="h-4 w-4 mr-2" />
                            <span>Send Email</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <Phone className="h-4 w-4 mr-2" />
                            <span>Call</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <Edit className="h-4 w-4 mr-2" />
                            <span>Edit</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="cursor-pointer text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm">
                      <Building className="h-4 w-4 mr-2 text-blackblack-60" />
                      <span className="text-blackblack-80">{contact.company || '—'}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="h-4 w-4 mr-2 text-blackblack-60" />
                      <span className="text-blackblack-80">{contact.email}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 mr-2 text-blackblack-60" />
                      <span className="text-blackblack-80">{contact.phone}</span>
                    </div>
                    {contact.location && (
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-blackblack-60" />
                        <span className="text-blackblack-80">{contact.location}</span>
                      </div>
                    )}
                  </div>
                  
                  {contact.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1">
                      {contact.tags.map((tag, index) => (
                        <Badge 
                          key={index} 
                          className={`${tagColors[tag] || 'bg-gray-100 text-gray-800'} text-xs`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  
                  <div className="mt-4 pt-4 border-t border-[#e4ebf0] flex justify-between">
                    <div className="flex items-center text-sm text-blackblack-60">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Last: {contact.lastContact}</span>
                    </div>
                    <Badge 
                      className={`${statusColors[contact.status]} text-xs capitalize`}
                    >
                      {contact.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredContacts.map((contact) => (
              <Card key={contact.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center">
                      <button 
                        className="p-1.5 hover:bg-gray-100 rounded-full mr-2"
                        onClick={() => toggleFavorite(contact.id)}
                      >
                        <Star className={`h-5 w-5 ${contact.favorite ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} />
                      </button>
                      <Avatar className="w-12 h-12 mr-3">
                        <AvatarImage src={contact.avatar} alt={contact.name} />
                        <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium text-blackblack-100">{contact.name}</h3>
                        <div className="flex flex-wrap items-center gap-1 text-sm text-blackblack-60">
                          {contact.title}
                          {contact.title && contact.company && (
                            <span className="px-1">•</span>
                          )}
                          {contact.company}
                        </div>
                      </div>
                    </div>

                    <div className="ml-auto flex flex-col md:flex-row md:items-center gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <Mail className="h-4 w-4 mr-2 text-blackblack-60" />
                          <span className="text-blackblack-80">{contact.email}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Phone className="h-4 w-4 mr-2 text-blackblack-60" />
                          <span className="text-blackblack-80">{contact.phone}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 min-w-[120px]">
                        {contact.tags.map((tag, index) => (
                          <Badge 
                            key={index} 
                            className={`${tagColors[tag] || 'bg-gray-100 text-gray-800'} text-xs`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Badge 
                        className={`${statusColors[contact.status]} text-xs capitalize`}
                      >
                        {contact.status}
                      </Badge>

                      <div className="flex items-center space-x-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                          <Mail size={16} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                          <Phone size={16} />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                              <MoreHorizontal size={16} />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="cursor-pointer">
                              <Edit className="h-4 w-4 mr-2" />
                              <span>Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                              <UserPlus className="h-4 w-4 mr-2" />
                              <span>Add to Group</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              <span>Delete</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>

                  {contact.about && (
                    <div className="mt-3 pt-3 border-t border-[#e4ebf0]">
                      <p className="text-sm text-blackblack-80 line-clamp-2">{contact.about}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {filteredContacts.length === 0 && (
          <div className="bg-white rounded-lg border border-[#e4ebf0] p-8 text-center">
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-blackblack-40 mb-4" />
              <h3 className="text-lg font-medium text-blackblack-100 mb-2">No contacts found</h3>
              <p className="text-blackblack-60 max-w-md mx-auto mb-6">
                {searchQuery || selectedTags.length > 0 || selectedStatus.length > 0
                  ? 'Try adjusting your search or filters to find what you\'re looking for.'
                  : 'Your contact list is empty. Add new contacts to get started.'}
              </p>
              <Button className="flex items-center">
                <Plus size={16} className="mr-2" />
                Add Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
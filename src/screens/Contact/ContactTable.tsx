import React, { useState } from 'react';
import { TitlebarByAnima } from '../Buttons/components/Titlebar';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Badge } from '../../components/ui/badge';
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
  ChevronDown,
  ArrowUpDown,
  CheckIcon,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '../../components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';

// Mock contacts data
interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  title?: string;
  department?: string;
  tags: string[];
  status: 'active' | 'inactive' | 'pending';
  favorite: boolean;
  avatar?: string;
  lastContact?: string;
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
    tags: ['Client', 'VIP'],
    status: 'active',
    favorite: true,
    avatar: 'https://i.pravatar.cc/150?img=1',
    lastContact: '2 days ago',
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    phone: '(555) 234-5678',
    company: 'TechCorp',
    title: 'Software Engineer',
    department: 'Engineering',
    tags: ['Vendor'],
    status: 'active',
    favorite: false,
    avatar: 'https://i.pravatar.cc/150?img=2',
    lastContact: 'Yesterday',
  },
  {
    id: '3',
    name: 'Alicia Martinez',
    email: 'alicia.martinez@example.com',
    phone: '(555) 345-6789',
    company: 'Design Masters',
    title: 'Senior Designer',
    department: 'Design',
    tags: ['Partner'],
    status: 'active',
    favorite: true,
    avatar: 'https://i.pravatar.cc/150?img=3',
    lastContact: 'Today',
  },
  {
    id: '4',
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    phone: '(555) 456-7890',
    company: 'Acme Inc.',
    title: 'Product Manager',
    department: 'Product',
    tags: ['Client'],
    status: 'inactive',
    favorite: false,
    avatar: 'https://i.pravatar.cc/150?img=4',
    lastContact: '1 week ago',
  },
  {
    id: '5',
    name: 'Jessica Thompson',
    email: 'jessica.thompson@example.com',
    phone: '(555) 567-8901',
    company: 'Marketing Pros',
    title: 'Content Strategist',
    department: 'Marketing',
    tags: ['Prospect'],
    status: 'pending',
    favorite: false,
    avatar: 'https://i.pravatar.cc/150?img=5',
    lastContact: '3 days ago',
  },
  {
    id: '6',
    name: 'Robert Taylor',
    email: 'robert.taylor@example.com',
    phone: '(555) 678-9012',
    company: 'TechCorp',
    title: 'CTO',
    department: 'Executive',
    tags: ['Vendor', 'VIP'],
    status: 'active',
    favorite: true,
    avatar: 'https://i.pravatar.cc/150?img=6',
    lastContact: '5 days ago',
  },
  {
    id: '7',
    name: 'Emma Davis',
    email: 'emma.davis@example.com',
    phone: '(555) 789-0123',
    company: 'Design Masters',
    title: 'UX Researcher',
    department: 'Design',
    tags: ['Partner'],
    status: 'active',
    favorite: false,
    avatar: 'https://i.pravatar.cc/150?img=7',
    lastContact: '1 month ago',
  },
  {
    id: '8',
    name: 'Sophie Brown',
    email: 'sophie.brown@example.com',
    phone: '(555) 890-1234',
    company: 'Finance First',
    title: 'Financial Analyst',
    department: 'Finance',
    tags: ['Client'],
    status: 'active',
    favorite: false,
    avatar: 'https://i.pravatar.cc/150?img=8',
    lastContact: '2 weeks ago',
  },
  {
    id: '9',
    name: 'Daniel Lee',
    email: 'daniel.lee@example.com',
    phone: '(555) 901-2345',
    company: 'Legal Experts',
    title: 'Corporate Counsel',
    department: 'Legal',
    tags: ['Vendor'],
    status: 'inactive',
    favorite: false,
    avatar: 'https://i.pravatar.cc/150?img=9',
    lastContact: '3 months ago',
  },
  {
    id: '10',
    name: 'Olivia Garcia',
    email: 'olivia.garcia@example.com',
    phone: '(555) 012-3456',
    company: 'Global Sales',
    title: 'Sales Director',
    department: 'Sales',
    tags: ['Prospect', 'VIP'],
    status: 'pending',
    favorite: true,
    avatar: 'https://i.pravatar.cc/150?img=10',
    lastContact: '1 day ago',
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

export function ContactTable() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);
  const [sortField, setSortField] = useState<keyof Contact>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Handle sort changes
  const handleSort = (field: keyof Contact) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Filter and sort contacts
  const filteredContacts = contacts
    .filter(contact => 
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.phone.includes(searchQuery)
    )
    .sort((a, b) => {
      const fieldA = a[sortField];
      const fieldB = b[sortField];

      if (fieldA === undefined) return 1;
      if (fieldB === undefined) return -1;

      if (typeof fieldA === 'string' && typeof fieldB === 'string') {
        return sortDirection === 'asc' 
          ? fieldA.localeCompare(fieldB)
          : fieldB.localeCompare(fieldA);
      }

      return 0;
    });

  // Toggle contact selection
  const toggleSelectContact = (id: string) => {
    setSelectedContacts(prev => 
      prev.includes(id) ? prev.filter(contactId => contactId !== id) : [...prev, id]
    );
  };

  // Toggle all contacts selection
  const toggleSelectAll = () => {
    if (selectedContacts.length === filteredContacts.length) {
      setSelectedContacts([]);
    } else {
      setSelectedContacts(filteredContacts.map(contact => contact.id));
    }
  };

  // Toggle favorite status
  const toggleFavorite = (id: string) => {
    // In a real app, this would update the backend
    console.log(`Toggle favorite for contact ${id}`);
  };

  return (
    <div className="p-0 h-full">
      <TitlebarByAnima title="Contact Table" />
      <div className="p-6">
        <div className="mb-6 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
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
            <Button variant="outline" className="flex items-center">
              <Filter size={16} className="mr-2" />
              Filter
            </Button>
          </div>
          <div className="flex space-x-3">
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

        {selectedContacts.length > 0 && (
          <div className="bg-light-themeprimarylight-blue rounded-lg p-3 mb-4 flex justify-between items-center">
            <div className="text-light-themeprimaryblue font-medium">
              {selectedContacts.length} {selectedContacts.length === 1 ? 'contact' : 'contacts'} selected
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex items-center text-light-themeprimaryblue border-light-themeprimaryblue bg-transparent">
                <Mail size={16} className="mr-2" />
                Email Selected
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center text-light-themeprimaryblue">
                <Edit size={16} className="mr-2" />
                Edit
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center text-red-500">
                <Trash2 size={16} className="mr-2" />
                Delete
              </Button>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg border border-[#e4ebf0] overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[48px]">
                    <div className="flex items-center justify-center">
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300"
                        checked={selectedContacts.length === filteredContacts.length && filteredContacts.length > 0}
                        onChange={toggleSelectAll}
                      />
                    </div>
                  </TableHead>
                  <TableHead className="w-[48px]"></TableHead>
                  <TableHead 
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSort('name')}
                  >
                    <div className="flex items-center">
                      Name
                      {sortField === 'name' && (
                        <span className="ml-2">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </TableHead>
                  <TableHead 
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSort('email')}
                  >
                    <div className="flex items-center">
                      Email
                      {sortField === 'email' && (
                        <span className="ml-2">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </TableHead>
                  <TableHead 
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSort('phone')}
                  >
                    <div className="flex items-center">
                      Phone
                      {sortField === 'phone' && (
                        <span className="ml-2">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </TableHead>
                  <TableHead 
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSort('company')}
                  >
                    <div className="flex items-center">
                      Company
                      {sortField === 'company' && (
                        <span className="ml-2">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </TableHead>
                  <TableHead className="hidden xl:table-cell">Tags</TableHead>
                  <TableHead 
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSort('status')}
                  >
                    <div className="flex items-center">
                      Status
                      {sortField === 'status' && (
                        <span className="ml-2">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </TableHead>
                  <TableHead className="w-[90px] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredContacts.map((contact) => (
                  <TableRow 
                    key={contact.id} 
                    className={selectedContacts.includes(contact.id) ? 'bg-light-themeprimarylight-blue bg-opacity-30' : ''}
                  >
                    <TableCell className="text-center p-3">
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300"
                        checked={selectedContacts.includes(contact.id)}
                        onChange={() => toggleSelectContact(contact.id)}
                      />
                    </TableCell>
                    <TableCell className="text-center p-3">
                      <button 
                        className="text-gray-400 hover:text-yellow-500 focus:outline-none"
                        onClick={() => toggleFavorite(contact.id)}
                      >
                        <Star className={`h-5 w-5 ${contact.favorite ? 'text-yellow-400 fill-yellow-400' : ''}`} />
                      </button>
                    </TableCell>
                    <TableCell className="font-medium p-3">
                      <div className="flex items-center">
                        <Avatar className="w-8 h-8 mr-3">
                          <AvatarImage src={contact.avatar} alt={contact.name} />
                          <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div>{contact.name}</div>
                          {contact.title && (
                            <div className="text-xs text-gray-500">{contact.title}</div>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="p-3">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-gray-400" />
                        {contact.email}
                      </div>
                    </TableCell>
                    <TableCell className="p-3">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-gray-400" />
                        {contact.phone}
                      </div>
                    </TableCell>
                    <TableCell className="p-3">{contact.company || '-'}</TableCell>
                    <TableCell className="p-3 hidden xl:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {contact.tags.map((tag, index) => (
                          <Badge 
                            key={index} 
                            className={`${tagColors[tag] || 'bg-gray-100 text-gray-800'} text-xs`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="p-3">
                      <Badge 
                        className={`${statusColors[contact.status]} text-xs`}
                      >
                        {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right p-3">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal size={16} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="cursor-pointer">
                            <Mail className="h-4 w-4 mr-2" />
                            <span>Send Email</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <Edit className="h-4 w-4 mr-2" />
                            <span>Edit Contact</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="cursor-pointer text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
                {filteredContacts.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center py-6 text-gray-500">
                      No contacts found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-between border-t border-[#e4ebf0] px-4 py-3">
            <div className="text-sm text-gray-500">
              Showing {filteredContacts.length} of {contacts.length} contacts
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="px-2">
                <ChevronLeft size={16} />
              </Button>
              <Button variant="outline" size="sm" className="px-3 bg-white">
                1
              </Button>
              <Button variant="ghost" size="sm" className="px-3">
                2
              </Button>
              <Button variant="ghost" size="sm" className="px-3">
                3
              </Button>
              <Button variant="outline" size="sm" className="px-2">
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
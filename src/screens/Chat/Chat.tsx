import React, { useState } from 'react';
import { TitlebarByAnima } from '../Buttons/components/Titlebar';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Badge } from '../../components/ui/badge';
import { Search, Phone, Video, MoreVertical, Send, Smile, Paperclip, Image, Mic } from 'lucide-react';

// Mock data for conversations
const conversations = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://i.pravatar.cc/150?img=1',
    status: 'online',
    lastMessage: 'Yes, the design looks great!',
    time: '2m ago',
    unread: 3,
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://i.pravatar.cc/150?img=2',
    status: 'offline',
    lastMessage: 'I\'ll send you the files tomorrow.',
    time: '25m ago',
    unread: 0,
  },
  {
    id: 3,
    name: 'Alicia Martinez',
    avatar: 'https://i.pravatar.cc/150?img=3',
    status: 'online',
    lastMessage: 'When is the next meeting?',
    time: '1h ago',
    unread: 1,
  },
  {
    id: 4,
    name: 'David Wilson',
    avatar: 'https://i.pravatar.cc/150?img=4',
    status: 'away',
    lastMessage: 'The presentation went well!',
    time: '3h ago',
    unread: 0,
  },
  {
    id: 5,
    name: 'Marketing Team',
    avatar: 'https://i.pravatar.cc/150?img=5',
    status: 'online',
    isGroup: true,
    participants: 8,
    lastMessage: 'Jessica: Let's finalize the campaign',
    time: '5h ago',
    unread: 0,
  },
  {
    id: 6,
    name: 'Robert Taylor',
    avatar: 'https://i.pravatar.cc/150?img=6',
    status: 'offline',
    lastMessage: 'Thanks for your help!',
    time: 'Yesterday',
    unread: 0,
  },
  {
    id: 7,
    name: 'UX Design',
    avatar: 'https://i.pravatar.cc/150?img=7',
    status: 'online',
    isGroup: true,
    participants: 12,
    lastMessage: 'Emma: Updated wireframes uploaded',
    time: 'Yesterday',
    unread: 0,
  },
  {
    id: 8,
    name: 'Sophie Brown',
    avatar: 'https://i.pravatar.cc/150?img=8',
    status: 'online',
    lastMessage: 'I've reviewed the proposal',
    time: '2 days ago',
    unread: 0,
  },
  {
    id: 9,
    name: 'Daniel Lee',
    avatar: 'https://i.pravatar.cc/150?img=9',
    status: 'offline',
    lastMessage: 'Let me know when you're available',
    time: '3 days ago',
    unread: 0,
  },
];

// Mock data for messages in active conversation
const messages = [
  {
    id: 1,
    sender: 'Sarah Johnson',
    isMe: false,
    avatar: 'https://i.pravatar.cc/150?img=1',
    content: 'Hi there! How's the new dashboard design coming along?',
    time: '10:32 AM',
  },
  {
    id: 2,
    sender: 'Me',
    isMe: true,
    content: 'Hey Sarah! It's going well. I've finished the initial mockups.',
    time: '10:35 AM',
  },
  {
    id: 3,
    sender: 'Sarah Johnson',
    isMe: false,
    avatar: 'https://i.pravatar.cc/150?img=1',
    content: 'That's great to hear! Would you mind sharing what you have so far?',
    time: '10:36 AM',
  },
  {
    id: 4,
    sender: 'Me',
    isMe: true,
    content: 'Sure, I'll send you the Figma link right away.',
    time: '10:38 AM',
  },
  {
    id: 5,
    sender: 'Me',
    isMe: true,
    content: 'Here you go: https://figma.com/file/example-dashboard',
    time: '10:39 AM',
  },
  {
    id: 6,
    sender: 'Sarah Johnson',
    isMe: false,
    avatar: 'https://i.pravatar.cc/150?img=1',
    content: 'Perfect, thanks! I'll take a look and provide feedback.',
    time: '10:42 AM',
  },
  {
    id: 7,
    sender: 'Sarah Johnson',
    isMe: false,
    avatar: 'https://i.pravatar.cc/150?img=1',
    content: 'Just checked it out - love the new analytics section! The charts are much clearer now.',
    time: '10:58 AM',
  },
  {
    id: 8,
    sender: 'Me',
    isMe: true,
    content: 'Thanks! I worked on making the data visualization more intuitive.',
    time: '11:02 AM',
  },
  {
    id: 9,
    sender: 'Sarah Johnson',
    isMe: false,
    avatar: 'https://i.pravatar.cc/150?img=1',
    content: 'It definitely shows. What about the mobile responsiveness?',
    time: '11:04 AM',
  },
  {
    id: 10,
    sender: 'Me',
    isMe: true,
    content: 'Still working on that part. The desktop version is solid, but I need to refine the mobile experience.',
    time: '11:07 AM',
  },
  {
    id: 11,
    sender: 'Sarah Johnson',
    isMe: false,
    avatar: 'https://i.pravatar.cc/150?img=1',
    content: 'Makes sense. Let me know if you need any help with the responsive design.',
    time: '11:09 AM',
  },
  {
    id: 12,
    sender: 'Me',
    isMe: true,
    content: 'Will do! I might need some input on the navigation for small screens.',
    time: '11:11 AM',
  },
  {
    id: 13,
    sender: 'Sarah Johnson',
    isMe: false,
    avatar: 'https://i.pravatar.cc/150?img=1',
    content: 'Absolutely. We could try a collapsible menu or maybe bottom navigation.',
    time: '11:13 AM',
  },
  {
    id: 14,
    sender: 'Sarah Johnson',
    isMe: false,
    avatar: 'https://i.pravatar.cc/150?img=1',
    content: 'Yes, the design looks great!',
    time: '11:15 AM',
  },
];

export function Chat() {
  const [activeConversation, setActiveConversation] = useState(conversations[0]);
  const [messageInput, setMessageInput] = useState('');

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // In a real app, this would add the message to the conversation
      setMessageInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="p-0 h-full">
      <TitlebarByAnima title="Chat" />
      <div className="h-[calc(100vh-120px)] flex">
        {/* Conversations Sidebar */}
        <div className="w-80 border-r border-[#e4ebf0] bg-white flex flex-col">
          <div className="p-4 border-b border-[#e4ebf0]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blackblack-60" size={16} />
              <Input
                placeholder="Search conversations"
                className="pl-9 bg-surfaceslightgray-10 border-none"
              />
            </div>
          </div>
          <div className="overflow-auto flex-1">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-3 border-b border-[#e4ebf0] cursor-pointer hover:bg-surfaceslightgray-10 transition-colors ${
                  activeConversation.id === conversation.id ? 'bg-surfaceslightgray-10' : ''
                }`}
                onClick={() => setActiveConversation(conversation)}
              >
                <div className="flex items-center">
                  <div className="relative">
                    <Avatar className="w-10 h-10 mr-3">
                      <AvatarImage src={conversation.avatar} alt={conversation.name} />
                      <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span
                      className={`absolute bottom-0 right-2 w-2.5 h-2.5 rounded-full border-2 border-white ${
                        conversation.status === 'online'
                          ? 'bg-actionsuccess'
                          : conversation.status === 'away'
                          ? 'bg-actionwarning'
                          : 'bg-surfaceslightgray-40'
                      }`}
                    ></span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-blackblack-100 truncate">{conversation.name}</h3>
                      <span className="text-xs text-blackblack-60 whitespace-nowrap ml-2">
                        {conversation.time}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-sm text-blackblack-60 truncate">{conversation.lastMessage}</p>
                      {conversation.unread > 0 && (
                        <Badge className="ml-2 bg-light-themeprimaryblue text-white rounded-full min-w-[20px] h-5 flex items-center justify-center text-xs">
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Conversation */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Conversation Header */}
          <div className="px-4 py-3 border-b border-[#e4ebf0] flex justify-between items-center">
            <div className="flex items-center">
              <Avatar className="w-10 h-10 mr-3">
                <AvatarImage src={activeConversation.avatar} alt={activeConversation.name} />
                <AvatarFallback>{activeConversation.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-blackblack-100">{activeConversation.name}</h3>
                <p className="text-xs text-blackblack-60">
                  {activeConversation.status === 'online' ? (
                    <span className="text-actionsuccess">● Online</span>
                  ) : activeConversation.status === 'away' ? (
                    <span className="text-actionwarning">● Away</span>
                  ) : (
                    <span>Last active 2h ago</span>
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Phone size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Video size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MoreVertical size={18} />
              </Button>
            </div>
          </div>

          {/* Message Area */}
          <div className="flex-1 overflow-auto p-4 bg-surfaceslightgray-10">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex max-w-[75%] ${!message.isMe ? 'flex-row' : 'flex-row-reverse'}`}>
                    {!message.isMe && (
                      <Avatar className="w-8 h-8 mt-1 mx-2">
                        <AvatarImage src={message.avatar} alt={message.sender} />
                        <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <div
                        className={`rounded-lg p-3 ${
                          message.isMe
                            ? 'bg-light-themeprimaryblue text-white'
                            : 'bg-white border border-[#e4ebf0]'
                        }`}
                      >
                        <p>{message.content}</p>
                      </div>
                      <div
                        className={`text-xs text-blackblack-60 mt-1 ${
                          message.isMe ? 'text-right' : 'text-left'
                        }`}
                      >
                        {message.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="p-3 border-t border-[#e4ebf0] bg-white">
            <div className="flex items-center bg-surfaceslightgray-10 rounded-lg p-2">
              <Button variant="ghost" size="icon" className="text-blackblack-60">
                <Smile size={20} />
              </Button>
              <textarea
                className="flex-1 bg-transparent border-none focus:outline-none resize-none max-h-20 p-2"
                placeholder="Type a message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
              />
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="text-blackblack-60">
                  <Paperclip size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-blackblack-60">
                  <Image size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-blackblack-60">
                  <Mic size={20} />
                </Button>
                <Button
                  className={`rounded-full w-8 h-8 p-0 ml-1 ${
                    !messageInput.trim()
                      ? 'bg-surfaceslightgray-20 text-blackblack-60'
                      : 'bg-light-themeprimaryblue text-white'
                  }`}
                  disabled={!messageInput.trim()}
                  onClick={handleSendMessage}
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
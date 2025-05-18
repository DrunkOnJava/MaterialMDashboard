import React, { useState } from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "../Chip/sections/TitlebarByAnima/TitlebarByAnima";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Send, Paperclip, Smile, Search, MoreVertical, Phone, Video } from "lucide-react";

export const Chat = (): JSX.Element => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState("");

  const conversations = [
    {
      id: 1,
      name: "John Doe",
      avatar: "/user-1.png",
      lastMessage: "Thanks for the update!",
      time: "10:30 AM",
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "/user-2.png",
      lastMessage: "When will the order ship?",
      time: "9:45 AM",
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: "Customer Support",
      avatar: "/user-3.png",
      lastMessage: "Issue resolved",
      time: "Yesterday",
      unread: 0,
      online: true
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "John Doe",
      content: "Hi, I wanted to ask about the custom candle options",
      time: "10:00 AM",
      isMe: false
    },
    {
      id: 2,
      sender: "You",
      content: "Hello! We offer several customization options including scent, size, and packaging.",
      time: "10:05 AM",
      isMe: true
    },
    {
      id: 3,
      sender: "John Doe",
      content: "Great! Can I get a lavender scent in the large size?",
      time: "10:15 AM",
      isMe: false
    },
    {
      id: 4,
      sender: "You",
      content: "Absolutely! Lavender is one of our most popular scents. The large size is 12oz and burns for approximately 60 hours.",
      time: "10:20 AM",
      isMe: true
    },
    {
      id: 5,
      sender: "John Doe",
      content: "Thanks for the update!",
      time: "10:30 AM",
      isMe: false
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage("");
    }
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-full overflow-hidden bg-surfaceslightgray-10">
      <div className="flex h-screen">
        <SidebarByAnima />
        <div className="flex flex-col flex-1 overflow-hidden">
          <TopBarByAnima />
          <div className="flex flex-col flex-1 px-6 pb-3 overflow-hidden">
            <TitlebarByAnima
              title="Chat"
              description="Communicate with customers and team"
              showRightText={false}
            />
            <div className="flex gap-6 flex-1 overflow-hidden">
              {/* Conversations List */}
              <div className="w-80 flex-shrink-0">
                <Card className="h-full">
                  <CardContent className="p-4">
                    <div className="relative mb-4">
                      <Search className="absolute left-3 top-2.5 h-4 w-4 text-blackblack-60" />
                      <Input
                        type="search"
                        placeholder="Search conversations..."
                        className="pl-10"
                      />
                    </div>
                    <div className="space-y-2">
                      {conversations.map((chat) => (
                        <div
                          key={chat.id}
                          className={`p-3 rounded-lg cursor-pointer hover:bg-surfaceslightgray-10 ${
                            selectedChat === chat.id ? "bg-light-themeprimarylight-blue" : ""
                          }`}
                          onClick={() => setSelectedChat(chat.id)}
                        >
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <Avatar>
                                <AvatarImage src={chat.avatar} />
                                <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              {chat.online && (
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-actionsuccess rounded-full border-2 border-white" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="font-medium">{chat.name}</h4>
                                <span className="text-xs text-blackblack-60">{chat.time}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <p className="text-sm text-blackblack-60 truncate">
                                  {chat.lastMessage}
                                </p>
                                {chat.unread > 0 && (
                                  <Badge className="bg-light-themeprimaryblue text-white ml-2">
                                    {chat.unread}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Chat Messages */}
              <div className="flex-1">
                <Card className="h-full flex flex-col">
                  <div className="border-b border-[#111c2d1a] p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="/user-1.png" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">John Doe</h4>
                          <p className="text-xs text-actionsuccess">Online</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Video className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-4">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
                        >
                          <div className={`max-w-[70%] ${msg.isMe ? "text-right" : ""}`}>
                            <div
                              className={`rounded-lg p-3 ${
                                msg.isMe
                                  ? "bg-light-themeprimaryblue text-white"
                                  : "bg-surfaceslightgray-10"
                              }`}
                            >
                              <p>{msg.content}</p>
                            </div>
                            <p className="text-xs text-blackblack-60 mt-1">{msg.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-[#111c2d1a] p-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Paperclip className="h-4 w-4" />
                      </Button>
                      <Input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1"
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      />
                      <Button variant="ghost" size="icon">
                        <Smile className="h-4 w-4" />
                      </Button>
                      <Button onClick={handleSendMessage}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
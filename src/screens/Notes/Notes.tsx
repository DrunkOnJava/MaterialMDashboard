import React, { useState } from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "../Chip/sections/TitlebarByAnima/TitlebarByAnima";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import { Badge } from "../../components/ui/badge";
import { Plus, Search, Star, Clock, Tag, MoreVertical, Trash2, Edit } from "lucide-react";

export const Notes = (): JSX.Element => {
  const [selectedNote, setSelectedNote] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const notes = [
    {
      id: 1,
      title: "Product Ideas",
      content: "New seasonal candle scents:\n- Autumn Spice\n- Winter Pine\n- Spring Garden\n- Summer Breeze\n\nPackaging updates for eco-friendly materials",
      tags: ["product", "ideas"],
      isFavorite: true,
      lastEdited: "2 hours ago",
      color: "bg-light-themeprimarylight-blue"
    },
    {
      id: 2,
      title: "Marketing Campaign",
      content: "Summer sale campaign:\n- 20% off all candles\n- Free shipping over $50\n- Social media contest\n- Email newsletter",
      tags: ["marketing", "sales"],
      isFavorite: false,
      lastEdited: "Yesterday",
      color: "bg-actionalert-light"
    },
    {
      id: 3,
      title: "Customer Feedback",
      content: "Recent customer reviews:\n- Love the lavender scent\n- Packaging is beautiful\n- Burn time is impressive\n- Would like more size options",
      tags: ["feedback", "customers"],
      isFavorite: true,
      lastEdited: "3 days ago",
      color: "bg-actionsuccess-light"
    },
    {
      id: 4,
      title: "Supplier Contacts",
      content: "Wax Supplier: ABC Company\nContact: John Smith\nPhone: 555-0123\n\nFragrance Oils: XYZ Corp\nContact: Jane Doe\nEmail: jane@xyz.com",
      tags: ["suppliers", "contacts"],
      isFavorite: false,
      lastEdited: "1 week ago",
      color: "bg-light-themesecondarylight-purple"
    }
  ];

  const selectedNoteData = notes.find((note) => note.id === selectedNote);

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      product: "bg-light-themeprimaryblue text-white",
      ideas: "bg-light-themesecondarypurple text-white",
      marketing: "bg-actionalert text-white",
      sales: "bg-actionwarning text-white",
      feedback: "bg-actionsuccess text-white",
      customers: "bg-light-themeprimaryblue text-white",
      suppliers: "bg-blackblack-60 text-white",
      contacts: "bg-blackblack-40 text-white"
    };
    return colors[tag] || "bg-blackblack-20 text-blackblack-80";
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-full overflow-hidden bg-surfaceslightgray-10">
      <div className="flex h-screen">
        <SidebarByAnima />
        <div className="flex flex-col flex-1 overflow-hidden">
          <TopBarByAnima />
          <div className="flex flex-col flex-1 px-6 pb-3 overflow-hidden">
            <TitlebarByAnima
              title="Notes"
              description="Organize your thoughts and ideas"
              showRightText={false}
            />
            <div className="flex gap-6 flex-1 overflow-hidden">
              {/* Notes List */}
              <div className="w-80 flex-shrink-0">
                <Card className="h-full">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-blackblack-60" />
                        <Input
                          type="search"
                          placeholder="Search notes..."
                          className="pl-10"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <Button size="icon">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      {notes
                        .filter((note) =>
                          note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          note.content.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((note) => (
                          <div
                            key={note.id}
                            className={`p-3 rounded-lg cursor-pointer hover:bg-surfaceslightgray-10 ${
                              selectedNote === note.id ? "ring-2 ring-light-themeprimaryblue" : ""
                            }`}
                            onClick={() => setSelectedNote(note.id)}
                          >
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="font-medium flex-1">{note.title}</h4>
                              {note.isFavorite && (
                                <Star className="h-4 w-4 text-actionalert fill-actionalert" />
                              )}
                            </div>
                            <p className="text-sm text-blackblack-60 line-clamp-2 mb-2">
                              {note.content}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                {note.tags.slice(0, 2).map((tag) => (
                                  <Badge
                                    key={tag}
                                    className={`text-xs ${getTagColor(tag)}`}
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <span className="text-xs text-blackblack-60">{note.lastEdited}</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Note Editor */}
              <div className="flex-1">
                {selectedNoteData && (
                  <Card className="h-full flex flex-col">
                    <CardHeader className="border-b border-[#111c2d1a] pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-8 rounded ${selectedNoteData.color}`} />
                          <Input
                            className="text-lg font-medium border-0 p-0 h-auto"
                            value={selectedNoteData.title}
                            placeholder="Note title..."
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon">
                            <Star
                              className={`h-4 w-4 ${
                                selectedNoteData.isFavorite
                                  ? "text-actionalert fill-actionalert"
                                  : ""
                              }`}
                            />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col p-6">
                      <Textarea
                        className="flex-1 resize-none text-base"
                        value={selectedNoteData.content}
                        placeholder="Start writing..."
                      />
                      
                      <div className="mt-4 pt-4 border-t border-[#111c2d1a]">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Tag className="h-4 w-4 text-blackblack-60" />
                            {selectedNoteData.tags.map((tag) => (
                              <Badge
                                key={tag}
                                className={`text-xs ${getTagColor(tag)}`}
                              >
                                {tag}
                              </Badge>
                            ))}
                            <Button variant="ghost" size="sm">
                              Add tag
                            </Button>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-blackblack-60">
                            <Clock className="h-4 w-4" />
                            <span>Last edited {selectedNoteData.lastEdited}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
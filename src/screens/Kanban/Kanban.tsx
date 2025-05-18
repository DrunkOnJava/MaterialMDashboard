import React from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "../Chip/sections/TitlebarByAnima/TitlebarByAnima";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Plus, Clock, CheckCircle, AlertCircle } from "lucide-react";

export const Kanban = (): JSX.Element => {
  const columns = [
    {
      id: "backlog",
      title: "Backlog",
      icon: AlertCircle,
      color: "bg-blackblack-20 text-blackwhite",
      tasks: [
        { id: 1, title: "Design new candle collection", priority: "high" },
        { id: 2, title: "Update product descriptions", priority: "medium" },
        { id: 3, title: "Create social media content", priority: "low" }
      ]
    },
    {
      id: "in-progress",
      title: "In Progress",
      icon: Clock,
      color: "bg-light-themeprimaryblue text-blackwhite",
      tasks: [
        { id: 4, title: "Photograph new products", priority: "high" },
        { id: 5, title: "Process customer orders", priority: "high" }
      ]
    },
    {
      id: "completed",
      title: "Completed",
      icon: CheckCircle,
      color: "bg-actionsuccess text-blackwhite",
      tasks: [
        { id: 6, title: "Ship morning orders", priority: "high" },
        { id: 7, title: "Update inventory counts", priority: "medium" }
      ]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-actionwarning-light text-actionwarning";
      case "medium":
        return "bg-actionalert-light text-actionalert";
      case "low":
        return "bg-surfaceslightgray-10 text-blackblack-60";
      default:
        return "bg-surfaceslightgray-10 text-blackblack-60";
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
              title="Kanban Board"
              description="Manage your tasks and workflow"
              showRightText={false}
            />
            <div className="flex gap-6 flex-1 overflow-x-auto">
              {columns.map((column) => (
                <div key={column.id} className="flex-shrink-0 w-80">
                  <div className={`rounded-t-lg p-3 ${column.color}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <column.icon className="h-5 w-5" />
                        <h3 className="font-medium">{column.title}</h3>
                        <span className="text-sm">{column.tasks.length}</span>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-blackwhite">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="bg-surfaceslightgray-20 rounded-b-lg p-3 min-h-[600px]">
                    <div className="space-y-3">
                      {column.tasks.map((task) => (
                        <Card key={task.id} className="bg-blackwhite cursor-move hover:shadow-light-theme-shadow-medium transition-shadow">
                          <CardContent className="p-4">
                            <h4 className="font-medium mb-2">{task.title}</h4>
                            <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(task.priority)}`}>
                              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                            </span>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { TitlebarByAnima } from '../Buttons/components/Titlebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import TodoManagement from './sections/TodoManagement/TodoManagement';
import { TodoProvider } from './context/TodoContext';

export const Todo = (): JSX.Element => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState('management');

  return (
    <div className="flex flex-col overflow-hidden">
      <TitlebarByAnima title="Todo Application" />
      <main className="flex-1 overflow-auto p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6 bg-white p-1 rounded-lg">
            <TabsTrigger value="management" className="px-6">
              Management
            </TabsTrigger>
            <TabsTrigger value="analytics" className="px-6">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="settings" className="px-6">
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="management">
            <TodoProvider>
              <TodoManagement />
            </TodoProvider>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4">Todo Analytics</h2>
              <p className="text-muted-foreground">
                Analytics dashboard for tracking your productivity and task completion metrics.
                This section will be implemented in the future.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4">Todo Settings</h2>
              <p className="text-muted-foreground">
                Configure your Todo application preferences and notifications.
                This section will be implemented in the future.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Todo;
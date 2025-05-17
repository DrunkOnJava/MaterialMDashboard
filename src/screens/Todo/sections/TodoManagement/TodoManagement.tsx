import React from 'react';
import { TodoList } from '../../TodoList';
import { TodoProvider } from '../../context/TodoContext';
import { Card } from '../../../../components/ui/card';

export const TodoManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6 shadow-md">
        <h2 className="text-xl font-bold mb-4">Todo Management</h2>
        <p className="text-muted-foreground mb-6">
          Manage your tasks efficiently with our intuitive Todo Management system. Create, organize, and track your todos with ease.
        </p>
        
        <TodoProvider>
          <TodoList />
        </TodoProvider>
      </Card>
    </div>
  );
};

export default TodoManagement;
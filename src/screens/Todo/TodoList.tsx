import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ScrollArea } from '../../components/ui/scroll-area';
import { PlusCircle, ClipboardList } from 'lucide-react';
import { TodoItem } from './components/TodoItem';
import { TodoForm } from './components/TodoForm';
import { TodoFilter } from './components/TodoFilter';
import { TodoProvider, useTodo, Todo } from './context/TodoContext';
import { useToast } from '../../hooks/use-toast';

const TodoListContent: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | undefined>(undefined);
  const { todos, filteredTodos, addTodo, updateTodo, deleteTodo, toggleTodo } = useTodo();
  const { toast } = useToast();
  
  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.filter(todo => todo.completed).length;
  
  const handleAddNewTodo = () => {
    setEditingTodo(undefined);
    setIsDialogOpen(true);
  };
  
  const handleEditTodo = (todo: Todo) => {
    setEditingTodo(todo);
    setIsDialogOpen(true);
  };
  
  const handleFormSubmit = (todoData: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => {
    if (editingTodo) {
      const updatedTodo = { ...editingTodo, ...todoData, updatedAt: new Date() };
      updateTodo(updatedTodo);
      toast({
        title: 'Success',
        description: 'Todo updated successfully',
      });
    } else {
      addTodo(todoData);
      toast({
        title: 'Success',
        description: 'New todo added successfully',
      });
    }
  };

  const handleDeleteTodo = (id: string) => {
    deleteTodo(id);
    toast({
      title: 'Success',
      description: 'Todo deleted successfully',
    });
  };
  
  const handleDuplicateTodo = (todo: Todo) => {
    const { id, createdAt, updatedAt, ...todoData } = todo;
    const duplicatedTodo = {
      ...todoData,
      title: `${todo.title} (Copy)`,
      completed: false,
    };
    
    addTodo(duplicatedTodo);
    toast({
      title: 'Success',
      description: 'Todo duplicated successfully',
    });
  };

  return (
    <Card className="w-full h-full">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl flex items-center gap-2">
            <ClipboardList className="h-5 w-5" />
            Todo List
          </CardTitle>
          <Button onClick={handleAddNewTodo}>
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Todo
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <TodoFilter
            activeCount={activeCount}
            completedCount={completedCount}
            totalCount={todos.length}
          />
        </div>
        
        <ScrollArea className="h-[calc(100vh-350px)] pr-4">
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onEdit={handleEditTodo}
                onDelete={handleDeleteTodo}
                onDuplicate={handleDuplicateTodo}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <ClipboardList className="h-10 w-10 text-gray-400 mb-2" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">No todos found</h3>
              <p className="text-gray-500">
                {todos.length === 0
                  ? "You don't have any todos yet. Start by adding one!"
                  : "No todos match your current filters."}
              </p>
              {todos.length > 0 && (
                <Button variant="link" onClick={() => window.location.reload()}>
                  Clear all filters
                </Button>
              )}
            </div>
          )}
        </ScrollArea>
        
        <TodoForm
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          onSubmit={handleFormSubmit}
          initialData={editingTodo}
        />
      </CardContent>
    </Card>
  );
};

export const TodoList: React.FC = () => {
  return (
    <TodoProvider>
      <TodoListContent />
    </TodoProvider>
  );
};
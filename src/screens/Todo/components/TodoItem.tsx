import React, { useState } from 'react';
import { Checkbox } from '../../../components/ui/checkbox';
import { Button } from '../../../components/ui/button';
import { Card } from '../../../components/ui/card';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '../../../components/ui/dropdown-menu';
import { Badge } from '../../../components/ui/badge';
import { 
  AlertTriangle,
  Calendar, 
  Check,
  CheckCircle,
  Clock, 
  Copy,
  Edit, 
  Flag,
  MoreVertical, 
  Star,
  Tag,
  Trash2 
} from 'lucide-react';
import { Todo } from '../context/TodoContext';
import { formatDistanceToNow, isAfter, isBefore, startOfToday } from 'date-fns';
import { useToast } from '../../../hooks/use-toast';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (todo: Todo) => void;
  onDelete: (id: string) => void;
  onDuplicate?: (todo: Todo) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onEdit,
  onDelete,
  onDuplicate,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();
  
  const priorityColors = {
    low: 'bg-blue-100 text-blue-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };
  
  const priorityIcons = {
    low: <Flag className="h-3 w-3 text-blue-800" />,
    medium: <Flag className="h-3 w-3 text-yellow-800" />,
    high: <Flag className="h-3 w-3 text-red-800" />,
  };

  const formatDate = (date: Date) => {
    return formatDistanceToNow(date, { addSuffix: true });
  };
  
  const handleDuplicate = () => {
    if (onDuplicate) {
      onDuplicate(todo);
    } else {
      // If no duplicate handler provided, create a copy of the current todo
      const { id, createdAt, updatedAt, ...todoData } = todo;
      const newTodo = {
        ...todoData,
        title: `${todo.title} (Copy)`,
        completed: false,
      };
      
      // Use clipboard API to copy the title
      navigator.clipboard.writeText(todo.title).then(() => {
        toast({
          title: "Todo duplicated",
          description: "The todo details have been copied to clipboard",
        });
      });
    }
  };
  
  // Check if todo is overdue
  const isOverdue = todo.dueDate && !todo.completed && isBefore(todo.dueDate, startOfToday());

  return (
    <Card 
      className={`p-4 mb-3 transition-all duration-200 ${todo.completed ? 'opacity-70' : ''} 
        ${isHovered ? 'shadow-md' : ''} 
        ${isOverdue ? 'border-red-300' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-3">
        <Checkbox 
          checked={todo.completed} 
          onCheckedChange={() => onToggle(todo.id)}
          className={`mt-1 ${todo.completed ? 'bg-green-500' : ''}`}
        />
        
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className={`text-lg font-medium ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                {todo.title}
              </h3>
              {isOverdue && (
                <AlertTriangle className="h-4 w-4 text-red-500" title="Overdue" />
              )}
            </div>
            
            <div className="flex items-center gap-2">
              <Badge className={priorityColors[todo.priority]}>
                {priorityIcons[todo.priority]}
                <span className="ml-1">{todo.priority}</span>
              </Badge>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => onEdit(todo)}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onToggle(todo.id)}>
                    {todo.completed ? (
                      <>
                        <Check className="mr-2 h-4 w-4 text-gray-500" />
                        Mark as incomplete
                      </>
                    ) : (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        Mark as complete
                      </>
                    )}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleDuplicate}>
                    <Copy className="mr-2 h-4 w-4" />
                    Duplicate
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={() => onDelete(todo.id)}
                    className="text-red-600"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          {todo.description && (
            <p className={`mt-1 text-gray-600 ${todo.completed ? 'line-through' : ''}`}>
              {todo.description}
            </p>
          )}
          
          <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-gray-500">
            {todo.dueDate && (
              <div className={`flex items-center ${isOverdue ? 'text-red-500 font-medium' : ''}`}>
                <Calendar className={`h-3 w-3 mr-1 ${isOverdue ? 'text-red-500' : ''}`} />
                Due {formatDate(todo.dueDate)}
              </div>
            )}
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              Created {formatDate(todo.createdAt)}
            </div>
            {todo.updatedAt && todo.updatedAt.getTime() !== todo.createdAt.getTime() && (
              <div className="flex items-center">
                <Edit className="h-3 w-3 mr-1" />
                Updated {formatDate(todo.updatedAt)}
              </div>
            )}
          </div>
          
          {todo.tags && todo.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              <Tag className="h-3 w-3 mr-1 text-gray-400" />
              {todo.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
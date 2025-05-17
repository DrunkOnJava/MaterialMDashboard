import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  updatedAt: Date;
  dueDate?: Date;
  tags?: string[];
}

interface TodoState {
  todos: Todo[];
  filter: {
    status: 'all' | 'active' | 'completed';
    priority: 'all' | 'low' | 'medium' | 'high';
    search: string;
  };
  sort: {
    field: 'createdAt' | 'updatedAt' | 'dueDate' | 'priority' | 'title';
    direction: 'asc' | 'desc';
  };
}

type TodoAction =
  | { type: 'ADD_TODO'; payload: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'> }
  | { type: 'UPDATE_TODO'; payload: Todo }
  | { type: 'DELETE_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: string }
  | { type: 'SET_FILTER'; payload: Partial<TodoState['filter']> }
  | { type: 'SET_SORT'; payload: Partial<TodoState['sort']> }
  | { type: 'CLEAR_COMPLETED' };

const initialState: TodoState = {
  todos: [],
  filter: {
    status: 'all',
    priority: 'all',
    search: '',
  },
  sort: {
    field: 'createdAt',
    direction: 'desc',
  },
};

// Load state from localStorage
const loadState = (): TodoState => {
  try {
    const savedState = localStorage.getItem('todoState');
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      // Convert string dates back to Date objects
      parsedState.todos = parsedState.todos.map((todo: any) => ({
        ...todo,
        createdAt: new Date(todo.createdAt),
        updatedAt: new Date(todo.updatedAt),
        dueDate: todo.dueDate ? new Date(todo.dueDate) : undefined,
      }));
      return parsedState;
    }
  } catch (error) {
    console.error('Error loading todo state:', error);
  }
  return initialState;
};

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: crypto.randomUUID(),
            ...action.payload,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...action.payload, updatedAt: new Date() }
            : todo
        ),
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed, updatedAt: new Date() }
            : todo
        ),
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: { ...state.filter, ...action.payload },
      };
    case 'SET_SORT':
      return {
        ...state,
        sort: { ...state.sort, ...action.payload },
      };
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };
    default:
      return state;
  }
};

interface TodoContextType extends TodoState {
  addTodo: (todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  setFilter: (filter: Partial<TodoState['filter']>) => void;
  setSort: (sort: Partial<TodoState['sort']>) => void;
  clearCompleted: () => void;
  filteredTodos: Todo[];
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState, loadState);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('todoState', JSON.stringify(state));
  }, [state]);

  // Filter and sort todos based on current settings
  const filteredTodos = state.todos
    .filter((todo) => {
      // Filter by status
      if (state.filter.status === 'active' && todo.completed) return false;
      if (state.filter.status === 'completed' && !todo.completed) return false;

      // Filter by priority
      if (state.filter.priority !== 'all' && todo.priority !== state.filter.priority) return false;

      // Filter by search term
      if (state.filter.search && !todo.title.toLowerCase().includes(state.filter.search.toLowerCase())) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      const { field, direction } = state.sort;
      
      // Handle different field types for sorting
      if (field === 'priority') {
        // Convert priority to numeric value for sorting
        const priorityValues = { high: 3, medium: 2, low: 1 };
        const aValue = priorityValues[a.priority];
        const bValue = priorityValues[b.priority];
        return direction === 'asc' ? aValue - bValue : bValue - aValue;
      } 
      
      // Handle date fields
      if (field === 'createdAt' || field === 'updatedAt') {
        const aValue = a[field].getTime();
        const bValue = b[field].getTime();
        return direction === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      // Handle due date (which may be undefined)
      if (field === 'dueDate') {
        // If either date is undefined, handle it appropriately
        if (!a.dueDate && !b.dueDate) return 0;
        if (!a.dueDate) return direction === 'asc' ? -1 : 1;
        if (!b.dueDate) return direction === 'asc' ? 1 : -1;
        
        const aValue = a.dueDate.getTime();
        const bValue = b.dueDate.getTime();
        return direction === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      // Handle title (string comparison)
      if (field === 'title') {
        const aValue = a.title.toLowerCase();
        const bValue = b.title.toLowerCase();
        if (direction === 'asc') {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      }
      
      // Default sorting by creation date if field is not recognized
      return direction === 'asc' 
        ? a.createdAt.getTime() - b.createdAt.getTime() 
        : b.createdAt.getTime() - a.createdAt.getTime();
    });

  const value: TodoContextType = {
    ...state,
    filteredTodos,
    addTodo: (todo) => dispatch({ type: 'ADD_TODO', payload: todo }),
    updateTodo: (todo) => dispatch({ type: 'UPDATE_TODO', payload: todo }),
    deleteTodo: (id) => dispatch({ type: 'DELETE_TODO', payload: id }),
    toggleTodo: (id) => dispatch({ type: 'TOGGLE_TODO', payload: id }),
    setFilter: (filter) => dispatch({ type: 'SET_FILTER', payload: filter }),
    setSort: (sort) => dispatch({ type: 'SET_SORT', payload: sort }),
    clearCompleted: () => dispatch({ type: 'CLEAR_COMPLETED' }),
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodo = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};
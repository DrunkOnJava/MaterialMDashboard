import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '../../../components/ui/popover';
import { RadioGroup, RadioGroupItem } from '../../../components/ui/radio-group';
import { Label } from '../../../components/ui/label';
import { 
  ArrowDownAZ,
  ArrowDownUp,
  ArrowUpAZ,
  ArrowUpDown,
  Check, 
  Filter, 
  Search, 
  SortAsc,
  SortDesc,
  X 
} from 'lucide-react';
import { Todo, useTodo } from '../context/TodoContext';
import { useToast } from '../../../hooks/use-toast';

interface TodoFilterProps {
  activeCount: number;
  completedCount: number;
  totalCount: number;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({
  activeCount,
  completedCount,
  totalCount,
}) => {
  const { filter, setFilter, sort, setSort, clearCompleted } = useTodo();
  const { toast } = useToast();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ search: e.target.value });
  };

  const handleStatusChange = (value: 'all' | 'active' | 'completed') => {
    setFilter({ status: value });
  };

  const handlePriorityChange = (value: 'all' | 'low' | 'medium' | 'high') => {
    setFilter({ priority: value });
  };

  const handleClearSearch = () => {
    setFilter({ search: '' });
  };

  const handleClearPriority = () => {
    setFilter({ priority: 'all' });
  };

  const handleClearCompleted = () => {
    clearCompleted();
    toast({
      title: 'Success',
      description: 'Completed todos have been cleared',
    });
  };
  
  const handleSortFieldChange = (field: 'createdAt' | 'updatedAt' | 'dueDate' | 'priority' | 'title') => {
    setSort({ field });
    toast({
      title: 'Sorted',
      description: `Todos are now sorted by ${field}`,
    });
  };
  
  const handleSortDirectionChange = () => {
    const newDirection = sort.direction === 'asc' ? 'desc' : 'asc';
    setSort({ direction: newDirection });
    toast({
      title: 'Sort Direction Changed',
      description: `Todos are now sorted in ${newDirection === 'asc' ? 'ascending' : 'descending'} order`,
    });
  };
  
  const getSortFieldLabel = (field: string): string => {
    switch (field) {
      case 'createdAt': return 'Creation Date';
      case 'updatedAt': return 'Last Updated';
      case 'dueDate': return 'Due Date';
      case 'priority': return 'Priority';
      case 'title': return 'Title';
      default: return field;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search todos"
            className="pl-8"
            value={filter.search}
            onChange={handleSearchChange}
          />
          {filter.search && (
            <button
              className="absolute right-2 top-2.5 text-gray-400 hover:text-gray-600"
              onClick={handleClearSearch}
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                Priority
                {filter.priority !== 'all' && (
                  <Badge className="ml-1 px-1" variant="secondary">
                    1
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-3">
              <div className="space-y-2">
                <div className="font-medium">Priority Filter</div>
                <RadioGroup
                  value={filter.priority}
                  onValueChange={(value) =>
                    handlePriorityChange(value as 'all' | 'low' | 'medium' | 'high')
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="all-priority" />
                    <Label htmlFor="all-priority">All</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="low" id="low-priority" />
                    <Label htmlFor="low-priority" className="text-blue-600">Low</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium-priority" />
                    <Label htmlFor="medium-priority" className="text-yellow-600">Medium</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="high" id="high-priority" />
                    <Label htmlFor="high-priority" className="text-red-600">High</Label>
                  </div>
                </RadioGroup>
                
                {filter.priority !== 'all' && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2 text-xs w-full"
                    onClick={handleClearPriority}
                  >
                    Clear Filter
                  </Button>
                )}
              </div>
            </PopoverContent>
          </Popover>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                {sort.direction === 'asc' ? (
                  <SortAsc className="h-4 w-4" />
                ) : (
                  <SortDesc className="h-4 w-4" />
                )}
                Sort
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-3">
              <div className="space-y-3">
                <div className="font-medium">Sort Options</div>
                
                {/* Sort Direction Toggle */}
                <div className="flex items-center justify-between">
                  <Label>Direction</Label>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleSortDirectionChange}
                    className="flex items-center gap-1"
                  >
                    {sort.direction === 'asc' ? (
                      <>
                        <ArrowUpAZ className="h-4 w-4 mr-1" />
                        Ascending
                      </>
                    ) : (
                      <>
                        <ArrowDownAZ className="h-4 w-4 mr-1" />
                        Descending
                      </>
                    )}
                  </Button>
                </div>
                
                {/* Sort Field Selection */}
                <div className="space-y-1">
                  <Label>Sort By</Label>
                  <RadioGroup
                    value={sort.field}
                    onValueChange={(value) =>
                      handleSortFieldChange(value as 'createdAt' | 'updatedAt' | 'dueDate' | 'priority' | 'title')
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="createdAt" id="sort-created" />
                      <Label htmlFor="sort-created">Creation Date</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="updatedAt" id="sort-updated" />
                      <Label htmlFor="sort-updated">Last Updated</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dueDate" id="sort-due" />
                      <Label htmlFor="sort-due">Due Date</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="priority" id="sort-priority" />
                      <Label htmlFor="sort-priority">Priority</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="title" id="sort-title" />
                      <Label htmlFor="sort-title">Title</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Tabs
          defaultValue="all"
          value={filter.status}
          onValueChange={(value) => 
            handleStatusChange(value as 'all' | 'active' | 'completed')
          }
          className="w-auto"
        >
          <TabsList>
            <TabsTrigger value="all" className="px-4">
              All
              <Badge className="ml-2" variant="secondary">
                {totalCount}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="active" className="px-4">
              Active
              <Badge className="ml-2" variant="secondary">
                {activeCount}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="completed" className="px-4">
              Completed
              <Badge className="ml-2" variant="secondary">
                {completedCount}
              </Badge>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {completedCount > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleClearCompleted}
            className="text-gray-500"
          >
            <X className="mr-1 h-4 w-4" />
            Clear Completed
          </Button>
        )}
      </div>

      {/* Active filters summary */}
      {(filter.search || filter.priority !== 'all' || filter.status !== 'all' || sort.field !== 'createdAt' || sort.direction !== 'desc') && (
        <div className="flex flex-wrap gap-2 py-2">
          <div className="text-sm text-gray-500 mr-2 mt-0.5">Active filters/sort:</div>
          
          {filter.search && (
            <Badge variant="outline" className="flex items-center gap-1">
              Search: {filter.search}
              <button onClick={handleClearSearch} className="ml-1 focus:outline-none">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          
          {filter.priority !== 'all' && (
            <Badge variant="outline" className="flex items-center gap-1">
              Priority: {filter.priority}
              <button onClick={handleClearPriority} className="ml-1 focus:outline-none">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          
          {filter.status !== 'all' && (
            <Badge variant="outline" className="flex items-center gap-1">
              Status: {filter.status}
              <button 
                onClick={() => handleStatusChange('all')} 
                className="ml-1 focus:outline-none"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          
          {/* Sort information */}
          {(sort.field !== 'createdAt' || sort.direction !== 'desc') && (
            <Badge variant="outline" className="flex items-center gap-1">
              Sorted by: {getSortFieldLabel(sort.field)} ({sort.direction === 'asc' ? 'ascending' : 'descending'})
              <button 
                onClick={() => setSort({ field: 'createdAt', direction: 'desc' })} 
                className="ml-1 focus:outline-none"
                title="Reset to default sort"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};
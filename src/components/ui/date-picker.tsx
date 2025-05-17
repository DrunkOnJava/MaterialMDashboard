import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from './button';
import { Calendar } from './calendar';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

export interface DatePickerProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  displayFormat?: string;
}

export function DatePicker({
  date,
  setDate,
  placeholder = 'Select date',
  className,
  disabled = false,
  displayFormat = 'PPP',
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-full justify-start text-left font-normal',
            !date && 'text-blackblack-60',
            className
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, displayFormat) : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  );
}

export interface DateRangePickerProps {
  dateRange: { from: Date | undefined; to: Date | undefined };
  setDateRange: (range: { from: Date | undefined; to: Date | undefined }) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  displayFormat?: string;
}

export function DateRangePicker({
  dateRange,
  setDateRange,
  placeholder = 'Select date range',
  className,
  disabled = false,
  displayFormat = 'MMM d, yyyy',
}: DateRangePickerProps) {
  const { from, to } = dateRange;

  const handleSelect = (selectedDate: Date | undefined) => {
    if (!selectedDate) return;

    if (!from) {
      setDateRange({ from: selectedDate, to: undefined });
    } else if (!to && selectedDate >= from) {
      setDateRange({ from, to: selectedDate });
    } else {
      setDateRange({ from: selectedDate, to: undefined });
    }
  };

  const displayText = () => {
    if (from && to) {
      return `${format(from, displayFormat)} - ${format(to, displayFormat)}`;
    }
    if (from) {
      return `${format(from, displayFormat)} - Select end date`;
    }
    return placeholder;
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-full justify-start text-left font-normal',
            !from && !to && 'text-blackblack-60',
            className
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          <span>{displayText()}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={{ from, to }}
          onSelect={selected => {
            if (!selected?.from || !selected?.to) {
              // Handle partial selection
              if (selected?.from) {
                setDateRange({ from: selected.from, to: undefined });
              }
              return;
            }
            setDateRange({ from: selected.from, to: selected.to });
          }}
          numberOfMonths={2}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

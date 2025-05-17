import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker, DropdownProps } from 'react-day-picker';
import { format } from 'date-fns';

import { cn } from '../../lib/utils';
import { Button } from './button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  const [year, setYear] = React.useState(new Date().getFullYear());
  const [month, setMonth] = React.useState<Date>(new Date());

  // Handle when the month is updated from the DayPicker
  React.useEffect(() => {
    if (props.month) {
      setMonth(props.month);
      setYear(props.month.getFullYear());
    }
  }, [props.month]);

  // Handle navigation from custom months dropdown
  const handleMonthChange = (newMonth: string) => {
    const newDate = new Date(year, parseInt(newMonth, 10), 1);
    setMonth(newDate);
    props.onMonthChange?.(newDate);
  };

  // Handle navigation from custom years dropdown
  const handleYearChange = (newYear: string) => {
    const newDate = new Date(parseInt(newYear, 10), month.getMonth(), 1);
    setYear(parseInt(newYear, 10));
    setMonth(newDate);
    props.onMonthChange?.(newDate);
  };

  // Custom navigation wrapper
  function CustomCaption({ displayMonth }: { displayMonth: Date }) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    // Generate years for the dropdown (current year ± 10 years)
    const currentYear = displayMonth.getFullYear();
    const yearStart = currentYear - 10;
    const yearEnd = currentYear + 10;
    const years = Array.from({ length: yearEnd - yearStart + 1 }, (_, i) => yearStart + i);

    return (
      <div className="flex items-center justify-between px-2 py-2">
        <div className="flex gap-1">
          <Select value={displayMonth.getMonth().toString()} onValueChange={handleMonthChange}>
            <SelectTrigger className="h-7 w-[110px] text-xs font-normal">
              <SelectValue placeholder={format(displayMonth, 'MMMM')} />
            </SelectTrigger>
            <SelectContent>
              {months.map((month, index) => (
                <SelectItem key={month} value={index.toString()} className="text-xs">
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={displayMonth.getFullYear().toString()} onValueChange={handleYearChange}>
            <SelectTrigger className="h-7 w-[70px] text-xs font-normal">
              <SelectValue placeholder={format(displayMonth, 'yyyy')} />
            </SelectTrigger>
            <SelectContent>
              {years.map(year => (
                <SelectItem key={year} value={year.toString()} className="text-xs">
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-1">
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7 bg-transparent p-0 text-blackblack-80 hover:text-blackblack-100"
            onClick={() => {
              const prevMonth = new Date(displayMonth);
              prevMonth.setMonth(prevMonth.getMonth() - 1);
              props.onMonthChange?.(prevMonth);
              setMonth(prevMonth);
              setYear(prevMonth.getFullYear());
            }}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous month</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7 bg-transparent p-0 text-blackblack-80 hover:text-blackblack-100"
            onClick={() => {
              const nextMonth = new Date(displayMonth);
              nextMonth.setMonth(nextMonth.getMonth() + 1);
              props.onMonthChange?.(nextMonth);
              setMonth(nextMonth);
              setYear(nextMonth.getFullYear());
            }}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next month</span>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <DayPicker
      month={month}
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium hidden',
        nav: 'space-x-1 flex items-center',
        nav_button: cn('h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell:
          'text-blackblack-60 rounded-md w-9 font-normal text-xs flex items-center justify-center',
        row: 'flex w-full mt-2',
        cell: 'h-9 w-9 text-center text-sm relative rounded-md focus-within:relative focus-within:z-20 [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50',
        day: cn(
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-md hover:bg-light-themeprimarylight-blue hover:text-light-themeprimaryblue focus:bg-light-themeprimarylight-blue focus:text-light-themeprimaryblue'
        ),
        day_range_end: 'day-range-end',
        day_selected:
          'bg-light-themeprimaryblue text-white hover:bg-light-themeprimaryblue hover:text-white focus:bg-light-themeprimaryblue focus:text-white',
        day_today: 'bg-blackblack-10 text-blackblack-100',
        day_outside: 'day-outside text-blackblack-40 opacity-50 aria-selected:bg-accent/50',
        day_disabled: 'text-blackblack-40 opacity-50',
        day_range_middle:
          'aria-selected:bg-light-themeprimarylight-blue aria-selected:text-light-themeprimaryblue',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Caption: CustomCaption as any,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };

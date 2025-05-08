import React, { useState } from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "../Buttons/components/Titlebar";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { DatePicker, DateRangePicker } from "../../components/ui/date-picker";
import { format, addDays } from "date-fns";
import { Label } from "../../components/ui/label";
import { Switch } from "../../components/ui/switch";

export const DatePickerDemo = (): JSX.Element => {
  // State for single date pickers
  const [date1, setDate1] = useState<Date>();
  const [date2, setDate2] = useState<Date>(new Date());
  const [date3, setDate3] = useState<Date>();
  const [date4, setDate4] = useState<Date>();
  const [date5, setDate5] = useState<Date>();
  
  // State for date range pickers
  const [dateRange1, setDateRange1] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined
  });
  
  const [dateRange2, setDateRange2] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: new Date(),
    to: addDays(new Date(), 7)
  });
  
  // State for disabled pickers
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Date Picker" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            {/* Basic datepicker */}
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Basic Date Picker
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="max-w-sm">
                  <Label className="block mb-2 text-blackblack-80">Select a date</Label>
                  <DatePicker 
                    date={date1} 
                    setDate={setDate1} 
                    placeholder="Pick a date"
                  />
                  {date1 && (
                    <p className="mt-2 text-sm text-blackblack-60">
                      Selected date: {format(date1, "PPP")}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Date picker with preselected date */}
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Date Picker with Default Value
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="max-w-sm">
                  <Label className="block mb-2 text-blackblack-80">Current date (default value)</Label>
                  <DatePicker 
                    date={date2} 
                    setDate={setDate2} 
                  />
                  <p className="mt-2 text-sm text-blackblack-60">
                    Selected date: {format(date2, "PPP")}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Date picker with custom format */}
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Date Picker with Custom Format
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="max-w-sm">
                  <Label className="block mb-2 text-blackblack-80">Select a date (MM/dd/yyyy format)</Label>
                  <DatePicker 
                    date={date3} 
                    setDate={setDate3}
                    displayFormat="MM/dd/yyyy"
                  />
                  {date3 && (
                    <p className="mt-2 text-sm text-blackblack-60">
                      Selected date: {format(date3, "MM/dd/yyyy")}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Disabled date picker */}
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Disabled Date Picker
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Label htmlFor="toggle-disabled" className="text-blackblack-80">Toggle disabled state</Label>
                  <Switch 
                    id="toggle-disabled" 
                    checked={isDisabled} 
                    onCheckedChange={setIsDisabled} 
                  />
                </div>
                <div className="max-w-sm">
                  <Label className="block mb-2 text-blackblack-80">Select a date (disabled: {isDisabled ? "yes" : "no"})</Label>
                  <DatePicker 
                    date={date4} 
                    setDate={setDate4}
                    disabled={isDisabled}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Date range picker */}
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Date Range Picker
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="max-w-sm">
                  <Label className="block mb-2 text-blackblack-80">Select a date range</Label>
                  <DateRangePicker 
                    dateRange={dateRange1} 
                    setDateRange={setDateRange1} 
                  />
                  {dateRange1.from && dateRange1.to && (
                    <p className="mt-2 text-sm text-blackblack-60">
                      Selected range: {format(dateRange1.from, "PPP")} to {format(dateRange1.to, "PPP")}
                      <br />
                      ({Math.round((dateRange1.to.getTime() - dateRange1.from.getTime()) / (1000 * 60 * 60 * 24))} days)
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Date range picker with preselected range */}
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Date Range Picker with Default Range
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="max-w-sm">
                  <Label className="block mb-2 text-blackblack-80">Default range (today to one week later)</Label>
                  <DateRangePicker 
                    dateRange={dateRange2} 
                    setDateRange={setDateRange2} 
                  />
                  <p className="mt-2 text-sm text-blackblack-60">
                    Selected range: {format(dateRange2.from as Date, "PPP")} to {format(dateRange2.to as Date, "PPP")}
                    <br />
                    ({Math.round(((dateRange2.to as Date).getTime() - (dateRange2.from as Date).getTime()) / (1000 * 60 * 60 * 24))} days)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Multiple variants in a grid */}
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Date Picker Implementation Example
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Usage Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`import { DatePicker, DateRangePicker } from "../../components/ui/date-picker";
import { useState } from "react";

// Single date picker
const [date, setDate] = useState<Date>();

// Date range picker
const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
  from: undefined,
  to: undefined
});

// Usage in JSX
<DatePicker 
  date={date} 
  setDate={setDate} 
  placeholder="Select date"
  disabled={false}
  displayFormat="PPP"
/>

<DateRangePicker 
  dateRange={dateRange} 
  setDateRange={setDateRange} 
  placeholder="Select date range"
  disabled={false}
  displayFormat="MMM d, yyyy"  
/>`}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};
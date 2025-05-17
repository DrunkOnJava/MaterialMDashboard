import React, { useState } from 'react';
import { TitlebarByAnima } from '../../Buttons/components/Titlebar';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Slider } from '../../../components/ui/slider';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';

export const SliderDemo = (): JSX.Element => {
  // Basic slider states
  const [basicValue, setBasicValue] = useState<number>(50);
  const [rangeValue, setRangeValue] = useState<number[]>([25, 75]);

  // Advanced slider states
  const [customValue, setCustomValue] = useState<number>(30);
  const [steppedValue, setSteppedValue] = useState<number>(40);
  const [tooltipValue, setTooltipValue] = useState<number>(60);
  const [markedValue, setMarkedValue] = useState<number>(50);
  const [keyboardValue, setKeyboardValue] = useState<number>(70);
  const [disabledValue] = useState<number>(45);

  // Price range slider
  const [priceRange, setPriceRange] = useState<number[]>([200, 800]);

  // Volume slider
  const [volume, setVolume] = useState<number>(75);

  // Real-time slider
  const [temperature, setTemperature] = useState<number>(22);

  // Accessibility example
  const [accessibilityValue, setAccessibilityValue] = useState<number>(50);

  // Format currency for tooltips
  const formatCurrency = (value: number) => {
    return `${value.toFixed(0)}`;
  };

  // Format temperature for tooltips
  const formatTemperature = (value: number) => {
    return `${value.toFixed(1)}°C`;
  };

  return (
    <>
      <TitlebarByAnima title="Slider Components" />
      <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            {/* Basic Sliders */}
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Basic Sliders
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Single Thumb Slider */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Single Thumb Slider</h3>
                    <div className="space-y-5">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-blackblack-60">Default</span>
                          <span className="text-sm font-medium text-blackblack-60">
                            {basicValue}
                          </span>
                        </div>
                        <Slider
                          value={[basicValue]}
                          onValueChange={value => setBasicValue(value[0])}
                          className="py-4"
                        />
                        <div className="flex gap-2 mt-2">
                          <Button size="sm" variant="outline" onClick={() => setBasicValue(0)}>
                            Reset
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => setBasicValue(100)}>
                            Max
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Range Slider */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Range Slider</h3>
                    <div className="space-y-5">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-blackblack-60">
                            Min: {rangeValue[0]}
                          </span>
                          <span className="text-sm font-medium text-blackblack-60">
                            Max: {rangeValue[1]}
                          </span>
                        </div>
                        <Slider value={rangeValue} onValueChange={setRangeValue} className="py-4" />
                        <div className="flex gap-2 mt-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setRangeValue([0, 100])}
                          >
                            Full Range
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setRangeValue([40, 60])}
                          >
                            Mid Range
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Sliders */}
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Advanced Slider Features
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Custom Min/Max Values */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Custom Min/Max Values</h3>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-blackblack-60">
                          Value: {customValue}
                        </span>
                        <span className="text-sm font-medium text-blackblack-60">
                          Range: -50 to 50
                        </span>
                      </div>
                      <Slider
                        value={[customValue]}
                        onValueChange={value => setCustomValue(value[0])}
                        min={-50}
                        max={50}
                        className="py-4"
                      />
                    </div>
                  </div>

                  {/* Step Functionality */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Step Functionality</h3>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-blackblack-60">
                          Value: {steppedValue}
                        </span>
                        <span className="text-sm font-medium text-blackblack-60">Step: 10</span>
                      </div>
                      <Slider
                        value={[steppedValue]}
                        onValueChange={value => setSteppedValue(value[0])}
                        step={10}
                        className="py-4"
                      />
                    </div>
                  </div>

                  {/* Tooltip Display */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Tooltip Display</h3>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-blackblack-60">
                          Value: {tooltipValue}
                        </span>
                      </div>
                      <Slider
                        value={[tooltipValue]}
                        onValueChange={value => setTooltipValue(value[0])}
                        showTooltip={true}
                        className="py-4"
                      />
                    </div>
                  </div>

                  {/* Marks/Ticks */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Marks/Ticks</h3>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-blackblack-60">
                          Value: {markedValue}
                        </span>
                      </div>
                      <Slider
                        value={[markedValue]}
                        onValueChange={value => setMarkedValue(value[0])}
                        marks={[
                          { value: 0, label: '0%' },
                          { value: 25, label: '25%' },
                          { value: 50, label: '50%' },
                          { value: 75, label: '75%' },
                          { value: 100, label: '100%' },
                        ]}
                        className="py-8"
                      />
                    </div>
                  </div>

                  {/* Keyboard Navigation */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Keyboard Navigation</h3>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-blackblack-60">
                          Value: {keyboardValue}
                        </span>
                        <span className="text-sm font-medium text-blackblack-60">
                          Navigate with ←→ keys
                        </span>
                      </div>
                      <Slider
                        value={[keyboardValue]}
                        onValueChange={value => setKeyboardValue(value[0])}
                        className="py-4"
                        aria-label="Keyboard navigable slider"
                      />
                      <p className="text-xs text-blackblack-60 mt-2">
                        Click on the slider and use arrow keys to adjust the value
                      </p>
                    </div>
                  </div>

                  {/* Disabled State */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Disabled State</h3>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-blackblack-60">
                          Value: {disabledValue}
                        </span>
                      </div>
                      <Slider value={[disabledValue]} disabled className="py-4" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Real-World Examples */}
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Real-World Slider Examples
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Price Range Selector */}
                  <div className="border border-[#111c2d1a] rounded-lg p-4">
                    <h3 className="text-lg font-medium mb-4">Price Range Selector</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-blackblack-60">Price Range</span>
                        <span className="text-sm font-medium text-blackblack-60">
                          ${priceRange[0]} - ${priceRange[1]}
                        </span>
                      </div>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        min={0}
                        max={1000}
                        step={10}
                        showTooltip={true}
                        formatTooltip={formatCurrency}
                        className="py-4"
                      />
                      <div className="flex gap-4 mt-4">
                        <div className="w-1/2">
                          <Label htmlFor="min-price" className="text-sm text-blackblack-60">
                            Min Price
                          </Label>
                          <Input
                            id="min-price"
                            type="number"
                            value={priceRange[0]}
                            onChange={e => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                            min={0}
                            max={priceRange[1]}
                            className="mt-1"
                          />
                        </div>
                        <div className="w-1/2">
                          <Label htmlFor="max-price" className="text-sm text-blackblack-60">
                            Max Price
                          </Label>
                          <Input
                            id="max-price"
                            type="number"
                            value={priceRange[1]}
                            onChange={e => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                            min={priceRange[0]}
                            max={1000}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Volume Control */}
                  <div className="border border-[#111c2d1a] rounded-lg p-4">
                    <h3 className="text-lg font-medium mb-4">Volume Control</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-blackblack-60">Volume Level</span>
                        <span className="text-sm font-medium text-blackblack-60">{volume}%</span>
                      </div>
                      <Slider
                        value={[volume]}
                        onValueChange={value => setVolume(value[0])}
                        className="py-4"
                      />
                      <div className="flex items-center justify-between">
                        <Button variant="outline" size="sm" onClick={() => setVolume(0)}>
                          Mute
                        </Button>
                        <div className="w-1/3">
                          <Input
                            type="number"
                            value={volume}
                            onChange={e => setVolume(parseInt(e.target.value))}
                            min={0}
                            max={100}
                          />
                        </div>
                        <Button variant="outline" size="sm" onClick={() => setVolume(100)}>
                          Max
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Temperature Control */}
                  <div className="border border-[#111c2d1a] rounded-lg p-4">
                    <h3 className="text-lg font-medium mb-4">Temperature Control</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-blackblack-60">Temperature</span>
                        <span className="text-sm font-medium text-blackblack-60">
                          {temperature.toFixed(1)}°C
                        </span>
                      </div>
                      <Slider
                        value={[temperature]}
                        onValueChange={value => setTemperature(value[0])}
                        min={15}
                        max={30}
                        step={0.1}
                        showTooltip={true}
                        formatTooltip={formatTemperature}
                        marks={[
                          { value: 15, label: '15°C' },
                          { value: 20, label: '20°C' },
                          { value: 25, label: '25°C' },
                          { value: 30, label: '30°C' },
                        ]}
                        className="py-8"
                      />
                      <div className="flex items-center justify-between">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setTemperature(Math.max(15, temperature - 0.5))}
                        >
                          -0.5°C
                        </Button>
                        <span className="text-lg font-medium">{temperature.toFixed(1)}°C</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setTemperature(Math.min(30, temperature + 0.5))}
                        >
                          +0.5°C
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Accessibility Example */}
                  <div className="border border-[#111c2d1a] rounded-lg p-4">
                    <h3 className="text-lg font-medium mb-4">Accessible Slider</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-blackblack-60">Brightness</span>
                        <span className="text-sm font-medium text-blackblack-60">
                          {accessibilityValue}%
                        </span>
                      </div>
                      <Slider
                        value={[accessibilityValue]}
                        onValueChange={value => setAccessibilityValue(value[0])}
                        aria-label="Screen brightness"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={accessibilityValue}
                        className="py-4"
                      />
                      <p className="text-xs text-blackblack-60">
                        This slider includes ARIA attributes for screen readers and can be operated
                        with keyboard controls (Arrow keys, Home/End, Page Up/Down).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Implementation Guide */}
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Implementation Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Basic Usage</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// Basic single thumb slider
import { Slider } from "../components/ui/slider";

// Component state
const [value, setValue] = useState<number>(50);

// Render slider
<Slider 
  value={[value]} 
  onValueChange={(newValue) => setValue(newValue[0])}
/>`}
                    </code>
                  </pre>

                  <h3 className="text-lg font-medium mt-6">Range Slider</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// Range slider with two thumbs
const [range, setRange] = useState<number[]>([25, 75]);

<Slider 
  value={range} 
  onValueChange={setRange}
/>`}
                    </code>
                  </pre>

                  <h3 className="text-lg font-medium mt-6">Advanced Features</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// Slider with custom min/max values, steps, tooltips, and marks
<Slider 
  value={[value]} 
  onValueChange={(newValue) => setValue(newValue[0])}
  min={-50}              // Custom minimum value
  max={100}              // Custom maximum value
  step={5}               // Step increment
  showTooltip={true}     // Show tooltip on hover/drag
  formatTooltip={(v) => \`$\${v}\`}  // Custom tooltip formatter
  marks={[                // Display marks/ticks
    { value: 0, label: "0%" },
    { value: 50, label: "50%" },
    { value: 100, label: "100%" }
  ]}
  // Accessibility attributes
  aria-label="Price slider"
  aria-valuemin={-50}
  aria-valuemax={100}
  aria-valuenow={value}
/>`}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
      </main>
    </>
  );
};

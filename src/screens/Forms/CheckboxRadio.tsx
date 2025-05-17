import React from 'react';
import { SidebarByAnima } from '../Chip/sections/SidebarByAnima';
import { TopBarByAnima } from '../Chip/sections/TopBarByAnima';
import { TitlebarByAnima } from '../Buttons/components/Titlebar';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';
import { Checkbox } from '../../components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';

export const CheckboxRadio = (): JSX.Element => {
  const [selectedFruits, setSelectedFruits] = React.useState<string[]>([]);

  const handleFruitChange = (fruit: string) => {
    setSelectedFruits(prev =>
      prev.includes(fruit) ? prev.filter(item => item !== fruit) : [...prev, fruit]
    );
  };

  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Checkbox & Radio" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Checkbox Elements
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Basic Checkbox</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="default-checkbox" />
                        <Label htmlFor="default-checkbox">Default checkbox</Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="checked-checkbox" defaultChecked />
                        <Label htmlFor="checked-checkbox">Checked checkbox</Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="disabled-checkbox" disabled />
                        <Label htmlFor="disabled-checkbox" className="text-blackblack-60">
                          Disabled checkbox
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="disabled-checked-checkbox" disabled defaultChecked />
                        <Label htmlFor="disabled-checked-checkbox" className="text-blackblack-60">
                          Disabled checked
                        </Label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Checkbox Group</h3>
                    <div className="space-y-3">
                      <Label className="text-base">Select your favorite fruits:</Label>
                      <div className="space-y-2">
                        {['Apple', 'Banana', 'Orange', 'Strawberry'].map(fruit => (
                          <div key={fruit} className="flex items-center space-x-2">
                            <Checkbox
                              id={`fruit-${fruit.toLowerCase()}`}
                              checked={selectedFruits.includes(fruit)}
                              onCheckedChange={() => handleFruitChange(fruit)}
                            />
                            <Label htmlFor={`fruit-${fruit.toLowerCase()}`}>{fruit}</Label>
                          </div>
                        ))}
                      </div>
                      {selectedFruits.length > 0 && (
                        <p className="text-sm text-blackblack-60 mt-2">
                          You selected: {selectedFruits.join(', ')}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Custom Checkbox Styles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border border-[#111c2d1a] rounded-lg p-4 hover:bg-surfaceslightgray-10 cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <Checkbox id="plan-basic" className="mt-1" />
                        <div>
                          <Label htmlFor="plan-basic" className="font-medium text-blackblack-100">
                            Basic Plan
                          </Label>
                          <p className="text-sm text-blackblack-60 mt-1">5GB storage, 1 user</p>
                          <p className="text-light-themeprimaryblue font-medium mt-2">$10/month</p>
                        </div>
                      </div>
                    </div>

                    <div className="border border-[#111c2d1a] rounded-lg p-4 hover:bg-surfaceslightgray-10 cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <Checkbox id="plan-pro" className="mt-1" />
                        <div>
                          <Label htmlFor="plan-pro" className="font-medium text-blackblack-100">
                            Pro Plan
                          </Label>
                          <p className="text-sm text-blackblack-60 mt-1">15GB storage, 5 users</p>
                          <p className="text-light-themeprimaryblue font-medium mt-2">$25/month</p>
                        </div>
                      </div>
                    </div>

                    <div className="border border-[#111c2d1a] rounded-lg p-4 hover:bg-surfaceslightgray-10 cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <Checkbox id="plan-enterprise" className="mt-1" />
                        <div>
                          <Label
                            htmlFor="plan-enterprise"
                            className="font-medium text-blackblack-100"
                          >
                            Enterprise Plan
                          </Label>
                          <p className="text-sm text-blackblack-60 mt-1">
                            Unlimited storage, unlimited users
                          </p>
                          <p className="text-light-themeprimaryblue font-medium mt-2">$50/month</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Radio Button Elements
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Basic Radio Buttons</h3>
                    <RadioGroup defaultValue="option-1">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-1" id="option-1" />
                        <Label htmlFor="option-1">Option 1</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-2" id="option-2" />
                        <Label htmlFor="option-2">Option 2</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-3" id="option-3" disabled />
                        <Label htmlFor="option-3" className="text-blackblack-60">
                          Option 3 (Disabled)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Radio Group Example</h3>
                    <div className="space-y-3">
                      <Label className="text-base">Select your preferred contact method:</Label>
                      <RadioGroup defaultValue="email">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="contact-email" />
                          <Label htmlFor="contact-email">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="contact-phone" />
                          <Label htmlFor="contact-phone">Phone</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="text" id="contact-text" />
                          <Label htmlFor="contact-text">Text Message</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Custom Radio Button Styles</h3>
                  <RadioGroup defaultValue="card">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          true
                            ? 'border-light-themeprimaryblue bg-light-themeprimarylight-blue'
                            : 'border-[#111c2d1a]'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <RadioGroupItem value="card" id="payment-card" className="mt-1" />
                          <div>
                            <Label
                              htmlFor="payment-card"
                              className="font-medium text-blackblack-100"
                            >
                              Credit Card
                            </Label>
                            <p className="text-sm text-blackblack-60 mt-1">
                              Pay with Visa, Mastercard, etc.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          false
                            ? 'border-light-themeprimaryblue bg-light-themeprimarylight-blue'
                            : 'border-[#111c2d1a]'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <RadioGroupItem value="paypal" id="payment-paypal" className="mt-1" />
                          <div>
                            <Label
                              htmlFor="payment-paypal"
                              className="font-medium text-blackblack-100"
                            >
                              PayPal
                            </Label>
                            <p className="text-sm text-blackblack-60 mt-1">
                              Pay with your PayPal account
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          false
                            ? 'border-light-themeprimaryblue bg-light-themeprimarylight-blue'
                            : 'border-[#111c2d1a]'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <RadioGroupItem value="bank" id="payment-bank" className="mt-1" />
                          <div>
                            <Label
                              htmlFor="payment-bank"
                              className="font-medium text-blackblack-100"
                            >
                              Bank Transfer
                            </Label>
                            <p className="text-sm text-blackblack-60 mt-1">
                              Pay directly from your bank
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Usage Example</h3>
                  <div className="p-6 border border-[#111c2d1a] rounded-lg bg-surfaceslightgray-10">
                    <form className="space-y-4 max-w-md mx-auto">
                      <h4 className="text-xl font-medium text-center">Survey Form</h4>

                      <div className="space-y-2">
                        <Label className="text-base">How did you hear about us?</Label>
                        <RadioGroup defaultValue="social">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="social" id="source-social" />
                              <Label htmlFor="source-social">Social Media</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="friend" id="source-friend" />
                              <Label htmlFor="source-friend">Friend or Colleague</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="search" id="source-search" />
                              <Label htmlFor="source-search">Search Engine</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="other" id="source-other" />
                              <Label htmlFor="source-other">Other</Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-base">Which features are important to you?</Label>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="feature-1" />
                            <Label htmlFor="feature-1">User Interface</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="feature-2" />
                            <Label htmlFor="feature-2">Performance</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="feature-3" />
                            <Label htmlFor="feature-3">Security</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="feature-4" />
                            <Label htmlFor="feature-4">Integrations</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="feature-5" />
                            <Label htmlFor="feature-5">Support</Label>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="terms" required />
                          <Label htmlFor="terms" className="text-sm">
                            I agree to the terms and conditions
                          </Label>
                        </div>
                      </div>

                      <Button type="submit" variant="primary" className="w-full mt-4">
                        Submit Survey
                      </Button>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Implementation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Checkbox Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// Basic checkbox
<div className="flex items-center space-x-2">
  <Checkbox id="default-checkbox" />
  <Label htmlFor="default-checkbox">Default checkbox</Label>
</div>

// Checked checkbox
<div className="flex items-center space-x-2">
  <Checkbox id="checked-checkbox" defaultChecked />
  <Label htmlFor="checked-checkbox">Checked checkbox</Label>
</div>

// Controlled checkbox
const [checked, setChecked] = React.useState(false);

<div className="flex items-center space-x-2">
  <Checkbox 
    id="controlled-checkbox" 
    checked={checked}
    onCheckedChange={setChecked}
  />
  <Label htmlFor="controlled-checkbox">
    {checked ? "Checked" : "Unchecked"}
  </Label>
</div>`}
                    </code>
                  </pre>

                  <h3 className="text-lg font-medium mt-6">Radio Button Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// Basic radio group
<RadioGroup defaultValue="option-1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-1" id="option-1" />
    <Label htmlFor="option-1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-2" id="option-2" />
    <Label htmlFor="option-2">Option 2</Label>
  </div>
</RadioGroup>

// Card style radio buttons
<RadioGroup defaultValue="card">
  <div className="grid grid-cols-3 gap-4">
    <div className={\`border rounded-lg p-4 cursor-pointer transition-all \${
      selectedValue === "card" 
        ? "border-light-themeprimaryblue bg-light-themeprimarylight-blue" 
        : "border-[#111c2d1a]"
    }\`}>
      <div className="flex items-start space-x-3">
        <RadioGroupItem value="card" id="payment-card" className="mt-1" />
        <div>
          <Label htmlFor="payment-card" className="font-medium">Credit Card</Label>
          <p className="text-sm text-blackblack-60 mt-1">Pay with Visa, Mastercard, etc.</p>
        </div>
      </div>
    </div>
    
    {/* Other card options */}
  </div>
</RadioGroup>`}
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

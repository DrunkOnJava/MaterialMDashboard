import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Switch } from "../../../../components/ui/switch";
import { Textarea } from "../../../../components/ui/textarea";
import { Separator } from "../../../../components/ui/separator";
import { WebsitePreview } from "../../components/WebsitePreview";
import {
  CreditCard,
  Tag,
  Truck,
  Percent,
  Settings,
  Gift,
  ExternalLink,
  Save,
  Plus
} from "lucide-react";

const CheckoutManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card className="rounded-xl shadow-light-theme-shadow-medium">
        <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
          <div className="flex justify-between items-center">
            <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
              Checkout Configuration
            </CardTitle>
            <Button variant="outline" className="flex items-center gap-1">
              <ExternalLink className="h-4 w-4 mr-1" />
              View Live Checkout
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs defaultValue="settings">
            <TabsList className="mb-6">
              <TabsTrigger value="settings" className="flex items-center gap-1 px-4">
                <Settings className="h-4 w-4 mr-1" />
                <span>General Settings</span>
              </TabsTrigger>
              <TabsTrigger value="payments" className="flex items-center gap-1 px-4">
                <CreditCard className="h-4 w-4 mr-1" />
                <span>Payment Methods</span>
              </TabsTrigger>
              <TabsTrigger value="shipping" className="flex items-center gap-1 px-4">
                <Truck className="h-4 w-4 mr-1" />
                <span>Shipping Options</span>
              </TabsTrigger>
              <TabsTrigger value="discounts" className="flex items-center gap-1 px-4">
                <Percent className="h-4 w-4 mr-1" />
                <span>Discounts</span>
              </TabsTrigger>
              <TabsTrigger value="gift" className="flex items-center gap-1 px-4">
                <Gift className="h-4 w-4 mr-1" />
                <span>Gift Options</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="settings">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Checkout Process</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="guest-checkout" defaultChecked={true} />
                      <Label htmlFor="guest-checkout">Allow guest checkout</Label>
                    </div>
                    <p className="text-sm text-blackblack-60 pl-10">
                      Customers can check out without creating an account
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="single-page-checkout" defaultChecked={true} />
                      <Label htmlFor="single-page-checkout">Use single-page checkout</Label>
                    </div>
                    <p className="text-sm text-blackblack-60 pl-10">
                      All checkout steps appear on a single page instead of multi-step process
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="require-phone" defaultChecked={true} />
                      <Label htmlFor="require-phone">Require phone number</Label>
                    </div>
                    <p className="text-sm text-blackblack-60 pl-10">
                      Phone number is required for checkout completion
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="newsletter-signup" defaultChecked={true} />
                      <Label htmlFor="newsletter-signup">Include newsletter signup</Label>
                    </div>
                    <p className="text-sm text-blackblack-60 pl-10">
                      Add newsletter subscription checkbox during checkout
                    </p>
                  </div>
                  
                  <div className="space-y-2 mt-6">
                    <Label htmlFor="confirmation-email">Order Confirmation Email</Label>
                    <Textarea 
                      id="confirmation-email" 
                      rows={4}
                      defaultValue="Thank you for your order with Blue Mountain Wicks! We're preparing your handcrafted candles with care and will send you shipping updates soon."
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Address Format & Validation</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="address-validation" defaultChecked={true} />
                      <Label htmlFor="address-validation">Enable address validation</Label>
                    </div>
                    <p className="text-sm text-blackblack-60 pl-10">
                      Validate customer addresses during checkout
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="same-billing-shipping" defaultChecked={true} />
                      <Label htmlFor="same-billing-shipping">Default to same billing and shipping address</Label>
                    </div>
                    <p className="text-sm text-blackblack-60 pl-10">
                      Pre-select checkbox to use same address for billing and shipping
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="countries">Allowed Countries</Label>
                    <div className="p-3 border rounded-md bg-surfaceslightgray-10">
                      <div className="flex items-center mb-2">
                        <span className="bg-light-themeprimarylight-blue text-light-themeprimaryblue text-sm px-2 py-1 rounded mr-2">United States</span>
                        <span className="bg-light-themeprimarylight-blue text-light-themeprimaryblue text-sm px-2 py-1 rounded mr-2">Canada</span>
                      </div>
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Plus className="h-3 w-3 mr-1" />
                        Add Country
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-6">
                    <Label htmlFor="order-notes">Order Notes Field</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Switch id="enable-notes" defaultChecked={true} />
                        <Label htmlFor="enable-notes">Enable order notes field</Label>
                      </div>
                      <Input 
                        id="notes-label" 
                        defaultValue="Add a note to your order (optional)" 
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-6">
                <Button className="flex items-center gap-1">
                  <Save className="h-4 w-4 mr-1" />
                  Save Settings
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="payments">
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Payment Methods</h3>
                
                <div className="space-y-4">
                  <div className="rounded-lg border p-4 bg-white">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="mt-1">
                          <CreditCard className="h-6 w-6 text-light-themeprimaryblue" />
                        </div>
                        <div>
                          <h4 className="font-medium">Credit Cards</h4>
                          <p className="text-sm text-blackblack-60 mt-1">
                            Accept Visa, Mastercard, American Express, Discover
                          </p>
                          <div className="flex gap-2 mt-2">
                            <img src="/group-1.png" alt="Visa" className="h-6" />
                            <img src="/group-2.png" alt="Mastercard" className="h-6" />
                            <img src="/group-3.png" alt="Amex" className="h-6" />
                            <img src="/group-4.png" alt="Discover" className="h-6" />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="enable-credit-cards" defaultChecked={true} />
                        <Label htmlFor="enable-credit-cards">Enabled</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border p-4 bg-white">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="mt-1">
                          <img src="/group-5.png" alt="PayPal" className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-medium">PayPal</h4>
                          <p className="text-sm text-blackblack-60 mt-1">
                            Allow customers to pay with their PayPal account
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="enable-paypal" defaultChecked={true} />
                        <Label htmlFor="enable-paypal">Enabled</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border p-4 bg-white">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="mt-1">
                          <img src="/group-6.png" alt="Apple Pay" className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-medium">Apple Pay</h4>
                          <p className="text-sm text-blackblack-60 mt-1">
                            Allow customers to pay with Apple Pay
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="enable-apple-pay" defaultChecked={false} />
                        <Label htmlFor="enable-apple-pay">Enabled</Label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="flex items-center gap-1 mt-6">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Payment Method
                </Button>
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Payment Settings</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="capture-payment" defaultChecked={true} />
                      <Label htmlFor="capture-payment">Capture payment immediately</Label>
                    </div>
                    <p className="text-sm text-blackblack-60 pl-10">
                      If disabled, payments will be authorized but not captured until manually processed
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <Input id="currency" defaultValue="USD - United States Dollar" disabled />
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  <Button className="flex items-center gap-1">
                    <Save className="h-4 w-4 mr-1" />
                    Save Payment Settings
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="shipping">
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Shipping Methods</h3>
                
                <div className="space-y-4">
                  <div className="rounded-lg border p-4 bg-white">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="mt-1">
                          <Truck className="h-6 w-6 text-light-themeprimaryblue" />
                        </div>
                        <div>
                          <h4 className="font-medium">Standard Shipping</h4>
                          <p className="text-sm text-blackblack-60 mt-1">
                            3-5 business days
                          </p>
                          <p className="text-sm font-medium mt-1">
                            $5.99
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="enable-standard" defaultChecked={true} />
                        <Label htmlFor="enable-standard">Enabled</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border p-4 bg-white">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="mt-1">
                          <Truck className="h-6 w-6 text-actionsuccess" />
                        </div>
                        <div>
                          <h4 className="font-medium">Express Shipping</h4>
                          <p className="text-sm text-blackblack-60 mt-1">
                            1-2 business days
                          </p>
                          <p className="text-sm font-medium mt-1">
                            $12.99
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="enable-express" defaultChecked={true} />
                        <Label htmlFor="enable-express">Enabled</Label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="flex items-center gap-1 mt-6">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Shipping Method
                </Button>
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Free Shipping</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="enable-free-shipping" defaultChecked={true} />
                      <Label htmlFor="enable-free-shipping">Enable free shipping threshold</Label>
                    </div>
                    <div className="pl-10 mt-2">
                      <Label htmlFor="free-shipping-threshold" className="text-sm">
                        Free shipping for orders over:
                      </Label>
                      <div className="flex w-48 mt-1">
                        <span className="inline-flex items-center px-3 bg-surfaceslightgray-10 border border-r-0 border-[#111c2d1a] rounded-l-md">
                          $
                        </span>
                        <Input
                          id="free-shipping-threshold"
                          type="number"
                          defaultValue="100"
                          className="rounded-l-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  <Button className="flex items-center gap-1">
                    <Save className="h-4 w-4 mr-1" />
                    Save Shipping Settings
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="discounts">
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Promotional Codes</h3>
                
                <div className="overflow-x-auto rounded-lg border border-[#111c2d1a]">
                  <table className="w-full">
                    <thead className="bg-surfaceslightgray-10 border-b border-[#111c2d1a]">
                      <tr>
                        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Code</th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Type</th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Value</th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Minimum Order</th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Active</th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">Expires</th>
                        <th className="py-3 px-4 text-right text-sm font-medium text-blackblack-60">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#111c2d1a] hover:bg-surfaceslightgray-10">
                        <td className="py-3 px-4 font-medium">WELCOME10</td>
                        <td className="py-3 px-4">Percentage</td>
                        <td className="py-3 px-4">10%</td>
                        <td className="py-3 px-4">$0.00</td>
                        <td className="py-3 px-4">
                          <Switch defaultChecked={true} />
                        </td>
                        <td className="py-3 px-4">Never</td>
                        <td className="py-3 px-4 text-right">
                          <Button variant="ghost" size="sm">Edit</Button>
                        </td>
                      </tr>
                      <tr className="border-b border-[#111c2d1a] hover:bg-surfaceslightgray-10">
                        <td className="py-3 px-4 font-medium">FREESHIP100</td>
                        <td className="py-3 px-4">Free Shipping</td>
                        <td className="py-3 px-4">-</td>
                        <td className="py-3 px-4">$100.00</td>
                        <td className="py-3 px-4">
                          <Switch defaultChecked={true} />
                        </td>
                        <td className="py-3 px-4">Dec 31, 2025</td>
                        <td className="py-3 px-4 text-right">
                          <Button variant="ghost" size="sm">Edit</Button>
                        </td>
                      </tr>
                      <tr className="border-b border-[#111c2d1a] hover:bg-surfaceslightgray-10">
                        <td className="py-3 px-4 font-medium">SUMMER25</td>
                        <td className="py-3 px-4">Percentage</td>
                        <td className="py-3 px-4">25%</td>
                        <td className="py-3 px-4">$75.00</td>
                        <td className="py-3 px-4">
                          <Switch defaultChecked={false} />
                        </td>
                        <td className="py-3 px-4">Sep 1, 2025</td>
                        <td className="py-3 px-4 text-right">
                          <Button variant="ghost" size="sm">Edit</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <Button className="flex items-center gap-1 mt-6">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Promotional Code
                </Button>
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Discount Settings</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="stack-discounts" defaultChecked={false} />
                      <Label htmlFor="stack-discounts">Allow stacking discount codes</Label>
                    </div>
                    <p className="text-sm text-blackblack-60 pl-10">
                      If enabled, customers can use multiple discount codes on a single order
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="auto-apply" defaultChecked={true} />
                      <Label htmlFor="auto-apply">Auto-apply best discount</Label>
                    </div>
                    <p className="text-sm text-blackblack-60 pl-10">
                      Automatically apply the best available discount to eligible orders
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  <Button className="flex items-center gap-1">
                    <Save className="h-4 w-4 mr-1" />
                    Save Discount Settings
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="gift">
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Gift Options</h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="enable-gift-wrap" defaultChecked={true} />
                      <Label htmlFor="enable-gift-wrap">Offer gift wrapping</Label>
                    </div>
                    <div className="pl-10 mt-2">
                      <Label htmlFor="gift-wrap-price" className="text-sm">
                        Gift wrapping fee:
                      </Label>
                      <div className="flex w-48 mt-1">
                        <span className="inline-flex items-center px-3 bg-surfaceslightgray-10 border border-r-0 border-[#111c2d1a] rounded-l-md">
                          $
                        </span>
                        <Input
                          id="gift-wrap-price"
                          type="number"
                          defaultValue="4.99"
                          className="rounded-l-none"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="enable-gift-message" defaultChecked={true} />
                      <Label htmlFor="enable-gift-message">Allow gift messages</Label>
                    </div>
                    <p className="text-sm text-blackblack-60 pl-10">
                      Customers can add a personalized message to their order
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="hide-prices" defaultChecked={true} />
                      <Label htmlFor="hide-prices">Option to hide prices on packing slip</Label>
                    </div>
                    <p className="text-sm text-blackblack-60 pl-10">
                      Allow customers to hide prices when sending as a gift
                    </p>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Gift Cards</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="enable-gift-cards" defaultChecked={false} />
                      <Label htmlFor="enable-gift-cards">Sell digital gift cards</Label>
                    </div>
                    <p className="text-sm text-blackblack-60 pl-10">
                      Allow customers to purchase digital gift cards
                    </p>
                  </div>
                  
                  <div className="pl-10 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="gift-card-amounts">Available Amounts</Label>
                      <div className="p-3 border rounded-md bg-surfaceslightgray-10">
                        <div className="flex items-center flex-wrap gap-2 mb-2">
                          <span className="bg-light-themeprimarylight-blue text-light-themeprimaryblue text-sm px-2 py-1 rounded">$25</span>
                          <span className="bg-light-themeprimarylight-blue text-light-themeprimaryblue text-sm px-2 py-1 rounded">$50</span>
                          <span className="bg-light-themeprimarylight-blue text-light-themeprimaryblue text-sm px-2 py-1 rounded">$100</span>
                        </div>
                        <Button variant="outline" size="sm" className="flex items-center">
                          <Plus className="h-3 w-3 mr-1" />
                          Add Amount
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Switch id="custom-amount" defaultChecked={true} />
                        <Label htmlFor="custom-amount">Allow custom amounts</Label>
                      </div>
                      <div className="flex space-x-4">
                        <div className="w-1/2">
                          <Label htmlFor="min-amount" className="text-sm">Minimum Amount</Label>
                          <div className="flex mt-1">
                            <span className="inline-flex items-center px-3 bg-surfaceslightgray-10 border border-r-0 border-[#111c2d1a] rounded-l-md">
                              $
                            </span>
                            <Input
                              id="min-amount"
                              type="number"
                              defaultValue="10"
                              className="rounded-l-none"
                            />
                          </div>
                        </div>
                        <div className="w-1/2">
                          <Label htmlFor="max-amount" className="text-sm">Maximum Amount</Label>
                          <div className="flex mt-1">
                            <span className="inline-flex items-center px-3 bg-surfaceslightgray-10 border border-r-0 border-[#111c2d1a] rounded-l-md">
                              $
                            </span>
                            <Input
                              id="max-amount"
                              type="number"
                              defaultValue="500"
                              className="rounded-l-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  <Button className="flex items-center gap-1">
                    <Save className="h-4 w-4 mr-1" />
                    Save Gift Settings
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <WebsitePreview fullWidth />
    </div>
  );
};

export default CheckoutManagement;
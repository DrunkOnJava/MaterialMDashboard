import React, { useState } from 'react';
import { SidebarByAnima } from '../Chip/sections/SidebarByAnima';
import { TopBarByAnima } from '../Chip/sections/TopBarByAnima';
import { TitlebarByAnima } from '../Buttons/components/Titlebar';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { useToast } from '../../hooks/use-toast';
import {
  User,
  Mail,
  Lock,
  Phone,
  MapPin,
  CreditCard,
  Calendar,
  Check,
  AlertCircle,
} from 'lucide-react';

interface FormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  address: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  phone?: string;
  address?: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
}

export const FormValidation = (): JSX.Element => {
  const { toast } = useToast();

  const [formValues, setFormValues] = useState<FormValues>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;

    // Full Name validation
    if (!formValues.fullName.trim()) {
      errors.fullName = 'Full name is required';
      isValid = false;
    }

    // Email validation
    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    // Password validation
    if (!formValues.password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (formValues.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    // Confirm Password validation
    if (!formValues.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
      isValid = false;
    } else if (formValues.password !== formValues.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    // Phone validation (optional)
    if (formValues.phone && !/^\d{10}$/.test(formValues.phone.replace(/\D/g, ''))) {
      errors.phone = 'Phone number must be 10 digits';
      isValid = false;
    }

    // Address validation (optional)
    if (formValues.address && formValues.address.length < 5) {
      errors.address = 'Please enter a valid address';
      isValid = false;
    }

    // Credit Card validation (optional)
    if (formValues.cardNumber) {
      if (!/^\d{16}$/.test(formValues.cardNumber.replace(/\D/g, ''))) {
        errors.cardNumber = 'Card number must be 16 digits';
        isValid = false;
      }

      if (!formValues.expiryDate) {
        errors.expiryDate = 'Expiry date is required';
        isValid = false;
      } else if (!/^\d{2}\/\d{2}$/.test(formValues.expiryDate)) {
        errors.expiryDate = 'Expiry date must be in MM/YY format';
        isValid = false;
      }

      if (!formValues.cvv) {
        errors.cvv = 'CVV is required';
        isValid = false;
      } else if (!/^\d{3,4}$/.test(formValues.cvv)) {
        errors.cvv = 'CVV must be 3 or 4 digits';
        isValid = false;
      }
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setFormSubmitted(true);
      toast({
        title: 'Form submitted successfully',
        description: 'Your information has been validated and submitted.',
        variant: 'default',
        icon: <Check className="h-4 w-4 text-actionsuccess" />,
      });
    } else {
      toast({
        title: 'Form validation failed',
        description: 'Please check the form for errors and try again.',
        variant: 'destructive',
        icon: <AlertCircle className="h-4 w-4" />,
      });
    }
  };

  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Form Validation" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Form Validation Example
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Personal Information */}
                    <div className="md:col-span-2">
                      <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fullName">
                        Full Name <span className="text-actionwarning">*</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
                        <Input
                          id="fullName"
                          name="fullName"
                          placeholder="John Doe"
                          className={`pl-10 ${formErrors.fullName ? 'border-actionwarning ring-1 ring-actionwarning' : ''}`}
                          value={formValues.fullName}
                          onChange={handleChange}
                        />
                        {formErrors.fullName && (
                          <div className="absolute right-3 top-3">
                            <AlertCircle className="h-4 w-4 text-actionwarning" />
                          </div>
                        )}
                      </div>
                      {formErrors.fullName && (
                        <p className="text-sm text-actionwarning mt-1">{formErrors.fullName}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email Address <span className="text-actionwarning">*</span>
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          className={`pl-10 ${formErrors.email ? 'border-actionwarning ring-1 ring-actionwarning' : ''}`}
                          value={formValues.email}
                          onChange={handleChange}
                        />
                        {formErrors.email && (
                          <div className="absolute right-3 top-3">
                            <AlertCircle className="h-4 w-4 text-actionwarning" />
                          </div>
                        )}
                      </div>
                      {formErrors.email && (
                        <p className="text-sm text-actionwarning mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">
                        Password <span className="text-actionwarning">*</span>
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          placeholder="••••••••"
                          className={`pl-10 ${formErrors.password ? 'border-actionwarning ring-1 ring-actionwarning' : ''}`}
                          value={formValues.password}
                          onChange={handleChange}
                        />
                        {formErrors.password && (
                          <div className="absolute right-3 top-3">
                            <AlertCircle className="h-4 w-4 text-actionwarning" />
                          </div>
                        )}
                      </div>
                      {formErrors.password && (
                        <p className="text-sm text-actionwarning mt-1">{formErrors.password}</p>
                      )}
                      {!formErrors.password && (
                        <p className="text-xs text-blackblack-60 mt-1">
                          Password must be at least 8 characters
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">
                        Confirm Password <span className="text-actionwarning">*</span>
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          placeholder="••••••••"
                          className={`pl-10 ${formErrors.confirmPassword ? 'border-actionwarning ring-1 ring-actionwarning' : ''}`}
                          value={formValues.confirmPassword}
                          onChange={handleChange}
                        />
                        {formErrors.confirmPassword && (
                          <div className="absolute right-3 top-3">
                            <AlertCircle className="h-4 w-4 text-actionwarning" />
                          </div>
                        )}
                      </div>
                      {formErrors.confirmPassword && (
                        <p className="text-sm text-actionwarning mt-1">
                          {formErrors.confirmPassword}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="(123) 456-7890"
                          className={`pl-10 ${formErrors.phone ? 'border-actionwarning ring-1 ring-actionwarning' : ''}`}
                          value={formValues.phone}
                          onChange={handleChange}
                        />
                        {formErrors.phone && (
                          <div className="absolute right-3 top-3">
                            <AlertCircle className="h-4 w-4 text-actionwarning" />
                          </div>
                        )}
                      </div>
                      {formErrors.phone && (
                        <p className="text-sm text-actionwarning mt-1">{formErrors.phone}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address (Optional)</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
                        <Input
                          id="address"
                          name="address"
                          placeholder="123 Main St, City, State"
                          className={`pl-10 ${formErrors.address ? 'border-actionwarning ring-1 ring-actionwarning' : ''}`}
                          value={formValues.address}
                          onChange={handleChange}
                        />
                        {formErrors.address && (
                          <div className="absolute right-3 top-3">
                            <AlertCircle className="h-4 w-4 text-actionwarning" />
                          </div>
                        )}
                      </div>
                      {formErrors.address && (
                        <p className="text-sm text-actionwarning mt-1">{formErrors.address}</p>
                      )}
                    </div>

                    {/* Payment Information (Optional) */}
                    <div className="md:col-span-2 mt-4">
                      <h3 className="text-lg font-medium mb-4">Payment Information (Optional)</h3>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          className={`pl-10 ${formErrors.cardNumber ? 'border-actionwarning ring-1 ring-actionwarning' : ''}`}
                          value={formValues.cardNumber}
                          onChange={handleChange}
                        />
                        {formErrors.cardNumber && (
                          <div className="absolute right-3 top-3">
                            <AlertCircle className="h-4 w-4 text-actionwarning" />
                          </div>
                        )}
                      </div>
                      {formErrors.cardNumber && (
                        <p className="text-sm text-actionwarning mt-1">{formErrors.cardNumber}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
                          <Input
                            id="expiryDate"
                            name="expiryDate"
                            placeholder="MM/YY"
                            className={`pl-10 ${formErrors.expiryDate ? 'border-actionwarning ring-1 ring-actionwarning' : ''}`}
                            value={formValues.expiryDate}
                            onChange={handleChange}
                          />
                          {formErrors.expiryDate && (
                            <div className="absolute right-3 top-3">
                              <AlertCircle className="h-4 w-4 text-actionwarning" />
                            </div>
                          )}
                        </div>
                        {formErrors.expiryDate && (
                          <p className="text-sm text-actionwarning mt-1">{formErrors.expiryDate}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <div className="relative">
                          <Input
                            id="cvv"
                            name="cvv"
                            placeholder="123"
                            className={`${formErrors.cvv ? 'border-actionwarning ring-1 ring-actionwarning' : ''}`}
                            value={formValues.cvv}
                            onChange={handleChange}
                          />
                          {formErrors.cvv && (
                            <div className="absolute right-3 top-3">
                              <AlertCircle className="h-4 w-4 text-actionwarning" />
                            </div>
                          )}
                        </div>
                        {formErrors.cvv && (
                          <p className="text-sm text-actionwarning mt-1">{formErrors.cvv}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4 pt-4 border-t border-[#111c2d1a]">
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                    <Button type="submit" variant="primary">
                      Submit Form
                    </Button>
                  </div>
                </form>

                {formSubmitted && (
                  <div className="mt-8 p-4 bg-actionsuccess-light border border-actionsuccess rounded-lg">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-actionsuccess" />
                      <h4 className="font-medium text-actionsuccess">
                        Form Submitted Successfully
                      </h4>
                    </div>
                    <p className="mt-2 text-blackblack-80">
                      Thank you for submitting the form. Your information has been validated and
                      processed.
                    </p>
                  </div>
                )}
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
                  <h3 className="text-lg font-medium">Form Validation Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// Define form values and errors interfaces
interface FormValues {
  fullName: string;
  email: string;
  password: string;
  // ... other fields
}

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  // ... other fields
}

// Set up state for form values and errors
const [formValues, setFormValues] = useState<FormValues>({
  fullName: "",
  email: "",
  password: "",
  // ... initialize other fields
});

const [formErrors, setFormErrors] = useState<FormErrors>({});

// Handle input changes
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormValues(prev => ({ ...prev, [name]: value }));
  
  // Clear error when user starts typing
  if (formErrors[name as keyof FormErrors]) {
    setFormErrors(prev => ({ ...prev, [name]: undefined }));
  }
};

// Validate form
const validateForm = (): boolean => {
  const errors: FormErrors = {};
  let isValid = true;
  
  // Validate fullName
  if (!formValues.fullName.trim()) {
    errors.fullName = "Full name is required";
    isValid = false;
  }
  
  // Validate email
  if (!formValues.email.trim()) {
    errors.email = "Email is required";
    isValid = false;
  } else if (!/\\S+@\\S+\\.\\S+/.test(formValues.email)) {
    errors.email = "Email is invalid";
    isValid = false;
  }
  
  // ... validate other fields
  
  setFormErrors(errors);
  return isValid;
};

// Handle form submission
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  if (validateForm()) {
    // Form is valid, proceed with submission
    toast({
      title: "Form submitted successfully",
      description: "Your information has been validated and submitted.",
      variant: "default",
      icon: <Check className="h-4 w-4 text-actionsuccess" />
    });
  } else {
    // Form has errors
    toast({
      title: "Form validation failed",
      description: "Please check the form for errors and try again.",
      variant: "destructive",
      icon: <AlertCircle className="h-4 w-4" />
    });
  }
};`}
                    </code>
                  </pre>

                  <h3 className="text-lg font-medium mt-6">Input Field with Validation</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`<div className="space-y-2">
  <Label htmlFor="email">Email Address <span className="text-actionwarning">*</span></Label>
  <div className="relative">
    <Mail className="absolute left-3 top-3 h-4 w-4 text-blackblack-60" />
    <Input
      id="email"
      name="email"
      type="email"
      placeholder="john@example.com"
      className={\`pl-10 \${formErrors.email ? 'border-actionwarning ring-1 ring-actionwarning' : ''}\`}
      value={formValues.email}
      onChange={handleChange}
    />
    {formErrors.email && (
      <div className="absolute right-3 top-3">
        <AlertCircle className="h-4 w-4 text-actionwarning" />
      </div>
    )}
  </div>
  {formErrors.email && (
    <p className="text-sm text-actionwarning mt-1">{formErrors.email}</p>
  )}
</div>`}
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

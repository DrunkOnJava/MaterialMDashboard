import React, { useState } from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { TitlebarByAnima } from "../Buttons/components/Titlebar";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { useToast } from "../../hooks/use-toast";
import { 
  AlertCircle, CheckCircle, Info, AlertTriangle, X, 
  Bell, ShieldAlert, ThumbsUp, DownloadCloud, Mail 
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";

export const Alerts = (): JSX.Element => {
  const { toast } = useToast();
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [isVisible3, setIsVisible3] = useState(true);
  const [isVisible4, setIsVisible4] = useState(true);
  
  const showToast = (
    title: string, 
    description: string, 
    variant: "default" | "destructive" | null = "default", 
    icon?: React.ReactNode
  ) => {
    toast({
      title,
      description,
      variant,
      icon,
    });
  };
  
  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Alerts" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Alert Components
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Basic Alerts</h3>
                  
                  <div className="space-y-4">
                    {isVisible1 && (
                      <Alert className="bg-light-themeprimarylight-blue border-light-themeprimaryblue">
                        <Info className="h-4 w-4 text-light-themeprimaryblue" />
                        <AlertTitle>Information</AlertTitle>
                        <AlertDescription>
                          This is an informational alert. It provides general information to the user.
                        </AlertDescription>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="absolute top-3 right-3 h-6 w-6 text-light-themeprimaryblue hover:bg-light-themeprimaryblue/20"
                          onClick={() => setIsVisible1(false)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </Alert>
                    )}
                    
                    {isVisible2 && (
                      <Alert className="bg-actionsuccess-light border-actionsuccess">
                        <CheckCircle className="h-4 w-4 text-actionsuccess" />
                        <AlertTitle>Success</AlertTitle>
                        <AlertDescription>
                          This is a success alert. It confirms that an action has been completed successfully.
                        </AlertDescription>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="absolute top-3 right-3 h-6 w-6 text-actionsuccess hover:bg-actionsuccess/20"
                          onClick={() => setIsVisible2(false)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </Alert>
                    )}
                    
                    {isVisible3 && (
                      <Alert className="bg-actionalert-light border-actionalert">
                        <AlertTriangle className="h-4 w-4 text-actionalert" />
                        <AlertTitle>Warning</AlertTitle>
                        <AlertDescription>
                          This is a warning alert. It notifies the user about something that requires attention.
                        </AlertDescription>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="absolute top-3 right-3 h-6 w-6 text-actionalert hover:bg-actionalert/20"
                          onClick={() => setIsVisible3(false)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </Alert>
                    )}
                    
                    {isVisible4 && (
                      <Alert className="bg-actionwarning-light border-actionwarning">
                        <AlertCircle className="h-4 w-4 text-actionwarning" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                          This is an error alert. It indicates that something has gone wrong.
                        </AlertDescription>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="absolute top-3 right-3 h-6 w-6 text-actionwarning hover:bg-actionwarning/20"
                          onClick={() => setIsVisible4(false)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </Alert>
                    )}
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Alerts with Actions</h3>
                  
                  <div className="space-y-4">
                    <Alert className="bg-light-themeprimarylight-blue border-light-themeprimaryblue">
                      <Info className="h-4 w-4 text-light-themeprimaryblue" />
                      <AlertTitle>Information</AlertTitle>
                      <AlertDescription className="flex justify-between items-center">
                        <span>Your trial period ends in 7 days. Upgrade now to continue using all features.</span>
                        <Button size="sm" className="bg-light-themeprimaryblue hover:bg-light-themeprimaryblue/90 text-white ml-4">
                          Upgrade
                        </Button>
                      </AlertDescription>
                    </Alert>
                    
                    <Alert className="bg-actionsuccess-light border-actionsuccess">
                      <CheckCircle className="h-4 w-4 text-actionsuccess" />
                      <AlertTitle>Account Created</AlertTitle>
                      <AlertDescription className="flex justify-between items-center">
                        <span>Your account has been created successfully. Check your email to verify your account.</span>
                        <Button size="sm" variant="outline" className="border-actionsuccess text-actionsuccess hover:bg-actionsuccess/10 ml-4">
                          Resend Email
                        </Button>
                      </AlertDescription>
                    </Alert>
                    
                    <Alert className="border-actionalert bg-actionalert-light">
                      <AlertTriangle className="h-4 w-4 text-actionalert" />
                      <AlertTitle>Browser Update Required</AlertTitle>
                      <AlertDescription>
                        <div className="mb-2">Your browser version is outdated and may have security vulnerabilities.</div>
                        <div className="flex gap-3">
                          <Button size="sm" className="bg-actionalert hover:bg-actionalert/90 text-white">
                            Update Now
                          </Button>
                          <Button size="sm" variant="outline" className="border-actionalert text-actionalert hover:bg-actionalert/10">
                            Remind Me Later
                          </Button>
                        </div>
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Toast Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Basic Toast Notifications</h3>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant="outline"
                      onClick={() => showToast(
                        "Information", 
                        "This is an informational toast notification.",
                        "default",
                        <Info className="h-4 w-4" />
                      )}
                    >
                      <Info className="mr-2 h-4 w-4" />
                      Show Info Toast
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={() => showToast(
                        "Success", 
                        "Your action was completed successfully.",
                        "default",
                        <CheckCircle className="h-4 w-4" />
                      )}
                      className="border-actionsuccess text-actionsuccess hover:bg-actionsuccess/10"
                    >
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Show Success Toast
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={() => showToast(
                        "Warning", 
                        "Please review this information carefully.",
                        "default",
                        <AlertTriangle className="h-4 w-4" />
                      )}
                      className="border-actionalert text-actionalert hover:bg-actionalert/10"
                    >
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      Show Warning Toast
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={() => showToast(
                        "Error", 
                        "There was a problem with your request.",
                        "destructive",
                        <AlertCircle className="h-4 w-4" />
                      )}
                      className="border-actionwarning text-actionwarning hover:bg-actionwarning/10"
                    >
                      <AlertCircle className="mr-2 h-4 w-4" />
                      Show Error Toast
                    </Button>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Custom Toast Notifications</h3>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant="outline"
                      onClick={() => showToast(
                        "New Message", 
                        "You have received a new message from John Doe.",
                        "default",
                        <Mail className="h-4 w-4" />
                      )}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      New Message
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={() => showToast(
                        "Download Complete", 
                        "Your file has been downloaded successfully.",
                        "default",
                        <DownloadCloud className="h-4 w-4" />
                      )}
                    >
                      <DownloadCloud className="mr-2 h-4 w-4" />
                      Download Complete
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={() => showToast(
                        "Security Alert", 
                        "Unusual login attempt detected from a new device.",
                        "default",
                        <ShieldAlert className="h-4 w-4" />
                      )}
                    >
                      <ShieldAlert className="mr-2 h-4 w-4" />
                      Security Alert
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={() => showToast(
                        "Like Received", 
                        "Someone liked your comment on the post.",
                        "default",
                        <ThumbsUp className="h-4 w-4" />
                      )}
                    >
                      <ThumbsUp className="mr-2 h-4 w-4" />
                      Like Notification
                    </Button>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Usage Example</h3>
                  <div className="p-6 border border-[#111c2d1a] rounded-lg bg-surfaceslightgray-10">
                    <div className="flex flex-col gap-4 max-w-md mx-auto">
                      <h4 className="text-xl font-medium text-center">Notification Center</h4>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#111c2d1a]">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-light-themeprimarylight-blue flex items-center justify-center">
                              <Bell className="h-4 w-4 text-light-themeprimaryblue" />
                            </div>
                            <div>
                              <p className="font-medium">System Update</p>
                              <p className="text-xs text-blackblack-60">The system will be down for maintenance on Sunday at 2 AM.</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#111c2d1a]">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-actionsuccess-light flex items-center justify-center">
                              <CheckCircle className="h-4 w-4 text-actionsuccess" />
                            </div>
                            <div>
                              <p className="font-medium">Payment Successful</p>
                              <p className="text-xs text-blackblack-60">Your subscription has been renewed for another month.</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#111c2d1a]">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-actionwarning-light flex items-center justify-center">
                              <AlertCircle className="h-4 w-4 text-actionwarning" />
                            </div>
                            <div>
                              <p className="font-medium">Login Failed</p>
                              <p className="text-xs text-blackblack-60">There was an unsuccessful login attempt from a new location.</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex justify-center mt-2">
                        <Button 
                          variant="outline" 
                          className="text-blackblack-60"
                          onClick={() => showToast(
                            "Notifications Cleared", 
                            "All notifications have been cleared.",
                            "default",
                            <CheckCircle className="h-4 w-4" />
                          )}
                        >
                          Clear All Notifications
                        </Button>
                      </div>
                    </div>
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
                  <h3 className="text-lg font-medium">Alert Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`// Basic alert
<Alert className="bg-light-themeprimarylight-blue border-light-themeprimaryblue">
  <Info className="h-4 w-4 text-light-themeprimaryblue" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    This is an informational alert. It provides general information to the user.
  </AlertDescription>
  <Button 
    variant="ghost" 
    size="icon" 
    className="absolute top-3 right-3 h-6 w-6 text-light-themeprimaryblue hover:bg-light-themeprimaryblue/20"
    onClick={() => setIsVisible(false)}
  >
    <X className="h-4 w-4" />
  </Button>
</Alert>

// Alert with action buttons
<Alert className="border-actionalert bg-actionalert-light">
  <AlertTriangle className="h-4 w-4 text-actionalert" />
  <AlertTitle>Browser Update Required</AlertTitle>
  <AlertDescription>
    <div className="mb-2">Your browser version is outdated and may have security vulnerabilities.</div>
    <div className="flex gap-3">
      <Button size="sm" className="bg-actionalert hover:bg-actionalert/90 text-white">
        Update Now
      </Button>
      <Button size="sm" variant="outline" className="border-actionalert text-actionalert hover:bg-actionalert/10">
        Remind Me Later
      </Button>
    </div>
  </AlertDescription>
</Alert>`}
                    </code>
                  </pre>
                  
                  <h3 className="text-lg font-medium mt-6">Toast Notification Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`// First, import the useToast hook
import { useToast } from "../hooks/use-toast";

// Then use it in your component
const { toast } = useToast();

// Show a basic toast
const showBasicToast = () => {
  toast({
    title: "Information",
    description: "This is an informational toast notification.",
  });
};

// Show a toast with an icon
const showIconToast = () => {
  toast({
    title: "Success",
    description: "Your action was completed successfully.",
    icon: <CheckCircle className="h-4 w-4" />
  });
};

// Show a destructive toast for errors
const showErrorToast = () => {
  toast({
    title: "Error",
    description: "There was a problem with your request.",
    variant: "destructive",
    icon: <AlertCircle className="h-4 w-4" />
  });
};

// Then create buttons to trigger these toasts
<Button
  variant="outline"
  onClick={showBasicToast}
>
  Show Basic Toast
</Button>

<Button
  variant="outline"
  onClick={showIconToast}
  className="border-actionsuccess text-actionsuccess hover:bg-actionsuccess/10"
>
  <CheckCircle className="mr-2 h-4 w-4" />
  Show Success Toast
</Button>

<Button
  variant="outline"
  onClick={showErrorToast}
  className="border-actionwarning text-actionwarning hover:bg-actionwarning/10"
>
  <AlertCircle className="mr-2 h-4 w-4" />
  Show Error Toast
</Button>`}
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
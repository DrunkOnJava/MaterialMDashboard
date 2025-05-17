import React from 'react';
import { TitlebarByAnima } from '../Buttons/components/Titlebar';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../../components/ui/alert-dialog';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import {
  Plus,
  Info,
  AlertTriangle,
  CheckCircle,
  X,
  UserPlus,
  UploadCloud,
  Search,
  Calendar,
} from 'lucide-react';

export const Modals = (): JSX.Element => {
  return (
    <div className="flex flex-col overflow-hidden">
      <TitlebarByAnima title="Modals & Dialogs" />
      <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Basic Dialogs
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Simple Dialog</h3>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Open Dialog</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Dialog Title</DialogTitle>
                          <DialogDescription>
                            This is a description for the dialog. It provides additional context
                            about what the dialog is for.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-4">
                          <p>
                            Dialog content goes here. This can include forms, messages, or other
                            interactive elements.
                          </p>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <h3 className="text-lg font-medium mt-6">Dialog with Form</h3>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>
                          <Plus className="mr-2 h-4 w-4" />
                          Create Item
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Create New Item</DialogTitle>
                          <DialogDescription>
                            Fill out the form below to create a new item.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Name
                            </Label>
                            <Input id="name" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                              Description
                            </Label>
                            <Input id="description" className="col-span-3" />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Create Item</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Alert Dialog</h3>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="border-actionwarning text-actionwarning hover:bg-actionwarning/10"
                        >
                          <AlertTriangle className="mr-2 h-4 w-4" />
                          Delete Item
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction className="bg-actionwarning hover:bg-actionwarning/90 text-white">
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                    <h3 className="text-lg font-medium mt-6">Information Dialog</h3>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="border-light-themeprimaryblue text-light-themeprimaryblue hover:bg-light-themeprimaryblue/10"
                        >
                          <Info className="mr-2 h-4 w-4" />
                          More Information
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-light-themeprimarylight-blue flex items-center justify-center">
                            <Info className="h-6 w-6 text-light-themeprimaryblue" />
                          </div>
                          <DialogTitle className="text-center">Information</DialogTitle>
                          <DialogDescription className="text-center">
                            This feature is available only for premium users. Upgrade your account
                            to access it.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="flex flex-col sm:flex-row sm:justify-center gap-2 mt-4">
                          <Button variant="outline">Learn More</Button>
                          <Button>Upgrade Now</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Custom Dialog Examples</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">
                          <UserPlus className="mr-2 h-4 w-4" />
                          Invite Team Member
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Invite Team Member</DialogTitle>
                          <DialogDescription>
                            Send an invitation email to add someone to your team.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input id="email" placeholder="Enter email address" type="email" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="role">Role</Label>
                            <select
                              id="role"
                              className="w-full rounded-md border border-[#111c2d1a] px-3 py-2"
                            >
                              <option value="admin">Admin</option>
                              <option value="editor">Editor</option>
                              <option value="viewer">Viewer</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="message">Personal message (optional)</Label>
                            <textarea
                              id="message"
                              className="w-full rounded-md border border-[#111c2d1a] px-3 py-2"
                              rows={3}
                            ></textarea>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Send Invitation</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">
                          <UploadCloud className="mr-2 h-4 w-4" />
                          Upload File
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Upload File</DialogTitle>
                          <DialogDescription>
                            Drag and drop your file or click to browse.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-6">
                          <div className="border-2 border-dashed border-[#111c2d1a] rounded-lg p-8 text-center">
                            <UploadCloud className="mx-auto h-12 w-12 text-blackblack-40" />
                            <p className="mt-2 text-sm text-blackblack-60">
                              Drag and drop your files here or{' '}
                              <span className="text-light-themeprimaryblue cursor-pointer">
                                browse
                              </span>
                            </p>
                            <p className="mt-1 text-xs text-blackblack-60">
                              Supported formats: JPG, PNG, PDF, DOC (Max 10MB)
                            </p>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Upload</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">
                          <Search className="mr-2 h-4 w-4" />
                          Advanced Search
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle>Advanced Search</DialogTitle>
                          <DialogDescription>
                            Narrow down your search with specific parameters.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-1 gap-2">
                            <Label htmlFor="search-term">Search Term</Label>
                            <div className="relative">
                              <Search className="absolute left-3 top-2.5 h-4 w-4 text-blackblack-60" />
                              <Input
                                id="search-term"
                                placeholder="Enter keywords"
                                className="pl-10"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="category">Category</Label>
                              <select
                                id="category"
                                className="w-full rounded-md border border-[#111c2d1a] px-3 py-2"
                              >
                                <option value="">All Categories</option>
                                <option value="technology">Technology</option>
                                <option value="business">Business</option>
                                <option value="design">Design</option>
                              </select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="sort-by">Sort By</Label>
                              <select
                                id="sort-by"
                                className="w-full rounded-md border border-[#111c2d1a] px-3 py-2"
                              >
                                <option value="relevance">Relevance</option>
                                <option value="date-desc">Newest First</option>
                                <option value="date-asc">Oldest First</option>
                                <option value="title">Title</option>
                              </select>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="date-from">Date From</Label>
                              <div className="relative">
                                <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-blackblack-60" />
                                <Input id="date-from" type="date" className="pl-10" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="date-to">Date To</Label>
                              <div className="relative">
                                <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-blackblack-60" />
                                <Input id="date-to" type="date" className="pl-10" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <DialogFooter className="flex justify-between">
                          <Button variant="outline">Reset</Button>
                          <Button type="submit">Search</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Dialog Sizes and States</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="text-base font-medium">Different Sizes</h4>
                      <div className="flex flex-wrap gap-3">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              Small Dialog
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[400px]">
                            <DialogHeader>
                              <DialogTitle>Small Dialog</DialogTitle>
                              <DialogDescription>This is a small-sized dialog.</DialogDescription>
                            </DialogHeader>
                            <div className="py-4">
                              <p>This dialog is ideal for simple messages or quick forms.</p>
                            </div>
                            <DialogFooter>
                              <Button type="submit">Save</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline">Medium Dialog</Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[550px]">
                            <DialogHeader>
                              <DialogTitle>Medium Dialog</DialogTitle>
                              <DialogDescription>This is a medium-sized dialog.</DialogDescription>
                            </DialogHeader>
                            <div className="py-4">
                              <p>This dialog is ideal for forms or detailed information.</p>
                            </div>
                            <DialogFooter>
                              <Button type="submit">Save</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="lg">
                              Large Dialog
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[700px]">
                            <DialogHeader>
                              <DialogTitle>Large Dialog</DialogTitle>
                              <DialogDescription>This is a large-sized dialog.</DialogDescription>
                            </DialogHeader>
                            <div className="py-4">
                              <p>
                                This dialog is ideal for complex forms or detailed content that
                                requires more space.
                              </p>
                            </div>
                            <DialogFooter>
                              <Button type="submit">Save</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-base font-medium">Dialog States</h4>
                      <div className="flex flex-wrap gap-3">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              className="border-actionsuccess text-actionsuccess hover:bg-actionsuccess/10"
                            >
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Success Dialog
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-actionsuccess-light flex items-center justify-center">
                                <CheckCircle className="h-6 w-6 text-actionsuccess" />
                              </div>
                              <DialogTitle className="text-center">Success!</DialogTitle>
                              <DialogDescription className="text-center">
                                Your action has been completed successfully.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter className="sm:justify-center mt-4">
                              <Button className="bg-actionsuccess hover:bg-actionsuccess/90 text-white">
                                Continue
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              className="border-actionalert text-actionalert hover:bg-actionalert/10"
                            >
                              <AlertTriangle className="mr-2 h-4 w-4" />
                              Warning Dialog
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-actionalert-light flex items-center justify-center">
                                <AlertTriangle className="h-6 w-6 text-actionalert" />
                              </div>
                              <DialogTitle className="text-center">Warning</DialogTitle>
                              <DialogDescription className="text-center">
                                This action may have consequences. Please proceed with caution.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter className="flex justify-center gap-3 mt-4">
                              <Button variant="outline">Cancel</Button>
                              <Button className="bg-actionalert hover:bg-actionalert/90 text-white">
                                Proceed
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              className="border-actionwarning text-actionwarning hover:bg-actionwarning/10"
                            >
                              <X className="mr-2 h-4 w-4" />
                              Error Dialog
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-actionwarning-light flex items-center justify-center">
                                <X className="h-6 w-6 text-actionwarning" />
                              </div>
                              <DialogTitle className="text-center">Error</DialogTitle>
                              <DialogDescription className="text-center">
                                An error occurred while processing your request. Please try again.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter className="sm:justify-center mt-4">
                              <Button className="bg-actionwarning hover:bg-actionwarning/90 text-white">
                                Try Again
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
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
                  <h3 className="text-lg font-medium">Basic Dialog Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// Basic dialog
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        This is a description for the dialog.
      </DialogDescription>
    </DialogHeader>
    <div className="py-4">
      <p>Dialog content goes here.</p>
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

// Alert dialog for confirmations
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline" className="border-actionwarning text-actionwarning hover:bg-actionwarning/10">
      <AlertTriangle className="mr-2 h-4 w-4" />
      Delete Item
    </Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction className="bg-actionwarning hover:bg-actionwarning/90 text-white">Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
                    </code>
                  </pre>

                  <h3 className="text-lg font-medium mt-6">Dialog with Form Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// Dialog with form
<Dialog>
  <DialogTrigger asChild>
    <Button>
      <Plus className="mr-2 h-4 w-4" />
      Create Item
    </Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Create New Item</DialogTitle>
      <DialogDescription>
        Fill out the form below to create a new item.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input id="name" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="description" className="text-right">
          Description
        </Label>
        <Input id="description" className="col-span-3" />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Create Item</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

// Dialog with icon header
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline" className="border-actionsuccess text-actionsuccess hover:bg-actionsuccess/10">
      <CheckCircle className="mr-2 h-4 w-4" />
      Success Dialog
    </Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-actionsuccess-light flex items-center justify-center">
        <CheckCircle className="h-6 w-6 text-actionsuccess" />
      </div>
      <DialogTitle className="text-center">Success!</DialogTitle>
      <DialogDescription className="text-center">
        Your action has been completed successfully.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter className="sm:justify-center mt-4">
      <Button className="bg-actionsuccess hover:bg-actionsuccess/90 text-white">Continue</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
      </main>
    </div>
  );
};

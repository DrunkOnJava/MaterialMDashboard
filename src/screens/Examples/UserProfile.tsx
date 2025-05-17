import React from 'react';
import { TitlebarByAnima } from '../Buttons/components/Titlebar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Button } from '../../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Badge } from '../../components/ui/badge';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Calendar,
  Edit2,
  Camera,
  Key,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  ExternalLink,
  Upload,
  ChevronRight,
  Clock,
  FileText,
  Settings,
  Bell,
  ShieldCheck,
  Lock,
} from 'lucide-react';
import { useToast } from '../../hooks/use-toast';

export const UserProfile = (): JSX.Element => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = React.useState('profile');

  // Mock user data
  const userData = {
    id: 'U12345',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    jobTitle: 'Senior Product Designer',
    department: 'Design',
    joinDate: 'March 15, 2023',
    timezone: 'Pacific Standard Time (PST)',
    bio: 'Experienced product designer with a passion for creating intuitive and beautiful user interfaces. I enjoy solving complex problems and turning them into simple and elegant solutions.',
    avatar: 'https://i.pravatar.cc/300?img=8',
    skills: [
      'UI/UX Design',
      'Prototyping',
      'User Research',
      'Design Systems',
      'Figma',
      'Adobe XD',
      'Sketch',
    ],
    social: {
      twitter: '@johndoe',
      linkedin: 'johndoe',
      github: 'johndoe',
      instagram: 'johndoedesign',
    },
    activities: [
      { type: 'updated', resource: 'profile picture', time: '2 hours ago' },
      { type: 'commented', resource: 'Project Alpha design proposal', time: 'Yesterday' },
      { type: 'completed', resource: 'Homepage redesign', time: '3 days ago' },
      { type: 'started', resource: 'Mobile app wireframes', time: '1 week ago' },
      { type: 'assigned', resource: 'Design System Documentation', time: '2 weeks ago' },
    ],
  };

  // Handle image upload
  const handleImageUpload = () => {
    toast({
      title: 'Upload triggered',
      description: 'Profile picture upload functionality would be implemented here.',
    });
  };

  // Handle profile update
  const handleProfileUpdate = () => {
    toast({
      title: 'Profile Updated',
      description: 'Your profile information has been updated successfully.',
    });
  };

  // Handle password change
  const handlePasswordChange = () => {
    toast({
      title: 'Password Changed',
      description: 'Your password has been updated successfully.',
    });
  };

  // Handle notification settings update
  const handleNotificationUpdate = () => {
    toast({
      title: 'Notification Settings Updated',
      description: 'Your notification preferences have been saved.',
    });
  };

  return (
    <div className="p-0 h-full">
      <TitlebarByAnima title="User Profile" />
      <main className="p-6">
        <div className="space-y-6">
            {/* Profile Header */}
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="relative">
                    <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-white shadow-md">
                      <AvatarImage src={userData.avatar} alt={userData.name} />
                      <AvatarFallback className="text-2xl">
                        {userData.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <button
                      className="absolute bottom-0 right-0 bg-light-themeprimaryblue text-white rounded-full p-2 shadow-md"
                      onClick={handleImageUpload}
                    >
                      <Camera className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h2 className="text-2xl font-bold text-blackblack-100">{userData.name}</h2>
                        <p className="text-blackblack-60 flex items-center justify-center md:justify-start">
                          <Briefcase className="h-4 w-4 mr-1 inline" /> {userData.jobTitle} •{' '}
                          {userData.department}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                          {userData.skills.slice(0, 3).map((skill, index) => (
                            <Badge
                              key={index}
                              className="bg-light-themeprimarylight-blue text-light-themeprimaryblue"
                            >
                              {skill}
                            </Badge>
                          ))}
                          {userData.skills.length > 3 && (
                            <Badge className="bg-surfaceslightgray-10 text-blackblack-60">
                              +{userData.skills.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 flex space-x-2">
                        <Button variant="outline" className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <span className="hidden sm:inline">Message</span>
                        </Button>
                        <Button className="flex items-center gap-2">
                          <Edit2 className="h-4 w-4" />
                          <span className="hidden sm:inline">Edit Profile</span>
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4 text-sm text-blackblack-60">
                      <div className="flex items-center justify-center md:justify-start">
                        <Mail className="h-4 w-4 mr-2" />
                        {userData.email}
                      </div>
                      <div className="flex items-center justify-center md:justify-start">
                        <Phone className="h-4 w-4 mr-2" />
                        {userData.phone}
                      </div>
                      <div className="flex items-center justify-center md:justify-start">
                        <MapPin className="h-4 w-4 mr-2" />
                        {userData.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs container */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <div className="bg-white rounded-t-xl border border-[#111c2d1a] p-1 flex overflow-x-auto">
                <TabsList className="bg-transparent p-0 h-auto w-full flex">
                  <TabsTrigger
                    value="profile"
                    className="flex-1 data-[state=active]:bg-surfaceslightgray-10 data-[state=active]:shadow-none rounded-md py-2"
                  >
                    Profile
                  </TabsTrigger>
                  <TabsTrigger
                    value="activity"
                    className="flex-1 data-[state=active]:bg-surfaceslightgray-10 data-[state=active]:shadow-none rounded-md py-2"
                  >
                    Activity
                  </TabsTrigger>
                  <TabsTrigger
                    value="security"
                    className="flex-1 data-[state=active]:bg-surfaceslightgray-10 data-[state=active]:shadow-none rounded-md py-2"
                  >
                    Security
                  </TabsTrigger>
                  <TabsTrigger
                    value="notifications"
                    className="flex-1 data-[state=active]:bg-surfaceslightgray-10 data-[state=active]:shadow-none rounded-md py-2"
                  >
                    Notifications
                  </TabsTrigger>
                </TabsList>
              </div>

              <Card className="rounded-t-none shadow-light-theme-shadow-medium">
                <CardContent className="p-6">
                  <TabsContent value="profile" className="mt-0 space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <h3 className="text-lg font-medium mb-4">About Me</h3>
                          <p className="text-blackblack-80">{userData.bio}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input id="fullName" defaultValue={userData.name} />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" defaultValue={userData.email} />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" defaultValue={userData.phone} />
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="location">Location</Label>
                                <Input id="location" defaultValue={userData.location} />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="timezone">Timezone</Label>
                                <Input id="timezone" defaultValue={userData.timezone} />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="bio">Bio</Label>
                                <textarea
                                  id="bio"
                                  className="w-full min-h-[80px] rounded-md border border-[#111c2d1a] px-3 py-2 text-sm"
                                  defaultValue={userData.bio}
                                ></textarea>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6">
                            <Button onClick={handleProfileUpdate}>Save Changes</Button>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-4">Work Information</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="jobTitle">Job Title</Label>
                              <Input id="jobTitle" defaultValue={userData.jobTitle} />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="department">Department</Label>
                              <Input id="department" defaultValue={userData.department} />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="joinDate">Join Date</Label>
                              <Input id="joinDate" defaultValue={userData.joinDate} disabled />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium mb-4">Skills</h3>
                          <div className="bg-surfaceslightgray-10 p-4 rounded-lg">
                            <div className="flex flex-wrap gap-2">
                              {userData.skills.map((skill, index) => (
                                <Badge
                                  key={index}
                                  className="bg-white text-blackblack-80 border border-[#111c2d1a]"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                            <Button variant="ghost" size="sm" className="mt-3 w-full">
                              <Edit2 className="h-3 w-3 mr-1" /> Edit Skills
                            </Button>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-4">Social Profiles</h3>
                          <div className="bg-surfaceslightgray-10 p-4 rounded-lg space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Twitter className="h-5 w-5 text-[#1DA1F2] mr-3" />
                                <span className="text-blackblack-80">
                                  {userData.social.twitter}
                                </span>
                              </div>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Linkedin className="h-5 w-5 text-[#0A66C2] mr-3" />
                                <span className="text-blackblack-80">
                                  {userData.social.linkedin}
                                </span>
                              </div>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Github className="h-5 w-5 text-blackblack-100 mr-3" />
                                <span className="text-blackblack-80">{userData.social.github}</span>
                              </div>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Instagram className="h-5 w-5 text-[#E4405F] mr-3" />
                                <span className="text-blackblack-80">
                                  {userData.social.instagram}
                                </span>
                              </div>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </div>
                            <Button variant="ghost" size="sm" className="w-full">
                              <Edit2 className="h-3 w-3 mr-1" /> Edit Social Profiles
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="activity" className="mt-0 space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
                          <div className="space-y-4 relative pl-6 before:absolute before:left-[9px] before:top-2 before:bottom-6 before:w-[2px] before:bg-[#111c2d1a]">
                            {userData.activities.map((activity, index) => (
                              <div key={index} className="relative">
                                <div className="absolute left-[-24px] top-1 w-5 h-5 rounded-full bg-white border-2 border-light-themeprimaryblue z-10"></div>
                                <div className="bg-white p-4 rounded-lg border border-[#111c2d1a]">
                                  <div className="flex items-center justify-between">
                                    <h4 className="font-medium text-blackblack-100">
                                      {activity.type === 'updated' && 'Updated'}
                                      {activity.type === 'commented' && 'Commented on'}
                                      {activity.type === 'completed' && 'Completed'}
                                      {activity.type === 'started' && 'Started working on'}
                                      {activity.type === 'assigned' && 'Was assigned to'}
                                      &nbsp;
                                      <span className="text-light-themeprimaryblue">
                                        {activity.resource}
                                      </span>
                                    </h4>
                                    <span className="text-xs text-blackblack-60 flex items-center">
                                      <Clock className="h-3 w-3 mr-1" /> {activity.time}
                                    </span>
                                  </div>
                                  {activity.type === 'commented' && (
                                    <p className="text-sm text-blackblack-80 mt-2 pl-3 border-l-2 border-[#111c2d1a]">
                                      "I think we should improve the contrast ratio of the CTA
                                      buttons to meet accessibility standards."
                                    </p>
                                  )}
                                  <div className="mt-2 flex">
                                    <Button variant="ghost" size="sm">
                                      <FileText className="h-3 w-3 mr-1" /> View Details
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="mt-4 text-center">
                            <Button variant="outline">View All Activity</Button>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium mb-4">Statistics</h3>
                          <div className="bg-surfaceslightgray-10 p-4 rounded-lg">
                            <div className="space-y-4">
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm font-medium">Completed Projects</span>
                                  <span className="text-sm font-medium">24</span>
                                </div>
                                <div className="bg-surfaceslightgray-20 rounded-full h-2.5">
                                  <div className="bg-light-themeprimaryblue h-2.5 rounded-full w-[80%]"></div>
                                </div>
                              </div>

                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm font-medium">Tasks Completed</span>
                                  <span className="text-sm font-medium">156/187</span>
                                </div>
                                <div className="bg-surfaceslightgray-20 rounded-full h-2.5">
                                  <div className="bg-actionsuccess h-2.5 rounded-full w-[85%]"></div>
                                </div>
                              </div>

                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm font-medium">Hours Logged</span>
                                  <span className="text-sm font-medium">245h</span>
                                </div>
                                <div className="bg-surfaceslightgray-20 rounded-full h-2.5">
                                  <div className="bg-light-themesecondarypurple h-2.5 rounded-full w-[65%]"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-4">Teams</h3>
                          <div className="bg-surfaceslightgray-10 p-4 rounded-lg space-y-3">
                            {[
                              { name: 'Product Design', members: 8, role: 'Lead Designer' },
                              { name: 'Mobile App', members: 12, role: 'Contributor' },
                              { name: 'Design System', members: 5, role: 'Manager' },
                            ].map((team, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between p-2 hover:bg-white rounded cursor-pointer"
                              >
                                <div>
                                  <h4 className="font-medium text-blackblack-100">{team.name}</h4>
                                  <p className="text-xs text-blackblack-60">
                                    {team.members} members • {team.role}
                                  </p>
                                </div>
                                <ChevronRight className="h-4 w-4 text-blackblack-60" />
                              </div>
                            ))}
                            <Button variant="ghost" size="sm" className="w-full">
                              View All Teams
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="security" className="mt-0 space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <h3 className="text-lg font-medium mb-4">Change Password</h3>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="current-password">Current Password</Label>
                              <Input id="current-password" type="password" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="new-password">New Password</Label>
                              <Input id="new-password" type="password" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="confirm-password">Confirm New Password</Label>
                              <Input id="confirm-password" type="password" />
                            </div>
                            <Button onClick={handlePasswordChange}>Update Password</Button>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
                          <Card>
                            <CardHeader className="pb-3">
                              <div className="flex justify-between items-center">
                                <CardTitle className="text-lg">Two-Factor Authentication</CardTitle>
                                <Badge className="bg-actionalert-light text-actionalert">
                                  Not Enabled
                                </Badge>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-blackblack-80 mb-4">
                                Add an extra layer of security to your account by enabling
                                two-factor authentication.
                              </p>
                              <div className="flex items-center p-3 mb-4 bg-light-themeprimarylight-blue rounded-md text-light-themeprimaryblue text-sm">
                                <ShieldCheck className="h-5 w-5 mr-2 flex-shrink-0" />
                                <p>
                                  Two-factor authentication adds an additional layer of security to
                                  your account by requiring more than just a password to sign in.
                                </p>
                              </div>
                            </CardContent>
                            <CardFooter>
                              <Button className="w-full sm:w-auto">
                                Enable Two-Factor Authentication
                              </Button>
                            </CardFooter>
                          </Card>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium mb-4">Sessions</h3>
                          <div className="bg-surfaceslightgray-10 p-4 rounded-lg space-y-4">
                            <div className="flex justify-between items-start p-3 bg-white rounded-md border border-[#111c2d1a]">
                              <div className="flex items-start">
                                <div className="w-8 h-8 bg-light-themeprimarylight-blue rounded-full flex items-center justify-center mr-3">
                                  <Settings className="h-4 w-4 text-light-themeprimaryblue" />
                                </div>
                                <div>
                                  <h4 className="font-medium text-blackblack-100">
                                    Current Session
                                  </h4>
                                  <p className="text-xs text-blackblack-60">
                                    Chrome on Windows • San Francisco
                                  </p>
                                  <p className="text-xs text-blackblack-60">
                                    IP: 192.168.1.1 • Just now
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-between items-start p-3 bg-white rounded-md border border-[#111c2d1a]">
                              <div className="flex items-start">
                                <div className="w-8 h-8 bg-surfaceslightgray-20 rounded-full flex items-center justify-center mr-3">
                                  <Settings className="h-4 w-4 text-blackblack-60" />
                                </div>
                                <div>
                                  <h4 className="font-medium text-blackblack-100">
                                    Safari on macOS
                                  </h4>
                                  <p className="text-xs text-blackblack-60">
                                    San Francisco • IP: 192.168.1.2
                                  </p>
                                  <p className="text-xs text-blackblack-60">
                                    Last active: 2 days ago
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-between items-start p-3 bg-white rounded-md border border-[#111c2d1a]">
                              <div className="flex items-start">
                                <div className="w-8 h-8 bg-surfaceslightgray-20 rounded-full flex items-center justify-center mr-3">
                                  <Settings className="h-4 w-4 text-blackblack-60" />
                                </div>
                                <div>
                                  <h4 className="font-medium text-blackblack-100">iPhone App</h4>
                                  <p className="text-xs text-blackblack-60">
                                    iOS 16 • IP: 192.168.1.3
                                  </p>
                                  <p className="text-xs text-blackblack-60">
                                    Last active: 3 days ago
                                  </p>
                                </div>
                              </div>
                            </div>

                            <Button variant="outline" className="w-full">
                              Sign out of all sessions
                            </Button>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-4">Account Security</h3>
                          <div className="bg-surfaceslightgray-10 p-4 rounded-lg space-y-3">
                            <div className="flex items-center justify-between p-3 bg-white rounded-md border border-[#111c2d1a]">
                              <div className="flex items-center">
                                <Lock className="h-4 w-4 text-light-themeprimaryblue mr-2" />
                                <span className="text-blackblack-80">Password strength</span>
                              </div>
                              <Badge className="bg-actionsuccess text-white">Strong</Badge>
                            </div>

                            <div className="flex items-center justify-between p-3 bg-white rounded-md border border-[#111c2d1a]">
                              <div className="flex items-center">
                                <Key className="h-4 w-4 text-actionalert mr-2" />
                                <span className="text-blackblack-80">
                                  Two-factor authentication
                                </span>
                              </div>
                              <Badge className="bg-actionalert-light text-actionalert">
                                Disabled
                              </Badge>
                            </div>

                            <div className="flex items-center justify-between p-3 bg-white rounded-md border border-[#111c2d1a]">
                              <div className="flex items-center">
                                <ShieldCheck className="h-4 w-4 text-actionsuccess mr-2" />
                                <span className="text-blackblack-80">Last password change</span>
                              </div>
                              <span className="text-xs text-blackblack-60">30 days ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="notifications" className="mt-0 space-y-6">
                    <div className="max-w-3xl">
                      <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
                      <p className="text-blackblack-80 mb-6">
                        Manage how we contact you. You can opt out of receiving certain types of
                        notifications.
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium mb-4 flex items-center">
                            <Bell className="h-5 w-5 mr-2 text-light-themeprimaryblue" />
                            Email Notifications
                          </h4>
                          <div className="space-y-4">
                            {[
                              {
                                id: 'email-comments',
                                label: 'Comments on your posts',
                                description:
                                  'When someone comments on your posts or replies to your comments',
                              },
                              {
                                id: 'email-mentions',
                                label: 'Mentions and tags',
                                description:
                                  'When someone @mentions you or tags you in a comment or post',
                              },
                              {
                                id: 'email-updates',
                                label: 'Project updates',
                                description:
                                  "When there are significant updates to projects you're part of",
                              },
                              {
                                id: 'email-reminders',
                                label: 'Reminders',
                                description: 'When you have pending tasks or upcoming meetings',
                              },
                            ].map(item => (
                              <div
                                key={item.id}
                                className="flex items-start justify-between border-b border-[#111c2d1a] pb-4 last:border-b-0 last:pb-0"
                              >
                                <div>
                                  <Label
                                    htmlFor={item.id}
                                    className="font-medium text-blackblack-100"
                                  >
                                    {item.label}
                                  </Label>
                                  <p className="text-sm text-blackblack-60">{item.description}</p>
                                </div>
                                <input
                                  type="checkbox"
                                  id={item.id}
                                  className="rounded border-blackblack-40 text-light-themeprimaryblue focus:ring-light-themeprimaryblue"
                                  defaultChecked
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium mb-4 flex items-center">
                            <Bell className="h-5 w-5 mr-2 text-light-themeprimaryblue" />
                            Push Notifications
                          </h4>
                          <div className="space-y-4">
                            {[
                              {
                                id: 'push-messages',
                                label: 'Direct messages',
                                description: 'When someone sends you a direct message',
                              },
                              {
                                id: 'push-comments',
                                label: 'Comments and replies',
                                description:
                                  'When someone comments on your posts or replies to your comments',
                              },
                              {
                                id: 'push-mentions',
                                label: 'Mentions and tags',
                                description:
                                  'When someone @mentions you or tags you in a comment or post',
                              },
                            ].map(item => (
                              <div
                                key={item.id}
                                className="flex items-start justify-between border-b border-[#111c2d1a] pb-4 last:border-b-0 last:pb-0"
                              >
                                <div>
                                  <Label
                                    htmlFor={item.id}
                                    className="font-medium text-blackblack-100"
                                  >
                                    {item.label}
                                  </Label>
                                  <p className="text-sm text-blackblack-60">{item.description}</p>
                                </div>
                                <input
                                  type="checkbox"
                                  id={item.id}
                                  className="rounded border-blackblack-40 text-light-themeprimaryblue focus:ring-light-themeprimaryblue"
                                  defaultChecked={item.id === 'push-messages'}
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button onClick={handleNotificationUpdate}>Save Preferences</Button>
                      </div>
                    </div>
                  </TabsContent>
                </CardContent>
              </Card>
            </Tabs>
        </div>
      </main>
    </div>
  );
};

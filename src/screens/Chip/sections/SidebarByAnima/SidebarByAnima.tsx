import { 
  ChevronDownIcon,
  ShoppingCart,
  BarChart3,
  Users,
  Flame,
  Package,
  Component,
  SquareMousePointer,
  FileInput,
  LineChart,
  Layout,
  Palette,
  Calendar,
  CheckSquare,
  Columns,
  MessageCircle,
  StickyNote,
  Contact2,
  FileText,
  Mail,
  Type,
  Layers,
  Grid3x3,
  Image as ImageIcon,
  User,
  Clock,
  Upload,
  Bell,
  Settings,
  HelpCircle
} from 'lucide-react';
import React, { useState } from 'react';
import { Avatar, AvatarImage } from '../../../../components/ui/avatar';
import { ScrollArea } from '../../../../components/ui/scroll-area';
import { Separator } from '../../../../components/ui/separator';
import { Link, useLocation } from 'react-router-dom';

// Define navigation item types
interface NavItem {
  icon: React.ReactNode;
  label: string;
  path?: string;
  isActive?: boolean;
  hasSubmenu?: boolean;
  submenuItems?: SubNavItem[];
}

interface SubNavItem {
  label: string;
  path: string;
}

// Define navigation sections
const dashboardItems: NavItem[] = [
  { icon: <ShoppingCart className="w-4 h-4" />, label: 'eCommerce', path: '/', isActive: true },
  { icon: <BarChart3 className="w-4 h-4" />, label: 'Analytics', path: '/analytics' },
  { icon: <Users className="w-4 h-4" />, label: 'CRM', path: '/crm' },
  { icon: <Flame className="w-4 h-4" />, label: 'Blue Mountain Wicks', path: '/blue-mountain-wicks' },
];

const appItems: NavItem[] = [
  { icon: <Package className="w-4 h-4" />, label: 'eCommerce', path: '/ecommerce' },
  {
    icon: <Component className="w-4 h-4" />,
    label: 'Components',
    hasSubmenu: true,
    submenuItems: [
      { label: 'Chip', path: '/ui-components' },
      { label: 'Cards', path: '/components/cards' },
      { label: 'Alerts', path: '/components/alerts' },
      { label: 'Modals', path: '/components/modals' },
      { label: 'Tabs', path: '/components/tabs' },
      { label: 'Accordion', path: '/components/accordion' },
      { label: 'Tables', path: '/components/tables' },
      { label: 'Avatars', path: '/components/avatars' },
      { label: 'Progress', path: '/components/progress' },
      { label: 'Pagination', path: '/components/pagination' },
      { label: 'Slider', path: '/components/slider' },
    ],
  },
  {
    icon: <SquareMousePointer className="w-4 h-4" />,
    label: 'Buttons',
    hasSubmenu: true,
    submenuItems: [
      { label: 'Primary Buttons', path: '/buttons/primary' },
      { label: 'Secondary Buttons', path: '/buttons/secondary' },
      { label: 'Outline Buttons', path: '/buttons/outline' },
      { label: 'Ghost Buttons', path: '/buttons/ghost' },
      { label: 'Icon Buttons', path: '/buttons/icon' },
      { label: 'Success Buttons', path: '/buttons/success' },
      { label: 'Warning Buttons', path: '/buttons/warning' },
      { label: 'Danger Buttons', path: '/buttons/danger' },
      { label: 'Link Buttons', path: '/buttons/link' },
      { label: 'Loading Buttons', path: '/buttons/loading' },
      { label: 'Grouped Buttons', path: '/buttons/grouped' },
    ],
  },
  {
    icon: <FileInput className="w-4 h-4" />,
    label: 'Forms',
    hasSubmenu: true,
    submenuItems: [
      { label: 'Input Fields', path: '/forms/input-fields' },
      { label: 'Select Fields', path: '/forms/select-fields' },
      { label: 'Checkbox & Radio', path: '/forms/checkbox-radio' },
      { label: 'Form Validation', path: '/forms/form-validation' },
      { label: 'Date Picker', path: '/forms/date-picker' },
    ],
  },
  {
    icon: <LineChart className="w-4 h-4" />,
    label: 'Charts',
    hasSubmenu: true,
    submenuItems: [
      { label: 'Bar Charts', path: '/charts/bar' },
      { label: 'Line Charts', path: '/charts/line' },
      { label: 'Pie Charts', path: '/charts/pie' },
      { label: 'Area Charts', path: '/charts/area' },
      { label: 'Scatter Charts', path: '/charts/scatter' },
    ],
  },
  {
    icon: <Layout className="w-4 h-4" />,
    label: 'UI',
    hasSubmenu: true,
    submenuItems: [
      { label: 'Typography', path: '/ui/typography' },
      { label: 'Colors', path: '/ui/colors' },
      { label: 'Icons', path: '/ui/icons' },
      { label: 'Grid System', path: '/ui/grid-system' },
    ],
  },
  {
    icon: <Layers className="w-4 h-4" />,
    label: 'Example Pages',
    hasSubmenu: true,
    submenuItems: [
      { label: 'User Profile', path: '/examples/user-profile' },
      { label: 'Calendar', path: '/examples/calendar' },
      { label: 'Timeline', path: '/examples/timeline' },
      { label: 'File Upload', path: '/examples/file-upload' },
      { label: 'Notifications', path: '/examples/notifications' },
    ],
  },
  { icon: <Calendar className="w-4 h-4" />, label: 'Calendar', path: '/calendar' },
  {
    icon: <CheckSquare className="w-4 h-4" />,
    label: 'Todo',
    hasSubmenu: true,
    submenuItems: [
      { label: 'Todo List', path: '/todo' },
      { label: 'Todo Demo', path: '/todo-demo' },
    ],
  },
  { icon: <Columns className="w-4 h-4" />, label: 'Kanban', path: '/kanban' },
  { icon: <MessageCircle className="w-4 h-4" />, label: 'Chat', path: '/chat' },
  { icon: <StickyNote className="w-4 h-4" />, label: 'Notes', path: '/notes' },
  { icon: <Contact2 className="w-4 h-4" />, label: 'Contact Table', path: '/contact-table' },
  { icon: <Contact2 className="w-4 h-4" />, label: 'Contact List', path: '/contact-list' },
  { icon: <FileText className="w-4 h-4" />, label: 'Invoice', path: '/invoice' },
];

// Define icon sidebar items
const iconSidebarItems = [
  { icon: <LineChart className="w-5 h-5" />, isActive: true, path: '/charts/bar', label: 'Charts' },
  { icon: <BarChart3 className="w-5 h-5" />, path: '/analytics', label: 'Analytics' },
  { icon: <Package className="w-5 h-5" />, path: '/ecommerce', label: 'eCommerce' },
  { icon: <Users className="w-5 h-5" />, path: '/crm', label: 'CRM' },
];

const iconSidebarItems2 = [
  { icon: <StickyNote className="w-5 h-5" />, path: '/notes', label: 'Notes' },
  { icon: <Layout className="w-5 h-5" />, path: '/ui/typography', label: 'UI' },
  { icon: <Bell className="w-5 h-5" />, path: '/examples/notifications', label: 'Notifications' },
  { icon: <HelpCircle className="w-5 h-5" />, path: '/help', label: 'Help' },
  { icon: <User className="w-5 h-5" />, path: '/examples/user-profile', label: 'User Profile' },
  { icon: <Settings className="w-5 h-5" />, path: '/settings', label: 'Settings' },
];

export const SidebarByAnima = (): JSX.Element => {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState<string[]>([
    'Buttons',
    'Components',
    'Forms',
    'Charts',
    'UI',
    'Example Pages',
    'Todo'
  ]); // Default expand menus

  const toggleSubmenu = (label: string) => {
    setExpandedMenus(prev =>
      prev.includes(label) ? prev.filter(item => item !== label) : [...prev, label]
    );
  };

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <div id="sidebar-navigation" className="flex h-full bg-blackwhite">
      {/* Icon sidebar */}
      <div className="flex flex-col w-20 items-center px-3 py-0 border-r border-[#e4ebf0]">
        {/* Logo section */}
        <div className="flex flex-col items-center justify-center gap-2.5 py-[30px] w-full border-b border-dashed border-[#e4ebf0]">
          <div className="w-10 h-[29px] bg-[url(/logo-icon-svg.svg)] bg-[100%_100%]" />
        </div>

        {/* Navigation icons */}
        <div className="flex flex-col items-start">
          {/* First icon group */}
          <div className="gap-1 py-3 border-b-2 border-dashed border-[#e4ebf0] inline-flex flex-col items-start">
            {iconSidebarItems.map((item, index) => (
              <Link
                key={index}
                to={item.path || '#'}
                className={`w-12 h-12 flex items-center justify-center rounded-[999px] ${
                  isActive(item.path || '') || item.isActive ? 'bg-light-themeprimarylight-blue' : ''
                }`}
                title={item.label}
              >
                {item.icon}
              </Link>
            ))}
          </div>

          {/* Second icon group */}
          <div className="gap-1 py-3 border-b-2 border-dashed border-[#e4ebf0] inline-flex flex-col items-start">
            {iconSidebarItems2.map((item, index) => (
              <Link
                key={index}
                to={item.path || '#'}
                className={`w-12 h-12 flex items-center justify-center rounded-[999px] ${
                  isActive(item.path || '') ? 'bg-light-themeprimarylight-blue' : ''
                }`}
                title={item.label}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* User avatar */}
        <div className="flex items-center justify-center py-[30px] w-full mt-auto">
          <Avatar className="w-[35px] h-[35px]">
            <AvatarImage src="/user.png" alt="User" />
          </Avatar>
        </div>
      </div>

      {/* Main sidebar with text */}
      <ScrollArea className="flex-1 h-full bg-blackwhite shadow-[1px_0px_10px_#0000000d]">
        <div className="flex flex-col items-start gap-3.5 px-4 py-[30px]">
          {/* Dashboards section */}
          <div className="flex flex-col items-start w-full">
            <div className="flex items-start gap-2.5 px-0 py-2 w-full">
              <div className="w-fit mt-[-1.00px] font-normal text-blackblack-100 text-[15px] tracking-[-0.30px] leading-[21px]">
                Dashboards
              </div>
            </div>

            {dashboardItems.map((item, index) => (
              <Link
                key={index}
                to={item.path || '#'}
                className={`flex items-center gap-2.5 px-4 py-3 w-full ${
                  isActive(item.path || '') ? 'bg-light-themeprimarylight-blue rounded-[30px]' : ''
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  {item.icon}
                </div>
                <div
                  className={`flex-1 mt-[-1.00px] font-normal text-[15px] leading-[21px] ${
                    isActive(item.path || '')
                      ? 'text-light-themeprimaryblue'
                      : 'text-blackblack-100'
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>

          <Separator className="w-full" />

          {/* Apps section */}
          <div className="flex flex-col items-start w-full">
            <div className="flex items-start gap-2.5 px-0 py-2 w-full">
              <div className="w-fit mt-[-1.00px] font-normal text-blackblack-100 text-[15px] tracking-[-0.30px] leading-[21px]">
                Apps
              </div>
            </div>

            {appItems.map((item, index) => (
              <div key={index} className="w-full">
                {item.hasSubmenu ? (
                  <div className="w-full">
                    <div
                      className="flex items-center gap-2.5 px-4 py-3 w-full cursor-pointer"
                      onClick={() => toggleSubmenu(item.label)}
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div className="flex-1 mt-[-1.00px] font-normal text-blackblack-100 text-[15px] leading-[21px]">
                        {item.label}
                      </div>
                      <ChevronDownIcon
                        className={`w-5 h-5 transition-transform ${
                          expandedMenus.includes(item.label) ? 'rotate-180' : ''
                        }`}
                      />
                    </div>

                    {expandedMenus.includes(item.label) && item.submenuItems && (
                      <div className="pl-9 pb-2">
                        {item.submenuItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className={`flex items-center py-2 px-3 rounded-[30px] w-full ${
                              isActive(subItem.path)
                                ? 'bg-light-themeprimarylight-blue text-light-themeprimaryblue'
                                : 'text-blackblack-100 hover:bg-surfaceslightgray-10'
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path || '#'}
                    className="flex items-center gap-2.5 px-4 py-3 w-full"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div className="flex-1 mt-[-1.00px] font-normal text-blackblack-100 text-[15px] leading-[21px]">
                      {item.label}
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

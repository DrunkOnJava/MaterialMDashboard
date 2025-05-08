import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { Separator } from "../../../../components/ui/separator";
import { Link, useLocation } from "react-router-dom";

// Define navigation item types
interface NavItem {
  icon: string;
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
  { icon: "/group-15.png", label: "eCommerce", path: "/", isActive: true },
  { icon: "/group-16.png", label: "Analytics", path: "/analytics" },
  { icon: "/group-17.png", label: "CRM", path: "/crm" },
  { icon: "/group-20.png", label: "Blue Mountain Wicks", path: "/blue-mountain-wicks" },
];

const appItems: NavItem[] = [
  { icon: "/group-18.png", label: "eCommerce", path: "/ecommerce" },
  { 
    icon: "/group-19.png", 
    label: "Components", 
    hasSubmenu: true,
    submenuItems: [
      { label: "Chip", path: "/ui-components" },
      { label: "Cards", path: "/components/cards" },
      { label: "Alerts", path: "/components/alerts" },
      { label: "Modals", path: "/components/modals" },
      { label: "Tabs", path: "/components/tabs" },
      { label: "Accordion", path: "/components/accordion" },
      { label: "Tables", path: "/components/tables" },
      { label: "Avatars", path: "/components/avatars" },
      { label: "Progress", path: "/components/progress" },
      { label: "Pagination", path: "/components/pagination" },
    ]
  },
  { 
    icon: "/group-20.png", 
    label: "Buttons", 
    hasSubmenu: true,
    submenuItems: [
      { label: "Primary Buttons", path: "/buttons/primary" },
      { label: "Secondary Buttons", path: "/buttons/secondary" },
      { label: "Outline Buttons", path: "/buttons/outline" },
      { label: "Ghost Buttons", path: "/buttons/ghost" },
      { label: "Icon Buttons", path: "/buttons/icon" },
      { label: "Success Buttons", path: "/buttons/success" },
      { label: "Warning Buttons", path: "/buttons/warning" },
      { label: "Danger Buttons", path: "/buttons/danger" },
      { label: "Link Buttons", path: "/buttons/link" },
      { label: "Loading Buttons", path: "/buttons/loading" },
      { label: "Grouped Buttons", path: "/buttons/grouped" },
    ]
  },
  { 
    icon: "/group-21.png", 
    label: "Forms", 
    hasSubmenu: true,
    submenuItems: [
      { label: "Input Fields", path: "/forms/input-fields" },
      { label: "Select Fields", path: "/forms/select-fields" },
      { label: "Checkbox & Radio", path: "/forms/checkbox-radio" },
      { label: "Form Validation", path: "/forms/validation" },
    ]
  },
  { 
    icon: "/group-5.png", 
    label: "Charts", 
    hasSubmenu: true,
    submenuItems: [
      { label: "Bar Charts", path: "/charts/bar-charts" },
      { label: "Line Charts", path: "/charts/line-charts" },
      { label: "Pie Charts", path: "/charts/pie-charts" },
      { label: "Area Charts", path: "/charts/area-charts" },
      { label: "Scatter Charts", path: "/charts/scatter-charts" },
    ]
  },
  { 
    icon: "/group-10.png", 
    label: "UI", 
    hasSubmenu: true,
    submenuItems: [
      { label: "Typography", path: "/ui/typography" },
      { label: "Colors", path: "/ui/colors" },
      { label: "Icons", path: "/ui/icons" },
      { label: "Grid System", path: "/ui/grid-system" },
    ]
  },
  { 
    icon: "/group-13.png", 
    label: "Example Pages", 
    hasSubmenu: true,
    submenuItems: [
      { label: "User Profile", path: "/examples/user-profile" },
      { label: "Calendar", path: "/examples/calendar" },
      { label: "Timeline", path: "/examples/timeline" },
      { label: "File Upload", path: "/examples/file-upload" },
      { label: "Notifications", path: "/examples/notifications" },
    ]
  },
  { icon: "/group-22.png", label: "Calendar", path: "/calendar" },
  { icon: "/group-23.png", label: "Kanban", path: "/kanban" },
  { icon: "/group-24.png", label: "Chat", path: "/chat" },
  { icon: "/group-25.png", label: "Notes", path: "/notes" },
  { icon: "/group-26.png", label: "Contact Table", path: "/contact-table" },
  { icon: "/group-27.png", label: "Contact List", path: "/contact-list" },
  { icon: "/group-28.png", label: "Invoice", path: "/invoice" },
];

// Define icon sidebar items
const iconSidebarItems = [
  { icon: "/group-5.png", isActive: true },
  { icon: "/group-6.png" },
  { icon: "/group-7.png" },
  { icon: "/group-8.png" },
];

const iconSidebarItems2 = [
  { icon: "/group-9.png" },
  { icon: "/group-10.png" },
  { icon: "/group-11.png" },
  { icon: "/group-12.png" },
  { icon: "/group-13.png" },
  { icon: "/group-14.png" },
];

export const SidebarByAnima = (): JSX.Element => {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState<string[]>(["Buttons", "Components", "Forms", "Charts", "UI", "Example Pages"]); // Default expand menus

  const toggleSubmenu = (label: string) => {
    setExpandedMenus(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label) 
        : [...prev, label]
    );
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex h-full bg-blackwhite">
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
              <div
                key={index}
                className={`w-12 h-12 flex items-center justify-center rounded-[999px] ${
                  item.isActive ? "bg-light-themeprimarylight-blue" : ""
                }`}
              >
                <img
                  className="w-[21.5px] h-[17.5px]"
                  alt="Navigation icon"
                  src={item.icon}
                />
              </div>
            ))}
          </div>

          {/* Second icon group */}
          <div className="gap-1 py-3 border-b-2 border-dashed border-[#e4ebf0] inline-flex flex-col items-start">
            {iconSidebarItems2.map((item, index) => (
              <div
                key={index}
                className="w-12 h-12 flex items-center justify-center rounded-[999px]"
              >
                <img
                  className="w-5 h-5"
                  alt="Navigation icon"
                  src={item.icon}
                />
              </div>
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
                to={item.path || "#"}
                className={`flex items-center gap-2.5 px-4 py-3 w-full ${
                  isActive(item.path || "") 
                    ? "bg-light-themeprimarylight-blue rounded-[30px]"
                    : ""
                }`}
              >
                <div className="w-5 h-5">
                  <img
                    className="w-[17px] h-[17px]"
                    alt={item.label}
                    src={item.icon}
                  />
                </div>
                <div
                  className={`flex-1 mt-[-1.00px] font-normal text-[15px] leading-[21px] ${
                    isActive(item.path || "") 
                      ? "text-light-themeprimaryblue"
                      : "text-blackblack-100"
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
                      <div className="w-5 h-5">
                        <img className="w-4 h-4" alt={item.label} src={item.icon} />
                      </div>
                      <div className="flex-1 mt-[-1.00px] font-normal text-blackblack-100 text-[15px] leading-[21px]">
                        {item.label}
                      </div>
                      <ChevronDownIcon 
                        className={`w-5 h-5 transition-transform ${
                          expandedMenus.includes(item.label) ? "rotate-180" : ""
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
                                ? "bg-light-themeprimarylight-blue text-light-themeprimaryblue"
                                : "text-blackblack-100 hover:bg-surfaceslightgray-10"
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
                    to={item.path || "#"}
                    className="flex items-center gap-2.5 px-4 py-3 w-full"
                  >
                    <div className="w-5 h-5">
                      <img className="w-4 h-4" alt={item.label} src={item.icon} />
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
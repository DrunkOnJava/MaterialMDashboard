import React from 'react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';
import { useNavigate } from 'react-router-dom';
import {
  Home,
  LayoutDashboard,
  Settings,
  Users,
  ShoppingBag,
  BarChart3,
  Calendar,
  CreditCard,
  HelpCircle,
  LogOut,
} from 'lucide-react';

interface SidebarProps {
  isCollapsed?: boolean;
}

export function Sidebar({ isCollapsed = false }: SidebarProps) {
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: ShoppingBag, label: 'Products', href: '/buttons/primary' },
    { icon: Users, label: 'Customers', href: '/components/cards' },
    { icon: BarChart3, label: 'Analytics', href: '/charts/bar' },
    { icon: Calendar, label: 'Calendar', href: '/examples/calendar' },
    { icon: CreditCard, label: 'Billing', href: '/dashboard' },
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  ];

  const bottomNavItems = [
    { icon: HelpCircle, label: 'Help', href: '/help' },
    { icon: LogOut, label: 'Logout', href: '/logout' },
  ];

  return (
    <div
      className={cn(
        'flex flex-col h-full border-r bg-white p-3',
        isCollapsed ? 'w-[70px]' : 'w-[240px]'
      )}
    >
      <div className="flex items-center h-14 px-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-blue-500"></div>
          {!isCollapsed && <span className="font-medium">Material Dashboard</span>}
        </div>
      </div>

      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={cn('justify-start', isCollapsed && 'justify-center px-0')}
              onClick={() => navigate(item.href)}
            >
              <item.icon className="h-5 w-5" />
              {!isCollapsed && <span className="ml-3">{item.label}</span>}
            </Button>
          ))}
        </nav>
      </div>

      <div className="mt-auto border-t pt-4">
        <nav className="grid gap-1 px-2">
          {bottomNavItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={cn('justify-start', isCollapsed && 'justify-center px-0')}
              onClick={() => navigate(item.href)}
            >
              <item.icon className="h-5 w-5" />
              {!isCollapsed && <span className="ml-3">{item.label}</span>}
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
}

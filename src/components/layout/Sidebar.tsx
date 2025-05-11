import React from 'react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { useNavigate } from 'react-router-dom';
import {
  Home,
  BarChart3,
  Package,
  Users,
  Settings,
  LayoutDashboard,
  ShoppingBag,
  CalendarDays,
  FolderKanban,
  MessagesSquare,
  LogOut,
  Menu,
} from 'lucide-react';

type SidebarProps = {
  className?: string;
  isCollapsed?: boolean;
  onToggle?: () => void;
}

export function Sidebar({ className, isCollapsed = false, onToggle }: SidebarProps) {
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: ShoppingBag, label: 'Products', href: '/buttons/primary' },
    { icon: Users, label: 'Customers', href: '/components/cards' },
    { icon: BarChart3, label: 'Analytics', href: '/charts/bar' },
    { icon: Package, label: 'Orders', href: '/ui/icons' },
    { icon: CalendarDays, label: 'Calendar', href: '/examples/calendar' },
    { icon: FolderKanban, label: 'Projects', href: '/ui-catalog' },
    { icon: MessagesSquare, label: 'Messages', href: '/examples/notifications' },
    { icon: Settings, label: 'Settings', href: '/account/settings' },
  ];

  return (
    <aside
      className={cn(
        'flex flex-col border-r bg-background',
        isCollapsed ? 'w-[70px]' : 'w-[250px]',
        className
      )}
    >
      <div className="flex h-14 items-center border-b px-4">
        {!isCollapsed && <div className="font-semibold">Material Dashboard</div>}
        <Button
          variant="ghost"
          size="icon"
          className={cn('ml-auto', isCollapsed && 'mx-auto')}
          onClick={onToggle}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-1 p-2">
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
      </ScrollArea>
      <div className="border-t p-2">
        <Button
          variant="ghost"
          className={cn('w-full justify-start', isCollapsed && 'justify-center px-0')}
          onClick={() => navigate('/logout')}
        >
          <LogOut className="h-5 w-5" />
          {!isCollapsed && <span className="ml-3">Log out</span>}
        </Button>
      </div>
    </aside>
  );
}

export default Sidebar;
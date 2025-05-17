import { MoonIcon, SearchIcon } from 'lucide-react';
import React from 'react';
import { Avatar } from '../../../../components/ui/avatar';
import { Badge } from '../../../../components/ui/badge';

export const TopBarByAnima = (): JSX.Element => {
  // Data for notification badges
  const notifications = {
    messages: 3,
    alerts: 5,
  };

  return (
    <header className="w-full py-5 px-4 flex items-center justify-between">
      {/* Left side icons */}
      <div className="flex items-center gap-6">
        <div className="relative w-6 h-6">
          <img className="w-[18px] h-3 absolute top-1.5 left-[3px]" alt="Menu" src="/group.png" />
        </div>

        <div className="relative w-6 h-6">
          <img className="w-5 h-5 absolute top-0.5 left-0.5" alt="Dashboard" src="/group-1.png" />
        </div>
      </div>

      {/* Right side icons and profile */}
      <div className="flex items-center gap-8">
        {/* Action icons */}
        <div className="flex items-center gap-8">
          {/* Search icon */}
          <div className="p-[3px] rounded-full">
            <SearchIcon className="w-[18px] h-[18px]" />
          </div>

          {/* Dark mode toggle */}
          <MoonIcon className="w-6 h-6" />

          {/* Notifications icon with badge */}
          <div className="relative">
            <div className="relative w-6 h-6">
              <img
                className="w-[22px] h-[22px] absolute top-[1px] left-0"
                alt="Notifications"
                src="/group-3.png"
              />
              {notifications.messages > 0 && (
                <Badge className="absolute -top-2 -right-2 w-4 h-4 p-0 flex items-center justify-center bg-light-themeprimaryblue text-blackwhite text-xs rounded-full border border-white">
                  {notifications.messages}
                </Badge>
              )}
            </div>
          </div>

          {/* Messages icon with badge */}
          <div className="relative">
            <div className="relative w-6 h-6">
              <img
                className="w-[19px] h-[22px] absolute top-[1px] left-0"
                alt="Messages"
                src="/group-4.png"
              />
              {notifications.alerts > 0 && (
                <Badge className="absolute -top-2 -right-2 w-4 h-4 p-0 flex items-center justify-center bg-actionwarning text-blackwhite text-xs rounded-full border border-white">
                  {notifications.alerts}
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* User profile avatar */}
        <Avatar id="user-menu" className="w-10 h-10 rounded-full">
          <img src="/ellipse-8.png" alt="User profile" className="w-full h-full object-cover" />
        </Avatar>
      </div>
    </header>
  );
};

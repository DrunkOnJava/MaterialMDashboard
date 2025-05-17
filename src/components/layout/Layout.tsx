import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarByAnima } from '../../screens/Chip/sections/SidebarByAnima/SidebarByAnima';
import { TopBarByAnima } from '../../screens/Chip/sections/TopBarByAnima';

export function Layout() {
  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

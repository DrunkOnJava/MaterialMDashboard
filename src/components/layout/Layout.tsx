import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBarByAnima } from '../../screens/Chip/sections/TopBarByAnima';

export function Layout() {
  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
import React from "react";
import { DetailsByAnima } from "./sections/DetailsByAnima/DetailsByAnima";
import { SidebarByAnima } from "./sections/SidebarByAnima";
import { TitlebarByAnima } from "./sections/TitlebarByAnima/TitlebarByAnima";
import { TopBarByAnima } from "./sections/TopBarByAnima";

export const Chip = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima />
        <main className="flex-1 overflow-auto">
          <DetailsByAnima />
        </main>
      </div>
    </div>
  );
};

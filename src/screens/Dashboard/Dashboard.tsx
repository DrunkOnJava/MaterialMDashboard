import React, { useState } from "react";
import { DetailsByAnima } from "../Chip/sections/DetailsByAnima/DetailsByAnima";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TitlebarByAnima } from "./components/Titlebar";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { AnalyticsSection } from "./sections/Analytics/AnalyticsSection";
import { OrderManagement } from "./sections/OrderManagement/OrderManagement";
import { InventoryManagement } from "./sections/InventoryManagement/InventoryManagement";
import { CustomerOverview } from "./sections/CustomerOverview/CustomerOverview";
import { SettingsConfig } from "./sections/SettingsConfig/SettingsConfig";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

export const Dashboard = (): JSX.Element => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("analytics");

  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Dashboard" />
        <main className="flex-1 overflow-auto p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-6 bg-white p-1 rounded-lg">
              <TabsTrigger value="analytics" className="px-6">Analytics</TabsTrigger>
              <TabsTrigger value="orders" className="px-6">Orders</TabsTrigger>
              <TabsTrigger value="inventory" className="px-6">Inventory</TabsTrigger>
              <TabsTrigger value="customers" className="px-6">Customers</TabsTrigger>
              <TabsTrigger value="settings" className="px-6">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="analytics">
              <AnalyticsSection />
            </TabsContent>
            
            <TabsContent value="orders">
              <OrderManagement />
            </TabsContent>
            
            <TabsContent value="inventory">
              <InventoryManagement />
            </TabsContent>
            
            <TabsContent value="customers">
              <CustomerOverview />
            </TabsContent>
            
            <TabsContent value="settings">
              <SettingsConfig />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};
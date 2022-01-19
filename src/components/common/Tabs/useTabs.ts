import React, { useState } from "react";

//
import { Tab } from "./index";

const useTabs = (allTabs: Tab[], initialActiveTab: string) => {
  const [activeTab, setActiveTab] = useState<string>(initialActiveTab);
  const [tabs, setTabs] = useState<Tab[]>(allTabs);

  const changeActiveTab = (newTabId: string) => {
    const newTabExists = allTabs.find((tab) => tab.id === newTabId);
    if (newTabExists) {
      setActiveTab(newTabId);
    }
  };

  const activeComponent = allTabs.find(
    (tab) => tab.id === activeTab
  )?.component;
  const emptyComponent: React.FC = () => null;

  return {
    activeTab,
    changeActiveTab,
    component: activeComponent || emptyComponent,
    tabs,
  };
};

export default useTabs;

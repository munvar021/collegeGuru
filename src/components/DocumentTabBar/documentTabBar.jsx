import React from "react";
import { TabContainer, TabItem } from "./styledComponents";

const TabBar = ({ items, activeTab, onTabChange }) => {
  return (
    <TabContainer role="tablist">
      {items.map((item) => (
        <TabItem
          key={item.id}
          active={activeTab === item.id}
          onClick={() => onTabChange(item.id)}
          role="tab"
          aria-selected={activeTab === item.id}
          aria-controls={`${item.id}-panel`}
        >
          {item.label}
        </TabItem>
      ))}
    </TabContainer>
  );
};

export default TabBar;

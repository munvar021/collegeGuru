import React from "react";
import { TabContainer, TabItem } from "./styledComponents";

const TabBar = ({ items, activeTab, onTabChange }) => {
  return (
    <TabContainer>
      {items.map((item) => (
        <TabItem
          key={item.id}
          active={activeTab === item.id}
          onClick={() => onTabChange(item.id)}
        >
          {item.label}
        </TabItem>
      ))}
    </TabContainer>
  );
};

export default TabBar;

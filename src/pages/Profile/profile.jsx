import React, { useState } from "react";
import { useForm } from "react-hook-form";
import BasicDetails from "../../components/BasicDetails/basicDetails";
import ContactDetails from "../../components/ContactDetails/contactDetails";
import EducationDetails from "../../components/EducationDetails/educationDetails";
import Preferences from "../../components/Preferences/preferences";
import { PROFILE_TABS } from "./data";
import {
  ProfileContainer,
  TabContainer,
  Tab,
  ContentWrapper,
  TabIcon,
  TabText,
  TabContent,
} from "./styledComponents";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("basic");
  const { control, handleSubmit } = useForm({
    defaultValues: {
      // Add your form default values here
      // This will be used across all form components
    },
  });

  const renderContent = () => {
    const props = { control, handleSubmit };

    switch (activeTab) {
      case "basic":
        return <BasicDetails {...props} />;
      case "contact":
        return <ContactDetails {...props} />;
      case "education":
        return <EducationDetails {...props} />;
      case "preferences":
        return <Preferences {...props} />;
      default:
        return <BasicDetails {...props} />;
    }
  };

  return (
    <ProfileContainer>
      <TabContainer>
        {PROFILE_TABS.map((tab) => (
          <Tab
            key={tab.id}
            $isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            <TabIcon $isActive={activeTab === tab.id}>
              <tab.icon size={20} />
            </TabIcon>
            <TabText $isActive={activeTab === tab.id}>{tab.label}</TabText>
          </Tab>
        ))}
      </TabContainer>

      <ContentWrapper>
        <TabContent>{renderContent()}</TabContent>
      </ContentWrapper>
    </ProfileContainer>
  );
};

export default Profile;

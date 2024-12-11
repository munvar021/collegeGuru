import React from "react";
import BasicDetails from "../../components/BasicDetails/basicDetails";
import ContactDetails from "../../components/ContactDetails/contactDetails";
import EducationDetails from "../../components/EducationDetails/educationDetails";
import Preferences from "../../components/Preferences/preferences";
import { ProfileContainer } from "./styledComponents";

const Profile = () => {
  const handleProfileUpdate = (section, data) => {
    console.log("Profile Section Updated:", {
      section,
      data,
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <ProfileContainer>
      <BasicDetails onUpdate={(data) => handleProfileUpdate("basic", data)} />
      <ContactDetails
        onUpdate={(data) => handleProfileUpdate("contact", data)}
      />
      <EducationDetails
        onUpdate={(data) => handleProfileUpdate("education", data)}
      />
      <Preferences
        onUpdate={(data) => handleProfileUpdate("preferences", data)}
      />
    </ProfileContainer>
  );
};

export default Profile;

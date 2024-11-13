import React, { useState } from 'react';
import BasicDetails from '../../components/BasicDetails/basicDetails';
import ContactDetails from '../../components/ContactDetails/contactDetails';
import EducationDetails from '../../components/EducationDetails/educationDetails';
import Preferences from '../../components/Preferences/preferences';
import { 
  ProfileContainer, 
  TabContainer, 
  Tab, 
  ContentWrapper,
  // PageTitle,
  TabIcon,
  TabText,
  TabContent 
} from './styledComponents';
import { 
  User, 
  Phone, 
  GraduationCap, 
  Settings2 
} from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('basic');

  const tabs = [
    { id: 'basic', label: 'Basic Details', icon: User },
    { id: 'contact', label: 'Contact Details', icon: Phone },
    { id: 'education', label: 'Education Details', icon: GraduationCap },
    { id: 'preferences', label: 'Preferences', icon: Settings2 }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'basic':
        return <BasicDetails />;
      case 'contact':
        return <ContactDetails />;
      case 'education':
        return <EducationDetails />;
      case 'preferences':
        return <Preferences />;
      default:
        return <BasicDetails />;
    }
  };

  return (
    <ProfileContainer>
      {/* <PageTitle>Profile Settings</PageTitle> */}
      
      <TabContainer>
        {tabs.map(tab => (
          <Tab
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={activeTab === tab.id ? 'active' : ''}
          >
            <TabIcon>
              <tab.icon size={20} />
            </TabIcon>
            <TabText>{tab.label}</TabText>
          </Tab>
        ))}
      </TabContainer>

      <ContentWrapper>
        <TabContent>
          {renderContent()}
        </TabContent>
      </ContentWrapper>
    </ProfileContainer>
  );
};

export default Profile;
import { useLocation } from "react-router-dom";
import {
  SidebarContainer,
  ProfileSection,
  Avatar,
  UserInfo,
  UserLinks,
  StyledLink,
  Separator,
  NavSection,
  NavItem,
} from "./styledComponents";
import { NAV_ITEMS } from "./data";

const Sidebar = ({ isOpen }) => {
  const location = useLocation();

  return (
    <SidebarContainer isOpen={isOpen}>
      <ProfileSection>
        <Avatar>S</Avatar>
        <UserInfo>
          <h3>Welcome, User</h3>
          <UserLinks>
            <StyledLink to="/profile">Manage your Profile</StyledLink>
            <Separator>|</Separator>
            <StyledLink to="/admission">
              Track your Admission Journey
            </StyledLink>
          </UserLinks>
        </UserInfo>
      </ProfileSection>
      <NavSection>
        {NAV_ITEMS.map(({ path, icon: Icon, label }) => (
          <NavItem
            key={path}
            to={path}
            active={location.pathname === path ? 1 : 0}
          >
            <Icon /> {label}
          </NavItem>
        ))}
      </NavSection>
    </SidebarContainer>
  );
};

export default Sidebar;

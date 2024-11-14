import { Link } from "react-router-dom";
import {
  SidebarContainer,
  ProfileSection,
  Avatar,
  UserInfo,
  NavSection,
  NavItem,
} from "./styledComponents";
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaHeadset,
  FaHistory,
  FaGift,
  FaFileAlt,
  FaPencilAlt,
  FaCog,
} from "react-icons/fa";

const Sidebar = ({ isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <ProfileSection>
        <Avatar>S</Avatar>
        <UserInfo>
          <h3>Welcome, User</h3>
          <div>
            <Link to="/profile">Manage your Profile</Link>
            <span> | </span>
            <Link to="/admission">Track your Admission Journey</Link>
          </div>
        </UserInfo>
      </ProfileSection>
      <NavSection>
        <NavItem to="/dashboard" active>
          <FaHome /> Dashboard
        </NavItem>
        <NavItem to="/profile">
          <FaUser /> My Profile
        </NavItem>
        <NavItem to="/admissions">
          <FaGraduationCap /> College Admissions
        </NavItem>
        <NavItem to="/counsellors">
          <FaHeadset /> Counsellors
        </NavItem>
        <NavItem to="/payments">
          <FaHistory /> Payment History
        </NavItem>
        <NavItem to="/rewards">
          <FaGift /> Referrals & Rewards
        </NavItem>
        <NavItem to="/documents">
          <FaFileAlt /> Documents
        </NavItem>
        <NavItem to="/tests">
          <FaPencilAlt /> Mock Tests
        </NavItem>
        <NavItem to="/settings">
          <FaCog /> Account Settings
        </NavItem>
      </NavSection>
    </SidebarContainer>
  );
};

export default Sidebar;

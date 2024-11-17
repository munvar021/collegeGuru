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

export const NAV_ITEMS = [
  { path: "/dashboard", icon: FaHome, label: "Dashboard" },
  { path: "/profile", icon: FaUser, label: "My Profile" },
  { path: "/admissions", icon: FaGraduationCap, label: "College Admissions" },
  { path: "/counsellors", icon: FaHeadset, label: "Counsellors" },
  { path: "/payments", icon: FaHistory, label: "Payment History" },
  { path: "/rewards", icon: FaGift, label: "Referrals & Rewards" },
  { path: "/documents", icon: FaFileAlt, label: "Documents" },
  { path: "/tests", icon: FaPencilAlt, label: "Mock Tests" },
  { path: "/settings", icon: FaCog, label: "Account Settings" },
];

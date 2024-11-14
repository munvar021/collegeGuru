import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside`
  width: 280px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  padding-top: 80px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  overflow-y: auto;
  z-index: 900;

  @media (max-width: 768px) {
    transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
  }
`;

export const ProfileSection = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
`;

export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const UserInfo = styled.div`
  h3 {
    margin: 0 0 0.5rem 0;
    color: ${(props) => props.theme.colors.text};
    font-size: 1.2rem;
  }

  div {
    font-size: 0.9rem;

    a {
      color: ${(props) => props.theme.colors.secondary};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    span {
      color: #ccc;
      margin: 0 0.5rem;
    }
  }
`;

export const NavSection = styled.nav`
  padding: 1rem 0;
`;

export const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  color: ${(props) => (props.active ? props.theme.colors.secondary : "#666")};
  background: ${(props) => (props.active ? "#f8f7ff" : "transparent")};
  text-decoration: none;
  transition: all 0.2s ease;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: #f8f7ff;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

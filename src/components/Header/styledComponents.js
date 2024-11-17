import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #0a0633;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: ${(props) =>
    props.$scrolled ? "0 2px 4px rgba(0,0,0,0.1)" : "none"};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Logo = styled(Link)`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 1rem;
  transition: background 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #6b5ce7;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

export const NavToggle = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  .rotate {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
  }
`;

export const PopupNav = styled.nav`
  position: absolute;
  top: 60px;
  left: 0;
  background-color: #0a0633;
  width: 100%;
  padding: 1rem 0;
  z-index: 999;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  ${NavLink} {
    display: block;
    padding: 0.5rem 1rem;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #6b5ce7;
  }
`;

export const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ff6b6b;
  color: white;
  font-size: 0.75rem;
  padding: 2px 6px;
  border-radius: 50%;
`;

export const SearchForm = styled.form`
  width: 100%;
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #6b5ce7;
  }
`;

export const SearchPopup = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  background-color: #fff;
  width: 250px;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaAngleDown,
} from "react-icons/fa";
import {
  HeaderContainer,
  Logo,
  Nav,
  NavLink,
  IconsContainer,
  IconButton,
  CartCount,
  MobileMenuButton,
  SearchBar,
  NavToggle,
  PopupNav,
  SearchPopup,
} from "./styledComponents";

const Header = ({ toggleSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <HeaderContainer scrolled={isScrolled}>
      <MobileMenuButton onClick={toggleSidebar}>
        <FaBars />
      </MobileMenuButton>
      <Logo to="/">CollegeGuru</Logo>
      <Nav>
        <NavLink to="/colleges">Colleges</NavLink>
        <NavLink to="/exam">Exam</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/careers">Careers</NavLink>
        <NavLink to="/updates">Latest Updates</NavLink>
      </Nav>
      <NavToggle onClick={toggleNav} navVisible={navVisible}>
        <FaAngleDown className={navVisible ? "rotate" : ""} />
      </NavToggle>
      {navVisible && (
        <PopupNav>
          <NavLink to="/colleges">Colleges</NavLink>
          <NavLink to="/exam">Exam</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/updates">Latest Updates</NavLink>
        </PopupNav>
      )}
      <IconsContainer>
        <IconButton onClick={toggleSearch}>
          <FaSearch />
        </IconButton>
        {searchVisible && (
          <SearchPopup>
            <SearchBar type="search" placeholder="Search..." />
          </SearchPopup>
        )}
        <Link to="/profile">
          <IconButton>
            <FaUser />
          </IconButton>
        </Link>
        <IconButton>
          <FaShoppingCart />
          <CartCount>0</CartCount>
        </IconButton>
      </IconsContainer>
    </HeaderContainer>
  );
};

export default Header;

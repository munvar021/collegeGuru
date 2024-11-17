import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaAngleDown,
} from "react-icons/fa";
import { NAV_LINKS } from "./data";
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
  SearchForm,
} from "./styledComponents";

const Header = ({ toggleSidebar }) => {
  const { register, handleSubmit } = useForm();
  const [headerState, setHeaderState] = React.useState({
    isScrolled: false,
    navVisible: false,
    searchVisible: false,
  });

  const { isScrolled, navVisible, searchVisible } = headerState;

  React.useEffect(() => {
    const handleScroll = () => {
      setHeaderState((prev) => ({
        ...prev,
        isScrolled: window.scrollY > 0,
      }));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setHeaderState((prev) => ({
      ...prev,
      navVisible: !prev.navVisible,
    }));
  };

  const toggleSearch = () => {
    setHeaderState((prev) => ({
      ...prev,
      searchVisible: !prev.searchVisible,
    }));
  };

  const onSearchSubmit = (data) => {
    console.log("Search submitted:", data.search);
    // Handle search logic here
  };

  return (
    <HeaderContainer $scrolled={isScrolled}>
      <MobileMenuButton type="button" onClick={toggleSidebar}>
        <FaBars />
      </MobileMenuButton>

      <Logo to="/">CollegeGuru</Logo>

      <Nav>
        {NAV_LINKS.map(({ path, label }) => (
          <NavLink key={path} to={path}>
            {label}
          </NavLink>
        ))}
      </Nav>

      <NavToggle type="button" onClick={toggleNav} $navVisible={navVisible}>
        <FaAngleDown className={navVisible ? "rotate" : ""} />
      </NavToggle>

      {navVisible && (
        <PopupNav>
          {NAV_LINKS.map(({ path, label }) => (
            <NavLink key={path} to={path}>
              {label}
            </NavLink>
          ))}
        </PopupNav>
      )}

      <IconsContainer>
        <IconButton type="button" onClick={toggleSearch}>
          <FaSearch />
        </IconButton>

        {searchVisible && (
          <SearchPopup>
            <SearchForm onSubmit={handleSubmit(onSearchSubmit)}>
              <SearchBar
                type="search"
                placeholder="Search..."
                {...register("search", { required: true })}
              />
            </SearchForm>
          </SearchPopup>
        )}

        <Link to="/profile">
          <IconButton type="button">
            <FaUser />
          </IconButton>
        </Link>

        <IconButton type="button">
          <FaShoppingCart />
          <CartCount>0</CartCount>
        </IconButton>
      </IconsContainer>
    </HeaderContainer>
  );
};

export default Header;

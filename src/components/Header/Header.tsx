import React, { useState } from "react";
import { FaBars, FaTimes, FaSnowman } from "react-icons/fa";
import {
  HeaderContainer,
  NavContainer,
  NavLogo,
  HamburgerIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./Header.styles";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <HeaderContainer>
      <NavContainer>
        <NavLogo to="/">
          <FaSnowman style={{ marginRight: "0.5rem" }} />
        </NavLogo>

        <HamburgerIcon onClick={handleIsOpen}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </HamburgerIcon>

        <NavMenu isOpen={isOpen} onClick={handleIsOpen}>
          <NavItem>
            <NavLink to="/">Work</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/research">Research</NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink to="/projects">Projects</NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink to="/about">About</NavLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;

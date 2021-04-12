import React, { useState } from "react";
import Link from "next/link";
import {
  HeaderContainer,
  NavContainer,
  NavMenu,
  NavItem,
} from "./Header.styles";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <HeaderContainer>
      <NavContainer>
        {/* <NavLogo href="/">
          <FaSnowman style={{ marginRight: "0.5rem" }} />
          <b>S</b>
        </NavLogo> */}

        {/* <HamburgerIcon onClick={handleIsOpen}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </HamburgerIcon> */}

        <NavMenu isOpen={isOpen} onClick={handleIsOpen}>
          <NavItem>
            <Link href="/">Work</Link>
          </NavItem>
          <NavItem>
            <Link href="/research">Research</Link>
          </NavItem>
          {/* <NavItem>
            <NavLink href="/projects">Projects</NavLink>
          </NavItem> */}
          <NavItem>
            <Link href="/about">About</Link>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;

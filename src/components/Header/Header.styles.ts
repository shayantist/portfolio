import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors.background};
  position: fixed;
  height: ${(props) => props.theme.measurements.headerHeight}px;
  display: flex;
  width: 100%;
  z-index: 10;
`;

export const NavContainer = styled.nav`
  width: 90%;
  max-width: ${(props) => props.theme.measurements.maxWidth}px;
  margin: 0 auto 0;

  display: flex;
  justify-content: center;

  font-size: 1.3rem;

  a {
    transition: color 0.25s ease-in-out;
    :hover {
      color: ${(props) => props.theme.colors.accent};
    }
  }

  /* @media screen and (max-width: ${(props) =>
    props.theme.measurements.mobileBreakpoint}px) {
    padding: 0 30px;
  } */
`;

export const NavMenu = styled.ul<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  font-weight: bold;

  /* @media screen and (max-width: ${(props) =>
    props.theme.measurements.mobileBreakpoint}px) {
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    right: ${(props) => (props.isOpen ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${(props) => props.theme.colors.background};
  } */
`;

export const NavItem = styled.li`
  height: 80px;
  font-size: clamp(0.8em, 6.5vw, 1.25em);

  a {
    color: ${(props) => props.theme.colors.text};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: ${(props) =>
        props.theme.measurements.mobileBreakpoint}px) {
      /* text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    :hover {
      color: ${(props) => props.theme.colors.accent};
    } */

      padding: 0.5rem;
    }
  }

  /* @media screen and (max-width: ${(props) =>
    props.theme.measurements.mobileBreakpoint}px) {
    width: 100%;
  } */
`;

import styled from "styled-components";

export const SocialsWrapper = styled.div`
  margin-top: 1em;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${(props) =>
      props.theme.measurements.mobileBreakpoint}px) {
    margin-top: 0;
  }

  a {
    color: inherit;
    opacity: 0.85;
    padding: 0 9px;
    box-shadow: none;

    transition: opacity 0.25s ease, color 0.25s ease;

    svg {
      width: 30px;
    }

    :hover {
      opacity: 1;
      color: ${(props) => props.theme.colors.accent};
      text-shadow: 0px 4px 10px rgba(31, 0, 41, 0.15);
      box-shadow: none;
    }
  }
`;

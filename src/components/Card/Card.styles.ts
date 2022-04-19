import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  background: ${(props) => props.theme.colors.cardBackground};
  width: 100%;
  border-radius: 20px;
  padding: 2em;

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);

  span {
    font-weight: bold;
    opacity: 0.6;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  h3 {
    margin: 0.3em 0;

    a {
      font-weight: bold;
    }
  }

  img {
    width: 80%;
  }

  @media screen and (max-width: ${(props) =>
      props.theme.measurements.mobileBreakpoint}px) {
    padding: 2em;
  }
`;

import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  max-width: ${(props) => props.theme.measurements.maxWidth}px;

  h1 {
    font-size: 4.5em;
    line-height: 122%;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2rem;
    line-height: 1.2;
  }

  p {
    font-size: 1.3em;
    line-height: 1.7;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.accent};
    box-shadow: inset 0 -4px 0 -1px ${(props) => props.theme.colors.accent};

    transition: color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    :hover {
      color: white;
      box-shadow: inset 0 -40px 0 0px ${(props) => props.theme.colors.accent};
    }
  }
`;

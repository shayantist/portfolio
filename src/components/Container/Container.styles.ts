import styled from "@emotion/styled";

export const SectionContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  max-width: ${(props) => props.theme.measurements.maxWidth}px;

  h1 {
    font-size: clamp(1.5em, 14vw, 4.5em);
    line-height: 122%;

    background: linear-gradient(
      271deg,
      #a0e9ff 30%,
      #a162e8 50%,
      #f093b0 70%,
      #edca85 94%
    );
    background-clip: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 300% 300%;
    animation: gradient 15s ease infinite;

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: clamp(1.5em, 8vw, 2rem);
    font-weight: normal;
    line-height: 1.2;
  }

  p {
    font-size: 1.3em;
    line-height: 1.7;
    font-weight: 500;
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

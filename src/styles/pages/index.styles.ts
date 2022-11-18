import styled from "@emotion/styled";

import {
  Card,
  // CardWrapper,
  SectionContainer,
} from "../../components";

export const HeroSection = styled(SectionContainer)`
  display: flex;
  gap: 2em;
  align-items: center;
  justify-content: center;

  padding-top: ${(props) => props.theme.measurements.headerHeight + 20}px;

  h3 {
    font-size: 1.6em;
    margin-bottom: 5px;
  }

  @media screen and (max-width: ${(props) =>
      props.theme.measurements.mobileBreakpoint}px) {
    padding-top: ${(props) => props.theme.measurements.headerHeight}px;
    flex-wrap: wrap-reverse;
    gap: 1em;

    h5 {
      margin-bottom: 15px;
    }
  }
`;

export const HeroTextWrapper = styled.div`
  flex: 6;
`;

export const HeroFunWrapperBorder = styled.div`
  z-index: 20;
  flex: 3;

  position: relative;
  :before,
  :after {
    content: "";
    border-radius: 20px;
    position: absolute;
    left: -3px;
    top: -3px;
    background: linear-gradient(
      271deg,
      #a0e9ff 30%,
      #a162e8 50%,
      #f093b0 70%,
      #edca85 94%
    );
    background-size: 400%;
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    z-index: -1;
    animation: gradient 15s ease infinite;
  }

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

  :before {
    filter: blur(1px);
  }

  :after {
    filter: blur(25px);
    opacity: 80%;
  }

  @media screen and (max-width: ${(props) =>
      props.theme.measurements.mobileBreakpoint}px) {
    max-width: 300px;
  }

  min-height: 300px;
  min-width: 300px;
  aspect-ratio: 1;
`;

export const HeroFunWrapper = styled.div`
  background: ${(props) => props.theme.colors.cardBackground};
  width: 100%;
  border-radius: 20px;

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
    filter: grayscale(50%);
  }

  @media screen and (max-width: ${(props) =>
      props.theme.measurements.mobileBreakpoint}px) {
    max-width: 300px;
  }
`;

export const WorksSection = styled(SectionContainer)`
  margin: 4em auto 0;
  display: grid;
  gap: 2em;

  .things {
    display: flex;
    flex-direction: column;
    gap: 1em;

    @media screen and (max-width: ${(props) =>
        props.theme.measurements.mobileBreakpoint}px) {
      flex-wrap: wrap;
    }
  }

  @media screen and (max-width: ${(props) =>
      props.theme.measurements.mobileBreakpoint}px) {
    margin: 1em auto 0;
    gap: 0em;
  }
`;

export const WorkCard = styled(Card)`
  img {
    display: block;
    max-width: 80%;
    margin: 1em auto;
  }
`;

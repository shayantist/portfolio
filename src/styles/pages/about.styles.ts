import styled from "styled-components";

import { CardWrapper, SectionContainer } from "../../components";

export const HeroSection = styled(SectionContainer)`
  display: flex;
  gap: 3em;
  align-items: center;
  justify-content: center;

  padding-top: ${(props) => props.theme.measurements.headerHeight + 50}px;

  @media screen and (max-width: ${(props) =>
      props.theme.measurements.mobileBreakpoint}px) {
    padding-top: ${(props) => props.theme.measurements.headerHeight + 50}px;
    flex-wrap: wrap;
  }
`;

export const HeroTextWrapper = styled.div`
  @media screen and (max-width: ${(props) =>
      props.theme.measurements.mobileBreakpoint}px) {
    margin: 0 auto 2em;
  }
`;

export const HeroFunWrapper = styled(CardWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  height: 300px;
  width: 300px;

  img {
    height: 100%;
    width: auto;
    border-radius: 20px;
    filter: grayscale(100%);
  }
`;

export const ContactSection = styled(SectionContainer)`
  display: grid;
  gap: 1em;
  margin: 5em auto 0;

  @media screen and (max-width: ${(props) =>
      props.theme.measurements.mobileBreakpoint}px) {
    margin: 2em auto 0;
  }
`;

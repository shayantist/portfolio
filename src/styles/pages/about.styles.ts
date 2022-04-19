import styled from "@emotion/styled";

import { CardWrapper, SectionContainer } from "../../components";
import { HeroSection as IndexHeroSection } from "./index.styles";

export const HeroSection = styled(IndexHeroSection)``;

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
  min-height: 300px;
  min-width: 300px;

  img {
    height: 100%;
    width: 100%;
    border-radius: 20px;
    filter: grayscale(100%);
  }

  @media screen and (max-width: ${(props) =>
      props.theme.measurements.mobileBreakpoint}px) {
    max-width: 300px;
  }
`;

export const ContactSection = styled(SectionContainer)`
  display: grid;
  gap: 1em;
  margin: 4em auto 0;

  @media screen and (max-width: ${(props) =>
      props.theme.measurements.mobileBreakpoint}px) {
    margin: 2em auto 0;
  }
`;

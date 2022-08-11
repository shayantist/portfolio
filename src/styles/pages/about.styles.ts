import styled from "@emotion/styled";

import { SectionContainer } from "../../components";
import { HeroSection as IndexHeroSection } from "./index.styles";

export const HeroSection = styled(IndexHeroSection)``;

export const HeroTextWrapper = styled.div`
  @media screen and (max-width: ${(props) =>
      props.theme.measurements.mobileBreakpoint}px) {
    margin: 0 auto 2em;
  }

  span {
    display: block;
    width: 100%;
    height: 12px;
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

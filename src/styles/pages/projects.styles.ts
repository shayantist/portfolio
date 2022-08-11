import styled from "@emotion/styled";

import { Card, SectionContainer } from "../../components";
import { HeroSection as IndexHeroSection } from "./index.styles";
import { HeroTextWrapper as AboutHeroTextWrapper } from "./about.styles";

export const HeroSection = styled(IndexHeroSection)`
  margin-bottom: 1em;

  @media screen and (max-width: ${(props) =>
      props.theme.measurements.mobileBreakpoint}px) {
    margin-bottom: 0;
  }
`;

export const HeroTextWrapper = styled(AboutHeroTextWrapper)``;

export const ProjectsSection = styled(SectionContainer)``;

export const ProjectsCard = styled(Card)``;

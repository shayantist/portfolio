import styled from "@emotion/styled";

import { Card, SectionContainer } from "../../components";
import { HeroSection as IndexHeroSection } from "./index.styles";
import { HeroTextWrapper as AboutHeroTextWrapper } from "./about.styles";

export const HeroSection = styled(IndexHeroSection)``;

export const HeroTextWrapper = styled(AboutHeroTextWrapper)``;

export const ProjectsSection = styled(SectionContainer)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
  margin: 2em auto 0;
`;

export const ProjectsCard = styled(Card)`
  width: 45%;
`;

import styled from "@emotion/styled";

import { Card, SectionContainer } from "../../components";
import { HeroSection as IndexHeroSection } from "./index.styles";
import { HeroTextWrapper as AboutHeroTextWrapper } from "./about.styles";

export const HeroSection = styled(IndexHeroSection)``;

export const HeroTextWrapper = styled(AboutHeroTextWrapper)``;

export const ResearchCard = styled(Card)``;

export const ResearchSection = styled(SectionContainer)`
  display: grid;
  gap: 1em;
  margin: 2em auto 0;
`;

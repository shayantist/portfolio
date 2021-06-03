import styled from "styled-components";

import { Card, SectionContainer } from "../../components";
import { HeroSection as IndexHeroSection } from "./index.styles";

export const HeroSection = styled(IndexHeroSection)`
  display: block;
`;

export const ResearchSection = styled(SectionContainer)`
  display: grid;
  gap: 1em;
  margin: 3em auto 0;
`;

export const ResearchCard = styled(Card)`
  padding: 2em 2em 2em;
`;

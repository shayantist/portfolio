import styled from "styled-components";

import { Card, SectionContainer } from "../../components";

export const HeroSection = styled(SectionContainer)`
  padding-top: ${(props) =>
    props.theme.measurements.headerHeight + 25}px; /* 100 */

  @media screen and (max-width: ${(props) =>
      props.theme.measurements.mobileBreakpoint}) {
    padding-top: ${(props) => props.theme.measurements.headerHeight + 25}px;
    flex-wrap: wrap;
  }
`;

export const ResearchSection = styled(SectionContainer)`
  display: grid;
  gap: 1em;
  margin: 5em auto 0;
`;

export const ResearchCard = styled(Card)`
  padding: 2em 2em 2em;
`;

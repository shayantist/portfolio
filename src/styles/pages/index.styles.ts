import styled from "styled-components";

import { Card, CardWrapper, SectionContainer } from "../../components";

export const HeroSection = styled(SectionContainer)`
  display: flex;
  gap: 3em;
  align-items: center;
  justify-content: center;

  padding-top: ${(props) => props.theme.measurements.headerHeight + 40}px;

  @media screen and (max-width: ${(props) =>
      props.theme.measurements.mobileBreakpoint}px) {
    padding-top: ${(props) => props.theme.measurements.headerHeight}px;
    flex-wrap: wrap;
  }
`;

export const HeroTextWrapper = styled.div``;

export const HeroFunWrapper = styled(CardWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5em;
  height: 500px;
  max-width: 500px;

  img {
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: ${(props) =>
      props.theme.measurements.mobileBreakpoint}px) {
    height: 350px;
    max-width: 350px;
  }
`;

export const WorksSection = styled(SectionContainer)`
  margin: 7em auto 0;
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
`;

export const WorkCard = styled(Card)`
  img {
    display: block;
    max-width: 80%;
    margin: 1em auto;
  }
`;

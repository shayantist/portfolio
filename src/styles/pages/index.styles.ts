import styled from "@emotion/styled";

import { Card, CardWrapper, SectionContainer } from "../../components";

export const HeroSection = styled(SectionContainer)`
  display: flex;
  gap: 2em;
  align-items: center;
  justify-content: center;

  padding-top: ${(props) => props.theme.measurements.headerHeight + 20}px;

  @media screen and (max-width: ${(props) =>
      props.theme.measurements.mobileBreakpoint}px) {
    padding-top: ${(props) => props.theme.measurements.headerHeight}px;
    flex-wrap: wrap;
    gap: 1em;

    h5 {
      margin-bottom: 15px;
    }
  }
`;

export const HeroTextWrapper = styled.div`
  flex: 5;
`;

export const HeroFunWrapper = styled(CardWrapper)`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  min-height: 300px;
  min-width: 300px;
  aspect-ratio: 1;

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

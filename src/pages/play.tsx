import React from "react";
import Head from "next/head";
// import Image from "next/image";
import {
  HeroSection,
  HeroTextWrapper,
  // HeroFunWrapper,
  WorksSection,
  // WorkCard,
} from "../styles/pages/index.styles";

import { Page, Time } from "../components";
// import parseMarkdown from "../utils/parseMarkdown";

function PlayPage() {
  return (
    <Page>
      <Head>
        <title>Shayan Chowdhury | Playground</title>
      </Head>
      <HeroSection>
        <HeroTextWrapper>
          <h1>Project Playground</h1>
        </HeroTextWrapper>
      </HeroSection>

      <WorksSection>
        <p>
          <Time />
        </p>
        <p>If time above is showing, then our python server is running!</p>
      </WorksSection>
    </Page>
  );
}

export default PlayPage;

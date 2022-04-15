import React from "react";
import Head from "next/head";
import {
  HeroSection,
  HeroTextWrapper,
  ResearchSection,
  ResearchCard,
} from "../styles/pages/research.styles";

import { Page, Markdown } from "../components";
import { research as content } from "../content";

function ResearchPage() {
  return (
    <Page>
      <Head>
        <title>Shayan Chowdhury | Research</title>
      </Head>
      <HeroSection>
        <HeroTextWrapper>
          <h1>{content.title}</h1>
          <p>
            <Markdown>{content.description}</Markdown>
          </p>
        </HeroTextWrapper>
      </HeroSection>

      <ResearchSection>
        <h2>{content.papersSection.title}</h2>
        <p>
          <Markdown>{content.papersSection.description}</Markdown>
        </p>
        {content.papersSection.papers.map((paper) => (
          <ResearchCard
            key={paper.title}
            title={paper.title}
            subtitle={paper.subtitle}
            textBoxes={[paper.authors, paper.institutions]}
          />
        ))}
      </ResearchSection>
    </Page>
  );
}

export default ResearchPage;

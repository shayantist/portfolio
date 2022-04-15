import React from "react";
import Head from "next/head";
import {
  HeroSection,
  HeroTextWrapper,
  ResearchSection,
  ResearchCard,
} from "../styles/pages/research.styles";

import { Page } from "../components";
import { research as content } from "../content";
import ReactMarkdown from "react-markdown";

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
            <ReactMarkdown>{content.description}</ReactMarkdown>
          </p>
        </HeroTextWrapper>
      </HeroSection>

      <ResearchSection>
        <h2>{content.papersSection.title}</h2>
        <p>
          <ReactMarkdown>{content.papersSection.description}</ReactMarkdown>
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

import React from "react";
import {
  HeroSection,
  ResearchSection,
  ResearchCard,
} from "./ResearchPage.styles";

import { Page } from "../../components";
import { research as content } from "../../content";
import parseMarkdown from "../../utils/parseMarkdown";

function ResearchPage() {
  return (
    <Page>
      <HeroSection>
        <h1>{content.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: parseMarkdown(content.description),
          }}
        ></p>
      </HeroSection>

      <ResearchSection>
        <h2>{content.papersSection.title}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: parseMarkdown(content.papersSection.description),
          }}
        ></p>
        {content.papersSection.papers.map((paper) => (
          <ResearchCard
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

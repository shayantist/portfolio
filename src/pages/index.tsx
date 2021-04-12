import React from "react";
import Head from "next/head";
import {
  HeroSection,
  HeroTextWrapper,
  HeroFunWrapper,
  WorksSection,
  WorkCard,
} from "../styles/pages/index.styles";

import { Page } from "../components";
import { work as workContent } from "../content";
import parseMarkdown from "../utils/parseMarkdown";

function HomePage() {
  return (
    <Page>
      <Head>
        <title>Shayan Chowdhury | Portfolio</title>
      </Head>
      <HeroSection>
        <HeroTextWrapper>
          <h1>{workContent.title}</h1>
          <h3
            dangerouslySetInnerHTML={{
              __html: parseMarkdown(workContent.description),
            }}
          ></h3>
        </HeroTextWrapper>
        <HeroFunWrapper>
          <img src="/assets/thonk.gif" alt="" />
        </HeroFunWrapper>
      </HeroSection>
      <WorksSection>
        <h2>{workContent.currentWork.title}</h2>
        {/* Loop through every card in content file */}
        <div className="things">
          {workContent.currentWork.works.map((workExp) => (
            <WorkCard
              key={workExp.title}
              title={workExp.title}
              subtitle={workExp.subtitle}
              image={workExp.image}
              textBoxes={[workExp.description]}
            />
          ))}
        </div>
      </WorksSection>
    </Page>
  );
}

export default HomePage;

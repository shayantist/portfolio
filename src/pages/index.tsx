import React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  HeroSection,
  HeroTextWrapper,
  HeroFunWrapper,
  HeroFunWrapperBorder,
  // WorksSection,
  // WorkCard,
} from "../styles/pages/index.styles";

import { Page, Socials, Markdown } from "../components";
import { work as content } from "../content";

function HomePage() {
  return (
    <Page>
      <Head>
        <title>Shayan Chowdhury</title>
      </Head>
      <HeroSection>
        <HeroTextWrapper>
          <h1>{content.title}</h1>
          <h3>
            <Markdown>{content.description}</Markdown>
            <p style={{ marginTop: "15px" }} />
            <Markdown>{content.subtitle}</Markdown>
            <p style={{ marginTop: "15px" }} />
            <h5>
              <Markdown>{content.subtitle2}</Markdown>
            </h5>
          </h3>
          <Socials />
        </HeroTextWrapper>
        <HeroFunWrapperBorder>
          <HeroFunWrapper>
            <Image
              src="/assets/me.jpg"
              alt="look at this dude"
              width={500}
              height={500}
              quality={100}
            />
          </HeroFunWrapper>
        </HeroFunWrapperBorder>
      </HeroSection>

      {/* <WorksSection>
        <h2>{content.currentWork.title}</h2>
        Loop through every card in content file
        <div className="things">
          {content.currentWork.works.map((workExp) => (
            <WorkCard
              key={workExp.title}
              title={workExp.title}
              subtitle={`**${workExp.subtitle}**`}
              image={workExp.image}
              textBoxes={[workExp.description]}
            />
          ))}
        </div>
      </WorksSection> */}
    </Page>
  );
}

export default HomePage;

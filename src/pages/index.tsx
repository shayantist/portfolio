import React from "react";
import Image from "next/image";
import {
  HeroSection,
  HeroTextWrapper,
  HeroFunWrapper,
  HeroFunWrapperBorder,
  // WorksSection,
  // WorkCard,
} from "../styles/pages/index.styles";

import { Page, Socials, Markdown, SEOHead } from "../components";
import { work as content } from "../content";

function HomePage() {
  return (
    <Page>
      <SEOHead title="Shayan Chowdhury" />
      <HeroSection>
        <HeroTextWrapper>
          <h1>{content.title}</h1>
          <h3>
            {content.description.map((e) => (
              <>
                <Markdown>{e}</Markdown>
                <p style={{ marginTop: "5px" }} />
              </>
            ))}
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
              quality={80}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,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"
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

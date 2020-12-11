import React from "react";
import {
  HeroSection,
  HeroTextWrapper,
  HeroFunWrapper,
} from "./AboutPage.styles";

import { Page } from "../../components";
import { about as content } from "../../content";
import parseMarkdown from "../../utils/parseMarkdown";
import Thonk from "../../assets/thonk.gif";

function AboutPage() {
  return (
    <Page>
      <HeroSection>
        <HeroFunWrapper>
          <img src={Thonk} alt="" />
        </HeroFunWrapper>
        <HeroTextWrapper>
          <h1>{content.title}</h1>
          <h3
            dangerouslySetInnerHTML={{
              __html: parseMarkdown(content.description),
            }}
          ></h3>
        </HeroTextWrapper>
      </HeroSection>
    </Page>
  );
}

export default AboutPage;

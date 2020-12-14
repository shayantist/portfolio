import React from "react";
import {
  HeroSection,
  HeroTextWrapper,
  HeroFunWrapper,
  ContactSection,
} from "./AboutPage.styles";

import { Page } from "../../components";
import { about as content } from "../../content";
import parseMarkdown from "../../utils/parseMarkdown";
import Me from "../../assets/me.jpg";

function AboutPage() {
  return (
    <Page>
      <HeroSection>
        <HeroFunWrapper>
          <img src={Me} alt="" />
        </HeroFunWrapper>
        <HeroTextWrapper>
          <h1>{content.title}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: parseMarkdown(content.description),
            }}
          ></p>
        </HeroTextWrapper>
      </HeroSection>
      <ContactSection>
        <h2>{content.contact_section.title}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: parseMarkdown(content.contact_section.description),
          }}
        ></p>
      </ContactSection>
    </Page>
  );
}

export default AboutPage;

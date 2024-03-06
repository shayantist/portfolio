import React from "react";
// import Image from "next/image";
import {
  HeroSection,
  HeroTextWrapper,
  ContactSection,
} from "../styles/pages/about.styles";

import { Page, SEOHead } from "../components";
import { about as content } from "../content";
import { Markdown } from "../components";

export default function AboutPage() {
  return (
    <Page>
      <SEOHead title="Shayan Chowdhury | About" />
      <HeroSection>
        <HeroTextWrapper>
          <h1>{content.title}</h1>
          <p>
            <Markdown>{content.description}</Markdown>
          </p>
          <p style={{ marginTop: "20px" }}>
            <Markdown>{content.quote.text}</Markdown>
          </p>
          <p style={{ marginLeft: "25px" }}>
            <Markdown>{content.quote.author}</Markdown>
          </p>
        </HeroTextWrapper>
      </HeroSection>
      <ContactSection>
        <h3>
          <Markdown>{content.contact_section.title}</Markdown>
        </h3>
        <p>
          <Markdown>{content.contact_section.description}</Markdown>
        </p>
      </ContactSection>
    </Page>
  );
}

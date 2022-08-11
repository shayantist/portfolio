import React from "react";
import Head from "next/head";
// import Image from "next/image";
import {
  HeroSection,
  HeroTextWrapper,
  ContactSection,
} from "../styles/pages/about.styles";

import { Page } from "../components";
import { about as content } from "../content";
import { Markdown } from "../components";

export default function AboutPage() {
  return (
    <Page>
      <Head>
        <title>Shayan Chowdhury | About</title>
      </Head>
      <HeroSection>
        <HeroTextWrapper>
          <h1>{content.title}</h1>
          <p>
            <Markdown>{content.description}</Markdown>
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

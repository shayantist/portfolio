import React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  HeroSection,
  HeroTextWrapper,
  HeroFunWrapper,
  ContactSection,
} from "../styles/pages/about.styles";

import { Page } from "../components";
import { about as content } from "../content";
import parseMarkdown from "../utils/parseMarkdown";

function AboutPage() {
  return (
    <Page>
      <Head>
        <title>Shayan Chowdhury | About</title>
      </Head>
      <HeroSection>
        <HeroFunWrapper>
          <Image
            src="/assets/me.jpg"
            alt="look at this dude"
            width={500}
            height={500}
            quality={100}
          />
        </HeroFunWrapper>
        <HeroTextWrapper>
          <h1>{content.title}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: parseMarkdown(content.description),
            }}
          />
        </HeroTextWrapper>
      </HeroSection>
      <ContactSection>
        <h3
          dangerouslySetInnerHTML={{
            __html: parseMarkdown(content.contact_section.title),
          }}
        />
        <p
          dangerouslySetInnerHTML={{
            __html: parseMarkdown(content.contact_section.description),
          }}
        />
      </ContactSection>
    </Page>
  );
}

export default AboutPage;

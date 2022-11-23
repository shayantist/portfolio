import React from "react";
import {
  HeroSection,
  HeroTextWrapper,
  ResearchSection,
  ResearchCard,
} from "../styles/pages/research.styles";

import { Page, SEOHead } from "../components";

interface PageProps {
  pageTitle: string;
  heroBlocks: GetBlockResponse[];
  papersBlocks: GetBlockResponse[];
  papersDB: Paper[];
}

interface Paper {
  id: string;
  title: string;
  authors: string;
  notes: string;
  url: string;
  date: string;
}

export default function ResearchPage(props: PageProps) {
  return (
    <Page>
      <SEOHead title={`Shayan Chowdhury | ${props.pageTitle}`} />
      <HeroSection>
        <HeroTextWrapper>
          {props.heroBlocks.map((block: any) => renderBlock(block))}
        </HeroTextWrapper>
      </HeroSection>

      <ResearchSection>
        {props.papersBlocks.map((block: any) => renderBlock(block))}
        {props.papersDB.map((paper: Paper) => (
          <ResearchCard
            key={paper.title}
            title={paper.title}
            subtitle={paper.date}
            textBoxes={[paper.authors, paper.notes]}
          />
        ))}
      </ResearchSection>
    </Page>
  );
}

const notion_page_url = "e1a2532d342f4b9cb926aac959de069e";
import { getBlocks, getDatabase, getPage } from "../utils/notion";
import { renderBlock, textToMarkdown } from "../utils/notion-utils";
import moment from "moment";
import { GetBlockResponse } from "@notionhq/client/build/src/api-endpoints";
export async function getStaticProps() {
  // Get Notion page and all its blocks (and children)
  const page: any = await getPage(notion_page_url);
  const pageTitle = textToMarkdown(page.properties.title.title);
  const blocks = await getBlocks(notion_page_url);

  // Split the blocks into two sections (one for hero and one for bottom)
  const heroBlocks = blocks.slice(0, 2);
  const papersBlocks = blocks.slice(2, blocks.length);

  // Extract the inline DB and get all its entries
  const papersDBBlock = papersBlocks.pop();
  const papersDB: any =
    papersDBBlock && (await getDatabase(papersDBBlock.id, "ID"));

  // Iterate through all the DB entries and extract/transform key info
  let papers: Paper[] = [];
  if (papersDB) {
    for (const paper of papersDB) {
      const props = paper.properties;

      // If not visible, then skip
      let visible = props.Visible.checkbox;
      if (!visible) continue;

      // Extract key info and convert text blocks to markdown
      let title = textToMarkdown(props.Name.title);
      let authors = textToMarkdown(props.Authors.rich_text);
      let notes = textToMarkdown(props["Journal / Notes"].rich_text);
      const date = moment(props.Date?.date?.start).format("MMMM YYYY") ?? "";

      // If URL exsits, have it point there. Otherwise, just point back to the same page
      let url = props.URL.url;
      if (url) {
        title = `[${title}](${url})`;
      } else {
        title = `[${title}](/research)`;
      }

      // Finally save everything to our array
      papers.push({
        id: paper.id,
        title: title,
        authors: authors,
        notes: notes,
        url: url,
        date: date,
      });
    }
  }

  // And return all the relevant stuff to render out
  return {
    props: {
      pageTitle: pageTitle,
      heroBlocks: heroBlocks,
      papersBlocks: papersBlocks,
      papersDB: papers,
    },
    revalidate: 10,
  };
}

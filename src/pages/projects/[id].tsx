import { Fragment } from "react";
import Head from "next/head";
import {
  HeroSection,
  HeroTextWrapper,
  ProjectsSection,
} from "../../styles/pages/projects.styles";

import { Page } from "../../components";
import { renderBlock, textToMarkdown } from "../../utils/notion-utils";

export default function ProjectPage({ page, blocks }: any) {
  const page_title = textToMarkdown(page.properties.Name.title);
  return (
    <Page>
      <Head>
        <title>{`Shayan Chowdhury | ${page_title}`}</title>
      </Head>
      <HeroSection>
        <HeroTextWrapper>
          <h1>{page_title}</h1>
        </HeroTextWrapper>
      </HeroSection>

      <ProjectsSection>
        {blocks.map((block: any) => (
          <Fragment key={block.id}>{renderBlock(block)}</Fragment>
        ))}
      </ProjectsSection>
    </Page>
  );
}

import { getBlocks, getDatabase, getPage } from "../../utils/notion";
export const getStaticPaths = async () => {
  const database_id = "196cdf32c21d4725b8661dd899453e7b";
  const database = await getDatabase(database_id);
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: false,
  };
};

// import { textToMarkdown } from "../../utils/notion-utils";
export async function getStaticProps(context: any) {
  const { id } = context.params;
  console.log(`Building slug: ${id}`);
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  return {
    props: {
      page,
      blocks: blocks,
    },
    revalidate: 1,
  };
}

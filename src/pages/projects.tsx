import React from "react";
import Head from "next/head";
import moment from "moment";
import {
  HeroSection,
  HeroTextWrapper,
  ProjectsSection,
} from "../styles/pages/projects.styles";

import { ProjectCard, Page } from "../components";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface Project {
  id: string;
  title: string;
  blurb: string;
  date: string;
  postURL: string;
  imageURL?: string;
}

export default function ProjectsPage({ pageTitle, blocks, projects }: any) {
  return (
    <Page>
      <Head>
        <title>Shayan Chowdhury | Projects</title>
      </Head>
      <HeroSection>
        <HeroTextWrapper>
          <h1>{pageTitle}</h1>
          {blocks.map((block: any) => renderBlock(block))}
        </HeroTextWrapper>
      </HeroSection>

      <ProjectsSection>
        {/* <h2>{content.papersSection.title}</h2> */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 900: 2 }}>
          <Masonry gutter="1.5em">
            {projects.map((project: Project) => (
              <ProjectCard
                key={project.id}
                image={project.imageURL}
                title={project.title}
                subtitle={project.date}
                href={project.postURL}
                textBoxes={[project.blurb]}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </ProjectsSection>
    </Page>
  );
}

const notion_page_url = "b53164fed43c490d8a13306026a67d49";
import { getBlocks, getDatabase, getPage } from "../utils/notion";
import { renderBlock, textToMarkdown } from "../utils/notion-utils";
export async function getStaticProps() {
  const page: any = await getPage(notion_page_url);
  const pageTitle = textToMarkdown(page.properties.title.title);
  const blocks = await getBlocks(notion_page_url);

  // Extract the inline DB and get all its entries
  const projectsDBBlock = blocks.pop();
  const projectsDB: any =
    projectsDBBlock &&
    (await getDatabase("f7733cdad571468d83a7623c81fac39b", "Date"));

  // Data Manipulation (to be abstracted to other file)
  let projects: Project[] = [];
  for (const project of projectsDB) {
    const props = project.properties;

    // If not visible, then skip
    let visible = props.Visible.checkbox;
    if (!visible) continue;

    // Get title and URL to the article
    let title = textToMarkdown(props.Name.title);
    let postURL = "/projects";
    if (props.URL) {
      // postURL = `/projects/${project.id}`;
      title = `[${title}](${postURL})`;
    } else {
      // postURL = `/projects/${project.id}`;
      title = `[${title}](${postURL})`;
    }

    // Get and format date
    const date = moment(props.Date?.date?.start).format("MMMM YYYY") ?? "";

    // Get article thumbnail
    let imageURL;
    if (project.properties.Thumbnail.files.length > 0) {
      imageURL = project.properties.Thumbnail.files[0].file.url;
    } else {
      imageURL =
        "https://journavel.com/wp-content/uploads/2014/11/img-placeholder-dark.jpg";
    }

    // Get article caption/blurb
    const blurb = textToMarkdown(project.properties.Blurb.rich_text);

    // Finally save everything to our array
    projects.push({
      id: project.id,
      imageURL: imageURL,
      title: title,
      blurb: blurb,
      date: date,
      postURL: postURL,
    });
  }

  return {
    props: {
      pageTitle: pageTitle,
      blocks: blocks,
      projects: projects,
    },
    revalidate: 10,
  };
}

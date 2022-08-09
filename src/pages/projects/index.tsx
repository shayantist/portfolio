import React from "react";
import Head from "next/head";
import moment from "moment";
import {
  HeroSection,
  HeroTextWrapper,
  ProjectsSection,
  ProjectsCard,
} from "../../styles/pages/projects.styles";

import { Page } from "../../components";
import { research as content } from "../../content";

interface Project {
  id: string;
  title: string;
  date: string;
}

export default function ProjectsPage({ projects }: any) {
  return (
    <Page>
      <Head>
        <title>Shayan Chowdhury | Projects</title>
      </Head>
      <HeroSection>
        <HeroTextWrapper>
          <h1>{content.title}</h1>
          {/* <p><Markdown>{content.description}</Markdown></p> */}
        </HeroTextWrapper>
      </HeroSection>

      <ProjectsSection>
        {/* <h2>{content.papersSection.title}</h2> */}
        {projects.map((project: Project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            subtitle={project.date}
            textBoxes={[`lol`]}
          />
        ))}
      </ProjectsSection>
    </Page>
  );
}

import { getDatabase } from "../../utils/notion";
import { textToMarkdown } from "../../utils/notion-utils";
export async function getStaticProps() {
  const database_id = "196cdf32c21d4725b8661dd899453e7b";
  const database = await getDatabase(database_id);

  // Data Manipulation (to be abstracted to other file)
  let projects: Project[] = [];
  database.forEach((project: any) => {
    const props = project.properties;
    let title = textToMarkdown(props.Name.title);
    if (props.URL) {
      title = `[${title}](/projects/${project.id})`;
    } else {
      title = `[${title}](/projects/${project.id})`;
    }
    const date = moment(props.Date?.date?.start).format("MMMM YYYY") ?? "";

    projects.push({
      id: project.id,
      title: title,
      date: date,
    });
  });

  return {
    props: {
      projects: projects,
    },
    revalidate: 1,
  };
}

import React from "react";
import moment from "moment";
import {
  HeroSection,
  HeroTextWrapper,
  ProjectsSection,
} from "../styles/pages/projects.styles";

import { ProjectCard, Page, SEOHead } from "../components";

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
      <SEOHead title={`Shayan Chowdhury | ${pageTitle}`} />
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

import { getBlocks, getDatabase, getPage } from "../utils/notion";
import { renderBlock, textToMarkdown } from "../utils/notion-utils";
export async function getServerSideProps() {
  const notion_page_url = "b53164fed43c490d8a13306026a67d49";
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
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAb4BvwMBIgACEQEDEQH/xAAbAAEBAQEAAwEAAAAAAAAAAAAAAQIDBAUGB//EABsQAQEBAQEBAQEAAAAAAAAAAAABEQISAyEx/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARExQf/aAAwDAQACEQMRAD8A9sgODsIqAIqAiVWaolSrWaIlSrWaCVFqVRmotQREVAQEEAFFEUFEUFVAFVFFURQAAAAEVARKqUGalWpRGaxW6xVGaxW6xQYrn06Vz6VGK59OnTn0qOfTl069OXSo5dOPTt049NRisVmrWa0sfowDyPQIAIioCJVSqJWatSiJWatSglZq1KolZWpREBAEBUAAFQBVQBVRQVUAVUBVAABAAQBmqlBKzWqzRGazWqzVGKzWqxQYrHTdY6VHPpjpvpz6VHPpz6dOnLpUcunLp16cemoxWKytZaWP0YEeR6FQQBFRREqs0QZq1KCVmrUoJWatSqiIVAEEAQFQEAVUAVWVBoRQVUAVUBVAABAVBAEolBKlWs0RKxWqzVGaxWqxQZrnW6xVRjpz6b6c+lRz6c+nTpy6VK5duPTr3XHpqMesVCitP0UQeV3BBQQQCoJREqUqUEqVazQSpVrNVCsrWQEKgKgioogCiANCKCqyoNCKCqyoKICqIACADNVKCVmrUojNZrVYqjNZrVYojNc63XOqMdOfTfTn0qMdOXTp049VYzXLuuXVb7rl02zOoCJa2/RBEed2UQAQQQSlrNAqUqUCs0qWqJUpUohWatZtAQRUVEAUQBRAGlZUFVlQaVlQVWVBRAVRAFRABKJREqUqUErFarFUSsVqsURmudbrn0oz05dN9OfSo59Vy7rp1XDutRmufVcq31XNUgAy0/QTU01xdV1E00FTU1NAtTTU0CpS1m1QtSlrNohalLWbQKhalqoahqaAJoC6Mmg0JpoNCaaDSsroNDKg1qs6aDQhoKJoAIgKlGaBUpWaoVirWbQSsVazRGa59NWsdVRjqufVb6rl1VRz6rh3XXuvH7rUYrHV/WVQrQAg++01NTXF1a1NTU0F1NNTVDU01NAtS0tZtELUtLWbQLUtLWbVQtTS1NA1NNTQXU1NTVRrTWdNBrTWdXQa1dZ00VrV1nV0GtXWNXQa1dZ1dQXTU00F01NNBdTU00DUtNS1QtZtLUtBLWbVtYtBLWLWrWLVRm1ztatY6oMdVy6rfVcu6rLl3XDqun0rjWmYgCNAAPu9NZ01ydV01nTQXU1NTQXU1NTRFtZtLWbQW1m0tS1QtZtLUtENTUtS0F1NTU1UXTWdNBdNTTQa01nTQb1dY1dBrV1nTQb1dY1dFa1dZ00GtNTTQXTU00F1NTU0F1NNZtBbWbS1m0C1m0tZtBLWLVtYtVE6rn1Wuq59VUY6rj3XTqvH+nSxmuXdYW3ai0gAigAPt9NZ01ydWtTWdNBdTU1NEXUtS1NBbUtS1LVC1LUtZtEW1LUtS0C1NS1NVF1NTU0F01nTQa01nTRGtNZ1dFa1dY1dBvV1jV0GtXWNXQb01nV0VrTWdNBrTWdNBdNTU0F1LU1LQLUtS1LQLWLVtYtUS1i1bWLRE6rl1Wuq59VUY7rxvp1+uv06ePbtVlABQAAAH2ems6mubo1prOmgupqamgupalqaC2s2lrNoi2s2lrNqi2s2lrNoi2pqWs2g1qazqaqNampqaDWms6aDemsaug3q6xpoOmrrnq6K3q6xq6g3prOmit6azpoNaazpoNampqaC6lqaloLazalqWqFrFq2sWiJaxatrn1QTquPdb6rh9OlSuf062ua39RUAAAAAAfXaazprm6NampqaDWprOpoNams6loi2palrNqi2palrNoi2palrNoLalqWs2qjWprNqaDWprOmiNaaxq6Demsauit6usaaDpq6xq6Derrnq6K3q6xq6DemsauitaazpoLprOmgupams2gtrNpazaBazaWsWiJa59VrquXVUZ76eN31tb+nTkrIAAAAAAAD6rTWNNYdGtNZ1NBrU1nU0RrU1nUtBbUtS1m0RbUtS1m1RbWbUtS0RbWbUtZtEatTWbWdUb1NY00RvTWNNB01dc9NB11dc9WUV0lXXPV0V01dc9XUV001jV0G9NZ00GtNZ00VrU1NTQXUtTUtBbWbUtZtAtYtLWOqInVce+mu+nj99bVEt2oCsgAAAAAAAPpdNY01htrTWdTQa1NZ00FtS1m1LRFtS1LWbVFtZtS1m0RbUtZtZtVGrWbWb0zehGr0zemL0zelxnXT0npz9Jq4muvpfTjp6MNdvTU6cJ01OjF12lWVynTU6Rp1lWVylalRXTWtctalFdNNY1dRW9NY1dBrTWdNFa1NZ00F1LUtZtBbWbUtZtAtc+ujrpx76UTvpzWorNABAAAAAAAAH0Gmsaaw21prOpqjWpazqaDVrNqaloi2s2pazaItrNqWs2qi2sXpL059dKlrV6YvTN6ZvSs9avSXpi1NFxr0emA1ca9L6YDTG/TU6cl0MdZ01OnDWp0JjyJ01OnjzpudIsd5Vlcp01OkaddXXLVlFdNXXPV0G9NY01Fb1NZ1NBq1m1m1m0GrXPrpL059dKHXTnaWoJaAKyAAAAAAAAAA93prOmsttams6miNamprOg1azalrNoLazalrNqotrF6S9OfXSs2r1053pL0zaqYtrIDQAgAAAAAAAAurOmRdHWdtzpwWdIPInTWuE6anSNO2rrl6X0K6aa5+j0g3qWsekvQrV6ZvTF6ZtBb1rNpayrNoArIAAAAAAAAAAAD2+pqaay0upqamgupampaC2s2pazaqFrFpax10qVOunO0tZVABFAAAAAAAAAAAAAAAAXVlZBddJ0vpz1dRrW/R6Y00Vr0mppoaalpqDNoArIAAAAAAAAAAAAAD2emoMtGmomgtrNpalES1m1bWLVE6rl1Wuq51plAEUAAAAAAAAAAAAAAAAAAAAABdNQF1dQBAAAAAAAAAAAAAAAAAAHsQRhoRUUSs1qs0GaxW6xVRz6rDXTKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9iijDSIoDNZrVSgxWK6VixUcemXTqOaxABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7IUc2mUawwGKlaSqMWMWOljNgOXUc+o7WOfUWI5i1GkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe0waTHJpEaxMUZxLGksBixmx0sZsBzsY6jrYxYo4dRh36jl1GomMgKgAAAAAAAAAAAAAAAAAAKYLiC4BiCoIAAAAAAAAAAAAAAAAAA9vhi4Y5NsmNYmAziY0YDFjNjdiWKjnYzY6WM2KOVjn1HexixR49jLt1y52NFjIqDIAAAAAAAAAAAAC4LgYqosiC4uDWMjWGIMo1iKzYyLUVkAAAAAAAAAAAAAAAB7oxRybZwxpAZxMaxMBmxmxuxMUYsZsbsSwHOxix1sZsUcbGOuXaxixqDjYzY6dRmxSxgasTBnEAEAAAAAXARcXBGpDFFkGsSRqRZGsZ0ZxcawxNGcTG8MNHOxLHSxmxdRzqN2M1qJYyArIAAAAAAAAAAAAAD3hjSOLaI0gIjSKM1ltLAYsZsbqWKMWM2N2M2KOdjNjpYzYo5WOdjtYxY1Fc8TGrEUxnExrDETGcMXDBMTDFxUMTBQawXDGpEVJGpFkWRnUJFxcMQTFxcMQTDFBGcSxpLFGLHPqO1jFjUo5VGrGW2aACAAAAAAAAAAAAPfio4toKAyjSKMo0gMVK1UqjFZsbqVRixmxus1RzsZsdLGbFVysZsdbGLGlYRqxAQUQxBQEWQxqRlUkakWRZGahIuGLIygoqCKKCI0giYljSUGLGbHSsWNQcuoxXXqOfUbiVkBpkAAAAAAAAAAAB9AKOLaIoCIqAiKijNStVKoxUrVSqMVmt1mqrFZrdZqjFjNjpWaqudiWN2M2KrOJjWGAmGLi4gSLIY0zUSRrBWUIorIiioIoICKCIjSUGKlaqVqDnY5dR2rn1G4jkLUbZAAAAAAAAAAAAfRIo4toigIioCJWmaolZaqKM1mtVKDNZrVZqqzWa3WaoxUrVSqMVGqlVWcMUFRRUQVFQVYisooKgKDIAIACCIoqM1mtJVGK59Otc+m4jjf6jXX9ZdEoAIAAAAAAAAAA+iAcWxFQEABEqoozUWoCVmtVmqM1KtSqrNZrVZqiVmtVmqJWWqiqiKAAIKqKgqxFZRQVABWQAQEVEBFQRKzWqzWoM1jpusdNRHHplrtl0iUAVAAAAAAAAAAH/2Q==";
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
    // revalidate: 10,
  };
}

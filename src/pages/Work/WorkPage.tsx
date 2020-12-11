import React from "react";
import {
  HeroSection,
  HeroTextWrapper,
  HeroFunWrapper,
  WorksSection,
  WorkCard,
} from "./WorkPage.styles";

import { Page } from "../../components";
import { work as workContent } from "../../content";
import parseMarkdown from "../../utils/parseMarkdown";
import Thonk from "../../assets/thonk.gif";

function WorkPage() {
  return (
    <Page>
      <HeroSection>
        <HeroTextWrapper>
          <h1>{workContent.title}</h1>
          <h3
            dangerouslySetInnerHTML={{
              __html: parseMarkdown(workContent.description),
            }}
          ></h3>
        </HeroTextWrapper>
        <HeroFunWrapper>
          <img src={Thonk} alt="" />
        </HeroFunWrapper>
      </HeroSection>

      <WorksSection>
        <h2>{workContent.currentWork.title}</h2>
        {/* Loop through every card in content file */}
        <div className="things">
          {workContent.currentWork.works.map((workExp) => (
            <WorkCard
              key={workExp.title}
              title={workExp.title}
              subtitle={workExp.subtitle}
              image={workExp.image}
              textBoxes={[workExp.description]}
            />
          ))}
        </div>
      </WorksSection>
    </Page>
  );
}

export default WorkPage;

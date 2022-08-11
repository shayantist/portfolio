import styled from "@emotion/styled";
import ProjectCard from "./ProjectCard";

export const ProjectCardWrapper = styled(ProjectCard)`
  display: inline-block;
  border: none;
  text-decoration: none;
  color: #ffffff;
  font-family: "Poppins";
  /* cursor: pointer; */
  text-align: left;

  .top {
    img {
      border-radius: 20px 20px 0 0;
      object-fit: cover;
    }
  }

  .bottom {
    padding: 1em 2em 2em 2em;

    span {
      font-weight: bold;
      opacity: 0.6;
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }

    a {
      font-weight: bold;
    }

    p {
      margin-top: 0.5em;
      line-height: 1.3;
      font-weight: normal;
    }
  }

  /* :hover {
    h3 > a {
      color: white;
      box-shadow: inset 0 -40px 0 0px ${(props) => props.theme.colors.accent};
    }
  } */

  background: ${(props) => props.theme.colors.cardBackground};
  width: 100%;
  border-radius: 20px;

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
`;

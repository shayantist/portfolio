import React from "react";

import { CardWrapper } from "./Card.styles";
import parseMarkdown from "../../utils/parseMarkdown";

interface Props {
  title: string;
  subtitle?: string;
  image?: string;
  textBoxes: string[];
  backgroundColor?: string;
}

function Card(props: Props) {
  return (
    <CardWrapper>
      {props.subtitle ? (
        <span
          dangerouslySetInnerHTML={{
            __html: parseMarkdown(props.subtitle),
          }}
        ></span>
      ) : null}
      <h3
        dangerouslySetInnerHTML={{
          __html: parseMarkdown(props.title),
        }}
      ></h3>
      {props.image ? <img src={props.image} alt="" /> : null}
      {props.textBoxes.map((textBox) => (
        <p
          key={textBox}
          dangerouslySetInnerHTML={{
            __html: parseMarkdown(textBox),
          }}
        ></p>
      ))}
    </CardWrapper>
  );
}

export default Card;

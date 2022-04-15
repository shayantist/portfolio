import React from "react";
import Image from "next/image";

import { CardWrapper } from "./Card.styles";
import ReactMarkdown from "react-markdown";

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
        <span>
          <ReactMarkdown>{props.subtitle}</ReactMarkdown>
        </span>
      ) : null}
      <h3>
        <ReactMarkdown>{props.title}</ReactMarkdown>
      </h3>

      {props.image ? (
        <Image src={props.image} alt="" width={50} height={50} quality={100} />
      ) : null}
      {props.textBoxes.map((textBox) => (
        <p key={textBox}>
          <ReactMarkdown>{textBox}</ReactMarkdown>
        </p>
      ))}
    </CardWrapper>
  );
}

export default Card;

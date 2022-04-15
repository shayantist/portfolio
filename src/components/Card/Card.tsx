import React from "react";
import Image from "next/image";

import { CardWrapper } from "./Card.styles";
import Markdown from "../Markdown";

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
          <Markdown>{props.subtitle}</Markdown>
        </span>
      ) : null}
      <h3>
        <Markdown>{props.title}</Markdown>
      </h3>

      {props.image ? (
        <Image src={props.image} alt="" width={50} height={50} quality={100} />
      ) : null}
      {props.textBoxes.map((textBox) => (
        <p key={textBox}>
          <Markdown>{textBox}</Markdown>
        </p>
      ))}
    </CardWrapper>
  );
}

export default Card;

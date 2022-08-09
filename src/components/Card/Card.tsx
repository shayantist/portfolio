import React from "react";
import Image from "next/image";

import Markdown from "../Markdown";

interface Props {
  title?: string;
  subtitle?: string;
  image?: string;
  textBoxes?: string[];
  backgroundColor?: string;
  className?: string;
}

function Card({ className, ...props }: Props) {
  return (
    <div className={className}>
      {props.subtitle && (
        <span>
          <Markdown>{props.subtitle}</Markdown>
        </span>
      )}

      {props.title && (
        <h3>
          <Markdown>{props.title}</Markdown>
        </h3>
      )}

      {props.image && (
        <Image src={props.image} alt="" width={50} height={50} quality={100} />
      )}

      {props.textBoxes &&
        props.textBoxes.map((textBox) => (
          <p key={textBox}>
            <Markdown>{textBox}</Markdown>
          </p>
        ))}
    </div>
  );
}

export default Card;

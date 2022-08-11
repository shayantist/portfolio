import React from "react";
import Markdown from "../Markdown";

interface Props {
  title?: string;
  subtitle?: string;
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

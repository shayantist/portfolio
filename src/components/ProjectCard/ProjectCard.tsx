import React from "react";
import Image from "next/image";
// import Link from "next/link";

import Markdown from "../Markdown";

interface Props {
  title?: string;
  subtitle?: string;
  image?: string;
  textBoxes?: string[];
  backgroundColor?: string;
  className?: string;
  href: string;
}

export default function ProjectCard({ className, ...props }: Props) {
  return (
    // <Link href={props.href} passHref={true}>
    //   <a
    //     style={{
    //       boxShadow: "none",
    //     }}
    //   >
    <div className={className}>
      <div className="top">
        {props.image && (
          <Image
            src={props.image}
            alt=""
            width={250}
            height={100}
            layout="responsive"
            quality={100}
          />
        )}
      </div>
      <div className="bottom">
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
    </div>
    // </a>
    // </Link>
  );
}

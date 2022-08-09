import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";

export default function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        p: React.Fragment,
        a: RouterLink,
        br: "span",
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

function RouterLink(props: any) {
  return props.href.match(/^\//) ? (
    <Link href={props.href}>{props.children[0]}</Link>
  ) : (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.children[0]}
    </a>
  );
}

import React from "react";
import ReactMarkdown from "react-markdown";

function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        p: React.Fragment,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

export default Markdown;

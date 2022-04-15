import React from "react";
import ReactMarkdown from "react-markdown";

function Markdown({ children }: any) {
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

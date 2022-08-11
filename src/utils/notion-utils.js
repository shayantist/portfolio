// Adapted from: https://gist.github.com/afk-mario/33b08d6ca75fea0917231cbf3acbb48a
import { Fragment } from "react";
import Image from "next/image";
import { Markdown } from "../components";

export function textToMarkdown(block) {
  if (!block | (block.length < 1)) return "";
  const { type } = block[0];
  if (type !== "text") {
    console.error(
      new Error(`Trying to convert a ${type} (non-text) block to markdown`)
    );
    return null;
  }

  return block.reduce((acc, curr) => {
    const { plain_text: text, annotations, href } = curr;
    const { bold, code, italic, strikethrough } = annotations;

    let parsed = text;

    if (italic) {
      parsed = `_${parsed}_`;
    }
    if (bold) {
      parsed = `**${parsed}**`;
    }
    if (code) {
      parsed = `\`${parsed}\``;
    }
    if (strikethrough) {
      parsed = `~~${parsed}~~`;
    }
    if (href) {
      parsed = `[${parsed}](${href})`;
    }

    return `${acc}${parsed}`;
  }, "");
}

export const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];
  let text = "";

  if ("text" in value) {
    text = value.text;
  } else if ("rich_text" in value) {
    text = value.rich_text;
  }

  switch (type) {
    case "paragraph":
      return (
        <p key={block.id}>
          <Markdown>{textToMarkdown(text)}</Markdown>
        </p>
      );
    case "heading_1":
      return (
        <h1 key={block.id}>
          <Markdown>{textToMarkdown(text)}</Markdown>
        </h1>
      );
    case "heading_2":
      return (
        <h2 key={block.id}>
          <Markdown>{textToMarkdown(text)}</Markdown>
        </h2>
      );
    case "heading_3":
      return (
        <h3 key={block.id}>
          <Markdown>{textToMarkdown(text)}</Markdown>
        </h3>
      );
    case "quote":
      return (
        <blockquote key={block.id}>
          <Markdown>{textToMarkdown(text)}</Markdown>
        </blockquote>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li key={block.id}>
          <Markdown>{textToMarkdown(text)}</Markdown>
        </li>
      );
    case "to_do":
      return (
        <div key={block.id}>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />
            <Markdown>{textToMarkdown(text)}</Markdown>
          </label>
        </div>
      );
    case "toggle":
      return (
        <details key={block.id}>
          <summary>
            <Markdown>{textToMarkdown(text)}</Markdown>
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return <p key={block.id}>{value.title}</p>;
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption =
        value.caption && value.caption.length > 0
          ? value.caption[0].plain_text
          : "";
      return (
        <figure key={block.id}>
          <Image
            src={src}
            alt={caption}
            width={700}
            height={300}
            objectFit="contain"
          />
          {caption && <figcaption>{caption}</figcaption>}
          <br />
        </figure>
      );
    default:
      return (
        <p key={block.id}>
          {`❌ Unsupported block (${
            type === "unsupported" ? "unsupported by Notion API" : type
          })`}
        </p>
      );
  }
};

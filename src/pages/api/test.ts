import { NextApiResponse } from "next";
import { getBlocks, getDatabase } from "../../utils/notion";
import { textToMarkdown } from "../../utils/notion-utils";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_: any, res: NextApiResponse) => {
  // const database_id = "d0a5fd9070c3478d998787c8f7ebb867";
  // const response = await getDatabase(database_id);
  // const texts = response.map((block: any) =>
  //   Object.keys(block["properties"]).map((key) =>
  //     NotionToMarkdown(block["properties"][key])
  //   )
  // );
  const page_id = "4da33bd1cf0846da84385eb0a70b07fe";
  const blocks = await getBlocks(page_id);
  res.status(200).json({
    heroBlocks: blocks.slice(0, 2),
    papersBlocks: blocks.slice(3, blocks.length),
    papersDBBlock: blocks.slice(3, blocks.length).pop(),
    papersDB: await getDatabase(blocks.slice(3, blocks.length).pop().id),
  });
  // res.status(200).json(response);
};

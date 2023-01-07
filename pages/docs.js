import React from "react";
import Docs from "../components/Docs";
import fs from "fs";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("data"));

  const doc = files.map((fileName) => {
    const slug = fileName.replace(".md", "");

    const readFile = fs.readFileSync(path.join("data", fileName), "utf-8");

    const { data: frontmatter, content } = matter(readFile);

    return {
      slug,
      content,
      frontmatter,
    };
  });

  return {
    props: {
      doc,
    },
  };
}

export default function docs({ doc }) {
  return (
    <>
      <Docs doc={doc} />
    </>
  );
}

import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";
import renderToString from "next-mdx-remote/render-to-string";

import MDXComponents from "../components/MDXComponents";

const root = process.cwd();

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, "data", type));
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, "data", type, `${slug}.mdx`), "uft8")
    : fs.readFileSync(path.join(root, "data", type, `${type}.mdx`), "uft8");

  const { data, context } = matter(source);
  const mdxSource = await renderToString(context, {
    components: MDXComponents,
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: context.split(/\s+/gu).length,
      readingTime: readingTime(context),
      slug: slug || null,
      ...data,
    },
  };
}

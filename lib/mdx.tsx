import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { JSXElementConstructor, ReactElement } from "react";
import { useMDXComponents } from "@/mdx-components";

const projectsDirectory = path.join(process.cwd(), "app", "content");

type MDXFile = {
  metadata: Record<string, unknown>;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};

export const GetMDXFile = async (
  slug: string,
  option: "projects" | "articles"
): Promise<MDXFile> => {
  const components = useMDXComponents({});

  try {
    const source = fs.readFileSync(
      path.join(projectsDirectory, option, `${slug}.mdx`),
      "utf8"
    );

    const { frontmatter, content } = await compileMDX({
      source,
      components,
      options: {
        parseFrontmatter: true,
      },
    });

    return {
      metadata: { ...frontmatter, slug },
      content,
    };
  } catch (error) {
    return {
      metadata: {},
      content: <h1 className="text-center">This project does not exists!</h1>,
    };
  }
};

export const getPostsMetadata = async (
  option: "projects" | "articles"
): Promise<Record<string, unknown>[]> => {
  const files = fs
    .readdirSync(path.join(projectsDirectory, option))
    .map((file) => `${file}`)
    .filter((file) => file.endsWith(".mdx"));

  let posts: Record<string, unknown>[] = [];

  for (const file of files) {
    const { metadata } = await GetMDXFile(file.replace(/\.mdx$/, ""), option);

    posts.push(metadata);
  }

  // transform the array of posts into a sorted array by the priority field
  posts.sort((a, b) => {
    if ((a.priority as number) < (b.priority as number)) {
      return 1;
    } else if ((a.priority as number) > (b.priority as number)) {
      return -1;
    } else {
      return 0;
    }
  });

  return posts;
};

import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { JSXElementConstructor, ReactElement } from "react";
import { useMDXComponents } from "@/mdx-components";

const projectsDirectory = path.join(process.cwd(), "app", "content");

type MDXFile = {
  metadata: Record<string, unknown>;
  content: ReactElement<any, string | JSXElementConstructor<any>> | null;
};

export const GetMDXFile = async (
  slug: string,
  option: "projects" | "articles"
): Promise<MDXFile> => {
  const components = useMDXComponents({});

  const filePath = path.join(projectsDirectory, option, `${slug}.mdx`);
  const fileExists = fs.existsSync(filePath);

  if (!fileExists) {
    return {
      metadata: {},
      content: null,
    };
  }

  try {
    const source = fs.readFileSync(filePath, "utf8");

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
      content: null,
    };
  }
};

export const getPostsMetadata = async (
  option: "projects" | "articles"
): Promise<Record<string, unknown>[]> => {
  let files: string[] = [];

  try {
    files = fs
      .readdirSync(path.join(projectsDirectory, option))
      .map((file) => `${file}`)
      .filter((file) => file.endsWith(".mdx"));
  } catch (error) {
    // console.error("Error reading directory:", error);
    return [];
  }

  let posts: Record<string, unknown>[] = [];

  for (const file of files) {
    const { metadata, content } = await GetMDXFile(
      file.replace(/\.mdx$/, ""),
      option
    );
    if (content == null) continue;
    posts.push(metadata);
  }

  // Transform the array of posts into a sorted array by the priority field
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

import { MetadataRoute } from "next";
import fs from "fs";
import { getPostsMetadata } from "@/lib/mdx";

type Endpoint = {
  url: string;
  filePath: string;
  lastModified: Date;
};

const domain = "https://ciureabogdan.com";

const getEndpointFromFilePath = (filePath: string): string => {
  let path = filePath.replace("app/", "").replace("/page.tsx", "");

  // Add leading slash
  if (!path.startsWith("/")) {
    path = `/${path}`;
  }

  if (path === "/page.tsx") return "/";
  return path;
};

const getStaticEndpoints = (): Endpoint[] => {
  const filePaths: string[] = [
    "app/page.tsx",
    "app/projects/page.tsx",
    "app/university/page.tsx",
  ];

  let endpoints: Endpoint[] = [];

  filePaths.forEach((filePath) => {
    const file = fs.statSync(filePath);
    const endpoint: Endpoint = {
      url: `${domain}${getEndpointFromFilePath(filePath)}`,
      filePath: filePath,
      lastModified: file.mtime,
    };
    endpoints.push(endpoint);
  });

  return endpoints;
};

const getDynamicEndpoints = async (): Promise<Endpoint[]> => {
  // Get projects
  let endpoints: Endpoint[] = [];

  const projects = await getPostsMetadata("projects");
  projects.forEach((project) => {
    const endpoint: Endpoint = {
      url: `${domain}/projects/${project.slug}`,
      filePath: `app/projects/${project.slug}.tsx`,
      lastModified: project.mtime as Date,
    };
    endpoints.push(endpoint);
  });

  const blogPosts = await getPostsMetadata("articles");
  blogPosts.forEach((post) => {
    const endpoint: Endpoint = {
      url: `${domain}/blog/${post.slug}`,
      filePath: `app/blog/${post.slug}.tsx`,
      lastModified: post.mtime as Date,
    };
    endpoints.push(endpoint);
  });

  return endpoints;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEndpoints = getStaticEndpoints();
  const dynamicEndpoints = await getDynamicEndpoints();

  return [...staticEndpoints, ...dynamicEndpoints];
}

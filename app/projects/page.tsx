import { getPostsMetadata } from "@/lib/mdx";

async function Page() {
  const projects = await getPostsMetadata("projects");

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.slug as string}>{project.title as string}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page;

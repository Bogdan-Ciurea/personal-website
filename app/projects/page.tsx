import { getPostsMetadata } from "@/lib/mdx";
import { josefinSans, metrophobic, robotoMono } from "../data";
import Link from "next/link";

const colourByType = (type: string) => {
  switch (type) {
    case "University Project":
      return "bg-[#50905190]";
    case "Personal Project":
      return "bg-[#F2A90090]";
  }
};

const Project = ({
  slug,
  title,
  type,
  description,
}: {
  slug: string;
  title: string;
  type: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col h-min[400px] h-auto bg-[#F8F8F8] rounded-xl  border-gray-800 border-2">
      <h1
        className={`${robotoMono.variable} font-roboto-mono font-weight-400 text-[30px] lg:text-[40px] m-5`}
      >
        {title}
      </h1>
      <div className="mx-4 rounded-md">
        <div className="inline-block">
          <p
            className={`${
              metrophobic.className
            } font-metrophobic  text-[16px] lg:text-[20px] p-1 ${colourByType(
              type
            )} rounded-md`}
          >
            {type}
          </p>
        </div>
      </div>
      <p
        className={`${josefinSans.className} font-josefin-sans font-weight-400 text-[24px] lg:text-[34px] text-justify m-5`}
      >
        {description}
      </p>
      {/* spacer */}
      <div className="flex-grow"></div>
      <hr className="border-[#171717] border-opacity-50" />

      <Link
        href={`/projects/${slug}`}
        className={`${josefinSans.className} font-josefin-sans font-weight-400 text-[16px] lg:text-[24px] text-center my-5 hover:text-[#003F91] hover:underline`}
      >
        See project
      </Link>
    </div>
  );
};

const ShowProjects = ({
  projects,
}: {
  projects: Record<string, unknown>[];
}) => {
  return (
    <div className="w-[1500px] max-w-[90%] mx-auto mb-[50px]">
      <h1
        className={`${robotoMono.variable} font-roboto-mono font-weight-400 text-[36px] lg:text-[46px] xl:text-[54px] text-center py-[50px]`}
        style={{ fontWeight: 300 }}
      >
        Projects
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {projects.map((project) => {
          return (
            <Project
              slug={project.slug as string}
              title={project.title as string}
              description={project.description as string}
              type={project.type as string}
              key={project.title as string}
            />
          );
        })}
      </div>
    </div>
  );
};

async function Page() {
  const projects = await getPostsMetadata("projects");

  return (
    <main>
      <ShowProjects projects={projects} />
    </main>
  );
}

export default Page;

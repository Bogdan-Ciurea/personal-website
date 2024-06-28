import Image from "next/image";
import {
  AboutMe,
  LinkToProjects,
  ShowTechnologies,
  ShowWork,
} from "@/app/client-components";
import {
  descriptionElements,
  josefinSans,
  metrophobic,
  robotoMono,
} from "./data";
import { getPostsMetadata } from "@/lib/mdx";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { AiFillFilePdf, AiOutlineLinkedin } from "react-icons/ai";
import { ImArrowDown2, ImArrowUpRight2 } from "react-icons/im";

const projectMax: number = 3;

const ExternalLinks = () => {
  return (
    <div
      className={`${metrophobic.variable} font-metrophobic md:flex text-white`}
    >
      <a
        href="https://github.com/Bogdan-Ciurea"
        className="flex w-[130px] rounded-md items-center justify-center p-2 md:mr-2 md:my-2
        bg-gradient-to-r lg:bg-gradient-to-t from-[#003f91e4] to-blue-500
        hover:bg-gradient-to-r lg:hover:bg-gradient-to-t hover:from-[#003c91] hover:to-blue-600 hover:shadow-lg transition-all duration-300
        dark:from-[#002454e4] dark:to-blue-800 dark:hover:from-[#002454] dark:hover:to-blue-900"
        target="_blank"
      >
        <BsGithub />
        <div className="flex-grow" />
        <p>GitHub</p>
        <ImArrowUpRight2 className="ml-2" />
      </a>
      <a
        href="https://www.linkedin.com/in/bogdan-alexandru-ciurea-111974151/"
        className="flex w-[130px] rounded-md items-center justify-center p-2 my-2 md:m-2
        bg-gradient-to-r lg:bg-gradient-to-t from-[#003f91e4] to-blue-500
        hover:bg-gradient-to-r lg:hover:bg-gradient-to-t hover:from-[#003c91] hover:to-blue-600 hover:shadow-lg transition-all duration-300
        dark:from-[#002454e4] dark:to-blue-800 dark:hover:from-[#002454] dark:hover:to-blue-900"
        target="_blank"
      >
        <AiOutlineLinkedin />
        <div className="flex-grow" />
        <p>LinkedIn</p>
        <ImArrowUpRight2 className="h-[100%] ml-2" />
      </a>
      <a
        href="/files/cv-bogdan-ciurea.pdf"
        download="cv-bogdan-ciurea.pdf"
        rel="noopener noreferrer"
        className="flex w-[130px] rounded-md items-center justify-center p-2 md:my-2 md:ml-2
        bg-gradient-to-r lg:bg-gradient-to-t from-[#003f91e4] to-blue-500
        hover:bg-gradient-to-r lg:hover:bg-gradient-to-t hover:from-[#003c91] hover:to-blue-600 hover:shadow-lg transition-all duration-300
        dark:from-[#002454e4] dark:to-blue-800 dark:hover:from-[#002454] dark:hover:to-blue-900"
        aria-label="Download CV"
      >
        <AiFillFilePdf />
        <div className="flex-grow" />
        <p>CV</p>
        {/* <ImArrowDown2 className="h-[100%] ml-2" /> */}
        <ImArrowUpRight2 className="h-[100%] ml-2" />
      </a>
    </div>
  );
};

// Components
const FirstParagraph = () => {
  return (
    <div
      className="mx-auto w-[1040px] max-w-[90%] flex flex-wrap my-[calc(50vh-300px)]"
      //mt-[calc(50vh-300px)] mb-[calc(50vh-300px)]
      // ref={ref}
    >
      <div className="min-w-fit mx-auto">
        <Image
          src="/image.jpeg"
          alt="Bogdan Ciurea"
          width="256"
          height="341"
          style={{ borderRadius: "11px" }}
        />
      </div>
      <div className="space-y-[20px] max-w-[90%] lg:max-w-[70%] mx-auto">
        <h1
          className={`${metrophobic.variable} font-metrophobic text-[36px] lg:text-[46px] xl:text-[64px]]`}
        >
          Bogdan Ciurea
        </h1>
        <p
          className={`${josefinSans.className} font-josefin-sans`}
          style={{ fontSize: "24px" }}
        >
          Hi, I&apos;m Bogdan!
        </p>
        <p
          className={`${josefinSans.className} font-josefin-sans`}
          style={{ fontSize: "24px" }}
        >
          Recently graduated software developer with hands-on experience in
          Linux systems, networking, and full-stack development. Proven skills
          in maintaining servers, deploying new features, and solving technical
          issues. Successfully led software projects and worked closely with
          teams to meet client needs. Comfortable with C++, Node.js, and various
          databases. Passionate about learning and growing in the field.
          Experienced in training new team members and working on both
          individual and group projects during university.
        </p>
        <ExternalLinks />
      </div>
    </div>
  );
};

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
    <div className="flex flex-col h-min[400px] h-auto bg-[#05165290] rounded-xl">
      <h1
        className={`${robotoMono.variable} font-roboto-mono text-[30px] lg:text-[40px] m-5`}
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
        className={`${josefinSans.className} font-josefin-sans text-[24px] lg:text-[34px] text-justify m-5`}
      >
        {description}
      </p>
      {/* spacer */}
      <div className="flex-grow"></div>
      <hr className="border-[#FFFFFC] border-opacity-50" />

      <Link
        href={`/projects/${slug}`}
        className={`${josefinSans.className} font-josefin-sans text-[16px] lg:text-[24px] text-center my-5`}
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
    <div className="w-[1500px] max-w-[90%] mx-auto text-[#FFFFFC]">
      <h1
        className={`${robotoMono.variable} font-roboto-mono font-weight-400 text-[36px] lg:text-[46px] xl:text-[64px] text-center py-[50px]`}
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

      <LinkToProjects />
    </div>
  );
};

async function Page() {
  const projects = (await getPostsMetadata("projects")).slice(0, projectMax);

  return (
    <main>
      <FirstParagraph />
      <Image
        src="/white-to-blue.svg"
        alt="white to blue"
        layout="responsive"
        width={100}
        height={100}
      />
      <div className="h-auto  bg-[url('/wave_background.svg')] pb-[100px]">
        {/* This is the About me part */}
        <AboutMe />
        {descriptionElements.map((element) => {
          return <ShowWork element={element} key={element.title} />;
        })}
      </div>
      <Image
        src="/dark-blue-to-white.svg"
        alt="blue to white"
        layout="responsive"
        width={100}
        height={50}
        className="pb-[150px]"
      />
      <ShowTechnologies />

      <Image
        src="/white-to-blue.svg"
        alt="white to blue"
        layout="responsive"
        width={100}
        height={100}
      />
      <div className="h-auto  bg-[url('/wave_background.svg')] pb-[100px]">
        <ShowProjects projects={projects} />
      </div>
    </main>
  );
}

export default Page;

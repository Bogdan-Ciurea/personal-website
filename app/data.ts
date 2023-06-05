import { Roboto_Mono, Josefin_Sans, Metrophobic } from "next/font/google";

// Fonts
export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-josefin-sans",
});

export const metrophobic = Metrophobic({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-metrophobic",
});

// Types
export type DescriptionElement = {
  title: string;
  subtitle: string;
  text: string;

  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imagePosition: "left" | "right";

  link: string | null;
};

export type Technology = {
  name: string;
  image: string;
  imageAlt: string;
};

export type TechnologyCategory = {
  name: string;
  technologies: Technology[];
};

// Data
export const technologies: TechnologyCategory[] = [
  {
    name: "Workspace",
    technologies: [
      {
        name: "Linux",
        image: "/technologies/linux.svg",
        imageAlt: "linux",
      },
      {
        name: "Bash",
        image: "/technologies/bash.svg",
        imageAlt: "bash",
      },
      {
        name: "Git",
        image: "/technologies/git.svg",
        imageAlt: "git",
      },
      {
        name: "Docker",
        image: "/technologies/docker.svg",
        imageAlt: "docker",
      },
      {
        name: "VS Code",
        image: "/technologies/vscode.svg",
        imageAlt: "vscode",
      },
      {
        name: "Vim",
        image: "/technologies/vim.svg",
        imageAlt: "vim",
      },
    ],
  },
  {
    name: "Languages",
    technologies: [
      {
        name: "C++",
        image: "/technologies/cpp.svg",
        imageAlt: "cpp",
      },
      {
        name: "C",
        image: "/technologies/c.svg",
        imageAlt: "c",
      },
      {
        name: "Python",
        image: "/technologies/python.svg",
        imageAlt: "python",
      },
      {
        name: "Java",
        image: "/technologies/java.svg",
        imageAlt: "java",
      },
      {
        name: "SQL",
        image: "/technologies/sql.svg",
        imageAlt: "sql",
      },
    ],
  },
  {
    name: "Web",
    technologies: [
      {
        name: "HTML",
        image: "/technologies/html.svg",
        imageAlt: "html",
      },
      {
        name: "CSS",
        image: "/technologies/css.svg",
        imageAlt: "css",
      },
      {
        name: "JavaScript",
        image: "/technologies/javascript.svg",
        imageAlt: "javascript",
      },
      {
        name: "Bootstrap",
        image: "/technologies/bootstrap.svg",
        imageAlt: "bootstrap",
      },
      {
        name: "TypeScript",
        image: "/technologies/typescript.svg",
        imageAlt: "typescript",
      },
      {
        name: "React",
        image: "/technologies/react.svg",
        imageAlt: "react",
      },
      {
        name: "Next.js",
        image: "/technologies/nextjs.svg",
        imageAlt: "nextjs",
      },
      {
        name: "T3",
        image: "/technologies/t3.svg",
        imageAlt: "t3",
      },
    ],
  },
  {
    name: "More",
    technologies: [
      {
        name: "LaTeX",
        image: "/technologies/latex.svg",
        imageAlt: "latex",
      },
      {
        name: "Markdown",
        image: "/technologies/markdown.svg",
        imageAlt: "markdown",
      },
      {
        name: "OpenGL",
        image: "/technologies/opengl.svg",
        imageAlt: "opengl",
      },
      {
        name: "Figma",
        image: "/technologies/figma.svg",
        imageAlt: "figma",
      },
      {
        name: "GitHub",
        image: "/technologies/github.svg",
        imageAlt: "github",
      },
      {
        name: "GitLab",
        image: "/technologies/gitlab.svg",
        imageAlt: "gitlab",
      },
    ],
  },
];

export const descriptionElements: DescriptionElement[] = [
  {
    title: "University",
    subtitle: "University of Leeds: MEng & BSc Computer Science",
    text: "Finished my BSc in Computer Science with a First Class Honours (>70%) and I am currently studying for my MEng in Computer Science. The modules I have studied include: Software Engineering, Algorithms, Data Structures, Computer Graphics, Artificial Intelligence, Cryptography, and many more.",
    image: "/logo-leeds.png",
    imageAlt: "logo leeds",
    imageWidth: 220,
    imageHeight: 220,
    imagePosition: "left",
    link: "/university",
  },
  {
    title: "Work",
    subtitle: "R Systems: Junior Software Engineer",
    text: "I am currently working as a Junior Software Engineer at R Systems, a company that provides outsourcing services in the telecom industry. I am currently maintaining and developing a Java + Rhino solution for a client in Netherlands. My responsibilities include: maintaining the current nodes and developing new ones, writing documentation, and providing support for the client.",
    image: "/logo-rsystems.png",
    imageAlt: "logo RSystems",
    imageWidth: 220,
    imageHeight: 173 * (220 / 288),
    imagePosition: "right",
    link: null,
  },
];

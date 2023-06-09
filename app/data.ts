import { Roboto_Mono, Josefin_Sans, Metrophobic } from "next/font/google";

// Fonts
export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["200", "300", "400", "500", "700"],
});

export const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "700"],
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
// University
export type Grade = {
  name: string;
  grade: number;
  weight: number;
};
export type Module = {
  name: string;
  credits: number;
  grades: Grade[];
};
export type Year = {
  name: string;
  modules: Module[];
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

// Data
export const years: Year[] = [
  {
    name: "Year 1",
    modules: [
      {
        name: "Computer Architecture",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 78,
            weight: 50,
          },
          {
            name: "Coursework 2",
            grade: 100,
            weight: 50,
          },
        ],
      },
      {
        name: "Procedural Programming",
        credits: 10,
        grades: [
          {
            name: "Corusework 1",
            grade: 100,
            weight: 20,
          },
          {
            name: "Coursework 2",
            grade: 100,
            weight: 40,
          },
          {
            name: "Coursework 3",
            grade: 90,
            weight: 40,
          },
        ],
      },
      {
        name: "Fundamental Mathematical Concepts",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 50,
            weight: 15,
          },
          {
            name: "Coursework 2",
            grade: 57,
            weight: 15,
          },
          {
            name: "Coursework 3",
            grade: 63,
            weight: 15,
          },
          {
            name: "Coursework 4",
            grade: 83,
            weight: 15,
          },
          {
            name: "Exam",
            grade: 55,
            weight: 60,
          },
        ],
      },
      {
        name: "Professional Computing",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 91,
            weight: 20,
          },
          {
            name: "Coursework 2",
            grade: 48,
            weight: 20,
          },
          {
            name: "Exam",
            grade: 69,
            weight: 60,
          },
        ],
      },
      {
        name: "Japanese A1",
        credits: 20,
        grades: [
          {
            name: "Reading",
            grade: 74,
            weight: 25,
          },
          {
            name: "Listening",
            grade: 64,
            weight: 25,
          },
          {
            name: "Speaking",
            grade: 54,
            weight: 50,
          },
        ],
      },
      {
        name: "Introduction to web technologies",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 83,
            weight: 40,
          },
          {
            name: "Coursework 2",
            grade: 68,
            weight: 60,
          },
        ],
      },
      {
        name: "Programming Project",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 97,
            weight: 30,
          },
          {
            name: "Coursework 2 Planning Report",
            grade: 75,
            weight: 20,
          },
          {
            name: "Coursework 2",
            grade: 84,
            weight: 50,
          },
        ],
      },
      {
        name: "Object Oriented Programming",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 97,
            weight: 40,
          },
          {
            name: "Coursework 2",
            grade: 94,
            weight: 60,
          },
        ],
      },
      {
        name: "Math",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 100,
            weight: 10,
          },
          {
            name: "Coursework 2",
            grade: 96,
            weight: 10,
          },
          {
            name: "Coursework 3",
            grade: 95,
            weight: 10,
          },
          {
            name: "Coursework 4",
            grade: 94,
            weight: 10,
          },
          {
            name: "Exam",
            grade: 94,
            weight: 60,
          },
        ],
      },
      {
        name: "Computer Processors",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 100,
            weight: 25,
          },
          {
            name: "Coursework 2",
            grade: 100,
            weight: 25,
          },
          {
            name: "Coursework 3",
            grade: 100,
            weight: 25,
          },
          {
            name: "Coursework 4",
            grade: 80,
            weight: 25,
          },
        ],
      },
      {
        name: "Databases",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 80,
            weight: 10,
          },
          {
            name: "Coursework 2",
            grade: 100,
            weight: 20,
          },
          {
            name: "Coursework 3",
            grade: 100,
            weight: 30,
          },
          {
            name: "Exam",
            grade: 95,
            weight: 40,
          },
        ],
      },
    ],
  },
  {
    name: "Year 2",
    modules: [
      {
        name: "Operating Systems",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 100,
            weight: 25,
          },
          {
            name: "Coursework 2",
            grade: 92,
            weight: 25,
          },
          {
            name: "Coursework 3",
            grade: 56,
            weight: 25,
          },
          {
            name: "Coursework 4",
            grade: 48,
            weight: 25,
          },
        ],
      },
      {
        name: "Numerical Computation",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 90,
            weight: 20,
          },
          {
            name: "Coursework 2",
            grade: 53,
            weight: 20,
          },
          {
            name: "Exam",
            grade: 77,
            weight: 60,
          },
        ],
      },
      {
        name: "Algorithms I",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 96,
            weight: 10,
          },
          {
            name: "Coursework 2",
            grade: 76,
            weight: 10,
          },
          {
            name: "Exam",
            grade: 91,
            weight: 80,
          },
        ],
      },
      {
        name: "User Interfaces",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 87,
            weight: 15,
          },
          {
            name: "Coursework 2",
            grade: 77,
            weight: 35,
          },
          {
            name: "Coursework 3",
            grade: 79,
            weight: 50,
          },
        ],
      },
      {
        name: "Software Engineering Principles",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 90,
            weight: 20,
          },
          {
            name: "Exam",
            grade: 85,
            weight: 80,
          },
        ],
      },
      {
        name: "New Enterprise Planning",
        credits: 20,
        grades: [
          {
            name: "Report",
            grade: 59,
            weight: 100,
          },
        ],
      },
      {
        name: "Networks",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 100,
            weight: 30,
          },
          {
            name: "Exam",
            grade: 66,
            weight: 70,
          },
        ],
      },
      {
        name: "Formal Languages and Finite Automata",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 48,
            weight: 25,
          },
          {
            name: "Coursework 2",
            grade: 56,
            weight: 25,
          },
          {
            name: "Coursework 3",
            grade: 68,
            weight: 25,
          },
          {
            name: "Coursework 4",
            grade: 100,
            weight: 25,
          },
        ],
      },
      {
        name: "Artificial Intelligence",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 80,
            weight: 20,
          },
          {
            name: "Coursework 2",
            grade: 80,
            weight: 20,
          },
          {
            name: "Coursework 3",
            grade: 100,
            weight: 10,
          },
          {
            name: "Exam",
            grade: 64,
            weight: 60,
          },
        ],
      },
      {
        name: "Algorithms and Data Structures II",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 100,
            weight: 10,
          },
          {
            name: "Coursework 2",
            grade: 100,
            weight: 10,
          },
          {
            name: "Coursework 3",
            grade: 72,
            weight: 10,
          },
          {
            name: "Exam",
            grade: 64,
            weight: 70,
          },
        ],
      },
      {
        name: "Software Engineering Project",
        credits: 10,
        grades: [
          {
            name: "Full",
            grade: 77,
            weight: 100,
          },
        ],
      },
    ],
  },
  {
    name: "Year 3",
    modules: [
      {
        name: "Computer Graphics",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 76.7,
            weight: 30,
          },
          {
            name: "Coursework 2",
            grade: 71,
            weight: 70,
          },
        ],
      },
      {
        name: "User Adaptive Intelligent Systems",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 73,
            weight: 30,
          },
          {
            name: "Coursework 2",
            grade: 80,
            weight: 10,
          },
          {
            name: "Exam",
            grade: 42,
            weight: 60,
          },
        ],
      },
      {
        name: "Information Visualization",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 57.5,
            weight: 25,
          },
          {
            name: "Coursework 2",
            grade: 58.0,
            weight: 50,
          },
          {
            name: "Exam",
            grade: 64,
            weight: 25,
          },
        ],
      },
      {
        name: "Secure Computing",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 0,
            weight: 15,
          },
          {
            name: "Coursework 2",
            grade: 90,
            weight: 15,
          },
          {
            name: "Exam",
            grade: 0,
            weight: 70,
          },
        ],
      },
      {
        name: "Graph algorithms and Complexity Theory",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 100,
            weight: 7,
          },
          {
            name: "Coursework 2",
            grade: 66,
            weight: 7,
          },
          {
            name: "Coursework 3",
            grade: 53,
            weight: 6,
          },
          {
            name: "Exam",
            grade: 69,
            weight: 80,
          },
        ],
      },
      {
        name: "Individual Project",
        credits: 40,
        grades: [
          {
            name: "Report",
            grade: 74,
            weight: 100,
          },
        ],
      },
      {
        name: "Web Services and Web Data",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 0,
            weight: 30,
          },
          {
            name: "Coursework 2",
            grade: 0,
            weight: 30,
          },
          {
            name: "Exam",
            grade: 0,
            weight: 40,
          },
        ],
      },
      {
        name: "Cryptography",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 95,
            weight: 20,
          },
          {
            name: "Coursework 2",
            grade: 100,
            weight: 20,
          },
          {
            name: "Exam",
            grade: 0,
            weight: 60,
          },
        ],
      },
      {
        name: "Parallel Computation",
        credits: 10,
        grades: [
          {
            name: "Coursework 1",
            grade: 100,
            weight: 15,
          },
          {
            name: "Coursework 2",
            grade: 95,
            weight: 20,
          },
          {
            name: "Coursework 3",
            grade: 100,
            weight: 15,
          },
          {
            name: "Exam",
            grade: 0,
            weight: 50,
          },
        ],
      },
    ],
  },
];

"use client";

import { Roboto_Mono, Josefin_Sans, Metrophobic } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";

// Window size hook
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0 as number,
    height: 0 as number,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
};

// Fonts
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-josefin-sans",
});

const metrophobic = Metrophobic({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-metrophobic",
});

// Types
type DescriptionElement = {
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

type Technology = {
  name: string;
  image: string;
  imageAlt: string;
};

type TechnologyCategory = {
  name: string;
  technologies: Technology[];
};

// Data
const technologies: TechnologyCategory[] = [
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

const descriptionElements: DescriptionElement[] = [
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

// Components
const FirstParagraph = ({
  windowSize,
}: {
  windowSize: { width: number; height: number };
}) => {
  // const [height, setHeight] = useState(341);
  // const ref = useRef(null);

  // useEffect(() => {
  //   if (!ref?.current?.clientHeight) {
  //     return;
  //   }
  //   setHeight(ref?.current?.clientHeight);
  // }, [ref?.current?.clientHeight]);

  // console.log(height);
  // const margin = Math.ceil((windowSize.height - 125 - height - 50) / 2);

  return (
    <div
      className={`mx-auto w-[1040px] max-w-[90%] flex flex-wrap my-[calc(50vh-300px)]`}
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
          className={`${metrophobic.variable} font-metrophobic font-weight-400`}
          style={{ fontSize: "64px" }}
        >
          Bogdan Ciurea
        </h1>
        <p
          className={`${josefinSans.className} font-josefin-sans font-weight-400`}
          style={{ fontSize: "24px" }}
        >
          Hi, I&apos;m Bogdan!
        </p>
        <p
          className={`${josefinSans.className} font-josefin-sans font-weight-400`}
          style={{ fontSize: "24px" }}
        >
          I&apos;m a Software Engineer who loves to learn new things and
          challenge myself. I&apos;m currently studying Computer Science at the
          University of Leeds. I have a passion for C++ and software
          architecture challenges and I&apos;m always looking to improve my
          skills.
        </p>
      </div>
    </div>
  );
};

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animate = useAnimation();

  useEffect(() => {
    if (isInView) {
      animate.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          type: "spring",
          bounce: 0.25,
          delay: 0.2,
        },
      });
    }
  }, [isInView]);

  return (
    <motion.div
      className="pt-[114px] pb-[50px] w-[1040px] max-w-[90%] mx-auto"
      initial={{ x: 300, opacity: 0 }}
      animate={animate}
    >
      <div
        className={`${robotoMono.variable} font-roboto-mono flex space-x-[20px] text-[46px] xl:text-[64px]`}
      >
        <p className="text-[#FFFFFC]" ref={ref}>
          About
        </p>
        <p className="text-red-600">me</p>
      </div>
    </motion.div>
  );
};

const ShowWork = ({
  element,
  windowSize,
}: {
  element: DescriptionElement;
  windowSize: { width: number; height: number };
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animateImage = useAnimation();
  const animateText = useAnimation();

  const start = element.imagePosition === "right" ? -300 : 300;

  useEffect(() => {
    if (isInView) {
      animateImage.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          type: "spring",
          bounce: 0.25,
          delay: 0.3,
        },
      });
      animateText.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          type: "spring",
          bounce: 0.25,
          delay: 0.3,
        },
      });
    }
  }, [isInView]);

  return (
    <div
      className={`flex flex-wrap w-[1040px] max-w-[90%] mx-auto pt-[100px] pb-[100px] items-center text-[#FFFFFC] ${
        element.imagePosition === "right" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <motion.div
        initial={{ x: -start, opacity: 0 }}
        animate={animateImage}
        className={
          (windowSize.width < 1000 ? "w-[100%] mx-auto" : "") +
          (element.imagePosition === "left" ? "lg:pr-[50px]" : "lg:pl-[50px]")
        }
      >
        <Image
          src={element.image}
          className="width-[220px] height-[220px] mx-auto"
          alt={element.imageAlt}
          width={element.imageWidth}
          height={element.imageHeight}
        />
      </motion.div>

      <motion.div
        className="w-[70%] space-y-3 mx-auto"
        initial={{ x: start, opacity: 0 }}
        animate={animateText}
        ref={ref}
      >
        <h1
          className={
            `${metrophobic.className} font-metrophobic font-weight-400 text-right` +
            (element.imagePosition === "right" ? "" : "text-left")
          }
          style={{ fontSize: "36px" }}
        >
          {element.title}
        </h1>
        <h3
          className={
            `${metrophobic.className} font-metrophobic font-weight-400 text-right` +
            (element.imagePosition === "right" ? "" : "text-left")
          }
          style={{ fontSize: "28px" }}
        >
          {element.subtitle}
        </h3>
        <p
          className={`${josefinSans.className} font-josefin-sans font-weight-200 text-justify`}
          style={{ fontSize: "24px" }}
        >
          {element.text}
        </p>
        {element.link !== null ? (
          <Link
            href={element.link}
            className={`${josefinSans.className} font-josefin-sans font-weight-200`}
            style={{ fontSize: "20px" }}
          >
            Read more {"->"}
          </Link>
        ) : (
          <></>
        )}
      </motion.div>
    </div>
  );
};

const ShowTechnologies = (
  {
    windowSize,
  }: {
    windowSize: { width: number; height: number };
  } = { windowSize: { width: 0, height: 0 } }
) => {
  const [selected, setSelected] = useState<number>(0);
  const [lastSelected, setLastSelected] = useState<number>(0);

  return (
    <div className="w-[1500px] max-w-[90%] mx-auto mb-[200px]">
      <h1
        className={`${robotoMono.variable} font-roboto-mono font-weight-400 text-[36px] lg:text-[46px] xl:text-[64px] text-center pb-[20px]`}
      >
        Technologies
      </h1>
      <div className="flex flex-wrap justify-center space-x-[40px]">
        {technologies.map((category, index) => {
          return (
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className={`${
                selected === index
                  ? "bg-[#FFFFFC] text-[#003F91] border-[#003F91] border-2"
                  : "bg-[#003F91] text-[#FFFFFC] hover:bg-[#003376]"
              } ${
                metrophobic.variable
              } font-metrophobic font-weight-400 text-[24px] px-[20px] py-[10px] rounded-[10px] m-[10px]`}
              onClick={() => {
                setLastSelected(selected);
                setSelected(index);
              }}
              key={category.name}
            >
              {category.name}
            </motion.button>
          );
        })}
      </div>

      <motion.div
        className="w-[100%] min-h-[300px] mt-[65px] bg-[#F8F8F8] rounded-2xl flex flex-wrap justify-around"
        variants={{
          initial: {
            x: 300 * -(lastSelected - selected),
            opacity: 0,
          },
          animate: {
            x: 0,
            opacity: 1,
          },
          exit: {
            x: 300 * (lastSelected - selected),
            opacity: 0,
          },
        }}
        transition={{
          duration: 1,
          type: "spring",
          bounce: 0.25,
        }}
        initial="initial"
        animate="animate"
        exit="exit"
        key={selected}
      >
        {technologies[selected].technologies.map((technology) => {
          return (
            <div
              className="flex flex-col justify-center items-center my-auto w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
              key={technology.name}
            >
              <Image
                src={technology.image}
                alt={technology.imageAlt}
                width={windowSize.width < 768 ? 50 : 100}
                height={windowSize.width < 768 ? 50 : 100}
              />
              <p
                className={`${josefinSans.className} font-josefin-sans font-weight-200 text-center pt-[10px]`}
                style={{ fontSize: "20px" }}
              >
                {technology.name}
              </p>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

function Home() {
  const windowSize = useWindowSize();

  return (
    <main>
      <FirstParagraph windowSize={windowSize} />
      <Image
        src="/white-to-blue.svg"
        alt="white to blue"
        width={windowSize.width}
        height={100}
      />
      <div className="h-auto  bg-[#003F91] pb-[100px]">
        {/* This is the About me part */}
        <AboutMe />
        {/* <PlaneAnimation windowSize={windowSize} /> */}
        {descriptionElements.map((element) => {
          return (
            <ShowWork
              element={element}
              windowSize={windowSize}
              key={element.title}
            />
          );
        })}
      </div>
      <Image
        src="/blue-to-white.svg"
        alt="blue to white"
        width={windowSize.width}
        height={100}
        className="pb-[150px]"
      />
      <ShowTechnologies windowSize={windowSize} />
    </main>
  );
}

export default Home;

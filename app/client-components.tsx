"use client";

import { josefinSans, metrophobic, robotoMono, technologies } from "./data";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useRef, useState } from "react";
import { DescriptionElement } from "./data";

// Window size hook
export const useWindowSize = () => {
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

export const AboutMe = () => {
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

export const ShowWork = ({ element }: { element: DescriptionElement }) => {
  const windowSize = useWindowSize();
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
            `${robotoMono.variable} font-roboto-mono text-right` +
            (element.imagePosition === "right" ? "" : "text-left")
          }
          style={{ fontSize: "36px", fontWeight: 400 }}
        >
          {element.title}
        </h1>
        <h3
          className={
            `${metrophobic.className} font-metrophobic text-right` +
            (element.imagePosition === "right" ? "" : "text-left")
          }
          style={{ fontSize: "28px" }}
        >
          {element.subtitle}
        </h3>
        <p
          className={`${josefinSans.className} font-josefin-sans text-justify`}
          style={{ fontSize: "24px", fontWeight: 200 }}
        >
          {element.text}
        </p>
        {element.link !== null ? (
          <Link
            href={element.link}
            className={`${josefinSans.className} font-josefin-sans`}
            style={{ fontSize: "20px" }}
          >
            Read more &rarr;
          </Link>
        ) : (
          <></>
        )}
      </motion.div>
    </div>
  );
};

export const ShowTechnologies = () => {
  const windowSize = useWindowSize();
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

export const LinkToProjects = () => {
  return (
    <motion.div
      className="w-[100%] mt-[30px]"
      whileHover={{
        scale: 1.1,
        x: 60,
      }}
      whileTap={{
        scale: 0.9,
      }}
    >
      <Link
        href="/projects"
        className={`${josefinSans.className} font-josefin-sans font-weight-400 text-[16px] lg:text-[24px] text-center my-5`}
      >
        See all projects &rarr;
      </Link>
    </motion.div>
  );
};
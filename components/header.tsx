"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import { robotoMono } from "../app/data";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { useTheme } from "next-themes";

type Link = {
  name: string;
  link: string;
  color: string;
};

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

const HeaderElement = ({
  link,
  index,
  pathname,
  isMobile,
  isHidden,
  setIsHidden,
}: {
  link: Link;
  index: number;
  pathname: string;
  isMobile: boolean;
  isHidden: boolean;
  setIsHidden: Dispatch<SetStateAction<boolean>>;
}) => {
  const animation = useAnimation();

  useEffect(() => {
    if (isMobile && !isHidden) {
      animation.set({
        height: 0,
        opacity: 0,
        x: -100, // Assuming initial position is -10
      });
      animation.start({
        height: "auto",
        opacity: 1,
        x: 0,
        transition: {
          delay: index * 0.1,
          duration: 0.5,
        },
      });
    } else {
      animation.start({
        height: "auto",
        opacity: 1,
      });
    }
  }, [isHidden]);

  return (
    <motion.li
      key={index}
      whileHover={isMobile ? {} : { scale: 1.1 }}
      whileTap={isMobile ? {} : { scale: 0.9 }}
      animate={isMobile ? animation : {}}
      className={isMobile ? "my-3" : ""}
    >
      <Link
        href={link.link}
        className={`${
          robotoMono.variable
        } font-roboto-mono hover:underline float-right
        transition-colors duration-300 sm:text-[18px] lg:text-[24px] ${
          link.link === pathname
            ? "text-[#00000080] dark:text-gray-500"
            : "text-[#000000] dark:text-white"
        }`}
        style={{
          fontSize: "24px",
          fontWeight: 400,
        }}
        onClick={() => setIsHidden(true)}
      >
        {link.name}
      </Link>
    </motion.li>
  );
};

const Header = () => {
  const windowSize = useWindowSize();

  // Get the pathname of the current page and remove the trailing slash and any query parameters
  // or any paths after the trailing slash.
  const currentPath = usePathname();
  const slashCount = currentPath.split("/").length - 1;
  let pathname = "";
  if (slashCount > 1) {
    const secondSlash = currentPath.indexOf("/", 1);
    pathname = currentPath.substring(0, secondSlash);
  } else {
    pathname = currentPath;
  }

  const theme = useTheme();

  // Style the current page's link in the header.
  const links: Link[] = [
    {
      name: "Home",
      link: "/",
      color: theme.resolvedTheme === "dark" ? "#fff" : "#000",
    },
    {
      name: "Projects",
      link: "/projects",
      color: theme.resolvedTheme === "dark" ? "#fff" : "#000",
    },
    {
      name: "Blog",
      link: "/blog",
      color: theme.resolvedTheme === "dark" ? "#fff" : "#000",
    },
    // {
    //   name: "Contact",
    //   link: "/contact",
    //   color: "#000",
    // },
  ];

  const [isHidden, setIsHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(
    windowSize.width < 768 ? true : false
  );

  useEffect(() => {
    if (windowSize.width < 768 && !isMobile) {
      setIsMobile(true);
    } else if (windowSize.width >= 768 && isMobile) {
      setIsMobile(false);
    }
  }, [windowSize]);

  return (
    <motion.nav
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 120,
      }}
      className="pt-[50px] w-full" // fixed top-0 bg-gradient-to-b from-[#EDEFEC]"
    >
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-[90%] ">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Bogdan Ciurea"
              width="50"
              height="75"
              className="rounded-full"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap" />
          </Link>
          {/* Spacer */}
          <div className="flex-grow"></div>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden"
            aria-expanded="false"
            onClick={() => setIsHidden(!isHidden)}
          >
            {
              // Icon when menu is closed.
              isHidden ? (
                <BiMenu size={40} />
              ) : (
                // Icon when menu is open.
                <IoCloseSharp size={40} />
              )
            }
          </button>
          <div
            className={
              "justify-between items-center w-full md:flex md:w-auto md:order-1" +
              (isHidden ? " hidden" : "")
            }
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-[50px] md:mt-0">
              {links.map((link, index) => (
                <HeaderElement
                  key={index}
                  link={link}
                  pathname={pathname}
                  index={index}
                  isMobile={isMobile}
                  isHidden={isHidden}
                  setIsHidden={setIsHidden}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { robotoMono } from "../data";
import { useState } from "react";

type Link = {
  name: string;
  link: string;
  color: string;
};

const Header = () => {
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

  // Style the current page's link in the header.
  const links: Link[] = [
    {
      name: "Home",
      link: "/",
      color: "#000",
    },
    {
      name: "Projects",
      link: "/projects",
      color: "#000",
    },
    {
      name: "Blog",
      link: "/blog",
      color: "#000",
    },
    {
      name: "Contact",
      link: "/contact",
      color: "#000",
    },
  ];

  links.map((link) => {
    if (link.link === pathname) {
      link.color = "#00000080";
    }
  });

  const [isHidden, setIsHidden] = useState(false);

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
              src="/logo-no-background-1.png"
              alt="Bogdan Ciurea"
              width="50"
              height="75"
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
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={
              "justify-between items-center w-full md:flex md:w-auto md:order-1" +
              (isHidden ? " hidden" : "")
            }
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-[50px] md:mt-0">
              {links.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  <Link
                    href={link.link}
                    className={`${robotoMono.variable} font-roboto-mono hover:underline hover:text-[#F9A826] transition-colors duration-300 sm:text-[18px] lg:text-[24px]`}
                    style={{
                      color: link.color,
                      fontSize: "24px",
                      fontWeight: 400,
                    }}
                    onClick={() => setIsHidden(!isHidden)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;

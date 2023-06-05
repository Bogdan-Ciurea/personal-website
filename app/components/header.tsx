"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { robotoMono } from "../data";

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
      className="max-w-[1500px] mx-auto pt-[50px]"
    >
      <div className="max-w-[90%] mx-auto content-center flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/logo-no-background-1.png"
            alt="Bogdan Ciurea"
            width="50"
            height="75"
          />
        </div>
        <div className="items-center">
          <ul className="flex flex-wrap space-x-[50px]">
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
                  className={`${robotoMono.variable} font-roboto-mono hover:underline`}
                  style={{
                    color: link.color,
                    fontSize: "24px",
                  }}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;

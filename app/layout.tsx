// "use client";

import "./globals.css";
import Header from "./components/header";
// import { motion, AnimatePresence } from "framer-motion";
// import { usePathname } from "next/navigation";

export const metadata = {
  title: "Bogdan Ciurea",
  description: "Bogdan Ciurea's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const router = usePathname();

  return (
    <html lang="en">
      {/* <head>
        <title>Bogdan Ciurea</title>
        <meta name="description" content="Bogdan Ciurea's personal website" />
        <meta name="author" content="Bogdan Ciurea" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo-no-background-1.png" />
      </head> */}
      <body>
        {/* <AnimatePresence mode={"wait"}>
        <motion.div
            key={router}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.6,
            }}
            variants={{
              initialState: {
                backgroundColor: "#003F91",
                // clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              },
              animateState: {
                backgroundColor: "#003F91",
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              },
              exitState: {
                backgroundColor: "#003F91",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              },
            }}
            className="bg-[#003F91] w-screen h-screen fixed top-0 left-0 z-50"
          /> */}
        <Header />
        {children}
        {/* </AnimatePresence> */}
      </body>
    </html>
  );
}

// "use client";

import "./globals.css";
import Header from "../components/header";
import { ApplyTheme, ToTopButton } from "./client-components";
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
      <head>
        <title>Bogdan Ciurea</title>
        <meta name="description" content="Bogdan Ciurea's personal website" />
        <meta name="author" content="Bogdan Ciurea" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="bg-[#edefecd1] dark:bg-[#0f1624] dark:text-gray-200">
        <ApplyTheme>
          <Header />
          <ToTopButton />
          {children}
        </ApplyTheme>
      </body>
    </html>
  );
}

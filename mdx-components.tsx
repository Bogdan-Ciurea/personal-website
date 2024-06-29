import type { MDXComponents } from "mdx/types";
import { josefinSans, metrophobic, robotoMono } from "./app/data";
import Image from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1
        className={`${robotoMono.variable} font-roboto-mono text-[30px] lg:text-[40px] my-5`}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className={`${metrophobic.className} font-metrophobic text-[30px] lg:text-[40px] my-5`}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className={`${josefinSans.className} font-josefin-sans text-[20px] lg:text-[30px] my-5`}
        style={{ fontWeight: 700 }}
      >
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p
        className={`
      ${josefinSans.className} font-josefin-sans text-[20px] lg:text-[30px] my-5 text-justify dark:text-white`}
        style={{ fontWeight: 300 }}
      >
        {children}
      </p>
    ),
    a: ({ children, href }) => (
      <a href={href} className="transition-colors duration-300" target="_blank">
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong
        className={`${robotoMono.className} font-roboto-mono text-[14px] lg:text-[18px] dark:text-white
      `}
      >
        {children}
      </strong>
    ),
    ul: ({ children }) => (
      <ul
        className={`${josefinSans.className} font-josefin-sans list-disc list-inside dark:text-yellow-100`}
      >
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol
        className={`${josefinSans.className} font-josefin-sans list-disc list-inside dark:text-white`}
      >
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="my-2 dark:text-white">{children}</li>,
    th: ({ children }) => (
      <th className="border border-[#F9A826]">{children}</th>
    ),
    tr: ({ children }) => (
      <tr className="border border-[#F9A826]">{children}</tr>
    ),
    tbody: ({ children }) => (
      <tbody className="border border-[#F9A826]">{children}</tbody>
    ),
    table: ({ children }) => (
      <table
        className={`${robotoMono.className} font-roboto-mono table-auto w-full`}
      >
        {children}
      </table>
    ),
    td: ({ children }) => (
      <td className="border border-[#F9A826]">{children}</td>
    ),
    pre: ({ children }) => (
      <pre className="bg-[#b94141] rounded-md">{children}</pre>
    ),
    code: ({ children }) => (
      <code
        className={`${robotoMono.className} font-roboto-mono text-[14px] lg:text-[18px] dark:text-white
      `}
      >
        {children}
      </code>
    ),
    em: ({ children }) => (
      <em
        className={`${robotoMono.className} italic font-roboto-mono text-[14px] lg:text-[18px] dark:text-white
      `}
      >
        {children}
      </em>
    ),
    img: ({ src, alt }) => (
      <Image
        src={src ?? ""}
        alt={alt ?? ""}
        width={800}
        height={400}
        className="rounded-md"
      />
    ),

    ...components,
  };
}

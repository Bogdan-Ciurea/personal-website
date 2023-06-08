import { metrophobic } from "@/app/data";
import { GetMDXFile } from "@/lib/mdx";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { ImArrowUpRight2 } from "react-icons/im";

const Page = async ({ params }: { params: { slug: string } }) => {
  const { metadata, content } = await GetMDXFile(params.slug, "articles");

  return (
    <main>
      <div className="h-auto pb-[100px] w-[800px] max-w-[90%] mx-auto">
        <article className="prose mt-10 w-[100%]">{content}</article>
      </div>
    </main>
  );
};

export default Page;

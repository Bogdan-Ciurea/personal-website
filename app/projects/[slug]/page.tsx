import { metrophobic } from "@/app/data";
import { GetMDXFile } from "@/lib/mdx";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { ImArrowUpRight2 } from "react-icons/im";

const Page = async ({ params }: { params: { slug: string } }) => {
  const { metadata, content } = await GetMDXFile(params.slug, "projects");

  return (
    <main>
      <div className="h-auto pb-[100px] w-[800px] max-w-[90%] mx-auto md:flex md:flex-row-reverse">
        <Link
          href={metadata.link as string}
          className={`${metrophobic.variable} font-metrophobic 
          flex w-[130px] h-[40px] rounded-md mt-[60px] md:mt-[60px] p-2
          items-center justify-center md:mr-2 md:my-2 text-white
          bg-gradient-to-tr from-[#003f91e4] to-blue-500
          hover:bg-gradient-to-tr hover:from-[#003c91] hover:to-blue-600
          hover:shadow-lg transition-all duration-300
          `}
          target="_blank"
        >
          <BsGithub />
          <div className="flex-grow" />
          <p>GitHub</p>
          <ImArrowUpRight2 className="ml-2" />
        </Link>
        <article className="prose mt-10 w-[100%]">{content}</article>
      </div>
    </main>
  );
};

export default Page;

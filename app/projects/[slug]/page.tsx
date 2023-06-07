import { GetMDXFile } from "@/lib/mdx";

const Page = async ({ params }: { params: { slug: string } }) => {
  const { content } = await GetMDXFile(params.slug, "projects");

  return (
    <main>
      <div className="h-auto pb-[100px] w-[800px] max-w-[90%] mx-auto">
        <article className="prose mt-10 w-[100%]">{content}</article>
      </div>
    </main>
  );
};

export default Page;

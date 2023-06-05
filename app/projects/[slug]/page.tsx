import { getMDXFile } from "@/lib/mdx";

const Page = async ({ params }: { params: { slug: string } }) => {
  const { metadata, content } = await getMDXFile(params.slug, "projects");

  return (
    <main>
      <div className="h-auto pb-[100px] w-[945px] max-w-[90%] mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center">
            {metadata.title as string}
          </h1>
          <p className="text-xl text-center">
            {metadata.description as string}
          </p>
        </div>
        <article className="prose mt-10 w-[100%]">{content}</article>
      </div>
    </main>
  );
};

export default Page;

import { getPostsMetadata } from "@/lib/mdx";
import { josefinSans, robotoMono } from "../data";

async function Page() {
  const articles = await getPostsMetadata("articles");

  return (
    <main>
      {articles.length == 0 ? (
        <div className="w-[1500px] max-w-[90%] mx-auto mb-[50px]">
          <h1
            className={`${robotoMono.variable} font-roboto-mono font-weight-400 text-[36px] lg:text-[46px] xl:text-[54px] text-center py-[50px]`}
            style={{ fontWeight: 300 }}
          >
            Blog
          </h1>
          <p
            className={`${josefinSans.className} font-josefin-sans font-weight-400 text-[16px] lg:text-[24px] text-center my-5`}
          >
            There are no articles yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* {articles.map((article) => {
            return <div className="flex flex-col" key={article.title}></div>;
          })} */}
        </div>
      )}
    </main>
  );
}

export default Page;

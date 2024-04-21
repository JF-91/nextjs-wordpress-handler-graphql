import { getPages } from "@/hooks/getPages";
import { getPosts } from "@/hooks/getPosts";


export default async function Home() {
  

  const { posts } = await getPosts();

  const { pages } = await getPages();





  return (
    <main>
      {
        pages.map((page, index) => (
          <article className="" key={index}>
            <h2 className="text-blue-600">{page.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
          </article>
        ))
      }
    </main>
  );
}

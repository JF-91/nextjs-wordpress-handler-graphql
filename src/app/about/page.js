import { getPosts } from "../../hooks/getPosts";

export default async function About() {

  const { posts } = await getPosts();

  return (
    <div>
        <h1>About</h1>
        <p>This is the about page</p>
        
        {
          posts.map((post, index) => (
            <article className="" key={index}>
              <h2 className="text-blue-600">{post.title}</h2>
              <div className="text-red-300" dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
          ))
        }
    </div>
  );
}
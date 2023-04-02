import { fetchArticles } from "../http/UrlAddress";
import Card from "../components/Card";
import Link from "next/link";
export default function Home({ posts }) {
  return (
    <>
      <ul className="d-flex">
        {posts.data.map((article) => {
          return (
            <li key={article.id}>
              <Link href={`/blog/${article.attributes.slug}`}>
                <Card article={article} />
              </Link>
            </li>
            // <li key={article.id}>
            //   <Link href={`/posts/${article.id}`}>
            //     <Card article={article} />
            //   </Link>
            // </li>
          );
        })}
      </ul>
    </>
  );
}

export async function getStaticProps(context) {
  const articles = await fetchArticles();
  console.log('articles', articles.data);

  return {
    props: {
      posts: articles.data
    },
  };
}

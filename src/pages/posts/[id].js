import React from "react";
import { fetchArticle, fetchArticles } from "../../http/UrlAddress";
import MarkdownIt from "markdown-it";

function id({ post }) {
  const heading = post.data.attributes.heading;
  const content = post.data.attributes.content;

  const md = new MarkdownIt();
  const htmlContent = md.render(content);
  return (
    <>
      <h1>{heading}</h1>
      <section dangerouslySetInnerHTML={{__html: htmlContent}}></section>
      {/* <section>{htmlContent}</section> */}
    </>
  );
}

export default id;

export async function getStaticProps({ params }) {
  const postRes = await fetchArticle(params.id);

  return {
    props: {
      post: postRes.data,
    },
  };
}

export async function getStaticPaths() {
  const postsRes = await fetchArticles();

  const paths = postsRes.data.data.map((post) => {
    return { params: { id: post.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}

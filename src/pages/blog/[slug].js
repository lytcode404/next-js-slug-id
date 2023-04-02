import React from 'react'
import { fetchArticle, fetchArticles } from '../../http/UrlAddress';

const slug = () => {
  return (
    <div>slug</div>
  )
}


export async function getStaticPaths() {
  const posts = await fetchArticles();
  console.log('posts', posts)

  return {
    paths: posts.data.map((post) => {
      return {
        params: {
          slug: post.attributes.slug
        }
      };
    }),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await fetchArticle(params.slug);
  console.log(params.slug)
  return {
    props: {
      post
    }
  };
}






export default slug
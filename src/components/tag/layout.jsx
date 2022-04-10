import React from 'react';
import Layout from '../layout';
import Seo from "../seo"
import { graphql } from 'gatsby'
import PostItem from '../post/post-item';

export default function blog(props) {
  const posts = props.data.allMdx.nodes;
  const tag = props.pageContext.tag;
  return <Layout path="/blog/">
    <Seo title={tag} />
    <div className='my-20 lg:max-w-screen-sm mx-auto'>
      <h4 className="text-2xl font-semibold text-gray-600 mb-10 text-center"># {tag}</h4>
      {
        posts.map(post => (
          <PostItem key={post.frontmatter.path} {...post.frontmatter} />
        ))
      }
    </div>
  </Layout>;
}

export const query = graphql`
query($tag: [String]!) {
  allMdx(filter: {frontmatter: {tags: {in: $tag}}}) {
    nodes {
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        excerpt
        title
        tags
      }
    }
  }
}
`;
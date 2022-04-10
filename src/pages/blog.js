import React from 'react';
import Layout from '../components/layout';
import Seo from "../components/seo"
import { graphql } from 'gatsby'
import PostItem from '../components/post/post-item';

export default function blog({ path, data }) {
  return <Layout path={path}>
    <Seo title="Blog" />
    <div className='my-20 lg:max-w-screen-sm mx-auto'>
      {
        data.allMdx.nodes.map(post => (
          <PostItem key={post.id} {...post.frontmatter} />
        ))
      }
    </div>
  </Layout>;
}

export const query = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        excerpt
        tags
      }
      id
    }
  }
}
`;
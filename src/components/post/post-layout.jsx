import React from 'react';
import Layout from '../layout';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { MDXLayoutComponents } from '../mdx';
import Seo from "../seo"

export default function PostLayout(props) {
  // const pageContext = props.pageContext;
  const post = props.data.mdx;
  const tags = post.frontmatter.tags;
  return <Layout path="/blog/">
    <Seo title={post.frontmatter.title} />
    <div className='my-20 lg:max-w-screen-sm mx-auto leading-6'>
      <div className='mb-6'>
        <h3 className='text-4xl font-bold text-gray-700 mb-3'>{post.frontmatter.title}</h3>
        <div className='flex items-center text-sm justify-between'>
          <div className='text-gray-500'>{post.frontmatter.date}</div>
          <div>
            {
              tags.map(tag =>
                <Link className='mr-3' key={tag} to={`/tag/${tag}`}># {tag}</Link>
              )
            }
          </div>
        </div>
      </div>
      <MDXProvider
        components={{ ...MDXLayoutComponents }}
      >
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </div>
  </Layout>;
}

export const query = graphql`
query($id: String!) {
  mdx(id: {eq: $id}) {
    id
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      excerpt
      path
      tags
    }
    body
  }
}`
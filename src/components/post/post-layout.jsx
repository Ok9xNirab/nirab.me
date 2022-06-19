import React from "react"
import Layout from "../layout"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { MDXLayoutComponents } from "../mdx"
import Seo from "../seo"

export default function PostLayout(props) {
  // const pageContext = props.pageContext;
  const post = props.data.mdx
  const tags = post.frontmatter.tags
  return (
    <Layout path="/blog/">
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt}
      />
      <div className="my-20 lg:max-w-screen-md mx-auto leading-6">
        <div className="mb-6">
          <h3 className="text-4xl font-bold text-gray-700 mb-3">
            {post.frontmatter.title}
          </h3>
          <div className="flex items-center text-sm justify-between">
            <div className="text-gray-500">{post.frontmatter.date}</div>
            <div>
              {tags.map(tag => (
                <Link className="mr-3" key={tag} to={`/tag/${tag}`}>
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <MDXProvider components={{ ...MDXLayoutComponents }}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
        <div>
          <hr className="my-6" />
          <div className="flex items-start bg-gray-100 p-3 border rounded">
            <div className="w-48 p-1 border">
              <img src="/me-classic.jpeg" alt="me" />
            </div>
            <div className="ml-3">
              <h4 className="font-bold text-xl">Istiaq Nirab</h4>
              <p className="text-gray-400 text-xs">Full stack web developer</p>
              <p className="text-gray-700 text-sm my-2 leading-6">
                I’m a WordPress Plugin developer & have some experienced with
                WooCommerce . Last couple of years, I developed 10+ WooCommerce
                extensions & also do some custom solutions . I'm ready for
                served any WordPress & WooCommerce related custom solutions.
              </p>
              <a href="https://twitter.com/ok9xnirab" target="_blank">
                Follow me on twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
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
  }
`

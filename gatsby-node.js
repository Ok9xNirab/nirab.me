const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  await create_posts(graphql, actions, reporter);
  await create_tags(graphql, actions, reporter);
}

async function create_posts(graphql, actions, reporter) {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/components/post/post-layout.jsx`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        path
      }
      id
    }
  }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMdx.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: `\post${post.frontmatter.path}`,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

async function create_tags(graphql, actions, reporter) {
  const { createPage } = actions
  const tagLists = path.resolve(`./src/components/tag/layout.jsx`)
  const tagResult = await graphql(
    `
      {
  allMdx {
    nodes {
      frontmatter {
        tags
      }
    }
  }
}
    `
  )

  if (tagResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      tagResult.errors
    )
    return
  }

  const tagsNodes = tagResult.data.allMdx.nodes;
  const tags = [];

  if (tagsNodes.length > 0) {
    tagsNodes.forEach(node => {
      node.frontmatter.tags.forEach(tag => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    });
  }

  if (tags.length > 0) {
    tags.forEach((tag) => {
      createPage({
        path: `tag/${tag.split(' ').join('-')}`,
        component: tagLists,
        context: {
          tag: tag
        },
      })
    })
  }
}

module.exports = {
  siteMetadata: {
    title: `Istiaq Nirab`,
    description: `Istiaq Nirab is a WordPress plugin developer. Here I share my thoughts on WordPress coding related stuffs.`,
    author: `@Ok9xNirab`,
    siteUrl: `https://nirab.me/`,
    image: '/me-classic.jpeg',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/articles/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nirab.me`,
        short_name: `Nirab.me`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/android-chrome-512x512.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        plugins: [
          `gatsby-remark-images`,
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
        defaultLayouts: {
          default: require.resolve(`./src/components/post/posts-layout.js`),
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Space Grotesk\:300,400,500,600,700`,
        ],
        display: 'swap'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

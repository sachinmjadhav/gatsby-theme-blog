module.exports = ({ contentPath = "posts", basePath = "/" }) => ({
  plugins: [
    `gatsby-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: contentPath
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".md", ".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              backgroundColor: "none",
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              showLineNumbers: false,
            },
          },
        ]
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`
    }
  ]
});

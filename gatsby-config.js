module.exports = {
  siteMetadata: {
    title: `Ben Wilcox's Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-next`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`
      }
    },
    `gatsby-transformer-remark`
  ]
}

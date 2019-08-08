module.exports = {
  siteMetadata: {
    title: `Blair Wilcox's Portfolio`,
    socialLinks: {
      email: `blairwilcox93@gmail.com`,
      linkedin: `https://www.linkedin.com/in/blairwilcox`,
      github: `https://github.com/reccanti`,
      codepen: `https://codepen.io/reccanti`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-69058558-2",
        anonymize: true
      }
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-sass`,
    `gatsby-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`
      }
    }
  ]
}

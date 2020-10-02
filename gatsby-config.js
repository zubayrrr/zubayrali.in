const remark = require("remark")
require("dotenv").config()

const config = require("./config/site")

module.exports = {
  siteMetadata: require("./site-meta-data.json"),
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        token: config.githubApiToken,
        graphQLQuery: config.githubApiQuery,
        variables: config.githubApiVariables,
        typeName: "GitHub",
        fieldName: "githubData",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `Bearer ${config.githubApiToken}`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zubayrali.in`,
        short_name: `zubayrali.in`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#111111`,
        display: `minimal-ui`,
        icon: `content/assets/favicon-32x32.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: [`title`, `description`, `body`],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            tags: node => node.frontmatter.tags,
            description: node => node.frontmatter.description,
            slug: node => node.fields.slug,
            body: node => String(remark().processSync(node.rawMarkdownBody)),
            excerpt: node => {
              const text = remark().processSync(node.rawMarkdownBody)
              const excerptLength = 139 // Hard coded excerpt length
              return (
                node.rawMarkdownBody &&
                String(text).substring(0, excerptLength) + "..."
              )
            },
            date: node => {
              const months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ]
              const date = new Date(node.frontmatter.date)
              return (
                months[date.getUTCMonth(0)] +
                " " +
                date.getUTCDate(0) +
                ", " +
                date.getUTCFullYear(0)
              )
            },
          },
        },
      },
    },
    "gatsby-plugin-dark-mode",
  ],
}

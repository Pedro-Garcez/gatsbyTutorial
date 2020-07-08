/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Gatsby Tutorial",
    description: "whatever desc this is",
    author: "@peeposaurusrex",
    data: ["item1", "item2"],
    person: {
      name: "gohan",
      age: 23,
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `cxu4mc9artf6`,
        accessToken: `rBI3AVXxQteHwg3KprL2RplZsxc--UPVEQ57xcCyOMk`,
      },
    },
  ],
}

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
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],
}

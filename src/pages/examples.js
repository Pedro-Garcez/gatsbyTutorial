import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <h1>hello from examples page</h1>
      <Header />
      <HeaderStatic />
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <h5>{data.site.info.author}</h5>
    </Layout>
  )
}

export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`
export default examples

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/product.module.css"
import Image from "gatsby-image"

const product = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  const { title, price, id, image, slug } = products
  console.log(products)
  return (
    <Layout>
      <h1></h1>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default product

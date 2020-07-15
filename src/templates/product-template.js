import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/product.module.css"
import Image from "gatsby-image"

const productTemplate = (props) => {
  return (
    <Layout>
      <h1>This is a product template.</h1>
    </Layout>
  )
}

export default productTemplate

import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/productTemplate.module.css"
import Image from "gatsby-image"

const productTemplate = ({
  data: {
    product: {
      title,
      image: { fixed },
    },
  },
}) => {
  return (
    <Layout>
      <div className={styles.stylesTemplate_grid}>
        <div className={styles.stylesTemplate_header}>
          <Link to="/products">back to products</Link>
          <h1>{title}</h1>
        </div>
        <div className={styles.stylesTemplate_content}>
          <Image fixed={fixed}></Image>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      price
      title
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default productTemplate

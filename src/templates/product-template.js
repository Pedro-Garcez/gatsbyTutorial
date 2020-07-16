import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/productTemplate.module.css"
import Image from "gatsby-image"

const productTemplate = ({
  data: {
    product: {
      price,
      title,
      info: { info },
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
          <h3>${price}</h3>
        </div>
        <div className={styles.stylesTemplate_contentImage}>
          <Image fixed={fixed}></Image>
        </div>
        <div className={styles.stylesTemplate_contentInfo}>
          <p>{info}</p>
          <button>Add to cart</button>
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

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/products.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Products = ({ data }) => {
  /* destructure nodes from data and give it the alias products*/
  const {
    allContentfulProduct: { nodes: products },
  } = data
  return (
    <Layout>
      <h1>Products page dog</h1>
      <section className={styles.products_flex}>
        {products.map((product) => {
          /* destructure each item in the array (product) and get the title,
          price and id properties and assign it to the variables title and price respectively*/
          const { title, price, id, image, slug } = product
          return (
            <article key={id} className={styles.products_flex_item}>
              <Link to={slug}>
                <Image
                  fluid={image.fluid}
                  alt={title}
                  className={styles.products_img}
                />
              </Link>
              <h2>{title}</h2>
              <h3>${price}</h3>
            </article>
          )
        })}
      </section>
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

export default Products

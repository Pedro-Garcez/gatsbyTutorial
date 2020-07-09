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
      <section>
        <h1>Products page dog</h1>
        {products.map((product) => {
          /* destructure each item in the array (product) and get the title,
          price and id properties and assign it to the variables title and price respectively*/
          const { title, price, id } = product
          return (
            <article key={id}>
              {console.log(id)}
              <h3>{title}</h3>
              <p>{price}</p>
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

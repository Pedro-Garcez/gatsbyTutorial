import React from "react"
import Layout from "../components/Layout"
import styles from "../components/products.module.css"

const products = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>hello? products.</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, illo id
          expedita magnam praesentium hic earum quos, adipisci voluptates
          officiis repellat, sed assumenda libero accusamus!
        </p>
      </div>
    </Layout>
  )
}

export default products

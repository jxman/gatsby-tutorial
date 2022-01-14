import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as styles from "../components/products.module.css"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  console.log(products)

  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => {
          return (
            <article key={product.id}>
              <GatsbyImage
                image={product.image.gatsbyImageData}
                alt={product.title}
              />
              <h3>
                {product.title}
                <span>${product.price}</span>
              </h3>
              <Link to={`/products/${product.slug}`}>more details</Link>
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
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`

export default ComponentName

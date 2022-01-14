import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"

const ComponentName = ({
  data: {
    product: {
      price,
      title,
      image: { gatsbyImageData },
      info: { info },
    },
  },
}) => {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <Link to="/products">back to products</Link>
        <h1>single product : {title}</h1>
      </div>
      <section className="single-product">
        <article>
          <GatsbyImage image={gatsbyImageData} alt={title} />
        </article>
        <article>
          <h1>{title}</h1>
          <h3>${price}</h3>
          <p>{info}</p>
          <button>add to cart</button>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      image {
        gatsbyImageData(layout: FIXED, width: 300)
      }
      info {
        info
      }
    }
  }
`

export default ComponentName

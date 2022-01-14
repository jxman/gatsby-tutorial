import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image-2.jpeg"
import { GatsbyImage } from "gatsby-plugin-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image-2.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 200)
      }
    }
    fluid: file(relativePath: { eq: "image-2.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)

  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} width="100%" alt="ocean" />
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
        <GatsbyImage image={data.fixed.childImageSharp.gatsbyImageData} />
      </article>
      <article className="single-image">
        <h3>blurred image/svg</h3>
        <GatsbyImage image={data.fluid.childImageSharp.gatsbyImageData} />
      </article>
    </section>
  )
}

export default Images

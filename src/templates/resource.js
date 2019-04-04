import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Constrain from "../components/Constrain"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Constrain>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Constrain>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
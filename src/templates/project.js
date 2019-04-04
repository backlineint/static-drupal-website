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
        <p>Repository: <a href={post.frontmatter.repository}>{post.frontmatter.repository}</a></p>
        <p>Homepage: <a href={post.frontmatter.homepage}>{post.frontmatter.homepage}</a></p>
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
        repository
        homepage
      }
    }
  }
`
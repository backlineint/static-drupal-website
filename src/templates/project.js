import React from "react"
import { graphql } from "gatsby"
import { FaEdit } from 'react-icons/fa'

import Layout from "../components/layout"
import Constrain from "../components/Constrain"

import styles from "../components/ProjectTemplate.module.scss"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Constrain>
        <h1>{post.frontmatter.title}</h1>
        <div className={styles.grid}>
          <div className={styles.primary} dangerouslySetInnerHTML={{ __html: post.html }} />
          <div className={styles.secondary}>
            <div className={styles.aside}>
              <p>Language: {post.frontmatter.language}</p>
              <p>Homepage: <a href={post.frontmatter.homepage}>{post.frontmatter.homepage}</a></p>
              <p>Repository: <a href={post.frontmatter.repository}>{post.frontmatter.repository}</a></p>
              <p><a href={post.fields.editPath}><FaEdit /></a><a href={post.fields.editPath}>Edit this page on Github</a></p>
            </div>
          </div>
        </div>
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
        language
      }
      fields {
        editPath
      }
    }
  }
`
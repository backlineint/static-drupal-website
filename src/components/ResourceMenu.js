import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import styles from "./ResourceMenu.module.scss"

export default () => (
  <StaticQuery
    query={graphql`
      query ResourceMenuQuery {
        allMarkdownRemark(
          filter: {
            fields: {type: {eq: "resource"}}
          }
        ) {
          edges {
            node {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <ul className={styles.list}>
          {data.allMarkdownRemark.edges.map(({node}) => (
            <Link
              to={node.fields.slug}
              className={styles.link}
              key={node.fields.slug}
            >
              <li>{node.frontmatter.title}</li>
            </Link>
          ))}
        </ul>
      </>
    )}
  />
)
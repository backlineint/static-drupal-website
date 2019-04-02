import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import styles from "./ResourceMenu.module.css"

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
              class={styles.link}
            >
              <li>{node.frontmatter.title}</li>
            </Link>
          ))}
        </ul>
      </>
    )}
  />
)
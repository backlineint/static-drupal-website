import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Constrain from "./Constrain"

import styles from "./FeaturedProjects.module.scss"

export default () => (
  <StaticQuery
    query={graphql`
      query FeaturedProjectsQuery {
        allMarkdownRemark(
          filter: {
            fields: {type: {eq: "project"}}
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                description
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
      <div className={styles.featuredProjects}>
        <Constrain>
          <h2>Featured Projects</h2>
            {data.allMarkdownRemark.edges.map(({node}) => (
              <Link
                to={node.fields.slug}
              >
                <div className={styles.featuredProject}>
                    <div className={styles.title}>{node.frontmatter.title}</div>
                    {node.frontmatter.description}
                </div>
              </Link>
            ))}
          </Constrain>
      </div>
    )}
  />
)
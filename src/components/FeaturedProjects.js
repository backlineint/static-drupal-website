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
                language
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
          <div className={styles.grid}>
            {data.allMarkdownRemark.edges.map(({node}) => (
              <Link
                to={node.fields.slug}
              >
                <div className={styles.featuredProject}>
                    <div className={styles.language}>{node.frontmatter.language}</div>
                    <div className={styles.title}>{node.frontmatter.title}</div>
                    <div className={styles.description}>{node.frontmatter.description}</div>
                    <p>More info ></p>
                </div>
              </Link>
            ))}
            <Link to="resources/contributing">
              <div className={styles.featuredProject}>
                Add new
              </div>
            </Link>
            <Link to="resources/contributing">
              <div className={styles.featuredProject}>
                View All
              </div>
            </Link>
          </div>
          </Constrain>
      </div>
    )}
  />
)
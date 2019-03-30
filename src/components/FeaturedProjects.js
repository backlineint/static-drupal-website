import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query FeaturedProjectsQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <h2>Featured Projects</h2>
        <ul>
          {data.allMarkdownRemark.edges.map(({node}) => (
            <li>{node.frontmatter.title}</li>
          ))}
        </ul>
      </>
    )}
  />
)
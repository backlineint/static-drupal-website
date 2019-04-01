import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

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
        <h2>Featured Projects</h2>
        <ul>
          {data.allMarkdownRemark.edges.map(({node}) => (
            <Link
              to={node.fields.slug}
            >
              <li>{node.frontmatter.title}</li>
            </Link>
          ))}
        </ul>
      </>
    )}
  />
)
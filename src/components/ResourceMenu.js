import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

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
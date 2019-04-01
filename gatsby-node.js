/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  const fileNode = getNode(node.parent)

  // Create projects at /projects/slug
  if (node.internal.type === `MarkdownRemark`) {
    if (fileNode.sourceInstanceName === 'projects') {
      // It should be possible to put files in the root of the projects directory, or in a subdirectory.
      const slug = createFilePath({ node, getNode, basePath: `${fileNode.relativeDirectory}` })
      createNodeField({
        node,
        name: `slug`,
        value: `/projects${slug}`,
      })
    }
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `
).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/project.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          // See $slug in project template.
          slug: node.fields.slug,
        },
      })
    })
  })
}
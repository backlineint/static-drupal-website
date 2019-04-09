import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Constrain from "./Constrain"
import ProjectCard from "./ProjectCard"

import styles from "./Projects.module.scss"

export default () => (
  <StaticQuery
    query={graphql`
      query FeaturedProjectsQuery {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              featured: {eq: true}
            },
            fields: {
              type: {eq: "project"}
            }
          },
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
      <div className={styles.projects}>
        <Constrain>
          <h2>Featured Projects</h2>
          <div className={styles.grid}>
            {data.allMarkdownRemark.edges.map(({node}) => (
              <ProjectCard 
                key={node.fields.slug}
                link={node.fields.slug}
                language={node.frontmatter.language}
                title={node.frontmatter.title}
                description={node.frontmatter.description}
              />
            ))}
            <ProjectCard 
              link="/projects"
              title="View All"
              description="See all projects listed on the site or add something new"
            />
          </div>
        </Constrain>
      </div>
    )}
  />
)
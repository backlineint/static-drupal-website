import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Constrain from "./Constrain"
import ProjectCard from "./ProjectCard"
import ProjectCardExternal from "./ProjectCardExternal"

import styles from "./Projects.module.scss"

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectsQuery {
        allMarkdownRemark(
          filter: {
            fields: {
              type: {eq: "project"}
            }
          }
          sort: {
            fields: [frontmatter___title]
            order: ASC
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
      <div className={styles.projects}>
        <Constrain>
          <h2>All Projects</h2>
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
            <ProjectCardExternal
              link="https://github.com/backlineint/static-drupal-website/edit/master/src/content/projects/project-template.md.example"
              title="Add A New Project"
              description="Have something that you want to share? Add a new project"
            />
          </div>
        </Constrain>
      </div>
    )}
  />
)
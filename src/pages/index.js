import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedProjects from "../components/FeaturedProjects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Static Drupal</h1>
    <h2>A static site about building static sites with Drupal</h2>
    <p>Some more intro here.</p>
    <FeaturedProjects />
  </Layout>
)

export default IndexPage

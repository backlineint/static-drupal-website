import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedProjects from "../components/FeaturedProjects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>A static site about building static sites with Drupal</h1>
    <h2>Some kind of subheadline that will hopefully look cool...</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <FeaturedProjects />
  </Layout>
)

export default IndexPage

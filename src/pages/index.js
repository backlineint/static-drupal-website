import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedProjects from "../components/FeaturedProjects"
import Hero from "../components/Hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <FeaturedProjects />
  </Layout>
)

export default IndexPage

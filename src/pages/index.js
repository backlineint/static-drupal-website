import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedProjects from "../components/FeaturedProjects"
import Hero from "../components/Hero"
import Constrain from "../components/Constrain"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <FeaturedProjects />
    <Constrain>
      <h2>Why static?</h2>
    </Constrain>
  </Layout>
)

export default IndexPage

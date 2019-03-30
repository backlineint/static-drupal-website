import React from "react"
import { storiesOf } from "@storybook/react"
import FeaturedProjects from "./FeaturedProjects"

storiesOf(`Projects/FeaturedProjects`, module).add(`default`, () => (
  <FeaturedProjects />
))
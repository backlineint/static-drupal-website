/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"

import Constrain from "./Constrain"

import styles from "./Hero.module.scss"

const Hero = () => (
    <div className={styles.hero}>
    <Constrain>
      <h1>A static site about building static sites with Drupal</h1>
      <h2>Some kind of subheadline that will hopefully look cool...</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </Constrain>
    </div>
  )

export default Hero

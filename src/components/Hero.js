/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import GitHubButton from 'react-github-btn'
import { FaBarcode, FaDrupal } from 'react-icons/fa';

import Constrain from "./Constrain"

import styles from "./Hero.module.scss"

const Hero = () => (
    <div className={styles.hero}>
    <Constrain>
      <div className={styles.grid}>
        <div>
          <div className={styles.icons}><FaBarcode /><FaDrupal /></div>
          <GitHubButton href="https://github.com/backlineint/static-drupal-website" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star backlineint/static-drupal-website on GitHub">Star</GitHubButton>
          &nbsp;
          <GitHubButton href="https://github.com/backlineint/static-drupal-website/fork" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork backlineint/static-drupal-website on GitHub">Fork</GitHubButton>
          <p>Some kind of text about contributing.</p>
        </div>
        <div>
          <h1>A static site about building static sites with Drupal</h1>
          <h2>Explore the many ways to take advantage of the speed, security, and scalability of static sites alongside data managed by Drupal.</h2>
          <p>A paragraph here with some links, resources, and an overview of the things that you can do on the site.</p>
        </div>
      </div>
    </Constrain>
    </div>
  )

export default Hero

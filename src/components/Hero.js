import React from "react"
import { Link } from "gatsby"
import GitHubButton from 'react-github-btn'
import { FaBarcode, FaDrupal } from 'react-icons/fa';
import { IconContext } from "react-icons";

import Constrain from "./Constrain"

import styles from "./Hero.module.scss"

const Hero = () => (
    <div className={styles.hero}>
    <Constrain>
      <div className={styles.grid}>
        <div className={styles.aside}>
          <div className={styles.icons}>
            <IconContext.Provider value={{ size: "100%" }}>
              <div>
                <FaBarcode />
              </div>
              <div className={styles.drupal}>
                <FaDrupal />
              </div>
            </IconContext.Provider>
          </div>
          <span className={styles.star}><GitHubButton href="https://github.com/backlineint/static-drupal-website" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star backlineint/static-drupal-website on GitHub">Star</GitHubButton></span>
          <GitHubButton href="https://github.com/backlineint/static-drupal-website/fork" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork backlineint/static-drupal-website on GitHub">Fork</GitHubButton>
          <p className={styles.callout}>Help make this site better - add your own projects, examples, and resources.</p>
        </div>
        <div>
          <h1>A static site about building static sites with Drupal</h1>
          <h2>Explore the many ways to take advantage of the speed, security, and scalability of static sites alongside data managed by Drupal.</h2>
          <p>Learn about static site generator <Link to="/projects">projects</Link> and how they interact with Drupal, read up on <Link to="/resources">common approaches</Link>, and then <Link to="/contributing">share your own experience</Link> with the community.</p>
        </div>
      </div>
    </Constrain>
    </div>
  )

export default Hero

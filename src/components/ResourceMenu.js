import React from "react"
import { Link } from "gatsby"

import styles from "./ResourceMenu.module.scss"

export default () => (

  <>
    <ul className={styles.list}>
      <Link
        to="/projects"
        className={styles.link}
      >
        <li>Projects</li>
      </Link>
      <Link
        to="/resources"
        className={styles.link}
      >
        <li>Resources</li>
      </Link>
      <Link
        to="/contributing"
        className={styles.link}
      >
        <li>Contributing</li>
      </Link>
    </ul>
  </>
)
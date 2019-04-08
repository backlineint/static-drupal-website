import React from "react"
import { Link } from "gatsby"

import styles from "./ProjectCard.module.scss"

const ProjectCard = (props) => (
  <Link
    to={props.link}
    key={props.link}
  >
    <div className={styles.projectCard}>
        <div className={styles.language}>{props.language}</div>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>{props.description}</div>
        <p>More info ></p>
    </div>
  </Link>
);

export default ProjectCard

import React from "react"

import styles from "./ProjectCard.module.scss"

const ProjectCardExternal = (props) => (
  <a
    href={props.link}
  >
    <div className={styles.projectCard}>
        <div className={styles.language}>{props.language}</div>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>{props.description}</div>
    </div>
  </a>
);

export default ProjectCardExternal

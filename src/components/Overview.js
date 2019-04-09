import React from "react"

import Constrain from "../components/Constrain"

import styles from "./Overview.module.scss"

const Overview = (props) => (
  <div className={styles.overview}>
    <Constrain>
      <h2>Why Static?</h2>
      <div>
        <div>
          <h3>Speed (Performance?)</h3>
          <p>Some info.</p>
        </div>
        <div>
          <h3>Security</h3>
          <p>Some info.</p>
        </div>
        <div>
          <h3>Scalability</h3>
          <p>Some info.</p>
        </div>
        <div>
          <h3>DX</h3>
          <p>Some info.</p>
        </div>
        <div>
          <h3>Content Editing Experience</h3>
          <p>Some info.</p>
        </div>
      </div>
    </Constrain>
  </div>
);

export default Overview

import React from "react"
import PropTypes from "prop-types"

import styles from "./Constrain.module.css"

const Constrain = ({children}) => (
  <div className={styles.constrain}>
    {children}
  </div>
);

Constrain.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Constrain

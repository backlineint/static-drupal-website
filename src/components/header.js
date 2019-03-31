import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className={styles.headerWrapper}>
      <h1>
        <Link
          to="/"
          className={styles.headerLink}
        >
          {siteTitle}
        </Link>
      </h1>
      <p>Menu goes here</p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

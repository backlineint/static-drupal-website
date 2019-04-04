import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ResourceMenu from "./ResourceMenu"

import styles from "./header.module.scss"

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
      <ResourceMenu />
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

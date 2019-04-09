import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { slide as Menu } from 'react-burger-menu'

import ResourceMenu from "./ResourceMenu"

import styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header>
    <Menu right>
      <Link
        to="/projects"
        className="menu-item"
      >
        Projects
      </Link>
      <Link
        to="/resources"
        className="menu-item"
      >
        Resources
      </Link>
      <Link
        to="/contributing"
        className="menu-item"
      >
        Contributing
      </Link>
    </Menu>
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

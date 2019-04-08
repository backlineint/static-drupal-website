/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import GithubCorner from 'react-github-corner';

import Header from "./header"
import Constrain from "./Constrain"

import styles from "./layout.module.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className={styles.mainContent}>
          <main>{children}</main>
          <footer className={styles.footer}>
            <Constrain>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a> and
              maintained by <a href="http://brianperryinteractive.com">Brian Perry</a>.
            </Constrain>
          </footer>
          <GithubCorner octoColor="#0678be" bannerColor="whitesmoke" className={styles.fixed} href="https://github.com/backlineint/static-drupal-website" />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

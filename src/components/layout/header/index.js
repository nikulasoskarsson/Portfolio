import PropTypes from "prop-types"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Header = ({ siteTitle }) => {
  return <header>{siteTitle}</header>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

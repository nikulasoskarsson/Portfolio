import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../header"
import "../../layout.css"
import { PageVariants } from "../../../variants"

import { ThemeProvider } from "styled-components"

import { useTheme } from "../../../hooks"
import StyledLayout from "../../styled-components/StyledLayout"

const Layout = ({ children }) => {
  const theme = useTheme()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <StyledLayout variants={PageVariants} initial="initial" animate="animate">
        <Header />

        {children}
      </StyledLayout>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

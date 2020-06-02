import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

import { Provider as ThemeProvider, useDispatch } from "react-redux"
import { setTheme } from "../theme/actions"

import createStore from "../theme/createStore"

const Layout = ({ children }) => {
  const store = createStore()

  const dispatch = useDispatch()

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
    <ThemeProvider store={store}>
      <Header siteTitle={data.site.siteMetadata.title} />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <button onPress={() => dispatch(setTheme("darkTheme"))}>
        change theme
      </button>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

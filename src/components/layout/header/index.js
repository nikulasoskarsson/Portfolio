import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    prismic {
      allNavigations {
        edges {
          node {
            branding
            navigation_links {
              navigation_label
              navigation_link
            }
          }
        }
      }
    }
  }
`

const Header = props => {
  return <StaticQuery query={query} render={data => <div>test</div>} />
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

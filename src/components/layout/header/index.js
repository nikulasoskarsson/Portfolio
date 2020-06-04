import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { StyledNav, StyledNavContainer } from "../../styled-components/navbar"

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
  return (
    <StaticQuery
      query={query}
      render={data => (
        <StyledNav>
          <StyledNavContainer>test</StyledNavContainer>
        </StyledNav>
      )}
    />
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

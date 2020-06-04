import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import {
  StyledNav,
  StyledNavContainer,
  StyledNavBranding,
  StyledNavList,
  StyledNavListItem,
  StyledNavLink,
} from "../../styled-components/navbar"

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
      render={data => {
        console.log(data.prismic.allNavigations.edges[0].node.navigation_links)
        return (
          <StyledNav>
            <StyledNavContainer>
              <StyledNavBranding>
                {data.prismic.allNavigations.edges[0].node.branding}
              </StyledNavBranding>
              <StyledNavList>
                {data.prismic.allNavigations.edges[0].node.navigation_links.map(
                  navigation_link => (
                    <StyledNavListItem>
                      <StyledNavLink to={navigation_link.navigation_link}>
                        {navigation_link.navigation_label}
                      </StyledNavLink>
                    </StyledNavListItem>
                  )
                )}
              </StyledNavList>
            </StyledNavContainer>
          </StyledNav>
        )
      }}
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

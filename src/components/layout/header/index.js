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
import { useDispatch } from "react-redux"
import { setTheme } from "../../../theme/actions"

// const query = graphql`
//   {
//     prismic {
//       allNavigations {
//         edges {
//           node {
//             branding
//             navigation_links {
//               navigation_label
//               navigation_link
//             }
//           }
//         }
//       }
//     }
//   }
// `

const Header = props => {
  const dispatch = useDispatch()
  return (
    <div>
      {" "}
      <h3>Testing</h3>
    </div>

    // {/* <StaticQuery
    //   query={query}
    //   render={data => {
    //     return (
    //       <StyledNav>
    //         <StyledNavContainer>
    //           <StyledNavBranding to="/homepage">
    //             {data.prismic.allNavigations.edges[0].node.branding}
    //           </StyledNavBranding>
    //           <StyledNavList>
    //             {data.prismic.allNavigations.edges[0].node.navigation_links.map(
    //               (navigation_link, index) => (
    //                 <StyledNavListItem key={index}>
    //                   <StyledNavLink to={navigation_link.navigation_link}>
    //                     {navigation_link.navigation_label}
    //                   </StyledNavLink>
    //                 </StyledNavListItem>
    //               )
    //             )}
    //             <button onClick={() => dispatch(setTheme())}>theme</button>
    //           </StyledNavList>
    //         </StyledNavContainer>
    //       </StyledNav> */}
    //     )
    //   }}
    // />
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

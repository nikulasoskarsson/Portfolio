import React from "react"
import Layout from "../../components/layout/layout"
import { graphql, Link } from "gatsby"

import styled from "styled-components"
import { StyledCenteredDiv } from "../../components/styled-components/layout"
import { StyledHeadingPrimary } from "../../components/styled-components/typography"
import { StyledButtonPrimary } from "../../components/styled-components/buttons"

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            call_to_action_title
            button_destination
            button_label
          }
        }
      }
    }
  }
`

const index = ({ data }) => {
  const {
    call_to_action_title,
    button_label,
    button_destination,
  } = data.prismic.allHomepages.edges[0].node
  console.log(call_to_action_title[0].text)

  return (
    <Layout>
      <StyledCenteredDiv>
        <StyledHeadingPrimary>
          {call_to_action_title[0].text}
        </StyledHeadingPrimary>
        <StyledButtonPrimary to={button_destination}>
          {button_label}
        </StyledButtonPrimary>
      </StyledCenteredDiv>
    </Layout>
  )
}

export default index

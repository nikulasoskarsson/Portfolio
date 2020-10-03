import React from "react"
import Layout from "../../components/layout/layout"
import { graphql } from "gatsby"

import { StyledCenteredDiv } from "../../components/styled-components/layout"
import { StyledHeadingPrimary } from "../../components/styled-components/typography"
import { StyledButtonPrimary } from "../../components/styled-components/buttons"

import { ButtonVariants } from "../../variants"

export const query = graphql`
  {
    allPrismicHomepage {
      edges {
        node {
          data {
            button_destination
            button_label
            call_to_action_title {
              text
            }
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
        <div style={{ paddingTop: 40 }}>
          <StyledButtonPrimary
            to={button_destination}
            variants={ButtonVariants}
            whileHover="hover"
          >
            {button_label}
          </StyledButtonPrimary>
        </div>
      </StyledCenteredDiv>
    </Layout>
  )
}

export default index

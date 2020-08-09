import React from "react"
import Layout from "../../components/layout/layout"
import { graphql } from "gatsby"
import Dropdown from "./components/filters/dropdown/dropdown"

export const query = graphql`
  {
    prismic {
      allPortfoliopages {
        edges {
          node {
            body {
              ... on PRISMIC_PortfoliopageBodyPortfolio_section {
                type
                label
                fields {
                  description
                  image
                  github_link {
                    ... on PRISMIC__ExternalLink {
                      url
                    }
                  }
                  site_link {
                    ... on PRISMIC__ExternalLink {
                      url
                    }
                  }
                  stack
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`

const index = ({ data }) => {
  console.log(
    "portoflio data",
    data.prismic.allPortfoliopages.edges[0].node.body[0].fields
  )
  return (
    <Layout>
      <div style={{ padding: 60 }}>
        <Dropdown />
      </div>
    </Layout>
  )
}

export default index

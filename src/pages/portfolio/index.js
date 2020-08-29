import React from "react"
import Layout from "../../components/layout/layout"
import { graphql } from "gatsby"
import PortfolioList from "./portfolio/portfoliolist"

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
  return (
    <Layout>
      <PortfolioList
        data={data.prismic.allPortfoliopages.edges[0].node.body[0].fields}
      />
    </Layout>
  )
}

export default index

import React from "react"
import Layout from "../../components/layout/layout"
import { graphql } from "gatsby"
import PortfolioList from "./portfolio/portfoliolist"

// export const query = graphql`
//   {
//     prismicPortfolio {
//       allPrismicPortfoliopage {
//         edges {
//           node {
//             body {
//               ... on PrismicPortfolioPageBodyPortfolioSection {
//                 type
//                 label
//                 fields {
//                   description
//                   image
//                   github_link {
//                     ... on PRISMIC__ExternalLink {
//                       url
//                     }
//                   }
//                   site_link {
//                     ... on PRISMIC__ExternalLink {
//                       url
//                     }
//                   }
//                   stack
//                   title
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

const index = () => {
  return (
    <Layout>
      {/* <PortfolioList
        data={data.prismic.allPortfoliopages.edges[0].node.body[0].fields}
      /> */}
    </Layout>
  )
}

export default index

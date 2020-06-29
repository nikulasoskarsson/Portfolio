import React from "react"
import Layout from "../../components/layout/layout"
import { graphql } from "gatsby"

export const query = graphql`
  {
    prismic {
      allContact_pages {
        edges {
          node {
            form_title
            form_fields {
              form_label
              form_placeholder
              form_type
            }
          }
        }
      }
    }
  }
`

const index = ({ data }) => {
  console.log("contact data", data)
  return <Layout>This will be the contact page</Layout>
}

export default index

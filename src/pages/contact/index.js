import React from "react"
import Layout from "../../components/layout/layout"
import { graphql } from "gatsby"
import FormField from "./components/formField"

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
  const {
    form_title,
    form_fields,
  } = data.prismic.allContact_pages.edges[0].node
  return (
    <Layout>
      <h1>{form_title[0].text}</h1>
      {form_fields.map(field => (
        <FormField fieldInformation={field} />
      ))}
    </Layout>
  )
}

export default index

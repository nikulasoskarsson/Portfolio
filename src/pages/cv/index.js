import React from "react"
import Layout from "../../components/layout/layout"
import { graphql } from "gatsby"
import CvSection from "./components/cv/cvsection"

export const query = graphql`
  {
    prismic {
      allCv_pages {
        edges {
          node {
            work_experience {
              company_name
              date
              job_description
              job_title
            }
          }
        }
      }
    }
  }
`
const index = ({ data }) => {
  const { work_experience } = data.prismic.allCv_pages.edges[0].node
  console.log("data from cv", work_experience)
  return (
    <Layout>
      <CvSection title="Work experience" list={work_experience} />
    </Layout>
  )
}

export default index

import React from "react"
import Layout from "../../components/layout/layout"
import { graphql } from "gatsby"
import CvSection from "./components/cv/cvsection"

// export const query = graphql`
//   {
//     prismic {
//       allCv_pages {
//         edges {
//           node {
//             work_experience {
//               company_name
//               date
//               job_description
//               job_title
//             }
//             education_title
//             work_experience_title
//             education {
//               education_date
//               program_description
//               program_name
//               school_name
//             }
//           }
//         }
//       }
//     }
//   }
// `
const index = () => {
  // const { work_experience, education } = data.prismic.allCv_pages.edges[0].node

  return (
    <Layout>
      {/* <CvSection title="Work experience" list={work_experience} />
      <CvSection title="Education" list={education} /> */}
    </Layout>
  )
}

export default index

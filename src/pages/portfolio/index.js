import React from "react"
import Layout from "../../components/layout/layout"
import Dropdown from "./components/filters/dropdown/dropdown"

const index = () => {
  return (
    <Layout>
      <div style={{ padding: 60 }}>
        <Dropdown />
      </div>
    </Layout>
  )
}

export default index

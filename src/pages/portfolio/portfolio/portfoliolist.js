import React from "react"
import PortfolioItem from "./portfolioitem"

const PortfolioList = ({ data }) => {
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      {data.map(item => (
        <PortfolioItem item={item} />
      ))}
    </div>
  )
}

export default PortfolioList

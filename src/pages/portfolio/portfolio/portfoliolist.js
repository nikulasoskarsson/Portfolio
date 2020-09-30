import React from "react"
import PortfolioItem from "./portfolioitem"
import { StyledGridContainer } from "../components/grid"

const PortfolioList = ({ data }) => {
  return (
    <StyledGridContainer>
      {data.map(item => (
        <PortfolioItem item={item} />
      ))}
    </StyledGridContainer>
  )
}

export default PortfolioList

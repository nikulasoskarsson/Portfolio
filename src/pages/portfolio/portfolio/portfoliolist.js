import React from "react"
import PortfolioItem from "./portfolioitem"
import { StyledGridContainer } from "../../../components/styled-components/grid/"
import { motion } from "framer-motion"

const PortfolioList = ({ data }) => {
  return (
    <StyledGridContainer>
      {data.map((item, index) => {
        return (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              translateY: index % 2 === 0 ? "8%" : "-8%",
            }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <PortfolioItem item={item} />
          </motion.div>
        )
      })}
    </StyledGridContainer>
  )
}

export default PortfolioList

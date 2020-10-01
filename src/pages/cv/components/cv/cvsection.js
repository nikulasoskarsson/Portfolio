import React from "react"
import { StyledUnderlineHeading } from "../../../../components/styled-components/typography"
import { StyledCvContainer } from "../../../../components/styled-components/layout"
import CvItem from "./cvitem"

const CvSection = ({ title, list }) => {
  return (
    <div style={{ margin: 80 }}>
      <StyledUnderlineHeading>{title}</StyledUnderlineHeading>
      <StyledCvContainer>
        {list.map((item, index) => (
          <CvItem key={index} item={item} />
        ))}
      </StyledCvContainer>
    </div>
  )
}

export default CvSection

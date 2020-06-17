import React from "react"
import {
  StyledLightText,
  StyledMediumText,
} from "../../../../components/styled-components/typography"
import {
  StyledCvItem,
  StyledSmallCircle,
} from "../../../../components/styled-components/layout"

const CvItem = ({ item }) => {
  console.log("item", item)

  return (
    <StyledCvItem>
      <StyledSmallCircle />
      <div>
        <StyledMediumText>
          {item.company_name || item.school_name}
        </StyledMediumText>
        <StyledLightText>{item.date || item.education_date}</StyledLightText>
      </div>
      <div>
        <StyledMediumText>
          {item.job_title || item.program_name}
        </StyledMediumText>
        <StyledLightText>
          {item.job_description || item.program_description}
        </StyledLightText>
      </div>
    </StyledCvItem>
  )
}

export default CvItem

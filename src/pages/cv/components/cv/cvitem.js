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
      <div style={{ flex: 0.6 }}>
        <StyledMediumText>
          {item.company_name || item.school_name}
        </StyledMediumText>
        <StyledLightText>{item.date || item.education_date}</StyledLightText>
      </div>
      <div style={{ flex: 1, alignSelf: "start" }}>
        <StyledMediumText>
          {item.job_title || item.program_name}
        </StyledMediumText>
        <StyledLightText>
          {item.job_description || item.program_description}lorem lorem lorem
          lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Suscipit culpa quas dicta error iusto, corporis facere sequi
          accusantium neque illo odit beatae vero, earum veniam aperiam, cum
          orem lorem lorem Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Suscipit culpa quas dicta error iusto, corporis facere sequi
          accusantium neque illo odit beatae vero, earum veniam aperiam, cum
          orem lorem lorem Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Suscipit culpa quas dicta error iusto, corporis facere sequi
          accusantium neque illo odit beatae vero, earum veniam aperiam, cum
          orem lorem lorem Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Suscipit culpa quas dicta error iusto, corporis facere sequi
          accusantium neque illo odit beatae vero, earum veniam aperiam, cum
          perspiciatis id? Ex.s
        </StyledLightText>
      </div>
    </StyledCvItem>
  )
}

export default CvItem

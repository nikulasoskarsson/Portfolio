import React from "react"
import { StyledUnderlineHeading } from "../../../../components/styled-components/typography"
import CvItem from "./cvitem"

const CvSection = ({ title, list }) => {
  return (
    <div style={{ margin: 80 }}>
      <StyledUnderlineHeading>{title}</StyledUnderlineHeading>
      {list.map(item => (
        <CvItem item={item} />
      ))}
    </div>
  )
}

export default CvSection

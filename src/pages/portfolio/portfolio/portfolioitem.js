import React from "react"
import { StyledTag } from "../components/styled"
import {
  StyledButtonPrimaryMd,
  StyledButtonSecondaryMd,
} from "../../../components/styled-components/buttons"
import {
  StyledMediumText,
  StyledLightText,
} from "../../../components/styled-components/typography/"

const PortfolioItem = ({ item }) => {
  console.log(item)
  return (
    <div style={{ width: "30%" }}>
      <StyledMediumText>{item.title[0].text}</StyledMediumText>
      <StyledLightText>Design & programming</StyledLightText>
      <div style={{ position: "relative", borderRadius: "5px" }}>
        <div
          style={{
            backgroundColor: "#444444",
            opacity: 0.4,
            zIndex: 5,
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <img
          style={{ height: "100%", width: "100%", zIndex: 4 }}
          src={item.image.url}
          alt={item.image.alt}
        />
      </div>
      <StyledLightText>{item.description}</StyledLightText>
      <div>
        {item.stack.map(stackItem => (
          <StyledTag>{stackItem.text}</StyledTag>
        ))}
      </div>
      <div>
        <StyledButtonSecondaryMd href={item.site_link.url} className="">
          Go to site
        </StyledButtonSecondaryMd>
        <StyledButtonPrimaryMd href={item.github_link.url} className="">
          Github
        </StyledButtonPrimaryMd>
      </div>
    </div>
  )
}

export default PortfolioItem

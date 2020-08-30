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
    <div>
      <div
        style={{
          position: "relative",
          borderRadius: "5px",
        }}
      >
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
          style={{
            height: "100%",
            width: "100%",
            zIndex: 4,
          }}
          src={item.image.url}
          alt={item.image.alt}
        />
      </div>
      <StyledMediumText>{item.title[0].text}</StyledMediumText>
      <StyledLightText style={{ marginBottom: "0.5rem" }}>
        Design & programming
      </StyledLightText>
      <StyledLightText>{item.description}</StyledLightText>
      <div style={{ marginTop: "3rem", marginBottom: "2.5rem" }}>
        {item.stack.map(stackItem => (
          <StyledTag>{stackItem.text}</StyledTag>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        <StyledButtonSecondaryMd
          style={{ marginRight: "2rem" }}
          href={item.site_link.url}
        >
          Go to site
        </StyledButtonSecondaryMd>
        <StyledButtonPrimaryMd href={item.github_link.url}>
          Github
        </StyledButtonPrimaryMd>
      </div>
    </div>
  )
}

export default PortfolioItem

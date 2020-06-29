import styled from "styled-components"

export default styled.h1`
  color: ${({ theme }) => theme.textPrimary || "#444"};
  font-size: 16;
  font-weight: medium;
`

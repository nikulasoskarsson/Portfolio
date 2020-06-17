import styled from "styled-components"

export default styled.h1`
  font-size: 2.4rem;
  font-weight: medium;
  color: ${({ theme }) => theme.textPrimary || "#eee"};
`

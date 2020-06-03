import styled from "styled-components"

export default styled.h1`
  font-size: 100px;
  color: ${({ theme }) => theme.textPrimary || "#eee"};
`

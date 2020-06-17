import styled from "styled-components"

export default styled.h1`
  color: ${({ theme }) => theme.textPrimary || "#444"};
  font-size: 3.6rem;
  text-transform: uppercase;
  border-bottom: ${({ theme }) => `${theme.textPrimary} 4px solid`};
  display: inline;
`

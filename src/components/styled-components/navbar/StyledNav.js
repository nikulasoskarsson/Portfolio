import styled from "styled-components"

export default styled.nav`
  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  border-bottom: 1px solid;

  border-color: ${({ theme }) => `${theme.textPrimary}40`};
`

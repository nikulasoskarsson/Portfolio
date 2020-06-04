import styled from "styled-components"

export default styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.primary || "#f9f9f9"};
`

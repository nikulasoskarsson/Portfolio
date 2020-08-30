import styled from "styled-components"

export default styled.span`
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.secondary || "#444"};
  border-radius: 25px;
  margin-bottom: 1.5rem;
  margin-right: 0.5rem;

  color: ${({ theme }) => theme.textPrimary || "#444"};
`

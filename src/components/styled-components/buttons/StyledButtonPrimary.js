import styled from "styled-components"
import { Link } from "gatsby"

export default styled(Link)`
  font-size: 1.6rem;
  font-weight: medium;
  padding: 2rem 6rem;
  color: ${({ theme }) => theme.textPrimary};
  background-color: ${({ theme }) => theme.secondary};
  border: 1px solid;
  border-color: ${({ theme }) => theme.textPrimary};
`

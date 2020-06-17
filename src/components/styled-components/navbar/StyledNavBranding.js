import styled from "styled-components"
import { Link } from "gatsby"

export default styled(Link)`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.textPrimary || "#f9f9f9"};
  font-weight: medium;
`

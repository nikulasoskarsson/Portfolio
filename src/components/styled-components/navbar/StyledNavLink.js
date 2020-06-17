import styled from "styled-components"
import { Link } from "gatsby"

export default styled(Link)`
  font-size: 1.6rem;
  font-size: light;
  color: ${({ theme }) => theme.textPrimary || "#444"};
`

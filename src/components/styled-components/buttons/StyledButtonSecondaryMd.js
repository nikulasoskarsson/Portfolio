import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

export default styled(motion.a)`
  font-size: 1.2rem;
  font-weight: medium;
  padding: 1.5rem 4.5rem;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.textPrimary};
  border: 1px solid;
  border-color: ${({ theme }) => theme.secondary};
  box-shadow: ${({ theme }) => `0 0.5rem 2rem rgba(0, 0, 0, 0.25)`};
  cursor: pointer;
  display: inline-block;
  margin: 2rem;
`

import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

export default styled(motion.a)`
  font-size: 1.2rem;
  font-weight: medium;

  color: ${({ theme }) => theme.textPrimary};
  background-color: ${({ theme }) => theme.secondary};
  border: 1px solid;
  border-color: ${({ theme }) => theme.textPrimary};
  box-shadow: ${({ theme }) => `0 0.5rem 2rem rgba(0, 0, 0, 0.25)`};
  cursor: pointer;
  display: grid;

  height: 4rem;
  width: 10.3rem;

  justify-content: center;
  align-items: center;
`

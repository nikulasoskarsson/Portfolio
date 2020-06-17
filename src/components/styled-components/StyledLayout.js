import styled from "styled-components"
import { motion } from "framer-motion"

export default styled(motion.div)`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.primary || "#f9f9f9"};
`

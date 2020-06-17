import styled from "styled-components"

export default styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.textPrimary};
  position: absolute;
  left: -5px;
`

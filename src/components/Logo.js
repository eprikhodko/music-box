import { Link } from "react-router-dom"
import styled from "styled-components"

import * as ROUTES from "../constants/routes"

const StyledLogo = styled.h1`
  color: #000;
  margin: 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

function Logo() {
  return (
    <StyledLink to={ROUTES.HOME}>
      <StyledLogo>Music box</StyledLogo>
    </StyledLink>
  )
}

export default Logo

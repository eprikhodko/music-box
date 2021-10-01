import { Link } from "react-router-dom"
import styled from "styled-components"

import * as ROUTES from "../constants/routes"

const StyledLogo = styled.h1`
  color: #000;
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const SpanLight = styled.span`
  font-weight: 300;
`

function Logo() {
  return (
    <StyledLink to={ROUTES.HOME}>
      <StyledLogo>
        <SpanLight>Music</SpanLight> box
      </StyledLogo>
    </StyledLink>
  )
}

export default Logo

import { Link } from "react-router-dom"
import styled from "styled-components"

import * as ROUTES from "../../constants/routes"
import { ReactComponent as SiteLogo } from "../../icons/site-logo.svg"

const StyledLogo = styled.div`
  display: flex;
  margin: 0;
  margin-right: 2.5em;
  svg {
    height: 64px;
    width: 64px;
    /* margin-right: 0.3em; */
    /* color: palevioletred; */
  }
`

function Logo() {
  return (
    <Link to={ROUTES.HOME}>
      <StyledLogo>
        <SiteLogo />
      </StyledLogo>
    </Link>
  )
}

export default Logo

import PropTypes from "prop-types"

import { Link } from "react-router-dom"
import styled from "styled-components"

import * as ROUTES from "../../constants/routes"
import { ReactComponent as SiteLogo } from "../../icons/site-logo.svg"

const StyledLogo = styled.div`
  display: flex;
  margin: 0;
  margin-right: 2.5em;
  svg {
    width: 4em;
    height: 4em;
  }
`

function Logo({ toggleHamburgerMenuOpenOrClose }) {
  return (
    <Link to={ROUTES.HOME} onClick={toggleHamburgerMenuOpenOrClose}>
      <StyledLogo>
        <SiteLogo />
      </StyledLogo>
    </Link>
  )
}

export default Logo

Logo.propTypes = {
  toggleHamburgerMenuOpenOrClose: PropTypes.func,
}

Logo.defaultProps = {
  toggleHamburgerMenuOpenOrClose: () => {},
}

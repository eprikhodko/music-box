import PropTypes from "prop-types"
import styled from "styled-components"

import { Content } from "../shared/Containers"
import Logo from "./Logo"
import { ReactComponent as Hamburger } from "../../icons/burger.svg"
import SearchBox from "../shared/SearchBox"
import Nav from "./Nav"
import useMatchMedia from "../../hooks/useMatchMedia"

const StyledHeader = styled.header`
  padding: 0.5em 0 0.5em;
  border-bottom: 3px solid #c2c2c2;
`

const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
`

function Header({ noSearchBox }) {
  const isDesktopResolution = useMatchMedia("(min-width: 400px)", false)
  console.log(isDesktopResolution)

  const showSearchBox = !noSearchBox

  return (
    <StyledHeader>
      <Content justifyContent="space-between" alignItems="center">
        <ContainerFlex>
          <Logo />
          {/* hide search box if Header receieved 'noSearchBox' prop or if it is a mobile layout */}
          {isDesktopResolution && showSearchBox && <SearchBox />}
        </ContainerFlex>
        {isDesktopResolution ? (
          <Nav />
        ) : (
          <div>
            <Hamburger />
          </div>
        )}
      </Content>
    </StyledHeader>
  )
}

export default Header

Header.propTypes = {
  noSearchBox: PropTypes.bool,
}

Header.defaultProps = {
  noSearchBox: false,
}

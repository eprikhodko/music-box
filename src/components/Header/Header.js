import PropTypes from "prop-types"
import styled from "styled-components"

import { useState } from "react"

import { Content } from "../shared/Containers"
import Logo from "./Logo"

import SearchBox from "../shared/SearchBox"
import Navigation from "./Navigation"
import MobileNavigation from "./MobileNavigation"
import useMatchMedia from "../../hooks/useMatchMedia"

import {
  Container,
  HamburgerMenu,
  ButtonHamburger,
  ButtonCloseHamburger,
} from "./MobileMenu"

const StyledHeader = styled.header`
  padding: 0.5em 0 0.5em;
  border-bottom: 3px solid #c2c2c2;
`

const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
`

function Header({ noSearchBox }) {
  // set isDesktopResolution initial value to true, so hamburger menu icon won't flicker at the top right corner of the screen

  const { isDesktopResolution, isLoading } = useMatchMedia(
    "(min-width: 400px)",
    true
  )

  const showSearchBox = !noSearchBox

  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false)

  const toggleHamburgerMenuOpenOrClose = () => {
    setShowHamburgerMenu((prevState) => !prevState)

    // disable scroll if hamburger menu is open
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "scroll"
    }
  }

  /* eslint-disable no-nested-ternary */
  return (
    <StyledHeader>
      <Content justifyContent="space-between" alignItems="center">
        <ContainerFlex showHamburgerMenu={showHamburgerMenu}>
          <Logo />
          {/* hide search box if Header receieved 'noSearchBox' prop or if it is a mobile layout */}
          {!isLoading && isDesktopResolution && showSearchBox && <SearchBox />}
        </ContainerFlex>
        {isLoading ? (
          <div>Loading</div>
        ) : isDesktopResolution ? (
          <Navigation />
        ) : (
          <ButtonHamburger
            toggleHamburgerMenuOpenOrClose={toggleHamburgerMenuOpenOrClose}
          />
        )}

        <HamburgerMenu showHamburgerMenu={showHamburgerMenu}>
          <Container>
            <ButtonCloseHamburger
              toggleHamburgerMenuOpenOrClose={toggleHamburgerMenuOpenOrClose}
            />
            <MobileNavigation
              toggleHamburgerMenuOpenOrClose={toggleHamburgerMenuOpenOrClose}
            />
            <Logo />
          </Container>
        </HamburgerMenu>
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

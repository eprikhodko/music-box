import PropTypes from "prop-types"
import styled from "styled-components"

import { useState } from "react"

// import { Content } from "../shared/Containers"
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
// import MainGridSharedStyle from "../../pages/sharedStyles"
import { MainGrid } from "../shared/Containers"

const StyledHeader = styled.header`
  padding: 0.5em 0 0.5em;
  border-bottom: 3px solid #c2c2c2;
`

const Content = styled.div`
  grid-column: 2 / -2;

  display: flex;
  justify-content: space-between;
`

const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
`

function Header({ noSearchBox }) {
  const isTabletOrMobile = useMatchMedia("(min-width: 750px)", true)
  const isDesktopResolution = useMatchMedia("(min-width: 1024px)", true)

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

  return (
    <>
      <StyledHeader>
        <MainGrid>
          <Content>
            <ContainerFlex showHamburgerMenu={showHamburgerMenu}>
              <Logo />
              {/* hide search box if Header receieved 'noSearchBox' prop or if it is a mobile layout */}
              {isDesktopResolution && showSearchBox && <SearchBox />}
            </ContainerFlex>

            {isTabletOrMobile ? (
              <Navigation />
            ) : (
              <ButtonHamburger
                toggleHamburgerMenuOpenOrClose={toggleHamburgerMenuOpenOrClose}
              />
            )}

            <HamburgerMenu showHamburgerMenu={showHamburgerMenu}>
              <Container>
                <ButtonCloseHamburger
                  toggleHamburgerMenuOpenOrClose={
                    toggleHamburgerMenuOpenOrClose
                  }
                />
                <MobileNavigation
                  toggleHamburgerMenuOpenOrClose={
                    toggleHamburgerMenuOpenOrClose
                  }
                />
                <Logo />
              </Container>
            </HamburgerMenu>
          </Content>
        </MainGrid>
      </StyledHeader>
    </>
  )
}

export default Header

Header.propTypes = {
  noSearchBox: PropTypes.bool,
}

Header.defaultProps = {
  noSearchBox: false,
}

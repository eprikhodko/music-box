import PropTypes from "prop-types"
import styled from "styled-components"

import { useState } from "react"

import { Content } from "../shared/Containers"
import Logo from "./Logo"
import { ReactComponent as IconHamburger } from "../../icons/burger.svg"
import { ReactComponent as IconCloseHamburger } from "../../icons/burger-close.svg"

import SearchBox from "../shared/SearchBox"
import Navigation from "./Navigation"
import useMatchMedia from "../../hooks/useMatchMedia"
import MobileNavigation from "./MobileNavigation"

const StyledHeader = styled.header`
  padding: 0.5em 0 0.5em;
  border-bottom: 3px solid #c2c2c2;
`

const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
`

const HamburgerMenu = styled.div`
  background-color: #333;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  /* default value for 'right' is -100% */
  right: ${({ showHamburgerMenu }) => (showHamburgerMenu && "0;") || "-100%;"};
  z-index: 1;

  transition: 500ms;

  display: flex;
  flex-direction: column;

  /* border: 1px solid white; */
`

const Container = styled.div`
  width: 90%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  /* border: 1px dashed white; */
`

const ButtonHamburger = styled.button`
  background: transparent;
  border: 0;
`

const ButtonCloseHamburger = styled(ButtonHamburger)`
  display: flex;
  align-self: flex-end;
  margin: 1em 0;
`

function Header({ noSearchBox }) {
  const isDesktopResolution = useMatchMedia("(min-width: 400px)", false)

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
    <StyledHeader>
      <Content justifyContent="space-between" alignItems="center">
        <ContainerFlex showHamburgerMenu={showHamburgerMenu}>
          <Logo />
          {/* hide search box if Header receieved 'noSearchBox' prop or if it is a mobile layout */}
          {isDesktopResolution && showSearchBox && <SearchBox />}
        </ContainerFlex>
        {isDesktopResolution ? (
          <Navigation />
        ) : (
          <ButtonHamburger
            type="button"
            onClick={toggleHamburgerMenuOpenOrClose}
          >
            <IconHamburger />
          </ButtonHamburger>
        )}

        <HamburgerMenu showHamburgerMenu={showHamburgerMenu}>
          <Container>
            <ButtonCloseHamburger
              type="button"
              onClick={toggleHamburgerMenuOpenOrClose}
            >
              <IconCloseHamburger />
            </ButtonCloseHamburger>

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

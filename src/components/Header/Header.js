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

const StyledHeader = styled.header`
  padding: 0.5em 0 0.5em;

  /* grid-column: 2/3; */
  /* grid-area: header; */

  border-bottom: 3px solid #c2c2c2;

  /* border: 1px solid magenta; */

  display: grid;
  grid-template-columns: minmax(1em, 1fr) minmax(0, 500px) minmax(1em, 1fr);

  /* > * {
    grid-column: 2 / -2;
  } */

  @media (min-width: 600px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1160px) minmax(0, 1fr);

    /* & > * {
      grid-column: 2 / -2;
    } */
  }
`

const Content = styled.div`
  grid-column: 2 / -2;

  display: flex;
  justify-content: space-between;
`

// const BorderBottom = styled.div`
//   border-bottom: 3px solid #c2c2c2;

//   /* grid-column: 1/-1; */
//   /* grid-area: bottom-line; */
// `

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
        {/* <Content justifyContent="space-between" alignItems="center"> */}
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
                toggleHamburgerMenuOpenOrClose={toggleHamburgerMenuOpenOrClose}
              />
              <MobileNavigation
                toggleHamburgerMenuOpenOrClose={toggleHamburgerMenuOpenOrClose}
              />
              <Logo />
            </Container>
          </HamburgerMenu>
          {/* </Content> */}
        </Content>
      </StyledHeader>
      {/* <BorderBottom /> */}
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

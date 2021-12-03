import PropTypes from "prop-types"
import styled from "styled-components"

import { useState } from "react"

import { Link } from "react-router-dom"
import * as ROUTES from "../../constants/routes"

import { Content } from "../shared/Containers"
import Logo from "./Logo"
import { ReactComponent as IconHamburger } from "../../icons/burger.svg"
import { ReactComponent as IconCloseHamburger } from "../../icons/burger-close.svg"

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

const HamburgerMenu = styled.div`
  background-color: #333;
  width: 200px;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: -100%;

  right: ${({ showHamburgerMenu }) => showHamburgerMenu && "0;"};
  transition: 500ms;

  z-index: 1;

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

const HamburgerNavigation = styled.nav``

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  margin: 0;
  margin-bottom: 5em;
  padding: 0;

  /* border: 1px solid wheat; */
`

const NavLink = styled(Link)`
  color: #fff;
  font-size: 3rem;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid #000;
  }
  &:focus {
    border-bottom: 2px solid #000;
    outline: 3px solid transparent;
  }
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

  const handleHamburgerMenuOpenOrClose = () => {
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
          <Nav />
        ) : (
          <ButtonHamburger
            type="button"
            onClick={handleHamburgerMenuOpenOrClose}
          >
            <IconHamburger />
          </ButtonHamburger>
        )}

        <HamburgerMenu showHamburgerMenu={showHamburgerMenu}>
          <Container>
            <ButtonCloseHamburger
              type="button"
              onClick={handleHamburgerMenuOpenOrClose}
            >
              <IconCloseHamburger />
            </ButtonCloseHamburger>
            <HamburgerNavigation>
              <Ul aria-label="Header navigation" role="navigation">
                <li>
                  <NavLink to={ROUTES.HOME}>Home</NavLink>
                </li>

                <li>
                  <NavLink to={ROUTES.CATALOG}>Catalog</NavLink>
                </li>

                <li>
                  <NavLink to={ROUTES.SEARCH}>Search</NavLink>
                </li>

                <li>
                  <NavLink to={ROUTES.LOGIN}>Log in</NavLink>
                </li>

                <li>
                  <NavLink to={ROUTES.SIGNUP}>Sign up</NavLink>
                </li>
              </Ul>
            </HamburgerNavigation>
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

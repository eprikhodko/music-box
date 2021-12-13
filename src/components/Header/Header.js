import PropTypes from "prop-types"
import styled from "styled-components"

import { useState } from "react"
import { useHistory } from "react-router-dom"

// import { Content } from "../shared/Containers"
import Logo from "./Logo"

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

import { ReactComponent as SearchIcon } from "../../icons/icon-search.svg"
import { ReactComponent as ArrowIcon } from "../../icons/search-arrow-icon.svg"
import {
  ButtonArrowMobile,
  SearchForm,
  TextInputMobile,
  ContainerSearchIconMobile,
} from "../shared/SearchBoxModules"

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

  const [searchQuery, setSearchQuery] = useState("")

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const history = useHistory()

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    console.log("search submitted")
    event.stopPropagation()

    // clean up search query
    const cleanedSearchQuery = searchQuery
      // make search query lowercase
      .toLowerCase()
      // remove white spaces from the start and from the end of a string
      .trim()
      // replace multiple spaces with a single space
      .replace(/\s\s+/g, " ")

    history.push(`/search/${cleanedSearchQuery}`)
    // reset input in search box
    setSearchQuery("")
  }

  return (
    <>
      <StyledHeader>
        <MainGrid>
          <Content>
            <ContainerFlex showHamburgerMenu={showHamburgerMenu}>
              <Logo />
              {/* hide search box if Header receieved 'noSearchBox' prop or if it is a mobile layout */}
              {isDesktopResolution && showSearchBox && (
                <SearchForm onSubmit={handleSearchSubmit}>
                  <ContainerSearchIconMobile>
                    <SearchIcon onClick={handleSearchSubmit} />
                  </ContainerSearchIconMobile>
                  <TextInputMobile
                    placeholder="Search music"
                    value={searchQuery}
                    onChange={handleChange}
                  />
                  <ButtonArrowMobile
                    type="submit"
                    isEmpty={searchQuery}
                    onClick={handleSearchSubmit}
                  >
                    <ArrowIcon />
                  </ButtonArrowMobile>
                </SearchForm>
              )}
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

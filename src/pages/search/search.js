import PropTypes from "prop-types"

import { Switch, Route, useHistory } from "react-router-dom"
import { useState } from "react"

import Header from "../../components/Header/Header"
import Footer from "../../components/Footer"

import { ReactComponent as SearchIcon } from "../../icons/icon-search.svg"
import { ReactComponent as ArrowIcon } from "../../icons/search-arrow-icon.svg"
import {
  ButtonArrowMobile,
  SearchFormMobile,
  TextInputMobile,
  ContainerSearchIconMobile,
} from "../../components/shared/SearchBoxModules"

import { Container, MainGrid } from "../../components/shared/Containers"
import GenresGrid from "../../components/shared/grids/GenresGrid"
import SearchResults from "./search-results"
import useMatchMedia from "../../hooks/useMatchMedia"

function Search({ componentsCount, setComponentsCount }) {
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

  const isScreenBigEnough = useMatchMedia("(min-width: 400px)", true)

  return (
    <>
      <Header noSearchBox />
      <main>
        <MainGrid>
          <Container>
            <SearchFormMobile onSubmit={handleSearchSubmit}>
              <ContainerSearchIconMobile>
                <SearchIcon onClick={handleSearchSubmit} />
              </ContainerSearchIconMobile>
              <TextInputMobile
                // placeholder="Search artists, albums and more..."
                placeholder={
                  isScreenBigEnough
                    ? "Search artists, albums and more"
                    : "Search music..."
                }
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
            </SearchFormMobile>
          </Container>
        </MainGrid>
        <Switch>
          <Route exact path="/search">
            <MainGrid>
              <Container>
                <GenresGrid />
              </Container>
            </MainGrid>
          </Route>

          <Route path="/search/genres/:searchQuery">
            {/* <MainGrid>
              <Container> */}
            <SearchResults
              componentsCount={componentsCount}
              setComponentsCount={setComponentsCount}
            />
            {/* </Container>
            </MainGrid> */}
          </Route>

          <Route path="/search/:searchQuery">
            <SearchResults
              componentsCount={componentsCount}
              setComponentsCount={setComponentsCount}
            />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  )
}

export default Search

Search.propTypes = {
  componentsCount: PropTypes.number,
  setComponentsCount: PropTypes.func.isRequired,
}

Search.defaultProps = {
  componentsCount: "",
}

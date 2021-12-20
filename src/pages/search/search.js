import PropTypes from "prop-types"

import { Switch, Route } from "react-router-dom"

import Header from "../../components/Header/Header"
import Footer from "../../components/Footer"

import { Container, MainGrid } from "../../components/shared/Containers"
import GenresGrid from "../../components/shared/grids/GenresGrid"
import SearchResults from "./SearchResults"
import SearchBox from "./SearchBox"

function Search({ componentsCount, setComponentsCount }) {
  return (
    <>
      <Header noSearchBox />
      <main>
        <MainGrid>
          <Container>
            <SearchBox />
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
            <SearchResults
              componentsCount={componentsCount}
              setComponentsCount={setComponentsCount}
            />
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

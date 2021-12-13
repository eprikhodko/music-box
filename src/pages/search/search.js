import PropTypes from "prop-types"

import { Switch, Route } from "react-router-dom"

import Header from "../../components/Header/Header"
import Footer from "../../components/Footer"
import SearchBox from "../../components/shared/SearchBox"
import { Container, MainGrid } from "../../components/shared/Containers"
import GenresGrid from "../../components/shared/grids/GenresGrid"
import SearchResults from "./search-results"

function Search({ componentsCount, setComponentsCount }) {
  return (
    <>
      <Header noSearchBox />
      <main>
        <MainGrid>
          <Container>
            <SearchBox
              placeholder="Search genre, album, artist"
              marginTop="3.75em"
              marginBottom="3.75em"
              marginRight="0"
            />
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

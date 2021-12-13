import PropTypes from "prop-types"

import { Switch, Route } from "react-router-dom"

import Header from "../../components/Header/Header"
import Footer from "../../components/Footer"
import SearchBox from "../../components/shared/SearchBox"
import { Content } from "../../components/shared/Containers"
import GenresGrid from "../../components/shared/grids/GenresGrid"
import SearchResults from "./search-results"

function Search({ componentsCount, setComponentsCount }) {
  return (
    <>
      <Header noSearchBox />
      <main>
        <Content flexDirection="column" alignItems="center" $marginTop="10em">
          <SearchBox
            placeholder="Search genre, album, artist"
            big
            marginBottom="4em"
          />
          <Switch>
            <Route exact path="/search">
              <GenresGrid />
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
        </Content>
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

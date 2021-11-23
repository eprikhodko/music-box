import { Switch, Route } from "react-router-dom"

import Header from "../../components/Header/index"
import Footer from "../../components/Footer"
import SearchBox from "../../components/shared/SearchBox"
import {
  ContainerMain,
  Content,
  PageBody,
} from "../../components/shared/Containers"
import GenresGrid from "../../components/shared/grids/GenresGrid"
import SearchResults from "./search-results"

function Search() {
  return (
    <ContainerMain>
      <Header noSearchBox />
      <PageBody>
        <Content flexDirection="column" alignItems="center" $marginTop="10em">
          <SearchBox
            placeholder="Search album, year, artist"
            big
            marginBottom="7em"
          />
          <Switch>
            <Route exact path="/search">
              <GenresGrid />
            </Route>

            <Route path="/search/:searchQuery">
              <SearchResults />
            </Route>
          </Switch>
        </Content>
      </PageBody>
      <Footer />
    </ContainerMain>
  )
}

export default Search

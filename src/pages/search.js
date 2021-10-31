import Header from "../components/Header/index"
import Footer from "../components/Footer"
import SearchBox from "../components/shared/SearchBox"
import {
  ContainerMain,
  Content,
  PageBody,
} from "../components/shared/Containers"
import GenresGrid from "../components/shared/grids/GenresGrid"

function Search() {
  return (
    <ContainerMain>
      <Header noSearchBox />
      <PageBody>
        <Content flexDirection="column" alignItems="center" $marginTop="10em">
          <SearchBox placeholder="Search album, year, artist" big />
          <GenresGrid />
        </Content>
      </PageBody>
      <Footer />
    </ContainerMain>
  )
}

export default Search

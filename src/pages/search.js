import Header from "../components/Header/index"
import Footer from "../components/Footer"
import SearchBox from "../components/shared/SearchBox"
import { ContainerMain, Content } from "../components/shared/Containers"
import GenresGrid from "../components/shared/grids/GenresGrid"

function Search() {
  return (
    <>
      <Header noSearchBox />
      <main>
        <ContainerMain>
          <Content flexDirection="column" alignItems="center" marginTop="10em">
            <SearchBox placeholder="Search album, year, artist" big />
            <GenresGrid />
          </Content>
        </ContainerMain>
      </main>
      <Footer />
    </>
  )
}

export default Search

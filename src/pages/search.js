import Header from "../components/Header/index"
import Footer from "../components/Footer"
import SearchBox from "../components/Header/SearchBox"
import { ContainerMain, Content } from "../components/shared/Containers"
import GenresGrid from "../components/GenresGrid"

function Search() {
  return (
    <>
      <Header noSearchBox />
      <main>
        <ContainerMain>
          <Content flexDirection="column" alignItems="center">
            <SearchBox />
            <GenresGrid />
          </Content>
        </ContainerMain>
      </main>
      <Footer />
    </>
  )
}

export default Search

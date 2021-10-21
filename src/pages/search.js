import Header from "../components/Header/index"
import Footer from "../components/Footer"
import SearchBox from "../components/Header/SearchBox"
import { ContainerMain, Content } from "../components/shared/Containers"
import Genres from "../components/Genres"

function Search() {
  return (
    <>
      <Header noSearchBox />
      <main>
        <ContainerMain>
          <Content flexDirection="column" alignItems="center">
            <SearchBox />
            <Genres />
          </Content>
        </ContainerMain>
      </main>
      <Footer />
    </>
  )
}

export default Search

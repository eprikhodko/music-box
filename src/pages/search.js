import Header from "../components/Header/index"
import Footer from "../components/Footer"
import SearchBox from "../components/Header/SearchBox"
import {
  // CenterContent,
  ContainerMain,
  Content,
} from "../components/shared/Containers"

function Search() {
  return (
    <>
      <Header />
      <main>
        <ContainerMain>
          <Content flexDirection="column" alignItems="center">
            {/* <CenterContent> */}
            <SearchBox />
            {/* </CenterContent> */}
          </Content>
        </ContainerMain>
      </main>
      <Footer />
    </>
  )
}

export default Search

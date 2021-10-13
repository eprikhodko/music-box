import AlbumsGrid from "../components/AlbumsGrid"
import Content from "../components/containers/Content"
import ContainerMain from "../components/containers/ContainerMain"
import Footer from "../components/Footer"
import Header from "../components/Header"

function Catalog() {
  // const slice = {
  //   start: 8,
  // }
  return (
    <>
      <Header />
      <main>
        <ContainerMain>
          <Content>
            <AlbumsGrid renderAllAlbums />
            {/* <LinkAsButton to={ROUTES.CATALOG} text="Show more" /> */}
          </Content>
        </ContainerMain>
      </main>
      <Footer />
    </>
  )
}

export default Catalog

import AlbumsGrid from "../components/AlbumsGrid"
import Content from "../components/containers/Content"
import ContainerMain from "../components/containers/ContainerMain"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Button from "../components/Button"
import CenterContent from "../components/containers/CenterContent"

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
            <CenterContent>
              <AlbumsGrid renderAllAlbums />
              {/* <LinkAsButton to={ROUTES.CATALOG} text="Show more" /> */}
              <Button text="Show more" />
            </CenterContent>
          </Content>
        </ContainerMain>
      </main>
      <Footer />
    </>
  )
}

export default Catalog

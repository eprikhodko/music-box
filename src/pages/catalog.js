import AlbumsGrid from "../components/AlbumsGrid"
import Container from "../components/containers/Container"
import ContainerMain from "../components/containers/ContainerMain"
import Footer from "../components/Footer"
import Header from "../components/Header"

function Catalog() {
  return (
    <>
      <Header />
      <main>
        <div>This is catalog page</div>
        <ContainerMain>
          {/* <RecentlyAddedAlbumsSection> */}
          <Container>
            {/* <ContainerFlexColumn> */}
            <AlbumsGrid />
            {/* <LinkAsButton to={ROUTES.CATALOG} text="Show more" /> */}
            {/* </ContainerFlexColumn> */}
          </Container>
          {/* </RecentlyAddedAlbumsSection> */}
        </ContainerMain>
      </main>
      <Footer />
    </>
  )
}

export default Catalog

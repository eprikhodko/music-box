import AlbumsGrid from "../components/AlbumsGrid"
import Content from "../components/containers/Content"
import ContainerMain from "../components/containers/ContainerMain"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Button from "../components/Button"
import CenterContent from "../components/containers/CenterContent"

function Catalog() {
  const handleClick = () => {
    console.log("clicked")
  }

  return (
    <>
      <Header />
      <main>
        <ContainerMain>
          <Content>
            <CenterContent>
              <AlbumsGrid renderAllAlbums />
              <Button text="Show more" marginTop="2em" onClick={handleClick} />
            </CenterContent>
          </Content>
        </ContainerMain>
      </main>
      <Footer />
    </>
  )
}

export default Catalog

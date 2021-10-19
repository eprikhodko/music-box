import { useState } from "react"
import AlbumsGrid from "../components/AlbumsGrid"
import Content from "../components/shared/containers/Content"
import ContainerMain from "../components/shared/containers/ContainerMain"
import Footer from "../components/Footer"
import Header from "../components/Header/index"
import Button from "../components/shared/buttons/Button"
import CenterContent from "../components/shared/containers/CenterContent"

function Catalog() {
  const [albumsSlice, setAlbumsSlice] = useState({
    start: 0,
    end: 12,
  })

  const handleShowMore = () => {
    setAlbumsSlice((prevSlice) => ({ ...prevSlice, end: prevSlice.end + 8 }))
  }

  return (
    <>
      <Header />
      <main>
        <ContainerMain>
          <Content>
            <CenterContent>
              <AlbumsGrid albumsSlice={albumsSlice} />
              <Button
                text="Show more"
                marginTop="2em"
                onClick={handleShowMore}
              />
            </CenterContent>
          </Content>
        </ContainerMain>
      </main>
      <Footer />
    </>
  )
}

export default Catalog

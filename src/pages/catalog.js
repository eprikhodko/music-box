import { useState } from "react"
import AlbumsGrid from "../components/shared/AlbumsGrid"
import Footer from "../components/Footer"
import Header from "../components/Header/index"
import Button from "../components/shared/buttons/Button"

import { ContainerMain, Content } from "../components/shared/Containers"

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
          <Content flexDirection="column" alignItems="center">
            <AlbumsGrid albumsSlice={albumsSlice} />
            <Button text="Show more" marginTop="2em" onClick={handleShowMore} />
          </Content>
        </ContainerMain>
      </main>
      <Footer />
    </>
  )
}

export default Catalog

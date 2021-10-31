import { useState } from "react"
import AlbumsGrid from "../components/shared/grids/AlbumsGrid"
import Footer from "../components/Footer"
import Header from "../components/Header/index"
import { Button } from "../components/shared/Button"

import {
  ContainerMain,
  Content,
  PageBody,
} from "../components/shared/Containers"

function Catalog() {
  const [albumsSlice, setAlbumsSlice] = useState({
    start: 0,
    end: 12,
  })

  const handleShowMore = () => {
    setAlbumsSlice((prevSlice) => ({ ...prevSlice, end: prevSlice.end + 8 }))
  }

  return (
    <ContainerMain>
      <Header />
      <PageBody>
        <Content flexDirection="column" alignItems="center">
          <AlbumsGrid albumsSlice={albumsSlice} />
          <Button marginTop="2em" onClick={handleShowMore}>
            Show more
          </Button>
        </Content>
      </PageBody>
      <Footer />
    </ContainerMain>
  )
}

export default Catalog

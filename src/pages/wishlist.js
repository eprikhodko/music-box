import { useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import CollectionGrid from "../components/shared/grids/CollectionGrid"
import { Button } from "../components/shared/Button"
import {
  ContainerMain,
  Content,
  PageBody,
} from "../components/shared/Containers"

function Wishlist() {
  const [albumsSlice, setAlbumsSlice] = useState({
    start: 0,
    end: 11,
  })

  const handleShowMore = () => {
    setAlbumsSlice((prevSlice) => ({ ...prevSlice, end: prevSlice.end + 8 }))
  }
  return (
    <ContainerMain>
      <Header />
      <PageBody>
        <Content flexDirection="column" alignItems="center" $marginTop="5em">
          <h2>Wishlist</h2>
          <CollectionGrid albumsSlice={albumsSlice} />
          <Button marginTop="2em" onClick={handleShowMore}>
            Show more
          </Button>
        </Content>
      </PageBody>
      <Footer />
    </ContainerMain>
  )
}

export default Wishlist

import { useState, useContext } from "react"
import AlbumsGrid from "../components/shared/grids/AlbumsGrid"
import Footer from "../components/Footer"
import Header from "../components/Header/index"
import ScrollToTop from "../components/utils/ScrollToTop"

import {
  ContainerMain,
  Content,
  PageBody,
} from "../components/shared/Containers"

import AlbumsDataContext from "../context/albumsData"
import ShowMoreAndBackToTopButtons from "../components/shared/ShowMoreAndBackToTopButtons"

function Catalog() {
  const [albumsSlice, setAlbumsSlice] = useState({
    start: 0,
    end: 12,
  })

  const { albumsData } = useContext(AlbumsDataContext)

  // console.log(albumsData.length)
  // console.log(albumsSlice)

  return (
    <>
      <ScrollToTop />
      <ContainerMain>
        <Header />
        <PageBody>
          <Content flexDirection="column" alignItems="center" $marginTop="5em">
            <h2>Catalog</h2>
            <AlbumsGrid albumsSlice={albumsSlice} albumsData={albumsData} />
            {/* because of alignItems="center" on <Content /> parent component, go to <ShowMoreAndBackToTopButtons /> and set width: 100% to prevent <ShowMoreAndBackToTopButtons /> component shrinking */}
            <ShowMoreAndBackToTopButtons
              albumsSlice={albumsSlice}
              setAlbumsSlice={setAlbumsSlice}
              albumsData={albumsData}
            />
          </Content>
        </PageBody>
        <Footer />
      </ContainerMain>
    </>
  )
}

export default Catalog

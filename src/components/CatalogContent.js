import PropTypes from "prop-types"

import { useState, useContext } from "react"

import { MainGrid, Container } from "./shared/Containers"
import AlbumsGrid from "./shared/grids/AlbumsGrid"
import ShowMoreAndBackToTopButtons from "./shared/ShowMoreAndBackToTopButtons"
import AlbumsDataContext from "../context/albumsData"

function CatalogContent({ componentsCount, setComponentsCount }) {
  const [albumsSlice, setAlbumsSlice] = useState({
    start: 0,
    end: 12,
  })

  // console.log(albumsData.length)
  // console.log(albumsSlice)

  const { albumsData } = useContext(AlbumsDataContext)

  return (
    <MainGrid>
      {/* <Content flexDirection="column" alignItems="center" $marginTop="5em"> */}
      <Container>
        <h2>Catalog</h2>
        <AlbumsGrid
          albumsSlice={albumsSlice}
          albumsData={albumsData}
          setComponentsCount={setComponentsCount}
        />
        {/* because of alignItems="center" on <Content /> parent component, go to <ShowMoreAndBackToTopButtons /> and set width: 100% to prevent <ShowMoreAndBackToTopButtons /> component shrinking */}
        <ShowMoreAndBackToTopButtons
          albumsSlice={albumsSlice}
          setAlbumsSlice={setAlbumsSlice}
          albumsData={albumsData}
          componentsCount={componentsCount}
        />
        {/* </Content> */}
      </Container>
    </MainGrid>
  )
}

export default CatalogContent

CatalogContent.propTypes = {
  componentsCount: PropTypes.number,
  setComponentsCount: PropTypes.func.isRequired,
}

CatalogContent.defaultProps = {
  componentsCount: "",
}

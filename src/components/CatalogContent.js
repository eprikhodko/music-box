import PropTypes from "prop-types"

import { useState, useContext } from "react"

import AlbumsGrid from "./shared/grids/AlbumsGrid"
import ShowMoreAndBackToTopButtons from "./shared/ShowMoreAndBackToTopButtons"
import AlbumsDataContext from "../context/albumsData"
import SectionTitle from "./shared/TypographyElements"
import { MainGrid, Container } from "./shared/Containers"

function CatalogContent({ componentsCount, setComponentsCount }) {
  const [albumsSlice, setAlbumsSlice] = useState({
    start: 0,
    end: 12,
  })

  const { albumsData } = useContext(AlbumsDataContext)

  return (
    <MainGrid>
      <Container $marginTop="4em">
        <SectionTitle>Catalog</SectionTitle>
        <AlbumsGrid
          albumsSlice={albumsSlice}
          albumsData={albumsData}
          setComponentsCount={setComponentsCount}
        />
        {/* because of alignItems="center" in <Container /> parent component, we're need to set width: 100% in <ShowMoreAndBackToTopButtons /> component to prevent its shrinking   */}
        <ShowMoreAndBackToTopButtons
          albumsSlice={albumsSlice}
          setAlbumsSlice={setAlbumsSlice}
          albumsData={albumsData}
          componentsCount={componentsCount}
        />
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

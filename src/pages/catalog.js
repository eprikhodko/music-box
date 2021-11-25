import PropTypes from "prop-types"
import styled from "styled-components"

import { useState } from "react"
import AlbumsGrid from "../components/shared/grids/AlbumsGrid"
import Footer from "../components/Footer"
import Header from "../components/Header/index"
import { Button } from "../components/shared/Button"
import ScrollToTop from "../components/utils/ScrollToTop"

import {
  ContainerMain,
  Content,
  PageBody,
} from "../components/shared/Containers"

const ButtonsContainer = styled.div`
  margin-top: 3em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  border: 1px solid;
`

function Catalog({ albumsData }) {
  const [albumsSlice, setAlbumsSlice] = useState({
    start: 0,
    end: 12,
  })

  const handleShowMore = () => {
    setAlbumsSlice((prevSlice) => ({ ...prevSlice, end: prevSlice.end + 8 }))
  }

  console.log(albumsData.length)
  console.log(albumsSlice)

  return (
    <>
      <ScrollToTop />
      <ContainerMain>
        <Header />
        <PageBody>
          <Content flexDirection="column" alignItems="center" $marginTop="5em">
            <h2>Catalog</h2>
            <AlbumsGrid albumsSlice={albumsSlice} albumsData={albumsData} />
          </Content>
          <Content display="block">
            <ButtonsContainer>
              {albumsSlice.end < albumsData.length && (
                <Button
                  onClick={handleShowMore}
                  style={{
                    gridColumnStart: "2",
                  }}
                >
                  Show more
                </Button>
              )}
              {albumsSlice.end > 12 && (
                <Button $marginLeft="auto" onClick={handleShowMore}>
                  Back to top
                </Button>
              )}
            </ButtonsContainer>
          </Content>
        </PageBody>
        <Footer />
      </ContainerMain>
    </>
  )
}

export default Catalog

Catalog.propTypes = {
  albumsData: PropTypes.arrayOf(
    PropTypes.shape({
      albumCover: PropTypes.string.isRequired,
      albumId: PropTypes.string.isRequired,
      albumName: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    })
  ).isRequired,
}

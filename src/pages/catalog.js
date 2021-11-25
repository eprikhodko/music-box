import styled from "styled-components"

import { useState, useContext } from "react"
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

import { ReactComponent as ArrowIcon } from "../icons/search-arrow-icon.svg"
import AlbumsDataContext from "../context/albumsData"

const ButtonsContainer = styled.div`
  margin-top: 3em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  /* border: 1px solid; */
`

const ContainerArrowIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    height: 1.65em;
    width: 1.65em;
  }
  svg circle {
    fill: transparent;
    stroke-width: 1px;
  }
  &:hover {
    svg circle {
      fill: #000;
    }
    svg path {
      fill: #fff;
    }
  }
`

const ContainerArrowIconBig = styled(ContainerArrowIcon)`
  margin-left: auto;
  svg {
    height: 3.5em;
    width: 3.5em;
    transform: rotate(270deg);
  }
`

function Catalog() {
  const [albumsSlice, setAlbumsSlice] = useState({
    start: 0,
    end: 12,
  })

  const handleShowMore = () => {
    setAlbumsSlice((prevSlice) => ({ ...prevSlice, end: prevSlice.end + 8 }))
  }

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
              {albumsSlice.end > 24 && (
                <ContainerArrowIconBig
                  style={{
                    gridColumnStart: "3",
                  }}
                >
                  <ArrowIcon onClick={() => window.scrollTo(0, 0)} />
                </ContainerArrowIconBig>
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

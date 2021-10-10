import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import * as ROUTES from "../constants/routes"

import Button from "./Button"

import Container from "./containers/Container"
import ContainerMain from "./containers/ContainerMain"

const Section = styled.section`
  margin-top: 4.2em;
`

const Title = styled.h2`
  font-size: 4.5rem;
  color: #000;
  font-weight: 500;
`

const ContainerFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  /* border: 1px solid; */
`

const AlbumCover = styled.img`
  max-width: 266px;
`

const AlbumsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2em;
  margin: 3em 0 2em;
  /* border: 1px solid; */
`

const AlbumContainer = styled.div`
  &:hover {
    background-color: #333;
  }
`

function RecentlyAddedAlbums() {
  const [albumsData, setAlbumsData] = useState([])

  const url =
    "https://raw.githubusercontent.com/eprikhodko/music-box-images/main/albums-data.json"

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAlbumsData(data))
  }, [])

  // console.log(albumsData)

  const albumsComponents = albumsData.map((album) => (
    <AlbumContainer key={album.albumId}>
      <AlbumCover
        src={album.albumCover}
        alt={`album cover for ${album.albumTitle} album`}
      />
      <p>{album.albumTitle}</p>
      <p>{album.artist}</p>
    </AlbumContainer>
  ))

  return (
    <ContainerMain>
      <Section>
        <Container>
          <ContainerFlexColumn>
            <Title>Recently added albums</Title>
            <AlbumsGrid>{albumsComponents}</AlbumsGrid>
            <Link to={ROUTES.CATALOG}>
              <Button text="Show more" />
            </Link>
          </ContainerFlexColumn>
        </Container>
      </Section>
    </ContainerMain>
  )
}

export default RecentlyAddedAlbums

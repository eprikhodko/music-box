import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import * as ROUTES from "../constants/routes"

import Button from "./Button"

import Container from "./containers/Container"
import ContainerMain from "./containers/ContainerMain"

const RecentlyAddedAlbumsSection = styled.section`
  margin-top: 4.4em;
`

const Title = styled.h2`
  font-size: 4.5rem;
  color: #000;
  font-weight: 500;
`

const AlbumTitle = styled.p`
  font-size: 1.8rem;
  color: #000;
  font-weight: 500;
  margin-bottom: 0;
  margin-top: 0.6em;
`

const AlbumArtist = styled.p`
  font-size: 1.6rem;
  color: #000;
  font-weight: 500;
  margin: 0;
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
  /* margin-bottom: 0; */
  &:hover {
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);
  }
`

const AlbumsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2em;
  margin: 3em 0 2em;
  /* border: 1px solid; */
`

const AlbumContainer = styled.div`
  &:hover ${AlbumCover} {
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);
  }
`

const LinkToAlbum = styled(Link)`
  text-decoration: none;
  color: #000;
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

  const albumsComponents = albumsData.slice(0, 8).map((album) => (
    <LinkToAlbum to={`/albums/${album.albumId}`} key={album.albumId}>
      <AlbumContainer>
        <AlbumCover
          src={album.albumCover}
          alt={`album cover for ${album.albumTitle} album`}
        />
        <AlbumTitle>{album.albumTitle}</AlbumTitle>
        <AlbumArtist>{album.artist}</AlbumArtist>
      </AlbumContainer>
    </LinkToAlbum>
  ))

  return (
    <ContainerMain>
      <RecentlyAddedAlbumsSection>
        <Container>
          <ContainerFlexColumn>
            <Title>Recently added albums</Title>
            <AlbumsGrid>{albumsComponents}</AlbumsGrid>
            <Link to={ROUTES.CATALOG}>
              <Button text="Show more" />
            </Link>
          </ContainerFlexColumn>
        </Container>
      </RecentlyAddedAlbumsSection>
    </ContainerMain>
  )
}

export default RecentlyAddedAlbums

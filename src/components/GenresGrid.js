import { useState, useEffect } from "react"

import styled from "styled-components"
import { Link } from "react-router-dom"

import { Content, ContainerMain } from "./shared/Containers"

const Title = styled.h2`
  font-size: 4.5rem;
  color: #000;
  font-weight: 500;
  /* text-align: center; */
  /* border: 1px solid teal; */
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

const AlbumCover = styled.img`
  max-width: 266px;
  /* margin-bottom: 0; */
  &:hover {
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);
  }
`

const StyledAlbumsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
  &:focus {
    outline: 3px solid transparent;
  }
  &:focus ${AlbumCover} {
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);
  }
  &:focus ${AlbumTitle} {
    color: #333;
  }
  &:focus ${AlbumArtist} {
    color: #333;
  }
`

function GenresGrid() {
  const [genresData, setGenresData] = useState([])
  const [genresComponents, setGenresComponents] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const url =
    "https://raw.githubusercontent.com/eprikhodko/music-box-images/main/albums-data.json"

  const fetchGenresData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setGenresData(data)
    setIsLoading(false)
  }

  const createGenresComponents = () => {
    const genres = genresData.map((album) => (
      <LinkToAlbum to={`/albums/${album.albumId}`} key={album.albumId}>
        <AlbumContainer>
          <AlbumCover
            src={album.albumCover}
            alt={`album cover for ${album.albumTitle} album`}
          />
          <AlbumTitle>{album.genre}</AlbumTitle>
        </AlbumContainer>
      </LinkToAlbum>
    ))

    return genres
  }

  useEffect(() => {
    fetchGenresData()
  }, [])

  useEffect(() => {
    setGenresComponents(createGenresComponents())
  }, [isLoading])

  console.log(genresData, isLoading)
  console.log("this is genres components", genresComponents)

  return (
    <ContainerMain>
      <Content flexDirection="column" alignItems="center" marginTop="4.5em">
        <Title>Genres</Title>
        <StyledAlbumsGrid>{genresComponents}</StyledAlbumsGrid>
      </Content>
    </ContainerMain>
  )
}

export default GenresGrid

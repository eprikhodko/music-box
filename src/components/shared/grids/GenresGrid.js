import { useState, useEffect } from "react"

import styled from "styled-components"

import { Content, ContainerMain } from "../Containers"
import {
  AlbumContainer,
  LinkToAlbum,
  AlbumCover,
  AlbumTitle,
  StyledAlbumsGrid,
} from "./GridElements"

const Title = styled.h2`
  font-size: 4.5rem;
  color: #000;
  font-weight: 500;
  /* border: 1px solid teal; */
`

function GenresGrid() {
  const [genresData, setGenresData] = useState([])
  const [genresComponents, setGenresComponents] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const url =
    "https://raw.githubusercontent.com/eprikhodko/music-box-images/3a9f2540d661ee1024ce8ef85845ce0f1744c437/genres-data/genres-data.json"

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
            alt={`album cover for ${album.genre} album`}
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

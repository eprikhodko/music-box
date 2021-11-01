import { useState, useEffect } from "react"

import { Content } from "../Containers"
import {
  AlbumContainer,
  StyledLink,
  AlbumCover,
  AlbumTitle,
  StyledAlbumsGrid,
} from "./GridElements"

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
      <StyledLink
        to={`/search/${album.genre.toLowerCase()}`}
        key={album.albumId}
      >
        <AlbumContainer>
          <AlbumCover
            src={album.albumCover}
            alt={`album cover for ${album.genre} album`}
          />
          <AlbumTitle>{album.genre}</AlbumTitle>
        </AlbumContainer>
      </StyledLink>
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
    <Content flexDirection="column" alignItems="center" $marginTop="0">
      <StyledAlbumsGrid>{genresComponents}</StyledAlbumsGrid>
    </Content>
  )
}

export default GenresGrid

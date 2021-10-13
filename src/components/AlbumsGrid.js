import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import PropTypes from "prop-types"

import styled from "styled-components"

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

function AlbumsGrid({ albumsSlice, renderAllAlbums }) {
  const { start, end } = albumsSlice || {}

  const [albumsData, setAlbumsData] = useState([])

  const [albumsComponents, setAlbumsComponents] = useState([])

  const createAlbumsComponents = (a, b) => {
    const albums = albumsData.slice(a, b).map((album) => (
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

    return albums
  }
  const url =
    "https://raw.githubusercontent.com/eprikhodko/music-box-images/main/albums-data.json"

  const fetchAlbumsData = async () => {
    const res = await fetch(url)
    const data = await res.json()

    // console.log(data)
    setAlbumsData(data)
  }

  console.log(albumsData)
  console.log(albumsComponents)

  useEffect(() => {
    fetchAlbumsData()
  }, [])

  useEffect(() => {
    setAlbumsComponents(createAlbumsComponents(start, end))
  }, [albumsData])

  console.log(albumsSlice)
  console.log(renderAllAlbums)

  // if (gridType === "grid for home page") {
  //   testAlbums(0,8)
  // } else {
  //   testAlbums(4,8)
  // }

  // const slicedAlbums = createAlbumsComponents(start, end)

  // const allAlbums = createAlbumsComponents(0, 16)

  // const albumsComponentsForCatalogPage = testAlbums()

  // console.log(testAlbums(0, 8))

  // const albumsComponents = albumsData.slice(0, 8).map((album) => (
  //   <LinkToAlbum to={`/albums/${album.albumId}`} key={album.albumId}>
  //     <AlbumContainer>
  //       <AlbumCover
  //         src={album.albumCover}
  //         alt={`album cover for ${album.albumTitle} album`}
  //       />
  //       <AlbumTitle>{album.albumTitle}</AlbumTitle>
  //       <AlbumArtist>{album.artist}</AlbumArtist>
  //     </AlbumContainer>
  //   </LinkToAlbum>
  // ))

  return <StyledAlbumsGrid>{albumsComponents}</StyledAlbumsGrid>

  // <StyledAlbumsGrid>{albumsComponents}</StyledAlbumsGrid>
}

AlbumsGrid.propTypes = {
  albumsSlice: PropTypes.shape({
    start: PropTypes.number,
    end: PropTypes.number,
  }),
  renderAllAlbums: PropTypes.bool,
}

AlbumsGrid.defaultProps = {
  renderAllAlbums: false,
  albumsSlice: {
    start: 0,
    end: 0,
  },
}

export default AlbumsGrid

import { useEffect, useState } from "react"

import PropTypes from "prop-types"

import {
  AlbumContainer,
  StyledLink,
  AlbumCover,
  AlbumTitle,
  AlbumArtist,
  StyledAlbumsGrid,
} from "./GridElements"

import UploadNewAlbum from "../UploadNewAlbum"

function CollectionGrid({ albumsSlice, albumsData }) {
  const { start, end } = albumsSlice || {}

  const [albumsComponents, setAlbumsComponents] = useState([])

  const createAlbumsComponents = (a, b) => {
    const albums = albumsData.slice(a, b).map((album) => (
      <StyledLink to={`/albums/${album.albumId}`} key={album.albumId}>
        <AlbumContainer>
          <AlbumCover
            src={album.albumCover}
            alt={`album cover for ${album.albumName} album`}
          />
          <AlbumTitle>{album.albumName}</AlbumTitle>
          <AlbumArtist>{album.artist}</AlbumArtist>
        </AlbumContainer>
      </StyledLink>
    ))

    // albums.push(UploadNewAlbum)

    return albums
  }

  useEffect(() => {
    setAlbumsComponents(createAlbumsComponents(start, end))
  }, [albumsData, albumsSlice])

  return (
    <StyledAlbumsGrid>
      {albumsComponents}
      <UploadNewAlbum />
    </StyledAlbumsGrid>
  )
}

CollectionGrid.propTypes = {
  albumsData: PropTypes.arrayOf(
    PropTypes.shape({
      albumCover: PropTypes.string.isRequired,
      albumId: PropTypes.string.isRequired,
      albumName: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    })
  ).isRequired,
  albumsSlice: PropTypes.shape({
    start: PropTypes.number,
    end: PropTypes.number,
  }),
}

CollectionGrid.defaultProps = {
  albumsSlice: {
    start: 0,
    end: 0,
  },
}

export default CollectionGrid

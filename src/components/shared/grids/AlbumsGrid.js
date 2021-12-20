import { useEffect, useState } from "react"

import PropTypes from "prop-types"

import {
  AlbumContainer,
  StyledLink,
  StyledAlbumsGrid,
  AlbumCover,
  AlbumTitle,
  AlbumArtist,
  AlbumCoverContainer,
} from "./GridElements"

function AlbumsGrid({ albumsSlice, albumsData, setComponentsCount, children }) {
  const { start, end } = albumsSlice || {}

  const [albumsComponents, setAlbumsComponents] = useState([])

  useEffect(() => {
    if (setComponentsCount)
      setComponentsCount(document.querySelectorAll(".component-count").length)
  }, [albumsComponents])

  const createAlbumsComponents = (a, b) => {
    const albums = albumsData.slice(a, b).map((album) => (
      <StyledLink
        to={`/albums/${album.albumId}`}
        key={album.albumId}
        className="component-count"
      >
        <AlbumContainer>
          <AlbumCoverContainer>
            <AlbumCover
              src={album.albumCover}
              alt={`album cover for ${album.albumName}`}
            />
          </AlbumCoverContainer>

          <AlbumTitle>{album.albumName}</AlbumTitle>
          <AlbumArtist>{album.artist}</AlbumArtist>
        </AlbumContainer>
      </StyledLink>
    ))

    return albums
  }

  useEffect(() => {
    setAlbumsComponents(createAlbumsComponents(start, end))
  }, [albumsData, albumsSlice])

  return (
    <StyledAlbumsGrid>
      {albumsComponents}
      {children}
    </StyledAlbumsGrid>
  )
}

export default AlbumsGrid

AlbumsGrid.propTypes = {
  albumsSlice: PropTypes.shape({
    start: PropTypes.number,
    end: PropTypes.number,
  }),
  albumsData: PropTypes.arrayOf(
    PropTypes.shape({
      albumCover: PropTypes.string.isRequired,
      albumId: PropTypes.string.isRequired,
      albumName: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    })
  ).isRequired,
  setComponentsCount: PropTypes.func,
  children: PropTypes.node,
}

AlbumsGrid.defaultProps = {
  albumsSlice: {
    start: 0,
    end: 0,
  },
  setComponentsCount: () => {},
  children: null,
}

import { useEffect, useState } from "react"

import PropTypes from "prop-types"

// import AlbumsDataContext from "../../../context/albumsData"
import {
  AlbumContainer,
  StyledLink,
  AlbumCover,
  AlbumTitle,
  AlbumArtist,
  StyledAlbumsGrid,
  FallbackBackgroundImage,
} from "./GridElements"

function AlbumsGrid({ albumsSlice, albumsData, children }) {
  const { start, end } = albumsSlice || {}

  // const { albumsData } = useContext(AlbumsDataContext)

  const [albumsComponents, setAlbumsComponents] = useState([])

  const handleError = (e) => {
    e.target.style.display = "none"
  }

  const createAlbumsComponents = (a, b) => {
    const albums = albumsData.slice(a, b).map((album) => (
      <StyledLink to={`/albums/${album.albumId}`} key={album.albumId}>
        <AlbumContainer>
          <FallbackBackgroundImage>
            <AlbumCover
              src={album.albumCover}
              alt={`album cover for ${album.albumName}`}
              onError={handleError}
            />
          </FallbackBackgroundImage>

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
  children: PropTypes.node,
}

AlbumsGrid.defaultProps = {
  albumsSlice: {
    start: 0,
    end: 0,
  },
  children: null,
}

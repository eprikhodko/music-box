import { useContext, useEffect, useState } from "react"

import PropTypes from "prop-types"

import styled from "styled-components"

// import fallbackImage from "../../../images/errorPlaceholderr.jpg"
import IconImagePlaceholder from "../../../icons/image-placeholder.svg"

import AlbumsDataContext from "../../../context/albumsData"
import {
  AlbumContainer,
  StyledLink,
  AlbumCover,
  AlbumTitle,
  AlbumArtist,
  StyledAlbumsGrid,
} from "./GridElements"

// const StyledParagraph = styled.p`
//   color: rgba(0, 0, 0, 0.5);
// `

const AlbumCoverContainer = styled.div`
  width: 16.65em;
  height: 16.65em;
  background-image: url(${IconImagePlaceholder});
  /* background-size: cover; */
  background-repeat: no-repeat;
  background-position: center;
  background-color: saddlebrown;
  filter: brightness(0.5) sepia(1) hue-rotate(-70deg) saturate(5);
`

function AlbumsGrid({ albumsSlice }) {
  const { start, end } = albumsSlice || {}

  const { albumsData } = useContext(AlbumsDataContext)

  const [albumsComponents, setAlbumsComponents] = useState([])

  const handleError = (e) => {
    e.target.style.display = "none"
  }

  const createAlbumsComponents = (a, b) => {
    const albums = albumsData.slice(a, b).map((album) => (
      <StyledLink to={`/albums/${album.albumId}`} key={album.albumId}>
        <AlbumContainer>
          <AlbumCoverContainer>
            <AlbumCover
              src={album.albumCover}
              alt={`album cover for ${album.albumName}`}
              onError={handleError}
            />
          </AlbumCoverContainer>

          {/* <IconContainer>
              <IconImageBroken />
              <StyledParagraph>sorry, image not found</StyledParagraph>
            </IconContainer> */}

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

  return <StyledAlbumsGrid>{albumsComponents}</StyledAlbumsGrid>
}

AlbumsGrid.propTypes = {
  albumsSlice: PropTypes.shape({
    start: PropTypes.number,
    end: PropTypes.number,
  }),
}

AlbumsGrid.defaultProps = {
  albumsSlice: {
    start: 0,
    end: 0,
  },
}

export default AlbumsGrid

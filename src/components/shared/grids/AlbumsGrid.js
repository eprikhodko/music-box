import { useContext, useEffect, useState } from "react"

import PropTypes from "prop-types"

import styled from "styled-components"

import AlbumsDataContext from "../../../context/albumsData"
import {
  AlbumContainer,
  StyledLink,
  AlbumCover,
  AlbumTitle,
  AlbumArtist,
  StyledAlbumsGrid,
  IconImageBroken,
  IconContainer,
} from "./GridElements"

const StyledParagraph = styled.p`
  color: rgba(0, 0, 0, 0.5);
`

function AlbumsGrid({ albumsSlice }) {
  const { start, end } = albumsSlice || {}

  const { albumsData } = useContext(AlbumsDataContext)

  const [albumsComponents, setAlbumsComponents] = useState([])

  const createAlbumsComponents = (a, b) => {
    const albums = albumsData.slice(a, b).map((album) => (
      <StyledLink to={`/albums/${album.albumId}`} key={album.albumId}>
        <AlbumContainer>
          {album.albumCover ? (
            <AlbumCover
              src={album.albumCover}
              alt={`album cover for ${album.albumName} album`}
            />
          ) : (
            <IconContainer>
              <IconImageBroken />
              <StyledParagraph>sorry, image broken</StyledParagraph>
            </IconContainer>
          )}

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

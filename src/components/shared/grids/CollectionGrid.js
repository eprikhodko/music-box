import { useEffect, useState } from "react"
import styled from "styled-components"

import PropTypes from "prop-types"
import * as ROUTES from "../../../constants/routes"

import {
  AlbumContainer,
  StyledLink,
  AlbumCover,
  AlbumTitle,
  AlbumArtist,
  StyledAlbumsGrid,
  UploadNewAlbumBox,
} from "./GridElements"

import { ReactComponent as Cloud } from "../../../icons/cloud_upload_24px.svg"

const IconCloud = styled(Cloud)`
  width: 4.5em;
  height: 3em;

  margin-bottom: 1em;
`

const StyledParagraph = styled.p`
  color: rgba(0, 0, 0, 0.5);
  line-height: 1;
  margin: 0;
`

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

    const UploadNewAlbum = (
      <StyledLink to={ROUTES.UPLOAD} key="upload-album-box">
        <AlbumContainer>
          <UploadNewAlbumBox>
            <IconCloud />
            <StyledParagraph>Upload</StyledParagraph>
          </UploadNewAlbumBox>
          <AlbumTitle>Upload new album</AlbumTitle>
        </AlbumContainer>
      </StyledLink>
    )

    albums.push(UploadNewAlbum)

    return albums
  }

  useEffect(() => {
    setAlbumsComponents(createAlbumsComponents(start, end))
  }, [albumsData, albumsSlice])

  return <StyledAlbumsGrid>{albumsComponents}</StyledAlbumsGrid>
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

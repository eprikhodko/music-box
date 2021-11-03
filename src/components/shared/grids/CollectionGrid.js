import { useContext, useEffect, useState } from "react"
import styled from "styled-components"

import PropTypes from "prop-types"
import * as ROUTES from "../../../constants/routes"

import AlbumsDataContext from "../../../context/albumsData"
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
`

function CollectionGrid({ albumsSlice }) {
  const { start, end } = albumsSlice || {}

  const { albumsData } = useContext(AlbumsDataContext)

  const [albumsComponents, setAlbumsComponents] = useState([])

  const createAlbumsComponents = (a, b) => {
    const albums = albumsData.slice(a, b).map((album) => (
      <StyledLink to={`/albums/${album.albumId}`} key={album.albumId}>
        <AlbumContainer>
          <AlbumCover
            src={album.albumCover}
            alt={`album cover for ${album.albumTitle} album`}
          />
          <AlbumTitle>{album.albumTitle}</AlbumTitle>
          <AlbumArtist>{album.artist}</AlbumArtist>
        </AlbumContainer>
      </StyledLink>
    ))

    const UploadNewAlbum = (
      <StyledLink to={ROUTES.UPLOAD} key="upload-album-box">
        <AlbumContainer>
          <UploadNewAlbumBox>
            <IconCloud />
          </UploadNewAlbumBox>
          <AlbumTitle>Upload new album</AlbumTitle>
        </AlbumContainer>
      </StyledLink>
    )

    albums.push(UploadNewAlbum)

    return albums
  }

  //   console.log(UploadNewAlbumBox)

  useEffect(() => {
    setAlbumsComponents(createAlbumsComponents(start, end))
  }, [albumsData, albumsSlice])

  console.log(albumsComponents)

  return <StyledAlbumsGrid>{albumsComponents}</StyledAlbumsGrid>
}

CollectionGrid.propTypes = {
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
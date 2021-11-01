import { useContext, useEffect, useState } from "react"
import styled from "styled-components"

import PropTypes from "prop-types"

import AlbumsDataContext from "../../../context/albumsData"
import {
  AlbumContainer,
  LinkToAlbum,
  AlbumCover,
  AlbumTitle,
  AlbumArtist,
  StyledAlbumsGrid,
} from "./GridElements"

import { ReactComponent as Cloud } from "../../../icons/cloud_upload_24px.svg"

const UploadNewAlbumBox = styled(AlbumContainer)`
  width: 16.65em;
  height: 16.65em;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c2c2c2;
`

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

    const UploadNewAlbum = (
      <LinkToAlbum to="/upload" key="upload-album-box">
        <AlbumContainer>
          <UploadNewAlbumBox>
            <IconCloud />
          </UploadNewAlbumBox>
          <AlbumTitle>Upload new album</AlbumTitle>
        </AlbumContainer>
      </LinkToAlbum>
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

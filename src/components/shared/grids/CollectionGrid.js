import { useContext, useEffect, useState } from "react"

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

    return albums
  }

  useEffect(() => {
    setAlbumsComponents(createAlbumsComponents(start, end))
  }, [albumsData, albumsSlice])

  // console.log(albumsSlice)

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

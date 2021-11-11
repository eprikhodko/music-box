import { useContext } from "react"

import PropTypes from "prop-types"

import styled from "styled-components"

import fallbackImage from "../../../images/florencia-viadana-F7W1QP62psQ-unsplash-optimized.jpg"

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

function AlbumsGrid() {
  // const { start, end } = albumsSlice || {}

  const { albumsData } = useContext(AlbumsDataContext)

  // const [albumsComponents, setAlbumsComponents] = useState([])
  // const [imgSrc, setImgSrc] = useState("")

  // const handleEvent = (e) => {
  //   e.currentTarget.src = fallbackImage
  //   console.log(e.currentTarget.src)

  // }

  console.log(fallbackImage)

  // const createAlbumsComponents = (a, b) => {
  const albums = albumsData.slice(0, 8).map((album) => (
    <StyledLink to={`/albums/${album.albumId}`} key={album.albumId}>
      {/* {setImgSrc(album.ablumCover)} */}
      <AlbumContainer>
        <AlbumCover
          src={album.albumCover}
          alt={`album cover for ${album.albumName}`}
          // onMouseEnter={handleEvent}
          // onError={(e) => {
          //   e.target.onError = null
          //   e.currentTarget.src = fallbackImage
          // }}
          onError={(e) => {
            if (e.target.src !== "image_path_here") {
              e.target.onerror = null
              e.target.src = fallbackImage
            }
          }}
        />

        <IconContainer>
          <IconImageBroken />
          <StyledParagraph>sorry, image not found</StyledParagraph>
        </IconContainer>

        <AlbumTitle>{album.albumName}</AlbumTitle>
        <AlbumArtist>{album.artist}</AlbumArtist>
      </AlbumContainer>
    </StyledLink>
  ))

  //   return albums
  // }

  // useEffect(() => {
  //   setAlbumsComponents(createAlbumsComponents(start, end))
  // }, [albumsData, albumsSlice])

  return <StyledAlbumsGrid>{albums}</StyledAlbumsGrid>
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

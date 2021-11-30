import styled from "styled-components"
import { Link } from "react-router-dom"
import IconImagePlaceholder from "../../../icons/image-placeholder-fallback.svg"

const SharedBoxShadowStyle = "box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);"
// const SharedDimensionsStyle = "width: 16.65em; height: 16.65em;"
const SharedDimensionsStyle = "max-width: 16.65em; "

export const FallbackBackgroundImage = styled.div`
  /* ${SharedDimensionsStyle} */
  /* background-image: url(${IconImagePlaceholder});
  background-size: 20% auto;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #c2c2c2; */

  &:hover {
    ${SharedBoxShadowStyle}
  }
`

export const AlbumCover = styled.img`
  ${SharedDimensionsStyle}

  &:hover {
    ${SharedBoxShadowStyle}
  }
`

export const UploadNewAlbumBox = styled.div`
  ${SharedDimensionsStyle}

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c2c2c2;

  &:hover {
    ${SharedBoxShadowStyle}
  }
`

export const AlbumContainer = styled.div`
  &:hover ${AlbumCover} {
    ${SharedBoxShadowStyle}
  }
  &:hover ${UploadNewAlbumBox} {
    ${SharedBoxShadowStyle}
  }
`

export const AlbumTitle = styled.p`
  font-size: 1.8rem;
  color: #000;
  font-weight: 500;
  margin-bottom: 0;
  margin-top: 0.6em;
`

export const AlbumArtist = styled.p`
  font-size: 1.6rem;
  color: #000;
  font-weight: 500;
  margin: 0;
`

export const StyledAlbumsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;
  margin: 3em 0 2em;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  &:focus {
    outline: 3px solid transparent;
  }
  &:focus ${AlbumCover} {
    ${SharedBoxShadowStyle}
  }
  &:focus ${UploadNewAlbumBox} {
    ${SharedBoxShadowStyle}
  }
  &:focus ${AlbumTitle} {
    color: #333;
  }
  &:focus ${AlbumArtist} {
    color: #333;
  }
`

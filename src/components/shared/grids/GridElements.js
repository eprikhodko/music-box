import styled from "styled-components"
import { Link } from "react-router-dom"
import IconImagePlaceholder from "../../../icons/image-placeholder-fallback.svg"

const SharedBoxShadowStyle = "box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);"
const SharedDimensionsStyle = "width: 16.65em; height: 16.65em;"
// const SharedDimensionsStyle = "max-width: 16.65em; "

export const FallbackBackgroundImage = styled.div`
  /* ${SharedDimensionsStyle} */
  background-image: url(${IconImagePlaceholder});
  background-size: 20% auto;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #c2c2c2;

  /* display: grid; */
  /* padding: 1em; */
  /* place-items: center; */

  /* &:before {
    content: "";
    display: block;
    padding-bottom: 100%;
    grid-area: 1 / 1 / 2 / 2;
  } */

  &:hover {
    ${SharedBoxShadowStyle}
  }
`

export const AlbumCover = styled.img`
  /* ${SharedDimensionsStyle} */
  /* width: 100%; */
  /* height: 100%; */
  /* object-fit: contain; */
  /* grid-area: 1 / 1 / 2 / 2; */

  /* object-fit: cover; */
  /* grid-column: 1 / -1; */
  /* width: 100%;
  height: 100%; */

  /* object-fit: cover; */
  width: 100%;
  aspect-ratio: 1 / 1;
  /* max-height: 100%; */

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

  border: 1px solid;
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
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em; */

  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(266px, 1fr));
  grid-gap: 1rem;
  /* margin: 3em 0 2em; */

  border: 1px solid green;
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

  /* &:hover ${FallbackBackgroundImage} {
    ${SharedBoxShadowStyle}
  } */
`

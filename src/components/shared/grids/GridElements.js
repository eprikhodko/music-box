import styled from "styled-components"
import { Link } from "react-router-dom"
import IconImagePlaceholder from "../../../icons/image-placeholder-album-cover-grid.svg"
import screenSize from "../../../constants/mediaQueries"

const SharedBoxShadowStyle = "box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);"

export const StyledAlbumsGrid = styled.div`
  align-self: stretch;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;

  margin: 3em 0 2em;

  /* show 2 columns of albums by default */
  /* we need to configure our columns with minmax(0, 1fr) to make text overflow work */
  /* grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); */
  grid-template-columns: repeat(2, minmax(0, 1fr));

  /* show 3 columns of albums from 600px screen width and up */
  @media (min-width: ${screenSize.tabletSmall}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  /* show 4 columns of albums from 1024px screen width and up */
  @media (min-width: ${screenSize.desktopSmall}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`

export const AlbumCoverContainer = styled.div`
  position: relative;
  padding-top: 100%;

  background-image: url(${IconImagePlaceholder});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #c2c2c2;
`

export const AlbumCover = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  &:hover {
    ${SharedBoxShadowStyle}
  }
`

export const UploadNewAlbumBox = styled.div`
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

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  margin-bottom: 0;
  margin-top: 0.6em;
`

export const AlbumArtist = styled.p`
  font-size: 1.6rem;
  color: #000;
  font-weight: 500;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  margin: 0;
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

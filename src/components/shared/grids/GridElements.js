import styled from "styled-components"
import { Link } from "react-router-dom"
import { ReactComponent as IconPokerFace } from "../../../icons/sentiment_neutral_24px.svg"

const SharedBoxShadowStyle = "box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);"
const SharedDimensionsStyle = "width: 16.65em; height: 16.65em;"

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

export const IconImageBroken = styled(IconPokerFace)`
  width: 4em;
  height: 4em;

  path {
    fill: #959696;
  }
`

export const IconContainer = styled.div`
  ${SharedDimensionsStyle}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #c2c2c2;
`

export const AlbumContainer = styled.div`
  &:hover ${AlbumCover} {
    ${SharedBoxShadowStyle}
  }
  &:hover ${UploadNewAlbumBox} {
    ${SharedBoxShadowStyle}
  }
  &:hover ${IconContainer} {
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
  grid-template-columns: repeat(4, 1fr);
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

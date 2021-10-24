import styled from "styled-components"
import { Link } from "react-router-dom"

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

export const AlbumCover = styled.img`
  max-width: 266px;
  /* margin-bottom: 0; */
  &:hover {
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);
  }
`

export const StyledAlbumsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;
  margin: 3em 0 2em;
  /* border: 1px solid; */
`

export const AlbumContainer = styled.div`
  &:hover ${AlbumCover} {
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);
  }
`

export const LinkToAlbum = styled(Link)`
  text-decoration: none;
  color: #000;
  &:focus {
    outline: 3px solid transparent;
  }
  &:focus ${AlbumCover} {
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);
  }
  &:focus ${AlbumTitle} {
    color: #333;
  }
  &:focus ${AlbumArtist} {
    color: #333;
  }
`

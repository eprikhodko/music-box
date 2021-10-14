import styled from "styled-components"

import { useContext } from "react"
import { useParams } from "react-router-dom"
import AlbumsDataContext from "../context/albumsData"
import ContainerMain from "./containers/ContainerMain"
import Content from "./containers/Content"
import LinkAsButton from "./LinkAsButton"

import * as ROUTES from "../constants/routes"

const AlbumCover = styled.img`
  max-width: 564px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);
`

const AlbumDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8em;
  margin-top: 4em;
  /* border: 1px solid; */
`

const AlbumTitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 4.5rem;
  color: #000;
  margin-top: 0;
`

const AlbumArtist = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  margin-top: 0;
`

const AlbumYear = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  color: #000;
  margin: 0;
`

const AlbumGenre = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  color: #000;
  margin-top: 0.2em;
`

const ButtonsParagraph = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  color: #000;
  margin-top: 2em;
`

const AlbumButtons = styled.div`
  display: flex;
  /* border: 1px solid yellow; */
`

function AlbumDetails() {
  const { albumId } = useParams()
  const { albumsData } = useContext(AlbumsDataContext)

  console.log(albumId)
  console.log(albumsData)

  const album = albumsData.find((element) => element.albumId === albumId)

  console.log(album)

  return (
    <ContainerMain>
      <Content marginTop="5em">
        <AlbumCover
          src={album.albumCover}
          alt={`cover for ${album.albumCover} album`}
        />
        <AlbumDescription>
          <AlbumTitle>{album.albumTitle}</AlbumTitle>
          <AlbumArtist>{album.artist}</AlbumArtist>
          <AlbumYear>Year: {album.year}</AlbumYear>
          <AlbumGenre>Genre: {album.genre}</AlbumGenre>
          <ButtonsParagraph>
            If you want to add this album to your collection or wishlist, please
            make an account first:
          </ButtonsParagraph>
          <AlbumButtons>
            <LinkAsButton to={ROUTES.SIGNUP} hero text="Sign up" />
            <LinkAsButton to={ROUTES.LOGIN} hero text="Log in" />
          </AlbumButtons>
        </AlbumDescription>
      </Content>
    </ContainerMain>
  )
}

export default AlbumDetails

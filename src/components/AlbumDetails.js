import styled from "styled-components"

import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import AlbumsDataContext from "../context/albumsData"
import { HeroButton, ButtonAlbumDetails } from "./shared/Button"

import * as ROUTES from "../constants/routes"
import UserContext from "../context/user"

const AlbumCover = styled.img`
  max-width: 40em;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);
`

const AlbumDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8em;
  margin-top: 4em;
  /* border: 1px solid; */
`

const AlbumYear = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  color: #000;
  margin: 0;
  margin-top: 1em;
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
  align-items: flex-start;
  flex-direction: ${({ currentUser }) => currentUser && "column"};
  margin-top: ${({ currentUser }) => currentUser && "2em"};
`

function AlbumDetails() {
  const { albumId } = useParams()
  const { albumsData, isAlbumsDataLoading } = useContext(AlbumsDataContext)
  const currentUser = useContext(UserContext)

  // console.log(currentUser.uid)

  const album = albumsData.find((item) => item.albumId === albumId)

  // console.log(album.uploadedBy)

  return (
    <>
      {!isAlbumsDataLoading && (
        <>
          <AlbumCover
            src={album.albumCover}
            alt={`cover for ${album.albumCover} album`}
          />
          <AlbumDescription>
            <h2>{album.albumName}</h2>
            <h3>{album.artist}</h3>
            <AlbumYear>Year: {album.year}</AlbumYear>
            <AlbumGenre>Genre: {album.genre}</AlbumGenre>
            {currentUser ? (
              <>
                <AlbumButtons currentUser={currentUser}>
                  <ButtonAlbumDetails>Add to my collection</ButtonAlbumDetails>
                  <ButtonAlbumDetails $marginTop="1.5em">
                    Add to my wishlist
                  </ButtonAlbumDetails>

                  {/* show 'Remove from database' button if user uploaded this album to the database himself */}
                  {album.uploadedBy === currentUser.uid && (
                    <ButtonAlbumDetails $marginTop="1.5em">
                      Remove from database
                    </ButtonAlbumDetails>
                  )}
                </AlbumButtons>
              </>
            ) : (
              <>
                <ButtonsParagraph>
                  If you want to add this album to your collection or wishlist,
                  please make an account first:
                </ButtonsParagraph>
                <AlbumButtons>
                  <HeroButton as={Link} to={ROUTES.SIGNUP} $marginRight="2em">
                    Sign up
                  </HeroButton>
                  <HeroButton to={ROUTES.LOGIN}>Log in</HeroButton>
                </AlbumButtons>
              </>
            )}
          </AlbumDescription>
        </>
      )}
    </>
  )
}

export default AlbumDetails

import PropTypes from "prop-types"

import styled from "styled-components"

import { useContext, useState, useEffect } from "react"
import { Link, useParams, useHistory } from "react-router-dom"

import {
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore"
import { getStorage, ref, deleteObject } from "firebase/storage"

import AlbumsDataContext from "../context/albumsData"
import { ButtonPrimary } from "./shared/Buttons"

import * as ROUTES from "../constants/routes"
import UserContext from "../context/user"

import IconImagePlaceholder from "../icons/image-fallback-album-details.svg"

import { MainGrid } from "./shared/Containers"

const Container = styled.div`
  margin-top: 1em;
  grid-column: 2/-2;

  display: grid;
  justify-items: center;

  @media (min-width: 1160px) {
    margin-top: 5em;
    justify-items: left;

    grid-template-columns: auto minmax(0, 8em) auto minmax(0, 2em) minmax(
        0,
        1fr
      );
    grid-template-columns: auto 8em auto 2em 1fr;
    grid-template-columns: auto 8em auto 2em 1fr;

    /* grid-template-columns: auto 2em 13em 2em 13em; */
    /* grid-template-columns: auto 2em 15em 2em 13em; */

    grid-template-rows: auto auto 4em auto 6em 1fr;
    grid-template-rows: auto auto 4em auto auto auto auto;
    grid-template-rows: ${({ currentUser }) =>
      currentUser
        ? "auto auto auto auto auto auto 1fr"
        : "auto auto 4em auto 6em 1fr"};

    grid-template-areas: ${({ currentUser }) =>
      currentUser
        ? `
      "image . album-title album-title album-title"
      "image . artist artist artist"
      "image . year year year"
      "image . genre genre genre"
      "image . button-collection button-collection button-collection"
      "image . button-wishlist button-wishlist button-wishlist"
      "image . button-remove button-remove button-remove";
      `
        : `
      "image . album-title album-title album-title"
      "image . artist artist artist"
      "image . year year year"
      "image . genre genre genre"
      "image . text text text"
      "image . button-signup . button-login";
      `};

    /* grid-template-areas:
      "image . album-title album-title album-title"
      "image . artist artist artist"
      "image . year year year"
      "image . genre genre genre"
      "image . text text text"
      "image . button-signup . button-login";

    grid-template-areas:
      "image . album-title album-title album-title"
      "image . artist artist artist"
      "image . year year year"
      "image . genre genre genre"
      "image . button-collection button-collection button-collection"
      "image . button-wishlist button-wishlist button-wishlist"
      "image . button-remove button-remove button-remove"; */
  }
`

const AlbumCover = styled.img`
  /* grid-column: 2/-2; */

  width: 100%;
  max-width: 35em;

  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);

  @media (min-width: 1160px) {
    grid-area: image;
  }
`

const AlbumTitle = styled.h1`
  font-size: 2.5rem;
  color: #000;
  text-align: center;

  margin-top: 3em;
  /* margin-top: ${({ currentUser }) => (currentUser ? "0" : "1.5em")}; */

  @media (min-width: 600px) {
    font-size: 4.5rem;
    /* margin-top: 1em; */
    margin-top: ${({ currentUser }) => (currentUser ? "1em" : "1.5em")};
  }

  @media (min-width: 1160px) {
    grid-area: album-title;
    align-self: end;
    text-align: left;
  }
`

const AlbumArtist = styled.h2`
  /* grid-column: 2/-2; */

  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  text-align: center;

  /* margin-top: 2em; */

  @media (min-width: 600px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1160px) {
    grid-area: artist;
    text-align: left;
  }
`

const AlbumYear = styled.p`
  /* grid-column: 2/-2; */

  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  color: #000;
  text-align: center;

  margin: 0;
  margin-top: 1.5em;

  @media (min-width: 1160px) {
    grid-area: year;
    /* margin: 0; */
    align-self: end;
    text-align: left;
  }
`

const AlbumGenre = styled.p`
  /* grid-column: 2/-2; */

  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  color: #000;
  text-align: center;

  margin-top: 0.2em;
  margin-bottom: 2em;

  @media (min-width: 1160px) {
    grid-area: genre;
    text-align: left;
    margin: 0;
    margin-top: 0.2em;
  }
`

const StyledParagraph = styled.p`
  /* grid-column: 2/-2; */

  max-width: 30em;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  color: #000;
  text-align: center;

  margin-top: 0.5em;

  @media (min-width: 1160px) {
    grid-area: text;
    text-align: left;
    align-self: end;
    margin: 0;
  }
`

const ButtonSignup = styled(ButtonPrimary)`
  /* grid-column: 2/-2; */

  margin-top: 1.3em;
  justify-self: center;

  /* @media (min-width: 600px) {
    margin-top: 2em;
  } */

  @media (min-width: 1160px) {
    grid-area: button-signup;
    align-self: start;
    justify-self: start;
  }
`

const ButtonLogin = styled(ButtonPrimary)`
  /* grid-column: 2/-2; */

  margin-top: 1.3em;
  justify-self: center;

  /* @media (min-width: 600px) {
    margin-top: 2em;
  } */

  @media (min-width: 1160px) {
    grid-area: button-login;
    align-self: start;
    justify-self: start;
  }
`

// const ButtonAlbum = styled(ButtonPrimary)`
//   /* grid-column: 2/-2; */

//   /* margin-top: 1.5em; */

//   /* padding: 1em 0; */
//   /* min-width: 16.5em; */
//   width: 16.5em;

//   justify-self: center;

//   @media (min-width: 1160px) {
//     grid-area: text;
//   }
// `

const ButtonCollection = styled(ButtonPrimary)`
  width: 16.5em;

  @media (min-width: 1160px) {
    grid-area: button-collection;
    /* align-self: start; */
    margin-top: 2.5em;
  }
  /* justify-self: center; */
`

const ButtonWishlist = styled(ButtonPrimary)`
  width: 16.5em;
  margin-top: 1.3em;

  @media (min-width: 1160px) {
    grid-area: button-wishlist;
    /* align-self: start; */
    /* margin: 0; */
  }
  /* justify-self: center; */
`

const ButtonRemove = styled(ButtonPrimary)`
  width: 16.5em;
  margin-top: 1.3em;

  @media (min-width: 1160px) {
    grid-area: button-remove;
    align-self: start;
    /* margin: 0; */
  }

  /* justify-self: center; */
`

function AlbumDetails({ setIsAlbumRemovedFromDatabase }) {
  const { albumId } = useParams()
  const { albumsData, isAlbumsDataLoading } = useContext(AlbumsDataContext)

  const currentUser = useContext(UserContext)

  const [isAlbumInUserCollection, setIsAlbumInUserCollection] = useState(false)
  const [isAlbumInUserWishlist, setIsAlbumInUserWishlist] = useState(false)

  const history = useHistory()

  const db = getFirestore()

  const album = albumsData.find((item) => item.albumId === albumId)

  const checkIfAlbumIsInUserCollection = async () => {
    const docRef = doc(
      db,
      "users",
      currentUser.uid,
      "albumsInUserCollection",
      albumId
    )
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      setIsAlbumInUserCollection(true)
      console.log("Document data:", docSnap.data())
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!")
    }
  }

  const checkIfAlbumIsInUserWishlist = async () => {
    const docRef = doc(
      db,
      "users",
      currentUser.uid,
      "albumsInUserWishlist",
      albumId
    )
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      setIsAlbumInUserWishlist(true)
      console.log("Document data:", docSnap.data())
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!")
    }
  }

  const removeAlbumFromCollection = async () => {
    try {
      const docRef = doc(
        db,
        "users",
        currentUser.uid,
        "albumsInUserCollection",
        albumId
      )
      await deleteDoc(docRef)

      setIsAlbumInUserCollection(false)
      console.log("album removed from user collection")
    } catch (error) {
      console.log(error)
    }
  }

  const removeAlbumFromWishlist = async () => {
    try {
      const docRef = doc(
        db,
        "users",
        currentUser.uid,
        "albumsInUserWishlist",
        albumId
      )
      await deleteDoc(docRef)

      setIsAlbumInUserWishlist(false)
      console.log("album removed from user wishlist")
    } catch (error) {
      console.log(error)
    }
  }

  const removeAlbumFromDatabase = async () => {
    const storage = getStorage()
    const httpsReference = ref(storage, album.albumCover)

    // remove album cover image from Firebase Storage
    try {
      await deleteObject(httpsReference)
      console.log("album removed from database")
    } catch (error) {
      console.log(error)
    }

    // remove album reference record from user collection
    removeAlbumFromCollection()

    // remove album reference record from user wishlist
    removeAlbumFromWishlist()

    // remove actual album document from database
    try {
      await deleteDoc(doc(db, "albums", album.albumId))
      setIsAlbumRemovedFromDatabase(true)
      console.log("album was successfully removed from database")
      history.push(`/`)
      // history.push(`/uploaded-by/${currentUser.displayName}`)
    } catch (error) {
      console.log(error)
    }
  }

  const addAlbumToCollection = async () => {
    try {
      const docRef = doc(
        db,
        "users",
        currentUser.uid,
        "albumsInUserCollection",
        albumId
      )
      await setDoc(docRef, {
        albumId,
        dateAdded: serverTimestamp(),
      })

      setIsAlbumInUserCollection(true)
    } catch (error) {
      console.log(error)
    }
  }

  const addAlbumToWishlist = async () => {
    try {
      const docRef = doc(
        db,
        "users",
        currentUser.uid,
        "albumsInUserWishlist",
        albumId
      )
      await setDoc(docRef, {
        albumId,
        dateAdded: serverTimestamp(),
      })

      setIsAlbumInUserWishlist(true)
    } catch (error) {
      console.log(error)
    }
  }

  // console.log(album)
  // https://firebasestorage.googleapis.com/v0/b/music-box-e8f66.appspot.com/o/albums-covers%2FLoveless%20-%20My%20Bloody%20Valentine.resized.jpeg1638194280639?alt=media&token=c86fc622-f68d-4965-ba55-7a1fc3ca709b

  const [imgSrc, setImgSrc] = useState("")
  // const fallback =
  //   "https://firebasestorage.googleapis.com/v0/b/music-box-e8f66.appspot.com/o/albums-covers%2FGumboot%20Soup%20-%20King%20Gizzard%20%26%20The%20Lizard%20Wizard.resized.jpeg1638194651456?alt=media&token=ef6da424-b59a-40aa-9665-4f349d41a304"

  // const fallback = "../icons/image-placeholder-fallback.svg"

  const fallback = IconImagePlaceholder

  const onError = () => setImgSrc(fallback)

  useEffect(() => {
    if (!isAlbumsDataLoading) {
      setImgSrc(album.albumCover)
    }
  }, [isAlbumsDataLoading])

  useEffect(() => {
    if (currentUser) {
      checkIfAlbumIsInUserCollection()
      checkIfAlbumIsInUserWishlist()
    }
  }, [isAlbumsDataLoading])

  return (
    <MainGrid>
      <Container currentUser={currentUser}>
        {!isAlbumsDataLoading && (
          <>
            <AlbumCover
              // src={imgSrc ? imgSrc : fallback}
              src={imgSrc || fallback}
              alt={`cover for ${album.albumName} album`}
              onError={onError}
            />
            <AlbumTitle currentUser={currentUser}>{album.albumName}</AlbumTitle>
            <AlbumArtist>{album.artist}</AlbumArtist>
            <AlbumYear>Year: {album.year}</AlbumYear>
            <AlbumGenre>Genre: {album.genre}</AlbumGenre>
            {currentUser ? (
              <>
                {isAlbumInUserCollection ? (
                  <ButtonCollection onClick={removeAlbumFromCollection}>
                    Remove from my collection
                  </ButtonCollection>
                ) : (
                  <ButtonCollection onClick={addAlbumToCollection}>
                    Add to my collection
                  </ButtonCollection>
                )}

                {isAlbumInUserWishlist ? (
                  <ButtonWishlist
                    // $marginTop="1.5em"
                    onClick={removeAlbumFromWishlist}
                  >
                    Remove from my wishlist
                  </ButtonWishlist>
                ) : (
                  <ButtonWishlist
                    // $marginTop="1.5em"
                    onClick={addAlbumToWishlist}
                  >
                    Add to my wishlist
                  </ButtonWishlist>
                )}

                {/* show 'Remove from database' button only if user uploaded this album to the database himself */}
                {album.uploadedBy === currentUser.uid && (
                  <ButtonRemove
                    // $marginTop="1.5em"
                    onClick={removeAlbumFromDatabase}
                  >
                    Remove from database
                  </ButtonRemove>
                )}
              </>
            ) : (
              <>
                <StyledParagraph>
                  If you want to add this album to your collection or wishlist,
                  please log in or make an account first:
                </StyledParagraph>
                <ButtonSignup as={Link} to={ROUTES.SIGNUP}>
                  Sign up
                </ButtonSignup>
                <ButtonLogin as={Link} to={ROUTES.LOGIN}>
                  Log in
                </ButtonLogin>
              </>
            )}
          </>
        )}
      </Container>
    </MainGrid>
  )
}

export default AlbumDetails

AlbumDetails.propTypes = {
  setIsAlbumRemovedFromDatabase: PropTypes.func.isRequired,
}

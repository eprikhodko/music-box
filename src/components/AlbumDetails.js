import PropTypes from "prop-types"

import styled from "styled-components"

import { useContext, useEffect } from "react"
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
import { HeroButton, ButtonAlbum } from "./shared/Button"

import * as ROUTES from "../constants/routes"
import UserContext from "../context/user"

import IconImagePlaceholder from "../icons/image-placeholder-fallback.svg"

const SharedDimensionsStyle = " width: 40em; height: 40em;"
const SharedBoxShadowStyle = "box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);"

const FallbackBackgroundImage = styled.div`
  ${SharedDimensionsStyle}
  /* ${SharedBoxShadowStyle} */

  background-image: url(${IconImagePlaceholder});
  background-size: 20% auto;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #c2c2c2;
`

const AlbumCover = styled.img`
  ${SharedDimensionsStyle}
  ${SharedBoxShadowStyle}
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

function AlbumDetails({
  setIsAlbumRemovedFromDatabase,
  isAlbumInUserCollection,
  setIsAlbumInUserCollection,
  isAlbumInUserWishlist,
  setIsAlbumInUserWishlist,
}) {
  const { albumId } = useParams()
  const { albumsData, isAlbumsDataLoading } = useContext(AlbumsDataContext)

  const currentUser = useContext(UserContext)

  const history = useHistory()

  const db = getFirestore()

  const album = albumsData.find((item) => item.albumId === albumId)

  const setDisplayToNone = (e) => {
    e.target.style.display = "none"
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

  useEffect(() => {
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
    if (currentUser && setIsAlbumInUserCollection) {
      checkIfAlbumIsInUserCollection()
      checkIfAlbumIsInUserWishlist()
    }
  }, [isAlbumsDataLoading])

  // if (currentUser) checkIfAlbumIsInUserCollection()

  return (
    <>
      {!isAlbumsDataLoading && (
        <>
          <FallbackBackgroundImage>
            <AlbumCover
              src={album.albumCover}
              alt={`cover for ${album.albumCover} album`}
              onError={setDisplayToNone}
            />
          </FallbackBackgroundImage>
          <AlbumDescription>
            <h2>{album.albumName}</h2>
            <h3>{album.artist}</h3>
            <AlbumYear>Year: {album.year}</AlbumYear>
            <AlbumGenre>Genre: {album.genre}</AlbumGenre>
            {currentUser ? (
              <>
                <AlbumButtons currentUser={currentUser}>
                  {isAlbumInUserCollection ? (
                    <ButtonAlbum onClick={removeAlbumFromCollection}>
                      Remove from my collection
                    </ButtonAlbum>
                  ) : (
                    <ButtonAlbum onClick={addAlbumToCollection}>
                      Add to my collection
                    </ButtonAlbum>
                  )}

                  {isAlbumInUserWishlist ? (
                    <ButtonAlbum
                      $marginTop="1.5em"
                      onClick={removeAlbumFromWishlist}
                    >
                      Remove from my wishlist
                    </ButtonAlbum>
                  ) : (
                    <ButtonAlbum
                      $marginTop="1.5em"
                      onClick={addAlbumToWishlist}
                    >
                      Add to my wishlist
                    </ButtonAlbum>
                  )}

                  {/* show 'Remove from database' button only if user uploaded this album to the database himself */}
                  {album.uploadedBy === currentUser.uid && (
                    <ButtonAlbum
                      $marginTop="1.5em"
                      onClick={removeAlbumFromDatabase}
                    >
                      Remove from database
                    </ButtonAlbum>
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

AlbumDetails.propTypes = {
  setIsAlbumRemovedFromDatabase: PropTypes.func.isRequired,
  isAlbumInUserCollection: PropTypes.bool,
  setIsAlbumInUserCollection: PropTypes.func.isRequired,
  isAlbumInUserWishlist: PropTypes.bool.isRequired,
  setIsAlbumInUserWishlist: PropTypes.func.isRequired,
}

AlbumDetails.defaultProps = {
  isAlbumInUserCollection: false,
}

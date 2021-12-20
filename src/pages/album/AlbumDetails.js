import PropTypes from "prop-types"

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

import AlbumsDataContext from "../../context/albumsData"

import * as ROUTES from "../../constants/routes"
import UserContext from "../../context/user"

import { MainGrid } from "../../components/shared/Containers"
import {
  Container,
  AlbumCoverImageContainer,
  AlbumCoverImage,
  AlbumTitle,
  AlbumArtist,
  AlbumGenre,
  AlbumYear,
  ButtonCollection,
  ButtonWishlist,
  ButtonLogin,
  ButtonRemove,
  ButtonSignup,
  StyledParagraph,
} from "./AlbumDetailsElements"

function AlbumDetails({ setIsAlbumRemovedFromDatabase }) {
  const { albumsData, isAlbumsDataLoading } = useContext(AlbumsDataContext)

  const currentUser = useContext(UserContext)

  const [isAlbumInUserCollection, setIsAlbumInUserCollection] = useState(false)
  const [isAlbumInUserWishlist, setIsAlbumInUserWishlist] = useState(false)

  const history = useHistory()

  const db = getFirestore()

  // take album id from url
  const { albumId } = useParams()
  // find album in albumsData array
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
    // if current user authorized, run functions below
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
            <AlbumCoverImageContainer>
              <AlbumCoverImage
                src={album.albumCover}
                alt={`album cover for ${album.albumName}`}
              />
            </AlbumCoverImageContainer>
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
                  <ButtonWishlist onClick={removeAlbumFromWishlist}>
                    Remove from my wishlist
                  </ButtonWishlist>
                ) : (
                  <ButtonWishlist onClick={addAlbumToWishlist}>
                    Add to my wishlist
                  </ButtonWishlist>
                )}

                {/* show 'Remove from database' button only if user uploaded this album to the database himself */}
                {album.uploadedBy === currentUser.uid && (
                  <ButtonRemove onClick={removeAlbumFromDatabase}>
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

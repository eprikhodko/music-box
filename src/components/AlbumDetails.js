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

import IconImagePlaceholder from "../icons/image-placeholder-fallback.svg"

import { MainGrid } from "./shared/Containers"

const SharedDimensionsStyle = "width: 35em; height: 35em;"
const SharedBoxShadowStyle = "box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);"

const Container = styled.div`
  margin-top: 1em;
  grid-column: 2/-2;

  display: grid;
  /* justify-items: center; */

  grid-template-columns: auto minmax(0, 35em) auto;
  /* grid-template-rows: minmax(0, 35em); */
`

export const FallbackBackgroundImage = styled.div`
  /* ${SharedDimensionsStyle} */
  /* ${SharedBoxShadowStyle} */

  background-image: url(${IconImagePlaceholder});
  background-size: 20% auto;
  /* background-size: 100%; */
  background-repeat: no-repeat;
  background-position: center;
  background-color: #c2c2c2;

  width: 100%;
  max-width: 35em;

  grid-column: 2/-2;

  &:before {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`

// export const AlbumCover = styled.div`
//   background-image: url(${({ albumCoverUrl }) => albumCoverUrl}),
//     url(${IconImagePlaceholder});

//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
//   background-color: #c2c2c2;
//   justify-self: stretch;
//   /* margin: 0 auto; */

//   ${SharedBoxShadowStyle}

//   &:before {
//     content: "";
//     display: block;
//     padding-bottom: 100%;
//   }

//   @media (min-width: 600px) {
//     max-width: 35em;
//   }
// `

const AlbumCover = styled.img`
  grid-column: 2/-2;

  width: 100%;
  max-width: 35em;
  /* height: 100%; */
`

const AlbumTitle = styled.h1`
  grid-column: 2/-2;

  font-size: 2.5rem;
  color: #000;
  text-align: center;

  margin-top: 2em;

  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }
`

const AlbumArtist = styled.h2`
  grid-column: 2/-2;

  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  text-align: center;

  /* margin-top: 2em; */

  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }
`

const AlbumYear = styled.p`
  grid-column: 2/-2;

  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  color: #000;
  text-align: center;

  margin: 0;
  margin-top: 1em;
`

const AlbumGenre = styled.p`
  grid-column: 2/-2;

  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  color: #000;
  text-align: center;

  margin-top: 0.2em;
  margin-bottom: 2em;
`

const StyledParagraph = styled.p`
  grid-column: 2/-2;

  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  color: #000;
  text-align: center;

  margin-top: 0.5em;
`

const ButtonLink = styled(ButtonPrimary)`
  grid-column: 2/-2;

  margin-top: 1.5em;
  justify-self: center;

  /* @media (min-width: 600px) {
    margin-top: 2em;
  } */
`

const ButtonAlbum = styled(ButtonPrimary)`
  grid-column: 2/-2;

  /* margin-top: 1.5em; */

  /* padding: 1em 0; */
  /* min-width: 16.5em; */
  width: 16.5em;

  justify-self: center;
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

  console.log(album)
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
      <Container>
        {!isAlbumsDataLoading && (
          <>
            {/* <FallbackBackgroundImage> */}
            <AlbumCover
              // src={imgSrc ? imgSrc : fallback}
              src={imgSrc || fallback}
              alt={`cover for ${album.albumName} album`}
              onError={onError}
            />
            {/* </FallbackBackgroundImage> */}
            <AlbumTitle>{album.albumName}</AlbumTitle>
            <AlbumArtist>{album.artist}</AlbumArtist>
            <AlbumYear>Year: {album.year}</AlbumYear>
            <AlbumGenre>Genre: {album.genre}</AlbumGenre>
            {currentUser ? (
              <>
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
                  <ButtonAlbum $marginTop="1.5em" onClick={addAlbumToWishlist}>
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
              </>
            ) : (
              <>
                <StyledParagraph>
                  If you want to add this album to your collection or wishlist,
                  please log in or make an account first:
                </StyledParagraph>
                {/* <AlbumButtons> */}
                <ButtonLink as={Link} to={ROUTES.SIGNUP}>
                  Sign up
                </ButtonLink>
                <ButtonLink as={Link} to={ROUTES.LOGIN}>
                  Log in
                </ButtonLink>
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

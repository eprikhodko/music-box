import PropTypes from "prop-types"

import styled from "styled-components"
import { Link } from "react-router-dom"

import { useState, useEffect, useContext } from "react"
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore"
import UserContext from "../context/user"

import * as ROUTES from "../constants/routes"

import AlbumsGrid from "./shared/grids/AlbumsGrid"
import UploadNewAlbum from "./shared/UploadNewAlbum"

import ShowMoreAndBackToTopButtons from "./shared/ShowMoreAndBackToTopButtons"
import { StyledParagraph } from "./shared/TypographyElements"

const StyledLink = styled(Link)`
  color: #000;
`

function MyUploadsContent({ componentsCount, setComponentsCount }) {
  const currentUser = useContext(UserContext)

  const [albumsUploadedByCurrentUser, setAlbumsUploadedByCurrentUser] =
    useState([])
  const [albumsSlice, setAlbumsSlice] = useState({
    start: 0,
    end: 11,
  })

  useEffect(() => {
    const fetchAlbumsUploadedByCurrentUser = async () => {
      const db = getFirestore()

      const albumsRef = collection(db, "albums")
      const q = query(
        albumsRef,
        where("uploadedBy", "==", currentUser.uid),
        orderBy("dateCreated", "desc"),
        limit(100)
      )
      const querySnapshot = await getDocs(q)

      // map through albums and return new array with albums data
      const albumsDocs = querySnapshot.docs.map((doc) => doc.data())

      // write albums to the state
      setAlbumsUploadedByCurrentUser(albumsDocs)
    }
    // fetch albums which are in user collection
    if (currentUser) fetchAlbumsUploadedByCurrentUser()

    // fetch albums in user collection after albumsData loaded to the state
  }, [currentUser])
  return (
    <>
      <h2>My Uploads</h2>
      {albumsUploadedByCurrentUser.length > 0 ? (
        <>
          {/* use component composition here, and pass <UploadNewAlbum /> as {children} to the <AlbumsGrid /> */}
          <AlbumsGrid
            albumsSlice={albumsSlice}
            albumsData={albumsUploadedByCurrentUser}
            componentsCount={componentsCount}
            setComponentsCount={setComponentsCount}
          >
            <UploadNewAlbum />
          </AlbumsGrid>
          {/* Show 'Show more' button only if there is more then 11 albums in user collection */}
          <ShowMoreAndBackToTopButtons
            albumsSlice={albumsSlice}
            setAlbumsSlice={setAlbumsSlice}
            albumsData={albumsUploadedByCurrentUser}
            componentsCount={componentsCount}
          />
        </>
      ) : (
        <StyledParagraph>
          There is no albums in your uploads yet. Would you like to{" "}
          <StyledLink to={ROUTES.UPLOAD}>upload</StyledLink> a new one?
        </StyledParagraph>
      )}
    </>
  )
}

export default MyUploadsContent

MyUploadsContent.propTypes = {
  componentsCount: PropTypes.number,
  setComponentsCount: PropTypes.func.isRequired,
}

MyUploadsContent.defaultProps = {
  componentsCount: "",
}

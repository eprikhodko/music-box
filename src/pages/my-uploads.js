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
import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import AlbumsGrid from "../components/shared/grids/AlbumsGrid"
import UploadNewAlbum from "../components/shared/UploadNewAlbum"
import { ContainerMain, Content } from "../components/shared/Containers"
import ScrollToTop from "../components/utils/ScrollToTop"
import ShowMoreAndBackToTopButtons from "../components/shared/ShowMoreAndBackToTopButtons"

const StyledParagraph = styled.p`
  font-size: 2.5rem;
  text-align: center;
  width: 40em;
`

const StyledLink = styled(Link)`
  color: #000;
`

function MyUploads({ componentsCount, setComponentsCount }) {
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
      <ScrollToTop />
      <ContainerMain>
        <Header />
        <main>
          <Content flexDirection="column" alignItems="center" $marginTop="5em">
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
          </Content>
        </main>
        <Footer />
      </ContainerMain>
    </>
  )
}

export default MyUploads

MyUploads.propTypes = {
  componentsCount: PropTypes.number,
  setComponentsCount: PropTypes.func.isRequired,
}

MyUploads.defaultProps = {
  componentsCount: "",
}

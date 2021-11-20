import styled from "styled-components"
import { Link } from "react-router-dom"

import { useState, useEffect, useContext } from "react"
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  //   orderBy,
  limit,
} from "firebase/firestore"
import UserContext from "../context/user"
import AlbumsDataContext from "../context/albumsData"

import * as ROUTES from "../constants/routes"
import Footer from "../components/Footer"
import Header from "../components/Header"
import CollectionGrid from "../components/shared/grids/CollectionGrid"
import { Button } from "../components/shared/Button"
import {
  ContainerMain,
  Content,
  PageBody,
} from "../components/shared/Containers"

const StyledParagraph = styled.p`
  font-size: 2.5rem;
  text-align: center;
  width: 40em;
`

const StyledLink = styled(Link)`
  color: #000;
`

function MyUploads() {
  const currentUser = useContext(UserContext)
  const { albumsData } = useContext(AlbumsDataContext)

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
        // orderBy("dateCreated", "desc"),
        limit(100)
      )
      //   const q = query(albumsRef, orderBy("dateAdded", "desc"), limit(100))

      const querySnapshot = await getDocs(q)
      console.log(querySnapshot)

      // map through albums and return new array with albums data
      const albumsDocs = querySnapshot.docs.map((doc) => doc.data())
      console.log(albumsDocs)

      // write sorted albums to the state
      // return albumsIDsList
      setAlbumsUploadedByCurrentUser(albumsDocs)
    }
    // fetch albums which are in user collection
    if (currentUser && albumsData) fetchAlbumsUploadedByCurrentUser()

    // fetch albums in user collection after albumsData loaded to the state
  }, [albumsData])

  const showMore = () => {
    setAlbumsSlice((prevSlice) => ({ ...prevSlice, end: prevSlice.end + 8 }))
  }
  return (
    <ContainerMain>
      <Header />
      <PageBody>
        <Content flexDirection="column" alignItems="center" $marginTop="5em">
          <h2>My Uploads</h2>
          {albumsUploadedByCurrentUser.length > 0 ? (
            <>
              <CollectionGrid
                albumsSlice={albumsSlice}
                albumsData={albumsUploadedByCurrentUser}
              />
              {/* Show 'Show more' button only if there is more then 11 albums in user collection */}
              {albumsUploadedByCurrentUser.length > 11 && (
                <Button marginTop="2em" onClick={showMore}>
                  Show more
                </Button>
              )}
            </>
          ) : (
            <StyledParagraph>
              There is no albums in your collection yet. Would you like to add
              some from <StyledLink to={ROUTES.CATALOG}>catalog</StyledLink> or
              maybe <StyledLink to={ROUTES.UPLOAD}>upload</StyledLink> a new
              album yourself?
            </StyledParagraph>
          )}
        </Content>
      </PageBody>
      <Footer />
    </ContainerMain>
  )
}

export default MyUploads

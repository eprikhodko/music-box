import styled from "styled-components"
import { Link } from "react-router-dom"

import { useState, useEffect, useContext } from "react"
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
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

function Collection() {
  const currentUser = useContext(UserContext)
  const { albumsData } = useContext(AlbumsDataContext)

  const [albumsInUserCollection, setAlbumsInUserCollection] = useState([])
  const [albumsSlice, setAlbumsSlice] = useState({
    start: 0,
    end: 11,
  })

  const fetchAlbumsInUserCollection = async () => {
    const db = getFirestore()
    // const querySnap = await getDocs(
    //   collection(db, "users", currentUser.uid, "albumsInUserCollection")
    // )
    // const docsData = querySnap.docs.map((doc) => doc.data())

    const albumsRef = collection(
      db,
      "users",
      currentUser.uid,
      "albumsInUserCollection"
    )
    const q = query(albumsRef, orderBy("dateAdded", "desc"), limit(100))
    const querySnapshot = await getDocs(q)

    // map through albums and return new array with albums ids
    const albumsIDsList = querySnapshot.docs.map((doc) => doc.data().albumId)

    // create new filteredAlbums array which consists of albums which ids match ids in albumsIDsList array
    const filteredAlbums = albumsData.filter((album) =>
      // run code below for each album in albumsData array and return only those albums which ids match with ids in albumsIDsList
      // for each album in albumsData array test if this album.albumId is in provided albumsIDsList array
      // if true, then .includes() method will return true, and therefore .filter() will return this album to the filteredAlbums array
      // .includes() method takes albumsIDsList and compare each id inside albumsIDsList with provided album.albumId
      // if album.albumId matches with id inside albumsIDsList, then .includes() will return 'true'
      // then if .includes() method returned 'true', the album inside albumsData which albumId matched with id in albumsIDsList will appear in filteredAlbums array
      albumsIDsList.includes(album.albumId)
    )

    // sort albums according to provided sorting array
    const sortFunc = (a, b) => {
      const sortOrderArray = albumsIDsList
      return (
        sortOrderArray.indexOf(a.albumId) - sortOrderArray.indexOf(b.albumId)
      )
    }
    // sort albums
    const sortedAlbums = filteredAlbums.sort(sortFunc)

    // write sorted albums to the state
    setAlbumsInUserCollection(sortedAlbums)
  }

  useEffect(() => {
    // fetch albums which are in user collection
    if (currentUser && albumsData) fetchAlbumsInUserCollection()

    // fetch albums in user collection after albumsData loaded to the state
  }, [albumsData])

  const ShowMore = () => {
    setAlbumsSlice((prevSlice) => ({ ...prevSlice, end: prevSlice.end + 8 }))
  }
  return (
    <ContainerMain>
      <Header />
      <PageBody>
        <Content flexDirection="column" alignItems="center" $marginTop="5em">
          <h2>Collection</h2>
          {albumsInUserCollection.length > 0 ? (
            <>
              <CollectionGrid
                albumsSlice={albumsSlice}
                albumsData={albumsInUserCollection}
              />
              {/* Show 'Show more' button only if there is more then 11 albums in user collection */}
              {albumsInUserCollection.length > 11 && (
                <Button marginTop="2em" onClick={ShowMore}>
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

export default Collection

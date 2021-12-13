import PropTypes from "prop-types"
import styled from "styled-components"

import { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"

import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore"

import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import AlbumsGrid from "../components/shared/grids/AlbumsGrid"
import UploadNewAlbum from "../components/shared/UploadNewAlbum"
import { ContainerMain, Content } from "../components/shared/Containers"

import * as ROUTES from "../constants/routes"

import UserContext from "../context/user"
import AlbumsDataContext from "../context/albumsData"
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

function Wishlist({ componentsCount, setComponentsCount }) {
  const currentUser = useContext(UserContext)
  const { albumsData } = useContext(AlbumsDataContext)

  const [albumsInUserWishlist, setAlbumsInUserWishlist] = useState([])

  const [albumsSlice, setAlbumsSlice] = useState({
    start: 0,
    end: 11,
  })

  useEffect(() => {
    const fetchAlbumsInUserWishlist = async () => {
      const db = getFirestore()

      const albumsRef = collection(
        db,
        "users",
        currentUser.uid,
        "albumsInUserWishlist"
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
      setAlbumsInUserWishlist(sortedAlbums)
    }
    // fetch albums which are in user collection
    if (currentUser && albumsData) fetchAlbumsInUserWishlist()

    // fetch albums in user wishlist after albumsData loaded to the state
  }, [albumsData])

  return (
    <>
      <ScrollToTop />
      <ContainerMain>
        <Header />
        <main>
          <Content flexDirection="column" alignItems="center" $marginTop="5em">
            <h2>Wishlist</h2>
            {albumsInUserWishlist.length > 0 ? (
              <>
                {/* use component composition here, and pass <UploadNewAlbum /> as {children} to the <AlbumsGrid /> */}
                <AlbumsGrid
                  albumsSlice={albumsSlice}
                  albumsData={albumsInUserWishlist}
                  setComponentsCount={setComponentsCount}
                >
                  <UploadNewAlbum />
                </AlbumsGrid>
                {/* Show 'Show more' button only if there is more then 11 albums in user wishlist */}
                <ShowMoreAndBackToTopButtons
                  albumsSlice={albumsSlice}
                  setAlbumsSlice={setAlbumsSlice}
                  albumsData={albumsInUserWishlist}
                  componentsCount={componentsCount}
                />
              </>
            ) : (
              <StyledParagraph>
                There is no albums in your wishlist yet. Would you like to add
                some from <StyledLink to={ROUTES.CATALOG}>catalog</StyledLink>{" "}
                or maybe <StyledLink to={ROUTES.UPLOAD}>upload</StyledLink> a
                new album yourself?
              </StyledParagraph>
            )}
          </Content>
        </main>
        <Footer />
      </ContainerMain>
    </>
  )
}

export default Wishlist

Wishlist.propTypes = {
  componentsCount: PropTypes.number,
  setComponentsCount: PropTypes.func.isRequired,
}

Wishlist.defaultProps = {
  componentsCount: "",
}

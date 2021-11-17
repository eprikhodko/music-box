import { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"

import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore"

import useAuth from "./hooks/useAuth"

import * as ROUTES from "./constants/routes"

// import pages
import Catalog from "./pages/catalog"
import Home from "./pages/home"
import Search from "./pages/search"
import Login from "./pages/login"
import SignUp from "./pages/signup"
import NotFound from "./pages/not-found"
import Upload from "./pages/upload"
import Album from "./pages/album"
import Profile from "./pages/profile"
import Collection from "./pages/collection"
import Wishlist from "./pages/wishlist"

// import context
import AlbumsDataContext from "./context/albumsData"
import UserContext from "./context/user"

function App() {
  const currentUser = useAuth()

  const [albumsData, setAlbumsData] = useState([])
  const [isAlbumsDataLoading, setIsAlbumsDataLoading] = useState(true)
  const [albumsInUserCollection, setAlbumsInUserCollection] = useState([])
  const [albumsInUserWishlist, setAlbumsInUserWishlist] = useState([])

  const [isAlbumInUserCollection, setIsAlbumInUserCollection] = useState(false)
  const [isAlbumInUserWishlist, setIsAlbumInUserWishlist] = useState(false)
  const [isUploadSuccessful, setIsUploadSuccessful] = useState(false)
  const [isAlbumRemovedFromDatabase, setIsAlbumRemovedFromDatabase] =
    useState(false)
  const albumsValue = { albumsData, isAlbumsDataLoading }

  useEffect(() => {
    const fetchAlbumsData = async () => {
      const db = getFirestore()

      const albumsRef = collection(db, "albums")
      const q = query(albumsRef, orderBy("dateCreated", "desc"), limit(200))
      const querySnapshot = await getDocs(q)
      const docsData = querySnapshot.docs.map((doc) => doc.data())

      setAlbumsData(docsData)
      setIsAlbumsDataLoading(false)
    }
    // fetch albums data if user uploaded new album
    // if we won't fetch albums data after user uploaded new album, user should have manually refresh page to trigger useEffect hook to fetch albums data so that albums on the page will be updated too
    fetchAlbumsData()
  }, [isUploadSuccessful, isAlbumRemovedFromDatabase])

  useEffect(() => {
    // fetch array of IDs of albums in user collection
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

    // fetch albums which are in user collection
    if (currentUser && albumsData) fetchAlbumsInUserCollection()

    // fetch albums in user collection after albumsData loaded to the state
  }, [albumsData, isAlbumInUserCollection, currentUser])

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
  }, [albumsData, isAlbumInUserWishlist, currentUser])

  return (
    // <Router>
    <UserContext.Provider value={currentUser}>
      <AlbumsDataContext.Provider value={albumsValue}>
        <Switch>
          <Route path={ROUTES.HOME} exact>
            <Home
              setIsAlbumRemovedFromDatabase={setIsAlbumRemovedFromDatabase}
            />
          </Route>
          <Route path={ROUTES.CATALOG} component={Catalog} />
          <Route path={ROUTES.SEARCH} component={Search} />
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGNUP} component={SignUp} />
          <Route path={ROUTES.UPLOAD}>
            <Upload
              isUploadSuccessful={isUploadSuccessful}
              setIsUploadSuccessful={setIsUploadSuccessful}
            />
          </Route>
          <Route path={ROUTES.ALBUM}>
            <Album
              setIsAlbumRemovedFromDatabase={setIsAlbumRemovedFromDatabase}
              isAlbumInUserCollection={isAlbumInUserCollection}
              setIsAlbumInUserCollection={setIsAlbumInUserCollection}
              isAlbumInUserWishlist={isAlbumInUserWishlist}
              setIsAlbumInUserWishlist={setIsAlbumInUserWishlist}
            />
          </Route>
          <Route path={ROUTES.PROFILE}>
            <Profile
              albumsInUserCollection={albumsInUserCollection}
              albumsInUserWishlist={albumsInUserWishlist}
            />
          </Route>
          <Route path={ROUTES.COLLECTION}>
            <Collection albumsInUserCollection={albumsInUserCollection} />
          </Route>
          <Route path={ROUTES.WISHLIST}>
            <Wishlist albumsInUserWishlist={albumsInUserWishlist} />
          </Route>

          <Route path={ROUTES.NOT_FOUND} component={NotFound} />
        </Switch>
      </AlbumsDataContext.Provider>
    </UserContext.Provider>

    // </Router>
  )
}

export default App

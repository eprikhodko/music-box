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
import Home from "./pages/home"
import Catalog from "./pages/catalog"
import Search from "./pages/search"
import Login from "./pages/login"
import SignUp from "./pages/signup"
import NotFound from "./pages/not-found"
import Upload from "./pages/upload"
import Album from "./pages/album"
import Profile from "./pages/profile"
import Collection from "./pages/collection"
import Wishlist from "./pages/wishlist"
import MyUploads from "./pages/my-uploads"

// import context
import AlbumsDataContext from "./context/albumsData"
import UserContext from "./context/user"

function App() {
  const currentUser = useAuth()

  const [albumsData, setAlbumsData] = useState([])
  const [isAlbumsDataLoading, setIsAlbumsDataLoading] = useState(true)

  const [componentsCount, setComponentsCount] = useState(null)

  const [isUploadSuccessful, setIsUploadSuccessful] = useState(false)
  const [isAlbumRemovedFromDatabase, setIsAlbumRemovedFromDatabase] =
    useState(false)

  const albumsValue = { albumsData, isAlbumsDataLoading }

  useEffect(() => {
    const fetchAlbumsData = async () => {
      const db = getFirestore()

      const albumsRef = collection(db, "albums")
      const q = query(albumsRef, orderBy("dateCreated", "desc"), limit(500))
      const querySnapshot = await getDocs(q)
      const docsData = querySnapshot.docs.map((doc) => doc.data())

      setAlbumsData(docsData)
      setIsAlbumsDataLoading(false)
    }
    // fetch albums data after user uploaded new album
    // if we won't fetch albums data after user uploaded new album, user should have manually refresh page to trigger useEffect hook to fetch albums data so that albums on the page will be updated too
    fetchAlbumsData()
  }, [isUploadSuccessful, isAlbumRemovedFromDatabase])

  return (
    <UserContext.Provider value={currentUser}>
      <AlbumsDataContext.Provider value={albumsValue}>
        <Switch>
          <Route path={ROUTES.HOME} exact>
            <Home
              setIsAlbumRemovedFromDatabase={setIsAlbumRemovedFromDatabase}
            />
          </Route>
          <Route path={ROUTES.CATALOG}>
            <Catalog
              componentsCount={componentsCount}
              setComponentsCount={setComponentsCount}
            />
          </Route>
          <Route path={ROUTES.SEARCH}>
            <Search
              componentsCount={componentsCount}
              setComponentsCount={setComponentsCount}
            />
          </Route>

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
            />
          </Route>
          <Route path={ROUTES.PROFILE} component={Profile} />
          <Route path={ROUTES.COLLECTION}>
            <Collection
              componentsCount={componentsCount}
              setComponentsCount={setComponentsCount}
            />
          </Route>
          <Route path={ROUTES.WISHLIST}>
            <Wishlist
              componentsCount={componentsCount}
              setComponentsCount={setComponentsCount}
            />
          </Route>
          <Route path={ROUTES.MY_UPLOADS}>
            <MyUploads
              componentsCount={componentsCount}
              setComponentsCount={setComponentsCount}
            />
          </Route>
          <Route path={ROUTES.NOT_FOUND} component={NotFound} />
        </Switch>
      </AlbumsDataContext.Provider>
    </UserContext.Provider>
  )
}

export default App

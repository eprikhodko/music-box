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

  const [isUploadSuccessful, setIsUploadSuccessful] = useState(false)
  const albumsValue = { albumsData, isAlbumsDataLoading }

  const fetchAlbumsData = async () => {
    const db = getFirestore()

    const albumsRef = collection(db, "albums")
    const q = query(albumsRef, orderBy("dateCreated", "desc"), limit(500))
    const querySnapshot = await getDocs(q)
    const docsData = querySnapshot.docs.map((doc) => doc.data())

    setAlbumsData(docsData)
    setIsAlbumsDataLoading(false)
  }

  useEffect(() => {
    fetchAlbumsData()
  }, [isUploadSuccessful])

  return (
    // <Router>
    <UserContext.Provider value={currentUser}>
      <AlbumsDataContext.Provider value={albumsValue}>
        <Switch>
          <Route path={ROUTES.HOME} exact>
            <Home />
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
          <Route path={ROUTES.ALBUM} component={Album} />
          <Route path={ROUTES.PROFILE} component={Profile} />
          <Route path={ROUTES.COLLECTION} component={Collection} />
          <Route path={ROUTES.WISHLIST} component={Wishlist} />

          <Route path={ROUTES.NOT_FOUND} component={NotFound} />
        </Switch>
      </AlbumsDataContext.Provider>
    </UserContext.Provider>

    // </Router>
  )
}

export default App

import { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import * as ROUTES from "./constants/routes"

// pages
import Catalog from "./pages/catalog"
import Home from "./pages/home"
import Search from "./pages/search"
import Login from "./pages/login"
import SignUp from "./pages/signup"
import NotFound from "./pages/not-found"
import Upload from "./pages/upload"
import Album from "./pages/album"
import Profile from "./pages/profile"

// context
import AlbumsDataContext from "./context/albumsData"
import UserContext from "./context/user"

function App() {
  const currentUser = true

  const [albumsData, setAlbumsData] = useState([])
  const [isAlbumsDataLoading, setIsAlbumsDataLoading] = useState(true)
  const albumsValue = { albumsData, isAlbumsDataLoading }

  const url =
    "https://raw.githubusercontent.com/eprikhodko/music-box-images/main/albums-data.json"

  const fetchAlbumsData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setAlbumsData(data)
    setIsAlbumsDataLoading(false)
  }

  useEffect(() => {
    fetchAlbumsData()
  }, [])

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
          <Route path={ROUTES.UPLOAD} component={Upload} />
          <Route path={ROUTES.ALBUM} component={Album} />
          <Route path={ROUTES.PROFILE} component={Profile} />
          <Route path={ROUTES.NOT_FOUND} component={NotFound} />
        </Switch>
      </AlbumsDataContext.Provider>
    </UserContext.Provider>

    // </Router>
  )
}

export default App

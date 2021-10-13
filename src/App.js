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
import AlbumsDataContext from "./context/albumsData"

function App() {
  const [albumsData, setAlbumsData] = useState([])
  const albumsValue = { albumsData, setAlbumsData }

  const url =
    "https://raw.githubusercontent.com/eprikhodko/music-box-images/main/albums-data.json"

  const fetchAlbumsData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setAlbumsData(data)
  }

  useEffect(() => {
    fetchAlbumsData()
  }, [])

  return (
    // <Router>
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
        <Route path={ROUTES.NOT_FOUND} component={NotFound} />
      </Switch>
    </AlbumsDataContext.Provider>

    // </Router>
  )
}

export default App

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import * as ROUTES from "./constants/routes"

// pages
import Catalog from "./pages/catalog"
import Home from "./pages/home"
import Search from "./pages/search"
import Login from "./pages/login"
import SignUp from "./pages/signup"
import NotFound from "./pages/not-found"

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.HOME} exact>
          <Home />
        </Route>
        <Route path={ROUTES.CATALOG} component={Catalog} />
        <Route path={ROUTES.SEARCH} component={Search} />
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.SIGNUP} component={SignUp} />
        <Route path={ROUTES.NOT_FOUND} component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App

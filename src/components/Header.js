import { useState } from "react"

import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"

function Header() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    console.log("search submitted")
  }

  console.log(searchQuery)

  return (
    <header>
      <div>
        <Link to={ROUTES.HOME}>
          <h1>Music Box</h1>
        </Link>

        <form onSubmit={handleSearchSubmit}>
          <label htmlFor="search input">
            Search
            <input type="text" value={searchQuery} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <nav>
          <ul>
            <li>
              <Link to={ROUTES.HOME} aria-label="Home">
                Home
              </Link>
            </li>
            <li>
              <Link to={ROUTES.CATALOG} aria-label="Catalog">
                Catalog
              </Link>
            </li>
            <li>
              <Link to={ROUTES.SEARCH} aria-label="Search">
                Search
              </Link>
            </li>
            <li>
              <Link to={ROUTES.LOGIN} aria-label="Login">
                Log in
              </Link>
            </li>
            <li>
              <Link to={ROUTES.SIGNUP} aria-label="Signup">
                Sign up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

import { useState } from "react"

import styled from "styled-components"

import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"

import { ReactComponent as IconSearch } from "../icons/search_24px.svg"

// styles
const StyledHeader = styled.header`
  background-color: rosybrown;
`

const Logo = styled.h1`
  margin: 0;
`

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
    <StyledHeader>
      <div>
        <Link to={ROUTES.HOME}>
          <Logo>Music Box</Logo>
        </Link>

        <form onSubmit={handleSearchSubmit}>
          <label htmlFor="search input">
            Search
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleChange}
            />
            <IconSearch />
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
    </StyledHeader>
  )
}

export default Header

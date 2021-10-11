import styled from "styled-components"
import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"

import { ReactComponent as IconAvatar } from "../icons/icon-avatar.svg"

const StyledNav = styled.nav`
  display: flex;
`

const Ul = styled.ul`
  display: flex;
  list-style: none;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1.8rem;
  font-weight: 500;
  padding-bottom: 0.2em;
  margin-left: 2.5em;

  &:hover {
    border-bottom: 2px solid #000;
  }
  &:focus {
    border-bottom: 2px solid #000;
    outline: 3px solid transparent;
  }
`

const UserAvatar = styled.div`
  margin-left: 2.5em;
`

const Avatar = styled(IconAvatar)`
  &:hover circle {
    fill: #333;
  }

  &:hover path {
    fill: #dadada;
  }
`

const currentUser = false

function Nav() {
  // return navigation for anonymous user
  return !currentUser ? (
    <StyledNav>
      <Ul aria-label="Header navigation" role="navigation">
        <li>
          <NavLink to={ROUTES.HOME}>Home</NavLink>
        </li>

        <li>
          <NavLink to={ROUTES.CATALOG}>Catalog</NavLink>
        </li>

        <li>
          <NavLink to={ROUTES.SEARCH}>Search</NavLink>
        </li>

        <li>
          <NavLink to={ROUTES.LOGIN}>Log in</NavLink>
        </li>

        <li>
          <NavLink to={ROUTES.SIGNUP}>Sign up</NavLink>
        </li>
      </Ul>
    </StyledNav>
  ) : (
    // return navigation for authorized user
    <StyledNav>
      <Ul aria-label="Header navigation" role="navigation">
        <li>
          <NavLink to={ROUTES.HOME}>Home</NavLink>
        </li>

        <li>
          <NavLink to={ROUTES.CATALOG}>Catalog</NavLink>
        </li>

        <li>
          <NavLink to={ROUTES.SEARCH}>Search</NavLink>
        </li>

        <li>
          <NavLink to={ROUTES.UPLOAD}>Upload</NavLink>
        </li>

        <li>
          <NavLink to={ROUTES.HOME}>Sign out</NavLink>
        </li>
      </Ul>
      <UserAvatar>
        <Link to={ROUTES.PROFILE}>
          <Avatar />
        </Link>
      </UserAvatar>
    </StyledNav>
  )
}

export default Nav

import PropTypes from "prop-types"
import styled from "styled-components"
import { useContext } from "react"

import { Link } from "react-router-dom"
import { getAuth, signOut } from "firebase/auth"
import firebaseApp from "../../lib/firebase"

import * as ROUTES from "../../constants/routes"
import { navLinksDataAnonymous, navLinksDataRegistered } from "./NavLinksData"

import UserContext from "../../context/user"

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  margin: 0;
  margin-bottom: 5em;
  padding: 0;
`

const NavLink = styled(Link)`
  color: #fff;
  font-size: 3rem;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid #000;
  }
  &:focus {
    border-bottom: 2px solid #000;
    outline: 3px solid transparent;
  }
`

function MobileNavigation({ toggleHamburgerMenuOpenOrClose }) {
  const currentUser = useContext(UserContext)
  const auth = getAuth(firebaseApp)

  const handleSignOut = async () => {
    try {
      signOut(auth)
    } catch (error) {
      console.log(error)
    }

    toggleHamburgerMenuOpenOrClose()
  }

  // create links components
  const navLinksAnonymous = navLinksDataAnonymous.map((link) => (
    <li key={link.name}>
      <NavLink to={link.path} onClick={toggleHamburgerMenuOpenOrClose}>
        {link.name}
      </NavLink>
    </li>
  ))

  const navLinksRegistered = navLinksDataRegistered.map((link) => (
    <li key={link.name}>
      <NavLink to={link.path} onClick={toggleHamburgerMenuOpenOrClose}>
        {link.name}
      </NavLink>
    </li>
  ))

  // return navigation for anonymous user
  return !currentUser ? (
    <nav>
      <NavList aria-label="Header navigation" role="navigation">
        {navLinksAnonymous}
      </NavList>
    </nav>
  ) : (
    // return navigation for authorized user
    <nav>
      <NavList aria-label="Header navigation" role="navigation">
        {navLinksRegistered}
        <li>
          <NavLink
            to={`/profile/${currentUser.displayName}`}
            onClick={toggleHamburgerMenuOpenOrClose}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.HOME} onClick={handleSignOut}>
            Sign out
          </NavLink>
        </li>
      </NavList>
    </nav>
  )
}

export default MobileNavigation

MobileNavigation.propTypes = {
  toggleHamburgerMenuOpenOrClose: PropTypes.func.isRequired,
}

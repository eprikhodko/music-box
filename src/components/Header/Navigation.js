import styled from "styled-components"
import { useContext } from "react"

import { Link } from "react-router-dom"
import { getAuth, signOut } from "firebase/auth"
import firebaseApp from "../../lib/firebase"

import { navLinksDataAnonymous, navLinksDataRegistered } from "./NavLinksData"
import * as ROUTES from "../../constants/routes"

import { ReactComponent as IconAvatar } from "../../icons/icon-avatar.svg"
import UserContext from "../../context/user"

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1.8rem;
  font-weight: 500;
  padding-bottom: 0.2em; /* <-- push link border-bottom down with padding bottom */
  margin-right: 2.5em;

  &:hover {
    border-bottom: 2px solid #000;
  }
  &:focus {
    border-bottom: 2px solid #000;
    outline: 3px solid transparent;
  }
`

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;

  & li:last-child ${NavLink} {
    margin-right: 0;
  }
`
const ContainerUserAvatar = styled.div`
  width: 3.5em;
  height: 3.5em;

  margin-left: 2.5em;
`

const Avatar = styled(IconAvatar)`
  width: 3.5em;
  height: 3.5em;

  &:hover circle {
    fill: #333;
  }

  &:hover path {
    fill: #dadada;
  }
`

const ImageAvatar = styled.div`
  width: 3.5em;
  height: 3.5em;

  background-image: url(${({ fileUrl }) => fileUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  /* border: 1px solid #000; */
  border-radius: 999px;

  &:hover {
    outline: 1px solid #000;
  }
`

function Navigation() {
  const currentUser = useContext(UserContext)
  const auth = getAuth(firebaseApp)

  const handleSignOut = async () => {
    try {
      signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }

  // create links components
  const navLinksAnonymous = navLinksDataAnonymous.map((link) => (
    <li key={link.name}>
      <NavLink to={link.path}>{link.name}</NavLink>
    </li>
  ))

  const navLinksRegistered = navLinksDataRegistered.map((link) => (
    <li key={link.name}>
      <NavLink to={link.path}>{link.name}</NavLink>
    </li>
  ))

  // return navigation for anonymous user
  return !currentUser ? (
    <StyledNav>
      <NavList aria-label="Header navigation" role="navigation">
        {navLinksAnonymous}
      </NavList>
    </StyledNav>
  ) : (
    // return navigation for authorized user
    <StyledNav>
      <NavList aria-label="Header navigation" role="navigation">
        {navLinksRegistered}

        <li>
          <NavLink to={ROUTES.HOME} onClick={handleSignOut}>
            Sign out
          </NavLink>
        </li>
      </NavList>
      <ContainerUserAvatar>
        <Link to={`/profile/${currentUser.displayName}`}>
          {currentUser?.photoURL ? (
            <ImageAvatar fileUrl={currentUser?.photoURL} />
          ) : (
            <Avatar />
          )}
        </Link>
      </ContainerUserAvatar>
    </StyledNav>
  )
}

export default Navigation

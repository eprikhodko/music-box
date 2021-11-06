import styled from "styled-components"
import { useContext } from "react"

import { Link } from "react-router-dom"
import { getAuth, signOut } from "firebase/auth"
import firebaseApp from "../../lib/firebase"
import * as ROUTES from "../../constants/routes"

import { ReactComponent as IconAvatar } from "../../icons/icon-avatar.svg"
import UserContext from "../../context/user"

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

  border: 1px solid #000;
  border-radius: 999px;

  &:hover {
    outline: 1px solid #000;
  }
`

function Nav() {
  const currentUser = useContext(UserContext)
  const auth = getAuth(firebaseApp)

  const handleSignOut = async () => {
    try {
      signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }

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
          <NavLink to={ROUTES.HOME} onClick={handleSignOut}>
            Sign out
          </NavLink>
        </li>
      </Ul>
      <ContainerUserAvatar>
        <Link to={`profile/${currentUser.displayName}`}>
          {currentUser?.photoURL ? (
            <ImageAvatar fileUrl={currentUser?.photoURL} />
          ) : (
            <Avatar />
          )}
          {/* <Avatar /> */}
        </Link>
      </ContainerUserAvatar>
    </StyledNav>
  )
}

export default Nav

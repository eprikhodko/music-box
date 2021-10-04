import styled from "styled-components"
import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"

const Ul = styled.ul`
  display: flex;
  list-style: none;
`

const Li = styled.li`
  margin-left: 2.5em;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1.8rem;
  font-weight: 500;
  padding-bottom: 0.2em;
  &:hover {
    border-bottom: 2px solid #000;
  }
`

function Nav() {
  return (
    <nav>
      <Ul aria-label="Header navigation" role="navigation">
        <Li>
          <NavLink to={ROUTES.HOME}>Home</NavLink>
        </Li>

        <Li>
          <NavLink to={ROUTES.CATALOG}>Catalog</NavLink>
        </Li>

        <Li>
          <NavLink to={ROUTES.SEARCH}>Search</NavLink>
        </Li>

        <Li>
          <NavLink to={ROUTES.LOGIN}>Log in</NavLink>
        </Li>

        <Li>
          <NavLink to={ROUTES.SIGNUP}>Sign up</NavLink>
        </Li>
      </Ul>
    </nav>
  )
}

export default Nav

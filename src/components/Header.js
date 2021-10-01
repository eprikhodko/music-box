import styled from "styled-components"

import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"

import ContainerMain from "./containers/ContainerMain"
import Container from "./containers/Container"
import ContainerFlex from "./containers/ContainerFlex"
import Search from "./Search"
import Nav from "./Nav"

const Logo = styled.h1`
  margin: 0;
`

const LogoLink = styled(Link)`
  text-decoration: none;
`

function Header() {
  return (
    <header>
      <ContainerMain>
        <Container>
          <ContainerFlex>
            <LogoLink to={ROUTES.HOME}>
              <Logo>Music Box</Logo>
            </LogoLink>
            <Search />
          </ContainerFlex>

          <Nav />
        </Container>
      </ContainerMain>
    </header>
  )
}

export default Header

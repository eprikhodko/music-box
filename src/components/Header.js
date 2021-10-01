import ContainerMain from "./containers/ContainerMain"
import Container from "./containers/Container"
import ContainerFlex from "./containers/ContainerFlex"
import Logo from "./Logo"
import Search from "./Search"
import Nav from "./Nav"

function Header() {
  return (
    <header>
      <ContainerMain>
        <Container>
          <ContainerFlex>
            <Logo />
            <Search />
          </ContainerFlex>

          <Nav />
        </Container>
      </ContainerMain>
    </header>
  )
}

export default Header

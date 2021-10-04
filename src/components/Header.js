import styled from "styled-components"

import ContainerMain from "./containers/ContainerMain"
import Container from "./containers/Container"
import ContainerFlex from "./containers/ContainerFlex"
import Logo from "./Logo"
import SearchBox from "./SearchBox"
import Nav from "./Nav"

const StyledHeader = styled.header`
  height: 80px;
  max-width: 1440px;
  /* width: 90%; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-bottom: 3px solid #c2c2c2;
`

function Header() {
  return (
    <StyledHeader>
      <ContainerMain>
        <Container>
          <ContainerFlex>
            <Logo />
            <SearchBox />
          </ContainerFlex>

          <Nav />
        </Container>
      </ContainerMain>
    </StyledHeader>
  )
}

export default Header

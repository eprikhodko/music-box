import styled from "styled-components"

import ContainerMain from "../shared/containers/ContainerMain"
import Content from "../shared/containers/Content"
import ContainerFlex from "../shared/containers/ContainerFlex"
import Logo from "./Logo"
import SearchBox from "./SearchBox"
import Nav from "./Nav"

const StyledHeader = styled.header`
  padding: 0.5em 0 0.5em;
  max-width: 1440px;
  width: 90%;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  margin: 0 auto;
  border-bottom: 3px solid #c2c2c2;
`

function Header() {
  return (
    <StyledHeader>
      <ContainerMain>
        <Content headerContent>
          <ContainerFlex>
            <Logo />
            <SearchBox />
          </ContainerFlex>

          <Nav />
        </Content>
      </ContainerMain>
    </StyledHeader>
  )
}

export default Header

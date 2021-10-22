import PropTypes from "prop-types"
import styled from "styled-components"

import { ContainerMain, Content } from "../shared/Containers"
import Logo from "./Logo"
import SearchBox from "../shared/SearchBox"
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

const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
`

function Header({ noSearchBox }) {
  return (
    <StyledHeader>
      <ContainerMain>
        <Content justifyContent="space-between">
          <ContainerFlex>
            <Logo />
            {!noSearchBox && <SearchBox />}
          </ContainerFlex>

          <Nav />
        </Content>
      </ContainerMain>
    </StyledHeader>
  )
}

export default Header

Header.propTypes = {
  noSearchBox: PropTypes.bool,
}

Header.defaultProps = {
  noSearchBox: false,
}

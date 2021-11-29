import PropTypes from "prop-types"
import styled from "styled-components"

import { Content } from "../shared/Containers"
import Logo from "./Logo"
import SearchBox from "../shared/SearchBox"
import Nav from "./Nav"

const StyledHeader = styled.header`
  padding: 0.5em 0 0.5em;
  border-bottom: 3px solid #c2c2c2;
`

const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
`

function Header({ noSearchBox }) {
  return (
    <StyledHeader>
      <Content justifyContent="space-between">
        <ContainerFlex>
          <Logo />
          {/* hide search box if Header receieved 'noSearchBox' prop */}
          {!noSearchBox && <SearchBox />}
        </ContainerFlex>

        <Nav />
      </Content>
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

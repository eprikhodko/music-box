import PropTypes from "prop-types"
import styled from "styled-components"

import { useContext } from "react"
import { Content } from "../shared/Containers"
import Logo from "./Logo"
import SearchBox from "../shared/SearchBox"
import Nav from "./Nav"
import UserContext from "../../context/user"

const StyledHeader = styled.header`
  width: 100%;
  /* margin: 0 auto; */
  padding: 0.5em 0 0.5em;

  display: flex;
  justify-content: center;
  border-bottom: 3px solid #c2c2c2;
`

const HeaderContent = styled.div`
  width: 90%;
`

const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
`

function Header({ noSearchBox }) {
  const currentUser = useContext(UserContext)

  return (
    <StyledHeader>
      <HeaderContent>
        <Content justifyContent="space-between">
          <ContainerFlex>
            <Logo />
            {!noSearchBox && <SearchBox />}
          </ContainerFlex>

          {currentUser && <Nav />}
        </Content>
      </HeaderContent>
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

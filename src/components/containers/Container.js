import PropTypes from "prop-types"
import styled from "styled-components"

const StyledContainer = styled.div`
  max-width: 1160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid magenta; */
  margin: 0.2em auto;
`

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container

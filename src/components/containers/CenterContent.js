import PropTypes from "prop-types"
import styled from "styled-components"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  /* border: 1px solid; */
`

function CenterContent({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}

CenterContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CenterContent

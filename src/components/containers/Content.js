import PropTypes from "prop-types"
import styled from "styled-components"

const StyledContainer = styled.div`
  max-width: 1160px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  margin: 0 auto;
  /* border: 1px solid magenta; */
`

function Content({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Content
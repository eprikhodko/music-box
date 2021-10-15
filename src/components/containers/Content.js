import PropTypes from "prop-types"
import styled from "styled-components"

const StyledContainer = styled.div`
  max-width: 1160px;
  display: flex;
  justify-content: ${({ headerContent }) => headerContent && "space-between;"};
  /* align-items: center; */
  margin: 0 auto;
  margin-top: ${({ marginTop }) => marginTop};
  border: 1px solid magenta;
`

function Content({ children, headerContent, marginTop }) {
  return (
    <StyledContainer headerContent={headerContent} marginTop={marginTop}>
      {children}
    </StyledContainer>
  )
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
  headerContent: PropTypes.bool,
  marginTop: PropTypes.string,
}

Content.defaultProps = {
  headerContent: false,
  marginTop: "0",
}
export default Content

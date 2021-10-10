import PropTypes from "prop-types"
import styled from "styled-components"

const StyledContainerMain = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  /* border: 5px solid goldenrod; */
`

function ContainerMain({ children }) {
  return <StyledContainerMain>{children}</StyledContainerMain>
}

ContainerMain.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContainerMain

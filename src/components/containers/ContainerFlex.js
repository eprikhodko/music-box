import PropTypes from "prop-types"
import styled from "styled-components"

const StyledContainerFlex = styled.div`
  display: flex;
  align-items: center;
`

function ContainerFlex({ children }) {
  return <StyledContainerFlex>{children}</StyledContainerFlex>
}

ContainerFlex.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContainerFlex

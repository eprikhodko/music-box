import PropTypes from "prop-types"
import styled from "styled-components"

const StyledButton = styled.button`
  background-color: #fff;
`

function Button({ text }) {
  return <StyledButton> {text}</StyledButton>
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button

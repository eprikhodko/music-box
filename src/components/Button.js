import PropTypes from "prop-types"
import styled from "styled-components"

const StyledButton = styled.button`
  padding: 1.1em 3.5em;
  /* disable padding left and right if button recieve a 'hero' prop */
  padding: ${({ hero }) => hero && "1.1em 0"};
  /* set min-width if button receive a 'hero' prop */
  min-width: ${({ hero }) => hero && "169px"};
  font-size: 1.6rem;
  color: #333;
  font-weight: 500;
  background-color: transparent;
  cursor: pointer;
  border: 2px solid #333;
  border-radius: 50px;
  margin-right: 2em;
`

function Button({ text, hero }) {
  return <StyledButton hero={hero}> {text}</StyledButton>
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  hero: PropTypes.bool.isRequired,
}

export default Button

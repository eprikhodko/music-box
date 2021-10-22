import PropTypes from "prop-types"
import styled from "styled-components"

const StyledButton = styled.button`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.25;
  color: #333;

  padding: 1em 3.5em;
  /* disable padding left and right if button recieve a 'hero' prop */
  padding: ${({ hero }) => hero && "1em 0"};
  /* set min-width if button receive a 'hero' prop */
  min-width: ${({ hero }) => hero && "10.5em"};
  background-color: transparent;
  cursor: pointer;
  border: 2px solid #333;
  border-radius: 50px;
  margin-right: ${({ marginRight }) => marginRight};
  margin-top: ${({ marginTop }) => marginTop};
  &:hover {
    background-color: #333;
    color: #fff;
  }
  &:focus {
    background-color: #333;
    color: #fff;
    outline: 3px solid transparent;
    /* outline: 2px solid #333; */
    /* outline-offset: 4px; */
  }
`

function Button({ text, hero, marginTop, marginRight, onClick }) {
  return (
    <StyledButton
      hero={hero}
      marginTop={marginTop}
      marginRight={marginRight}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  hero: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  marginTop: PropTypes.string,
  marginRight: PropTypes.string,
}

Button.defaultProps = {
  hero: false,
  marginTop: "0",
  marginRight: "0",
}

export default Button

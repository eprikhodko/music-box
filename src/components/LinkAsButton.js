import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledButtonLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  padding: 0.85em 3.5em;
  /* disable padding left and right if button recieve a 'hero' prop */
  padding: ${({ hero }) => hero && "0.85em 0"};
  /* set min-width if button receive a 'hero' prop */
  min-width: ${({ hero }) => hero && "169px"};
  font-size: 1.6rem;
  color: #333;
  background-color: transparent;
  /* cursor: pointer; */
  border: 2px solid #333;
  border-radius: 50px;
  margin-right: 2em;
  &:hover {
    background-color: #333;
    color: #fff;
  }
  &:focus {
    background-color: #333;
    color: #fff;
    outline: 3px solid transparent;
  }
`

function LinkAsButton({ text, hero, to }) {
  return (
    <StyledButtonLink to={to} hero={hero}>
      {text}
    </StyledButtonLink>
  )
}

LinkAsButton.propTypes = {
  text: PropTypes.string.isRequired,
  hero: PropTypes.bool,
  to: PropTypes.string,
}

LinkAsButton.defaultProps = {
  hero: false,
  to: "#",
}

export default LinkAsButton

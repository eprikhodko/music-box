import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledButtonLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.25;
  color: #333;

  padding: 1em 3.5em;
  /* disable padding left and right if button recieve a 'hero' prop */
  padding: ${({ $hero }) => $hero && "1em 0"};
  /* set min-width if button receive a 'hero' prop */
  min-width: ${({ $hero }) => $hero && "10.5em"};
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

function ButtonLink({ text, hero, to }) {
  return (
    // here we're pass a transient $hero prop down to StyledButtonLink component
    // transient prop (https://styled-components.com/docs/api#transient-props) means that this prop will be consumed only by styled component,
    // and not by underlying component. If we'll use here regular 'hero' prop, we will get an error:
    // Warning: Received `true` for non-boolean attribute
    // this error happens because we're styling a Link component with styled components, and every prop we're pass to the styled components,
    // is passed down through to the Link component, that renders an 'a' anchor tag, and ends up passed down to that 'a' element. And ancor tag
    // cannot have 'hero' property.
    // for more info please check (https://github.com/styled-components/styled-components/issues/1198)
    <StyledButtonLink to={to} $hero={hero}>
      {text}
    </StyledButtonLink>
  )
}

ButtonLink.propTypes = {
  text: PropTypes.string.isRequired,
  hero: PropTypes.bool,
  to: PropTypes.string,
}

ButtonLink.defaultProps = {
  hero: false,
  to: "#",
}

export default ButtonLink
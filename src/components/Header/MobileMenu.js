import PropTypes from "prop-types"

import styled from "styled-components"

import { ReactComponent as IconHamburger } from "../../icons/burger.svg"
import { ReactComponent as IconCloseHamburger } from "../../icons/burger-close.svg"

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  /* border: 1px dashed white; */
`

export const HamburgerMenu = styled.div`
  background-color: #333;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  /* default value for 'right' is -100%, so that hamburger menu is hidden behind right side of the screen */
  right: ${({ showHamburgerMenu }) => (showHamburgerMenu && "0;") || "-100%;"};
  z-index: 1;

  transition: 500ms;

  display: flex;
  flex-direction: column;

  /* border: 1px solid white; */
`

export const HamburgerButton = styled.button`
  background: transparent;
  border: 0;
  padding: 0;

  cursor: pointer;
`

export const CloseHamburgerButton = styled(HamburgerButton)`
  display: flex;
  align-self: flex-end;
  margin: 1em 0;
`

export const ButtonHamburger = ({ toggleHamburgerMenuOpenOrClose }) => (
  <HamburgerButton type="button" onClick={toggleHamburgerMenuOpenOrClose}>
    <IconHamburger />
  </HamburgerButton>
)

export const ButtonCloseHamburger = ({ toggleHamburgerMenuOpenOrClose }) => (
  <CloseHamburgerButton type="button" onClick={toggleHamburgerMenuOpenOrClose}>
    <IconCloseHamburger />
  </CloseHamburgerButton>
)

ButtonHamburger.propTypes = {
  toggleHamburgerMenuOpenOrClose: PropTypes.func.isRequired,
}

ButtonCloseHamburger.propTypes = {
  toggleHamburgerMenuOpenOrClose: PropTypes.func.isRequired,
}

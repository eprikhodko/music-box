import styled from "styled-components"
import { ReactComponent as CheckboxCircleIcon } from "../../icons/check_circle_24px.svg"

import IconImagePlaceholder from "../../icons/upload-image.svg"

export const Form = styled.form`
  grid-column: 2/-2;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 35em;
  margin: 0 auto;
  margin-top: 1em;

  @media (min-width: 600px) {
    margin-top: 5em;
  }
`

export const FloatInput = styled.input`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  font-family: "Inter", sans-serif;
  padding: 0;
  padding-top: 1em;
  outline: 3px solid transparent;
  border: 0;
  border-bottom: 3px solid #c2c2c2;
  background: transparent;

  /* this transition handle hover effect duration */
  transition: all 0.3s ease-out;

  &:focus {
    border-bottom: 3px solid #000;
  }

  /* disable spinners at inputs with type="number" */
  /* https://css-tricks.com/snippets/css/turn-off-number-input-spinners/ */
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* below is a code that removes browser colored autofill input background
  https://selleo.com/til/posts/xhgzlfgcql-a-way-to-make-autofilled-inputs-background-transparent */
  &:-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: rgba(0, 0, 0, 0.7) !important;
  }

  /* remove default iOS form styling. Form inputs won't appear with rounded edges anymore */
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`

export const FloatLabel = styled.label`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  font-family: "Inter", sans-serif;
  pointer-events: none;
  position: absolute;

  transform: translate(0, 0.8em) scale(1); /* <-- read more about transform https://www.w3schools.com/css/css3_2dtransforms.asp */

  transform-origin: top left;
  transition: all 0.2s ease-out;

  transform: ${({ isNotEmpty }) =>
    isNotEmpty && "translate(0, -0.2em) scale(0.65)"};
`

export const ContainerFloatInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 35em;
  position: relative;
  margin-top: 3.5em;
  margin-top: ${({ marginTop }) => marginTop};

  &:focus-within ${FloatLabel} {
    transform: translate(0, -0.2em) scale(0.65);
  }
  &:hover ${FloatInput} {
    border-bottom: 3px solid #000;
  }
`

export const ErrorMessage = styled.p`
  text-align: center;
`

// style label element to visually represent interactive upload box
export const ImageUploadBox = styled.label`
  height: 0;
  font-size: 1.8rem;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;

  background-image: url(${({ fileUrl }) => fileUrl}),
    url(${IconImagePlaceholder});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #c2c2c2;

  /* center content inside of image upload box */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* set transition animation duration */
  will-change: transform;
  transition: background-color 450ms, transform 450ms;

  /* enable hover effect only for devices that support hover. This hover styles would not being applied for mobile devices */
  @media (hover: hover) {
    /* on hover: show pointer cursor, change background color, move image upload box up for 10px */
    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.2);
      transform: translateY(-10px);
    }
  }

  /* change image icon color on hover */
  &:hover svg path {
    fill: rgba(0, 0, 0, 0.3);
  }

  /* show focus outline at image upload box when hidden file input receives focus too */
  &:focus-within {
    outline: 2px solid #000;
    outline-offset: 3px;
  }

  padding-top: 100%;
  background: c2c2c2;
  align-self: stretch;
`

export const HiddenFileInput = styled.input`
  padding: 0;
  opacity: 0;
`

export const ContainerCheckboxes = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  margin-top: 1em;

  @media (min-width: 550px) {
    flex-direction: row;
    gap: 7em;
  }
`

export const CheckboxLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);

  display: flex;
  align-items: center;
  margin-top: 2.5em;

  cursor: pointer;
`

export const CustomCheckbox = styled(CheckboxCircleIcon)`
  width: 1.3em;
  height: 1.3em;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  margin-right: 0.5em;
  margin-bottom: 0.1em;

  path {
    fill: transparent;
  }

  * {
    transition: all 0.1s linear;
  }
`

export const HiddenCheckbox = styled.input`
  margin: 0;

  width: 20px;
  height: 20px;

  /* remove the checkbox from flow */
  position: absolute;
  /* hide it visually */
  opacity: 0;

  &:checked + ${CustomCheckbox} {
    border: none;
    path {
      fill: #333333;
    }
  }

  /* visually show focus outline when the SVG receives focus */
  &:focus + ${CustomCheckbox} {
    outline: 2px solid #000;
    outline-offset: 3px;
  }

  /* hide the focus styles for mouse users */
  &:focus:not(:focus-visible) + ${CustomCheckbox} {
    outline: none;
  }
`

export const MessageController = styled.div`
  /* property name | duration */
  transition: color 5s; /* <-- the second value defines transition duration */
  color: ${({ triggerTransition }) => (triggerTransition ? "red" : "green")};
`

export const Message = styled.p`
  opacity: ${({ showMessage }) => (showMessage ? "1" : "0")};
  transition: all 250ms linear 0.5s; /* <-- the last value defines transition-delay, so 'opacity:' changes after half a second */
  cursor: default;
`

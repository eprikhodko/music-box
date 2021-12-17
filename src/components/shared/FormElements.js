import styled from "styled-components"
import { ReactComponent as IconImagePlaceholder } from "../../icons/image-placeholder.svg"
import { ReactComponent as CheckboxCircleIcon } from "../../icons/check_circle_24px.svg"

// import IconImagePlaceholder from "../../icons/image-placeholder.svg"

export const Form = styled.form`
  grid-column: 2/-2;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 35em;
  margin: 0 auto;

  /* display: grid; */

  /* border: 2px solid goldenrod; */

  @media (min-width: 500px) {
    margin-top: 5em;
  }
`

export const FloatInput = styled.input`
  font-size: 2.5rem;
  /* font-size: 1.8rem; */
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  font-family: "Inter", sans-serif;
  /* line-height: 1.5; */
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
`

export const FloatLabel = styled.label`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  font-family: "Inter", sans-serif;
  pointer-events: none;
  position: absolute;
  /* https://www.w3schools.com/css/css3_2dtransforms.asp */
  transform: translate(0, 0.8em) scale(1);

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

  /* border: 1px solid green; */
  &:focus-within ${FloatLabel} {
    /* background-color: #fff; */
    transform: translate(0, -0.2em) scale(0.65);
  }
  &:hover ${FloatInput} {
    border-bottom: 3px solid #000;
  }
`

export const ErrorMessage = styled.p`
  text-align: center;
`

// upload form elements below

// export const ContainerUploadForm = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: ${({ marginTop }) => marginTop || "10em"};
// `

// style label element to visually represent interactive upload box
export const ImageUploadBox = styled.label`
  height: 0;
  font-size: 1.8rem;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  /* margin-top: 0.6em; */

  background-image: url(${({ fileUrl }) => fileUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  /* set image upload box dimensions and background color */
  /* width: 100%; */
  /* max-width: 31em; */
  /* height: 100%;
  max-height: 31em; */
  /* width: 31em;
  height: 31em; */
  background-color: #c2c2c2;

  /* center content inside of image upload box */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* set transition animation duration */
  will-change: transform;
  transition: background-color 450ms, transform 450ms;

  /* on hover: show pointer cursor, change background color, move image upload box up for 10px */
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
    transform: translateY(-10px);
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

  /* &:before {
    content: "";
    display: block;
    padding-bottom: 43.5%;
  }

  &:after {
    content: "";
    display: block;
    padding-bottom: 43.5%;
  } */

  /* &:before {
    content: "";
    background-image: url(${IconImagePlaceholder});
    width: 100px;
    background-repeat: no-repeat;
    background-position: center;
    display: block;
    padding-bottom: 100%;
  } */

  /* height: 0; */
  /* overflow: hidden; */
  padding-top: 100%;
  background: c2c2c2;
  /* position: relative; */
  align-self: stretch;
`

export const ImagePlaceholderIcon = styled(IconImagePlaceholder)`
  /* width: 3em;
  height: 3em; */
  /* width: 100%; */
  /* max-width: 35em; */
  /* height: 100%; */
  /* margin-bottom: 1em; */
`

export const HiddenFileInput = styled.input`
  /* height: 0; */
  padding: 0;
  opacity: 0;
`

export const ContainerCheckboxes = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  margin-top: 1em;
  /* border: 1px solid green; */
`

export const CheckboxLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);

  display: flex;
  align-items: center;
  /* margin-right: 6em; */
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
  -webkit-appearance: none;
  appearance: none;
  margin: 0;

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
  transition: color 5s; // <- the second value defines transition duration
  color: ${({ triggerTransition }) => (triggerTransition ? "red" : "green")};
`

export const Message = styled.p`
  opacity: ${({ showMessage }) => (showMessage ? "1" : "0")};
  transition: all 250ms linear 0.5s; // <- the last value defines transition-delay, so 'opacity:' changes after half a second
  cursor: default;
`

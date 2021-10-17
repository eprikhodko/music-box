import { Link } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import styled from "styled-components"

import * as ROUTES from "../constants/routes"
import CenterContent from "./containers/CenterContent"

import ContainerMain from "./containers/ContainerMain"
import Content from "./containers/Content"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 8em;
  /* border: 2px solid goldenrod; */
`

// const ContainerInput = styled.div`
//   display: flex;
//   /* flex-direction: column; */
//   /* border: 1px solid; */
// `

// const FormInput = styled.input`
//   min-width: 564px;
//   font-family: inherit;
//   color: rgba(0, 0, 0, 0.7);
//   font-size: 2.5rem;
//   font-weight: 500;
//   /* line-height: 4; */
//   background-color: transparent;
//   border: 0;
//   border-bottom: 3px solid #c2c2c2;
//   outline: 3px solid transparent;
//   /* margin: 4em 0; */
//   /* border: 1px solid green; */
//   &::placeholder {
//     /* add "opacity: 1;" rule because firefox will render input placeholder semi-transparent */
//     opacity: 1;
//     color: rgba(0, 0, 0, 0.7);
//     font-size: 2.5rem;
//     font-weight: 500;
//   }
// `

// const FormLabel = styled.label`
//   color: rgba(0, 0, 0, 0.7);
//   font-size: 2.5rem;
//   font-weight: 500;
//   margin: 0;
//   /* border: 1px solid red; */
// `

const FloatLabel = styled.label`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  font-family: "Inter", sans-serif;
  /* padding: 0 12px; */
  pointer-events: none;
  position: absolute;
  /* translate() method moves label 0 pixels to the right, and 0.1 em up from the border bottom */
  /* https://www.w3schools.com/css/css3_2dtransforms.asp */
  /* transform: translate(0, -0.1em) scale(1); */

  transform-origin: top left;
  transition: all 0.2s ease-out;

  transform: ${({ isNotEmpty }) =>
    isNotEmpty && "translate(0, -1em) scale(0.65)"};
  /* margin-top: ${({ email }) => email && "2em"};
  background-color: ${({ email }) => email && "red"}; */
`

const ContainerFloatLabel = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 564px;
  position: relative;
  margin-bottom: 4em;
  /* border: 1px solid green; */
  &:focus-within ${FloatLabel} {
    /* background-color: #fff; */
    transform: translate(0, -1em) scale(0.65);
  }
`

const FloatInput = styled.input`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  font-family: "Inter", sans-serif;
  /* line-height: 1.5; */
  padding-top: 0.2em;
  /* width: 100%; */
  /* height: 56px; */
  /* padding: 14px 16px 0 10px; */
  /* outline: 0; */
  outline: 3px solid transparent;
  border: 0;
  border-bottom: 3px solid #c2c2c2;
  background: transparent;
  // border: 3px solid red;
  /* background-color: #fff; */
  &-internal-autofill-selected {
    background: transparent !important;
    background-image: none !important;
    color: rgba(0, 0, 0, 0.7) !important;
  }
`

function SignUpForm() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("clicked")
  }

  console.log(username)

  return (
    <ContainerMain>
      <Content>
        <CenterContent>
          <StyledForm onSubmit={handleSubmit}>
            <ContainerFloatLabel>
              <FloatInput
                id="username"
                type="text"
                // placeholder="Username"
                name="username"
                aria-label="Username"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value.toLowerCase())
                }}
              />
              <FloatLabel htmlFor="username" isNotEmpty={username}>
                Username
              </FloatLabel>
            </ContainerFloatLabel>

            <ContainerFloatLabel>
              <FloatInput
                id="email"
                type="email"
                name="emailAddress"
                aria-label="Email address"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value.toLowerCase())
                }}
              />
              <FloatLabel htmlFor="email" isNotEmpty={email}>
                Email
              </FloatLabel>
            </ContainerFloatLabel>
            <label>
              <input
                type="email"
                placeholder="Email"
                name="emailAddress"
                aria-label="Email address"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value.toLowerCase())
                }}
              />
            </label>
            <input
              type="password"
              placeholder="Password (6 characters minimum)"
              name="password"
              aria-label="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value.toLowerCase())
              }}
            />
            <input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              aria-label="Confirm password"
              value={confirmPassword}
              onChange={(event) => {
                setConfirmPassword(event.target.value.toLowerCase())
              }}
            />
            <button
              type="submit"
              onSubmit={handleSubmit}
              // className={`button-login font-bold ${
              //   isInvalid && "button-disabled"
              // }`}
              // disabled={isInvalid}
            >
              Create Account
            </button>
          </StyledForm>
          <p>Already have an account?</p>
          <Link to={ROUTES.LOGIN}>Log in</Link>
          <ContainerFloatLabel>
            <FloatInput
              type="email"
              onChange={(event) => {
                setEmail(event.target.value.toLowerCase())
              }}
            />
            {/* In order to make styled component 'FloatLabel' change its style depending on 'email' state, we need to pass to it 'email' state as props. We can then use this 'email' prop to control FloatLabel component styles. If we type something into FloatInput input, email state will change, and FloatLabel will change its style. Great! */}
            <FloatLabel htmlFor="email" email={email}>
              Email
            </FloatLabel>
          </ContainerFloatLabel>
        </CenterContent>
      </Content>
    </ContainerMain>
  )
}

export default SignUpForm

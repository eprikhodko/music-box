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
  /* border: 1px solid goldenrod; */
`

const ContainerInput = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* border: 1px solid; */
`

const FormInput = styled.input`
  min-width: 564px;
  font-family: inherit;
  color: rgba(0, 0, 0, 0.7);
  font-size: 2.5rem;
  font-weight: 500;
  /* line-height: 4; */
  background-color: transparent;
  border: 0;
  border-bottom: 3px solid #c2c2c2;
  outline: 3px solid transparent;
  /* margin: 4em 0; */
  /* border: 1px solid green; */
  &::placeholder {
    /* add "opacity: 1;" rule because firefox will render input placeholder semi-transparent */
    opacity: 1;
    color: rgba(0, 0, 0, 0.7);
    font-size: 2.5rem;
    font-weight: 500;
  }
`

const FormLabel = styled.label`
  color: rgba(0, 0, 0, 0.7);
  font-size: 2.5rem;
  font-weight: 500;
  margin: 0;
  /* border: 1px solid red; */
`

const FloatLabel = styled.label`
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 12px;
  color: #999;
  pointer-events: none;
  position: absolute;
  transform: translate(0, 16px) scale(1);

  transform-origin: top left;
  transition: all 0.2s ease-out;

  transform: ${({ email }) => email && "translate(0, 12px) scale(0.75)"};
  /* background-color: red; */
  margin-top: ${({ email }) => email && "2em"};
  background-color: ${({ email }) => email && "red"};

  /* margin-top: 2em; */
`

const ContainerFloatLabel = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  position: relative;
  &:focus-within ${FloatLabel} {
    /* background-color: #333;
  color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
    transform: translate(0, 12px) scale(0.75);
  }
`

const FloatInput = styled.input`
  width: 100%;
  height: 56px;
  padding: 14px 16px 0 10px;
  outline: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: transparent;
  background-color: #fff;
  /* font-family: Arial, sans-serif; */
  font-size: 16px;
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
            <ContainerInput>
              <FormLabel htmlFor="username">Username</FormLabel>
              <FormInput
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
            </ContainerInput>
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
              E-mail
            </FloatLabel>
          </ContainerFloatLabel>
        </CenterContent>
      </Content>
    </ContainerMain>
  )
}

export default SignUpForm

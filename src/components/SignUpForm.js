import { Link } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import styled from "styled-components"

import * as ROUTES from "../constants/routes"

import ContainerMain from "./containers/ContainerMain"
import Content from "./containers/Content"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid;
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
        <StyledForm onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            aria-label="Username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value.toLowerCase())
            }}
          />
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
      </Content>
    </ContainerMain>
  )
}

export default SignUpForm

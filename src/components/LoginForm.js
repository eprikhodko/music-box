import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components"

import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import firebaseApp from "../lib/firebase"

import * as ROUTES from "../constants/routes"
import { Button } from "./shared/Button"

import {
  FloatInput,
  FloatLabel,
  ContainerFloatInput,
  Form,
} from "./shared/FormElements"

const StyledParagraph = styled.p`
  font-size: 1.6rem;
  color: #000;
  font-weight: 500;
`

const StyledLink = styled(Link)`
  color: #000;
  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }
`

function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const history = useHistory()

  const handleLogin = async (event) => {
    event.preventDefault()

    const auth = getAuth(firebaseApp)

    try {
      await signInWithEmailAndPassword(auth, email, password)
      // redirect user to the home page after successful login
      history.push(ROUTES.HOME)
    } catch (error) {
      setEmail("")
      setPassword("")
      console.log(error.message)
      setErrorMessage(error.message)
    }
  }

  return (
    <Form onSubmit={handleLogin} marginTop="5em">
      {/* show error message if something went wrong */}
      {errorMessage && (
        <>
          <p>{errorMessage}</p>
          <p>please try again</p>
        </>
      )}

      <ContainerFloatInput>
        <FloatLabel htmlFor="email" isNotEmpty={email}>
          Email
        </FloatLabel>
        <FloatInput
          id="email"
          type="email"
          name="email"
          aria-label="Email address"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value.toLowerCase())
          }}
        />
      </ContainerFloatInput>

      <ContainerFloatInput>
        <FloatLabel htmlFor="pass" isNotEmpty={password}>
          Password
        </FloatLabel>
        <FloatInput
          id="pass"
          type="password"
          name="password"
          aria-label="Password"
          minLength="6"
          required
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        />
      </ContainerFloatInput>

      <Button type="submit" $marginTop="4em">
        Log in
      </Button>
      <StyledParagraph>
        New to Music Box?{" "}
        <StyledLink to={ROUTES.SIGNUP}>Create an account</StyledLink>
      </StyledParagraph>
    </Form>
  )
}

export default LoginForm

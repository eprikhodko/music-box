import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components"

import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth"
import firebaseApp from "../lib/firebase"

import * as ROUTES from "../constants/routes"
import { Button } from "./shared/Buttons"

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

const ContainerFlex = styled.div`
  display: flex;
`

function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [isPasswordWrong, setIsPasswordWrong] = useState(false)

  const history = useHistory()

  const auth = getAuth(firebaseApp)

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      await signInWithEmailAndPassword(auth, email, password)

      // redirect user to the home page after successful login
      history.push(ROUTES.HOME)
    } catch (error) {
      setPassword("")
      // remove 'Firebase' from the beginning of the string with 'slice()' method
      setErrorMessage(error.message.slice(9))
      if (error.code === "auth/wrong-password") {
        setIsPasswordWrong(true)
      }
      console.log(error.message)
    }
  }

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email)
      console.log("password reset email sent!")
    } catch (error) {
      console.log(error)
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

      <ContainerFlex>
        <Button type="submit" $marginTop="4em">
          Log in
        </Button>
        {/* Show 'send password reset email' button if user typed in incorrect password */}
        {isPasswordWrong && (
          <Button
            type="button"
            $marginTop="4em"
            $marginLeft="2em"
            onClick={handlePasswordReset}
          >
            Send password reset email
          </Button>
        )}
      </ContainerFlex>
      <StyledParagraph>
        New to Music Box?{" "}
        <StyledLink to={ROUTES.SIGNUP}>Create an account</StyledLink>
      </StyledParagraph>
    </Form>
  )
}

export default LoginForm

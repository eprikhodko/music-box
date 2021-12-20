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
import { ButtonPrimary } from "./shared/Buttons"

import {
  FloatInput,
  FloatLabel,
  ContainerFloatInput,
  Form,
  ErrorMessage,
} from "./shared/FormElements"
import { MainGrid } from "./shared/Containers"

const StyledParagraph = styled.p`
  font-size: 1.6rem;
  color: #000;
  font-weight: 500;
  text-align: center;
`

const StyledLink = styled(Link)`
  color: #000;
  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }
`

const ContainerButtons = styled.div`
  display: grid;
  justify-items: center;
  grid-template-rows: auto 1.5em auto;

  margin-top: 4em;

  @media (min-width: 500px) {
    grid-template-columns: auto 2em auto;
  }
`

const ButtonLogin = styled(ButtonPrimary)`
  grid-row: 1/2;
`

const ButtonResetPassword = styled(ButtonPrimary)`
  grid-row: 3/4;

  @media (min-width: 500px) {
    grid-column: 3/4;
    grid-row: 1/2;
  }
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
      setErrorMessage("password reset instructions was sent to your email!")
      console.log("password reset email sent!")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <MainGrid>
      <Form onSubmit={handleLogin} marginTop="5em">
        {/* show error message if something went wrong */}
        {errorMessage && (
          <>
            <ErrorMessage>{errorMessage}</ErrorMessage>
            <ErrorMessage>please try again</ErrorMessage>
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

        <ContainerButtons>
          <ButtonLogin type="submit">Log in</ButtonLogin>
          {/* Show 'send password reset email' button if user typed in incorrect password */}
          {isPasswordWrong && (
            <ButtonResetPassword
              type="button"
              // $marginTop="4em"
              // $marginLeft="2em"
              onClick={handlePasswordReset}
            >
              Reset password
            </ButtonResetPassword>
          )}
        </ContainerButtons>
        <StyledParagraph>
          New to Music Box?{" "}
          <StyledLink to={ROUTES.SIGNUP}>Create an account</StyledLink>
        </StyledParagraph>
      </Form>
    </MainGrid>
  )
}

export default LoginForm

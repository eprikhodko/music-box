import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components"

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore"

import * as ROUTES from "../constants/routes"
import { Button } from "./shared/Buttons"
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
`

const StyledLink = styled(Link)`
  color: #000;
  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }
`

function SignUpForm() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const history = useHistory()

  const auth = getAuth()
  const db = getFirestore()

  // clean up username
  const cleanUpUsername = (inputValue) => {
    const cleaned =
      // make username lowercase
      inputValue
        .toLowerCase()
        // remove spaces from beginning and from the end of the username
        .trim()
        // replace spaces in the middle of the username with dashes
        .replace(/\s+/g, "-")
    return cleaned
  }

  const handleSignup = async (event) => {
    event.preventDefault()

    try {
      // create new user account in the firebase authentication
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      // update user profile display name
      await updateProfile(auth.currentUser, {
        displayName: cleanUpUsername(username),
      })

      // add new document in firestore collection "users"
      await setDoc(doc(db, "users", createdUser.user.uid), {
        userId: createdUser.user.uid,
        username: cleanUpUsername(username),
        email: email.toLowerCase(),
        dateCreated: serverTimestamp(),
      })

      // redirect user to the home page after successful sign up
      history.push(ROUTES.HOME)
    } catch (error) {
      // clear input fields in case of error
      setUsername("")
      setEmail("")
      setPassword("")
      // set error message
      setErrorMessage(error.message)
      console.log(error.message)
    }
  }

  return (
    <MainGrid>
      <Form onSubmit={handleSignup} marginTop="5em">
        {/* show error message if something went wrong */}
        {errorMessage && (
          <>
            <ErrorMessage>{errorMessage}</ErrorMessage>
            <ErrorMessage>please try again</ErrorMessage>
          </>
        )}
        <ContainerFloatInput>
          <FloatLabel htmlFor="username" isNotEmpty={username}>
            Username
          </FloatLabel>
          <FloatInput
            id="username"
            type="text"
            name="username"
            aria-label="Username"
            required
            value={username}
            onChange={(event) => {
              setUsername(event.target.value)
            }}
          />
        </ContainerFloatInput>

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
          Create Account
        </Button>
        <StyledParagraph>
          Already have an account?{" "}
          <StyledLink to={ROUTES.LOGIN}>Log in</StyledLink>
        </StyledParagraph>
      </Form>
    </MainGrid>
  )
}

export default SignUpForm

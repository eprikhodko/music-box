import { Link } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore"
import firebaseApp from "../lib/firebase"

import * as ROUTES from "../constants/routes"
import { Button } from "./shared/Button"
import {
  FloatInput,
  FloatLabel,
  ContainerFloatInput,
  Form,
} from "./shared/FormElements"

// import FirebaseContext from "../context/firebase"

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

  // const { firebase } = useContext(FirebaseContext)

  const auth = getAuth(firebaseApp)
  const db = getFirestore(firebaseApp)

  const handleSignup = async (event) => {
    event.preventDefault()

    try {
      // create new user account in the firebase authentication
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      // add new document in firestore collection "users"
      await setDoc(doc(db, "users", createdUser.user.uid), {
        userId: createdUser.user.uid,
        username: username.toLowerCase(),
        email: email.toLowerCase(),
        dateCreated: serverTimestamp(),
      })
    } catch (error) {
      console.log(error)
    }

    console.log("Form submitted")
  }

  return (
    <Form onSubmit={handleSignup} marginTop="5em">
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
            setUsername(event.target.value.toLowerCase())
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
          Password (6 characters minimum)
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
  )
}

export default SignUpForm

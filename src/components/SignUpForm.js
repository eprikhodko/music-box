import { Link } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"

// install firebase according to official docs: https://firebase.google.com/docs/web/setup, don't use "/lib/firebase.js"
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
// import { getFirestore, collection } from "firebase/firestore"

import * as ROUTES from "../constants/routes"
import { Button } from "./shared/Button"
import {
  FloatInput,
  FloatLabel,
  ContainerFloatInput,
  Form,
} from "./shared/FormElements"

const firebaseConfig = {
  apiKey: "AIzaSyCu_RkOy-eiFqNWBPr_tEEW4zY8JVYg-tg",
  authDomain: "music-box-e8f66.firebaseapp.com",
  projectId: "music-box-e8f66",
  storageBucket: "music-box-e8f66.appspot.com",
  messagingSenderId: "1039275884942",
  appId: "1:1039275884942:web:f643baf07a740cf5c5a4df",
}

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

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

function SignUpForm() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // const { firebase } = useContext(FirebaseContext)

  const handleSignup = async (event) => {
    event.preventDefault()
    // const auth = getAuth()
    try {
      // create new user account in the firebase authentication
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(createdUser.user)

      // const db = getFirestore(firebaseApp)
      // const createUserInFirestoreDatabase = await
      // collection("users").doc(createdUser.user.uid).set({
      //   userId: createdUser.user.uid,
      //   username: username.toLowerCase(),
      //   email: email.toLowerCase(),
      //   dateCreated: Date.now(),
      // })
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

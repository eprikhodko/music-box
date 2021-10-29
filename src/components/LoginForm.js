import { Link } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import styled from "styled-components"

import * as ROUTES from "../constants/routes"
import { Button } from "./shared/Button"

import { Content } from "./shared/Containers"

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
  font-family: "Inter", sans-serif;
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

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Form submitted")
  }

  return (
    <Content justifyContent="center">
      <Form onSubmit={handleSubmit} marginTop="5em">
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
    </Content>
  )
}

export default LoginForm

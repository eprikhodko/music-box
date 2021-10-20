import { Link } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"

import * as ROUTES from "../constants/routes"
import Button from "./shared/buttons/Button"

import { ContainerMain, Content } from "./shared/Containers"

import {
  FloatInput,
  FloatLabel,
  ContainerFloatInput,
  StyledForm,
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

function SignUpForm() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Form submitted")
  }

  return (
    <ContainerMain>
      <Content justifyContent="center">
        <StyledForm onSubmit={handleSubmit}>
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

          <Button type="submit" text="Create Account" />
          <StyledParagraph>
            Already have an account?{" "}
            <StyledLink to={ROUTES.LOGIN}>Log in</StyledLink>
          </StyledParagraph>
        </StyledForm>
      </Content>
    </ContainerMain>
  )
}

export default SignUpForm

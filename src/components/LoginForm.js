import { Link } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import styled from "styled-components"

import * as ROUTES from "../constants/routes"
import Button from "./shared/buttons/Button"

import CenterContent from "./shared/containers/CenterContent"
import ContainerMain from "./shared/containers/ContainerMain"
import Content from "./shared/containers/Content"

import {
  FloatInput,
  FloatLabel,
  ContainerFloatInput,
  StyledForm,
} from "./shared/Form"

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
    <ContainerMain>
      <Content>
        <CenterContent>
          <StyledForm onSubmit={handleSubmit}>
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

            <Button type="submit" text="Log in" />
            <StyledParagraph>
              New to Music Box?{" "}
              <StyledLink to={ROUTES.SIGNUP}>Create an account</StyledLink>
            </StyledParagraph>
          </StyledForm>
        </CenterContent>
      </Content>
    </ContainerMain>
  )
}

export default LoginForm

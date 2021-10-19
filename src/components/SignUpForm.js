import { Link } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import styled from "styled-components"

import * as ROUTES from "../constants/routes"
import Button from "./Button"
import CenterContent from "./containers/CenterContent"

import ContainerMain from "./containers/ContainerMain"
import Content from "./containers/Content"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10em;
  /* border: 2px solid goldenrod; */
`

const FloatLabel = styled.label`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  font-family: "Inter", sans-serif;
  pointer-events: none;
  position: absolute;
  /* https://www.w3schools.com/css/css3_2dtransforms.asp */
  transform: translate(0, 0.8em) scale(1);

  transform-origin: top left;
  transition: all 0.2s ease-out;

  transform: ${({ isNotEmpty }) =>
    isNotEmpty && "translate(0, -0.2em) scale(0.65)"};
`

const FloatInput = styled.input`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  font-family: "Inter", sans-serif;
  /* line-height: 1.5; */
  padding: 0;
  padding-top: 1em;
  outline: 3px solid transparent;
  border: 0;
  border-bottom: 3px solid #c2c2c2;
  background: transparent;

  /* this transition handle hover effect duration */
  transition: all 0.3s ease-out;

  &:focus {
    border-bottom: 3px solid #000;
  }

  /* below is a code that removes browser colored autofill input background
  https://selleo.com/til/posts/xhgzlfgcql-a-way-to-make-autofilled-inputs-background-transparent */
  &:-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: rgba(0, 0, 0, 0.7) !important;
  }
`

const ContainerFloatInput = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 564px;
  position: relative;
  margin-bottom: 3.5em;
  /* border: 1px solid green; */
  &:focus-within ${FloatLabel} {
    /* background-color: #fff; */
    transform: translate(0, -0.2em) scale(0.65);
  }
  &:hover ${FloatInput} {
    border-bottom: 3px solid #000;
  }
`

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
      <Content>
        <CenterContent>
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
        </CenterContent>
      </Content>
    </ContainerMain>
  )
}

export default SignUpForm

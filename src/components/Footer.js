import { Link } from "react-router-dom"
import styled from "styled-components"

import { ReactComponent as IconInstagram } from "../icons/social/instagram-icon.svg"
import { ReactComponent as IconFacebook } from "../icons/social/facebook-icon.svg"
import { ReactComponent as IconTwitter } from "../icons/social/twitter-icon.svg"

import ContainerMain from "./containers/ContainerMain"

const ContainerFooter = styled.div`
  /* max-width: 1440px; */
  margin: 0 auto;
  margin-top: 7.5em;
  padding: 3em 4em 1em;
  background-color: #c2c2c2;
  /* border: 1px solid magenta; */
`

const FooterContent = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5em;
  /* align-self: center; */
  /* justify-items: center; */
  /* border: 1px solid; */
`

const Title = styled.strong`
  text-transform: uppercase;
  font-family: "Inter", sans-serif;
  font-size: 1.6rem;
  color: #000;
  font-weight: 800;
  letter-spacing: 1.2px;
`

const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  & > li {
    margin-bottom: 0.8em;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  font-size: 1.8rem;
  font-weight: 500;
  &:hover {
    color: #000;
    /* border-bottom: 2px solid #000; */
  }
  &:focus {
    /* border-bottom: 2px solid #000; */
    color: #000;
    outline: 3px solid transparent;
  }
`

const LinkWithIcon = styled.div`
  display: flex;
  /* border: 1px solid; */
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  /* border: 1px solid green; */
`

const StyledIcon = styled.div`
  display: flex;
  svg {
    min-height: 22px;
    min-width: 22px;
    margin-right: 0.3em;
    color: palevioletred;
  }
  /* border: 1px solid magenta; */
`

const Copyright = styled.p`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 5em;
  /* border: 1px solid green; */
`

const GridElement = styled.div`
  /* border: 1px solid green; */
`

function Footer() {
  return (
    <footer>
      <ContainerMain>
        <ContainerFooter>
          <FooterContent>
            <GridElement>
              <p>
                <Title>Music Box</Title>
              </p>
              <FooterLinks>
                <li>
                  <StyledLink to="#">About Us</StyledLink>
                </li>
                <li>
                  <StyledLink to="#">Blog</StyledLink>
                </li>
                <li>
                  <StyledLink to="#">App</StyledLink>
                </li>
              </FooterLinks>
            </GridElement>

            <GridElement>
              <p>
                <Title> Help is here</Title>
              </p>
              <FooterLinks>
                <li>
                  <StyledLink to="#">Help & Support</StyledLink>
                </li>
                <li>
                  <StyledLink to="#">Forum</StyledLink>
                </li>
                <li>
                  <StyledLink to="#">Database Guidelines</StyledLink>
                </li>
              </FooterLinks>
            </GridElement>

            <GridElement>
              <p>
                <Title>Join in</Title>
              </p>
              <FooterLinks>
                <li>
                  <StyledLink to="#">Get Started</StyledLink>
                </li>
                <li>
                  <StyledLink to="#">Sign Up</StyledLink>
                </li>
                <li>
                  <StyledLink to="#">Contribute</StyledLink>
                </li>
              </FooterLinks>
            </GridElement>

            <GridElement>
              <p>
                <Title>Follow us</Title>
              </p>
              <FooterLinks>
                <li>
                  <LinkWithIcon>
                    <IconContainer>
                      <StyledIcon>
                        <IconInstagram />
                      </StyledIcon>
                    </IconContainer>
                    <StyledLink to="#">Instagram</StyledLink>
                  </LinkWithIcon>
                </li>
                <li>
                  <LinkWithIcon>
                    <IconContainer>
                      <StyledIcon>
                        <IconFacebook />
                      </StyledIcon>
                    </IconContainer>
                    <StyledLink to="#">Facebook</StyledLink>
                  </LinkWithIcon>
                </li>
                <li>
                  <LinkWithIcon>
                    <IconContainer>
                      <StyledIcon>
                        <IconTwitter />
                      </StyledIcon>
                    </IconContainer>
                    <StyledLink to="#">Twitter</StyledLink>
                  </LinkWithIcon>
                </li>
              </FooterLinks>
            </GridElement>

            <Copyright>© Copyright MusicBox</Copyright>
          </FooterContent>
        </ContainerFooter>
      </ContainerMain>
    </footer>
  )
}

export default Footer

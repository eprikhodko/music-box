import { Link } from "react-router-dom"
import styled from "styled-components"
import PropTypes from "prop-types"

import { ReactComponent as IconInstagram } from "../icons/social/instagram-icon.svg"
import { ReactComponent as IconFacebook } from "../icons/social/facebook-icon.svg"
import { ReactComponent as IconTwitter } from "../icons/social/twitter-icon.svg"
import { MainGrid } from "./shared/Containers"

const StyledFooter = styled.footer`
  background-color: #c2c2c2;
  margin-top: 6.25em;
`

// margin-top: ${({ $marginTop }) => $marginTop};
const ContainerFooter = styled.div`
  grid-column: 2/-2;
  margin-top: 0;
`

const FooterContent = styled.div`
  padding: 3em 0 4em 0;
  display: grid;
  /* width: 95%; */
  /* max-width: 72.5em; */
  /* margin: 0 auto; */
  /* grid-gap: 5em; */

  /* border: 1px solid; */

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 3em 0 2em 0;
  }
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
    /* outline: 3px solid transparent; */
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
    width: 1.4em;
    height: 1.4em;
    margin-right: 0.3em;
  }
  /* border: 1px solid magenta; */
`

const Copyright = styled.p`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
  margin-top: 1em;

  @media (min-width: 1024px) {
    margin-top: 9.5em;
  }

  /* border: 1px solid green; */
`

const GridElement = styled.div`
  /* border: 1px solid green; */
`

function Footer({ $marginTop }) {
  return (
    <>
      <StyledFooter>
        <MainGrid>
          <ContainerFooter $marginTop={$marginTop}>
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
        </MainGrid>
      </StyledFooter>
    </>
  )
}

export default Footer

Footer.propTypes = {
  $marginTop: PropTypes.string,
}

Footer.defaultProps = {
  $marginTop: "7.5em",
}

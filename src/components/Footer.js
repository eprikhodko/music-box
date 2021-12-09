import { Link } from "react-router-dom"
import styled from "styled-components"
import PropTypes from "prop-types"

import { ReactComponent as IconInstagram } from "../icons/social/instagram-icon.svg"
import { ReactComponent as IconFacebook } from "../icons/social/facebook-icon.svg"
import { ReactComponent as IconTwitter } from "../icons/social/twitter-icon.svg"
import { MainGrid } from "./shared/Containers"

// ::before {
//   /* display: block; */
//   /* padding: 0.5em; */
//   /* box-sizing: border-box; */
//   /* content: "Look at this orange box. Look at this orange box."; */
//   content: "";
//   height: 100%;
//   /* border-bottom: 3px solid #c2c2c2; */
//   /* border-top: 500px solid #c2c2c2; */

//   background-color: #ffba10;
//   position: absolute;
//   width: 100%;
//   left: -20%;
//   /* left: 0; */
//   /* top: 0; */
//   /* bottom: 0; */
//   /* bottom: 55em; */
//   /* top: 0; */
//   /* bottom: 20em; */
// }

// const StyledFooter = styled.footer`
//   /* grid-column: 2/3;
//   grid-row: 5/6; */

//   /* grid-area: footer; */

//   /* grid-row: 6/7; */

//   /* z-index: 1; */

//   background-color: #c2c2c2;

//   /* margin-top: 7em; */

//   /* border: 1px solid; */

//   /* position: relative; */

//   display: grid;
//   grid-template-columns: minmax(1em, 1fr) minmax(0, 500px) minmax(1em, 1fr);

//   /* > * {
//     grid-column: 2 / -2;
//   } */

//   @media (min-width: 600px) {
//     grid-template-columns: minmax(0, 1fr) minmax(0, 1160px) minmax(0, 1fr);

//     /* grid-column: 2 / -2; */
//   }
// `

// const FooterBackground = styled.div`
//   border-bottom: 3px solid #c2c2c2;

//   grid-column: 1/4;
// `

const StyledFooter = styled.footer`
  background-color: #c2c2c2;
`

const ContainerFooter = styled.div`
  margin-top: ${({ $marginTop }) => $marginTop};
  margin-top: 0;
  /* background-color: #c2c2c2; */
  /* border: 1px solid magenta; */
  /* position: relative; */
  /* border: 1px solid magenta; */

  grid-column: 2/-2;
`

const FooterContent = styled.div`
  /* width: 95%; */
  /* max-width: 72.5em; */
  /* margin: 0 auto; */
  padding: 3em 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  /* grid-gap: 5em; */

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
  /* margin-top: 5em; */
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

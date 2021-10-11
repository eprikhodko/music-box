import styled from "styled-components"
import ContainerMain from "./containers/ContainerMain"

// const StyledFooter = styled.footer`
//   /* padding: 0.5em 0 0.5em; */
//   max-width: 1440px;
//   width: 90%;
//   margin: 0 auto;
//   border: 3px solid #c2c2c2;
// `

const ContainerFooter = styled.div`
  /* max-width: 1440px; */
  margin: 0 auto;
  margin-top: 7.5em;
  padding: 3em 4em 1em;
  background-color: #c2c2c2;
  /* border: 1px solid magenta; */
`

const ContainerFooterContent = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* border: 1px solid; */
`

const FooterLinksTitle = styled.strong`
  text-transform: uppercase;
  font-family: "Inter", sans-serif;
  font-size: 1.6rem;
  color: #000;
  font-weight: 800;
  letter-spacing: 1.2px;
`

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`

const FooterLink = styled.li`
  color: rgba(0, 0, 0, 0.7);
  font-size: 1.8rem;
  margin-bottom: 0.8em;
`

const Copyright = styled.p`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 10em;
`

function Footer() {
  return (
    <footer>
      <ContainerMain>
        <ContainerFooter>
          <ContainerFooterContent>
            <div className="container-footer-links">
              <p>
                <FooterLinksTitle> Music Box </FooterLinksTitle>
              </p>
              <FooterLinks>
                <FooterLink>About Us</FooterLink>
                <FooterLink>Blog</FooterLink>
                <FooterLink>App</FooterLink>
              </FooterLinks>
            </div>

            <div className="container-footer-links">
              <p>
                <FooterLinksTitle> Help is here</FooterLinksTitle>
              </p>
              <FooterLinks>
                <FooterLink>Help & Support</FooterLink>
                <FooterLink>Forum</FooterLink>
                <FooterLink>Database Guidelines</FooterLink>
              </FooterLinks>
            </div>

            <div className="container-footer-links">
              <p>
                <FooterLinksTitle>Join in</FooterLinksTitle>
              </p>
              <FooterLinks>
                <FooterLink>Get Started</FooterLink>
                <FooterLink>Sign Up</FooterLink>
                <FooterLink>Contribute</FooterLink>
              </FooterLinks>
            </div>

            <div className="container-footer-links">
              <p>
                <FooterLinksTitle>Follow us</FooterLinksTitle>
              </p>
              <FooterLinks>
                <FooterLink>Instagram</FooterLink>
                <FooterLink>Facebook</FooterLink>
                <FooterLink>Twitter</FooterLink>
              </FooterLinks>
            </div>
            <Copyright>© Copyright MusicBox</Copyright>
          </ContainerFooterContent>
        </ContainerFooter>
      </ContainerMain>
    </footer>
  )
}

export default Footer

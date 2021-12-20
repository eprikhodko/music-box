import styled from "styled-components"
import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"
import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import { Button } from "../components/shared/Buttons"
import { Container, MainGrid } from "../components/shared/Containers"

const NotFoundTitle = styled.h1`
  font-size: 10rem;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.7);

  @media (min-width: 800px) {
    font-size: 28rem;
  }
`

const SubTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;

  @media (min-width: 800px) {
    font-size: 4.5rem;
  }
`

function NotFound() {
  return (
    <>
      <Header />
      <main>
        <MainGrid>
          <Container>
            <NotFoundTitle>404</NotFoundTitle>
            <SubTitle>Sorry, this page not found</SubTitle>

            <Button as={Link} to={ROUTES.HOME} $marginTop="2em">
              Go Back To Home
            </Button>
          </Container>
        </MainGrid>
      </main>
      <Footer />
    </>
  )
}

export default NotFound

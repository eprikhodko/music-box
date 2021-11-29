import styled from "styled-components"
import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"
import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import {
  ContainerMain,
  Content,
  PageBody,
} from "../components/shared/Containers"
import { Button } from "../components/shared/Button"

const NotFoundTitle = styled.h1`
  font-size: 28rem;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.7);
`

function NotFound() {
  return (
    <ContainerMain>
      <Header />
      <PageBody>
        <Content flexDirection="column" alignItems="center" marginTop="3em">
          <NotFoundTitle>404</NotFoundTitle>
          <h2>Sorry, this page not found</h2>

          <Button as={Link} to={ROUTES.HOME} $marginTop="2em">
            Go Back To Home
          </Button>
        </Content>
      </PageBody>
      <Footer />
    </ContainerMain>
  )
}

export default NotFound

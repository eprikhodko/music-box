import styled from "styled-components"
import { Link } from "react-router-dom"
// import * as ROUTES from "../constants/routes"
import Footer from "../components/Footer"
import Header from "../components/Header/index"
import { ContainerMain, Content } from "../components/shared/Containers"
// import Button from "../components/shared/buttons/Button"
import { Button } from "../components/shared/Button"

const NotFoundTitle = styled.h1`
  font-size: 28rem;
  line-height: 1.4;
`

const NotFoundSubTitle = styled.h2`
  font-size: 4.5rem;
  font-weight: 500;
`

function NotFound() {
  return (
    <>
      <Header />
      <main>
        <ContainerMain>
          <Content flexDirection="column" alignItems="center" marginTop="2em">
            <NotFoundTitle>404</NotFoundTitle>
            <NotFoundSubTitle>Sorry, this page not found</NotFoundSubTitle>
            {/* <Button as="a" href="/search" text="text" /> */}
            <Button marginTop="2em">hello</Button>
            <Button as={Link} to="/search" hero>
              go home
            </Button>
          </Content>
        </ContainerMain>
      </main>
      <Footer />
    </>
  )
}

export default NotFound

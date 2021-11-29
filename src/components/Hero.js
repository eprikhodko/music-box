import styled from "styled-components"
import { useContext } from "react/cjs/react.development"

import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"

import { Content } from "./shared/Containers"
import { HeroTitle } from "./shared/HeroTitle"

import heroImage from "../images/florencia-viadana-F7W1QP62psQ-unsplash-optimized.jpg"
import { HeroButton } from "./shared/Button"
import UserContext from "../context/user"

const HeroContent = styled.div`
  max-width: 90em;
  margin: 0 auto;

  background-image: url(${heroImage});
  background-repeat: no-repeat;
  background-position: top right;
  background-size: contain;

  /* border: 5px solid yellow; */
`

const ContainerHeroText = styled.div`
  max-width: 34em;
  display: flex;
  flex-direction: column;
  margin: 10em 0 14.5em;
  /* border: 3px solid green; */
`

const ContainerHeroButtons = styled.div`
  display: flex;
  margin-top: 3em;
  /* border: 1px solid red; */
`

function Hero() {
  const currentUser = useContext(UserContext)

  return (
    <HeroContent>
      <Content>
        <ContainerHeroText>
          <HeroTitle>Build your music library</HeroTitle>
          <h3>Discover and explore music with us</h3>
          <ContainerHeroButtons>
            <HeroButton
              as={Link}
              to={ROUTES.CATALOG}
              $marginRight="2em"
              $marginTop="0.3em"
            >
              View all
            </HeroButton>
            {!currentUser && (
              <HeroButton as={Link} to={ROUTES.LOGIN} $marginTop="0.3em">
                Log in
              </HeroButton>
            )}
          </ContainerHeroButtons>
        </ContainerHeroText>
      </Content>
    </HeroContent>
  )
}

export default Hero

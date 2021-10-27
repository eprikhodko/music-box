import styled from "styled-components"

import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"

import { Content } from "./shared/Containers"

import heroImage from "../images/florencia-viadana-F7W1QP62psQ-unsplash-optimized.jpg"
import { HeroButton } from "./shared/Button"

const HeroContent = styled.div`
  background-image: url(${heroImage});
  background-repeat: no-repeat;
  background-position: top right;
  background-size: contain;
  /* border: 5px solid yellow; */
`

const ContainerHeroText = styled.div`
  max-width: 500px;
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

const HeroTitle = styled.h1`
  font-size: 7rem;
  color: #000;
  font-weight: 500;
  line-height: 1.15;
`

const HeroSubtitle = styled.h2`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  margin-top: 0.6em;
`

const currentUser = false

function Hero() {
  return (
    <HeroContent>
      <Content>
        <ContainerHeroText>
          <HeroTitle>Build your music library</HeroTitle>
          <HeroSubtitle>Discover and explore music with us</HeroSubtitle>
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

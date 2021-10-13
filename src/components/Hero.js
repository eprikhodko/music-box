import styled from "styled-components"

import * as ROUTES from "../constants/routes"

import ContainerMain from "./containers/ContainerMain"
import Content from "./containers/Content"

import heroImage from "../images/florencia-viadana-F7W1QP62psQ-unsplash-optimized.jpg"
import LinkAsButton from "./LinkAsButton"

const HeroSection = styled.section`
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
  margin-top: 0.5em;
`

const currentUser = false

function Hero() {
  return (
    <ContainerMain>
      <HeroSection>
        <Content>
          <ContainerHeroText>
            <HeroTitle>Build your music library</HeroTitle>
            <HeroSubtitle>Discover and explore music with us</HeroSubtitle>
            <ContainerHeroButtons>
              <LinkAsButton to={ROUTES.CATALOG} hero text="View all" />
              {!currentUser && (
                <LinkAsButton to={ROUTES.LOGIN} hero text="Log in" />
              )}
            </ContainerHeroButtons>
          </ContainerHeroText>
        </Content>
      </HeroSection>
    </ContainerMain>
  )
}

export default Hero

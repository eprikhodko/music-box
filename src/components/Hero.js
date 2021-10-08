import styled from "styled-components"

import ContainerMain from "./containers/ContainerMain"
import Container from "./containers/Container"
import Button from "./Button"

import heroImage from "../images/florencia-viadana-F7W1QP62psQ-unsplash-optimized.jpg"

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
  margin: 7em 0 18em;
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

function Hero() {
  return (
    <ContainerMain>
      <HeroSection>
        <Container>
          <ContainerHeroText>
            <HeroTitle>Build your music library</HeroTitle>
            <HeroSubtitle>Discover and explore music with us</HeroSubtitle>
            <ContainerHeroButtons>
              <Button hero text="View all" />
              <Button hero text="Log in" />
            </ContainerHeroButtons>
          </ContainerHeroText>
        </Container>
      </HeroSection>
    </ContainerMain>
  )
}

export default Hero

import styled from "styled-components"

import ContainerMain from "./containers/ContainerMain"
import Button from "./Button"

const HeroSection = styled.section`
  /* background-color: honeydew; */
`

const HeroTitle = styled.h1`
  font-size: 7rem;
  color: #000;
  font-weight: 500;
  line-height: 1.6;
`

const HeroSubtitle = styled.h2`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
`

function Hero() {
  return (
    <ContainerMain>
      <HeroSection>
        <HeroTitle>Build your music library</HeroTitle>
        <HeroSubtitle>Discover new music with us</HeroSubtitle>
        <Button hero text="View all" />
        <Button hero text="Log in" />
      </HeroSection>
    </ContainerMain>
  )
}

export default Hero

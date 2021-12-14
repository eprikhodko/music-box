import styled from "styled-components"
import { useContext } from "react"

import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"
import screenSize from "../constants/mediaQueries"

import { MainGrid } from "./shared/Containers"
import heroImage from "../images/florencia-viadana-F7W1QP62psQ-unsplash-optimized.jpg"
import { ButtonPrimary } from "./shared/Buttons"
import UserContext from "../context/user"

const HeroGridContainer = styled.div`
  /* width: 95%; */
  max-width: 1300px;
  grid-column: 2 / -2;

  display: grid;

  @media (min-width: ${screenSize.tabletMedium}) {
    grid-column: 2/4;
    grid-template-columns: auto 2em auto 3em 1fr;
    grid-template-rows: 1.5fr auto auto 1fr;

    grid-template-areas:
      "title          title     title         .   image"
      "subtitle       subtitle  subtitle      .   image"
      "button-catalog   .       button-login  .   image"
      ".                .         .           .   image";
  }
`

const HeroTitle = styled.h1`
  max-width: 7.8em;
  margin-top: 1em;

  font-size: 4.6rem;
  color: #333;
  line-height: 1.15;
  text-align: center;

  justify-self: center;

  @media (min-width: 600px) {
    text-align: center;
    font-size: 7rem;
  }

  @media (min-width: ${screenSize.tabletMedium}) {
    /* grid-column: 1/4; */
    grid-area: title;
    max-width: 6.2em;

    text-align: left;
    justify-self: start;

    color: #000;
    align-self: end;
  }
`

const HeroSubtitle = styled.h3`
  font-size: 1.6rem;
  color: rgba(51, 51, 51, 0.7);
  text-align: center;

  margin: 1em 0;

  @media (min-width: 600px) {
    font-size: 2.5rem;
    color: rgba(0, 0, 0, 0.7);
  }

  @media (min-width: ${screenSize.tabletMedium}) {
    /* grid-column: 1/4; */
    grid-area: subtitle;

    justify-self: start;
  }
`

const ButtonViewCatalog = styled(ButtonPrimary)`
  margin-top: 1.5em;
  justify-self: center;

  @media (min-width: 600px) {
    margin-top: 2em;
  }

  @media (min-width: ${screenSize.tabletMedium}) {
    grid-area: button-catalog;
  }
`

const ButtonLogin = styled(ButtonPrimary)`
  margin-top: 1em;
  justify-self: center;

  @media (min-width: 600px) {
    margin-top: 1em;
  }

  @media (min-width: ${screenSize.tabletMedium}) {
    grid-area: button-login;
    justify-self: end;

    margin-top: 2em;
  }
`

const HeroImage = styled.img`
  /* by setting max-width: 100% instead of width: 100% we're allow image to shrink and grow. width: 100% will make image always take up 100% of avaiable width. */
  max-width: 100%;
  object-fit: cover;

  /* grid-column: 5 / 6;
  grid-row: 1 / 5; */
  grid-area: image;

  justify-self: end;
  display: none;

  @media (min-width: ${screenSize.tabletMedium}) {
    display: block;
  }
`

function Hero() {
  const currentUser = useContext(UserContext)

  return (
    <MainGrid>
      <HeroGridContainer>
        <HeroTitle>Build your music library</HeroTitle>
        <HeroSubtitle>Discover and explore music with us</HeroSubtitle>
        <ButtonViewCatalog as={Link} to={ROUTES.CATALOG}>
          View catalog
        </ButtonViewCatalog>
        {!currentUser && (
          <ButtonLogin as={Link} to={ROUTES.LOGIN}>
            Log in
          </ButtonLogin>
        )}
        <HeroImage src={heroImage} alt="shelf full of vinyl records" />
      </HeroGridContainer>
    </MainGrid>
  )
}

export default Hero

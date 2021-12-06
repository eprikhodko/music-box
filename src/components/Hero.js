import styled from "styled-components"
import { useContext } from "react"

import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"
import screenSize from "../constants/mediaQueries"

// import { Content } from "./shared/Containers"
// import { HeroTitle } from "./shared/HeroTitle"

import heroImage from "../images/florencia-viadana-F7W1QP62psQ-unsplash-optimized.jpg"
import { HeroButton } from "./shared/Buttons"
import UserContext from "../context/user"

const GridContainer = styled.div`
  width: 95%; /* <-- set padding to the edges of the content so it won't stick to the device screen edges */
  max-width: 72.5em;
  margin: 0 auto;

  display: grid;
  /* grid-template-rows: auto auto auto auto; */
  justify-items: center;

  @media (min-width: ${screenSize.tabletSmall}) {
    /* grid-template-rows: auto auto auto auto; */
    grid-template-columns: auto 2em 1fr 1fr;
    /* margin-left: 10em; */
  }

  @media (min-width: ${screenSize.tabletMedium}) {
    width: 100%;
    max-width: 90em;

    grid-template-columns: 1.6em auto 2em auto 3em 1fr;
    grid-template-rows: auto auto auto 2em;
  }
  /* border: 1px solid green; */
`

const HeroTitle = styled.h1`
  max-width: 7.8em;
  font-size: 7rem;
  line-height: 1.15;
  /* margin-bottom: 0.2em; */

  font-size: 4.8rem;
  color: #333;
  text-align: center;

  margin-top: 1em;

  @media (min-width: ${screenSize.tabletSmall}) {
    grid-column: 1/4;
    justify-self: start;

    text-align: left;
    font-size: 7rem;
  }

  @media (min-width: ${screenSize.tabletMedium}) {
    grid-column: 2/5;
    max-width: 6.2em;

    color: #000;
    margin-top: 1.3em;

    /* border: 1px solid; */
  }
`

const HeroSubtitle = styled.h3`
  font-size: 1.6rem;
  color: rgba(51, 51, 51, 0.7);
  text-align: center;

  margin: 1em 0;

  @media (min-width: ${screenSize.tabletSmall}) {
    grid-column: 2/5;
    justify-self: start;

    font-size: 2.5rem;
    color: rgba(0, 0, 0, 0.7);
  }
`

const ButtonViewCatalog = styled(HeroButton)`
  margin-top: 1.5em;

  @media (min-width: ${screenSize.tabletSmall}) {
    grid-column: 2/3;
    justify-self: start;

    margin-top: 2em;
  }
`

const ButtonLogin = styled(HeroButton)`
  margin-top: 1em;

  @media (min-width: ${screenSize.tabletSmall}) {
    grid-column: 4/5;
    justify-self: start;

    margin-top: 2em;
  }
`

// const HeroContent = styled.div`
//   max-width: 90em;
//   margin: 0 auto;

//   border: 5px solid yellow;

// `
//  background-image: url(${heroImage});

// const ContainerHeroText = styled.div`
//   /* max-width: 34em; */
//   display: flex;
//   flex-direction: column;
//   /* margin: 10em 0 14.5em; */
//   border: 3px solid green;

//   grid-column: 1 / 2;
// `

// const ContainerHeroButtons = styled.div`
//   /* display: flex;
//   align-items: center;
//   justify-content: center; */
//   margin-top: 3em;

//   grid-column: 1/4;
//   /* grid-row: 4/5; */

//   justify-items: stretch;
//   border: 1px solid red;
// `

const HeroImage = styled.img`
  width: 100%;
  object-fit: cover;
  /* border: 3px solid rebeccapurple; */

  /* justify-self: end; */
  grid-column: 6 / 7;
  grid-row: 1 / 7;
  display: none;

  @media (min-width: ${screenSize.tabletMedium}) {
    display: block;
  }
`

function Hero() {
  const currentUser = useContext(UserContext)

  return (
    <>
      {/* <Content> */}
      <GridContainer>
        {/* <ContainerHeroText> */}
        <HeroTitle>Build your music library</HeroTitle>
        <HeroSubtitle>Discover and explore music with us</HeroSubtitle>
        {/* <ContainerHeroButtons> */}
        <ButtonViewCatalog as={Link} to={ROUTES.CATALOG}>
          View catalog
        </ButtonViewCatalog>
        {!currentUser && (
          <ButtonLogin as={Link} to={ROUTES.LOGIN}>
            Log in
          </ButtonLogin>
        )}
        {/* </ContainerHeroButtons> */}
        {/* </ContainerHeroText> */}
        <HeroImage src={heroImage} alt="shelf full of vinyl records" />
      </GridContainer>
      {/* </Content> */}
    </>
  )
}

export default Hero

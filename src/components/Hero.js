import styled from "styled-components"
import { useContext } from "react"

import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"

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

  @media (min-width: 700px) {
    /* grid-template-rows: auto auto auto auto; */
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  /* border: 1px solid green; */
`

const HeroTitle = styled.h1`
  font-size: 7rem;
  line-height: 1.15;
  /* margin-bottom: 0.2em; */

  font-size: 4.8rem;
  color: #333;
  text-align: center;

  margin-top: 1em;

  @media (min-width: 700px) {
    grid-column: 1/3;
    justify-self: start;
    text-align: left;
  }
`

const HeroSubtitle = styled.h3`
  font-size: 1.6rem;
  color: rgba(51, 51, 51, 0.7);
  text-align: center;

  margin: 1em 0;

  @media (min-width: 700px) {
    grid-column: 1/3;
    justify-self: start;
  }
`

const ButtonViewCatalog = styled(HeroButton)`
  margin-top: 1.5em;
  @media (min-width: 700px) {
    grid-column: 1/2;
    justify-self: start;

    margin-top: 0;
  }
`

const ButtonLogin = styled(HeroButton)`
  margin-top: 1em;
  @media (min-width: 700px) {
    grid-column: 2/3;
    justify-self: start;

    margin-top: 0;
  }
`

const HeroContent = styled.div`
  max-width: 90em;
  margin: 0 auto;

  /* background-repeat: no-repeat;
  background-position: top right;
  background-size: contain;  */

  /* border: 5px solid yellow; */

  position: relative;
`
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
  /* width: 100%; */
  object-fit: cover;
  /* border: 3px solid rebeccapurple; */

  /* grid-column: 3 / 4; */
  display: none;
`

function Hero() {
  const currentUser = useContext(UserContext)

  return (
    <HeroContent>
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
    </HeroContent>
  )
}

export default Hero

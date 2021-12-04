import styled from "styled-components"
import { useContext } from "react"

import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"

// import { Content } from "./shared/Containers"
// import { HeroTitle } from "./shared/HeroTitle"

import heroImage from "../images/florencia-viadana-F7W1QP62psQ-unsplash-optimized.jpg"
import { HeroButton } from "./shared/Buttons"
import UserContext from "../context/user"

const HeroTitle = styled.h1`
  font-size: 7rem;
  line-height: 1.15;
  /* margin-bottom: 0.2em; */

  font-size: 4.8rem;
  color: #333;
  text-align: center;

  margin-top: 1em;
`

const HeroSubtitle = styled.h3`
  font-size: 1.6rem;
  color: rgba(51, 51, 51, 0.7);
  text-align: center;

  margin: 1em 0;
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
//   display: flex;
//   margin-top: 3em;
//   /* border: 1px solid red; */
// `

const HeroImage = styled.img`
  /* width: 100%; */
  object-fit: cover;
  /* border: 3px solid rebeccapurple; */

  /* grid-column: 3 / 4; */
  display: none;
`

const GridContainer = styled.div`
  width: 95%; /* <-- set padding to the edges of the content so it won't stick to the device screen edges */
  max-width: 72.5em;
  margin: 0 auto;

  display: grid;
  grid-template-rows: auto auto auto auto;
  justify-items: center;

  /* border: 1px solid green; */
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
        <HeroButton
          as={Link}
          to={ROUTES.CATALOG}
          // $marginRight="2em"
          $marginTop="1.5em"
        >
          View catalog
        </HeroButton>
        {!currentUser && (
          <HeroButton as={Link} to={ROUTES.LOGIN} $marginTop="1em">
            Log in
          </HeroButton>
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

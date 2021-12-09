import styled from "styled-components"
import { useContext } from "react"

import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"
import screenSize from "../constants/mediaQueries"

// import { Content } from "./shared/Containers"
import { MainGrid } from "./shared/Containers"
// import { HeroTitle } from "./shared/HeroTitle"

import heroImage from "../images/florencia-viadana-F7W1QP62psQ-unsplash-optimized.jpg"
import { HeroButton } from "./shared/Buttons"
import UserContext from "../context/user"

const HeroGridContainer = styled.div`
  /* width: 95%; */
  max-width: 1300px;
  grid-column: 2 / -2;

  /////////////////
  /* grid-column: 2/4; */
  ////////////////

  display: grid;

  /* @media (min-width: ${screenSize.mobileLarge}) {
    grid-template-columns: auto 2em 1fr 1fr;
  }
 */
  @media (min-width: ${screenSize.tabletMedium}) {
    grid-template-columns: auto 2em auto 2em 1fr;
    grid-template-rows: 1.5fr auto auto 1fr;
    grid-column: 2/4;
  }
`

const HeroTitle = styled.h1`
  font-size: 4.6rem;
  color: #333;
  line-height: 1.15;
  text-align: center;

  /* max-width: 7.8em; */
  margin-top: 1em;

  /* @media (min-width: ${screenSize.mobileLarge}) {
    grid-column: 1/5;
    justify-self: start;

    text-align: left;
    font-size: 7rem;
  }
  */

  @media (min-width: ${screenSize.tabletMedium}) {
    grid-column: 1/5;
    max-width: 6.2em;

    color: #000;
    align-self: end;
  }
`

const HeroSubtitle = styled.h3`
  font-size: 1.6rem;
  color: rgba(51, 51, 51, 0.7);
  text-align: center;

  margin: 1em 0;

  /* @media (min-width: ${screenSize.mobileLarge}) {
    grid-column: 1/5;
    justify-self: start;

    font-size: 2.5rem;
    color: rgba(0, 0, 0, 0.7);
  }
*/
  @media (min-width: ${screenSize.tabletMedium}) {
    grid-column: 1/5;
  }
`

const ButtonViewCatalog = styled(HeroButton)`
  margin-top: 1.5em;
  justify-self: center;

  /* @media (min-width: ${screenSize.mobileLarge}) {
    grid-column: 1/2;
    justify-self: start;

    margin-top: 2em;
  }
*/
  @media (min-width: ${screenSize.tabletMedium}) {
    grid-column: 1/2;
  }
`

const ButtonLogin = styled(HeroButton)`
  margin-top: 1em;
  justify-self: center;

  /* @media (min-width: ${screenSize.mobileLarge}) {
    grid-column: 3/4;
    justify-self: start;

    margin-top: 2em;
  }

  */

  @media (min-width: ${screenSize.tabletMedium}) {
    grid-column: 3/4;
    justify-self: end;
  }
`

const HeroImage = styled.img`
  /* by setting max-width: 100% instead of width: 100% we're allow image to shrink and grow. width: 100% will make image always take up 100% of avaiable width. */
  max-width: 100%;
  object-fit: cover;

  grid-column: 5 / 6;
  grid-row: 1 / 5;

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

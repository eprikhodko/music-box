import styled from "styled-components"
import { Link } from "react-router-dom"
import { HeroButton } from "./shared/Button"
import { CenterContent, ContainerMain, Content } from "./shared/Containers"
import UserAvatar from "./UserAvatar"
import ProfileCoverImage from "../images/profile-cover-cropped.jpg"

import * as ROUTES from "../constants/routes"

const Username = styled.p`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  margin-top: 0.6em;
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

const ContainerFlex = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
`

const ContainerTextBlock = styled(ContainerFlex)`
  max-width: 30em;
  margin-top: 5em;
  margin-left: 19em;
`

const CoverImage = styled.img`
  max-width: 100%;
`

function ProfileContent() {
  return (
    <ContainerMain>
      <Content $marginTop="5em">
        <ContainerFlex flexDirection="column">
          <ContainerFlex>
            <CenterContent>
              <UserAvatar />
              <Username>Peggy</Username>
              <HeroButton as={Link} to={ROUTES.COLLECTION}>
                Collection
              </HeroButton>
              <HeroButton as={Link} to={ROUTES.WISHLIST} $marginTop="1em">
                Wishlist
              </HeroButton>
              <HeroButton as={Link} to={ROUTES.UPLOAD} $marginTop="1em">
                Upload
              </HeroButton>
              <HeroButton as={Link} to={ROUTES.UPLOADED_BY} $marginTop="1em">
                My Uploads
              </HeroButton>
            </CenterContent>
            <ContainerTextBlock flexDirection="column">
              <HeroTitle>Build your music library</HeroTitle>
              <HeroSubtitle>Discover and explore music with us</HeroSubtitle>
            </ContainerTextBlock>
          </ContainerFlex>
        </ContainerFlex>
      </Content>
      <CoverImage src={ProfileCoverImage} alt="shelf full of vinyl records" />
    </ContainerMain>
  )
}

export default ProfileContent

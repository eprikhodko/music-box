import { useContext } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { HeroButton } from "./shared/Button"
import { CenterContent } from "./shared/Containers"
import { HeroTitle } from "./shared/HeroTitle"
import UserAvatar from "./UserAvatar"
import SearchBox from "./shared/SearchBox"

import * as ROUTES from "../constants/routes"
import UserContext from "../context/user"

const Username = styled.p`
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
  max-width: 32em;
  margin-top: 7em;
  margin-left: 19em;
`

function ProfileContent() {
  const currentUser = useContext(UserContext)

  return (
    <ContainerFlex flexDirection="column">
      <ContainerFlex>
        <CenterContent>
          <UserAvatar />
          <Username>{currentUser?.displayName}</Username>
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
          <h3>
            Add some albums to your collection or wishlist and they will appear
            in your profile
          </h3>
          <SearchBox placeholder="Search music!" marginTop="2em" />
        </ContainerTextBlock>
      </ContainerFlex>
    </ContainerFlex>
  )
}

export default ProfileContent

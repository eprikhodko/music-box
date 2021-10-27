import styled from "styled-components"
import { Link } from "react-router-dom"
import { HeroButton } from "./shared/Button"
import { CenterContent } from "./shared/Containers"
import UserAvatar from "./UserAvatar"

import * as ROUTES from "../constants/routes"

const Username = styled.p`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  margin-top: 0.6em;
`

function ProfileContent() {
  return (
    <CenterContent>
      <UserAvatar />
      <Username>Peggy</Username>
      <HeroButton as={Link} to={ROUTES.COLLECTION}>
        Collection
      </HeroButton>
      <HeroButton as={Link} to={ROUTES.WISHLIST} marginTop="1em">
        Wishlist
      </HeroButton>
      <HeroButton as={Link} to={ROUTES.UPLOAD} marginTop="1em">
        Upload
      </HeroButton>
      <HeroButton as={Link} to={ROUTES.UPLOADED_BY} marginTop="1em">
        My Uploads
      </HeroButton>
    </CenterContent>
  )
}

export default ProfileContent

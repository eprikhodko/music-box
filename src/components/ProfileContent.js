import styled from "styled-components"
import { CenterContent } from "./shared/Containers"
import UserAvatar from "./UserAvatar"

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
      <div>buttons</div>
    </CenterContent>
  )
}

export default ProfileContent

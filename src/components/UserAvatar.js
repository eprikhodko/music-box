import { useState } from "react"
import styled from "styled-components"
import { ReactComponent as IconPers } from "../icons/person_24px.svg"
import { ReactComponent as ImagePlaceholder } from "../icons/image-placeholder.svg"

const ContainerAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 19em;
  height: 19em;
  border: 1px solid #000;
  border-radius: 999px;

  will-change: transform;
  transition: transform 450ms;

  &:hover {
    cursor: pointer;
    /* transition: transform 125ms; */
    transform: translateY(-10px);
    border: 3px solid rgba(0, 0, 0, 0.5);
  }
`

const AvatarText = styled.p`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  margin-top: 0.6em;
`

const IconImagePlaceholder = styled(ImagePlaceholder)`
  width: 4em;
  height: 4em;
  margin-top: 2em;
`

const IconPerson = styled(IconPers)`
  width: 8em;
  height: 8em;
`

function UserAvatar() {
  const [hovered, setHovered] = useState(false)

  return (
    <ContainerAvatar
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered ? (
        <IconPerson />
      ) : (
        <>
          <IconImagePlaceholder />
          <AvatarText>Upload picture</AvatarText>
        </>
      )}
    </ContainerAvatar>
  )
}

export default UserAvatar

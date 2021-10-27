import { useState } from "react"
import styled from "styled-components"
import { ReactComponent as IconPerson } from "../icons/person_24px.svg"
import { ReactComponent as ImagePlaceholder } from "../icons/image-placeholder.svg"

const ContainerAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 30rem;
  width: 30rem;
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
  margin-top: 2em;
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

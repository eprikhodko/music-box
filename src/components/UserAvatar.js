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
  }
`

const IconImagePlaceholder = styled(ImagePlaceholder)``

function UserAvatar() {
  const [hovered, setHovered] = useState(false)

  return (
    <ContainerAvatar
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered ? <IconPerson /> : <IconImagePlaceholder />}
    </ContainerAvatar>
  )
}

export default UserAvatar

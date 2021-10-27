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
`

function UserAvatar() {
  const [hovered, setHovered] = useState(false)

  return (
    <ContainerAvatar
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered ? <IconPerson /> : <ImagePlaceholder />}
    </ContainerAvatar>
  )
}

export default UserAvatar

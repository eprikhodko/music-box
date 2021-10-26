import styled from "styled-components"
import { ReactComponent as IconPerson } from "../icons/person_24px.svg"

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
  return (
    <ContainerAvatar>
      <IconPerson />
    </ContainerAvatar>
  )
}

export default UserAvatar

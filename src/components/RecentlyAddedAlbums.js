import styled from "styled-components"
import Button from "./Button"

import Container from "./containers/Container"
import ContainerMain from "./containers/ContainerMain"

const Section = styled.section`
  margin-top: 4.2em;
`

const Title = styled.h2`
  font-size: 4.5rem;
  color: #000;
  font-weight: 500;
`

const ContainerFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  /* border: 1px solid; */
`

function RecentlyAddedAlbums() {
  return (
    <ContainerMain>
      <Section>
        <Container>
          <ContainerFlexColumn>
            <Title>Recently added albums</Title>
            <div>Albums grid</div>
            <Button text="Show more" />
          </ContainerFlexColumn>
        </Container>
      </Section>
    </ContainerMain>
  )
}

export default RecentlyAddedAlbums

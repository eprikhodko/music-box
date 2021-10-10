import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import * as ROUTES from "../constants/routes"

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
  const [albumsData, setAlbumsData] = useState([])

  const url =
    "https://raw.githubusercontent.com/eprikhodko/music-box-images/main/images.json"

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAlbumsData(data))
  }, [])

  // console.log(albumsData)

  const albumsComponents = albumsData.map((album) => (
    <div key={album.albumId}>
      <img
        src={album.albumCover}
        alt={`album cover for ${album.albumTitle} album`}
      />
      <p>{album.albumTitle}</p>
      <p>{album.artist}</p>
    </div>
  ))

  return (
    <ContainerMain>
      <Section>
        <Container>
          <ContainerFlexColumn>
            <Title>Recently added albums</Title>
            <div>
              Albums grid
              {albumsComponents}
            </div>
            <Link to={ROUTES.CATALOG}>
              <Button text="Show more" />
            </Link>
          </ContainerFlexColumn>
        </Container>
      </Section>
    </ContainerMain>
  )
}

export default RecentlyAddedAlbums

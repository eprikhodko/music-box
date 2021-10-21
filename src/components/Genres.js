import styled from "styled-components"
import AlbumsGrid from "./shared/AlbumsGrid"

import { Content, ContainerMain } from "./shared/Containers"

const Title = styled.h2`
  font-size: 4.5rem;
  color: #000;
  font-weight: 500;
  /* text-align: center; */
  /* border: 1px solid teal; */
`

function Genres() {
  // const [genresData, setGenresData] = useState([])

  // const url =
  //   "https://raw.githubusercontent.com/eprikhodko/music-box-images/main/genres-data.json"

  // const fetchGenresData = async () => {
  //   const res = await fetch(url)
  //   const data = await res.json()
  //   setGenresData(data)
  // }

  // useEffect(() => {
  //   fetchGenresData()
  // }, [])
  return (
    <ContainerMain>
      <Content flexDirection="column" alignItems="center" marginTop="4.5em">
        <Title>Genres</Title>
        <AlbumsGrid />
      </Content>
    </ContainerMain>
  )
}

export default Genres

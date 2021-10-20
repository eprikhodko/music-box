import { useState } from "react"
import styled from "styled-components"

import { ReactComponent as SearchIcon } from "../../icons/icon-search.svg"
import { ReactComponent as ArrowIcon } from "../../icons/icon-arrow-right.svg"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 224px;
  border: 1px solid #000;
  border-radius: 50px;
  margin-left: 2.5em;
  background-color: #f9f9f9;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &:focus-within {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

const TextInput = styled.input`
  /* flex: 1 0; */
  min-width: 50px;
  font-size: 1.6rem;
  background-color: transparent;
  margin-left: 0.7em;
  border: 0;
  font-family: inherit;
  &:focus {
    outline: 3px solid transparent;
  }
  &::placeholder {
    /* add "opacity: 1;" rule because firefox will render input placeholder semi-transparent */
    opacity: 1;
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.6rem;
    font-weight: 500;
  }
`

const ContainerSearchIcon = styled.div`
  display: flex;
  margin-left: 0.6em;
`

const ContainerArrowIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5em;
  min-width: 26px;
  min-height: 26px;
  border: 1px solid #000;
  border-radius: 50px;
  cursor: ${({ isEmpty }) => isEmpty && "pointer"};
  cursor: pointer;
  &:hover {
    background-color: ${({ isEmpty }) => isEmpty && "#dbdbdb"};
    background-color: #dbdbdb;
  }
`

function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    console.log("search submitted")
  }

  console.log(searchQuery)

  return (
    <Container>
      <ContainerSearchIcon>
        <SearchIcon onClick={handleSearchSubmit} />
      </ContainerSearchIcon>
      <TextInput
        placeholder="Search"
        value={searchQuery}
        onChange={handleChange}
      />
      <ContainerArrowIcon isEmpty={searchQuery}>
        <ArrowIcon onClick={handleSearchSubmit} />
      </ContainerArrowIcon>
    </Container>
  )
}

export default SearchBox

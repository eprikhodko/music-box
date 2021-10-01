// import { useState } from "react"
import styled from "styled-components"

import { ReactComponent as SearchIcon } from "../icons/search_24px.svg"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 5px; */
  height: 40px;
  width: 224px;
  border: 1px solid #000;
  border-radius: 50px;
  margin-left: 2.5em;
  background-color: #f9f9f9;
  &:hover {
    box-shadow: 5px 5px 1px thistle;
  }
`

const TextInput = styled.input`
  /* flex: 1 0; */
  min-width: 50px;
  /* min-height: 25px; */
  font-size: 1.6rem;
  background-color: transparent;
  /* padding-left: 1em; */
  /* padding: 0.7em 0; */
  margin-left: 0.7em;
  border: 0;
  font-family: inherit;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
    color: red;
    /* font-size: 1.6rem; */

    font-weight: 500;
    /* padding: 5em 0 5em 1em; */
  }
`

const Icon = styled.div`
  /* padding-right: 1em; */
  /* min-height: 50px; */
  /* margin-right: 3em; */
  display: flex;
  margin-right: 1em;
`

// const Icon = styled.div`
//   /* flex: 0 0; */
// `

function Search() {
  //   const [searchQuery, setSearchQuery] = useState("")

  //   const handleChange = (event) => {
  //     setSearchQuery(event.target.value)
  //   }

  //   const handleSearchSubmit = (event) => {
  //     event.preventDefault()
  //     console.log("search submitted")
  //   }

  //   console.log(searchQuery)

  return (
    <Container>
      <TextInput placeholder="Search" />
      <Icon>
        <SearchIcon />
      </Icon>
    </Container>

    // <SearchForm onSubmit={handleSearchSubmit}>
    //   {/* <label htmlFor="search input"> */}
    //   {/* Search */}
    //   <SearchInput
    //     type="text"
    //     placeholder="Search"
    //     // value={searchQuery}
    //     // onChange={handleChange}
    //   />
    //   <IconSearch />
    //   {/* </label> */}
    //   <input type="submit" value="Submit" />
    // </SearchForm>
  )
}

export default Search

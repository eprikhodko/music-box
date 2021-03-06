import { useState } from "react"
import { useHistory } from "react-router-dom"

import useMatchMedia from "../../hooks/useMatchMedia"

import { ReactComponent as SearchIcon } from "../../icons/icon-search.svg"
import { ReactComponent as ArrowIcon } from "../../icons/search-arrow-icon.svg"
import {
  ButtonArrowBig,
  SearchFormBig,
  TextInputBig,
  ContainerSearchIconBig,
} from "../shared/SearchBoxModules"

function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const history = useHistory()

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    console.log("search submitted")
    event.stopPropagation()

    // clean up search query
    const cleanedSearchQuery = searchQuery
      // make search query lowercase
      .toLowerCase()
      // remove white spaces from the start and from the end of a string
      .trim()
      // replace multiple spaces with a single space
      .replace(/\s\s+/g, " ")

    history.push(`/search/${cleanedSearchQuery}`)
    // reset input in search box
    setSearchQuery("")
  }

  const isScreenBigEnough = useMatchMedia("(min-width: 400px)", true)

  return (
    <SearchFormBig onSubmit={handleSearchSubmit}>
      <ContainerSearchIconBig>
        <SearchIcon onClick={handleSearchSubmit} />
      </ContainerSearchIconBig>
      <TextInputBig
        placeholder={
          isScreenBigEnough
            ? "Search artists, albums and more"
            : "Search music..."
        }
        value={searchQuery}
        onChange={handleChange}
      />
      <ButtonArrowBig
        type="submit"
        isEmpty={searchQuery}
        onClick={handleSearchSubmit}
      >
        <ArrowIcon />
      </ButtonArrowBig>
    </SearchFormBig>
  )
}

export default SearchBox

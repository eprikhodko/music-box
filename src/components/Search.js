import { useState } from "react"

import { ReactComponent as IconSearch } from "../icons/search_24px.svg"

function Search() {
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
    <form onSubmit={handleSearchSubmit}>
      <label htmlFor="search input">
        Search
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleChange}
        />
        <IconSearch />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Search

import { useParams } from "react-router-dom"

function SearchResults() {
  const { searchQuery } = useParams()

  return (
    <h2>
      search results for &quot;{searchQuery}&quot; search query should appear
      here
    </h2>
  )
}

export default SearchResults

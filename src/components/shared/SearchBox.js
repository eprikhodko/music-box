import { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { ReactComponent as SearchIcon } from "../../icons/icon-search.svg"
import { ReactComponent as ArrowIcon } from "../../icons/search-arrow-icon.svg"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.5em;
  width: 14em;
  height: ${({ big }) => big && "5.35em"};
  width: ${({ big }) => big && "30em"};
  border: 1px solid #000;
  border-radius: 50px;
  margin-left: 2.5em;
  margin-left: ${({ big }) => big && "0"};
  background-color: #ebebeb;
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
  font-size: ${({ big }) => big && "1.8rem"};
  background-color: transparent;
  margin-left: 0.7em;
  margin-left: ${({ big }) => big && "0"};
  border: 0;
  font-family: inherit;
  &:focus {
    outline: 3px solid transparent;
  }
  &::placeholder {
    /* add "opacity: 1;" rule because firefox will render input placeholder semi-transparent */
    opacity: 1;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 500;
  }
`

const ContainerSearchIcon = styled.div`
  display: flex;
  margin-left: 0.6em;
  margin-left: ${({ big }) => big && "1.5em"};
  svg {
    height: 1em;
    width: 1em;
    height: ${({ big }) => big && "2em"};
    width: ${({ big }) => big && "2em"};
  }
  /* border: 1px solid green; */
`

const ContainerArrowIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5em;
  margin-right: ${({ big }) => big && "0.9em"};
  cursor: ${({ isEmpty }) => isEmpty && "pointer"};
  cursor: pointer;
  svg {
    height: 1.65em;
    width: 1.65em;
    height: ${({ big }) => big && "3.5em"};
    width: ${({ big }) => big && "3.5em"};
  }
  svg circle {
    fill: transparent;
    stroke-width: 1px;
  }
  &:hover {
    svg circle {
      fill: ${({ isEmpty }) => isEmpty && "#dbdbdb"};
    }
  }
`

const StyledArrowIcon = styled(ArrowIcon)``

function SearchBox({ placeholder, big }) {
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
    <Container big={big}>
      <ContainerSearchIcon big={big}>
        <SearchIcon onClick={handleSearchSubmit} />
      </ContainerSearchIcon>
      <TextInput
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleChange}
        big={big}
      />
      <ContainerArrowIcon isEmpty={searchQuery} big={big}>
        <StyledArrowIcon onClick={handleSearchSubmit} />
      </ContainerArrowIcon>
    </Container>
  )
}

export default SearchBox

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  big: PropTypes.bool,
}

SearchBox.defaultProps = {
  placeholder: "Search",
  big: false,
}

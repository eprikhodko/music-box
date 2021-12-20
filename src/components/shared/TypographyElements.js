import styled from "styled-components"
import screenSize from "../../constants/mediaQueries"

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: #333;
  text-align: center;

  @media (min-width: ${screenSize.tabletSmall}) {
    font-size: 4.5rem;
  }
`

export const StyledParagraph = styled.p`
  font-size: 2.5rem;
  text-align: center;
`

export default SectionTitle

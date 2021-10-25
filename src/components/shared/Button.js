import styled from "styled-components"

export const Button = styled.button`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.25;
  color: #333;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  padding: 1em 3.5em;

  background-color: transparent;

  border: 2px solid #333;
  border-radius: 50px;
  margin-right: ${({ marginRight }) => marginRight};
  margin-top: ${({ marginTop }) => marginTop};

  &:hover {
    background-color: #333;
    color: #fff;
  }

  &:focus {
    background-color: #333;
    color: #fff;
    outline: 3px solid transparent;
  }
`

export const HeroButton = styled(Button)`
  padding: 1em 0;
  min-width: 10.5em;
`

// export { Button as default }

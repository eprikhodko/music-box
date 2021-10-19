import styled from "styled-components"

const StyledInput = styled.input`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  font-family: "Inter", sans-serif;
  /* line-height: 1.5; */
  padding: 0;
  padding-top: 1em;
  outline: 3px solid transparent;
  border: 0;
  border-bottom: 3px solid #c2c2c2;
  background: transparent;

  /* this transition handle hover effect duration */
  transition: all 0.3s ease-out;

  &:focus {
    border-bottom: 3px solid #000;
  }

  /* below is a code that removes browser colored autofill input background
  https://selleo.com/til/posts/xhgzlfgcql-a-way-to-make-autofilled-inputs-background-transparent */
  &:-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: rgba(0, 0, 0, 0.7) !important;
  }
`

function FloatInput() {
  return <StyledInput />
}

export default FloatInput

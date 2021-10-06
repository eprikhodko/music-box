import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import App from "./App"

/* eslint-disable */

beforeEach(() => {
  global.console = require("console")
})

describe("App", () => {
  test("'catalog' link points to the correct page", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    // screen.debug()
    const link = screen.getByRole("link", { name: /catalog/i })
    // screen.debug(link)
    userEvent.click(link)
    // screen.debug()
    // const divContainer = screen.getByText(/this is catalog page/i)
    // const divContainer = screen.getByText("This is catalog page")
    // screen.debug(divContainer)

    // screen.debug(await screen.findByText("This is catalog page"))
    // await screen.findByText("This is catalog page")

    // expect(screen.getByText("This is catalog page")).toBeInTheDocument()
  })
})

test("App component is rendered", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
})

test("full app rendering/navigating", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )

  // verify page content for expected route
  expect(screen.getByText(/this is home page/i)).toBeInTheDocument()
})

test("'catalog' link points to the correct page", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )

  userEvent.click(screen.getByRole("link", { name: /catalog/i }))
  expect(screen.getByText(/this is catalog page/i))
})

test("'search' link points to the correct page", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )

  userEvent.click(screen.getByRole("link", { name: /search/i }))
  expect(screen.getByText(/this is search page/i))
})

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import App from "./App"

/* eslint-disable */
beforeEach(() => {
  global.console = require("console")
})
/* eslint-enable */

const renderApp = () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
}

describe("App component", () => {
  test("App component is rendered", () => {
    renderApp()
  })

  test("We're currently at home page", () => {
    renderApp()
    expect(screen.getByText(/this is home page/i)).toBeInTheDocument()
  })
})

describe("Header Navigation for anonynomous user", () => {
  test("Logo link points to the home page", () => {
    renderApp()
    const link = screen.getByRole("link", { name: /music box/i })
    userEvent.click(link)
    expect(screen.getByText(/this is home page/i)).toBeInTheDocument()
  })

  test("'Home' link points to the home page", () => {
    renderApp()
    const link = screen.getByRole("link", { name: /home/i })
    userEvent.click(link)
    expect(screen.getByText(/this is home page/i)).toBeInTheDocument()
  })

  test("'Catalog' link points to the 'catalog' page", () => {
    renderApp()
    const link = screen.getByRole("link", { name: /catalog/i })
    userEvent.click(link)
    expect(screen.getByText(/this is catalog page/i)).toBeInTheDocument()
  })

  test("'Search' link points to the 'search' page", () => {
    renderApp()
    const link = screen.getByRole("link", { name: /search/i })
    userEvent.click(link)
    expect(screen.getByText(/this is search page/i)).toBeInTheDocument()
  })

  test("'Log in' link points to the 'login' page", () => {
    renderApp()
    const link = screen.getByRole("link", { name: /log in/i })
    userEvent.click(link)
    expect(screen.getByText(/this is login page/i)).toBeInTheDocument()
  })

  test("'Sign up' link points to the 'signup' page", () => {
    renderApp()
    const link = screen.getByRole("link", { name: /sign up/i })
    userEvent.click(link)
    expect(screen.getByText(/this is sign up page/i)).toBeInTheDocument()
  })
})

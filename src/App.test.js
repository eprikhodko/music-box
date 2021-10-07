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

// describe("Header Navigation for anonynomous user", () => {
//   // linkText, text matching corresponding page
//   const links = [
//     ["Home", "This is home page"],
//     ["Catalog", "This is catalog page"],
//     ["Search", "This is search page"],
//   ]

//   test.each(links)(
//     "Navbar '%s' link points to the corresponding page.",
//     (linkText, pageText) => {
//       renderApp()
//       const navLink = screen.getByRole("link", { name: linkText })
//       userEvent.click(navLink)
//       expect(screen.getByText(pageText)).toBeInTheDocument()
//     }
//   )
// })

// describe("Header Navigation for anonynomous user", () => {
//   const links = [
//     { text: "Home", pageText: "This is home page" },
//     { text: "Catalog", pageText: "This is catalog page" },
//     { text: "Search", pageText: "This is search page" },
//     { text: "Log in", pageText: "This is login page" },
//     { text: "Sign up", pageText: "This is Sign Up page" },
//   ]

//   test.each(links)("Check if navbar %s link is working.", (link) => {
//     renderApp()
//     const navLink = screen.getByRole("link", { name: link.text })
//     userEvent.click(navLink)
//     expect(screen.getByText(link.pageText)).toBeInTheDocument()
//   })
// })

// const links = [
//   { text: "Home", location: "/" },
//   { text: "Catalog", location: "/catalog" },
//   { text: "Search", location: "/search" },
//   { text: "Log in", location: "/login" },
//   { text: "Sign up", location: "/signup" },
// ]

// // I use test.each to iterate the test cases above
// test.each(links)("Check if Nav Bar have %s link.", (link) => {
//   renderApp()
//   // Ensure the text is in the dom, will throw error it can't find
//   const linkDom = screen.getByText(link.text)

//   // use jest assertion to verify the link property
//   expect(linkDom).toHaveAttribute("href", link.location)
// })

// describe("Header Navigation for authorized user", () => {
//   test("Logo link points to the home page", () => {
//     renderApp()
//     const link = screen.getByRole("link", { name: /music box/i })
//     userEvent.click(link)
//     expect(screen.getByText(/this is home page/i)).toBeInTheDocument()
//   })

//   test("'Home' link points to the home page", () => {
//     renderApp()
//     const link = screen.getByRole("link", { name: /home/i })
//     userEvent.click(link)
//     expect(screen.getByText(/this is home page/i)).toBeInTheDocument()
//   })

//   test("'Catalog' link points to the 'catalog' page", () => {
//     renderApp()
//     const link = screen.getByRole("link", { name: /catalog/i })
//     userEvent.click(link)
//     expect(screen.getByText(/this is catalog page/i)).toBeInTheDocument()
//   })

//   test("'Search' link points to the 'search' page", () => {
//     renderApp()
//     const link = screen.getByRole("link", { name: /search/i })
//     userEvent.click(link)
//     expect(screen.getByText(/this is search page/i)).toBeInTheDocument()
//   })

//   test("'Upload' link points to the 'upload' page", () => {
//     renderApp()
//     const link = screen.getByRole("link", { name: /upload/i })
//     userEvent.click(link)
//     expect(screen.getByText(/this is upload page/i)).toBeInTheDocument()
//   })
// })

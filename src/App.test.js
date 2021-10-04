import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import App from "./App"

describe("Header", () => {
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

    screen.debug(await screen.findByText("This is catalog page"))
    // await screen.findByText("This is catalog page")

    // expect(screen.getByText("This is catalog page")).toBeInTheDocument()
  })
})

import { render , screen } from "@testing-library/react"
import NavBar from "components/navBar"

it("renders the navBar component", () => {
    render(<NavBar />)
    const navbarContainer = screen.getByTestId('navbar-container')
    expect(navbarContainer).not.toBeNull()
})

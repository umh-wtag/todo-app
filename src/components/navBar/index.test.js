import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import NavBar from "components/navBar"

it("renders the navBar component", () => {
    render(<NavBar />)
    const navbarContainer = screen.getByTestId('navbar-container')
    const todosHeader = screen.getByText("Todos")
    
    expect(todosHeader).toBeInTheDocument()
    expect(navbarContainer).not.toBeNull()
})

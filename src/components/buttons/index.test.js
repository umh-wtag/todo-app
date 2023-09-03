import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Button from "components/buttons"

it("renders button correctly", () => {
  const mockOnclick = jest.fn()
  render(<Button text={"test"} onClick={mockOnclick} />)

  const buttonText = screen.getByText("test")
  expect(buttonText).toBeInTheDocument()
})

it("function is called when clicked on the button", () => {
  const mockOnlick = jest.fn()

  render(<Button text={"test"} onClick={mockOnlick} />)
  const button = screen.queryByTestId("button")

  fireEvent.click(button)
  expect(mockOnlick).toHaveBeenCalledTimes(1)
})

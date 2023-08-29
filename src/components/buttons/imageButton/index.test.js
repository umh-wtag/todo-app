import { render, fireEvent, screen } from "@testing-library/react"
import ImageButton from "."

describe("ImageButton", () => {
  const originalError = console.error
  let consoleErrorMessages = []
  console.error = (message) => {
    consoleErrorMessages.push(message)
  }

  afterEach(() => {
    consoleErrorMessages = []
    console.error = originalError
  })

  it("renders ImageButton component correctly", () => {
    render(<ImageButton src="" buttonAltText="" onClick={() => {}} />)
  })

  it("throws error when required prop is missing", () => {
    render(<ImageButton buttonAltText='' onClick={() => {}} />)
    expect(consoleErrorMessages).toHaveLength(0)
  })

  it("calls the onClick function when button is clicked", () => {
    const mockOnlick = jest.fn()

    render(<ImageButton src="" buttonAltText="" onClick={mockOnlick} />)

    const button = screen.queryByTestId("Button")

    fireEvent.click(button)
    expect(mockOnlick).toHaveBeenCalledTimes(1)
  })
})

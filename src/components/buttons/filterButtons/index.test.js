import FilterButtons from "components/buttons/filterButtons"
import Button from "components/buttons/index"
const { render, screen } = require("@testing-library/react")

it("renders Button component correctly", () => {
  render(<Button text="" />)
})

it("containes the button required", () => {
  render(<FilterButtons />)
  const allButton = screen.getByText("All")
  const incompleteButton = screen.getByText("Incomplete")
  const completeButton = screen.getByText("Complete")

  expect(allButton).not.toBeNull()
  expect(incompleteButton).not.toBeNull()
  expect(completeButton).not.toBeNull()
})

import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import TodoItem from "components/todoItem"

const mockTodo = {
  id: "1",
  text: "test todo",
  createdAt: "1-1-23",
  completed: false,
}

it("renders the TodoItem component", () => {
  render(<TodoItem todo={mockTodo} />)

  const item = screen.getByTestId("item-card")
  expect(item).toBeInTheDocument()

  const todoTextElement = screen.getByText(`${mockTodo.text}`)
  expect(todoTextElement).toBeInTheDocument()

  const createAt = screen.getByText((content, element) => {
    return content.includes(`${mockTodo.createdAt}`)
  })
  expect(createAt).toBeInTheDocument()
})

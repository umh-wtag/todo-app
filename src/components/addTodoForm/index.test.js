import configureStore from "redux-mock-store"
import { useDispatch } from "react-redux"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import AddTodoForm from "components/addTodoForm"

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}))

// Mock useDispatch implementation
const mockDispatch = jest.fn()

beforeEach(() => {
  useDispatch.mockReturnValue(mockDispatch)
})

const initialState = {
  todos: {
    todoItems: [],
    isAdding: false,
  },
}
const mockStore = configureStore([])
let store
beforeEach(() => {
  store = mockStore(initialState)
})

it("renders todo form with textare and buttons", () => {
  render(<AddTodoForm />)

  const form = screen.getByTestId("add-todo-form")
  expect(form).toBeInTheDocument()

  const button = screen.getByText((content) => {
    return content.includes("Add Task")
  })
  expect(button).toBeInTheDocument()

  const textareaElement = screen.getByPlaceholderText("Add Todo")
  expect(textareaElement).toBeInTheDocument()
})

it("handles adding a new todo correctly", () => {
  render(<AddTodoForm />)

  const textareaElement = screen.getByPlaceholderText("Add Todo")
  fireEvent.change(textareaElement, { target: { value: "New Todo" } })

  const addButton = screen.getByText("Add Task")
  fireEvent.click(addButton)

  // Check if the dispatch function was called with the correct action
  expect(mockDispatch).toHaveBeenCalledWith(expect.any(Object))
})

it("handles input field validation", () => {
  render(<AddTodoForm />)
  const button = screen.getByText((content) => {
    return content.includes("Add Task")
  })

  fireEvent.click(button)
  const errorMedssage = screen.getByText("You must add a valid task!")
  expect(errorMedssage).toBeInTheDocument()
})

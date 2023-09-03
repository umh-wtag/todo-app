import configureStore from "redux-mock-store"
const { render, screen } = require("@testing-library/react")
const { default: TodoList } = require(".")
const { Provider } = require("react-redux")

const mockStore = configureStore([])
const initialState = {
  todos: {
    todoItems: [
      { id: 1, test: "Todo 1 ", completed: false },
      { id: 2, test: "Todo 2 ", completed: false },
    ],
    isAdding: false,
  },
}
let store
beforeEach(() => {
  store = mockStore(initialState)
})

it("renders TodoList component", () => {
  render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  )

  const card = screen.queryAllByTestId("item-card")
  expect(card).not.toBeNull()
})

it("displays addTodoForm when isAdding is true", () => {
  store = mockStore({
    ...initialState,
    todos: {
      ...initialState.todos,
      isAdding: true,
    },
  })
  render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  )
  const todoForm = screen.getByTestId("add-todo-form")
  expect(todoForm).not.toBeNull()
})

it('displays "You didn\'t add any task when todos array is empty"', () => {
  store = mockStore({
    ...initialState,
    todos: {
      ...initialState,
      todoItems: [],
      isAdding: false,
    },
  })
  render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  )
  const emptyTaskMessage = screen.getByText(
    "You didn't add any task. Please, add one."
  )
  expect(emptyTaskMessage).not.toBeNull()
})

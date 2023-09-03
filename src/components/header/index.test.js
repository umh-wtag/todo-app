import Header from "components/header"
import configureStore from "redux-mock-store"
const { render, screen } = require("@testing-library/react")
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

it("renders Header componenet", () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  )
  const addTask = screen.getByText("Add Task")
  const createButton = screen.getByText("Create")
  const filterButtons = screen.getByTestId("filter-buttons")
  expect(addTask).not.toBeNull()
  expect(createButton).not.toBeNull()
  expect(filterButtons).not.toBeNull()
})

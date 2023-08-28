import configureStore from "redux-mock-store"
const { render, screen } = require("@testing-library/react")
const { default: TodoList } = require(".")
const { Provider } = require("react-redux")
const mockStore = configureStore([])

describe("TodoList", () => {
  const initialState = {
    todos: {
      todoItems: [], 
    },
  }

  const store = mockStore(initialState)
  render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  )

  it("should not render AddTodoForm on initial render", () => {
    const addTodoForm = screen.queryByTestId("add-todo-form")
    expect(addTodoForm).toBeNull()
  })

  it("should not render todoItem on the initial render", () => {
    const card = screen.queryByTestId("item-card")
    expect(card).toBeNull()
  })

  it("should render addTodoForm when isAdding is true", () => {
    const initialState = {
      todos: {
        todoItems: [],
        isAdding: true,
      },
    }

    const store = mockStore(initialState)
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    )
    const addTodoForm = screen.queryByTestId("add-todo-form")
    expect(addTodoForm).not.toBeNull()
  })

  it("should render Todo items correctly, when items present", () => {
    const initialState = {
      todos: {
        todoItems: [
          {
            id: 1,
            text: "test todo",
            createdAt: "08.08.23",
            completed: false,
          },
          {
            id: 2,
            text: "test todo",
            createdAt: "08.08.23",
            completed: false,
          },
        ],
        isAdding: false,
      },
    }

    const store = mockStore(initialState)
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    )

    const card = screen.queryAllByTestId("item-card")
    expect(card).not.toBeNull()
  })

  it("should throw an error when todoItems is not provided", () => {
    const initialState = {
      todos: {},
    }
    const store = mockStore(initialState)
    expect(() => {
      render(
        <Provider store={store}>
          <TodoList />
        </Provider>
      )
    }).toThrow()
  })
})

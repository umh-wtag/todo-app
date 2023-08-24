import {
  ADD_TODO,
  IS_ADDING,
  DELETE_TODO,
  MARK_AS_COMPLETED,
} from "redux/actions/actionTypes"

export const initialState = {
  todoItems: [],
  visibilityFiler: "SHOW_ALL",
  isAdding: false,
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const { text , createdAt , completed} = action.payload
      return {
        ...state,
        todoItems: [
          ...state.todoItems,
          {
            text,
            createdAt,
            completed
          },
        ],
      }
    case IS_ADDING:
      const { isAdding } = action.payload
      return {
        ...state,
        isAdding,
      }
    case DELETE_TODO:
      const { deleteText } = action.payload
      const newTodoList = state.todoItems.filter(
        (item) => item.text !== deleteText
      )
      return {
        ...state,
        todoItems: newTodoList,
      }
    case MARK_AS_COMPLETED:
      const { markCompletedText } = action.payload
      const updatedTasks = state.todoItems.map((item) =>
        item.text === markCompletedText ? { ...item, completed: true } : item
      )
      return {
        ...state,
        todoItems: updatedTasks,
      }
    default:
      return state
  }
}

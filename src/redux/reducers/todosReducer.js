import { ADD_TODO, IS_ADDING } from "redux/actions/actionTypes"

export const initialState = {
  todoItems: [],
  visibilityFiler: "SHOW_ALL",
  isAdding: false,
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const { id, text, createdAt, completed } = action.payload
      return {
        ...state,
        todoItems: [
          ...state.todoItems,
          {
            id,
            text,
            createdAt,
            completed,
          },
        ],
      }
    case IS_ADDING:
      const { isAdding } = action.payload
      return {
        ...state,
        isAdding,
      }
    default:
      return state
  }
}

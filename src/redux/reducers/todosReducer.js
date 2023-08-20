import { ADD_TODO, IS_ADDING } from "redux/actions/actionTypes"

export const initialState = {
  todoItems: [],
  visibilityFiler: "SHOW_ALL",
  isAdding: false,
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const { text } = action.payload
      return {
        ...state,
        todoItems: [
          ...state.todoItems,
          {
            text: text,
            createdAt: new Date()
              .toLocaleString("en", {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
              })
              .split(",")[0]
              .split("/")
              .join("."),
            completed: false,
          },
        ],
      }
    case IS_ADDING:
      const { val } = action.payload
      return {
        ...state,
        isAdding: val,
      }
    default:
      return state
  }
}

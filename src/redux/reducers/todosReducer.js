import { ADD_TODO, IS_ADDING } from "../actions/actionTypes"

export const initialState = {
  todoItems: [
    {
      text: "Complete initial setup of the todo app",
      completed: true,
    },
  ],
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

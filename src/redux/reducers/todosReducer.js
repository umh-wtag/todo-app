import {
  ADD_TODO,
} from "../actions/actionTypes"

export const initialState = {
  todoItems: [
    {
      text: "Complete initial setup of the todo app",
      completed: true,
    },
  ],
  visibilityFiler: "SHOW_ALL",
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
            completed: false
          }
        ]
      }
    default:
      return state
  }
}

import {
  ADD_TODO,
} from "../actions/actionTypes"

export const initialState = {
  todoItems: [
    {
      text: "Complete initial setup of the todo app",
      completed: true,
      createdAt: new Date(),
    },
  ],
  visibilityFiler: "SHOW_ALL",
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const { text, createdAt } = action.payload
      return {
        ...state,
        todoItems: [
          ...state.todoItems,
          {
            text: text,
            createdAt: createdAt,
            completed: false
          }
        ]
      }
    default:
      return state
  }
}

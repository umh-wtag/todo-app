export const initialState = {
  todosItems: [
    { text: "Eat", completed: true },
    { text: "Sleep", completed: false },
  ],
  visibilityFiler: "SHOW_ALL",
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

export const initialState = {
  todoItems: [
    {
      text: "Complete initial setup of the todo app",
      completed: true,
      createdAt: new Date(),
    },
    {
      text: "Complete initial setup of the todo app",
      completed: true,
      createdAt: new Date(),
    },
    {
      text: "Complete initial setup of the todo app",
      completed: true,
      createdAt: new Date(),
    },
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
    default:
      return state
  }
}

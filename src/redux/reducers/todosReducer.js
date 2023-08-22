import { ADD_TODO, IS_ADDING, DELETE_TODO } from "redux/actions/actionTypes"
import { formDate } from "utils/formDate"
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
            createdAt: formDate(new Date()),
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
    case DELETE_TODO:
      const { deleteText } = action.payload
      const newTodoList = state.todoItems.filter(
        (item) => item.text !== deleteText
      )
      return {
        ...state,
        todoItems: newTodoList,
      }
    default:
      return state
  }
}

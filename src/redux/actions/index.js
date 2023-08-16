import {
  ADD_TODO,
} from "./actionTypes"

export const AddNewTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: {
      text: todo,
    }
  }
}

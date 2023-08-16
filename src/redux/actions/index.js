import { ADD_TODO, IS_ADDING } from "./actionTypes"

export const AddNewTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: {
      text: todo,
    },
  }
}

export const IsAdding = (value) => {
  return {
    type: IS_ADDING,
    payload: {
      val: value,
    },
  }
}

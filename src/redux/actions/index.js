import { ADD_TODO, IS_ADDING } from "redux/actions/actionTypes"

export const addNewTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: {
      text: todo,
    },
  }
}

export const isAdding = (value) => {
  return {
    type: IS_ADDING,
    payload: {
      val: value,
    },
  }
}

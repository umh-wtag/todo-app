import { ADD_TODO, IS_ADDING } from "redux/actions/actionTypes"
import { formDate } from "utils/formDate"

export const addNewTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: {
      text: todo,
      createdAt: formDate(new Date()),
      completed: false,
    },
  }
}

export const isAdding = (value) => {
  return {
    type: IS_ADDING,
    payload: {
      isAdding: value,
    },
  }
}

import { v4 as uuid } from "uuid"
import { ADD_TODO, IS_ADDING } from "redux/actions/actionTypes"
import { formatedDate } from "utils/formatedDate"

export const addNewTodo = (todo) => {
  
  return {
    type: ADD_TODO,
    payload: {
      id: uuid(),
      text: todo,
      createdAt: formatedDate(new Date()),
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

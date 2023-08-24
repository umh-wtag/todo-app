import { ADD_TODO, IS_ADDING, DELETE_TODO } from "redux/actions/actionTypes"
import { formatedDate } from "utils/formatedDate"


export const addNewTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: {
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

export const deleteTodo = (todo) => {
  return {
    type: DELETE_TODO,
    payload: {
      deleteText: todo,
    },
  }
}

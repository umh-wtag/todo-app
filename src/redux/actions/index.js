import {
  ADD_TODO,
  IS_ADDING,
  DELETE_TODO,
  MARK_COMPLETED,
} from "redux/actions/actionTypes"
import { formDate } from "utils/formatedDate"

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
      val: value,
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

export const markCompleted = (todo) => {
  return {
    type: MARK_COMPLETED,
    payload: {
      markCompletedText: todo,
    },
  }
}

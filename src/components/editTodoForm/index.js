import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { isEditing, updateTodo } from "redux/actions"
import ImageButton from "components/buttons/imageButton"
import { customSanitize } from "utils/sanitizeInput"
import {
  DELETE_BUTTON_ALT,
  IMAGE_PATHS,
  ADD_TODO_INPUT_PLACEHOLDER,
  ADD_TODO_INPUT_NAME,
} from "utils/constants"
import "components/addTodoForm/form.scss"

function EditTodoForm({ todo }) {
  const dispatch = useDispatch()
  const [taskTitle, setTaskTile] = useState(todo.text)
  const [isInputFieldEmpty, setIsInputFieldEmpty] = useState(false)

  function handleEditTodo(event) {
    event.preventDefault()
    if (taskTitle.trim() === "") {
      setTaskTile("")
      setIsInputFieldEmpty(true)
    }
    const satitizedText = customSanitize(taskTitle)
    if (satitizedText !== "") {
      dispatch(updateTodo(todo, customSanitize(taskTitle)))
      setTaskTile("")
      dispatch(isEditing(false))
    } else {
      setTaskTile("")
      setIsInputFieldEmpty(true)
    }
  }

  function handleChange(event) {
    setTaskTile(event.target.value)
  }

  function dispatchDelete() {
    dispatch(isEditing(todo, false))
  }

  return (
    <form className="todo-form__container" onSubmit={handleEditTodo}>
      <textarea
        className="todo-form__container__textarea"
        name={ADD_TODO_INPUT_NAME}
        placeholder={ADD_TODO_INPUT_PLACEHOLDER}
        value={taskTitle}
        onChange={handleChange}
      />

      <div className="todo-form__container__actions">
        <button>Update task</button>
        <ImageButton
          icon={IMAGE_PATHS.DELETE}
          buttonAltText={DELETE_BUTTON_ALT}
          onClick={dispatchDelete}
        />
        {isInputFieldEmpty && (
          <p className="todo-form__container__actions--error">
            You must add a valid task!
          </p>
        )}
      </div>
    </form>
  )
}

export default EditTodoForm

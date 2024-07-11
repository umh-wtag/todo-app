import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addNewTodo, isAdding } from "redux/actions"
import ImageButton from "components/buttons/imageButton"
import { customSanitize } from "utils/sanitizeInput"
import { DELETE_BUTTON_ALT, IMAGE_PATHS } from "utils/constants"
import "components/addTodoForm/form.scss"

function AddTodoForm() {
  const dispatch = useDispatch()
  const [taskTitle, setTaskTile] = useState("")
  const [isInputFieldEmpty, setIsInputFieldEmpty] = useState(false)

  function handleAddTodo(event) {
    event.preventDefault()
    if (taskTitle.trim() === "") {
      setTaskTile("")
      setIsInputFieldEmpty(true)
      return
    }

    const satitizedText = customSanitize(taskTitle)
    if (satitizedText !== "") {
      dispatch(addNewTodo(customSanitize(taskTitle)))
      setTaskTile("")
      dispatch(isAdding(false))
    } else {
      setTaskTile("")
      setIsInputFieldEmpty(true)
    }
  }

  return (
    <form className="todo-form__container" onSubmit={handleAddTodo}>
      <textarea
        className="todo-form__container__textarea"
        name="body"
        placeholder="Add Todo"
        value={taskTitle}
        onChange={(e) => setTaskTile(e.target.value)}
      />

      <div className="todo-form__container__actions">
        <button>Add Task</button>
        <ImageButton
          icon={IMAGE_PATHS.DELETE}
          buttonAltText={DELETE_BUTTON_ALT}
          onClick={() => dispatch(isAdding(false))}
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

export default AddTodoForm

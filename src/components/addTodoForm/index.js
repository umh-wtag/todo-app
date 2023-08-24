import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addNewTodo, isAdding } from "redux/actions"
import ImageButton from "components/buttons/imageButton"
import "components/addTodoForm/form.scss"
import { customSanitize } from "utils/sanitizeInput"
import { DELETE_BUTTON_ALT, IMAGE_PATHS } from "utils/constants"

function AddTodoForm() {
  const dispatch = useDispatch()
  const [taskTitle, setTaskTile] = useState("")
  const [isInputFieldEmpty, setIsInputFieldEmpty] = useState(false)

  function handleAddTodo(event) {
    event.preventDefault()
    if (taskTitle.trim() === "") {
      setTaskTile("")
      setIsInputFieldEmpty(true)
    } else {
      const satitizedText = customSanitize(taskTitle.trim())
      if (satitizedText !== "") {
        dispatch(addNewTodo(customSanitize(taskTitle.trim())))
        setTaskTile("")
        dispatch(isAdding(false))
      } else {
        setTaskTile("")
        setIsInputFieldEmpty(true)
      }
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
        required
      />

      <div className="todo-form__container__actions">
        <button>Add Task</button>
        <ImageButton
          icon={IMAGE_PATHS.DELETE}
          buttonAltText={DELETE_BUTTON_ALT}
          onClick={() => dispatch(isAdding(false))}
        />
        {isInputFieldEmpty && <p> You must add a task </p>}
      </div>
    </form>
  )
}

export default AddTodoForm

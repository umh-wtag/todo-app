import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { isEditing, updateTodo } from "redux/actions"
import ImageButton from "components/buttons/imageButton"
import { customSanitize } from "utils/sanitizeInput"
import { DELETE_BUTTON_ALT, IMAGE_PATHS } from "utils/constants"
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

  return (
    <form className="todo-form__container" onSubmit={handleEditTodo}>
      <textarea
        className="todo-form__container__textarea"
        name="body"
        placeholder="Add Todo"
        value={taskTitle}
        onChange={(e) => setTaskTile(e.target.value)}
      />

      <div className="todo-form__container__actions">
        <button>Update task</button>
        <ImageButton
          icon={IMAGE_PATHS.DELETE}
          buttonAltText={DELETE_BUTTON_ALT}
          onClick={() => dispatch(isEditing(todo,false))}
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

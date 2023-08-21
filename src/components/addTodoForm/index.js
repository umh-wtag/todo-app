import React, { useState } from "react"
import "components/addTodoForm/form.scss"
import trash from "assets/trash.png"
import { useDispatch } from "react-redux"
import { addNewTodo, isAdding } from "redux/actions"
import { customSanitize } from "utils/sanitizeInput"
import { DELETE_BUTTON_ALT } from "utils/constants"

function AddTodoForm() {
  const dispatch = useDispatch()
  const [task, setTask] = useState(null)
  const [err, setErr] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    if (task.trim() === "") {
      setErr(true)
    } else {
      dispatch(addNewTodo(customSanitize(task.trim())))
      setTask("")
      dispatch(isAdding(false))
    }
  }
  return (
    <main className="form">
      <form className="form__container" onSubmit={handleSubmit}>
        <textarea
          className="form__container__textarea"
          name="body"
          placeholder="Add Todo"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <div className="form__container__actions">
          <button>Add Task</button>
          <img
            src={trash}
            alt={DELETE_BUTTON_ALT}
            className="form__container__actions__img"
          />
          {err && <p> You must add a task </p>}
        </div>
      </form>
    </main>
  )
}

export default AddTodoForm

import React, { useState } from "react"
import "components/addTodoForm/form.css"
import trash from "assets/trash.png"
import { useDispatch } from "react-redux"
import { addNewTodo, isAdding } from "redux/actions"
import { customSanitize } from "utils/sanitizeInput"

function AddTodoForm() {
  const dispatch = useDispatch()
  const [task, setTask] = useState("")
  const [err, setErr] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (task.trim() === "") {
      setErr(true)
    } else {
      dispatch(addNewTodo(customSanitize(task.trim())))
      setTask("")
      dispatch(isAdding(false))
    }
  }
  return (
    <div>
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
          <div className="fomr__container__actions">
            <button>Add Task</button>
            <img src={trash} alt="Delete" className="form__container__actions__img" />
          </div>
        </form>
      </main>
      {err && <p> You must add a task </p>}
    </div>
  )
}

export default AddTodoForm

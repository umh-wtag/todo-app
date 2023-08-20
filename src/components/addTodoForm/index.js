import React, { useState } from "react"
import styles from "components/addTodoForm/form.module.css"
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
      <main className={styles.card}>
        <form className={styles.container} onSubmit={handleSubmit}>
          <textarea
            className={styles.textarea}
            name="body"
            placeholder="Add Todo"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
          />
          <div className={styles.actions}>
            <button>Add Task</button>
            <img src={trash} alt="Delete" className={styles.img} />
          </div>
        </form>
      </main>
      {err && <p> You must add a task </p>}
    </div>
  )
}

export default AddTodoForm

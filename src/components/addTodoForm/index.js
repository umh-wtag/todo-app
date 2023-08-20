import React, { useState } from "react"
import styles from "components/addTodoForm/form.module.css"
import trash from "assets/trash.png"
import { useDispatch } from "react-redux"
import { addNewTodo, isAdding } from "redux/actions"
import { customSanitize } from "utils/sanitizeInput"

function AddTodoForm() {
  const dispatch = useDispatch()
  const [task, setTask] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    console.log(customSanitize(task))
    dispatch(addNewTodo(customSanitize(task)))
    setTask("")
    dispatch(isAdding(false))
  }
  return (
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
  )
}

export default AddTodoForm

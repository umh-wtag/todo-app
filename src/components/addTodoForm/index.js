import React, { useState } from "react"
import styles from "components/addTodoForm/form.module.css"
import trash from "utils/trash.png"
import { useDispatch } from "react-redux"
import { AddNewTodo, IsAdding } from "redux/actions"

function AddTodoForm() {
  const dispatch = useDispatch()
  const [task, setTask] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(AddNewTodo(task))
    setTask("")
    dispatch(IsAdding(false))
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

import React, { useState } from "react"
import styles from "./form.module.css"
import trash from "../../utils/trash.png"
import { useDispatch } from "react-redux"
import { AddNewTodo } from "../../redux/actions"

function Form({ setIasAdding }) {
  const dispatch = useDispatch()
  const [task, setTask] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(AddNewTodo(task))
    setTask("")
    setIasAdding(false)
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
        />
        <div className={styles.actions}>
          <button>Add Task</button>
          <img src={trash} alt="Delete" className={styles.img} />
        </div>
      </form>
    </main>
  )
}

export default Form

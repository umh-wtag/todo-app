import React from "react"
import styles from "components/todoItem/todoItem.module.css"
import pencil from "utils/pencil.png"
import trash from "utils/trash.png"
import check from "utils/checkmark.png"

function TodoItem({ todo }) {
  return (
    <main className={styles.card}>
      <div className={styles.container}>
        <h1>{todo.text}</h1>
        <div className={styles.actions}>
          <img src={check} alt="Done" className={styles.img} />
          <img src={pencil} alt="Edit" className={styles.img} />
          <img src={trash} alt="Delete" className={styles.img} />
        </div>
      </div>
    </main>
  )
}

export default TodoItem

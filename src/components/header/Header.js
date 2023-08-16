import React from "react"
import styles from "./Header.module.css"
import { useDispatch } from "react-redux"
import { IsAdding } from "../../redux/actions"
import { useSelector } from "react-redux"
function Header() {
  const dispatch = useDispatch()

  const selectIsAdding = (state) => state.todos.isAdding
  const toggleIsAdding = useSelector(selectIsAdding)

  return (
    <main>
      <div className={styles.body}>
        <h1>Add Task</h1>
        <div className={styles.buttons}>
          <button onClick={() => dispatch(IsAdding(!toggleIsAdding))}>
            Add Task
          </button>
          <div className={styles.filterButtons}>
            <button>All</button>
            <button>Incomplete</button>
            <button>Complete</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Header

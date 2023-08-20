import React from "react"
import styles from "components/header/header.module.css"
import { useDispatch } from "react-redux"
import { isAdding } from "redux/actions"
import { useSelector } from "react-redux"
import FilterButtons from "components/filterButtons"

function Header() {
  const dispatch = useDispatch()

  const selectIsAdding = (state) => state.todos.isAdding
  const toggleIsAdding = useSelector(selectIsAdding)

  return (
    <main>
      <div className={styles.body}>
        <h1>Add Task</h1>
        <div className={styles.buttons}>
          <button onClick={() => dispatch(isAdding(!toggleIsAdding))}>
            Create
          </button>
          <FilterButtons />
        </div>
      </div>
    </main>
  )
}

export default Header

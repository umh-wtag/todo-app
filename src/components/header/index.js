import React from "react"
import styles from "./Header.module.css"
import { useDispatch } from "react-redux"
import { IsAdding } from "../../redux/actions"
import { useSelector } from "react-redux"
import FilterButtons from "../filterButtons"

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
            Create
          </button>
          <FilterButtons />
        </div>
      </div>
    </main>
  )
}

export default Header

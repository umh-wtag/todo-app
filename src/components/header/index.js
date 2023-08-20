import React from "react"
import  "components/header/header.scss"
import { useDispatch } from "react-redux"
import { isAdding } from "redux/actions"
import { useSelector } from "react-redux"
import FilterButtons from "components/filterButtons"
import Button from "components/button"

function Header() {
  const dispatch = useDispatch()

  const selectIsAdding = (state) => state.todos.isAdding
  const toggleIsAdding = useSelector(selectIsAdding)
  function handleClick(event) {
    dispatch(isAdding(!toggleIsAdding))
  }
  return (
    <main>
      <div className="body">
        <h1>Add Task</h1>
        <div className="body__buttons">
          <Button text="Create" create={handleClick}></Button>
          <FilterButtons />
        </div>
      </div>
    </main>
  )
}

export default Header

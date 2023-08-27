import React, { Fragment } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import FilterButtons from "components/buttons/filterButtons"
import Button from "components/buttons"
import { isAdding } from "redux/actions"
import "components/header/header.scss"

function Header() {
  const selectIsAdding = (state) => state.todos.isAdding
  const toggleIsAdding = useSelector(selectIsAdding)
  const dispatch = useDispatch()

  function handleClick() {
    dispatch(isAdding(!toggleIsAdding))
  }

  return (
    <Fragment>
      <h1>Add Task</h1>
      <div className="buttons">
        <Button text="Create" onClick={handleClick}></Button>
        <FilterButtons />
      </div>
    </Fragment>
  )
}

export default Header

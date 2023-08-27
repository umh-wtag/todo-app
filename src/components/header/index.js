import React, { Fragment } from "react"
import FilterButtons from "components/buttons/filterButtons"
import Button from "components/buttons"
import "components/header/header.scss"

function Header() {
  
  return (
    <Fragment>
      <h1>Add Task</h1>
      <div className="buttons">
        <Button text="Create"></Button>
        <FilterButtons />
      </div>
    </Fragment>
  )
}

export default Header

import React from "react"
import "components/header/header.scss"
import FilterButtons from "components/filterButtons"
import Button from "components/button"

function Header() {
  return (
    <fargment>
      <div>
        <h1>Add Task</h1>
        <div className="buttons">
          <Button text="Create"></Button>
          <FilterButtons />
        </div>
      </div>
    </fargment>
  )
}

export default Header

import React from "react"
import FilterButtons from "components/filterButtons"
import Button from "components/button"
import "components/header/header.scss"


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

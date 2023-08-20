import React from "react"
import "components/filterButtons/filterButton.scss"
import Button from "components/button"

function FilterButtons() {
  return (
    <div className="filterButtons">
      <Button text="All"></Button>
      <Button text="Incomplete"></Button>
      <Button text="Complete"></Button>
    </div>
  )
}
export default FilterButtons

import React from "react"
import Button from "components/buttons"
import "components/filterButtons/filterButton.scss"

function FilterButtons() {
  return (
    <div className="filter-buttons">
      <Button text="All"></Button>
      <Button text="Incomplete"></Button>
      <Button text="Complete"></Button>
    </div>
  )
}
export default FilterButtons

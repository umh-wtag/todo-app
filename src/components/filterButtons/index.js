import React from "react"
import Button from "components/button"
import "components/filterButtons/filterButton.scss"


function FilterButtons() {
  return (
    <fragment className="filterButtons">
      <Button text="All"></Button>
      <Button text="Incomplete"></Button>
      <Button text="Complete"></Button>
    </fragment>
  )
}
export default FilterButtons

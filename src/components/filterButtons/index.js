import React from "react"
import "components/filterButtons/filterButton.css"

function FilterButtons() {
  return (
    <div className="filterButtons">
      <button>All</button>
      <button>Incomplete</button>
      <button>Complete</button>
    </div>
  )
}
export default FilterButtons

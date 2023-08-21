import React from "react"
import "components/navBar/navBar.scss"
import { IMAGE_PATHS } from "utils/constants"

function NavBar() {
  return (
    <fragment className="container">
      <div className="container__logo">
        <img src={IMAGE_PATHS.TODO} alt="vector"/>
        <h1>Todos</h1>
      </div>
      <div>
        <img src={IMAGE_PATHS.SEARCH} alt="search" />
      </div>
    </fragment>
  )
}

export default NavBar

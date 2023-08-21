import React from "react"
import "components/navBar/navBar.scss"
import { IMAGE_PATHS } from "utils/constants"

function NavBar() {
  return (
    <div className="container">
      <div className="container__logo">
        <img src={IMAGE_PATHS.BRAND_LOGO} alt="vector"/>
        <h1>Todos</h1>
      </div>
      <div>
        <img src={IMAGE_PATHS.ICON_SEARCH} alt="search" />
      </div>
    </div>
  )
}

export default NavBar
